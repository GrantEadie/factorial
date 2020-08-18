$(document).ready(function(){
  $("#form0ne").submit(function(event){

    let input = parseInt($("input#input1").val());
    let output = 1;

    for (let i = input; i >= 1; i--) {
      output = output * i;
      //output 
    }
    alert(output);
  });
});