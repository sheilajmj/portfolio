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