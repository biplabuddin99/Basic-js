/* string and string methods */
let per = "Vue js 3 with Masterclass, with javascript fundamentals";

// length 
console.log(per.length);

//uppercase lowercase
console.log(per.toUpperCase());
console.log(per.toLocaleLowerCase());

//Addition + plus
console.log(per+" by Biplab");

//slice substring substr  ------small parts

console.log(per.slice(4,8));
console.log(per.substring(4,8));
console.log(per.substr(4,8));

//replace repaceall
console.log(per.replace('javascript','js'));
console.log(per.replace('javascript','js'));

let address= "Hatiya,Noakhali,Chittagong,Bangladesh";
console.log(address.split(',')[2]);