angular.module('paging', []).directive("paging", function() {
	return {
    	restrict: 'EA',
    	templateUrl: '../template/paging.html',
    	scope: {
			currentNum: '=',
			pageSize: '=',
			lastNum: '=',
			callback: '&'
		},
		link: linkBuild,
    	transclude: false,
    	replace: false,
    	controller: "PagingController"
  	};

	function linkBuild (scope, element, attr) {
		// scope.$watchCollection('[currentNum]', function () {
		// 	pageBuild(scope, element, attr);
		// });
		pageBuild(scope, element, attr);
	}

	function pageBuild (scope, element, attr) {
		scope.itemList = [];
		if (angular.isString(scope.currentNum)) {
			scope.currentNum = parseInt(scope.currentNum);
		}
		var startNum = 1 + (Math.floor(scope.currentNum / (scope.pageSize + 1)) * scope.pageSize);
		var pageCount = Math.ceil(scope.currentNum / scope.pageSize) * scope.pageSize;
		if (pageCount > scope.lastNum) {
			pageCount = scope.lastNum;
		}
		for (var i = startNum; i <= pageCount; i++) {
			scope.itemList.push({
				pageNum: i
			});
		}
	}
});