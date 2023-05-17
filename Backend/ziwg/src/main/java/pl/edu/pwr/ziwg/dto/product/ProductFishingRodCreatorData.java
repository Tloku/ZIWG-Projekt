package pl.edu.pwr.ziwg.dto.product;

import pl.edu.pwr.ziwg.models.ProductImage;

public class ProductFishingRodCreatorData {

    private Long id;
    private String name;
    private Integer weight;
    private Integer length;
    private Integer width;
    private Integer fullLength;
    private Integer lureMaxWeight;
    private Double price;
    private String type;
    private Integer numberOfSections;
    private Integer numberOfBearings;
    private String reelRatio;
    private Integer spoolCapacity;
    private Integer lineLength;
    private Integer lineDiameter;
    private Integer lineDurability;
    private String floatType;
    private String hookSize;
    private String hookType;
    private Integer numberOfHooksInPackage;
    private String manufacturer;
    private Integer height;
    private ProductImage image;

    public ProductFishingRodCreatorData(Long id, String name, Integer weight, Integer length, Integer width, Integer fullLength, Integer lureMaxWeight, Double price, String type, Integer numberOfSections, Integer numberOfBearings, String reelRatio, Integer spoolCapacity, Integer lineLength, Integer lineDiameter, Integer lineDurability, String floatType, String hookSize, String hookType, Integer numberOfHooksInPackage, String manufacturer, Integer height, ProductImage image) {
        this.id = id;
        this.name = name;
        this.weight = weight;
        this.length = length;
        this.width = width;
        this.fullLength = fullLength;
        this.lureMaxWeight = lureMaxWeight;
        this.price = price;
        this.type = type;
        this.numberOfSections = numberOfSections;
        this.numberOfBearings = numberOfBearings;
        this.reelRatio = reelRatio;
        this.spoolCapacity = spoolCapacity;
        this.lineLength = lineLength;
        this.lineDiameter = lineDiameter;
        this.lineDurability = lineDurability;
        this.floatType = floatType;
        this.hookSize = hookSize;
        this.hookType = hookType;
        this.numberOfHooksInPackage = numberOfHooksInPackage;
        this.manufacturer = manufacturer;
        this.height = height;
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

    public Integer getWeight() {
        return weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    public Integer getLength() {
        return length;
    }

    public void setLength(Integer length) {
        this.length = length;
    }

    public Integer getWidth() {
        return width;
    }

    public void setWidth(Integer width) {
        this.width = width;
    }

    public Integer getFullLength() {
        return fullLength;
    }

    public void setFullLength(Integer fullLength) {
        this.fullLength = fullLength;
    }

    public Integer getLureMaxWeight() {
        return lureMaxWeight;
    }

    public void setLureMaxWeight(Integer lureMaxWeight) {
        this.lureMaxWeight = lureMaxWeight;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getNumberOfSections() {
        return numberOfSections;
    }

    public void setNumberOfSections(Integer numberOfSections) {
        this.numberOfSections = numberOfSections;
    }

    public Integer getNumberOfBearings() {
        return numberOfBearings;
    }

    public void setNumberOfBearings(Integer numberOfBearings) {
        this.numberOfBearings = numberOfBearings;
    }

    public String getReelRatio() {
        return reelRatio;
    }

    public void setReelRatio(String reelRatio) {
        this.reelRatio = reelRatio;
    }

    public Integer getSpoolCapacity() {
        return spoolCapacity;
    }

    public void setSpoolCapacity(Integer spoolCapacity) {
        this.spoolCapacity = spoolCapacity;
    }

    public Integer getLineLength() {
        return lineLength;
    }

    public void setLineLength(Integer lineLength) {
        this.lineLength = lineLength;
    }

    public Integer getLineDiameter() {
        return lineDiameter;
    }

    public void setLineDiameter(Integer lineDiameter) {
        this.lineDiameter = lineDiameter;
    }

    public Integer getLineDurability() {
        return lineDurability;
    }

    public void setLineDurability(Integer lineDurability) {
        this.lineDurability = lineDurability;
    }

    public String getFloatType() {
        return floatType;
    }

    public void setFloatType(String floatType) {
        this.floatType = floatType;
    }

    public String getHookSize() {
        return hookSize;
    }

    public void setHookSize(String hookSize) {
        this.hookSize = hookSize;
    }

    public String getHookType() {
        return hookType;
    }

    public void setHookType(String hookType) {
        this.hookType = hookType;
    }

    public Integer getNumberOfHooksInPackage() {
        return numberOfHooksInPackage;
    }

    public void setNumberOfHooksInPackage(Integer numberOfHooksInPackage) {
        this.numberOfHooksInPackage = numberOfHooksInPackage;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    public Integer getHeight() {
        return height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    public ProductImage getImage() {
        return image;
    }

    public void setImage(ProductImage image) {
        this.image = image;
    }
}
