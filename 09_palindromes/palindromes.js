const palindromes = function (str) {
    let cleanedStr = str.replace(/[ .,!?]/g, "");
    let lCase = cleanedStr.toLowerCase();
    let j = lCase.length - 1;
    console.log(lCase);
    for( let i = 0; i < j; i++)
    {
        if(lCase.charAt(i) != lCase.charAt(j))
        {
            return false;
        }
        j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
