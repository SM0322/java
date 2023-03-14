// let hello = -30.45
// alert(hello);
// alert(4*7);
// alert('Hello'+'World')

// let orange = 100;
// let apple = 200;
// if(orange < apple){
//   alert('orange');
// } else if(orange == apple){
//   alert('equal');
// } else{
//   alert('apple');
// }

// let max = 1
// let min = 1
// let count = 0

// do{
//   count = count + 1;
// }
// while(min < max){
//   min = min * 2;
//   count = count + 1;
// }

// alert(count+"times");

// let i;
// let num = 0;

// for(i=1; i <11; i++){
//   num = num + i;
// }
// alert(num+'times');

// let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
// while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
//   alert('グー・チョキ・パーのいずれかを入力して下さい');
//   user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
// }
// let js_hand = getJShand();
// let judge = winLose(user_hand, js_hand);

// if (user_hand != null){
//   alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
// } else {
//   alert("またチャレンジしてね")
// }

// function getJShand(){
//   let js_hand_num = Math.floor(Math.random() * 3);
//   let hand;
//   if (js_hand_num == 0){
//     hand = "グー";
//   } else if (js_hand_num == 1){
//     hand = "チョキ";
//   } else if (js_hand_num == 2){
//     hand = "パー";
//   }
//   return hand;
// }

// function winLose(user, js){
//   let winLoseStr;
//   if (user == "グー"){
//     if (js == "グー"){
//       winLoseStr = "あいこ";
//     } else if (js == "チョキ"){
//       winLoseStr = "勝ち";
//     } else if (js == "パー"){
//       winLoseStr = "負け";
//     }
//   } else if (user == "チョキ"){
//     if (js == "グー"){
//       winLoseStr = "負け";
//     } else if (js == "チョキ"){
//       winLoseStr = "あいこ";
//     } else if (js == "パー"){
//       winLoseStr = "勝ち";
//     }
//   } else if (user == "パー"){
//     if (js == "グー"){
//       winLoseStr = "勝ち";
//     } else if (js == "チョキ"){
//       winLoseStr = "負け";
//     } else if (js == "パー"){
//       winLoseStr = "あいこ";
//     }
//   }
//   return winLoseStr;
// }

// $(document).ready(function() {
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });

// #ｃｓｓを上書き
// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });

// ＃下から上にスライド
// $(function() {
//   $('.box1').slideUp();
// });

// ＃消えていたのを無理やり表示
// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color': '#0000FF'});
// });

// #もともと表示されていたやつを消す
// $(function(){
//   $('.box1').hide();
// });

// #連続アニメーション
// $(function() {
//   $('.box1').slideDown(function(){
//     $('.box1').css({
//       'background-color': '#0000FF',
//       'width': '200px',
//       'height': '100px'
//     }).slideUp();
//   });
// });

// #マウスを乗せると色が変化
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color': '#0000FF'});
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').css({'background-color': '#FF0000'});
//   });
// });

// #クラスの付与と削除による変化
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// })

// $(function(){
//   $('.box1').on('click', function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// })

// $(function(){
//   $('.bg1').on('click', function(){
//     $('.bg1').slideUp();
//   });
//   $('.bg2').on('click', function(){
//     $('.bg2').slideUp();
//   });
//   $('.bg3').on('click', function(){
//     $('.bg3').slideUp();
//   });
//   $('.bg4').on('click', function(){
//     $('.bg4').slideUp();
//   });
// })

// #クリックした要素全てにスライドアップが適用される
// $(function(){
//   $('.box1').on('click', function(){
//     $(this).slideUp();
//   });
// });

$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color', 'red');
  });
});