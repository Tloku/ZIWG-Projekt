package pl.edu.pwr.ziwg.scheduled;


import net.minidev.json.JSONArray;
import net.minidev.json.JSONObject;
import net.minidev.json.parser.JSONParser;
import net.minidev.json.parser.ParseException;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import pl.edu.pwr.ziwg.config.KeycloakProvider;
import pl.edu.pwr.ziwg.logic.customer.CustomerRepository;
import pl.edu.pwr.ziwg.models.Customer;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class KeycloakUsersHandlerScheduler {

    private final KeycloakProvider keycloakProvider;
    private final CustomerRepository customerRepository;

    public KeycloakUsersHandlerScheduler(KeycloakProvider keycloakProvider, CustomerRepository customerRepository) {
        this.keycloakProvider = keycloakProvider;
        this.customerRepository = customerRepository;
    }


    @Scheduled(cron = "0 * * ? * *")
    @Transactional
    @Modifying
    @Async
    public void saveDistinctCustomers() {
        String response = keycloakProvider.getUsers();
        var jsonArray = parseResponseToJSONArray(response);
        var customers = getCustomersFromJSONArray(jsonArray);
        var toSaveCustomers = getDistinctCustomers(customers);
        customerRepository.saveAll(toSaveCustomers);
    }

    private List<Customer> getDistinctCustomers(List<Customer> customers) {
        List<String> fetchedCustomersLogin = customerRepository.getLogins();

        return customers.stream()
                .filter(customer -> !fetchedCustomersLogin.contains(customer.getLogin()))
                .collect(Collectors.toList());
    }

    private JSONArray parseResponseToJSONArray(String response) {
        JSONParser parser = new JSONParser();
        JSONArray json;
        try {
            json = (JSONArray) parser.parse(response);
        } catch (ParseException e) {
            throw new RuntimeException(e); //TODO zmienić na lepszą klasę Exception
        }
        return json;
    }

    private List<Customer> getCustomersFromJSONArray(JSONArray jsonArray) {
        JSONParser parser = new JSONParser();
        List<Customer> customers = new ArrayList<>();

        for (Object o : jsonArray) {
            JSONObject user;
            try {
                user = (JSONObject) parser.parse(o.toString());
            } catch (ParseException e) {
                throw new RuntimeException(e); //TODO zmienić na lepszą klasę Exception
            }

            if (user.isEmpty()) {
                continue;
            }
            customers.add(parseJSONObjectToCustomer(user));
        }
        return customers;
    }

    private Customer parseJSONObjectToCustomer(JSONObject userObj) {
        Customer customer = new Customer();
        customer.setName((String) userObj.get("firstName"));
        customer.setLastName((String) userObj.get("lastName"));
        customer.setEmail((String) userObj.get("email"));
        customer.setLogin((String) userObj.get("username"));
        return customer;
    }

}
