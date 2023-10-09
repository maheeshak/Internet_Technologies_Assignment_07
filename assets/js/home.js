$('#customer_btn').on("click", () => {
    const customerSection = $('#customer');
    const customerSectionTop = customerSection.offset().top;
    $('html, body').animate({
        scrollTop: customerSectionTop
    }, 1000);

})
$('#item_btn').on("click", () => {
    const customerSection = $('#item');
    const customerSectionTop = customerSection.offset().top;
    $('html, body').animate({
        scrollTop: customerSectionTop
    }, 1000);

})
$('#order_btn').on("click", () => {
    const customerSection = $('#order');
    const customerSectionTop = customerSection.offset().top;
    $('html, body').animate({
        scrollTop: customerSectionTop
    }, 1000);

})