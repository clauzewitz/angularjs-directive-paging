angular.module('paging', []).controller("PagingController", function ($scope) {
 
    initCtrl();

    function initCtrl() {
        $scope.action = action;
    }

    function action (pageNum) {
        $scope.callback({
            pageNum: pageNum
        });
        // $scope.currentNum = pageNum;
    }
});