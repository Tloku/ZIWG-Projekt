package main.java.pl.edu.pwr.ziwg.models;

@Getter
@Setter
@AllArgsConstructor
@Entity
@Table
public class ProductQuantity {

    private Long id;

    private Integer quantity;

    @@ManyToOne
    private Product product;

    @ManyToOne
    private Order order;
}
