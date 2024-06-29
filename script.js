function extract(){
    //Delimiter Registry

    const delimiters = /[\s<>;:()]/g;


    //User Input - GUI soon?
    var inputEmails = "Your text goes here.";

    //Split delimiters into new array

    var delimitedInput = inputEmails.split(delimiters);

    var isolatedEmails = delimitedInput.filter(function(includesAtSymbol){
        if(includesAtSymbol.indexOf('@')!==-1){
            return includesAtSymbol;
        }
    });

    //New array of single entries instead of duplicates

    var uniqueEmails = [...new Set(isolatedEmails)];

    var finalString = uniqueEmails.reduce(function(anArray, aString){
        var concact = aString + " " + anArray;
        return concact;
    });

    console.log(finalString);
}