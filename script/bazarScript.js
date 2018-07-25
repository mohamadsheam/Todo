 var app = angular.module("myApp",[]);

 app.controller("bazarCtrl",["$scope",function($scope){

	$scope.error = "";

	$scope.list = [
		{ itemName:"Potato" , price: 10.00 },
		{ itemName:"Onion" , price: 20.00 },
		{ itemName:"garlic" , price: 30.00 }
	];
	$scope.productList = [];
	
	$scope.addItem = function(){
		if($scope.productList.indexOf($scope.item) < 0){
			var newItem = {
				itemName : $scope.item,
				price    : $scope.price 
			};

			$scope.list.push(newItem);
			$scope.productList.push($scope.item);		
		}
		
	}

	$scope.total = function(){
		var total = 0;
		angular.forEach($scope.list,function(item,sl){
			total += parseFloat(item.price);
		});
		return total;
	}


	$scope.removeItem = function(index){
		$scope.list.splice(index,1);
	}



}]);
