
$(function(){

  $(document).ready( function(){
  // ページ読み込み時に実行したい処理

    $(".index_logo_img").slideDown(300);
    $(".display_none").slideDown(1000);

    setTimeout(function(){


    },2000);

    setTimeout(function(){
      $(".menu_btns").slideDown();
      $(".index_menu").css('z-index','10');
    },3000);


  });

  $(".menu_btn").hover(
    function(){
      $(this).find('.menu_contents').slideDown();
    },
    function(){
      $(this).find('.menu_contents').slideUp();
    }
  );

  $(".pa_cells").hover(
    function(){
      $(this).css('background-color','#c0c0c0');
    },
    function(){
      $(this).css('background-color','white');
    }
  );

  $(".index_menu_contents a").hover(
    function(){
      $(this).css('background-color','#f8b500');

    },
    function(){
      $(this).css('background-color','#30B9F0');

    }
  );

  $(".news_column").click(function(){
  var $answer = $(this).find(".news_content");
  if($answer.hasClass("news_open")){
    $answer.removeClass("news_open");
    $answer.slideUp();
    $(this).find(".op_cl").text("+");
  } else {
    $answer.addClass("news_open");
    $answer.slideDown();
    $(this).find(".op_cl").text("-");
  }
  });

  $(".menu_link").hover(
    function(){
      $(this).css('color','#f8b500');
    },
    function(){
      $(this).css('color','black');
    }
  );


  $(".example").click(function(){
  var $answer = $(this).find(".example_answer");
  if($answer.hasClass("ans_open")){
    $answer.removeClass("ans_open");
    $answer.slideUp();
    $(this).find(".op_cl").text("+");
  } else {
    $answer.addClass("ans_open");
    $answer.slideDown();
    $(this).find(".op_cl").text("-");
  }
  });




});
