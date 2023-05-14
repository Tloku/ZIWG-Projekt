package pl.edu.pwr.ziwg.logic.customer;

import org.springframework.stereotype.Component;
import pl.edu.pwr.ziwg.dto.customer.CreateCustomerOrderRequest;
import pl.edu.pwr.ziwg.dto.customer.CustomerData;
import pl.edu.pwr.ziwg.logic.customer.api.CustomerAdapter;
import pl.edu.pwr.ziwg.logic.customer.exceptions.CustomerNotFoundException;
import pl.edu.pwr.ziwg.models.Customer;

import javax.transaction.Transactional;
import java.util.Optional;

@Component
class CustomerMediator implements CustomerAdapter {

    private final CustomerRepository customerRepository;
    private final CustomerService customerService;
    private final CustomerTranslator customerTranslator;

    public CustomerMediator(CustomerRepository customerRepository, CustomerService customerService, CustomerTranslator customerTranslator) {
        this.customerRepository = customerRepository;
        this.customerService = customerService;
        this.customerTranslator = customerTranslator;
    }

    @Override
    @Transactional
    public Customer validateAndUpdateCustomer(CreateCustomerOrderRequest request) throws CustomerNotFoundException {
        Optional<Customer> maybeCustomer = customerRepository.findCustomerByEmailIgnoreCase(request.getCustomerData().getEmail());

        if (maybeCustomer.isEmpty()) {
            maybeCustomer = createNewCustomer(request.getCustomerData()); // do usunięcia po dodaniu keycloaka i mozliwości zakladania kont uzytkownikow
//            throw new CustomerNotFoundException();
        }

        Customer customer = customerService.validateAndUpdateCustomer(maybeCustomer.get(), request);
        return customerRepository.save(customer);
    }

    private Optional<Customer> createNewCustomer(CustomerData customerData) {
        return Optional.of(customerTranslator.toCustomer(customerData));
    }
}
