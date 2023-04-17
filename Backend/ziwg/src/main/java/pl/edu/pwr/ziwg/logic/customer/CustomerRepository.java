package pl.edu.pwr.ziwg.logic.customer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.edu.pwr.ziwg.models.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

}
