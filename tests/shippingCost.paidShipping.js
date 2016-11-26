//  shippingCost.paidShipping.js
//  Created by Paul Lai on 19/11/2016.
//  Copyright (c)

'use strict';
	 
module.exports = {
	'@disabled': false, // This will prevent the test from being executed if set to 'true'.
	'@tags': ['paid-shipping'], // This will is used to specify functional area or specific piece of feature to execute.
		
	'Bol.com - orders under EUR 20,00 on Normal items' : function (browser) {
		browser
			.page.pageFactory().goToHomepage()

			.page.testFactory().validateWebsiteTitle()
		  	.page.testFactory().validateheaderLogo()
			.page.testFactory().validateheaderFreeShipping()

			.page.pageFactory().searchPaidShippingItem()
			.page.pageFactory().openPaidShippingItem()
			.page.pageFactory().addToCart()

			.page.testFactory().suggestMoreItems()

			.page.pageFactory().goToCheckout()

			.page.testFactory().validateheaderCartFreeShipping()
			.page.testFactory().validatePaidShipping()
			.page.testFactory().validatePaidShippingImage()
			.page.testFactory().validateTipFreeShipping()

			.page.pageFactory().removeItem()

			.page.testFactory().validateEmptyCart()
					
			.end();	  
		}
		
};