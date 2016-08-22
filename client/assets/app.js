var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl: 'static/partials/index.html',
        controller: 'IndexController'
    })
    .when('/dashboard', {
        templateUrl: 'static/partials/dashboard.html',
        controller: 'DashboardController'
    })
    .when('/question/:id', {
        templateUrl: 'static/partials/question.html',
        controller: 'QuestionsController'
    })
    .when('/question/:id/new_answer', {
        templateUrl: 'static/partials/answer_this.html',
        controller: 'AnswersController'
    })
    .when('/ask_question', {
        templateUrl: 'static/partials/ask_question.html',
        controller: 'QuestionsController'
    })
});
