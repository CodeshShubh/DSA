let array = [9, 13, 14, 22, 10, 8, 7 , 80];

function insertionShort(data){
    let current, j;
  for(let i=1; i<array.length; i++){
     current = data[i];
     j=i-1;
     while(j>=0 && data[j]>current){
       data[j+1] =data[j];
       j=j-1
     }
     data[j+1]=current;
  }
}

insertionShort(array);
console.log(array)