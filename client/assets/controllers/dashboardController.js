app.controller('DashboardController', function(answersFactory,dashboardFactory,questionsFactory,$routeParams, $scope,$location) {
    var test = function(){
        questionsFactory.index(function(data){
            $scope.questions = data.data;
        });
        dashboardFactory.session(function(data){
            $scope.session = data;
            if (data.error) {
                $location.path('/')
            }
        });
    };
    test();
    $scope.logout = function(topic){
        usersFactory.logout()
    }
});
