const myGLobal = 0

function myFunction() {
    const myNumber = 1;
    console.log(myGLobal);

    function parent() { //funcion interna
        const inner= 2;
        console.log(myNumber, myGLobal);

        function child() { //funcion interna
            console.log(myNumber, myGLobal, inner);
        }
        return child();
    }
    return parent();
};

myFunction();