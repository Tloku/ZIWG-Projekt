package pl.edu.pwr.ziwg.dto.productQuantity;

import pl.edu.pwr.ziwg.dto.product.ProductDisplayInformation;

import java.util.List;

public class GetBestsellersResponse {

    private List<ProductDisplayInformation> productsDisplayInformation;

    public GetBestsellersResponse(List<ProductDisplayInformation> productsDisplayInformation) {
        this.productsDisplayInformation = productsDisplayInformation;
    }

    public List<ProductDisplayInformation> getProductsDisplayInformation() {
        return productsDisplayInformation;
    }

    public void setProductsDisplayInformation(List<ProductDisplayInformation> productsDisplayInformation) {
        this.productsDisplayInformation = productsDisplayInformation;
    }
}
