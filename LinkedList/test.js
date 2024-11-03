let obj1 = {
  name: "Hoj",
  value: 20,
};

let obj2 = obj1;

obj2.name = "hooii";
console.log(obj1);

obj2 = {
  name: "N",
  value: 3,
};

console.log(obj1);
