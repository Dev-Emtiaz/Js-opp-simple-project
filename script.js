let heading = document.querySelectorAll(".heading");
let btn = document.querySelector("button");
let clBtn = document.querySelector(".btnclear");

class Student{
    constructor(name, id, cgpa, age){
        this.studentName = name;
        this.studentId = id;
        this.studentCpga = cgpa;
        this.studentAge = age;
    }

    display(){
        heading[0].innerText =  `Name is = ${this.studentName}`;
        heading[1].innerText = `Id is = ${this.studentId}`;
        heading[2].innerText = `Cgpa is = ${this.studentCpga}`;
        heading[3].innerText = `Age is = ${this.studentAge}`;
    }

    clearVal(){
        heading[0].innerText = "Name is = ";
        heading[1].innerText = "Id is = ";
        heading[2].innerText = "Cgpa is = ";
        heading[3].innerText = "Age is = ";
    }
}

let student1 = new Student("Anisul Islam", 201, 3.33, 29);
let student2 =  new Student("Tokib", 503, 2,30, 21);
let student3 = new Student("Rahim", 102, 4.50, 50);

btn.addEventListener("click", () =>{
    let inputVal = prompt("Enter the Student serial number:");
    if(inputVal === "student1"){
        student1.display();
    }else if(inputVal === "student2"){
        student2.display();
    }else if(inputVal === "student3"){
        student3.display();
    }
});

clBtn.addEventListener("click", () =>{
 student1.clearVal();
 student2.clearVal();
 student3.clearVal();
})



