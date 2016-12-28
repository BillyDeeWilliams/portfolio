'use strict';

/*********************************
* $('') fade from deault opacity *
* to full on mouseover and       *
* back to defual on mouseleave   *
*********************************/

$(document).ready(function() {
  $(' ').mouseenter(function() {
    $(' ').fadeTo('fast', 1);
  });

  $(' ').mouseleave(function() {
    $(' ').fadeTo('fast', 0.5);
  });
});

/****************************
* click a buttpon to appear *
* or disapear a $object     *
****************************/

$(document).ready(function() {
  $('button').click(function() {
    $('.vanish').toggle('slow');
  });
});

// a nice light blue
// #blue {
//     background-color: #A7DBD8;
// }


/*******************************
**    some circle divs css    **
**                            **
********************************

div {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    background-color: #FF9C5B;
    display: inline-block;
}

.red {
    background-color: #E84A5F;
}

.pink {
    background-color: #FF847C;
}

*****************************end*/


//
// $(document).ready(function (){
//
// });



/*
"todo app"

.js:
$(document).ready(function (){

    $(document).on('click', '.item', function (){
        $(this).remove();
    });

        $('#button').click(function(){
            var toAdd = $('input[name=checkListItem]').val();
            $('.list').append($('<div class="item">' + toAdd + '</div>'));
        });

});

.css:

h2 {
    font-family:arial;
}

form {
    display: inline-block;
}

#button{
    display: inline-block;
    height:20px;
	width:70px;
	background-color:#cc0000;
	font-family:arial;
	font-weight:bold;
	color:#ffffff;
	border-radius: 5px;
	text-align:center;
	margin-top:2px;
}

.list {
	font-family:garamond;
	color:#cc0000;
}


.html:
<!DOCTYPE html>
<html>
    <head>
    	<title>To Do</title>
        <link rel="stylesheet" type="text/css" href="stylesheet.css"/>
        <script type="text/javascript" src="script.js"></script>
	</head>
	<body>
		<h2>To Do</h2>
		<form name="checkListForm">
			<input type="text" name="checkListItem"/>
		</form>
		<div id="button">Add!</div>
		<br/>
		<div class="list"></div>
	</body>
</html>
//
// */

//acordian content within collections of mutiple instances of an html elem
// $(document).ready(function() {
//     $("#menu").accordion({collapsible: true, active: false});
// });
