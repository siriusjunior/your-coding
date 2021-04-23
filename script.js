function spshow() {
    document.getElementById('line-1').classList.toggle('line-1');
    document.getElementById('line-2').classList.toggle('line-2');
    document.getElementById('line-3').classList.toggle('line-3');
    document.getElementById('sp-nav').classList.toggle('in');
}
document.getElementById('btn-gnav').addEventListener('click' , function () {
    spshow();
} );


var swiper = new Swiper('.swiper-container',
{
    loop: true,
    direction:'horizontal',
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
    },
    slidesPerView: 2.5,
    spaceBetween: 30,
    slidesOffsetBefore: 150,
    breakpoints: {
        870: {
            slidesPerView: 3,
            spaceBetween: 25,
            slidesOffsetBefore: 0,
        },
        1025: {
        slidesPerView: 3.8,
        spaceBetween: 25,
        slidesOffsetBefore: 160,
        },
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});


const menu = document.querySelectorAll(".accordion__question_js");
function toggle() {
    const content = this.nextElementSibling;
    content.classList.toggle("is-open");
    menu.slice(-1)[0].toggle("bd-b");
}
for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", toggle);
}



const smoothScrollTrigger = document.querySelectorAll('a[href="contact"]');
for(let i=0; i<smoothScrollTrigger.length; i++) {
    smoothScrollTrigger[i].addEventListener('click', (e) => {
        e.preventDefault();
        let href =  smoothScrollTrigger[i].getAttribute('href');
        let targetElement = document.getElementById(href);
        const rect = targetElement.getBoundingClientRect().top;
        const offset = window.pageYOffset;
        const gap = 150;
        const target = rect + offset - gap;
        window.scrollTo({
            top: target,
            behavior: 'smooth',
        });
    });
}


function no_scroll(){
    // PCスクロール禁止
    document.addEventListener("mousewheel", scroll_control, { passive: false });
    // スマホタッチ操作禁止
    document.addEventListener("touchmove", scroll_control, { passive: false });
}
function return_scroll(){
    // PC禁止解除
    document.removeEventListener("mousewheel", scroll_control, { passive: false });
    document.removeEventListener("touchmove", scroll_control, { passive: false });
}
// スクロール禁止補助メソッド
function scroll_control(event) {
    event.preventDefault();
}
// ボタンを押したときに、disableクラス付与
// クラスを持っていたら禁止function作動
// クラスを持っていなければfunciton解除
var gnav = document.getElementById('btn-gnav');
gnav.addEventListener( 'click' , function(){
    gnav.classList.toggle('disable-scroll');
    if ( gnav.classList.contains('disable-scroll')) {
        no_scroll();
    } else {
        return_scroll();
    }
});

function formCheck(){
    flag = true;
    const nameWarning = document.querySelector('#name-warning');
    const mailWarning = document.querySelector('#mail-warning');
    const commentWarning = document.querySelector('#comment-warning');
    const agreeWarning = document.querySelector('#agree-warning');
   // 入力必須項目が入力されているかチェック
    if( document.querySelector('#yourname').value === "" ){
        // 名前が未入力の場合
        flag = false;
        nameWarning.style.display = 'block';
    } else {
        // 入力があった場合
        nameWarning.style.display = 'none';
    }
    if( document.querySelector('#yourmail').value === "" ){ 
        // emailが未入力の場合
        flag = false;
        mailWarning.style.display = 'block';
    } else {
        // 入力があった場合
        mailWarning.style.display = 'none';
    }
    if( document.querySelector('#comment').value === "" ){ 
        // commentが未入力の場合
        flag = false;
        commentWarning.style.display = 'block';
    } else {
        // 入力があった場合
        commentWarning.style.display = 'none';
    }
    if ( document.querySelector('#confirm').checked ){
        // 同意チェックがされている場合
        agreeWarning.style.display = 'none';
    } else {
        // 同意チェックがされていない場合
        flag = false;
        agreeWarning.style.display = 'block';
    }
   // flagにより送信ボタン制御
    if ( flag === false ){
        alert('必要事項をご確認ください。');
        return false;
    } else {
        alert('送信成功しました。');
        return true;
    }
}