window.onscroll= function(){
    const divs=['about_product'];
// //    alert(document.getElementById(divs[0]).getBoundingClientRect().top )
// // divs.forEach(function(item){
// //  alert(document.getElementById(divs[0]).offsetTop);
// // if(window.scrollY==document.getElementById(divs[0]).offsetTop){
// //     alert('ok')
// // }
// var div =document.getElementById(divs[0]).scrollHeight
// console.log('window='+window.scrollY)
// console.log('div='+div)
// // });
// if(window.scrollY>=document.getElementById(divs[0]).offsetTop&&window.scrollY<=document.getElementById(divs[0]).offsetbottom) {
//     console.log('ok');
// }
// console.log(window.scrollY)
}
function open_menu_mobile_menu() {
    if(document.querySelector('.header-menu-list').classList.contains('active')){
        document.querySelector('.header-menu-list').classList.remove('active');
        document.querySelector('.bars-menu-icon').classList.remove('fa-times')
        document.querySelector('.bars-menu-icon').classList.add('fa-bars')
    }else{
        document.querySelector('.header-menu-list').classList.add('active')
        document.querySelector('.bars-menu-icon').classList.add('fa-times')
        document.querySelector('.bars-menu-icon').classList.remove('fa-bars')
    }
}
function icon_hidden_form('')