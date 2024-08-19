// let array = [2, 35, 1, 6, 4, 98, 10, 20];

// function shortArray(data){
// for(let i = 0; i<data.length; i++){
//     let minIndex = i;

//     for(let j=i+1; j<data.length; j++){
//         if(data[j]<data[minIndex]){
//               minIndex=j;
//         }
//     }
//     let temp = data[minIndex];
//     data[minIndex]= data[i];
//     data[i]=temp;
//    }
// }

// shortArray(array);
// console.log(array);


// Selection_Short Decreseing order

let array = [2, 35, 1, 6, 4, 98, 10, 20];

function DecreseingShort(data){
for(i=0; i<data.length; i++){
    let minIndex = i;
    for(j=i+1; j<data.length; j++){
        if(data[j]>data[minIndex]){
            minIndex=j
        }
    }
    let temp = data[minIndex];
    data[minIndex]= data[i];
    data[i]= temp;
}
}

DecreseingShort(array);
console.log(array)


