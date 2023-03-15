// const swiper = new Swiper('.swiper', {
//   loap: true,
//   pagination: {
//     el: '.swiper-pagination',
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   }
// });

// $(function() {
//   $('#back a').on('click', function(e) {
//     // back内のaタグがクリックされたら
//     $('body, html').animate({
//       // アニメーションを付与するjQueryの関数、body htmlでbodyまたはhtml要素全てに与える
//       scrollTop:0
//       // 変化対象のプロパティ名と変化値、scropTopはスクロール位置を習得することができ、今回はページ最上部に移動する
//     }, 800);
//     // 800=800ms=0.8sでがアニメの動作時間
//     e.preventDefault();
//   });
// });

// ハンバーガーメニュー
// $(function() {
//   $('.menu-trigger').on('click', function(e) {
//     // .menu-triggerがクリックされたときに、処理が行われる
//     $(this).toggleClass("active");
//     // クリックされた要素自身にactiveクラスが追加され、もう一度クリックすると削除されます。
//     $('#sp-menu').fadeToggle();
//     // .fadeToggle()は、要素のフェードイン・フェードアウトを切り替える
//     e.preventDefault()
//   })
// })

// タブメニュー
// $('#tab-contents .tab[id != "tab1"]').hide();
// // tab-contentsの子要素のclassがtabでidがtab1でないものはすべて隠す
// $('#tab-menu a').on('click', function(event) {
//   // タブメニューのaタグがクリックされたら
//   $('#tab-contents .tab').hide();
//   // タブコンテンツのタブがすべて非表示に
//   $('#tab-menu .active').removeClass("active");
//   $(this).addClass("active");
//   $($(this).attr("href")).show();
//   event.preventDefault();
// })

// 天気API
// （API_KEY には、"取得したAPIキー" を記述）
const API_KEY = "f6320e2c60baac4057f808defc95a687";

$(function(){
  $('#btn').on('click', function() {
    // 入力された都市名でWebAPIに天気情報をリクエスト
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + f6320e2c60baac4057f808defc95a687,
      dataType : 'jsonp',
    }).done(function (data){
      //通信成功
      // 位置
      $('#place').text(data.name);
      // 最高気温
      $('#temp_max').text(data.main.temp_max);
      // 最低気温
      $('#temp_min').text(data.main.temp_min);
      //湿度
      $('#humidity').text(data.main.humidity);
      //風速
      $('#speed').text(data.wind.speed);
      // 天気
      $('#weather').text(data.weather[0].main);
      // 天気アイコン
      $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('img').attr("alt",data.weather[0].main);
    }).fail(function (data) {
      //通信失敗
      alert('通信に失敗しました。');      });
  });
});