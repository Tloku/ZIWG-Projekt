package pl.edu.pwr.ziwg.securityService;

import java.util.List;

public enum Roles {
    USER("user"),
    ADMIN("admin"),
    ;

    private final String role;
    Roles(String role) {
        this.role = role;
    }

    public String getRole() {
        return role;
    }

    static List<Roles> allRoles() {
        return List.of(USER, ADMIN);
    }

    static List<Roles> user() {
        return List.of(USER);
    }

    static List<Roles> admin() {
        return List.of(ADMIN);
    }
}
