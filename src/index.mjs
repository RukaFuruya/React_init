// const, letの変数宣言
// var val1= "var変数";
// console.log(val1);

// const　val3 = "いい感じ";
// console.log(val3);

// const val4 = {
//     name: "yes",
//     age: 31
// }
// console.log(val4);
// val4.name="no";
// console.log(val4);

// const val5 = ["dog", "cat"];
// console.log(val5);
// val5[0] = "bird";
// console.log(val5);
// val5[2] = "monkey";
// console.log(val5);


// const name = "ジャケえ";
// const age = 31;

// const message1 = "I am" + name;
// console.log(message1);

// const message2 = `私の名前は${name}です。${age}`;
// console.log(message2);

// // 従来の関数
// // console.logの中で関数を呼び出して、その中の文字列をreturnするだけ。
// function func1(str){
//     return str;
// }
// console.log(func1("func1です。"));

// // アロー関数
// // 関数を変数のように書くことができる。
// // 要するに、かっけえってわけ。
// const func2 = (str) => {
//     return str;
// };
// console.log(func2("func2です。"))

// アロー関数での簡単な足し算
// const cal = (num1, num2) => num1 + num2;
// console.log(cal(1,4));
// これできてんのかな
// const myProfile = {
//     name: "Yes",
//     age: 31
// };

// const message1 = `I am ${myProfile.name}. ${myProfile.age} years old.`;
// console.log(message1);

// 分割代入
// 分割代入をすると、わざわざオブジェクトの名前指定しなくてもよくなる。
// const {name, age} = myProfile;
// const message2 = `I am ${name}. ${age} years old.`;
// console.log(message2);

// 配列の分割代入
// 従来
// const myProfile = ["Yes", 31];
// message1 = `I am ${myProfile[0]}. & ${myProfile[1]} years old.}`;
// console.log(message1);

// 配列の分割代入
// 配列の中に好きな変数名をつけることができる。
// const [name, age] = myProfile;
// message2 = `I am ${name}. & ${age} years old.}`;
// console.log(message2);

// const myProfile = {
//     age:31
// };
// const {age}= myProfile;
// console.log(`I am ${age}`);

// Jsのオブジェクト省略記法
// const name = "waiwai";
// const age = 31;

// // 従来のここ。オブジェクトのnameにnameを代入がだるい。
// const myProfile = {
//     name: name,
//     age: age
// };

// console.log(myProfile);

// // 省略形
// const myProfile1 = {
//     name,
//     age
// };

// console.log(myProfile1);


// // スプレッド構文
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);


// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(...arr3);

// const nameArr = ["山田","田中","わっしょい"]; 
// for(let i=0; i<nameArr.length; i++){
//     console.log(nameArr[i]);
// }

// // mapを使った配列の処理
// nameArr.map((name) => {
//     console.log(name);
// });

// // map や　filter を使った配列の処理

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//    return num % 2 === 1 ;
// });
// console.log(newNumArr);
// const nameArr = ["山田","田中","わっしょい"];
// const newnameArr = nameArr.map((name)=>{
//     if (name === "わっしょい") {
//         return name;
//     } else {
//         return `${name}さん`;
//     }
    
// }) ;
// console.log(newnameArr);

// 三項演算子
// ある条件　？　条件がTrueのとき : 条件がfalseのとき
// const val1 = 3 > 1 ? "True" : "false";
// console.log(val1);

// // trueとfalseで値を変えたいに三項演算子使う。
// const num = 1300;
// const formattedNum = typeof num === "number" ? num.toLocaleString() : "数値を入力";
// console.log(formattedNum);
// // ~$ 1,300

// const checkSum = (num1, num2) => {
//     return num1 + num2 > 100 ? "100を超えています。"　: "数値は正常です。";
// }

// console.log(checkSum(80, 10));

// ~$ 数値は正常です。