// function Person(name,mobile,date_of_birth){
//     this.name=name;
//     this.mobile=mobile;
//     this.date_of_birth=new Date(date_of_birth);
//     this.ageCalculate=()=>{
//         const diff=Date.now()-this.date_of_birth.getTime();
//         const age=new Date(diff);
//         return age.getUTCFullYear()-1970;
//     }
// }
// const per1=new Person('Biplab',12345,'1996-12-14');
// console.log(per1.ageCalculate());

// class Car {
//     constructor(name,model,weight,color){
//         this.name=name;
//         this.model=model;
//         this.weight=weight;
//         this.color=color;
//     }
//     getFullModel(){
//         return this.name+' '+this.model;
//     }

//     setName(newName){
//         this.name=newName;
//     }
// }
// const mazda=new Car("mazda","Rx-100",975,"red");
// mazda.setName('Lancer')
// console.log(mazda.getFullModel());

class Person1{
    constructor(firstname,lastname,mobile,date_of_birth,yearly_income){
        this.firstname=firstname;
        this.lastname=lastname;
        this.mobile=mobile;
        this.birthdate= new Date(date_of_birth);
        this.yearly_income=yearly_income;
    }
    getFullName=()=>{
        return this.firstname+ ' '+this.lastname;
    }
    getAge=()=>{
        const diff=Date.now()-this.birthdate .getTime();
        const age= new Date(diff);
        return age.getUTCFullYear()-1970;
    }
    getTaxAmount=()=>{
        let taxamount=0;
        if(this.yearly_income>250000){
            taxamount= this.yearly_income*0.25;
        }else if(this.yearly_income>250000 && this.yearly_income<550000){
            taxamount=this.yearly_income*.30;
        }else if(this.yearly_income>750000){
            taxamount=this.yearly_income*.35;
        }else{
            taxamount=0;
        }
        return taxamount;
    }
}

const khan=new Person1('akbar',' khan','0111111','1996-12-14',750000);
console.log(khan.getFullName(),khan.getAge(),khan.getTaxAmount());