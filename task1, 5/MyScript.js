function Officer(name, department, phoneNumber, Salary){
    this.name = name;
    this.department = department;
    this.phoneNumber = phoneNumber;
    this.Salary = Salary;   
    this.Show = ShowData(this.name, this.department, this.phoneNumber, this.Salary, this.adress);
}

var officer = new Officer('Tom', 'IT department', '+380684967544', '4700');

console.log('task1');
console.log('Total info:');
console.log(officer.name);
console.log(officer.department);
console.log(officer.Salary);
console.log(officer.phoneNumber);

officer.adress = 'skisna 74/76';

console.log('task2');
console.log(officer.adress);

officer.Show();

function ShowData(name, department, phoneNumber, Salary, adress){
    document.write("Name of officer : " + name + "<br>");
    document.write("Name of officer : " + department + "<br>");
    document.write("Name of officer : " + phoneNumber + "<br>");
    document.write("Name of officer : " + Salary + "<br>");
    if(adress!=undefined || adress!=null){
        document.write("Adress : " + adress);
    }
    else
    {
        document.write("Adress : unknown ");
    }
}