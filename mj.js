let suma = 0 ;
for( let i = 0; i <= 10; i ++){
    if(i % 2 == 0){
        suma = i + suma;
    }
    console.log(i,i % 2 == 0, suma)
}

console.log(
    suma
)