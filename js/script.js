
$(function(){

  $(document).ready( function(){
  // ページ読み込み時に実行したい処理

    $(".logo").fadeIn(2000);

    setTimeout(function(){
      $(".loading").animate({
        'width':'50vw'
      },1000);
    },2000);

    setTimeout(function(){
      $(".menu_btns").slideDown();
    },2000);


  });

  $(".menu_btn").hover(
    function(){
      $(this).find('.menu_contents').slideDown();
    },
    function(){
      $(this).find('.menu_contents').slideUp();
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
      $(this).css('color','#5d8729');
    },
    function(){
      $(this).css('color','white');
    }
  );

  $(".menu_link").click(
    function(){
      $(".about_overview").show();
      $(".about_me").show();
      $(".about_history").show();
      var id = $(this).attr('id');
      switch(id){
        case "history_btn":
          $(".about_overview").fadeOut();
          $(".about_me").fadeOut();
          break;

        case "overview_btn":
          $(".about_history").fadeOut();
          $(".about_me").fadeOut();
          break;

        case "aboyt_us":
          $(".about_history").fadeOut();
          $(".about_overview").fadeOut();
          break;
      };
    }
  );



});
