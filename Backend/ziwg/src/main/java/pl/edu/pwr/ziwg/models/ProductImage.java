package pl.edu.pwr.ziwg.models;


import javax.persistence.*;
@Entity
@Table
public class ProductImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private byte[] imageData;

    public ProductImage(){}

    public ProductImage(Long id, String name, byte[] imageData) {
        this.id = id;
        this.name = name;
        this.imageData = imageData;
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

    public byte[] getImageData() {
        return imageData;
    }

    public void setImageData(byte[] imageData) {
        this.imageData = imageData;
    }
}
