package pl.edu.pwr.ziwg.logic.productQuantity.restApi;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.pwr.ziwg.dto.productQuantity.GetBestsellersResponse;
import pl.edu.pwr.ziwg.logic.productQuantity.api.ProductQuantityAdapter;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "*"})
@RequestMapping(value ="/api/product_quantity")
public class ProductQuantityController {

    private final ProductQuantityAdapter productQuantityAdapter;

    public ProductQuantityController(ProductQuantityAdapter productQuantityAdapter) {
        this.productQuantityAdapter = productQuantityAdapter;
    }

    @GetMapping("/bestsellers")
    public ResponseEntity<GetBestsellersResponse> getBestsellers() {
        var products = productQuantityAdapter.getBestsellers();
        var resp = new GetBestsellersResponse(products);
        return ResponseEntity.ok(resp);
    }

}
