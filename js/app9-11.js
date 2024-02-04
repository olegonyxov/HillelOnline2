let numb=parseInt(prompt("Input some digit"));
let sum=0;
let even=0;
for (i=1;i<(numb+1);i++){
    if (numb%i===0){      
        console.log(i);
        if (i%2===0){
            sum+=i
            even++
        }
    }

}
console.log("парных дільників: "+even)
console.log("сумма парніх дільників: "+ sum)