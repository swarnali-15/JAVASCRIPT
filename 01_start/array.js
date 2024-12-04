const myArr=[2, 5, 6, 9];

//console.log(myArr);

// object literals

const JsUser={
    name: "Swarnali",
    age: 22,
    location: "Kolkata",
}

//console.log(JsUser.age);

const obj1={1: "a", 2: "b"}
const obj2={3:"a", 4:"b"}
const obj4={5:"a", 6:"b"}

const obj3=Object.assign({},obj1,obj2,obj4)
console.log(obj3);
