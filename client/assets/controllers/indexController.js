app.controller('IndexController', function(usersFactory, $location, $scope) {
    $scope.message = "";
    function titlize(v) {
      return v.charAt(0).toUpperCase() + v.substr(1).toLowerCase();
    }
    $scope.login = function(user){
        if (user){
            user.name = titlize(user.name)
            usersFactory.login(user, (data)=>{
            $scope.error = data.error;});
            $location.path('/dashboard');
        } else {
            $scope.message = "Enter minimum of 10 characters";
        };
    }
});
