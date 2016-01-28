module.exports = function (config) {
    config.set({
        basePath: './',
        files: [
            'js/jquery/jquery-2.1.1.min.js',
            'js/plugins/jquery-ui/jquery-ui.js',
            
            'js/angular/angular.js',
            'js/angular/angular-mocks.js',
            'js/angular/angular-sanitize.js',
            'js/ui-router/angular-ui-router.js',
            'js/plugins/oclazyload/dist/ocLazyLoad.js',
            
            'js/angular-translate/angular-translate.js',
            'js/bootstrap/bootstrap.js',
            'js/bootstrap/ui-bootstrap-tpls-0.12.0.js',
            'js/plugins/angular-idle/angular-idle.js',

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