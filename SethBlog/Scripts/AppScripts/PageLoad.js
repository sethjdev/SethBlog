$(document).ready(function () {

    $('.sidebar-nav li a').click(function (e) {
        e.preventDefault();
        $('#body-content > *').hide();
        $('#body-content').append("<h1>Loading...</h1>");

        var self = $(this);
        setTimeout(function () {
            $('#body-content').load(self.attr("data-url"), function () {
                $('#body-content > *').show();
            });
        }, 2000);

    });

});