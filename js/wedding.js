$(document).ready(function(){
	//왼쪽메뉴 하위메뉴 내려움.
	$(".mainMenu").on("click mouseenter", function(){
		//모든 하위메뉴는 올라가고
		$(".subMenu").stop().slideUp();
		//해당되는 하위메뉴만 내려온다.
		$(this).next().stop().slideDown();
	});
	//왼쪽메뉴 영역에서 마우스를 벗어나면.
	$("#left ul").mouseleave(function(){
		//모든 하위메뉴는 올라가고
		$(".subMenu").stop().slideUp();
	});
	//왼쪽메뉴 마지막항목이 탭키를 벗어날때.(포커스를 잃을때)
	$("#left ul li:last-child nav a:last-child").blur(function(){
		//모든 하위메뉴는 올라가고
		$(".subMenu").stop().slideUp();
	});
	
	//슬라이드: 2.8초 간격으로 slide02라는 이름을 가진 함수를 계속 호출
	const slide01 = setInterval(slide02,2800);
	
	function slide02(){
			$("#slide").stop().animate({left:"-900px"},1000,
					function(){
							$("#slide").append( $("#slide a").first() );
							$("#slide").css("left" , 0);
					}
			);	
	}	

	
	//팝업보이기 : 공지사항 링크 항목 클릭.
	$("#notice a").click(function(){
		$("#popup").fadeIn();
	});/////////////
	
	//팝업닫기 : 팝업 닫기버튼.
	$("#popup button").click(function(){
		$("#popup").fadeOut();
	});///////////////
	


});///////////////////////////end


