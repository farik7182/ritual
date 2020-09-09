// $(document).on('click', '.buton', function(event) {
//     // event.preventDefault();
//     $('.modal').css("display: block");
//     name = $('#name').val();
//     num = $('#num').val();
//     message = $('#message').val();

    // $.ajax({
	// 	url: 'mail.php',
	// 	method: 'post',
	// 	data: {name:name, num: num, message: message},
	// 	success: function(data){   
    //   $('#result').html(data);
    // }  
    // }); 
// });

// $(document).ready(function(){
//   $.ajax({
//     url: 'slect.php',
//     method: 'post',
//     success: function(data){   
//       $('#result').html(data);
//     }  
//     });
// });

const btn = document.querySelector('.buton'),
      modal = document.querySelector('.modal'),
      hamburger = document.querySelector('.hamburger'),
      menuHam = document.querySelector('.menuHam');


// hamburger.addEventListener('click', () => {
//     menuHam.style.cssText = 'display:block';
// })

$(function(){

    $('.hamburger').on('click', function() {
       $('.menuHam').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
       });

    });

});


btn.addEventListener('click', () => {
    modal.classList.add('show');
    modal.classList.remove('hide');
});
document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) { 
        modal.classList.add('hide');
        modal.classList.remove('show');
    }
});

modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == "") {
        modal.classList.add('hide');
        modal.classList.remove('show');
    }
});


$(document).on('click', '#btnregg', function(event) {
    event.preventDefault();
    name = $('#name').val();
    num = $('#num').val();
    message = $('#message').val();

    $.ajax({
		url: 'mail.php',
		method: 'post',
		data: {name:name, num: num, message: message},
		success: function(data){   
      $('#result').html(data);
    }  
    }); 
});





