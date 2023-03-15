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
$('#tab-contents .tab[id != "tab1"]').hide();
// tab-contentsの子要素のclassがtabでidがtab1でないものはすべて隠す
$('#tab-menu a').on('click', function(event) {
  // タブメニューのaタグがクリックされたら
  $('#tab-contents .tab').hide();
  // タブコンテンツのタブがすべて非表示に
  $('#tab-menu .active').removeClass("active");
  $(this).addClass("active");
  $($(this).attr("href")).show();
  event.preventDefault();
})