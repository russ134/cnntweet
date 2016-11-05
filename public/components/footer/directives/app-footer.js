(function() {
	'use strict';

app.directive('appFooter', appFooter);

    function appFooter() {
    	return{
    		templateUrl: 'public/components/footer/templates/app-footer.html',
    		restrict: 'EA',
			link: function(scope, elem, attr) {}
    	}

    }

})();