      // Каждой элменту у которого есть подменю, добавляем класс parent
      $(".left-navigation li ul").each(function(){
        $(this).parent().addClass("parent");
      });
      
      // Если пункт меню active, отображаем его и устанавливаем класс open
      $(".left-navigation li ul li.active").each(function(){
        $(this).parent().css({'display':'block'});
        $(this).parent().parent().addClass("open");
      });
      
      // При клике на меню у которого есть подменю (класс parent) - плавно закрываем меню
      $(".left-navigation").delegate(".parent > a","click",function(e){
        $(".left-navigation .parent.open > ul").not($(this).parent().find("ul")).slideUp(300, 'swing',function(){
           $(this).parent().removeClass("open");
        });
        
        var ul = $(this).parent().find("ul"); // ссылка на родительский ul
        // Открываем или закрываем меню
        ul.slideToggle(300, 'swing', function () {
          var p = $(this).parent();
          if(p.
            hasClass("open")){
            p.removeClass("open");
          }else{
            p.addClass("open");
          }
        });
        e.preventDefault();
      });


// Изменение статуса пользователя - Busy(Занят), invis(Невидимка), away(отошел).
function changeUserStatus() {
    $('.nav-block').on('click', '.user-stage li a', function(e) {
        e.preventDefault();
        var status = $(this).find('span').text();
        currentStatus = $('.user-stage button span').text();
        $('.user-stage button span').text(status);
        if (status == 'Busy') {
            $('.user-stage button i:not(.fa)').removeClass().addClass('busy');
        }
        if (status == 'Invisible') {
            $('.user-stage button i:not(.fa)').removeClass().addClass('invis');
        }
        if (status == 'Away') {
            $('.user-stage button i:not(.fa)').removeClass().addClass('away');
        }
    });
}
    changeUserStatus();