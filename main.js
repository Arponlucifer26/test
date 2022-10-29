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
/*	$("#fdein").fadeOut();*/  /* important*/
});





/*FADE OUT*/

$("#fdeout_btn").click(function(){
	$("#fdeout").fadeOut();
});



/*FADE TO*/
$("#fdeto_btn").click(function(){
	$("#fdeto").fadeTo(3000,0.5);
});






/*FADE TOGGLE*/
$("#fdetgl_btn").click(function(){
	$("#fdetgl").fadeToggle(1000);
});




/*slideDown()
slideUp()
slideToggle()*/

$("#sldeup_btn").dblclick(function(){
	$("#sldeup").slideUp(500);
});



$("#sldedown_btn").click(function(){
	$("#sldedown").slideDown(2000);

});



$("#sldetgl_btn").click(function(){
	$("#sldetgl").slideToggle(1000);
});


/*ANIMATION*/

/*=>*/ 

$("#anim_one_btn").click(function(){
    $("#aminatn_one").animate({left: '250px'},4000);
    $("#aminatn_one").css({"background":"#e8a010"});
  });


/*2*/

$("#anim_two_btn").click(function(){
	$("#aminatn_two").animate({height: '500px'},1000);
	$("#aminatn_two").animate({width: '500px'},1000);
	$("#aminatn_two").animate({height: '200px'},1000);
	$("#aminatn_two").animate({width: '200px'},1000);
});


/*3*/
$("#anim_three_btn").click(function(){
	$("#aminatn_three").animate({height: 'toggle'});
	
});

$("#anim_threeo_btn").click(function(){
	$("#aminatn_threeo").animate({height: 'toggle'});
	$("#aminatn_threeo").animate({width: 'toggle'});
});












































});