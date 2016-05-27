(function start(priceCalculator) {
    var calculatedPrice = 0;
    var types = priceCalculator.validValues();
    var userType = types.userType.company;
    var productType = types.productType.oldProduct;
    var price = 100;
    var publishedDate = new Date();

    try {
        calculatedPrice = priceCalculator.calculatePrice(userType, productType, price, publishedDate);
    } catch (ex) {
        console.log(ex);
    }

    console.log('Calculated price:', calculatedPrice);
})(priceCalculator);