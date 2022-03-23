sap.ui.define([], function () {
    "use strict";

    return {
        /**
         * Rounds the number unit value to 2 digits
         * @public
         * @param {string} sValue the number string to be rounded
         * @returns {string} sValue with 2 digits rounded
         */
        numberUnit : function (sValue) {
            return !sValue ? "" : parseFloat(sValue).toFixed(2);
        },
        formatRowHighlight: function (shipDate) {
           return shipDate < this.today ? "Warning" : "None";
		},
        formatIcon : function( shipDate ){
            return shipDate < this.today ? "sap-icon://status-critical" : " ";
        },
        formatState : function( shipDate ){
            return shipDate < this.today ? "Warning" : "None";
        }

    };

});