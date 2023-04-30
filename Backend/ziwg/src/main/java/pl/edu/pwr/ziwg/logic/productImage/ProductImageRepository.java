package pl.edu.pwr.ziwg.logic.productImage;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.edu.pwr.ziwg.models.ProductImage;

public interface ProductImageRepository extends JpaRepository<ProductImage, Long> {
}
