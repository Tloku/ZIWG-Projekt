package pl.edu.pwr.ziwg.logic.customer;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import pl.edu.pwr.ziwg.dto.customer.CustomerData;
import pl.edu.pwr.ziwg.models.Customer;

@Mapper(componentModel = "spring")
public interface CustomerTranslator {

    Customer INSTANCE = Mappers.getMapper(Customer.class);

    Customer toCustomer(CustomerData customerData);
}
