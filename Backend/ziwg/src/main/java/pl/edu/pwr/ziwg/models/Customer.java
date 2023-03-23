
@Getter
@Setter
@AllArgsConstructor
@Entity
@Table
public class Customer {

    private Long id;

    private String login;
    private String phoneNumber;
    private String email;
    private String password;
    private String city;
    private String country;
    private String address;
}