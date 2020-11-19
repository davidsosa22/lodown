'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * 
 * identity: takes a value and returns a value unchanged
 * 
 * @param {*} value: single value that can take any datatype 
 * 
 * @return {*} : it returns the value unchanged 
 * 
 * 
*/

function identity(value){
    return value;
}
module.exports.each = identity;



/**
 *typeOf: returns a string indicating the type of the unevaluated operand.
 * 
 * @param {*} value: single value that can take any datatype 
 * 
 * @return {*} : if the value is an array return the string 'array'. 
 * @return {*} : if value equals null return the string 'null'
 * @return {*} : else return typeOf which returns a string indicating the type of the unevaluated operand.
 * 
 * 
*/
function typeOf(value){
    if (Array.isArray(value)){
    return 'array';
} else if(value instanceof Date){
    return false;
}else if (value === null){
    return 'null';
}else {
    return typeof (value);
}
};

module.exports.each = typeOf;

/**
 *first: Returns the first element of an array
 * 
 * @param {*} array: 
 * @param {*} number: 
 * 
 * 
 * @return {*} : if the value is an array return the string 'array'. 
 * @return {*} : if value equals null return the string 'null'
 * @return {*} : else return typeOf which returns a string indicating the type of the unevaluated operand.
 * 
 * 
*/

function first(array, number){
    let result = [];
    if (Array.isArray(array) === false){
        return [];
    }
     if (number === undefined || NaN ){
        return array[0];
    }
    for (let i = 0; i < number; i++){
        result.push(array[i]);
    }  
     if (number > array.length){
        return array;
    }
    return result;
    
};



/**
 *
 * first : This function will take an array and a number and returns an array literal if array is not an array
 * and if the number is not given or is not a number, the function will returns the first element in array.
 * Also, if a number and an array is given it returns the first number item in array
 *
 * @param {array} array : expected to be an array
 * @param {number} number : expected to be a number
 *
 * @return {*} : [] if array param is not array;
 * @return {*} : the first element in an array if number is not gien or not a number;
 * @return {*} : first number of items if array and number are given
 *
 */
 function first(array, number) {
    if(Array.isArray(array) === false || number < 0){
        return [];
    }
    if(typeof number !== 'number' || number === null){
        return array[0];
    }
    return array.slice(0, number);
}
module.exports.first = first;


/**
 *
 * last : Returns the last element of an array. 
 *
 * @param {array} array : expected to be an array
 * @param {number} number : expected to be a number
 *
 * @return {*} : return [] if array param is not array;
 * @return {*} : return the last element in an array if number is not gien or not a number;
 * @return {*} : return the last number item if array and number are given
 *
 */
 function last(array,number){
    if(Array.isArray(array) === false || number < 0){
        return [];
    }
     if (typeof number !== "number" || number === null){
        return array[array.length - 1] ;
    }
    if(array.length <= number){
    return array;
}
    return array.slice(number -1, array.length);
}
module.exports.last = last;


/**
 *
 * IndexOf : Returns the index of the last occurrence of value in the array, or -1 if value is not present. 
 *
 * @param {array} array : expecting array
 * @param {value} value : could be any datatype
 *
 * @return {*} : return the index of array that is first occurrance of value
 * @return {*} : returns -1 if the value is not an array
 *
 */
 function indexOf(array, value){
    if(array.includes(value)) {
        for(let i = 0; i < array.length; i++){
            if(array[i] === value){
                return i;
            }
        }
    } else {
        return -1;
    }
}
module.exports.indexOf = indexOf;


/**
 *
 * contains : Returns true if the value is present in the list. 
 *
 * @param {array} array : expects to have an array as argument
 * @param {value} value : value can be any datatype
 *
 * @return {boolean} : returns either true or false
 *
 */
 function contains(array,value){
    return array.includes(value) ? true : false;
}
module.exports.contains = contains;

/**
 * unique : returns new array with duplicates removed
 * 
 * @param {array} array: expects to have an array as argument
 * 
 * @return {array}: new array of all elements
 * 
 * 
 * 
 */
 function unique(array){
    let results = [];
    for(let i = 0; i < array.length; i++){
        if(results.indexOf(array[i]) === -1){
            results.push(array[i])
        }
    }return results;
}

module.exports.unique = unique;

/**
 * 
 * filter : it first creates an array and then fills it with all array elements that pass a test
 * 
 * @param {array} array : expects to have array as arguement 
 * @param {a function} action: Function to be applied to each value in the 
 * array
 * 
 * @return {*}: a new array of elements for which calling the fuction returned true
 * 
 */ 
 function filter(array, action){
    let filterArray = [];
   each(array, function(elements, i, array){
     let result = action(array[i],i,array);
    if(result)
     filterArray.push(array[i]);
 });return filterArray;
 };
 
 module.exports.filter = filter;
 
 /**
  * 
  * reject : return the values in a list with the elements that did not pass the test 
  * 
  * @param {array} array : expects to have array as arguement 
  * @param {function} action Function to be applied to each value in the 
 * array
  * 
  * @return {*} : a new array of elements for which calling the fuction returned false
  * 
  */ 
  function reject(array, action){
        return filter(array,function(elements,i,array){
            return !(action(array[i], i, array));
        });
};
module.exports.reject = reject;

/**
 * 
 * partition : will have an array of arrys. One with elements that returned truthy 
 * and one with elements thay returned falsy
 * 
 * @param {array} array : expects to have array as arguement 
 * @param {function} action: Function to be applied to each value in the array
 * 
 * @return {*} : return an array with 2 sub arrays. 
 * One with array that contains all the values for which <function> returned something truthy
 * One with array that contains all the values for which <function> returned something falsy
 * 
 * 
 */ 
 function partition(array,action){
            return [filter(array,action),reject(array,action),];
           
};
module.exports.partition = partition;


/**
 * 
 * map: used to create a new array from an existing array. You can duplicate 
 * or extract portions of an array.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {function} action: The Function to be applied to each value in the collection
 * 
 * 
 * @return {*} : return the new array of ar array or object. 
 */ 
function map(collection, action){
    let result = [];
    if(Array.isArray(collection)){
    for(let i = 0; i < collection.length; i++){
       result.push(action(collection[i],i,collection));
    }
    }
    else {
         for(let key in collection){
            result.push(action(collection[key],key,collection)); 
    }
    }return result;
};

module.exports.map = map;


/**
 * 
 * pluck: extracts a list of property values.
 * 
 *@param {Array of objects} arrayOfObj: 
 *@param {property} property:  the property of every element in array
 * 
 * 
 * @return {*} : must return an array containing the value of property for every element in array using map
 * 
 */ 
function pluck(arrayOfObj,property){
    let result = [];
    map(arrayOfObj,function(elements,i,array){
        result.push(array[i][property]);
    });
    return result;
};

module.exports.pluck = pluck;


/**
 * 
 * every: Returns true if all of the values in the list pass the predicate truth test. 
 * 
 *@param {Array or Object} collection: The collection over which to iterate 
 *@param {function} action:  The Function to be applied to each value in the collection
 * 
 * 
 * @return {*} : return true if value of calling function for every element is true
 * @return {*} : if any of them are false, return false
 * @return {*} : if function call is not provided return true if the elements is truthy or return false if they are falsy
 */

function every(collection, action){
let results = true;
 if (!action) {
     for (let i = 0; i < collection.length; i++) {
       if (!collection[i]) {
             results = false;
        }
     }
} else {
    let array = map(collection, function(element, i, collection){
     return   action(element, i, collection);
    });
    each(array, function(element, i, collection){
        if (element === false) {
            results = false;
        }
    });
 }
return results;
};

module.exports.every = every;


/**
 * 
 * some: Returns true if any of the values in the list pass the passes the test. 
 * 
 *@param {Array or Object} collection: The collection over which to iterate 
 *@param {function} action:  The Function to be applied to each value in the collection
 * 
 * 
 * @return {*} : return true if value of calling function is true for all elements
 * @return {*} : return true if value of calling function is true for at least one element
 * @return {*} : return false if all elements are false
 * @return {*} : if function call is not provided return true if at least one element is truthy or return false otherwise.
 */

function some(collection,action){
    if (typeof collection === "object"){
        for(let key in collection){
            if(action){ 
                if(action(collection[key],key, collection) ? true:false){
                    return true;
                }
            }else{
                if(collection[key] ? true:false){
                    return true;
                }
            }
        }
        return false;
    }
    else{
        for(let i = 0; i<= collection.length - 1; i++){
            if(action){ 
                if(action(collection[i],i, collection) ? true:false){
                    return true;
                }
            }else{
                if(collection[i] ? true:false){
                    return true;
                }
            }
        }
        return false;
    }
};

module.exports.some = some;


/**
 * 
 * some: Returns true if any of the values in the list pass the passes the test. 
 * 
 *@param {array} array: expects to have array as arguement 
 *@param {function} action:  The Function to be applied to each value in the collection
 *@param {seed} seed: expects to have seed as arguement 
 * 
 * 
 * @return {*} : return the value of the final function call
 */
 
 
 function reduce(array,func,seed){
    let current = seed;
    if(current === undefined){
        current = array[0];
        for (let i = 1; i < array.length; i++){
            current = func(current, array[i], i);
        }
        return current;
    
    }
    for (let i = 0; i < array.length; i++){
        current = func(current, array[i], i);
    }
    return current;
};

module.exports.reduce = reduce;


/**
 * 
 *extend: copies the recent objects propety and value into a new destined object and returns it
 * 
 *@param {object} a: expects to have object as arguement 
 *@param {object and possibly more...} ...more:  exptects to have more objects as arguements 
 * 
 * 
 * @return {*} : return the updated object
 */

function extend(a,...more){
 return Object.assign(...arguments);
 };
 
 module.exports.extend = extend;
