app.factory('questionsFactory', function($http){
    var factory = {};
    factory.create = function(question, callback){
      $http.post('/questions/', question).then(function(returned_data){
      });
    };
    factory.findOne = function(id, callback){
        $http.get('/question/' + id).then(function(returned_data){
        callback(returned_data)
      });
    };
    factory.index = function(callback){
        $http.get('/questions/').then(function(returned_data){
        callback(returned_data)
      });
    };
    return factory;
});
