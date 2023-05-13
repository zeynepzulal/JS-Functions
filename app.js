
//Faktorial RECURSIVE
function recursive_fac(x){
    if(x == 0) return 1
    else return x*recursive_fac(x-1)
    // 3 * 2 * 1 * 1
}
console.log(recursive_fac(4));


//isEven?? CALLBACK
function msg(a){
    return `${a} bir çift sayi`;
 }
 function isEven(a,callback){
    return (a % 2 === 0) ? true + " " +callback(a): false;
 }
 
 console.log(isEven(7,msg));