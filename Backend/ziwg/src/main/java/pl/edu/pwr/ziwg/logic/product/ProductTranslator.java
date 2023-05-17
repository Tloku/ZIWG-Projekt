package pl.edu.pwr.ziwg.logic.product;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import pl.edu.pwr.ziwg.dto.product.ProductDisplayInformation;
import pl.edu.pwr.ziwg.dto.product.ProductFishingRodCreatorData;
import pl.edu.pwr.ziwg.models.Product;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ProductTranslator {

    ProductTranslator INSTANCE = Mappers.getMapper(ProductTranslator.class);

    List<ProductDisplayInformation> toDisplayInfo(List<Product> products);

    List<ProductFishingRodCreatorData> toFishingRodCreatorData(List<Product> products);
}
