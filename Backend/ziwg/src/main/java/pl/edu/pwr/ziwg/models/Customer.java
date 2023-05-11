package pl.edu.pwr.ziwg.models;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "customer")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String login;
    private String phoneNumber;
    private String email;
    private String password;
    private String city;
    private String country;
    private String address;
    private String name;
    private String lastName;

    private Boolean statute;

    private Boolean emailNewsletter;

    private Boolean smsNewsletter;
    @OneToMany(mappedBy = "customer")
    private List<CustomerOrder> customerOrders;

    public Customer(Long id, String login, String phoneNumber, String email, String password, String city, String country, String address, String name, String lastName) {
        this.id = id;
        this.login = login;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.password = password;
        this.city = city;
        this.country = country;
        this.address = address;
        this.name = name;
        this.lastName = lastName;
    }

    public Customer() {
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public List<CustomerOrder> getOrders() {
        return customerOrders;
    }

    public void setOrders(List<CustomerOrder> customerOrders) {
        this.customerOrders = customerOrders;
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

    public List<CustomerOrder> getCustomerOrders() {
        return customerOrders;
    }

    public void setCustomerOrders(List<CustomerOrder> customerOrders) {
        this.customerOrders = customerOrders;
    }

}