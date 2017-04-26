$(document).ready(function(){
	var element = document.getElementById("header")
    $(element).hover(function(){
        $(this).css("color", "pink");
        }, function(){
        $(this).css("color", "black");
    });
});

$(document).ready(function(){
    $(".btn1").click(function(){
        $("a").hide();
    });
    $(".btn2").click(function(){
        $("a").show();
    });
});


$(document).ready(function(){
	var element2 = document.getElementById("submit_button")
    $(element2).click(function(){
        alert("it's been submitted!");
    });
});

$(document).ready(function(){
	var prof = document.getElementById("prof")
	var description = document.getElementById("description")
    $(prof).click(function(){
        $(description).text("I'm passionate about marketing and strategy in the tech industry, where I hope to implement long-lasting changes at the intersection of data and creativity.");
    });
});

$(document).ready(function(){
	var personal = document.getElementById("personal")
	var description = document.getElementById("description")
    $(personal).click(function(){
        $(description).text(
        	"Hi there! I'm an LA 626 native, music enthusiast, iced-vanilla latte addict, adventure seeker, hip-hop dancer, and ENFJ.");
    });
});