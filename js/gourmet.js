document.addEventListener("DOMContentLoaded", function() {
    // 상단메뉴
    const headerUl = document.querySelector("header ul");
    const mainMenu = document.querySelectorAll('header li>a');
    const subMenu = document.querySelectorAll('header nav');
    const subBg = document.getElementById('subBg');

    // 메뉴 hover 이벤트

    const remove = () => {
        mainMenu.forEach( i  => i.classList.remove('act') );
    }
 

    mainMenu.forEach( j => {

        j.addEventListener("mouseenter", () => {
            remove();
            j.classList.add('act');
        });
    });    

    headerUl.addEventListener( "mouseenter", () => {
        subMenu.forEach( i =>   i.classList.add('act') );
        subBg.classList.add('act');
    });    

    subMenu.forEach( i => {
        i.previousElementSibling.classList.remove('act');

        i.addEventListener("mouseenter", () => {
            remove();
            i.previousElementSibling.classList.add('act');
        });
    });

    headerUl.addEventListener("mouseleave", () => {
        remove();
        subMenu.forEach( i =>  i.classList.remove('act'));        
        subBg.classList.remove('act');
    });

    /***************************/    
    // 슬라이드 이미지(페이드 기법)  
    const visual_a = document.querySelectorAll("#visual a");
    let z = 0;

    const fade = () => {
        visual_a.forEach( i => {
            i.style.opacity = 0;   
        });
        z = (z + 1) % 3 ; 
        visual_a[z].style.opacity = 1;
    };
    
    setInterval(fade, 2500);  

    /****************************/
    // 공지사항 팝업
    const popButton = document.querySelector(".pop");
    const blackOverlay = document.getElementById("black");
    const closeButton = document.querySelector("#black input");

    popButton.addEventListener("click", () => {
        blackOverlay.style.display = "block";
    });

    closeButton.addEventListener("click", () => {
        blackOverlay.style.display = "none";
    });

    // 공지사항 닫기 [esc] 키 클릭
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            blackOverlay.style.display = "none";
        }
    });
});