package pl.edu.pwr.ziwg.logic.productImage;

import org.springframework.stereotype.Service;
import pl.edu.pwr.ziwg.models.ProductImage;

import javax.annotation.PostConstruct;
import javax.imageio.ImageIO;
import javax.transaction.Transactional;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.regex.Pattern;

@Service
public class ProductImageService {
    private final ProductImageRepository productImageRepository;

    public ProductImageService(ProductImageRepository productImageRepository) {
        this.productImageRepository = productImageRepository;
    }

    @PostConstruct
    public void addImages() {
        if (productImageRepository.count() > 0) {
            return;
        }
        System.out.println("=======================");
        System.out.println("Add images to database");
        getPathNames().forEach(pathName -> {
            try {
                System.out.println("Adding: " + pathName);
                readDataAndSaveImage(pathName);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        });
    }

    private BufferedImage getImageFromResources(String pathName) {
        InputStream inputStream = getClass().getClassLoader().getResourceAsStream(pathName);
        BufferedImage image;
        if (inputStream == null) {
            return null;
        }
        try {
            image = ImageIO.read(inputStream);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return image;
    }

    public void readDataAndSaveImage(String pathName) throws IOException {
        var image = getImageFromResources(pathName);
        if (image == null) {
            return;
        }

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(image, "png", baos);
        byte[] imageData = baos.toByteArray();
        var name = getImageNameFromPath(pathName);
        saveImage(name, imageData);
    }

    private String getImageNameFromPath(String pathName) {
        return pathName.split(Pattern.quote("\\"))[1];
    }

    @Transactional
    public void saveImage(String name, byte[] data) {
        ProductImage productImage = new ProductImage();
        productImage.setName(name);
        productImage.setImageData(data);
        productImageRepository.save(productImage);
    }

    private List<String> getPathNames() {
        String path = "product-images";
        return List.of(
                path + "\\wedka_savage_gear_sgs2_boat_game.png",
                path + "\\wedka_mikado_bixlite_fast_spin.png",
                path + "\\wedka_dragon_proGUIDE_X.png",
                path + "\\wedka_dam_yagi_cast.png",
                path + "\\wedka_mikado_bixlite_fast_spin.png",
                path + "\\wedka_savage_gear_sgs2_boat_game.png",
                path + "\\wedka_mikado_bixlite_fast_spin.png",
                path + "\\wedka_dragon_proGUIDE_X.png",
                path + "\\wedka_dam_yagi_cast.png",
                path + "\\wedka_mikado_bixlite_fast_spin.png",
                path + "\\wedka_savage_gear_sgs2_boat_game.png",
                path + "\\wedka_mikado_bixlite_fast_spin.png",
                path + "\\wedka_dragon_proGUIDE_X.png",
                path + "\\wedka_dam_yagi_cast.png",
                path + "\\wedka_mikado_bixlite_fast_spin.png",
                path + "\\wedka_savage_gear_sgs2_boat_game.png",
                path + "\\wedka_mikado_bixlite_fast_spin.png",
                path + "\\wedka_dragon_proGUIDE_X.png",
                path + "\\wedka_dam_yagi_cast.png",
                path + "\\wedka_mikado_bixlite_fast_spin.png",
                path + "\\wedka_savage_gear_sgs2_boat_game.png",
                path + "\\wedka_mikado_bixlite_fast_spin.png",
                path + "\\wedka_dragon_proGUIDE_X.png",
                path + "\\wedka_dam_yagi_cast.png",
                path + "\\wedka_mikado_bixlite_fast_spin.png",
                path + "\\wedka_savage_gear_sgs2_boat_game.png",
                path + "\\wedka_mikado_bixlite_fast_spin.png",
                path + "\\wedka_dragon_proGUIDE_X.png",
                path + "\\wedka_dam_yagi_cast.png",
                path + "\\wedka_mikado_bixlite_fast_spin.png",
                path + "\\wedka_savage_gear_sgs2_boat_game.png",
                path + "\\wedka_mikado_bixlite_fast_spin.png",
                path + "\\wedka_dragon_proGUIDE_X.png",
                path + "\\wedka_dam_yagi_cast.png",
                path + "\\wedka_mikado_bixlite_fast_spin.png",
                path + "\\wedka_savage_gear_sgs2_boat_game.png",
                path + "\\wedka_mikado_bixlite_fast_spin.png",
                path + "\\wedka_dragon_proGUIDE_X.png",
                path + "\\wedka_dam_yagi_cast.png",
                path + "\\wedka_mikado_bixlite_fast_spin.png",
                path + "\\wedka_savage_gear_sgs2_boat_game.png",
                path + "\\wedka_mikado_bixlite_fast_spin.png",
                path + "\\wedka_dragon_proGUIDE_X.png",
                path + "\\wedka_dam_yagi_cast.png",
                path + "\\wedka_mikado_bixlite_fast_spin.png",
                path + "\\wedka_savage_gear_sgs2_boat_game.png",
                path + "\\wedka_mikado_bixlite_fast_spin.png",
                path + "\\wedka_dragon_proGUIDE_X.png",
                path + "\\wedka_dam_yagi_cast.png",
                path + "\\wedka_mikado_bixlite_fast_spin.png"
        );
    }
}

