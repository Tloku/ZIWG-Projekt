package pl.edu.pwr.ziwg.logic.product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.edu.pwr.ziwg.models.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

}

