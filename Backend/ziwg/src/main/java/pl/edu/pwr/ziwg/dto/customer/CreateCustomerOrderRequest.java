package pl.edu.pwr.ziwg.dto.customer;

import pl.edu.pwr.ziwg.models.ProductQuantity;

import java.util.List;

public class CreateCustomerOrderRequest {

    private Boolean isPrivatePerson;
    private String name;
    private String lastName;
    private String address;
    private String postalCode;
    private String city;
    private String country;
    private String phoneNumber;
    private String email;
    private Boolean statute;
    private Boolean emailNewsletter;
    private Boolean smsNewsletter;
    private List<ProductQuantity> productsQuantity;
    private Double orderPrice;

    public CreateCustomerOrderRequest(Boolean isPrivatePerson, String name, String lastName, String address, String postalCode, String city, String country, String phoneNumber, String email, Boolean statute, Boolean emailNewsletter, Boolean smsNewsletter, List<ProductQuantity> productsQuantity, Double orderPrice) {
        this.isPrivatePerson = isPrivatePerson;
        this.name = name;
        this.lastName = lastName;
        this.address = address;
        this.postalCode = postalCode;
        this.city = city;
        this.country = country;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.statute = statute;
        this.emailNewsletter = emailNewsletter;
        this.smsNewsletter = smsNewsletter;
        this.productsQuantity = productsQuantity;
        this.orderPrice = orderPrice;
    }

    public Boolean getPrivatePerson() {
        return isPrivatePerson;
    }

    public void setPrivatePerson(Boolean privatePerson) {
        isPrivatePerson = privatePerson;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Boolean getStatute() {
        return statute;
    }

    public void setStatute(Boolean statute) {
        this.statute = statute;
    }

    public Boolean getEmailNewsletter() {
        return emailNewsletter;
    }

    public void setEmailNewsletter(Boolean emailNewsletter) {
        this.emailNewsletter = emailNewsletter;
    }

    public Boolean getSmsNewsletter() {
        return smsNewsletter;
    }

    public void setSmsNewsletter(Boolean smsNewsletter) {
        this.smsNewsletter = smsNewsletter;
    }

    public List<ProductQuantity> getProductsQuantity() {
        return productsQuantity;
    }

    public void setProductsQuantity(List<ProductQuantity> productsQuantity) {
        this.productsQuantity = productsQuantity;
    }

    public Double getOrderPrice() {
        return orderPrice;
    }

    public void setOrderPrice(Double orderPrice) {
        this.orderPrice = orderPrice;
    }
}

