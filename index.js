'use strict';


//this function will listen for the click on the 'burgerIcon' and then display the navigation links
function burgerIconClick(){
    $('.burgerIcon').on('click', function(){
            $('.burgerNav').toggleClass('hide');            
    });
};    



//This fuction will listen for a click on a burgerNav link and hide the burgerNav

function burgerNavClick(){
    $('.burgerNav a').on('click', function(){
        $('.burgerNav').toggleClass('hide');            
    });
};   

//this loads the different functions when the page loads
    function handlePage(){
        burgerIconClick();
        burgerNavClick();            
    };
     
    $(handlePage);

    function handleThumbnailClicks() {
        $('.tm').on('click', function(event) {
           const imgSrc = $(event.currentTarget).attr('src');  
           const imgAlt = $(event.currentTarget).attr('alt');
           const mnImg = $(event.currentTarget).parent().parent().find('img').attr('id')
        $(`#${mnImg}`).attr('src', imgSrc).attr('alt', imgAlt);
        });
      }
      
      $(handleThumbnailClicks);

    // function apronHover() {
    //     const hd = $('.hs-img').attr('src', 'assets/hd-img.png')
    //     const apr = $('.hs-img').attr('src', 'assets/hd-img-alt.png')
    //     $('.hs-img').hover(apr, hd)
    // }

    $('.hs-img').on({
        "mouseover" : function() {
           this.src = 'assets/hd-img-alt.png';
         },
         "mouseout" : function() {
           this.src='assets/hd-img.png';
         }
       });

       $('.tool_1').on({
        "mouseenter" : function() {
           $('.flex-item-tl-alt').toggleClass('hide');
           $('.flex-item-tl').toggleClass('hide');
         },
         "mouseleave" : function() {
            $('.flex-item-tl-alt').toggleClass('hide');
            $('.flex-item-tl').toggleClass('hide');
        }
       });



       $('.tool_2').on({
        "mouseenter" : function() {
           $('.flex-item-tl-alt2').toggleClass('hide');
           $('.flex-item-tl2').toggleClass('hide');
         },
         "mouseleave" : function() {
            $('.flex-item-tl-alt2').toggleClass('hide');
            $('.flex-item-tl2').toggleClass('hide');
        }
       });


       $('.tool_3').on({
        "mouseenter" : function() {
           $('.flex-item-tl-alt3').toggleClass('hide');
           $('.flex-item-tl3').toggleClass('hide');
         },
         "mouseleave" : function() {
            $('.flex-item-tl-alt3').toggleClass('hide');
            $('.flex-item-tl3').toggleClass('hide');
        }
       });



  