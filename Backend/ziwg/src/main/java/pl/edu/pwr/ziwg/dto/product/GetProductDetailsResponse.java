package pl.edu.pwr.ziwg.dto.product;

import pl.edu.pwr.ziwg.models.Product;

public class GetProductDetailsResponse {

    private Product product;

    public GetProductDetailsResponse(Product product) {
        this.product = product;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
