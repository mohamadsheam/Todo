var app = angular.module("myApp",[]);

app.controller("formValidationCtrl",["$scope","$http",function($scope,$http){
	$scope.firstName = "";
	$scope.lastName = "";

}]);


app.controller("calCtrl",["$scope","$timeout",function($scope,$timeout){
	$scope.number1 = 0.00;
	$scope.number2 = 0.00;
	$scope.result = 0.00;

	$scope.totalFn = function() {
		var total = 0.00;
		total = $scope.number1 + $scope.number2;
		return total;
	}
	
	$timeout(function () {
        $scope.myHeader = "How are you today?";
    }, 1000);
	
	$scope.names = ["Data Communication","Discrete Mathmematics","Digital Logic Design"];
	

	$scope.count = 0;


	var mySelf = {
		name: "sheam",
		age: 25
	};
	
	
	

}]);



app.controller("todoCtrl",["$scope",function($scope){
	$scope.list = {name:"Sheam",price:10.0};
	$scope.addItem = function(){
		$scope.errortext = "";
        if (!$scope.item) {return;}
        if ($scope.list.indexOf($scope.item) == -1) {
            $scope.list.push($scope.item);
        } else {
            $scope.errortext = "The item is already in your list.";
        }
	}

	$scope.removeItem = function(x){
		$scope.errortext = "";
		$scope.list.splice(x,1)
	}
}]);


