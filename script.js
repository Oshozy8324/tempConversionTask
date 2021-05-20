// Answer 1, function to convert temperature
const convertFahrToCelsius = (temp) => {
if (typeof temp == 'number'){
    value = ((temp - 32)/1.8).toFixed(4)
}
else if(!isNaN(temp)  && !isNaN(parseFloat(temp))){
    value = ((temp - 32)/1.8).toFixed(4)
}
// else if(!isNaN(parseFloat(temp)) === false ){
//     value = `${temp} is not a valid number but a/an ${typeof temp}`
// }
else{
    value = `${temp} is not a valid number but a/an ${typeof temp}`
}
return value
}


// Answer 2, checkYuGiOh fuction task 

const checkYuGiOh = (n)=>{
  
    let arr = []
    let arr2 = []
  
    if (typeof n == 'number' || !isNaN(n)  && !isNaN(parseFloat(n))){
        n = parseFloat(n)
        for (var x = 1; x <= n; x++){
            arr.push(x)
        } 
    console.log(arr)
    arr2 = [...arr]
   for(var y = 0; y < arr2.length; y++){
       if(arr2[y] % 2 === 0 && arr2[y] % 3 === 0 && arr2[y] % 5 === 0){
           arr2[y] = "yu-gi-oh"
       } 
     else if(arr2[y] % 2 === 0 && arr2[y] % 3 === 0){
        arr2[y] = "yu-gi" 
       }
       else if(arr2[y] % 2 === 0 && arr2[y] % 5 === 0){
        arr2[y] = "yu-oh" 
       }
       else if(arr2[y] % 3 === 0 && arr2[y] % 5 === 0){
        arr2[y] = "gi-oh"
       }
       else if(arr2[y] % 5 === 0){
        arr2[y] = "oh" 
       }
       else if(arr2[y] % 3 === 0){
        arr2[y] = "gi" 
       }
       else if(arr2[y] % 2 === 0){
        arr2[y] = "yu" 
       }
   }
    }
else{
        arr2 = `inalid parameter: ${n}`
     }
return arr2
}