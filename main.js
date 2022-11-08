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




/*4*/
$("#anim_four_btn").click(function(){
	$("#aminatn_four").animate({left: "300px",height:"+=20px",width:"+=20px"},2000);
	
});



/*5*/

$("#anim_five_btn").click(function(){
	$("#aminatn_five").animate({transform: 'scale(0.3)'});

});












/* STOP */

$("#slde_btn").click(function(){
	$("#stp_size").slideUp(3000);
});

$("#stop_btn").click(function(){
	$("#stp_size").stop();
});







/*CALL BACK 1*/

$("#cal_btn").click(function(){
	$("#cale").hide('slow',function(){
		alert("This is function in function");
	});
});






$("#hid_btn").click(function(){
	$("#hid").hide(1000);
	$("#sow").hide(1500);
});




/*CALL BACK 2*/

$(".call_two_btn").click(function(){
	$("#whatis").hide(4000);
	alert("The text has already hidden");
});




/*CHAINING*/
$("#chain_btn").click(function(){
	$("#chain").css("color","red").hide(5000).show(2000);
});





/*<!-- JQuery GET -->*/

$("#txt_btn").click(function(){
	alert("SHOWING:"+$(".all_show").text());
});



$("#htmll_btn").click(function(){
	alert("SHOWING:"+$(".all_show").html());
});



$("#val_btn").click(function(){
	alert("SHOWING: This is "+$(".val_txt").val());
});






/*<!-- JQuery SET -->*/

$("#set_txt_btn").click(function(){
	$(".set_txt").text("This Is Text").css("color","blue")
});


$("#set_htmll_btn").click(function(){
	$(".set_htm").html("This Is <b>BOLD HTML </b> Text").css("color","forestgreen")
});




$("#set_val_btn").click(function(){
	$(".set_vallu").val("This is The Value: WHAT THE FUCK..").css("color","violet").css("font-size","55px");
});










/*<!-- JQuery ADD -->*/

$("#append").click(function(){
	$("#add_some").append('<span id="use_item"> After The Patient Had Died</span>').css("color","blueviolet");
});




$("#append").click(function(){
/*	var sentense="The Doctor Came After The Patient Had Died"*/;
	if ( $("#add_some").text()=="The Doctor Came After The Patient Had Died"){
		alert("Right Answer");
	}
	else{
		$("#add_some").css("color","red").text('Button Has Been Disableed');
	}


});

/*.......................remove also working.....................................................*/
/*REMOVE*/

/*$("#apnd_remove").click(function(){
	$("#use_item").remove()
});*/








/*..................................PREPEND................................................*/



$("#prepend").click(function(){
	$("#add_some_pre").prepend('<span>The Patient Had Died <b>Before</b></span>');

});




$("#prepend").click(function(){

	if ($("#add_some_pre").text()=='The Patient Had Died Before The Doctor Came'){
		alert("Rigth Answer.But Don't Press It Again");
	}
	else{

			$("#add_some_pre").text('What The F**k').css("color","blue");
		}

});









/*...........................BEFORE...................................*/




$("#befor").click(function(){
	$("#add_some_bfor").before('<span id="before_ad">The Patient Had Died Before</span>');
});




$("#befor_remove").click(function(){
	$("#before_ad").empty();
});






/*....................parent............................................*/

	$("#arnob_two").parent().css({'color':'white','font-size':'40px','border-radious':'130px','background':'blue'});




	/*.............................PARENTS.................................*/

/*	$("#arnob_two").parents().css({'color':'white','font-size':'40px','background':'blue'});*/





	$("#arnob_one").parents("#manoshi_one").css({'color':'white','font-size':'40px','background':'yellow'});







/*
'''''''''''''''''''''''''''''''''ParentsUntil'''''''''''''''''''''''''''''''''''''''''''''*/

$("#arnob_three").parentsUntil("#manoshi_three").css({'color':'white','font-size':'40px','background':'black'});















	$("#arnob").parentsUntil("#manoshi").css({'color':'white','font-size':'40px','background':'yellow'});




$("#showbutton").click(function(){
	$("#shetu").css('display','inline-block');
});












/********************  Parents =>all Children ****************************/



$(".pr_to_ch").children().css({'color':'blue','font-size':'32px'});







/********************  Parents => One Definite Children ****************************/


$(".pr_to_ch").children(".para_two").css({'color':'blue','background':'green'});





/*
***********************     Parents =>One Definite Children in Children  ******************/

$(".pr_to_child").children(".para_two_child").children(".parrot").css('color','red');


$(".pr_to_child").children(".para_two_child").children(".everyone").css('color','green');






/********************************  Complex children Indentify (ME) ********************************************/



$(".pr_to_child_one").children(".para_two_child_one").children(".everyone_one").children(".mother_one").css('color','OrangeRed').children(".mother_one_childtwo").css('color','blueviolet');












/*
***********  Find********************/


$("#first_div").find("#sixth_div").css('color','OrangeRed');












/*
*************  SIBLINGS  *************/

$("h6").siblings().css('color','blue');





$("h2").siblings("h5").css('color','orange');





/*...............  NEXT  ................*/


$(".h_four").next().css('color','red');






/*...............  NEXT ALL  ................(Worked)*/

/*$(".h_four").next().css('color','red');*/




/*,,,,,,,,,,,,,,,,,,,  NEXT UNTILL ,,,,,,,,,,,,,,,,,*/


$("b").nextUntil("h2").css('color','pink');















/* '''''''''''  first(), last(), eq(), filter() and not() filter() '''''''''''''''''*/




/*>>>>>>>>>>>>>>>>>  first()   <<<<<<<<<<<<<<<<<<<<<<<<*/

$("#first").first().css({"font-size":"22px","color":"red"});










/*>>>>>>>>>>>>>>>>>   last()  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

$(".lastt").last().css({"background":"black","color":"white","font-weight":"800"});






/*>>>>>>>>>>>>>>>>>   eq()  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

$(".equpment").eq(1).css({"background-color": "yellow","font-size": "200%"});





/*>>>>>>>>>>>>>>>>>  filter (use class)  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

//$(".fltr").children(".flower").filter(".rose").css("color","red");






/*>>>>>>>>>>>>>>>>>   not (use class)  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

$("p").not(".parag").css({"background":"black","color":"red"});






































/*$("#").click(function(){
	$("#").before();
});*/










});