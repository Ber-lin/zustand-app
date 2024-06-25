let arr = [1, 2, 3, 4];
let arr2=arr.map(function (item) {
    if(item===2){
        return;
    }
 console.log(item);
 return item
});
console.log(arr2);