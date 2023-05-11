package pl.edu.pwr.ziwg.logic.customerOrder;

import org.springframework.stereotype.Component;
import pl.edu.pwr.ziwg.dto.customer.CreateCustomerOrderRequest;
import pl.edu.pwr.ziwg.dto.customer.OrderedProductData;
import pl.edu.pwr.ziwg.logic.product.ProductRepository;
import pl.edu.pwr.ziwg.logic.productQuantity.ProductQuantityRepository;
import pl.edu.pwr.ziwg.models.Customer;
import pl.edu.pwr.ziwg.models.CustomerOrder;
import pl.edu.pwr.ziwg.models.Product;
import pl.edu.pwr.ziwg.models.ProductQuantity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Component
class CreateCustomerOrderService {
    private final CustomerOrderRepository customerOrderRepository;
    private final CustomerOrderTranslator customerOrderTranslator;
    private final ProductRepository productRepository;
    private final ProductQuantityRepository productQuantityRepository;

    private final Double SHIPPMENT_PRICE = 17.0;

    public CreateCustomerOrderService(CustomerOrderRepository customerOrderRepository, CustomerOrderTranslator translator, ProductRepository productRepository, ProductQuantityRepository productQuantityRepository) {
        this.customerOrderRepository = customerOrderRepository;
        this.customerOrderTranslator = translator;
        this.productRepository = productRepository;
        this.productQuantityRepository = productQuantityRepository;
    }

    public Long createCustomerOrder(Customer customer, CreateCustomerOrderRequest request) {
        CustomerOrder newCustomerOrder = saveNewCustomerOrder(customer, request.getUuid());
        calculateCustomerOrderWholePrice(newCustomerOrder, request.getProducts());
        createProductQuantities(newCustomerOrder, request);
        newCustomerOrder.setOrderDate(LocalDate.now());
        return customerOrderRepository.save(newCustomerOrder).getId();
    }

    private void createProductQuantities(CustomerOrder newCustomerOrder, CreateCustomerOrderRequest request) {
        List<ProductQuantity> productQuantities = new ArrayList<>();

        for (var product : request.getProducts()) {
            var productQuantity = new ProductQuantity();
            Optional<Product> maybeProduct = productRepository.findById(product.getId());
            if (maybeProduct.isEmpty()) {
                // throw exception
            }
            productQuantity.setProduct(maybeProduct.get());
            productQuantity.setQuantity(product.getQuantity());
            productQuantity.setOrder(newCustomerOrder);
            productQuantity.setProductPriceWhenOrdered(product.getPrice());
            productQuantity = productQuantityRepository.save(productQuantity);
            productQuantities.add(productQuantity);
        }
        newCustomerOrder.setProductQuantities(productQuantities);
    }

    private void calculateCustomerOrderWholePrice(CustomerOrder customerOrder, List<OrderedProductData> products) {
        Double productPrice = ((Double) products.stream()
                .map(product -> Double.parseDouble(product.getPrice()) * product.getQuantity())
                .mapToDouble(Double::doubleValue)
                .sum());
        Double wholePrice = productPrice + SHIPPMENT_PRICE;
        customerOrder.setPrice(wholePrice.toString());
    }

    private CustomerOrder saveNewCustomerOrder(Customer customer, String uuid) {
        CustomerOrder customerOrder = new CustomerOrder();
        customerOrder.setUuid(uuid);
        customerOrder.setCustomer(customer);
        return customerOrderRepository.save(customerOrder);
    }

}
