package main.java.pl.edu.pwr.ziwg.models;

@Getter
@Setter
@AllArgsConstructor
@Entity
@Table
public class Image {

    private Long id;
    private String name;
    private Byte[] imageData;
}
