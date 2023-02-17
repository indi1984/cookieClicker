let people = {
  name: "kevin",
  age: 38
}

for (obj in people) {
  console.log(people[obj]);
};

const keyArray = Object.keys(people);
for (i of keyArray) {
  console.log(i);
};
