package pl.edu.pwr.ziwg.categoryAdapter.api;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "*"})
@RequestMapping(value ="/api/category")
public class CategoryController {


    @GetMapping("/random")
    @ResponseStatus(HttpStatus.OK)
    @PreAuthorize("hasRole('admin')")
    public ResponseEntity<String> getRandomThing() {
        return ResponseEntity.ok("kamehameha");
    }
}
