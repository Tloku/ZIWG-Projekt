package pl.edu.pwr.ziwg.dto.customer;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class CreateCustomerOrderRequest {

    @JsonProperty("customer")
    private CustomerData customerData;

    @JsonProperty("products")
    private List<OrderedProductData> products;

    @JsonProperty("uuid")
    private String uuid;

    //TODO BRAKUJE TU POLA ADDITIONAL_INFO


    public CreateCustomerOrderRequest() {
    }

    public CreateCustomerOrderRequest(CustomerData customerData, List<OrderedProductData> products, String uuid) {
        this.customerData = customerData;
        this.products = products;
        this.uuid = uuid;
    }

    public CustomerData getCustomerData() {
        return customerData;
    }

    public void setCustomerData(CustomerData customerData) {
        this.customerData = customerData;
    }

    public List<OrderedProductData> getProducts() {
        return products;
    }

    public void setProducts(List<OrderedProductData> products) {
        this.products = products;
    }

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }
}

