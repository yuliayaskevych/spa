export default
    class Router {
    constructor(routes) {
        // список маршрутів
        this.routes = routes;
        // контейнер для виводу вмісту HTML-коду з папки views
        this.rootElem = document.getElementById('app');
        window.addEventListener('hashchange', this.hasChanged);
        if (window.location.hash) {
            this.hasChanged();
        } else {
            this.goToRoute(this.routes.find(route => route.default).htmlName);
        }
    }
    // визначає необхідний маршрут, та передає його у метод  goToRoute
    hasChanged = () => {
        this.goToRoute(this.routes.find(route => `#${route.name}` == window.location.hash).htmlName);
    }
    // отримує та завантажує правильний HTML файл для активного маршруту. 
    goToRoute(htmlName) {
        const url = `views/${htmlName}`;
        fetch(url)
            .then(response => response.text())
            .then(text => this.rootElem.innerHTML = text)
            .catch(e => console.error(e));

    }
}