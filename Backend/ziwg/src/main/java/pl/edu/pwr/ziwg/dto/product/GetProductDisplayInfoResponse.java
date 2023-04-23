package pl.edu.pwr.ziwg.dto.product;

import java.util.List;

public class GetProductDisplayInfoResponse {

    private List<ProductDisplayInformation> productsDisplayInformation;

    public GetProductDisplayInfoResponse(List<ProductDisplayInformation> productsDisplayInformation) {
        this.productsDisplayInformation = productsDisplayInformation;
    }

    public List<ProductDisplayInformation> getProductsDisplayInformation() {
        return productsDisplayInformation;
    }

    public void setProductsDisplayInformation(List<ProductDisplayInformation> productsDisplayInformation) {
        this.productsDisplayInformation = productsDisplayInformation;
    }
}
