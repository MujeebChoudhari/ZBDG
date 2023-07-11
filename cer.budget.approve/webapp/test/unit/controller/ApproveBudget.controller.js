/*global QUnit*/

sap.ui.define([
	"gbwfcerbudgetapprove/cer.budget.approve/controller/ApproveBudget.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ApproveBudget Controller");

	QUnit.test("I should test the ApproveBudget controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
