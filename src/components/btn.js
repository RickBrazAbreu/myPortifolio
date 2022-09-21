window.addEventListener('scroll', () =>{
    const scrolled = window.scrollY;

    if(this.scrollY > 200){
        document.getElementById( '.btn-home' ).addClass( "show-btn" )
        //document.getElementById("btn-home").addClass("show-btn")
    }else{
        document.getElementById( '.btn-home' ).removeClass( "show-btn" )
        //document.getElementById("btn-home").removeClass("show-btn")
    }
    
   // $( "p" ).removeClass( "myClass noClass" ).addClass( "yourClass" );
    // if(this.scrollY > 500){
    //     $('.scroll-up-btn').addClass("show");
    // }else{
    //     $('.scroll-up-btn').removeClass("show");
    // }

})


// $(window).scroll(function(){
//     // sticky navbar on scroll script
//     if(this.scrollY > 20){
//         $('.navbar').addClass("sticky");
//     }else{
//         $('.navbar').removeClass("sticky");
//     }
    
//     // scroll-up button show/hide script
//     if(this.scrollY > 500){
//         $('.scroll-up-btn').addClass("show");
//     }else{
//         $('.scroll-up-btn').removeClass("show");
//     }
// });
