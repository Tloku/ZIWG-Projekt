package pl.edu.pwr.ziwg.logic.product.restApi;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.edu.pwr.ziwg.dto.product.*;
import pl.edu.pwr.ziwg.exceptions.NullIdException;
import pl.edu.pwr.ziwg.logic.category.exceptions.CategoryNullException;
import pl.edu.pwr.ziwg.logic.product.api.ProductAdapter;
import pl.edu.pwr.ziwg.logic.product.exceptions.GetProductRequestNullException;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "*"})
@RequestMapping(value ="/api/product")
public class ProductController {

    private final ProductAdapter productAdapter;

    public ProductController(ProductAdapter productAdapter) {
        this.productAdapter = productAdapter;
    }

    @PostMapping(value = "/product_display")
    @ResponseBody
    public ResponseEntity<GetProductDisplayInfoResponse> getProductDisplayInfo(@RequestBody GetProductDisplayInfoRequest request) throws GetProductRequestNullException, CategoryNullException {
        if (request == null) {
            throw new GetProductRequestNullException();
        }
        var productsDisplayInfo = productAdapter.getProductsDisplayInfo(request.getCategoryName());
        var resp = new GetProductDisplayInfoResponse(productsDisplayInfo);
        return ResponseEntity.ok(resp);
    }

    @PostMapping(value = "/product_details")
    public ResponseEntity<GetProductDetailsResponse> getProductDetails(@RequestBody GetProductDetailsRequest request) throws GetProductRequestNullException, NullIdException {
        if (request == null) {
            throw new GetProductRequestNullException();
        }
        var product = productAdapter.getProductDetails(request.getId());
        var resp = new GetProductDetailsResponse(product);
        return ResponseEntity.ok(resp);
    }

    @PostMapping(value = "/product/fishing_rod_creator")
    public ResponseEntity<GetProductFishingRodCreatorResponse> getProductFishingRodCreator(@RequestBody GetProductFishingRodCreatorDataRequest request) throws GetProductRequestNullException, CategoryNullException {
        if (request == null) {
            throw new GetProductRequestNullException();
        }
        var productsFishingRodCreatorData = productAdapter.getProductFishingRodCreator(request.getCategoryName());
        var resp = new GetProductFishingRodCreatorResponse(productsFishingRodCreatorData);
        return ResponseEntity.ok(resp);
    }
}
