//класс, який описує маршрут до html-сторінки
export default class Route{
    constructor(name, htmlName, defaultRoute) {
        this.name = name;
        this.htmlName = htmlName;
        this.default = defaultRoute;
    }
}