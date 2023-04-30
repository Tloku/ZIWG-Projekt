package pl.edu.pwr.ziwg.logic.productImage;

import org.springframework.stereotype.Component;
import pl.edu.pwr.ziwg.logic.productImage.api.ProductImageAdapter;
import pl.edu.pwr.ziwg.models.ProductImage;

import java.util.List;

@Component
class ProductImageMediator implements ProductImageAdapter {

    private final ProductImageRepository productImageRepository;

    public ProductImageMediator(ProductImageRepository productImageRepository) {
        this.productImageRepository = productImageRepository;
    }

    @Override
    public List<ProductImage> getAll() {
        return productImageRepository.findAll();
    }
}
