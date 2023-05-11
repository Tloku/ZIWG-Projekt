package pl.edu.pwr.ziwg.dto.customer;

import com.fasterxml.jackson.annotation.JsonProperty;
import pl.edu.pwr.ziwg.models.ProductImage;

public class OrderedProductData {

    @JsonProperty("id")
    private Long id;

    @JsonProperty("image")
    private ProductImage image;

    @JsonProperty("name")
    private String name;

    @JsonProperty("price")
    private String price;

    @JsonProperty("quantity")
    private Integer quantity;

    public OrderedProductData() {
    }

    public OrderedProductData(Long id, ProductImage image, String name, String price, Integer quantity) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    public Long getId() {
        return id;
    }

    public ProductImage getImage() {
        return image;
    }

    public void setImage(ProductImage image) {
        this.image = image;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
