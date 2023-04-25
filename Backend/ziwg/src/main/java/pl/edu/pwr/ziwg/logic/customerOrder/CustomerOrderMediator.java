package pl.edu.pwr.ziwg.logic.customerOrder;

import org.springframework.stereotype.Component;
import pl.edu.pwr.ziwg.dto.customer.CreateCustomerOrderRequest;
import pl.edu.pwr.ziwg.logic.customer.api.CustomerAdapter;
import pl.edu.pwr.ziwg.logic.customer.exceptions.CustomerNotFoundException;
import pl.edu.pwr.ziwg.logic.customerOrder.api.CustomerOrderAdapter;
import pl.edu.pwr.ziwg.models.Customer;

@Component
class CustomerOrderMediator implements CustomerOrderAdapter {

    private final CustomerOrderRepository customerOrderRepository;
    private final CustomerOrderTranslator customerOrderTranslator;
    private final CustomerAdapter customerAdapter;

    public CustomerOrderMediator(CustomerOrderRepository customerOrderRepository, CustomerOrderTranslator customerOrderTranslator, CustomerAdapter customerAdapter) {
        this.customerOrderRepository = customerOrderRepository;
        this.customerOrderTranslator = customerOrderTranslator;
        this.customerAdapter = customerAdapter;
    }

    @Override
    public Boolean createCustomerOrder(CreateCustomerOrderRequest request) throws CustomerNotFoundException {
        Customer customer = customerAdapter.validateAndUpdateCustomer(request);


        return null;
    }
}
