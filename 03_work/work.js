function change_color(bg_color){
  let body = document.body;
  let weblogo = document.getElementById('work-list-logo');
  let webbar = document.getElementById('change-input');
  let webbar2 = document.getElementById('change-input2');
  let webbar3 = document.getElementById('change-input3');
  let barbg = document.getElementById('is-change');

  weblogo.style.color = '#fff';
  webbar.style.backgroundColor = '#fff';
  webbar2.style.backgroundColor = '#fff';
  webbar3.style.backgroundColor = '#fff';
  $("li.footer-li > a").css("color","#fff");
  $('.nav_item > a').addClass('change-color');
  $('.footer-li > a').addClass('change-footer');
  body.style.backgroundImage = '';
  barbg.style.backgroundColor = bg_color
  $('.button_item > img').addClass('b_img');
  $('.switch_button').addClass('change_color');
}
function normal_color(no_color){
  let body = document.body;
  let weblogo = document.getElementById('work-list-logo');
  let webbar = document.getElementById('change-input');
  let webbar2 = document.getElementById('change-input2');
  let webbar3 = document.getElementById('change-input3');
  let barbg = document.getElementById('is-change');

  weblogo.style.color = '#111';
  webbar.style.backgroundColor = '#111';
  webbar2.style.backgroundColor = '#111';
  webbar3.style.backgroundColor = '#111';
  $("li.footer-li > a").css("color","#666");
  $('.nav_item > a').removeClass('change-color');
  $('.footer-li > a').removeClass('change-footer');
  body.style.backgroundImage = '';
  barbg.style.backgroundColor = no_color;
  $('.button_item > img').removeClass('b_img');
  $('.switch_button').removeClass('change_color');
}

$(document).ready(function () {
    let color = [
        "#0164ac",//00巨研科技
        "#ff6900",//01東南遊學
        "#000",//02藝姿舞集
        "#f0e7da",//03撈王鍋物
        "#003968",//04承萬酒店
        "#f4f4f4",//05紐約健身
        "#fcfcfc",//06三和牌
        "#000000",//07陽光心居
        "#48220f",//08萬靈神通
        "#333",//09LG健康生活
        "#cee7f1",//10舒膚寧
        "#333",//11Jup.Lounge Bar
        "#333",//12歐棉床墊
        "#213775",//13德妍思
        "#f7f7f7",//14台灣美食技術交流協會
        "#f7f7f7",//15上揚國際
        "#f7f7f7",//16創空間集團官網
        "#363636",//17目映台北
        "#f7f7f7",//18Aeralux
        "#fff5ee",//19愛德蘭絲集團
        "#000000",//20cardmaster
        "#f7f7f7",//21健身教練媒合平台
        "#f7f7f7",//22柔絲沙龍
        "#004996",//23台元紡織
        "#f8f6f1",//24台灣富綢纖維
        "#f7f7f7",//25歐西瑪
        "#0164ac",//26巨研科技
        "#ff6900",//東南遊學
    ];
    let body = document.body;
    //initialize swiper when document ready   
    var mySwiper = new Swiper ('.swiper-container', {
      autoplay: null,
      loop: true,
      parallax: true,
      //pagination: '.swiper-pagination',
      //paginationClickable: true,
      grabCursor: true,
      speed: 1000,
      prevButton:'.swiper-button-prev',
      nextButton:'.swiper-button-next',
     
        onTransitionStart(swiper) {
        let i = swiper.activeIndex;
        console.log(i);
        body.style.backgroundColor = color[i];
        switch(i){
          case 2:
          case 7:
            change_color('#333333');
          break;
          case 17:
            change_color('#5e5e5e');
          break;
          case 8:
            change_color('#6d4f3f');
          break;
          case 6:
            normal_color('#f1f1f1');
            body.style.backgroundImage = 'url(/03_work/case_6/image/groovepaper.png)';
          break;
          case 4:
            change_color('#3b6187');
          break;
          case 9:
            change_color('#5c5c5c');
          break;
          case 11:
            normal_color('#fff');
            body.style.backgroundImage = 'url(/03_work/case_11/image/web_bg2.jpeg)';
          break;
          case 3:
            normal_color('#f2ece1');
          break;
          case 10:
            normal_color('#d8ebf4')
          break;
          case 4:
          case 5:
          case 18:
          case 25:
          case 27:
            normal_color('#f1f1f1');
          break;
          case 1:
          case 27:
            normal_color('#ff874a');
          break;
          case 26:
          case 0:
            change_color('#4682be');
          break;
          case 12:
            normal_color('#fff');
            body.style.backgroundImage = 'url(/03_work/case_12/image/so-white.jpg)';
            body.style.backgroundColor = '#fff';
          break;
          case 13:
            change_color('#4d5e91');
          break; 
          case 14:
            normal_color('#f4f4f4');
          break; 
          case 19:
            normal_color('#fef7f1');
          break;
          case 20:
            change_color('#333333');
          break;
          case 21:
            change_color('#333333');
            body.style.backgroundImage = 'url(/03_work/case_21/image/dark-honeycomb.png)';
          break;
          case 22:
            normal_color('#f3f3f3');
            body.style.backgroundImage = 'url(/03_work/case_22/image/201022_bg.png)';
          break;
          case 23:
            change_color('#5e93cb');
          break;
          case 24:
            normal_color('#f5f3ef');
            body.style.backgroundImage = 'url(/03_work/case_24/image/bg_pic.png)';
          break;
        }
      },

    });
});

//列表頁切換
function btn1() {
  //alert("我被點到");
  //$('#single_list').show(500,);
  //$('#show_list').hide(300,);
  $('#single_list').addClass('active');
  $('#show_list').removeClass('active');
  $('.header-menu').removeClass('active');
  $('.switch_button').removeClass('active');
  $('.sub_menu').removeClass('active');
};
function btn2() {
  //alert("我被點到");
  //$('#show_list').show(500,);
  //$('#single_list').hide(300,);
  $('#single_list').removeClass('active');
  $('#show_list').addClass('active');
  $('.header-menu').addClass('active');
  $('.switch_button').addClass('active');
  $('.sub_menu').addClass('active');
};


