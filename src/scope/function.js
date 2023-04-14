function greetings() {
    var userName = 'John';//local variable
    console.log(userName);

    if (userName === 'John'){
        console.log(`Hello ${userName} !`);
    }
}
greetings();

console.log(userName);