window.onscroll = function () {
    const divs = ['about_product','features','send_request'];
    divs.forEach(function (item) {
        var j, i;
        for (i = 0, j = 20; i < 20; i++, j--) {
            var element = document.getElementById(item);
            var element_line = document.getElementById(item + '-line-menu');
            var scroll_bottom = element.offsetTop + element.offsetHeight;
            if ((window.scrollY == (element.offsetTop + i) || window.scrollY == (element.offsetTop - j)) || (window.scrollY == (scroll_bottom + i) || window.scrollY == (scroll_bottom - j))) {
                if (element_line.classList.contains('active')===false) {
                    element_line.classList.add('active')
                }
            }else{
                // if (element_line.classList.contains('active')) {
                //     element_line.classList.remove('active')
                // } 
            }
        }
    })
}
function open_menu_mobile_menu() {
    if (document.querySelector('.header-menu-list').classList.contains('active')) {
        document.querySelector('.header-menu-list').classList.remove('active');
        document.querySelector('.bars-menu-icon').classList.remove('fa-times')
        document.querySelector('.bars-menu-icon').classList.add('fa-bars')
    } else {
        document.querySelector('.header-menu-list').classList.add('active')
        document.querySelector('.bars-menu-icon').classList.add('fa-times')
        document.querySelector('.bars-menu-icon').classList.remove('fa-bars')
    }
}
function icon_hidden_form(value_input, name_element) {
    var element = document.querySelector('.rounded-icon-' + name_element);
    if (value_input === '' || value_input === ' ') {
        if (element.classList.contains('deactive-element-show') === true) {
            element.classList.remove('deactive-element-show');
        }
    } else {
        if (element.classList.contains('deactive-element-show') === false) {
            element.classList.add('deactive-element-show');
        }

    }
}