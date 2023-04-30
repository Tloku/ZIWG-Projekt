package pl.edu.pwr.ziwg.logic.customer;


import org.springframework.stereotype.Service;
import pl.edu.pwr.ziwg.dto.customer.CreateCustomerOrderRequest;
import pl.edu.pwr.ziwg.models.Customer;

@Service
class CustomerService {

    Customer validateAndUpdateCustomer(Customer customer, CreateCustomerOrderRequest request) {
        if (!customer.getName().equals(request.getName())) {
            customer.setName(request.getName());
        }

        if (!customer.getLastName().equals(request.getLastName())) {
            customer.setLastName(request.getLastName());
        }

        return customer;
    }

}
