$(document).ready(function(){


$("#hid_btn").click(function(){
	$("#hid").hide(1000);
	$("#sow").hide(1500);
});




/*SHOW*/

$("#sow_btn").click(function(){
	$("#hid").show(1000);
	$("#sow").show(2000);
});



/*TOGGLE*/

$("#tgl_btn").click(function(){
	$("#tgl").toggle();
});




/*FADE IN*/

$("#fdein_btn").click(function(){
	$("#fdein").fadeIn();
});




$("#fdeout_btn").click(function(){
	$("#fdeout").fadeOut();
});


































































});