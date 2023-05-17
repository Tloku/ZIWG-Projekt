package pl.edu.pwr.ziwg.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nimbusds.jwt.JWT;
import com.nimbusds.jwt.JWTParser;
import net.minidev.json.JSONObject;
import net.minidev.json.JSONValue;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class BearerTokenInterceptor implements HandlerInterceptor {


    @Override
    public boolean preHandle(
            HttpServletRequest request,
            HttpServletResponse response,
            Object handler
    ) throws Exception {
        System.out.println(request.getHeader("Authorization"));
        if (!request.getRequestURI().contains("authorize")) {
            System.out.println("===Public API Call===");
            return true;
        }
        System.out.println("===Public API Call===");
        String authorizationHeader = request.getHeader("Authorization");
        if (authorizationHeader == null || !authorizationHeader.startsWith("bearer")) {
            throw new Exception("No JWT token found in request headers");
        }
        String token = authorizationHeader.substring(7);
        JWT jwt = JWTParser.parse(token);
        var claimsSet = jwt.getJWTClaimsSet();
        var realmAccess = (JSONObject) JSONValue.parse(new ObjectMapper().writeValueAsString(claimsSet.getClaims().get("realm_access")));
        var roles = realmAccess.get("roles");
        return true;
    }


}
