package pl.edu.pwr.ziwg.logic.productImage.restApi;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.pwr.ziwg.logic.productImage.api.ProductImageAdapter;
import pl.edu.pwr.ziwg.models.ProductImage;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "*"})
@RequestMapping(value ="/api/product_image")
public class ProductImageController {

    private final ProductImageAdapter productImageAdapter;

    public ProductImageController(ProductImageAdapter productImageAdapter) {
        this.productImageAdapter = productImageAdapter;
    }

    @GetMapping("/all")
    public ResponseEntity<List<ProductImage>> getAll() {
        var images = productImageAdapter.getAll();
        return ResponseEntity.ok(images);
    }
}
