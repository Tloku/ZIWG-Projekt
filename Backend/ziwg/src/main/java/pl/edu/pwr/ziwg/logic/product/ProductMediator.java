package pl.edu.pwr.ziwg.logic.product;


import org.springframework.stereotype.Component;
import pl.edu.pwr.ziwg.dto.product.ProductDisplayInformation;
import pl.edu.pwr.ziwg.exceptions.NullIdException;
import pl.edu.pwr.ziwg.logic.category.exceptions.CategoryNullException;
import pl.edu.pwr.ziwg.logic.product.api.ProductAdapter;
import pl.edu.pwr.ziwg.models.Category;
import pl.edu.pwr.ziwg.models.Product;

import java.util.List;

@Component
class ProductMediator implements ProductAdapter {

    private final ProductRepository productRepository;
    private final ProductTranslator productTranslator;
    ProductMediator(ProductRepository productRepository, ProductTranslator productTranslator) {
        this.productRepository = productRepository;
        this.productTranslator = productTranslator;
    }

    @Override
    public List<ProductDisplayInformation> getProductsDisplayInfo(Category category) throws CategoryNullException {
        if (category == null) {
            throw new CategoryNullException();
        }
        var products = productRepository.getProductsByCategory(category);
        return productTranslator.toDisplayInfo(products);
    }

    @Override
    public Product getProductDetails(Long id) throws NullIdException {
        if (id == null) {
            throw new NullIdException();
        }
        return productRepository.getProductById(id);
    }

}





















