package pl.edu.pwr.ziwg.dto.customer;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CustomerData {

    @JsonProperty("isPrivatePerson")
    private Boolean isPrivatePerson;

    @JsonProperty("name")
    private String name;

    @JsonProperty("lastName")
    private String lastName;

    @JsonProperty("address")
    private String address;

    @JsonProperty("postalCode")
    private String postalCode;

    @JsonProperty("city")
    private String city;

    @JsonProperty("country")
    private String country;

    @JsonProperty("phoneNumber")
    private String phoneNumber;

    @JsonProperty("email")
    private String email;

    @JsonProperty("statuteAccepted")
    private Boolean statute;

    @JsonProperty("emailNewsletter")
    private Boolean emailNewsletter;

    @JsonProperty("smsNewsletter")
    private Boolean smsNewsletter;

    public CustomerData() {
    }

    public CustomerData(Boolean isPrivatePerson, String name, String lastName, String address, String postalCode, String city, String country, String phoneNumber, String email, Boolean statute, Boolean emailNewsletter, Boolean smsNewsletter) {
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
}
