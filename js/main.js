$(document).ready(() => {
    $(function () {
        var $nav = $("header .navbar");
        if ($(this).scrollTop() > $nav.height()) {
            $nav.removeClass('transparent');
        } else {
            $nav.addClass('transparent');
        }
    });

    $(function () {
        $(document).scroll(function () {
            var $nav = $("header .navbar");
            if ($(this).scrollTop() > $nav.height()) {
                $nav.removeClass('transparent');
            } else {
                $nav.addClass('transparent');
            }
        });
    });

    $(function () {
        var sideNav = document.getElementById("sideNav");
        sideNav.style.width = "23%";

        $("#sideNavTogglerButton").on("click", (e) => {
            if (sideNav.style.width == "23%") {
                sideNav.style.width = 0;
            } else {
                sideNav.style.width = "23%";
            }
        });
    });

    $(function () {

        var link = $('#sideNavBar a.nav-link');

        link.on('click', function (e) {
            $(this).addClass('active');
        });

        $('#mainSection').on('scroll', function () {
            scrNav();
        });

        function scrNav() {
            var sTop = $('#mainSection').scrollTop();
            $('.mainSectionContent').each(function () {
                var id = $(this).attr('id'),
                    offset = $(this).offset().top,
                    height = $(this).height();
                if ((sTop + 60 >= offset) && ((offset < 0) ? (Math.abs(offset - 55) <= height / 2) : (offset < height))) {
                    link.removeClass('active');
                    $('#sideNavBar').find('[data-scroll="' + id + '"]').addClass('active');
                    return false;
                }
            });
        }

        scrNav();
    });
});