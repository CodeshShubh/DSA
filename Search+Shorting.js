// let array = [4, 2, 6, 1, 20, 45, 23, 21, 9];

// Selection Shorting



// function selection_Short(array){
//     for(i=0; i<array.length; i++){
//         let minIndex=i;
//         for(j=i+1; j<array.length; j++){
//             if(array[j]<array[minIndex]){
//                 minIndex = j
//             }
//         }

//         let temp = array[minIndex];
//         array[minIndex]= array[i];
//         array[i]= temp;
//     }

// }


// selection_Short(array);
// console.log(array);


// insertion Short 

// let array = [4, 2, 6, 1, 20, 45, 23, 21, 9];
// function Insertion_Short(array){
//     let i , current, j;
//     for(i=1; i<array.length; i++){
//         current = array[i];
//         j= i-1;
//         while(j>=0 && array[j]>current){
//               array[j+1] = array[j];
//               j=j-1;
//         }
//         array[j+1] = current;
//     }
// }
// Insertion_Short(array);
// console.log(array)


