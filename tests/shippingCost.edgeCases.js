//  shippingCost.edgeCases.js
//  Created by Paul Lai on 19/11/2016.
//  Copyright (c)

'use strict';
	 
module.exports = {
	'@disabled': false, // This will prevent the test from being executed if set to 'true'.
	'@tags': ['edge-cases'], // This will is used to specify functional area or specific piece of feature to execute.
		
	'Bol.com - orders a little under EUR 20,00' : function (browser) {
		browser
			.page.pageFactory().goToHomepage()

			.page.testFactory().validateWebsiteTitle()
		  	.page.testFactory().validateheaderLogo()
			.page.testFactory().validateheaderFreeShipping()

			.page.pageFactory().searchPaidShippingItem2()
			.page.pageFactory().openPaidShippingItem2()
			.page.pageFactory().addToCart()
			.page.pageFactory().goToCheckout()

			.page.testFactory().validateheaderCartFreeShipping()
			.page.testFactory().validatePaidShipping()
			.page.testFactory().validatePaidShippingImage()
			.page.testFactory().validateTipFreeShipping()

			.page.pageFactory().removeItem()

			.page.testFactory().validateEmptyCart()	
		},
		
	'Bol.com - orders over EUR 20,00 and changing countries' : function (browser) {
		browser
			.page.pageFactory().goToHomepage()

			.page.testFactory().validateWebsiteTitle()
		  	.page.testFactory().validateheaderLogo()
			.page.testFactory().validateheaderFreeShipping()

			.page.pageFactory().searchFreeShippingNormalItem()
			.page.pageFactory().openFreeShippingNormalItem()
			.page.pageFactory().addToCart()
			.page.pageFactory().goToCheckout()

			.page.testFactory().validateFreeShipping()
			.page.testFactory().validateFreeShippingImage()

			.page.pageFactory().openCountryPicker()

			.page.testFactory().validateFreeShipping()
			.page.testFactory().validateFreeShippingImage()

			.page.pageFactory().removeItem()

			.page.testFactory().validateEmptyCart()	
		
			.end();		
		}								
		
};