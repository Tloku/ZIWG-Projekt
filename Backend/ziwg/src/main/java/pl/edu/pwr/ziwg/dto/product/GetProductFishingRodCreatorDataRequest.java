package pl.edu.pwr.ziwg.dto.product;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetProductFishingRodCreatorDataRequest {

    @JsonProperty("categoryName")
    private String categoryName;

    public String getCategoryName() {
        return categoryName;
    }

    public GetProductFishingRodCreatorDataRequest() {
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public GetProductFishingRodCreatorDataRequest(String categoryName) {
        this.categoryName = categoryName;
    }

}
