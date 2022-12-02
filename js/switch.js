/*語言切換選單*/
$('.switch-list').hide()
$('.language-pack').click(function(e){
    e.stopPropagation();
    $('.switch-list').toggle(300, 'linear')
})
$("body").click(function(){
    $('.switch-list').hide()
})
$('.switch-list').click(function(e){
    e.stopPropagation();
})

/*語言圖示hover變色*/
$('.language-pack').hover(function(){
	$('.switch-icon').attr("src","images/language/icon_language_hover.svg");
},
function(){
	$('.switch-icon').attr("src","images/language/icon_language.svg");

});

/*滑動至最上方*/
$('.top_btn').hide();
		$(window).scroll(function() {
			var sh = $(window).scrollTop();
			
			if(sh > 300) {
				$('.top_btn').show(500, 'swing');
			}else {
				$('.top_btn').hide(500, 'swing');
			}
		});
		
		$('.top_btn').click(function() {
			$('html,body').animate({
				scrollTop : 0 //到最上面  
			}, 500);
		return false;
		});
var scaleItem = document.querySelector('.bnTitle');

/*獎金跳動動畫每2.5秒一次*/
const animate = document.querySelector('.award');
animate.classList.add('fuyofuyo');
animate.addEventListener('animationend', () => {
animate.classList.remove('fuyofuyo');  
setTimeout(function(){
animate.classList.add('fuyofuyo');
},2500)
})


scaleItem.classList.add('effect');
scaleItem.addEventListener('animationend', ()=>{
	scaleItem.classList.remove('effect');
	setTimeout(function(){
		scaleItem.classList.add('effect');
	},2500)
})

var left = document.querySelector('.handL');
var right = document.querySelector('.handR');

anime({
	targets: left,
	rotate: [-3,4,-3,4,-3,0],
	translateX: [300,200,150,100,50,0],
	duration: 1000,
	easing: 'spring(1, 80, 10, 0)',
	complete: function () {
		animationDone = true;
		animateAdd();
	}   
})
anime({
	targets: right,
	rotate: [-3,4,-3,4,-3,0],
	translateX: [-300,-200,-150,-100,-50,0],
	duration: 1000,
	easing: 'spring(1, 80, 10, 0)',
	complete: function () {
		animationDone = true;
		animateAdd2();
	}   
})

function animateAdd(){
	left.classList.add('animate');
}
function animateAdd2(){
	right.classList.add('animate2');
}