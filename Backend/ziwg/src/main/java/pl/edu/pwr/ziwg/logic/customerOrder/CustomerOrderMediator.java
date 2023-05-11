package pl.edu.pwr.ziwg.logic.customerOrder;

import org.springframework.stereotype.Component;
import pl.edu.pwr.ziwg.dto.customer.CreateCustomerOrderRequest;
import pl.edu.pwr.ziwg.logic.customer.api.CustomerAdapter;
import pl.edu.pwr.ziwg.logic.customer.exceptions.CustomerNotFoundException;
import pl.edu.pwr.ziwg.logic.customerOrder.api.CustomerOrderAdapter;
import pl.edu.pwr.ziwg.models.Customer;

@Component
class CustomerOrderMediator implements CustomerOrderAdapter {

    private final CreateCustomerOrderService createCustomerOrderService;
    private final CustomerAdapter customerAdapter;

    public CustomerOrderMediator(CreateCustomerOrderService createCustomerOrderService, CustomerAdapter customerAdapter) {
        this.customerAdapter = customerAdapter;
        this.createCustomerOrderService = createCustomerOrderService;
    }

    @Override
    public Long createCustomerOrder(CreateCustomerOrderRequest request) throws CustomerNotFoundException {
        Customer customer = customerAdapter.validateAndUpdateCustomer(request);
        return createCustomerOrderService.createCustomerOrder(customer, request);
    }

}
