package pl.edu.pwr.ziwg.dto.customer;

public class CreateCustomerOrderResponse {

    private Boolean isCreated;

    public CreateCustomerOrderResponse(Boolean isCreated) {
        this.isCreated = isCreated;
    }

    public Boolean getCreated() {
        return isCreated;
    }

    public void setCreated(Boolean created) {
        isCreated = created;
    }
}
