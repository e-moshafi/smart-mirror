window.onscroll = function () {
    const divs = ['about_product'];
   divs.forEach(function(item){
    var j, i;
    for (i = 0, j = 20; i < 20; i++, j--) {
        var scroll_bottom=document.getElementById(item).offsetTop+document.getElementById(item).offsetHeight;
        if ((window.scrollY == (document.getElementById(item).offsetTop + i) || window.scrollY == (document.getElementById(item).offsetTop - j))|| (window.scrollY ==(scroll_bottom + i) || window.scrollY == (scroll_bottom - j))) {
            console.log('ok');
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