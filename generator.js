function* generator(){
    console.log("hello")
    console.log("good morning")
    yield 10;
    console.log("cvr college")
}
console.log("welcome tocvr");
var a = generator();
console.log(a.next());
console.log("hello2");