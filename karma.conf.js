module.exports = function (config) {
    config.set({
        basePath: './',
        files: [
            'js/jquery/jquery-2.1.1.min.js',
            'js/plugins/jquery-ui/jquery-ui.js',
            
            'js/angular/angular.min.js',
            'js/angular/angular-mocks.js',
            'js/angular/angular-sanitize.js',
            
            'js/plugins/oclazyload/dist/ocLazyLoad.min.js',
            'js/angular-translate/angular-translate.min.js',
            'js/bootstrap/bootstrap.min.js',
            'js/bootstrap/ui-bootstrap-tpls-0.12.0.min.js',
            'js/plugins/angular-idle/angular-idle.js',

            'js/plugins/footable/footable.all.min.js',
            'js/plugins/footable/angular-footable.js',
            'js/plugins/moment/moment.min.js',
            'js/plugins/moment/locale/es.js',
            'js/plugins/datapicker/angular-datepicker.js',
            'js/plugins/clockpicker/clockpicker.js',
            'js/plugins/chosen/chosen.jquery.js',
            'js/plugins/chosen/chosen.js',

            'js/app/**/*.js',
            'tests/**/*.js'
        ],
        exclude: [

        ],
        autoWatch: false,
        frameworks: ['jasmine'],
        browsers: ['Chrome'],
        singleRun: true,
        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine'
        ]
    });
};