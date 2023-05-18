package pl.edu.pwr.ziwg.logic.productQuantity.api;

import org.springframework.stereotype.Component;
import pl.edu.pwr.ziwg.dto.product.ProductDisplayInformation;

import java.util.List;

@Component
public interface ProductQuantityAdapter {
    List<ProductDisplayInformation> getBestsellers();
}
