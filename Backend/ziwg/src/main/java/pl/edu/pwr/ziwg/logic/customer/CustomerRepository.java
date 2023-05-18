package pl.edu.pwr.ziwg.logic.customer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pl.edu.pwr.ziwg.models.Customer;

import java.util.List;
import java.util.Optional;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

    Optional<Customer> findCustomerByEmailIgnoreCase(String email);

    @Query("SELECT c.login FROM Customer c")
    List<String> getLogins();
}
