app.controller('UsersController', function(usersFactory, $routeParams, $scope, $location){
    var id = $routeParams.id;
    var test = function(){
        usersFactory.index(id, function(data){
            $scope.user = data;
        });
    };
    test();
});
