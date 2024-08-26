const removeFromArray = function(...args) {
    const arr = args[0];
    
    for(let i = 1; i < args.length; i++)
    {
        let num = args[i];
        if(arr.includes(num))
        {
            let index = arr.indexOf(num)
            arr.splice(index,1);
            i--;
        }
        else{
            continue;
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
