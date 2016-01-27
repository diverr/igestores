module.exports = function (config) {
    config.set({
        basePath: './',
        files: [
            'js/jquery/jquery-2.1.1.min.js',
            'js/plugins/jquery-ui/jquery-ui.js',
            'js/angular/angular.js',
            'tests/**/*.js'
        ],
        exclude: [

        ],
        autoWatch: false,
        frameworks: ['jasmine'],
        browsers: ['Chrome', 'Firefox'],
        singleRun: true,
        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
        ]
    });
};