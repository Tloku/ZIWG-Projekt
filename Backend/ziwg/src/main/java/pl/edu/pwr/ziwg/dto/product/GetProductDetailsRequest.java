package pl.edu.pwr.ziwg.dto.product;

public class GetProductDetailsRequest {

    private Long id;

    public GetProductDetailsRequest(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
