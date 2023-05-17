package pl.edu.pwr.ziwg.securityService;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class MethodSecurityInterceptor {

    static Map<RequestURIs, List<Roles>> URIAccessedByRoles = new HashMap<>() {{
        put(RequestURIs.CUSTOMER_ORDER_CREATE, Roles.allRoles());
    }};


    public static boolean hasAccess(String requestURI, List<String> roles) {
        var allowedRoles = URIAccessedByRoles.get(requestURI);

        if (allowedRoles == null) {
            throw new NullPointerException("Requested URI is not correct"); //TODO zmienić na konkretną klasę wyjątków
        }

        return roles.stream()
                .anyMatch(allowedRoles::contains);
    }



}
