package pl.edu.pwr.ziwg.logic.customerOrder;

import org.springframework.stereotype.Component;
import pl.edu.pwr.ziwg.dto.customer.CreateCustomerOrderRequest;
import pl.edu.pwr.ziwg.dto.customer.OrderedProductData;
import pl.edu.pwr.ziwg.logic.customer.api.CustomerAdapter;
import pl.edu.pwr.ziwg.logic.customer.exceptions.CustomerNotFoundException;
import pl.edu.pwr.ziwg.logic.customerOrder.api.CustomerOrderAdapter;
import pl.edu.pwr.ziwg.models.Customer;
import pl.edu.pwr.ziwg.models.CustomerOrder;

import java.util.List;
import java.util.stream.Collectors;

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
        CustomerOrder customerOrder = saveNewCustomerOrder(customer, request.getUuid());
        calculateWholePrice(customerOrder, request.getProducts());


        return null;
    }

    private void calculateWholePrice(CustomerOrder customerOrder, List<OrderedProductData> products) {
        String wholePrice = ((Double) products.stream()
                .map(product -> Double.parseDouble(product.getPrice()) * product.getQuantity())
                .mapToDouble(Double::doubleValue)
                .sum())
                .toString();
        customerOrder.setPrice(wholePrice);
    }

    private CustomerOrder saveNewCustomerOrder(Customer customer, String uuid) {
        CustomerOrder customerOrder = new CustomerOrder();
        customerOrder.setUuid(uuid);
        customerOrder.setCustomer(customer);
        return customerOrderRepository.save(customerOrder);
    }
}
