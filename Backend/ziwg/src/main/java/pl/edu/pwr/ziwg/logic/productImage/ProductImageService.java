package pl.edu.pwr.ziwg.logic.productImage;

import org.springframework.stereotype.Service;
import pl.edu.pwr.ziwg.models.ProductImage;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.List;

@Service
public class ProductImageService {

    private final List<String> pathNames = List.of(
//            "D:\\Studia\\Semestr 8\\Zastosowanie informatyki w gospodarce\\Projekt\\Backend\\ziwg\\product-images\\wedka_savage_gear_sgs2_boat_game.png",
//            "D:\\Studia\\Semestr 8\\Zastosowanie informatyki w gospodarce\\Projekt\\Backend\\ziwg\\product-images\\wedka_mikado_bixlite_fast_spin.png",
//            "D:\\Studia\\Semestr 8\\Zastosowanie informatyki w gospodarce\\Projekt\\Backend\\ziwg\\product-images\\wedka_dragon_proGUIDE_X.png",
//            "D:\\Studia\\Semestr 8\\Zastosowanie informatyki w gospodarce\\Projekt\\Backend\\ziwg\\product-images\\wedka_dam_yagi_cast.png",
//            "D:\\Studia\\Semestr 8\\Zastosowanie informatyki w gospodarce\\Projekt\\Backend\\ziwg\\product-images\\wedka_mikado_bixlite_fast_spin.png",
//            "D:\\Studia\\Semestr 8\\Zastosowanie informatyki w gospodarce\\Projekt\\Backend\\ziwg\\product-images\\wedka_savage_gear_sgs2_boat_game.png",
//            "D:\\Studia\\Semestr 8\\Zastosowanie informatyki w gospodarce\\Projekt\\Backend\\ziwg\\product-images\\wedka_mikado_bixlite_fast_spin.png",
//            "D:\\Studia\\Semestr 8\\Zastosowanie informatyki w gospodarce\\Projekt\\Backend\\ziwg\\product-images\\wedka_dragon_proGUIDE_X.png",
//            "D:\\Studia\\Semestr 8\\Zastosowanie informatyki w gospodarce\\Projekt\\Backend\\ziwg\\product-images\\wedka_dam_yagi_cast.png",
//            "D:\\Studia\\Semestr 8\\Zastosowanie informatyki w gospodarce\\Projekt\\Backend\\ziwg\\product-images\\wedka_mikado_bixlite_fast_spin.png",
//            "D:\\Studia\\Semestr 8\\Zastosowanie informatyki w gospodarce\\Projekt\\Backend\\ziwg\\product-images\\wedka_savage_gear_sgs2_boat_game.png",
//            "D:\\Studia\\Semestr 8\\Zastosowanie informatyki w gospodarce\\Projekt\\Backend\\ziwg\\product-images\\wedka_mikado_bixlite_fast_spin.png",
//            "D:\\Studia\\Semestr 8\\Zastosowanie informatyki w gospodarce\\Projekt\\Backend\\ziwg\\product-images\\wedka_dragon_proGUIDE_X.png",
//            "D:\\Studia\\Semestr 8\\Zastosowanie informatyki w gospodarce\\Projekt\\Backend\\ziwg\\product-images\\wedka_dam_yagi_cast.png",
//            "D:\\Studia\\Semestr 8\\Zastosowanie informatyki w gospodarce\\Projekt\\Backend\\ziwg\\product-images\\wedka_mikado_bixlite_fast_spin.png",
//            "D:\\Studia\\Semestr 8\\Zastosowanie informatyki w gospodarce\\Projekt\\Backend\\ziwg\\product-images\\wedka_savage_gear_sgs2_boat_game.png",
//            "D:\\Studia\\Semestr 8\\Zastosowanie informatyki w gospodarce\\Projekt\\Backend\\ziwg\\product-images\\wedka_mikado_bixlite_fast_spin.png",
//            "D:\\Studia\\Semestr 8\\Zastosowanie informatyki w gospodarce\\Projekt\\Backend\\ziwg\\product-images\\wedka_dragon_proGUIDE_X.png",
//            "D:\\Studia\\Semestr 8\\Zastosowanie informatyki w gospodarce\\Projekt\\Backend\\ziwg\\product-images\\wedka_dam_yagi_cast.png",
//            "D:\\Studia\\Semestr 8\\Zastosowanie informatyki w gospodarce\\Projekt\\Backend\\ziwg\\product-images\\wedka_mikado_bixlite_fast_spin.png",
//            "D:\\Studia\\Semestr 8\\Zastosowanie informatyki w gospodarce\\Projekt\\Backend\\ziwg\\product-images\\wedka_savage_gear_sgs2_boat_game.png",
//            "D:\\Studia\\Semestr 8\\Zastosowanie informatyki w gospodarce\\Projekt\\Backend\\ziwg\\product-images\\wedka_mikado_bixlite_fast_spin.png",
//            "D:\\Studia\\Semestr 8\\Zastosowanie informatyki w gospodarce\\Projekt\\Backend\\ziwg\\product-images\\wedka_dragon_proGUIDE_X.png",
//            "D:\\Studia\\Semestr 8\\Zastosowanie informatyki w gospodarce\\Projekt\\Backend\\ziwg\\product-images\\wedka_dam_yagi_cast.png",
//            "D:\\Studia\\Semestr 8\\Zastosowanie informatyki w gospodarce\\Projekt\\Backend\\ziwg\\product-images\\wedka_mikado_bixlite_fast_spin.png"
    );



    private final ProductImageRepository productImageRepository;

    public ProductImageService(ProductImageRepository productImageRepository) {
        this.productImageRepository = productImageRepository;
    }

    @PostConstruct
    public void addImages() {
        System.out.println("=======================");
        System.out.println("Add images to database");
        pathNames.forEach(pathName -> {
            try {
                System.out.println("Adding: " + pathName);
                readDataAndSaveImage(pathName);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        });
    }

    public void readDataAndSaveImage(String pathName) throws IOException {
        File file = new File(pathName);
        String name = file.getName();
        byte[] data = Files.readAllBytes(file.toPath());
        saveImage(name, data);
    }

    @Transactional
    public void saveImage(String name, byte[] data) {
        ProductImage productImage = new ProductImage();
        productImage.setName(name);
        productImage.setImageData(data);
        productImageRepository.save(productImage);
    }
}
