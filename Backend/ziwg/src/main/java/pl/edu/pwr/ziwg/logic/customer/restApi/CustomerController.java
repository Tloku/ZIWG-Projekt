package pl.edu.pwr.ziwg.logic.customer.restApi;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "*"})
@RequestMapping(value ="/api/customer")
public class CustomerController {
}
