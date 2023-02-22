
 $(document).ready(function(){//시작
  $("#open1").click(function(){
  //animate({css속성 : 값 }, 시간, 움직임방식, 콜백함수)
  //open1을 클릭하면 다음과 같은 일이 일어남
  //leftwrap 의 css속성중에 left값이 0
    $("#leftWrap").css({"left":"0"},200,"swing");
    $("#contentWrap").css({"padding":"0px 0 0 150px"},200);
    $("#open1").hide();
    $("#container").css({"width":"99%"})
  });
  
  $("#close1").click(function(){
    $("#leftWrap").css({"left" : "-300px"}, 200);
    $("#contentWrap").css({"padding":"0px 0 0 5px"},200);
    $("#open1").show();
    $("#container").css({"width":"98%"})
  });



  });//끝
  $("dt").click(function(){//내가 선택한 dt =this
    if($("+ dd", this).css("display") == "none"){
      $("dd").slideUp();//누가 열려잇는지 확인 불가, 전체다 닫기
      $("+ dd", this).slideDown();

    }
    $("dt").removeClass("on");
    $(this).addClass("on")

});



function checkOnlyOne(element) {
  
  const checkboxes 
      = document.getElementsByName("proce06");
  
  checkboxes.forEach((cb) => {
    cb.checked = false;
  })
  
  element.checked = true;
};
$(document).ready(function(){//시작
  const chkAll = document.querySelector("#chkAll")
  chkAll.addEventListener("change", () => {
   const chkList = document.getElementsByName("chk");
   for (chk of chkList ) {
     chk.checked = chkAll.checked;
   }
  });
  });//끝


  $(function(){ $( "#sortable" ).sortable(); });

  /*  탭 */

$('div.authCont .authTab01 .td_blue a').on('click', function (e) {
  e.preventDefault();
  var index = $('div.authCont .authTab01 .td_blue a').index(this);
  $('div.authCont .authTab01 .td_blue, div.authCont .tab_contents01').removeClass('active');
  
  $('div.authCont .authTab01 .td_blue:eq('+ index +'), div.authCont .tab_contents01:eq('+ index +')').addClass('active');

});
$('div.codeCont .codeTab01 .td_blue a').on('click', function (e) {
  e.preventDefault();
  var index = $('div.codeCont .codeTab01 .td_blue a').index(this);
  $('div.codeCont .codeTab01 .td_blue, div.codeCont .tab_contents').removeClass('active');

  $('div.codeCont .codeTab01 .td_blue:eq('+ index +'), div.codeCont .tab_contents:eq('+ index +')').addClass('active');

});

      //팝업창 만들기
     

    $(function(){
      $("#confirm01").click(function(){
        modalClose(); //모달 닫기 함수 호출
        
        //컨펌 이벤트 처리
    });
      $("#modal-open02").click(function(){   $("#popup02").css('display','flex').hide().fadeIn();
      });
      $("#close02").click(function(){
          modalClose();
      });
      function modalClose(){
        $("#popup02").fadeOut();
      }  
                            
    });   
    $(function(){
      $("#confirm02").click(function(){
        modalClose(); //모달 닫기 함수 호출
        
        //컨펌 이벤트 처리
    });
      $("#modal-open03").click(function(){   $("#popup03").css('display','flex').hide().fadeIn();
      });
      $("#close03").click(function(){
          modalClose();
      });
      function modalClose(){
        $("#popup03").fadeOut();
      }                        
    });   
    $(function(){
      $("#confirm07").click(function(){
        modalClose(); //모달 닫기 함수 호출
        
        //컨펌 이벤트 처리
    });
      $("#modal-open07").click(function(){   $("#popup07").css('display','flex').hide().fadeIn();
      });
      $("#close07").click(function(){
          modalClose();
      });
      function modalClose(){
        $("#popup07").fadeOut();
      }                        
    });    
    $(function(){
      $("#confirm08").click(function(){
        modalClose(); //모달 닫기 함수 호출
        
        //컨펌 이벤트 처리
    });
      $("#modal-open08").click(function(){   $("#popup08").css('display','flex').hide().fadeIn();
      });
      $("#close08").click(function(){
          modalClose();
      });
      function modalClose(){
        $("#popup08").fadeOut();
      }                        
    });     
    $(function(){
      $("#confirm04").click(function(){
        modalClose(); //모달 닫기 함수 호출
        
        //컨펌 이벤트 처리
    });
      $("#modal-open04").click(function(){   $("#popup04").css('display','flex').hide().fadeIn();
      });
      $("#close04").click(function(){
          modalClose();
      });
      function modalClose(){
        $("#popup04").fadeOut();
      }                        
    });
    $(function(){
      $("#confirm05").click(function(){
        modalClose(); //모달 닫기 함수 호출
        
        //컨펌 이벤트 처리
    });
      $("#modal-open05").click(function(){   $("#popup05").css('display','flex').hide().fadeIn();
      });
      $("#close05").click(function(){
          modalClose();
      });
      function modalClose(){
        $("#popup05").fadeOut();
      }                        
    });
    $(function(){
      $("#confirm06").click(function(){
        modalClose(); //모달 닫기 함수 호출
        
        //컨펌 이벤트 처리
    });
      $("#modal-open06").click(function(){   $("#popup06").css('display','flex').hide().fadeIn();
      });
      $("#close06").click(function(){
          modalClose();
      });
      function modalClose(){
        $("#popup06").fadeOut();
      }                        
    });
    $(function(){
      $("#confirm09").click(function(){
        modalClose(); //모달 닫기 함수 호출
        
        //컨펌 이벤트 처리
    });
      $("#modal-open09").click(function(){   $("#popup09").css('display','flex').hide().fadeIn();
      });
      $("#close09").click(function(){
          modalClose();
      });
      function modalClose(){
        $("#popup09").fadeOut();
      }                        
    });
    $(function(){
      $("#confirm10").click(function(){
        modalClose(); //모달 닫기 함수 호출
        
        //컨펌 이벤트 처리
    });
      $("#modal-open10").click(function(){   $("#popup10").css('display','flex').hide().fadeIn();
      });
      $("#close10").click(function(){
          modalClose();
      });
      function modalClose(){
        $("#popup10").fadeOut();
      }                        
    });
    $(function(){
      $("#confirm11").click(function(){
        modalClose(); //모달 닫기 함수 호출
        
        //컨펌 이벤트 처리
    });
      $("#modal-open11").click(function(){   $("#popup11").css('display','flex').hide().fadeIn();
      });
      $("#close11").click(function(){
          modalClose();
      });
      function modalClose(){
        $("#popup11").fadeOut();
      }                        
    });
    $(function(){
      $("#confirm12").click(function(){
        modalClose(); //모달 닫기 함수 호출
        
        //컨펌 이벤트 처리
    });
      $("#modal-open12").click(function(){   $("#popup12").css('display','flex').hide().fadeIn();
      });
      $("#close12").click(function(){
          modalClose();
      });
      function modalClose(){
        $("#popup12").fadeOut();
      }                        
    });
    $(function(){
      $("#confirm13").click(function(){
        modalClose(); //모달 닫기 함수 호출
        
        //컨펌 이벤트 처리
    });
      $("#modal-open13").click(function(){   $("#popup13").css('display','flex').hide().fadeIn();
      });
      $("#close13").click(function(){
          modalClose();
      });
      function modalClose(){
        $("#popup13").fadeOut();
      }                        
    });
    $(function(){
      $("#confirm14").click(function(){
        modalClose(); //모달 닫기 함수 호출
        
        //컨펌 이벤트 처리
    });
      $("#modal-open14").click(function(){   $("#popup14").css('display','flex').hide().fadeIn();
      });
      $("#close14").click(function(){
          modalClose();
      });
      function modalClose(){
        $("#popup14").fadeOut();
      }                        
    });
    $(function(){
      $("#confirm15").click(function(){
        modalClose(); //모달 닫기 함수 호출
        
        //컨펌 이벤트 처리
    });
      $("#modal-open15").click(function(){   $("#popup15").css('display','flex').hide().fadeIn();
      });
      $("#close15").click(function(){
          modalClose();
      });
      function modalClose(){
        $("#popup15").fadeOut();
      }                        
    });
    
    $(function(){
      $("#confirm16").click(function(){
        modalClose(); //모달 닫기 함수 호출
        
        //컨펌 이벤트 처리
    });
      $("#modal-open16").click(function(){   $("#popup16").css('display','flex').hide().fadeIn();
      });
      $("#close16").click(function(){
          modalClose();
      });
      function modalClose(){
        $("#popup16").fadeOut();
      }                        
    });
    $(function(){
      $("#confirm17").click(function(){
        modalClose(); //모달 닫기 함수 호출
        
        //컨펌 이벤트 처리
    });
      $("#modal-open17").click(function(){   $("#popup17").css('display','flex').hide().fadeIn();
      });
      $("#close17").click(function(){
          modalClose();
      });
      function modalClose(){
        $("#popup17").fadeOut();
      }                        
    });
    $(function(){
      $("#confirm18").click(function(){
        modalClose(); //모달 닫기 함수 호출
        
        //컨펌 이벤트 처리
    });
      $("#modal-open18").click(function(){   $("#popup18").css('display','flex').hide().fadeIn();
      });
      $("#close18").click(function(){
          modalClose();
      });
      function modalClose(){
        $("#popup18").fadeOut();
      }                        
    });
    
    $(function(){
      $("#confirm19").click(function(){
        modalClose(); //모달 닫기 함수 호출
        
        //컨펌 이벤트 처리
    });
      $("#modal-open19").click(function(){   $("#popup19").css('display','flex').hide().fadeIn();
      });
      $("#close19").click(function(){
          modalClose();
      });
      function modalClose(){
        $("#popup19").fadeOut();
      }                        
    });
    $(function(){
      $("#confirm20").click(function(){
        modalClose(); //모달 닫기 함수 호출
        
        //컨펌 이벤트 처리
    });
      $("#modal-open20").click(function(){   $("#popup20").css('display','flex').hide().fadeIn();
      });
      $("#close20").click(function(){
          modalClose();
      });
      function modalClose(){
        $("#popup20").fadeOut();
      }                        
    });
    $(function(){
      $("#confirm21").click(function(){
        modalClose(); //모달 닫기 함수 호출
        
        //컨펌 이벤트 처리
    });
      $("#modal-open21").click(function(){   $("#popup21").css('display','flex').hide().fadeIn();
      });
      $("#close21").click(function(){
          modalClose();
      });
      function modalClose(){
        $("#popup21").fadeOut();
      }                        
    });
  
	
   /* 메뉴 */
   $('#noneDiv li.has-sub > button').on('click', function(){
		//$(this).removeAttr('href');
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp('fast');
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown('fast');
			// element.siblings('li').children('ul').slideUp('fast');
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			// element.siblings('li').find('ul').slideUp('fast');
		}
		return false;
	});


  $('.open50').click(function(){
    $('.fitericon').css("width", "16%");
    $('.filtercont').css("width", "83%");
  });
  $('.close50').click(function(){
    $('.fitericon').css("width", "5%");
    $('.filtercont').css("width", "94%");
  });

function onDisplay(){
  $('#noneDiv').show();
}
function offDisplay(){
  $('#noneDiv').hide();
};



  


$(function () {
	$("#checkme").change (function () {
	var  st = this.checked;
		if (st) {
			$("input#res01").prop("disabled", false);
			$("input#res01").css("background","none");
			$("input#aNo12").prop("disabled",  false);
			$("input#aNo12").css("background","none");
      $("input#aNo02").prop("disabled", false);
			$("input#aNo02").css("background","none");
			$("input#aNo03").prop("disabled",  false);
			$("input#aNo03").css("background","none");
      $("input#aNo04").prop("disabled", false);
			$("input#aNo04").css("background","none");
			$("input#aNo05").prop("disabled",  false);
			$("input#aNo05").css("background","none");
      $("input#aNo06").prop("disabled", false);
			$("input#aNo06").css("background","none");
			$("input#aNo07").prop("disabled",  false);
			$("input#aNo07").css("background","none");
      $("input#aNo08").prop("disabled",  false);
			$("input#aNo08").css("background","none");
		  } else {
			$("input#res01").prop("disabled",  true);
			$("input#res01").css("background","#f2f2f3");
			$("input#aNo12").prop("disabled",  true);
			$("input#aNo12").css("background","#f2f2f3");
      $("input#aNo02").prop("disabled",  true);
			$("input#aNo02").css("background","#f2f2f3");
			$("input#aNo03").prop("disabled",  true);
			$("input#aNo03").css("background","#f2f2f3");
      $("input#aNo04").prop("disabled",  true);
			$("input#aNo04").css("background","#f2f2f3");
			$("input#aNo05").prop("disabled",  true);
			$("input#aNo05").css("background","#f2f2f3");
      $("input#aNo06").prop("disabled",  true);
			$("input#aNo06").css("background","#f2f2f3");
			$("input#aNo07").prop("disabled",  true);
			$("input#aNo07").css("background","#f2f2f3");
      $("input#aNo08").prop("disabled",  true);
			$("input#aNo08").css("background","#f2f2f3");
		}
	});
});
$(function () {
	$("#checkme02").change (function () {
	var  st = this.checked;
		if (st) {
			$("input#res02").prop("disabled", false);
			$("input#res02").css("background","none");
			$("input#aNo13").prop("disabled",  false);
			$("input#aNo13").css("background","none");
      $("input#aNo21").prop("disabled", false);
			$("input#aNo21").css("background","none");
			$("input#aNo15").prop("disabled",  false);
			$("input#aNo15").css("background","none");
      $("input#aNo16").prop("disabled", false);
			$("input#aNo16").css("background","none");
			$("input#aNo17").prop("disabled",  false);
			$("input#aNo17").css("background","none");
      $("input#aNo18").prop("disabled", false);
			$("input#aNo18").css("background","none");
			$("input#aNo19").prop("disabled",  false);
			$("input#aNo19").css("background","none");
      $("input#aNo20").prop("disabled",  false);
			$("input#aNo20").css("background","none");
		  } else {
			$("input#res02").prop("disabled",  true);
			$("input#res02").css("background","#f2f2f3");
			$("input#aNo13").prop("disabled",  true);
			$("input#aNo13").css("background","#f2f2f3");
      $("input#aNo21").prop("disabled",  true);
			$("input#aNo21").css("background","#f2f2f3");
			$("input#aNo15").prop("disabled",  true);
			$("input#aNo15").css("background","#f2f2f3");
      $("input#aNo16").prop("disabled",  true);
			$("input#aNo16").css("background","#f2f2f3");
			$("input#aNo17").prop("disabled",  true);
			$("input#aNo17").css("background","#f2f2f3");
      $("input#aNo18").prop("disabled",  true);
			$("input#aNo18").css("background","#f2f2f3");
			$("input#aNo19").prop("disabled",  true);
			$("input#aNo19").css("background","#f2f2f3");
      $("input#aNo20").prop("disabled",  true);
			$("input#aNo20").css("background","#f2f2f3");
		}
	});
});


