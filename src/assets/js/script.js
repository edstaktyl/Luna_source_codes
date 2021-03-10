
     $("#updateme").click(function(){
        $(".sign-upform").hide();
        $(".sign-thankyou").show(); 
    });
    

    function openNav() {
        document.getElementById("NavMenu").style.height = "100%";
    }

    function closeNav() {
        document.getElementById("NavMenu").style.height = "0%";
        document.getElementById("navbarNavAltMarkup").classList.remove("show"); 
    }
    
    // if ($(window).width() < 480 || $(window).height() < 480) {
    //     $('#navbarNavAltMarkup').on('hide.bs.dropdown', function () {
    //         return false;
    //     });  
    // }

    $(document).ready(function(){

        $('.dropdown-submenu a').on("click", function(e){
            $(this).next('ul').toggle();
            e.stopPropagation();
            e.preventDefault();
        });
      
    });