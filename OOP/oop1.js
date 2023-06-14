function Person(name,mobile,date_of_birth){
    this.name=name;
    this.mobile=mobile;
    this.date_of_birth=new Date(date_of_birth);
    this.ageCalculate=()=>{
        const diff=Date.now()-this.date_of_birth.getTime();
        const age=new Date(diff);
        return age.getUTCFullYear()-1970;
    }
}
const per1=new Person('Biplab',12345,'1996-12-14');
console.log(per1.ageCalculate());

class Car {
    constructor(name,model,weight,color){
        this.name=name;
        this.model=model;
        this.weight=weight;
        this.color=color;
    }
    getFullModel(){
        return this.name+' '+this.model;
    }

    setName(newName){
        this.name=newName;
    }
}
const mazda=new Car("mazda","Rx-100",975,"red");
mazda.setName('Lancer')
console.log(mazda.getFullModel());