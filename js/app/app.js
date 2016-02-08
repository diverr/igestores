(function () {
    angular.module('morabanc', [
        'ui.router',                    // Routing
        'ui.bootstrap',                 // Ui Bootstrap
        'pascalprecht.translate',       // Angular Translate
        'ngIdle',                       // Idle timer
        'ngSanitize',                   // ngSanitize
        'ui.footable',
        'ui.calendar',
        'datePicker',
        'localytics.directives'
    ])
})();