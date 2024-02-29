function MenuItem(title, url) {
    this.title = title;
    this.url = url;
}

MenuItem.prototype.show = function() {
    document.write("<ul>");
    for (var i = 0; i < arguments.length; i++) {
        document.write("<li><a href='" + arguments[i].url + "'>" + arguments[i].title + "</a></li>");
    }
    document.write("</ul>");
};
var count = parseInt(prompt("Введите количество пунктов меню:"));
var menuItems = [];
for (var i = 0; i < count; i++) {
    var title = prompt("Введите название пункта меню " + (i + 1) + ":");
    var url = prompt("Введите URL для пункта меню " + (i + 1) + ":");
    menuItems.push(new MenuItem(title, url));
}

var menu = new MenuItem();
menu.show.apply(null, menuItems);
