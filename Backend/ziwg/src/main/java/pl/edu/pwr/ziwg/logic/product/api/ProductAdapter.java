package pl.edu.pwr.ziwg.logic.product.api;

import org.springframework.stereotype.Component;
import pl.edu.pwr.ziwg.dto.product.ProductDisplayInformation;
import pl.edu.pwr.ziwg.dto.product.ProductFishingRodCreatorData;
import pl.edu.pwr.ziwg.exceptions.NullIdException;
import pl.edu.pwr.ziwg.logic.category.exceptions.CategoryNullException;
import pl.edu.pwr.ziwg.models.Product;

import java.util.List;

@Component
public interface ProductAdapter {
    List<ProductDisplayInformation> getProductsDisplayInfo(String categoryName) throws CategoryNullException;

    Product getProductDetails(Long id) throws NullIdException;

    List<ProductFishingRodCreatorData> getProductFishingRodCreator(String categoryName) throws CategoryNullException;
}
