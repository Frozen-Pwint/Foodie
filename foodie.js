    // //Home section starts
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle("sticky", window.scrollY > 0);
    });

    function toggleMenu() {
        const menuToggle = document.querySelector('.menuToggle');
        const navigation = document.querySelector('.navigation');
        menuToggle.classList.toggle('active');
        navigation.classList.toggle('active');
    }
    // //Home section ends

    $(document).ready(function() {
        $(window).on('scroll load', function() {
            if ($(window).scrollTop() > 10) {
                $('#header').addClass('header-active');
            } else {
                $('#header').removeClass('header-active');
            }
        });

        //Lunch&Dinner
        let filterLunch = 'mainDish';
        $('.dishLD .box').not('.' + filterLunch).hide(0);

        $('.controlsLD .buttons').click(function() {

            $(this).addClass('button-active-LD').siblings().removeClass('button-active-LD');

            let filterLunch = $(this).attr('data-filter-LD');
            $('.dishLD .box').not('.' + filterLunch).hide(200);
            $('.dishLD .box').filter('.' + filterLunch).show(400);
        });

        //Dessert&Drink
        let filterDessert = 'dessert';
        $('.dishDD .box').not('.' + filterDessert).hide(0);

        $('.controlsDD .buttons').click(function() {

            $(this).addClass('button-active-DD').siblings().removeClass('button-active-DD');

            let filterDessert = $(this).attr('data-filter-DD');
            $('.dishDD .box').not('.' + filterDessert).hide(200);
            $('.dishDD .box').filter('.' + filterDessert).show(400);
        });
    });