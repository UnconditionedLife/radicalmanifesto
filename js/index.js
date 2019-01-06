console.log("XXXX")

// $('a li').click(function(e){
//     console.log("LINK")
//     $(this).css('font-weight','bold');
// }).css('font-weight','normal')

$('.navItem').click(function() {
    $('.navItem').removeClass('navActive');
    $(this).addClass('navActive');
});


// NOT functioning but could be used for the menu as one scrolls
(function($) {
$(document).ready(function() {
    var navChildren = $("#navMenu li").children();
    var aArray = [];
    for (var i = 0; i < navChildren.length; i++) {
        var aChild = navChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    }
    $(window).scroll(function() {
        var windowPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        var docHeight = $(document).height();
        for (var i = 0; i < aArray.length; i++) {
            var theID = aArray[i];
            var secPosition = $(theID).offset().top;
            secPosition = secPosition - 135;
            var divHeight = $(theID).height();
            divHeight = divHeight + 90;
            if (windowPos >= secPosition && windowPos < (secPosition + divHeight)) {
                $("a[href='" + theID + "']").parent().addClass("navActive");
            } else {
                $("a[href='" + theID + "']").parent().removeClass("navActive");
            }
        }
    });

});
})(jQuery);
