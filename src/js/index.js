$(function () {
    validateNewsletter();
});

validateNewsletter = function () {
    const newsletter = $("#newsletter");
    const error = $(".error");

    newsletter.on("input", function () {
        const currentValue = $(this).val();

        const EmailRegex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (currentValue.length > 24 || !EmailRegex.test(currentValue)) {
            error.removeClass("hidden");
            $(this).css({
                outlineWidth: "medium",
                outlineStyle: "invert",
                outlineColor: "hsl(0, 93%, 68%)",
            });
        } else {
            error.addClass("hidden");
        }
    });
};