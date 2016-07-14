/**
 * Created by abdulateefjeffery on 7/8/16.
 */
angular.module('cosmic.controllers').controller('FeedCtrl', function($scope, $ionicActionSheet) {

    // if(!$rootScope.isSessionActive){
    //     $rootScope.hide();
    //     $rootScope.notify("Oops something went wrong!! Please try again later");
    //     $rootScope.changeRoute("#/app/login");
    // }
    // $rootScope.$on('fetchAll', function(){
    //         console.log($rootScope.getToken());
    //
    //         API.getAll($rootScope.getToken())
    //             .then(function success(response) {
    //                     data = response.data;
    //                     //$scope.audio = new Audio();
    //
    //                     $scope.list = [];
    //                     len = data.length;
    //                     for(var i = 0; i < len; i++){
    //                         $scope.list.push(data[i]);
    //                     }
    //                     MPlaylist.store('playlist', $scope.list);
    //
    //
    //                     if(len == 0){
    //                         $scope.noData = true;
    //                     }else{
    //                         $scope.noData = false;
    //                     }
    //                 },
    //                 function error(response) {
    //                     var status = response.status;
    //                     var headers = response.headers;
    //                     var config = response.config;
    //                     console.log(response);
    //                     $rootScope.hide();
    //                     $rootScope.notify("Oops something went wrong!! Please try again later");
    //                     $rootScope.changeRoute("#/app/login");
    //                 });
    //     }
    //
    // );
    // $rootScope.$broadcast('fetchAll');
    //
    // $scope.markCompleted = function (id) {
    //     $rootScope.show("Please wait... Updating List");
    //     API.putItem(id, {
    //         isCompleted: true
    //     }, $rootScope.getToken())
    //         .success(function (data, status, headers, config) {
    //             $rootScope.hide();
    //             $rootScope.doRefresh(1);
    //         }).error(function (data, status, headers, config) {
    //         $rootScope.hide();
    //         $rootScope.notify("Oops something went wrong!! Please try again later");
    //         $rootScope.changeRoute("#/app/login");
    //     });
    // };
    //
    //
    //
    // $scope.deleteItem = function (id) {
    //     $rootScope.show("Please wait... Deleting from List");
    //     API.deleteItem(id, $rootScope.getToken())
    //         .success(function (data, status, headers, config) {
    //             $rootScope.hide();
    //             $rootScope.doRefresh(1);
    //         }).error(function (data, status, headers, config) {
    //         $rootScope.hide();
    //         $rootScope.notify("Oops something went wrong!! Please try again later");
    //     });
    // };


    $scope.showActionsheet = function(){

        $ionicActionSheet.show({
            titleText: '',
            buttons: [
                { text: '<i class="icon ion-plus"></i> Add to...'},
                { text: '<i class="icon ion-ios-cloud-download"></i> Download'},
                { text: '<i class="icon ion-thumbsup"></i> Like'},
                { text: '<i class="icon ion-share"></i> Share'},
                { text: '<i class="icon ion-chatbox-working"></i> Comment'}
            ],
//            destructiveText: 'Delete',
            cancelText: 'Cancel',
            cancel: function(){
                console.log('CANCELLED');
//            },
//            buttonClicked: function(index){
//                console.log('DESTRUCT');
//                return true;
//            },
//            destructiveButtonClicked: function(){
//                console.log('DESTRUCTION');
//                return true;
            }
        });

    };

});