/*Menu effeito*/
$(window).scroll(function(event){

    const efeito = window.pageYOffset;
    const posicao = 60;
    if (efeito > posicao){
        $(".menu").addClass('active');
        $(".logo").addClass('active');
        $("nav ul").addClass('active');
        $(".MenuBT").addClass('active');
    }else{
        $(".menu").removeClass('active');
        $(".logo").removeClass('active');
        $("nav ul").removeClass('active');
        $(".MenuBT").removeClass('active');
    }
});
/*Menu effeito*/

/*botão effeito*/
jQuery(document).ready(function(){

    jQuery("#btn_UP").hide();
    
    jQuery('a#btn_UP').click(function () {
             jQuery('body,html').animate({
               scrollTop: 0
             }, 800);
            return false;
       });
    
    jQuery(window).scroll(function () {
             if (jQuery(this).scrollTop() > 1000) {
                jQuery('#btn_UP').fadeIn();
             } else {
                jQuery('#btn_UP').fadeOut();
             }
         });
    });
    