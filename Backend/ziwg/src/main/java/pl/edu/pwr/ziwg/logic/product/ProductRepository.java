package pl.edu.pwr.ziwg.logic.product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pl.edu.pwr.ziwg.models.Product;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("SELECT p FROM Product p WHERE p.category.name = :categoryName")
    List<Product> getProductsByCategoryName(@Param("categoryName") String categoryName);

    Product getProductById(Long id);
}

