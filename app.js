

// // Seçilen numarayı tutacak bir değişken tanımlayın
// let selectedNum = null;

// Tüm ask__item elementlerini seçin
// const askItem = document.querySelectorAll('.ask__item');

$(".ask__item").click(function() {

   var numValue = $(this).attr("value");
   
   $(this).addClass('selected');

   if($(".ask__item").hasClass('selected')){
      $(".selected").removeClass('selected')
      $(this).addClass('selected');
   }
   console.log(numValue)
});

$(function() {
   $(".ty").hide();
});
 

  

$(".ask__btn").click(function() {
 
   if(!$(".ask__item").hasClass('selected')){
      alert('Puanlamayı Seçmediniz!')
      $(".ty").hide();
   } else{
      $(".ask").hide();
      $(".ty").show();

      // var selectValue = $(this).attr("id");
      var selectValue = $('.ask__item.selected').attr("value");
      console.log(selectValue);
      $("#select").html(selectValue);
     
      
   }

 
});