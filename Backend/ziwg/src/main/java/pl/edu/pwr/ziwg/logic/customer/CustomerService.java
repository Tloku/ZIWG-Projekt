package pl.edu.pwr.ziwg.logic.customer;


import org.springframework.stereotype.Service;
import pl.edu.pwr.ziwg.dto.customer.CreateCustomerOrderRequest;
import pl.edu.pwr.ziwg.dto.customer.CustomerData;
import pl.edu.pwr.ziwg.models.Customer;

@Service
class CustomerService {

    Customer validateAndUpdateCustomer(Customer customer, CreateCustomerOrderRequest request) {
        CustomerData customerFromRequest = request.getCustomerData();

        if (!customer.getName().equals(customerFromRequest.getName())) {
            customer.setName(customerFromRequest.getName());
        }

        if (!customer.getLastName().equals(customerFromRequest.getLastName())) {
            customer.setLastName(customerFromRequest.getLastName());
        }

        return customer;
    }

}
