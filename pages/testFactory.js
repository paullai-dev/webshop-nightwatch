//  testFactory.js
//  Created by Paul Lai on 19/11/2016.
//  Copyright (c)

'use strict';

module.exports = function (browser) {

	this.validateWebsiteTitle = function() {
		browser
			.waitForElementPresent('head', 1000)
			.assert.title('bol.com | de winkel van ons allemaal')
		return browser;
	};

	this.validateheaderLogo = function() {
		browser
			.waitForElementVisible('.main-logo__link.omniture_main_logo', 4000)
		return browser;
	};

	this.validateheaderFreeShipping = function() {
		browser
			.waitForElementVisible('#navbar_home', 4000)			  
			.assert.containsText('#navbar_home', 'Gratis verzending vanaf 20 euro, gratis retourneren, bezorging waar en wanneer je wilt met')
    	return browser;
	};

	this.validateFreeShipping = function() {
		browser
			.waitForElementVisible('.h-bol-highlite-secundary-color', 4000)
			.assert.containsText('.h-bol-highlite-secundary-color', 'Gratis')
		return browser;
	};

	this.validateFreeShippingImage = function() {
		browser
			.waitForElementVisible("img[alt='Bestel nu en je bestelling wordt gratis verzonden']", 4000)
		return browser;
	};

	this.validateEmptyCart = function() {
		browser
			.waitForElementVisible("div.main > div > h2", 4000)		
			.assert.containsText("div.main > div > h2", 'Er staan geen artikelen in het Winkelwagentje')
		return browser;
	};
  
	this.validatePaidShipping = function() {
		browser
			.waitForElementVisible('#tst_shipping_costs', 4000)			
			.assert.containsText('#tst_shipping_costs', '€ 1,99')
		return browser;
	};

	this.validatePaidShippingImage = function() {
		browser
			.waitForElementVisible("img[alt='Vanaf 20 euro wordt je bestelling gratis verzonden']", 4000)
		return browser;
	};

	this.validateTipFreeShipping = function() {
		browser
			.waitForElementVisible('.h-bol-corporate-primary-color', 4000)
			.assert.containsText('.h-bol-corporate-primary-color', 'Gratis verzonden vanaf 20 euro')
		return browser;
	};

	this.suggestMoreItems = function() {
		browser
			.waitForElementVisible('.h-bottom--m', 4000)		
			.assert.containsText('.h-bottom--m', 'Bestel nog voor € 10,01 extra aan artikelen en je bestelling wordt gratis verzonden.')		
		return browser;
	};
  
	this.validateheaderCartFreeShipping = function() {
		browser
			.waitForElementVisible('#navbar', 4000)				
			.assert.containsText('#navbar', 'Gratis verzending vanaf 20 euro, gratis retourneren, bezorging waar en wanneer je wilt met')
		return browser;
	};
    
};