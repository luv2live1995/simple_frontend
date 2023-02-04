$(document).ready(function(){


    $(".number, .operator").click(function(){
        var btnVal = $(this).val();
        $(".display p").append(btnVal);
    });

    $(".calcBtn").click(function(){
        var inpFor = $(".display p").text();
        console.log(inpFor);
        $(".display p").text(eval(inpFor));
    });

    $(".funcKey#clear").click(function(){
        $(".display p").empty();
    });

    $(".funcKey#backSpace").click(function(){
        var oneLastCharRemoved = $(".display p").text().slice(0, -1);
        $(".display p").text(oneLastCharRemoved);
    });

    $(".tab").click(function(){
        $(".tab").removeClass("active");
        $(this).addClass("active");
        $(".tab-content").removeClass("active");
        $("#tab-" + $(this).attr("data-tab").split("-")[1]).addClass("active");
    });
    

    

});

