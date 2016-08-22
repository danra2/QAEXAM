app.controller('AnswersController', function(answersFactory,dashboardFactory,questionsFactory,$routeParams, $scope,$location) {
    $scope.id = $routeParams.id;
    var test = function(){
        questionsFactory.findOne($routeParams.id, function(data){
            $scope.question = data.data;
        });
        dashboardFactory.session(function(data){
            $scope.session = data;
            if (data.error) {
                $location.path('/')
            }
        });
    };
    test();
    $scope.createAnswer = function(newAnswer){
        if (newAnswer) {
            newAnswer._user = $scope.session.userId;
            newAnswer._question = $routeParams.id;
            answersFactory.create(newAnswer, (data)=>{
            $scope.error = data.error;}) ;
            $location.path('/dashboard')
        } else {
            $scope.message = "Minimum of 10 characters required"
        }
    };
    $scope.cancel = function(){
        window.history.back();
    };
});
