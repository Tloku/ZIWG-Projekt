package pl.edu.pwr.ziwg.models;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "customer_order")
public class CustomerOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String uuid;
    private LocalDate orderDate;
    private String price;
    private String additionalInfo;

    @OneToMany(mappedBy = "customerOrder")
    private List<ProductQuantity> productQuantities;

    @ManyToOne
    @JoinColumn(name = "Customerid")
    private Customer customer;

    public CustomerOrder(Long id, LocalDate orderDate, String uuid, String price, String additionalInfo, List<ProductQuantity> productQuantities, Customer customer) {
        this.id = id;
        this.orderDate = orderDate;
        this.uuid = uuid;
        this.price = price;
        this.additionalInfo = additionalInfo;
        this.productQuantities = productQuantities;
        this.customer = customer;
    }

    public CustomerOrder() {}

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(LocalDate orderDate) {
        this.orderDate = orderDate;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getAdditionalInfo() {
        return additionalInfo;
    }

    public void setAdditionalInfo(String additionalInfo) {
        this.additionalInfo = additionalInfo;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public List<ProductQuantity> getProductQuantities() {
        return productQuantities;
    }

    public void setProductQuantities(List<ProductQuantity> productQuantities) {
        this.productQuantities = productQuantities;
    }
}
