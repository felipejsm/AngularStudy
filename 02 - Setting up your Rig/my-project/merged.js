function PeopleController($scope) {
	$scope.people = [{name : 'Jean Paul Sartre', phone : '3452345678', city : 'New York'},
					 {name : 'Clarice Lispector', phone : '3452345674', city : 'Estônia'},
					 {name : 'Arthur', phone : '3452345676', city : 'Bobaim Glamourosa'}];
    $scope.Save = function() {
    	$scope.people.push(
			{name: $scope.newPerson.name, phone: $scope.newPerson.phone, city: $scope.newPerson.city}
    		);
    	$scope.formVisibility = false;
    };	
    $scope.ShowForm = function() {
    		$scope.formVisibility = true;
    };
}
function Script1Function(){
	
}
function Scripts2Function() {
	
}