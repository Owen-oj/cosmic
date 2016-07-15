angular.module('cosmic.controllers').controller('NavigationCtrl', function($rootScope, $scope, $state, $ionicHistory) {


  $scope.go = function(path){
      // console.log('working. Click was Triggered');
      $state.go(path);
      console.log($ionicHistory.viewHistory());
  }

  //Function to go back a step using $ionicHistory
  $scope.goBackAStep = function(){
      console.log('clicked');
      $ionicHistory.goBack(-1);
  }


  $scope.logout = function(){
    $rootScope.logout();
    //console.log($rootScope.getToken());
   // $logout.logout();
  }

//  $rootScope.toggledrag = true;



});
