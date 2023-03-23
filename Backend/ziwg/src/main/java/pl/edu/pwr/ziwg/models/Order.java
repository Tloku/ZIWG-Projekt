package main.java.pl.edu.pwr.ziwg.models;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@Entity
@Table
public class Order {

    private Long id;
    private LocalDate orderDate;
    private String price;
    private String additionalInfo;

    @ManyToOne
    @JoinColumn("customerid")
    private Customer customer;
}
