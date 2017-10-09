let mix = require('laravel-mix');

if ( process.env.NODE_ENV == 'production' )
{
    mix.disableNotifications();
}

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.autoload({
        jquery: ['$', 'window.jQuery',"jQuery","window.$","jquery","window.jquery"],
        tether: ['Tether', 'window.Tether'],
        'popper.js/dist/umd/popper.js': ['Popper']
    })
   .js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');
