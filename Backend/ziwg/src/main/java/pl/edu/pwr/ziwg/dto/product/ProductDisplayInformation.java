package pl.edu.pwr.ziwg.dto.product;

import pl.edu.pwr.ziwg.models.ProductImage;

import java.awt.*;

public class ProductDisplayInformation {
    private Long id;
    private String name;
    private Double price;
    private ProductImage image;

    public ProductDisplayInformation(Long id, String name, Double price, ProductImage image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public ProductImage getImage() {
        return image;
    }

    public void setImage(ProductImage image) {
        this.image = image;
    }
}
