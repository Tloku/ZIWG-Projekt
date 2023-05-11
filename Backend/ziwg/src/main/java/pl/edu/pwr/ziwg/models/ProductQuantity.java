package pl.edu.pwr.ziwg.models;

import javax.persistence.*;


@Entity
@Table(name = "product_quantity")
public class ProductQuantity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer quantity;

    private String productPriceWhenOrdered;

    @ManyToOne
    @JoinColumn(name = "Productid")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "Orderid")
    private CustomerOrder customerOrder;

    public ProductQuantity(Long id, Integer quantity, String productPriceWhenOrdered, Product product, CustomerOrder customerOrder) {
        this.id = id;
        this.quantity = quantity;
        this.productPriceWhenOrdered = productPriceWhenOrdered;
        this.product = product;
        this.customerOrder = customerOrder;
    }

    public ProductQuantity() {
    }

    public String getProductPriceWhenOrdered() {
        return productPriceWhenOrdered;
    }

    public void setProductPriceWhenOrdered(String productPriceWhenOrdered) {
        this.productPriceWhenOrdered = productPriceWhenOrdered;
    }

    public Long getId() {
        return id;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public CustomerOrder getOrder() {
        return customerOrder;
    }

    public void setOrder(CustomerOrder customerOrder) {
        this.customerOrder = customerOrder;
    }
}
