package pl.edu.pwr.ziwg.securityService;

public enum RequestURIs {
    CUSTOMER_ORDER_CREATE("/api/customer_order/authorize/create"),
    ;

    private final String requestURI;
    RequestURIs(String requestURI) {
        this.requestURI = requestURI;
    }

    public String getRequestURI() {
        return requestURI;
    }

    public static RequestURIs getEnumKeyByString(String code){
        for(RequestURIs e : RequestURIs.values()){
            if(e.requestURI.equals(code)) return e;
        }
        return null;
    }
}
