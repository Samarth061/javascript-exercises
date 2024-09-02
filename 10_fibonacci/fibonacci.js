const fibonacci = function(numb) {
    let intNumb = Number(numb);
    if(intNumb < 0)
    {
        return "OOPS";
    }
    else if(intNumb == 0)
    {
        return 0;
    }
    else if(intNumb == 1){
        return 1;
    }

    return fibonacci(intNumb-1) + fibonacci(intNumb-2);
};

// Do not edit below this line
module.exports = fibonacci;
