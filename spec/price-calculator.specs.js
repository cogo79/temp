describe('price calculator', function(){
	
	it('should calc price right', function(){
		var types = priceCalculator.validValues();
        var userType = types.userType.normal;
        var productType = types.productType.newProduct;
		var price = 1;
		var publishedDate = new Date();

		var expected = 16;
		var actual = priceCalculator.calculatePrice(userType, productType, price, publishedDate);
		expect(expected).to.equal(actual);
	});

});