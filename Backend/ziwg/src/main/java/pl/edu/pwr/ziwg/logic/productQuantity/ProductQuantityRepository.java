package pl.edu.pwr.ziwg.logic.productQuantity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pl.edu.pwr.ziwg.models.Product;
import pl.edu.pwr.ziwg.models.ProductQuantity;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ProductQuantityRepository extends JpaRepository<ProductQuantity, Long> {

    @Query("SELECT p FROM ProductQuantity p WHERE p.customerOrder.orderDate > :weekAgo")
    List<ProductQuantity> getProductQuantitiesByCustomerOrderOrderDateLessThanMonth(@Param("weekAgo") LocalDate weekAgo);

    @Query("SELECT p FROM Product p WHERE p.id in :productIds")
    List<Product> getProductsByIds(@Param("productIds") List<Long> productIds);
}
