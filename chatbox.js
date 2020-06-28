
if(window.outerWidth < 425) {
    $("li.animated.hide").each(function(index) {
        $(this).delay(6000*index).fadeIn(5500);
    })
    $("li.animated").each(function(index) {
        $(this).delay(100*index).fadeOut(1000);
    });
}
else{
    $("li.animated.hide").each(function(index) {
        $(this).delay(6000*index).fadeIn(5500);
    });
}

$(".chatEntry.hide").each(function(index) {
    $(this).delay(4000*index).fadeIn(5500);
});



$("div.loadingStatus").each(function(index){
    ($(this).delay(4000*index).fadeIn(4500))
  
});



