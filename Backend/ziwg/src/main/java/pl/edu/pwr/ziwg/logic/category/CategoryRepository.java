package pl.edu.pwr.ziwg.logic.category;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.edu.pwr.ziwg.models.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
}
