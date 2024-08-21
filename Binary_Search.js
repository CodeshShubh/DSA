// Itrative Apporach


let array = [1, 2, 3, 4, 5, 6, 7, 40 , 80, 90, 100];

let find =90;
let start =0;
let end = array.length-1;
let postion = undefined;

while(start<=end){
    let mid = Math.floor((start+end)/2);
    if(array[mid] == find){
        postion = mid;
        break;
    }else if(array[mid]< find){
        start = mid+1;
    }else{
        end = mid-1;
    }
}
console.log(postion);