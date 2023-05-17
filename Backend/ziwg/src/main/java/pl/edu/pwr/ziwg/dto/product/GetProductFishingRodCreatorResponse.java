package pl.edu.pwr.ziwg.dto.product;

import java.util.List;

public class GetProductFishingRodCreatorResponse {

    private List<ProductFishingRodCreatorData> productFishingRodCreatorData;

    public GetProductFishingRodCreatorResponse(List<ProductFishingRodCreatorData> productFishingRodCreatorData) {
        this.productFishingRodCreatorData = productFishingRodCreatorData;
    }

    public GetProductFishingRodCreatorResponse() {
    }

    public List<ProductFishingRodCreatorData> getProductFishingRodCreatorData() {
        return productFishingRodCreatorData;
    }

    public void setProductFishingRodCreatorData(List<ProductFishingRodCreatorData> productFishingRodCreatorData) {
        this.productFishingRodCreatorData = productFishingRodCreatorData;
    }
}
