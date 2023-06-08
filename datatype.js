/*
Javascrip datatype 
1.primitive datatype(string,number,boolean,null,undefiend,symbol).

2.nonprimitive datatype(array,object,function).
*/

let name="Biplab";
let age=27;
let song=false;
let fatherName=null;
let motherName;
console.log(name,age,song,fatherName,motherName);

let Person={
    firstName:"Biplab",
    lastName:"Uddin",
    age:27,
    hobby:['coding','book reading','travelling'],
    addNumber(){
        return this.firstName + this.lastName;
    }
}
console.log(Person.addNumber());

let Countries=['Bangladesh','Canada','Australia','Pakistan','India','Brazil','Argentina','Uganda'];
console.log(Countries[0])

