package pl.edu.pwr.ziwg.logic.customer;

import org.springframework.stereotype.Component;
import pl.edu.pwr.ziwg.dto.customer.CreateCustomerOrderRequest;
import pl.edu.pwr.ziwg.logic.customer.api.CustomerAdapter;
import pl.edu.pwr.ziwg.logic.customer.exceptions.CustomerNotFoundException;
import pl.edu.pwr.ziwg.models.Customer;

import javax.transaction.Transactional;
import java.util.Optional;

@Component
class CustomerMediator implements CustomerAdapter {

    private final CustomerRepository customerRepository;
    private final CustomerService customerService;

    public CustomerMediator(CustomerRepository customerRepository, CustomerService customerService) {
        this.customerRepository = customerRepository;
        this.customerService = customerService;
    }

    @Override
    @Transactional
    public Customer validateAndUpdateCustomer(CreateCustomerOrderRequest request) throws CustomerNotFoundException {
        Optional<Customer> maybeCustomer = customerRepository.findCustomerByEmailIgnoreCase(request.getEmail());

        if (maybeCustomer.isEmpty()) {
            throw new CustomerNotFoundException();
        }

        Customer customer = customerService.validateAndUpdateCustomer(maybeCustomer.get(), request);
        return customerRepository.save(customer);
    }
}
