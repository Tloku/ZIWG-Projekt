package pl.edu.pwr.ziwg.logic.customerOrder.restApi;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.pwr.ziwg.dto.customer.CreateCustomerOrderRequest;
import pl.edu.pwr.ziwg.dto.customer.CreateCustomerOrderResponse;
import pl.edu.pwr.ziwg.logic.customerOrder.CustomerOrderRepository;
import pl.edu.pwr.ziwg.logic.customerOrder.CustomerOrderTranslator;
import pl.edu.pwr.ziwg.logic.customerOrder.api.CustomerOrderAdapter;
import pl.edu.pwr.ziwg.logic.customerOrder.exceptions.CreateCustomerOrderRequestNullException;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "*"})
@RequestMapping(value ="/api/customer_order")
public class CustomerOrderController {
    private final CustomerOrderAdapter customerOrderAdapter;

    public CustomerOrderController(CustomerOrderAdapter customerOrderAdapter) {
        this.customerOrderAdapter = customerOrderAdapter;
    }


    @PostMapping(value = "/create")
    public ResponseEntity<CreateCustomerOrderResponse> createCustomerOrder(CreateCustomerOrderRequest request) throws CreateCustomerOrderRequestNullException {
        if (request == null) {
            throw new CreateCustomerOrderRequestNullException();
        }
        var isCreated = customerOrderAdapter.createCustomerOrder(request);
        var resp = new CreateCustomerOrderResponse(isCreated);
        return ResponseEntity.ok(resp);
    }


}
