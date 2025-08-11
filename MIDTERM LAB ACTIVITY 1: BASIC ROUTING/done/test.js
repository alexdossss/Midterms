import person from "./helloworld.js"

const man = person("John", "Doe", 18);

console.log(man.fullname(), man.isAdult() ? "is an adult" : "is not an adult")