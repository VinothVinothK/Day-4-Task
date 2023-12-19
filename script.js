// 1.Print odd numbers in an array
// Ananymous:
var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
var result = [];
var ans = function (arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]%2!==0){
            result.push(arr[i])
        }
    }
    return result;
}
console.log(ans(arr))       
// IIFE:
var arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
var result1 = [];
(function (arr1){
    for(var i=0; i<arr1.length; i++){
        if(arr1[i]%2!==0){
            result1.push(arr1[i])
        }
    }
    console.log(result1)
})(arr1)

// Arrow:
var arr3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
var result3 = [];
var ans = (arr3) => {
    for(var i=0; i<arr3.length; i++){
        if(arr3[i]%2!==0){
            result3.push(arr3[i])
        }
    }
    return result3;
}
console.log(ans(arr3)) 

// 2.Convert all the strings to title caps in a string array
// Ananymous:
var arr4 = ["how are you"]
var result4 = [];
function titleCase(arr4){
    arr4=arr4.toLowerase().split(' ');
    for(var i=0; i<arr4.length; i++){
       arr4[i]=arr4[i].charAt(0).toUpperCase()+arr4[i].slice(1);
    }
    return arr4.join(' ');
}
console.log(titleCase(arr4)) 
// IIFE:
// Arrow:

// 3.Sum of all numbers in an array
// Ananymous:
var arr7 = [1,2,3,4,5,6]
var result7 = 0;
var ans7 = function(arr7){
    for(var i=0; i<arr7.length; i++){
    result7 = result7+arr7[i];
}
return result7
}
console.log(ans7(arr7))
// IIFE:
var arr8 = [1,2,3,4,5,6]
var result8 = 0;
(function(arr8){
    for(var i=0; i<arr8.length; i++){
    result8 = result8+arr8[i];
}
console.log(result8) 
})
(arr8)
// Arrow:
var arr9 = [1,2,3,4,5,6]
var result9 = 0;
var ans9 = (arr9)=>{
    for(var i=0; i<arr9.length; i++){
    result9 = result9+arr9[i];
}
return result9
}
console.log(ans9(arr9))

// 4.Return all the prime numbers in an array
// Ananymous:
var arr10 = [1,2,3,4,5,6,7,8,9,10,11,12,13]
var result10 = []
var ans10 = function(arr10){
    for(var i=0; i<arr10.length; i++){
    var num=0;
        for(var j=2;j<i;j++){
            if(i%j==0){
                num=1;
                break;
            }
        }
        if(i>1 && num==0){
            result10.push(i)
        }
}
return result10
}
console.log(ans10(arr10))
// IIFE:
// var arr11 = [1,2,3,4,5,6,7,8,9,10,11,12,13]
// var result11 = []
// (function (arr11){
//     for(var i=0; i<arr11.length; i++){
//     var num=0;
//         for(var j=2;j<i;j++){
//             if(i%j==0){
//                 num=1;
//                 break;
//             }
//         }
//         if(i>1 && num==0){
//             result11.push(i)
//         }
// }
// console.log(result11)
// })
// (arr11)

// Arrow:
var arr12 = [1,2,3,4,5,6,7,8,9,10,11,12,13]
var result12 = []
var ans12=(arr12)=>{
    for(var i=0; i<arr12.length; i++){
    var num=0;
        for(var j=2;j<i;j++){
            if(i%j==0){
                num=1;
                break;
            }
        }
        if(i>1 && num==0){
            result12.push(i)
        }
}
return result12
}
console.log(ans12(arr12))

// 5.Return all the palindromes in an array
// Ananymous:
// IIFE:
// Arrow:

// 6.Return median of two sorted arrays of the same size.
// Ananymous:
// IIFE:

// 7.Remove duplicates from an array
// Ananymous:
var arr18=[1,2,3,2,3,5,6,3]
var result=[]
var ans18=function (arr18){
    arr18.forEach(element => {
        if(!result.includes(element)){
        result.push(element);
    }        
    });
return result;
}
console.log(ans18(arr18));
// IIFE:
var arr18=[1,2,3,2,3,5,6,3]
var result18=[]
(function (arr18){
    arr18.forEach(element => {
        if(!result.includes(element)){
        result.push(element);
    }        
    });
    console.log(result18);
})
(arr18)


// 8.Rotate an array by k times
// Ananymous:
var arr20=[1,2,3,4,5];
var k= 2;
var ans20 = function (arr20,k){
if(arr20.length ===2||k===0){
    return arr20;
}
k=k%arr20.length;

for(let i=0;i<k;i++){
    arr20.unshift(arr20.pop());
}
return arr20;
}
console.log(ans20(arr20,k));

// IIFE:
var arr21=[1,2,3,4,5];
var k= 2;
(function (arr21,k){
if(arr21.length ===2||k===0){
    return arr21;
}
k=k%arr21.length;

for(let i=0;i<k;i++){
    arr21.unshift(arr21.pop());
}
console.log(arr21);
})
(arr21,k)

