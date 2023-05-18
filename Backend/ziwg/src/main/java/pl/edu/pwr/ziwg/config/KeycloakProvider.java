package pl.edu.pwr.ziwg.config;

import net.minidev.json.JSONArray;
import net.minidev.json.JSONObject;
import net.minidev.json.parser.JSONParser;
import net.minidev.json.parser.ParseException;
import org.keycloak.admin.client.Keycloak;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.*;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import pl.edu.pwr.ziwg.models.Customer;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Configuration
public class KeycloakProvider {

    @Autowired
    private RestTemplate restTemplate;

    @Value("${keycloak.realm}")
    private String realm;

    @Value("${keycloak.auth-server-url}")
    private String authServerUrl;

    @Value("${keycloak.resource}")
    private String clientId;

    @Value("${keycloak.credentials.secret}")
    private String clientSecret;

    private static Keycloak keycloak = null;


    public KeycloakProvider() {
    }

    public String getAccessToken() {
        String tokenUrl = authServerUrl + "realms/" + realm + "/protocol/openid-connect/token";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        // Set request body parameters
        MultiValueMap<String, String> requestBody = new LinkedMultiValueMap<>();
        requestBody.add("grant_type", "client_credentials");
        requestBody.add("client_id", clientId);
        requestBody.add("client_secret", clientSecret);

        HttpEntity<MultiValueMap<String, String>> requestEntity = new HttpEntity<>(requestBody, headers);

        // Send the token request
        ResponseEntity<Map> responseEntity = restTemplate.exchange(tokenUrl, HttpMethod.POST, requestEntity, Map.class);

        // Retrieve the access token from the response
        Map<String, Object> responseMap = responseEntity.getBody();
        String accessToken = (String) responseMap.get("access_token");

        return accessToken;
    }

    public String getUsers() {
        String usersUrl = authServerUrl + "/admin/realms/" + realm + "/users";

        // Set request headers
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + getAccessToken());
        headers.setContentType(MediaType.APPLICATION_JSON);

        // Make the API call to get users
        return restTemplate.exchange(usersUrl, HttpMethod.GET, new HttpEntity<>(headers), String.class).getBody();
    }


    public static Keycloak getKeycloak() {
        return keycloak;
    }

    public static void setKeycloak(Keycloak keycloak) {
        KeycloakProvider.keycloak = keycloak;
    }
}
