const searchForm= document.querySelector(".search-form");
const cartItem=document.querySelector(".cart-items-container"); /*yandaki parantezin içine açtırmak istediğimiz kısmı yazarız.*/
const navbar=document.querySelector(".nav-bar");



//! button
const searchBtn= document.querySelector("#search-btn");
const cartBtn= document.querySelector("#cart-btn");  /*burda da tıklayacağım butonun adını vericem*/
const menuBtn=document.querySelector("#menu-btn");

searchBtn.addEventListener("click",function(){

    searchForm.classList.toggle("active");
/*arama imlecine clicklediğim zaman arama menusu gelicek add dersem basınca gelir ama toogle dersem bir kere daha basınca eski haline döner*/
    document.addEventListener("click",function(e){
        if(!e.composedPath().includes(searchBtn) && 
            !e.composedPath().includes(searchForm)){
            searchForm.classList.remove("active");
        }
    })
})

cartBtn.addEventListener("click",function(){

    cartItem.classList.toggle("active");
/*arama imlecine clicklediğim zaman arama menusu gelicek add dersem basınca gelir ama toogle dersem bir kere daha basınca eski haline döner*/
    document.addEventListener("click",function(e){
        if(!e.composedPath().includes(cartBtn) && 
            !e.composedPath().includes(cartItem)){
            cartItem.classList.remove("active");
        }
    })
})

menuBtn.addEventListener("click",function(){

    navbar.classList.toggle("active");
/*arama imlecine clicklediğim zaman arama menusu gelicek add dersem basınca gelir ama toogle dersem bir kere daha basınca eski haline döner*/
    document.addEventListener("click",function(e){
        if(!e.composedPath().includes(menuBtn) && 
            !e.composedPath().includes(navbar)){
            navbar.classList.remove("active");
        }
    })
})
