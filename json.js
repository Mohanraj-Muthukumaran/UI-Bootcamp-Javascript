/**
 * Problem Statement:
 *          To implement JSON.stringify method of yourself for plain objects containing only primitive values.
 *          Bonus : Recursion for nested objects.
 *          The Object does not contains values that are functions, circular references or functions.
 */

const stringify = (object) => {
    let result = '{';

    for(const key in object){
        if(result !== '{'){
            result+= ',';
        }

        result += ('"'+key+'"') + ':';
        
        if(typeof object[key] === 'object'){
            result += stringify(object[key]);
        }
        else{
            result += ((typeof object[key] === 'string')? ('"'+object[key]+'"') : object[key]);
        }
    }

    result+= '}';
    return result;
}

const object = {
    a: 1,
    b: 2,
    c: {
        d: 'Hello :)',
    },
};

stringified = stringify(object);
console.log('Stringified:',stringified);