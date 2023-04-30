package pl.edu.pwr.ziwg.logic.customer.api;

import org.springframework.stereotype.Component;
import pl.edu.pwr.ziwg.dto.customer.CreateCustomerOrderRequest;
import pl.edu.pwr.ziwg.logic.customer.exceptions.CustomerNotFoundException;
import pl.edu.pwr.ziwg.models.Customer;

@Component
public interface CustomerAdapter {

    Customer validateAndUpdateCustomer(CreateCustomerOrderRequest request) throws CustomerNotFoundException;
}
