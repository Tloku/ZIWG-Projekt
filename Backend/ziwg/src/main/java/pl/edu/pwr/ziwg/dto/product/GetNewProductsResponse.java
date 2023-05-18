package pl.edu.pwr.ziwg.dto.product;

import java.util.List;

public class GetNewProductsResponse {
    private List<ProductDisplayInformation> productsDisplayInformation;

    public GetNewProductsResponse(List<ProductDisplayInformation> productsDisplayInformation) {
        this.productsDisplayInformation = productsDisplayInformation;
    }

    public List<ProductDisplayInformation> getProductsDisplayInformation() {
        return productsDisplayInformation;
    }

    public void setProductsDisplayInformation(List<ProductDisplayInformation> productsDisplayInformation) {
        this.productsDisplayInformation = productsDisplayInformation;
    }
}
