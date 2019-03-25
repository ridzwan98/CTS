function add_field()
{
  var total_text=document.getElementsByClassName("input_text");
  total_text=total_text.length+1;
  document.getElementById("field_div").innerHTML=document.getElementById("field_div").innerHTML+
  "<p id='input_text"+total_text+"_wrapper' ><input type='text1' class='input_text' id='input_text"+total_text+"' placeholder='Code Course:Course Name'> &nbsp <input type='text1' class='input_text' id='input_text"+total_text+"' placeholder='Grade'><input type='button' value='Remove' onclick=remove_field('input_text"+total_text+"');></p>";
}
function remove_field(id)
{
  document.getElementById(id+"_wrapper").innerHTML="";
}

function add_field1()
{
  var total_text=document.getElementsByClassName("input_text");
  total_text=total_text.length+1;
  document.getElementById("field_div1").innerHTML=document.getElementById("field_div1").innerHTML+
  "<p id='input_text"+total_text+"_wrapper' ><input type='text1' class='input_text' id='input_text"+total_text+"' placeholder='Code Course:Course Name'> &nbsp <input type='text1' class='input_text' id='input_text"+total_text+"' placeholder='Grade'><input type='button' value='Remove' onclick=remove_field1('input_text"+total_text+"');></p>";
}
function remove_field1(id)
{
  document.getElementById(id+"_wrapper").innerHTML="";
}