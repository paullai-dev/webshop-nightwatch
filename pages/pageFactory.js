//  pageFactory.js
//  Created by Paul Lai on 19/11/2016.
//  Copyright (c)

'use strict';

module.exports = function (browser) {

	this.goToHomepage = function() {
		browser
			// .maximizeWindow()
			.url("https://www.bol.com/")
			.waitForElementVisible('body', 1000)
		return browser;
	};

	this.searchFreeShippingNormalItem = function() {
		browser
			.waitForElementVisible('#searchfor', 1000)
			// .setValue('#searchfor', 'Bose QuietComfort 35 Wireless Headphones - Zwart')
			.setValue('#searchfor', 'Sennheiser PXC Over-ear')
			.waitForElementVisible('.search-btn.large--is-visible.small_details.tst_headerSearchButton', 1000)		
			.click('.search-btn.large--is-visible.small_details.tst_headerSearchButton')
			.pause(2000)				
		return browser;
	};
	
	this.openFreeShippingNormalItem = function() {
		browser
			// .waitForElementVisible("img[alt='Bose QuietComfort 35 Wireless Headphones - Zwart']", 4000)
			// .click("img[alt='Bose QuietComfort 35 Wireless Headphones - Zwart']")
			.waitForElementVisible("img[alt='Sennheiser PXC 550 Wireless - Over-ear koptelefoon - Zwart']", 4000)		
			.click("img[alt='Sennheiser PXC 550 Wireless - Over-ear koptelefoon - Zwart']")
			.pause(2000)				
		return browser;
	};

	this.addToCart = function() {
		browser
			.waitForElementVisible('a.btn--buy.btn--lg', 4000)
			.click('a.btn--buy.btn--lg')
			.pause(2000)		
		return browser;
	};

	// this.goToCheckout = function() {
	// 	browser
	// 		.useXpath() // Let's switch to Xpath for a sec
	// 		.pause(4000)
	// 		.click('//div[3]/div/div/div[2]/div/a')
	// 		.useCss() // And we're back to CSS
	// 	return browser;
	// };

	this.goToCheckout = function() {
		browser
			.waitForElementVisible('div.basket-popup.js_narrow_modal_window > div > div.fluid-grid__item > a', 2000)				
			.click('div.basket-popup.js_narrow_modal_window > div > div.fluid-grid__item > a')
			.pause(2000)		
		return browser;
	};
   
	this.removeItem = function() {
		browser
			.waitForElementVisible('#tst_remove_from_basket', 4000)	  
			.click('#tst_remove_from_basket')
			.pause(2000)
		return browser;
	};

	this.searchPaidShippingItem = function() {
		browser
			.waitForElementVisible('#searchfor', 1000)		
			.setValue('#searchfor', 'STABILO BOSS ORIGINAL Markeerstiften - 10 Stuks - Lavendel')
			.waitForElementVisible('.search-btn.large--is-visible.small_details.tst_headerSearchButton', 1000)						
			.click('.search-btn.large--is-visible.small_details.tst_headerSearchButton') 
			.pause(2000)		
		return browser;
	};

	this.openPaidShippingItem = function() {
		browser
			.waitForElementVisible("img[alt='STABILO BOSS ORIGINAL Markeerstiften - 10 Stuks - Lavendel']", 4000)
			.click("img[alt='STABILO BOSS ORIGINAL Markeerstiften - 10 Stuks - Lavendel']")
			.pause(2000)				
		return browser;
	};

	this.searchFreeShippingNormalItem2 = function() {
		browser
			.waitForElementVisible('#searchfor', 1000)				
			.setValue('#searchfor', 'Francine Du Ple Gray Francine Du Ple Gray')
			.waitForElementVisible('.search-btn.large--is-visible.small_details.tst_headerSearchButton', 1000)		
			.click('.search-btn.large--is-visible.small_details.tst_headerSearchButton')
			.pause(2000)		 
		return browser;
	};

	this.openFreeShippingNormalItem2 = function() {
		browser
			.waitForElementVisible("img[alt='Lovers and Tyrants']", 4000)
			.click("img[alt='Lovers and Tyrants']")
			.pause(2000)		
		return browser;
	};

	this.searchFreeShippingOfferItem = function() {
		browser
			.waitForElementVisible('#searchfor', 1000)				
			.setValue('#searchfor', 'Villeroy & Boch Charles Bestekset - 24-delig')
			.waitForElementVisible('.search-btn.large--is-visible.small_details.tst_headerSearchButton', 1000)				
			.click('.search-btn.large--is-visible.small_details.tst_headerSearchButton')
			.pause(2000)		 
		return browser;
	};

	this.openFreeShippingOfferItem = function() {
		browser
			.waitForElementVisible("img[alt='Villeroy & Boch Charles Bestekset - 24-delig']", 4000)
			.click("img[alt='Villeroy & Boch Charles Bestekset - 24-delig']")
			.pause(2000)		
		return browser;
	};

	this.searchPaidShippingItem2 = function() {
		browser
			.waitForElementVisible('#searchfor', 1000)			
			// .setValue('#searchfor', 'Crystal 3D Puzzel - Eiffeltoren')
			.setValue('#searchfor', 'Royal Leerdam Time2Party Drinking Jarsset - 47 cl - 8 stuks')		
			.waitForElementVisible('.search-btn.large--is-visible.small_details.tst_headerSearchButton', 1000)						
			.click('.search-btn.large--is-visible.small_details.tst_headerSearchButton')
			.pause(2000)				 
		return browser;
	};
  
	this.openPaidShippingItem2 = function() {
		browser
			// .waitForElementVisible("img[alt='Crystal 3D Puzzel - Eiffeltoren']", 4000)
			// .click("img[alt='Crystal 3D Puzzel - Eiffeltoren']")
			.waitForElementVisible("img[alt='Royal Leerdam Time2Party Drinking Jarsset - 47 cl - 8 stuks']", 4000)	
			.click("img[alt='Royal Leerdam Time2Party Drinking Jarsset - 47 cl - 8 stuks']")
			.pause(2000)		
		return browser;
	};  

	this.openCountryPicker = function() {
		browser
			.click('.country_select')
			.pause(1000)
			.click('ul.user_links li:nth-child(2)')
			.pause(1000)
		return browser;
	};  
  	
};