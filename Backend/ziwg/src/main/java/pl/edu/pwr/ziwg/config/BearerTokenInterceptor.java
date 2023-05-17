package pl.edu.pwr.ziwg.config;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nimbusds.jwt.JWT;
import com.nimbusds.jwt.JWTParser;
import net.minidev.json.JSONObject;
import net.minidev.json.JSONValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import pl.edu.pwr.ziwg.securityService.MethodSecurityInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class BearerTokenInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(
            HttpServletRequest request,
            HttpServletResponse response,
            Object handler
    ) throws Exception {
        var requestURI = request.getRequestURI();
        if (!requestURI.contains("authorize")) {
            System.out.println("===Public API Call===");
            return true;
        }
        System.out.println("===Authorized API Call===");

        var token = getTokenFromRequest(request);
        var roles = retrieveRolesFromToken(token);
        return MethodSecurityInterceptor.hasAccess(requestURI, roles);
    }

    private String getTokenFromRequest(HttpServletRequest request) throws Exception {
        String authorizationHeader = request.getHeader("Authorization");
        if (authorizationHeader == null || !authorizationHeader.startsWith("bearer")) {
            throw new Exception("No JWT token found in request headers");
        }
        return authorizationHeader.substring(7);
    }

    private List<String> retrieveRolesFromToken(String token) throws ParseException, JsonProcessingException {
        JWT jwt = JWTParser.parse(token);
        var claimsSet = jwt.getJWTClaimsSet();
        var realmAccess = (JSONObject) JSONValue.parse(new ObjectMapper().writeValueAsString(claimsSet.getClaims().get("realm_access")));
        var rolesObj = realmAccess.get("roles");
        var roles =  parseRolesObjectToList(rolesObj);
        removeKeycloakRoles(roles);
        return roles;
    }

    private void removeKeycloakRoles(List<String> roles) {
        roles.remove("default-roles-react-shop");
        roles.remove("offline_access");
        roles.remove("uma_authorization");
    }

    private List<String> parseRolesObjectToList(Object rolesObj) {
        List<?> roles = new ArrayList<>();
        if (rolesObj.getClass().isArray()) {
            roles = Arrays.asList((Object[]) rolesObj);
        } else if (rolesObj instanceof Collection) {
            roles = new ArrayList<>((Collection<?>) rolesObj);
        }
        return roles.stream()
                .map(Object::toString)
                .collect(Collectors.toList());
    }
}
