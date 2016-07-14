/**
 * Created by abdulateefjeffery on 7/8/16.
 */
angular.module('cosmic.controllers').controller('AppCtrl', function($scope, $ionicModal, $timeout,  $ionicActionSheet) {


    $scope.changeRoute = function(url, forceReload) {
        $scope = $scope || angular.element(document).scope();
        if(forceReload || $scope.$$phase) { // that's right TWO dollar signs: $$phase
            window.location = url;
        } else {
            $location.path(url);
            $scope.$apply();
        }
    };

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