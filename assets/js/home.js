$("#customer").css('display','none');
$("#item").css('display','none');
$("#order").css('display','none');


/*Buttons*/
$('#customer_btn').on("click", () => {
    event.preventDefault();
    $("#customer").css('display','block');
    $("#item").css('display','none');
    $("#order").css('display','none');
    $("#home_main").css('display','none');

})
$('#item_btn').on("click", () => {
    event.preventDefault();
    $("#customer").css('display','none');
    $("#item").css('display','block');
    $("#order").css('display','none');
    $("#home_main").css('display','none');


})
$('#order_btn').on("click", () => {
    event.preventDefault();
    $("#customer").css('display','none');
    $("#item").css('display','none');
    $("#order").css('display','block');
    $("#home_main").css('display','none');

})


/*Nav Bar*/
$('#nav_list>a').eq(0).on("click", () => {
    event.preventDefault();
    $("#customer").css('display','none');
    $("#item").css('display','none');
    $("#order").css('display','none');
    $("#home_main").css('display','block');

})

$('#nav_list>a').eq(1).on("click", () => {
    event.preventDefault();
    $("#customer").css('display','block');
    $("#item").css('display','none');
    $("#order").css('display','none');
    $("#home_main").css('display','none');

})

$('#nav_list>a').eq(2).on("click", () => {
    event.preventDefault();
    $("#customer").css('display','none');
    $("#item").css('display','block');
    $("#order").css('display','none');
    $("#home_main").css('display','none');

})


$('#nav_list>a').eq(3).on("click", () => {
    event.preventDefault();
    $("#customer").css('display','none');
    $("#item").css('display','none');
    $("#order").css('display','block');
    $("#home_main").css('display','none');

})

