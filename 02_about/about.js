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