package pl.edu.pwr.ziwg.logic.productQuantity;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.edu.pwr.ziwg.models.ProductQuantity;

public interface ProductQuantityRepository extends JpaRepository<ProductQuantity, Long> {
}
