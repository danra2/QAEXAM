app.factory('dashboardFactory', function($http){
    var factory = {};
    factory.logout = function(){
      $http.post('/logout/')
    };
    factory.session = function(callback){
        $http.get('/users/session').success(function(output){
            callback(output);
        });
    };
    return factory;
});
