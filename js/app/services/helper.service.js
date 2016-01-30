angular.module('inspinia')
.service('Helper', helperService);

function helperService() {
    return {
        transformDate: function(date) {
            var ary = date.split('-');
            return ary[1] + '-' + ary[0] + '-' + ary[2];
        }
    };
}