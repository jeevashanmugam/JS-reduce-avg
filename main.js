let num = [29.76, 41.85, 46.5];

let newvalue = num.reduce(function(acc,cv){
 
    return  acc+cv;

})

document.write(`Avg value of : ${newvalue/num.length}`)



