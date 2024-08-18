// find Even Values form array make double of every element and find array length manually
let array = [11, 20, 31, 40, 51, 60, 70];
let evenArray = [];
let length = 0;
for(let i=0; i<array.length; i++){
   if(array[i]%2==0){
      evenArray.push(array[i]*2)
      length++;
   }
}
console.log(evenArray);
console.log(length);