package pl.edu.pwr.ziwg.categoryAdapter.api;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value ="/api/category")
public class    CategoryController {


    @GetMapping("/random")
    public ResponseEntity<String> getRandomThing() {
        return ResponseEntity.ok("kamehameha");
    }
}
