/**
 * Problem Statement:
 *          To check if two objects containing only primitive value.
 *          If it has nested objects contains exactly the same value. ie., they are the same.
 */

 const size = (object) => {
    return Object.keys(object).length;
 }

const compare = (object1, object2) => {
    if(typeof object1 === 'object' && typeof object2 == 'object'){
        if(object1 === object2){
            return true;
        }
        else{
            if(size(object1) === size(object2)){
                for(const key in object1){
                    if(object1[key] && object2[key]){
                        if(typeof object1[key] !== 'object' && typeof object2[key] !== 'object'){
                            if(object1[key] === object2[key]){
                                continue;
                            }
                            else{
                                return false;
                            }
                        }
                        else if(typeof object1[key] === 'object' && typeof object2[key] === 'object'){
                            if(JSON.stringify(object1[key]) === JSON.stringify(object2[key])){
                                continue;
                            }
                            else{
                                return false;
                            }
                        }
                        else{
                            return false;
                        }
                    }
                    else{
                        return false;
                    }
                }
                return true;
            }
            else{
                return false;
            }
        }
    }
    else{
        return false;
    }
}

const object1 = {
    a: 1,
    b: 2,
    c: {
        d: 'Hello :)',
    },
};

const object2 = {
    a: 3,
    b: 4,
    c: {
        d: 'Hello :)',
    },
};

result = compare(object1, object2);

if(result){
    console.log('Both objects has primitive, if it has nested objects they are same.');
}
else{
    console.log('Both objects doesn\'t has primitives or the nested objects it hold are not same.');
}
