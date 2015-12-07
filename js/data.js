var app = angular.module('Data', []);

app.factory('Data', function() {
    var data = 'Set Some Data'
    
    return {
        getData: function() {
            return data
        },

        setData: function(d) {
            data = d;
        }
    }
})