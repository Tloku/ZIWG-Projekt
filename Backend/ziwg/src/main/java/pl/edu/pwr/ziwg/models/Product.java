package main.java.pl.edu.pwr.ziwg.models;

import main.java.pl.edu.pwr.ziwg.models.Category;


@Getter
@Setter
@AllArgsConstructor
@Entity
@Table
public class Product {

    private Long id;
    private String name;
    private Integer weight;
    private Integer length;
    private Integer width;
    private Integer fullLength;
    private Integer lureMaxWeight;
    private String price;
    private String type;
    private Integer numberOfSections;
    private Boolean isOnDiscount;
    private Float discount;
    private Integer numberOfBearings;
    private Integer reelRatio;
    private Integer spoolCapacity;
    private Integer lineLength;
    private Integer lineDiameter;
    private Integer lineDurability;
    private String floatType;
    private Integer hookSize;
    private String hookType;
    private Integer numberOfHooksInPackage;
    private String manufacturer;
    private String baitPurpose;
    private Integer landingNetDepth;
    private Integer height;
    private Integer landingNetLengthAfterUnfolding;

    @OneToOne()
    private Image image;

    @OneToOne()
    private Category category;

}
