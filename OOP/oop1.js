function Person(name,mobile,date_of_birth){
    this.name=name;
    this.mobile=mobile;
    this.date_of_birth=new Date(date_of_birth);
    this.ageCalculate=()=>{
        const diff=Date.now()-this.date_of_birth.getTime();
        const age=new Date(diff);
        return age.getUTCFullYear();
    }
}
const per1=new Person('Biplab',12345,'2023-06-13');
console.log(per1.ageCalculate());