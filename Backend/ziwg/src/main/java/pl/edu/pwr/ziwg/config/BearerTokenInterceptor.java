package pl.edu.pwr.ziwg.config;

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
        if (!request.getRequestURI().contains("authorize")) {
            System.out.println("ELO");
            return true;
        }

        String authorizationHeader = request.getHeader("Authorization");
        if (authorizationHeader == null || !authorizationHeader.startsWith("bearer")) {
            throw new Exception("No JWT token found in request headers");
        }
        String token = authorizationHeader.substring(7);
        JwtAuthenticationToken jwtToken = new JwtAuthenticationToken(Jwt.withTokenValue(token).build());
        System.out.println(jwtToken.isAuthenticated());
        System.out.println(jwtToken.getTokenAttributes());

        return jwtToken.isAuthenticated();
    }


}
