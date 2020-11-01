function deepCount(a){
    let i = 0;
   a.forEach(item => {
     if(Array.isArray(item)) {
       i++;
       const j = deepCount(item);
       i = i + j;
     } else {
       i++;
     }
   })
   return i;
 }

 console.log(deepCount([1, 2, [3, 4, [5]]]));