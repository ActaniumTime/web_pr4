function Officer(name, department, phoneNumber, Salary){
    this.name = name;
    this.department = department;
    this.phoneNumber = phoneNumber;
    this.Salary = Salary;   
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

