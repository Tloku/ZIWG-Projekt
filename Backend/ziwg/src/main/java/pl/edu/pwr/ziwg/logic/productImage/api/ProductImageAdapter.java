package pl.edu.pwr.ziwg.logic.productImage.api;

import org.springframework.stereotype.Component;
import pl.edu.pwr.ziwg.models.ProductImage;

import java.util.List;

@Component
public interface ProductImageAdapter {

    List<ProductImage> getAll();
}
