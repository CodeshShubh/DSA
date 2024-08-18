// function checkAnagram(str1, str2){
//     let objStr1={}
//     if(str1.length !== str2.length){
//         return false;
//     }
//     for(let ch of str1){
//         objStr1[ch] = (objStr1[ch] || 0) + 1;
//     }

//     for(let ch of str2){
//         if(!objStr1[ch]){
//             return false
//         }
//         objStr1[ch] = objStr1[ch]-1
//     }
//     return true
// }

// console.log(checkAnagram("hello", "llohe"))


function isAnagram(str1, str2) {
    // If lengths are not the same, they can't be anagrams
    if (str1.length !== str2.length) {
        return false;
    }

    // Helper function to sort the string
    const sortString = (str) => {
        return str
            .toLowerCase()          // Convert to lowercase for case-insensitivity
            .split('')              // Split into array of characters
            .sort()                 // Sort the characters
            .join('');              // Join back into a string
    };

    // Sort both strings and compare
    return sortString(str1) === sortString(str2);
}

// Example usage:
const str1 = "listen";
const str2 = "silent";
console.log(isAnagram(str1, str2)); // Output: true