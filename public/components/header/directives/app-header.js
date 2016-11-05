(function() {
	'use strict';

app.directive('appHeader', appHeader);

    function appHeader() {
    	return{
    		templateUrl: 'public/components/header/templates/app-header.html',
    		restrict: 'EA',
			link: function(scope, elem, attr) {}
    	}

    }

})();