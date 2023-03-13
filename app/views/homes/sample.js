// const nickname = "taro";
// console.log(nickname)
// nickname = "ziro";
// console.log(nickname)

// var str = 'webcamp';

// function foo(){
//   console.log(str)
//   var z = "hello";
// }

// foo()
// console.log(z)

// function hoo(){
//   let x = 'webcamp'
//   {
//     let y = 'hello'
//     console.log(y)
//   }
//   console.log(x)
  
// }

// hoo()

// for (let i = 0; i < 10;i++){
//     console.log(i)
// }

// console.log(i)

// var str = "a"

// function hee(){
//   console.log(str)
//   var str = "b"
//   console.log(str)
// }

// hee()

// let alertString;

// // 作成した関数を呼び出し、変数へ格納
// alertString = addString("WebCamp");

// //変数の中身をアラートで表示する
// alert(alertString);

// // 作成した関数
// function addString(strA){
//   let addStr = "Hello " + strA;
//   return addStr;
// }

// let promptStr = prompt('何か好きな文字を入力してください');

// alert(promptStr);

let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert('いずれかを入力');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}

alert('あなたの手は' + user_hand + 'です。');

let js_hand = setJShand();
alert('相手の選んだ手は' + js_hand + 'です。');

function setJShand(){
  let js_hand_num = Math.floor(Math.random()*3);
  let js_hand;
  
  if(js_hand_num == 0){
      js_hand = "グー";
  }
  else if(js_hand_num == 1){
      js_hand = "チョキ";
  }
  else if(js_hand_num == 2){
      js_hand = "パー";
  }
  
  return js_hand;
}

let judge = winlose(user_hand, js_hand);
if (user_hand != null){
  alert('あなたの手は' + user_hand + 'です。相手の選んだ手は' + js_hand + 'です。結果は' + judge + 'です。');
} else {
  alert('またチャレンジしてね')
}


function winlose(user, js){
  let winloseStr;
  
  if(user == "グー"){
    if(js == "グー"){
      winloseStr = "あいこ";
    } else if(js == "チョキ"){
      winloseStr = "勝ち";
    } else if(js == "パー"){
      winloseStr = "負け";
    } 
  } else if(user == "チョキ"){
    if(js == "グー"){
      winloseStr = "負け";
    } else if(js == "チョキ"){
      winloseStr = "あいこ";
    } else if(js == "パー"){
      winloseStr = "勝ち";
    } 
  } else if(user == "パー"){
    if(js == "グー"){
      winloseStr = "勝ち";
    } else if(js == "チョキ"){
      winloseStr = "負け";
    } else if(js == "パー"){
      winloseStr = "あいこ";
    } 
  } 
  return winloseStr;
}