
/*

//Functions


// sari kisma istedigin ismi verebilirsin.
function nameOfFunction() {
    //function body
    // iki sayi carpimi
    // iki sayi toplami
    // function cagirilmadan calismaz.
    console.log("Hello Function");
}
nameOfFunction(); // çagirdik ve consola yazdi,cagirmasaydik consola yazilmiyordu.





function add(a, b) {
    console.log(a + b);
}
add(); // numara girmeden çagirirsan consola NaN (not a number)
add(2, 10); // simdi anlar ve consola 12 yazar.
add(10, 10); // bir fonksiyon birden fazla kez çagirilabilir.



function add2(a = 5, b = 2) {
    console.log(a + b);
}
add2(); // ancak yukarida bir deger girilirse NaN demez.
add2(5, 10); // ama tekrar tanimladiginda 5+10 islemini yapar.





function multipy(a, b) { // a,b yi farkli bir fonksiyon ismi ile tekrar kullanabilirsin.
    return a * b;
}
let number1 = parseInt(prompt("Enter first Number"));
let number2 = parseInt(prompt("Enter second Number"));
let result = multipy(number1, number2);
console.log("result: " + result);





//Get a number from user and check this number
// zero or positive or negative

function checkNumber(x) {
    if (x == 0) {
        return "The number is zero";
    }
    else if (x > 0) {
        return "The number is positive";
    }
    else {
        return "The number is negative";
    }
}
let number3 = parseInt(prompt("Sayi Gir"));
console.log(checkNumber(number3));







// 3 adet sayi kullanicidan alinsin.
// en büyük sayiyi geriye döndürsün.

function checkNumbers(a, b, c) {
    console.log("Max " + Math.max(a, b, c));
}
let value1 = parseInt(prompt("birinci sayiyi gir"));
let value2 = parseInt(prompt("ikinci sayiyi gir"));
let value3 = parseInt(prompt("ücüncü sayiyi gir"));
checkNumbers(value1, value2, value3);





function enBuyukSayi(x, y, z) {
    if (x > y && x > z) {
        return "x en büyük";
    } else if (y > x && y > z) {
        return "y en büyük";
    } else if (z > y && z > x) {
        return "z en büyük";
    } else {
        return "Sayilar eşit";
    }
}
let number4 = parseInt(prompt("Enter first "));
let number5 = parseInt(prompt("Enter second"));
let number6 = parseInt(prompt("Enter third "));
console.log(enBuyukSayi(number4, number5, number6));





//Faktoriyel hesaplayan bir fonksiyon yaz.

function getFuctorial(y) {
    if (y == 0) {
        return "the answer is 1";
    }
    else if (y < 0) {
        return " the num is negatif";
    }
    else {
        let result = 1;
        for (let z = 1; z <= y; z++) {
            result = result * z;
        }

        return result;
    }
}
console.log(getFuctorial(4));





//kullanicidan string bir ifade alin ve reverse edin .(limon --> nomil)

let str = prompt("Bir string giriniz");
let str2 = "";
function ters(str) {
    for(var i = str.length - 1; i >= 0; i--) {
        str2 += str[i];
    }
    return str2;
}
console.log(ters(str));


*/








var scope = "Global";  // global variable

function access() {
    let car = "BMW";
    console.log(car);
    console.log(scope);
}
access();
//console.log(car); 
// yukaridaki disardan yazilan console.log, let ile tanimlanan bir local variable i consola yazdiramaz çünkü sadece bu fonksiyonun body si icinde console.log denip yazdirilabilir, disaridan yazdirilmaz.
// o yüzden hata verir.("car"tanimlanmadi hatasi)(refference error)
// global variable ise disaridan tanimlanir ve iceriden consola yazdirildiginda da hata vermez. "Global" yazisi consolda gözükür







function food() {
    // 3'ü de local variable ,ama içerden yazdirildigi icin consolda gözükür
    var fruits = "Apple";
    let vegetable = "Broccoli";
    const drinks = "Cola";
console.log(fruits);
console.log(vegetable);
console.log(drinks);
}
food();






function food2() {
    // 3'ü de local variable, fonksiyon olarak consola yazdirilsa da undefined olur çünkü yine disari yazdik .
    // body kisminda consola fonksiyon yazdirilamaz ,fonksiyon (consola yazilsa da yazilmasa da)body kismindan çagirilMAZ .
    var fruits = "Apple";
    let vegetable = "Broccoli";
    const drinks = "Cola";
}
console.log(food2()); //fonksiyon olarak consola yazdirmak 






function food3() {
    // 3'ü de local variable ,consola yazmaz hata verir.(ReferenceError), çünkü lokal bir degiskeni disaridan cagirdik.
    var fruits = "Apple";
    let vegetable = "Broccoli";
    const drinks = "Cola";
}
food3();
/*
console.log(fruits);
console.log(vegetable);
console.log(drinks);
*/




//Array
let person =["zeynep","keskin","17"];
console.log(person[0] + person[1] + person[2]);



//Objects    -->   key and values
const person1 ={firstName: "zeynep", lastName: "keskin", age: 17};
console.log(person1.firstName + person1["lastName"] + person1.age);
// tam üstteki satirdaki lastName yukarida tanimladigin ile ayni olmali, yoksa undefined diyor.



//Object with function
const person2 = {
    firstName: "john",
    lastName : "doe",
    fullName : function(){
        return this.firstName + " " + this.lastName ;
        }
};

let nameSurname = person2.fullName(); //fullName in yanina () koyman gerek ! yoksa yazi olarak "fuction" yaziyor,digerleri gibi algiliyor.
console.log(nameSurname);
// yukaridaki iki satir böyle de yazilabilir  -->   console.log(person2.fullName());








const person3 = {
    firstName :"micheal",
    lastName : "mic",
    age: 35
};


//key (firstName) + value("micheal") yazdiriyor. consola kod seklinde yazdiriyor.
console.log(person3);


//yine consola kod seklinde yazdiriyor ama   Object.values(person3)   dedigimiz icin keyleri yazmiyor.key ler yerine 0,1,2 yazmis.
const myArray = Object.values(person3);
console.log(myArray);


//1.yol
for( let i = 0; i < myArray.length; i++){
    const element = myArray[i];
    console.log(element);
}


//2.yol
myArray.forEach(a => console.log(a));









var arr =["a","b","c"];

for(let i=0;  i < arr.length;  i++){
    const element = arr[i];
    console.log(element);
}

arr.forEach(function(el,lll){
    console.log(el,lll);
})








// nested objects
const student = {
    name:"jacop",
    age: 20,
    lessons: {
        math: 70,
        science: 20,
        history: 45
    }
}

console.log(student.lessons.math);

console.log("lessons" in student); // boolean deger sorar. Output --> true or false
console.log("lesson" in student); // dogru yazmak önemli
console.log("math" in student.lessons);  // output: true
console.log("math" in student); // output: false


for(let b in student){
    console.log(b);
}


for(let z in student){
    console.log(student[z]);
}


for(let y in student.lessons){
    student.lessons[y]=student.lessons[y] + 5;
    console.log(student.lessons[y]);
}


student.lessons.math = 90;  // math=70 degeri bu sekilde tekrar tanimlanabilir.
console.log(student);








