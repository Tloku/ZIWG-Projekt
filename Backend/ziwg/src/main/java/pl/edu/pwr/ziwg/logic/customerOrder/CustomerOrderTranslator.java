package pl.edu.pwr.ziwg.logic.customerOrder;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface CustomerOrderTranslator {

    CustomerOrderTranslator INSTANCE = Mappers.getMapper(CustomerOrderTranslator.class);

}
