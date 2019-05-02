$(function(){
   //initializes the "console" with a starting message
  $('#console-box').append('console is ready...');
  
    //displays the attributes and contents of the radio button selected
  $('input[type=radio]').click(function(){
    $('#console-box').append('<br>class:'+$(this).attr("class")+'|value:'+$(this).parent().text());
    $(this).toggleClass('selected').siblings().removeClass('selected');
  });
    
    //displays the attributes and contents of the text input box
  $('input[type=text]').blur(function(){
    $('#console-box').append('<br>class:'+$(this).attr("class")+'|value:'+$(this).val());
    $(this).toggleClass('selected').siblings().removeClass('selected');
  });
});
  
