package pl.edu.pwr.ziwg.logic.productQuantity;


import org.springframework.stereotype.Component;
import pl.edu.pwr.ziwg.dto.product.ProductDisplayInformation;
import pl.edu.pwr.ziwg.logic.product.ProductTranslator;
import pl.edu.pwr.ziwg.logic.productQuantity.api.ProductQuantityAdapter;
import pl.edu.pwr.ziwg.models.ProductQuantity;

import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

@Component
class ProductQuantityMediator implements ProductQuantityAdapter {

    private final ProductQuantityRepository productQuantityRepository;

    private final ProductTranslator productTranslator;

    public ProductQuantityMediator(ProductQuantityRepository productQuantityRepository, ProductTranslator productTranslator) {
        this.productQuantityRepository = productQuantityRepository;
        this.productTranslator = productTranslator;
    }

    @Override
    public List<ProductDisplayInformation> getBestsellers() {
        var productsQuantitiesFromLast7Days = productQuantityRepository
                .getProductQuantitiesByCustomerOrderOrderDateLessThanMonth(LocalDate.now().minusDays(7));
       var numberOfTimesGivenProductAppears = getNumberOfTimesGivenProductAppears(productsQuantitiesFromLast7Days);
       var productIds = getIdsOfFiveMostSellingProducts(numberOfTimesGivenProductAppears);
       var products = productQuantityRepository.getProductsByIds(productIds);
        return productTranslator.toDisplayInfo(products);
    }


    private Map<Long, Integer> getNumberOfTimesGivenProductAppears(List<ProductQuantity> productsQuantitiesFromLast7Days) {
        Map<Long, Integer> numberOfTimesGivenProductAppears = new HashMap<>();
        for (ProductQuantity productsQuantities : productsQuantitiesFromLast7Days) {
            Long id = productsQuantities.getProduct().getId();
            Integer numberOfTimesProductAppears = numberOfTimesGivenProductAppears.get(id);
            if (numberOfTimesProductAppears == null) {
                numberOfTimesProductAppears = 0;
            }
            numberOfTimesGivenProductAppears.put(id, ++numberOfTimesProductAppears);
        }
        return numberOfTimesGivenProductAppears;
    }

    private List<Long> getIdsOfFiveMostSellingProducts(Map<Long, Integer> numberOfTimesGivenProductAppears) {
        var sorted = numberOfTimesGivenProductAppears.entrySet()
                .stream().sorted(Map.Entry.comparingByValue((a,b) -> b-a))
                .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue, (e1, e2) -> e2, LinkedHashMap::new));

        return sorted.keySet().stream()
                .limit(5)
                .collect(Collectors.toList());
    }
}
