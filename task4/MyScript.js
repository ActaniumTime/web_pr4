String.prototype.printMe = function() {
    var level = prompt("Введите уровень заголовка (от 1 до 6):");
    if (level >= 1 && level <= 6) {
        document.write("<h" + level + ">Ура!</h" + level + ">");
    } 
    else {
        document.write("Неправильный уровень заголовка!");
    }
};

var s = new String();
s.printMe();
