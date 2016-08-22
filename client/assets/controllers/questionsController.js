app.controller('QuestionsController', function(answersFactory,dashboardFactory,questionsFactory,$routeParams, $scope,$location) {
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
    $scope.cancel = function(){
        window.history.back();
    };
    $scope.like = function(answerId){
        if (answerId) {
            answersFactory.like(answerId, (data)=>{
                console.log('returned', data);$scope.error = data.error;}) ;
            test();
        }
    };
    $scope.createQuestion = function(newQuestion){
        if (newQuestion) {
            newQuestion._user = $scope.session.userId;
            console.log('I want to create this newQuestion', newQuestion);
            questionsFactory.create(newQuestion, (data)=>{
            $scope.error = data.error;});
            $location.path('/dashboard')
        } else {
            $scope.message = "Minimum of 10 characters required"
        }
    };
});
