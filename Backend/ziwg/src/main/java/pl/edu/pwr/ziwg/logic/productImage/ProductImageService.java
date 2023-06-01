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
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductImageService {
    private final ProductImageRepository productImageRepository;

    public ProductImageService(ProductImageRepository productImageRepository) {
        this.productImageRepository = productImageRepository;
    }

    @PostConstruct
    public void addImageDataToExistingImages() {
        System.out.println("-=ADD IMAGES DATA TO DATABASE=-");

        var productImagesWithoutData = getProductImagesWithoutImageData();
        productImagesWithoutData.forEach(this::addImageDataToImage);
    }

    public void addImageDataToImage(ProductImage image) {
        var pathName = getPathNameByImageName(image.getName());
        if (pathName == null) {
            return;
        }
        var bufferedImage = getImageFromResources(pathName);
        if (bufferedImage == null) {
            System.out.println("BUFFERED IMAGE NULL");
            return;
        }
        var imageData = getImageDataFromBufferedImage(bufferedImage);
        saveImage(image, imageData);
    }


    private List<ProductImage> getProductImagesWithoutImageData() {
        return productImageRepository.findProductImageByImageDataIsNull();
    }

    private BufferedImage getImageFromResources(String pathName) {
        InputStream inputStream = getClass().getResourceAsStream(pathName);
        BufferedImage image;
        if (inputStream == null) {
            System.out.println("INPUT STREAM NULL");
            return null;
        }
        try {
            image = ImageIO.read(inputStream);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return image;
    }

    private byte[] getImageDataFromBufferedImage(BufferedImage bufferedImage) {
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        try {
            ImageIO.write(bufferedImage, "png", baos);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return baos.toByteArray();
    }

    private String getPathNameByImageName(String name) {
        return getPathNames().stream()
                .filter(path -> path.contains(name))
                .findFirst()
                .orElse(null);
    }

    @Transactional
    public void saveImage(ProductImage image, byte[] data) {
        image.setImageData(data);
        System.out.println("Adding image: " + image.getName() + ", data: " +  Arrays.toString(data).substring(0, 10));
        productImageRepository.save(image);
    }

    private List<String> getPathNames() {
        String path = "/product-images";
        return List.of(
                path + "/wedka_savage_gear_sgs2_boat_game.png",
                path + "/wedka_mikado_bixlite_fast_spin.png",
                path + "/wedka_dragon_proGUIDE_X.png",
                path + "/wedka_dam_yagi_cast.png",
                path + "/wedka_jaxon_red_wind.png",
                path + "/wedka_jaxon_grey_stream.png",
                path + "/wedka_jaxon_float_academy_tele_travel_mino.png",
                path + "/wedka_mikado_bixlite_spin.png",
                path + "/wedka_mikado_intro_carp_II.png",
                path + "/wedka_mikado_sasori_feeder.png",
                path + "/wedka_tenesa_tele_travel_jaxon.png"
        );
    }
}

