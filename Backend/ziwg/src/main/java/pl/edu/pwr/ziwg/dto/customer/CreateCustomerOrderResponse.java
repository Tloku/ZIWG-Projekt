package pl.edu.pwr.ziwg.dto.customer;

public class CreateCustomerOrderResponse {

    private Long id;

    public CreateCustomerOrderResponse(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
