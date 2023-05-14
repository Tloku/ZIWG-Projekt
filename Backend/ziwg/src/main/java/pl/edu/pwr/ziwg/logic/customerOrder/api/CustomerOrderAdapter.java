package pl.edu.pwr.ziwg.logic.customerOrder.api;

import org.springframework.stereotype.Component;
import pl.edu.pwr.ziwg.dto.customer.CreateCustomerOrderRequest;
import pl.edu.pwr.ziwg.logic.customer.exceptions.CustomerNotFoundException;

@Component
public interface CustomerOrderAdapter {
    Long createCustomerOrder(CreateCustomerOrderRequest request) throws CustomerNotFoundException;
}
