function fruits() {
    if(true){
        var fruta1 = 'apple';//function scope
        let fruta2 = 'banana';//block scope
        const fruit3 = 'kiwi';//block scope
    }
    console.log(fruta1);
    console.log(fruta2);
    console.log(fruit3);
}

fruits();

