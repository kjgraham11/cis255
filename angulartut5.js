var app5 = angular.module('app5', []);

app5.controller('gListCtrl', function($scope) {

  $scope.groceries= [
    {item: "Tomatoes", purchased: false},
    {item: "Potatoes", purchased: false},
    {item: "Bread", purchased: false},
    {item: "Hummus", purchased: false}
  ];

  // Receives the new item entered in the input box and puts
  // it on the end of the array
  $scope.addItem = function(newItem) {

    // Check that the input box has a value
    if(!(newItem === undefined || newItem === "")){
      $scope.groceries.push({
        item: newItem, purchased: false
      });
      $scope.missingNewItemError = "";
    } else {

      // Show an error if no item was entered
      $scope.missingNewItemError = "Please Enter an Item";
    }
  };
});

app5.controller('userCtrl', function($scope) {

  $scope.user= [{
    fName: "Derek",
    lName: "Banas",
	phone: "5555555555",
    email: "dbanas@gmail.com",
	zip: "48710"
  }];
  
  $scope.getZipData = function(){
	  zipSearch($scope.userInfo.zip)
  }
  
  function zipSearch(zipCode){
	  $scope.zipData ="Not Found";
	  for(var i = 0; i< $scope.zipCode.length; i++){
		  if ( $scope.zipCode[i].zip === zipCode){
			  $scope.zipData = $scope.zipCode[i].city + " , " + $scope.zipCode[i].state;
			  $scope.userInfo.city = $scope.zipCode[i].city;
			  $scope.userInfo.state = $scope.zipCode[i].state;
		  }
	  }
  }
  
  $scope.zipCode=[
	{"zip": "48710", "city": "university center", "state": "MI"},
	{"zip": "60609", "city": "chicago", "state": "IL"},
	{"zip": "48603", "city": "saginaw", "state": "MI"},
	{"zip": "99501", "city": "anchorage", "state": "AK"}]


  $scope.saveUser = function(userInfo) {
    if($scope.userForm.$valid) {
      $scope.user.push({
        fName: userInfo.fName, lName: userInfo.lName, phone: userInfo.phone, email: userInfo.email, zip: userInfo.zip, city: userInfo.city, state: userInfo.state  
      });
      console.log('User Saved');
    } else {
      console.log('Error : Couldn\'t Save User');
    }
 }

});