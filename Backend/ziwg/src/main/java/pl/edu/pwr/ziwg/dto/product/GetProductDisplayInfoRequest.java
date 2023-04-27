package pl.edu.pwr.ziwg.dto.product;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetProductDisplayInfoRequest {

    @JsonProperty("categoryName")
    private String categoryName;

    public String getCategoryName() {
        return categoryName;
    }

    public GetProductDisplayInfoRequest() {
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public GetProductDisplayInfoRequest(String categoryName) {
        this.categoryName = categoryName;
    }
}
