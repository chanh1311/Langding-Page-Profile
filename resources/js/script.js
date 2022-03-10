$(document).ready(
    function() {
        $('#about-section').waypoint(
            function(direction) {
                if (direction == "down") {
                    $('nav').addClass('sticky');
                } else {
                    $('nav').removeClass('sticky');
                }
            }, {
                offset: '600px'
            }
        )
        $('a').click(function(event) {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 700);
            event.preventDefault();
        });

        // mobile navigation
        $('.mobile-nav-icon').click(
            function() {
                $('.list-header').slideToggle(200);

                if ($('.mobile-nav-icon').hasClass('fa-bars')) {
                    $('.mobile-nav-icon').addClass('fa-times');
                    $('.mobile-nav-icon').removeClass('fa-bars')
                } else {
                    $('.mobile-nav-icon').addClass('fa-bars');
                    $('.mobile-nav-icon').removeClass('fa-times')
                }
            }
        )
    }
)