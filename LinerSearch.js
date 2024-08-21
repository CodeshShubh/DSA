// find the postion of given element

let array = [1, 2, 41, 7, 9, 20, 30 ];
let find = 9;
let pos = undefined
function linearSearch(array, find){
    for(let i=0; i<array.length; i++){
        if(array[i] == find){
             pos = i;
             break;
            }
    }
}
linearSearch(array, find);
console.log(pos);
