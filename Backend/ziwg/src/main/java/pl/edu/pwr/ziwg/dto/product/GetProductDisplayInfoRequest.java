package pl.edu.pwr.ziwg.dto.product;

import pl.edu.pwr.ziwg.models.Category;

public class GetProductDisplayInfoRequest {

    private Category category;

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public GetProductDisplayInfoRequest(Category category) {
        this.category = category;
    }
}
