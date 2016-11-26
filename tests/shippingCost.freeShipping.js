//  shippingCost.freeShipping.js
//  Created by Paul Lai on 19/11/2016.
//  Copyright (c)

'use strict';
	 
module.exports = {
	'@disabled': false, // This will prevent the test from being executed if set to 'true'.
	'@tags': ['free-shipping'], // This will is used to specify functional area or specific piece of feature to execute.
		
	'Bol.com - orders over EUR 20,00 on Normal items' : function (browser) {
		browser
			.page.pageFactory().goToHomepage()
			
			.page.testFactory().validateWebsiteTitle()
		  	.page.testFactory().validateheaderLogo()
			.page.testFactory().validateheaderFreeShipping()
			
			.page.pageFactory().searchFreeShippingNormalItem()
			.page.pageFactory().openFreeShippingNormalItem()
			.page.pageFactory().addToCart()
			.page.pageFactory().goToCheckout()
			
			.page.testFactory().validateheaderCartFreeShipping()
			.page.testFactory().validateFreeShipping()
			.page.testFactory().validateFreeShippingImage()
			
			.page.pageFactory().removeItem()
			
			.page.testFactory().validateEmptyCart()
		},
		
	'Bol.com - orders exactly EUR 20,00 on Normal items' : function (browser) {
		browser
			.page.pageFactory().goToHomepage()

			.page.testFactory().validateWebsiteTitle()
			.page.testFactory().validateheaderLogo()
			.page.testFactory().validateheaderFreeShipping()

			.page.pageFactory().searchFreeShippingNormalItem2()
			.page.pageFactory().openFreeShippingNormalItem2()
			.page.pageFactory().addToCart()
			.page.pageFactory().goToCheckout()

			.page.testFactory().validateheaderCartFreeShipping()
			.page.testFactory().validateFreeShipping()
			.page.testFactory().validateFreeShippingImage()

			.page.pageFactory().removeItem()
		
			.page.testFactory().validateEmptyCart()
		},

	'Bol.com - orders over EUR 20,00 on Offer items' : function (browser) {
		browser
			.page.pageFactory().goToHomepage()
			
			.page.testFactory().validateWebsiteTitle()
			.page.testFactory().validateheaderLogo()
			.page.testFactory().validateheaderFreeShipping()
			
			.page.pageFactory().searchFreeShippingOfferItem()
			.page.pageFactory().openFreeShippingOfferItem()
			.page.pageFactory().addToCart()
			.page.pageFactory().goToCheckout()

			.page.testFactory().validateheaderCartFreeShipping()
			.page.testFactory().validateFreeShipping()
			.page.testFactory().validateFreeShippingImage()

			.page.pageFactory().removeItem()
		
			.page.testFactory().validateEmptyCart()

			.end();
		}

};