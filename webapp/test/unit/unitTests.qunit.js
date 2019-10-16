/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"eco/demo/orders/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});