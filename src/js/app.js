import Router from './router.js';
import Route from './route.js';

//маршутизатор
var router = new Router([
    new Route('home', 'home.html', true),
    new Route('apps', 'apps.html'),
    new Route('simulation', 'simulation.html'),
    new Route('graasp', 'graasp.html'),
    new Route('examples', 'examples.html'),
    new Route('contact', 'contact.html'),
]);