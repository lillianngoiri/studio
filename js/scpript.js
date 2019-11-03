


$(document).ready(function () {

    $(".col-sm-3 img").hover(function () {
        $(this).fadeTo("slow", 0.6);
    }, function () {
        $(".col-sm-3 img").fadeTo("slow", 1);
    });


    /*
        
        
        $("#port1").hover(function() {
          $("#work4").fadeTo("slow", 0.6);
          $("#pic1").fadeTo("slow", 1);
        }, function() {
          $("#work4").fadeTo("slow", 1);
          $("#pic1").fadeTo("slow", 0);
        });
    
    
     
    
        $("#port2").hover(function() {
          $("#work3").fadeTo("slow", 0.6);
          $("#pic2").fadeTo("slow", 1);
        }, function() {
          $("#work3").fadeTo("slow", 1);
          $("#pic2").fadeTo("slow", 0);
        });
    
        $("#port3").hover(function() {
          $("#work2").fadeTo("slow", 0.6);
          $("#pic3").fadeTo("slow", 1);
        }, function() {
          $("#work2").fadeTo("slow", 1);
          $("#pic3").fadeTo("slow", 0);
        });
    
        $("#port4").hover(function() {
          $("#work1").fadeTo("slow", 0.6);
          $("#pic4").fadeTo("slow", 1);
        }, function() {
          $("#work1").fadeTo("slow", 1);
          $("#pic4").fadeTo("slow", 0);
        });
        $("#port5").hover(function() {
          $("#work5").fadeTo("slow", 0.6);
          $("#pic5").fadeTo("slow", 1);
        }, function() {
          $("#work5").fadeTo("slow", 1);
          $("#pic5").fadeTo("slow", 0);
        });
        $("#port6").hover(function() {
          $("#work6").fadeTo("slow", 0.6);
          $("#pic6").fadeTo("slow", 1);
        }, function() {
          $("#work6").fadeTo("slow", 1);
          $("#pic6").fadeTo("slow", 0);
        });
        $("#port7").hover(function() {
          $("#work7").fadeTo("slow", 0.6);
          $("#pic7").fadeTo("slow", 1);
        }, function() {
          $("#work7").fadeTo("slow", 1);
          $("#pic7").fadeTo("slow", 0);
        });
        $("#port8").hover(function() {
          $("#work8").fadeTo("slow", 0.6);
          $("#pic8").fadeTo("slow", 1);
        }, function() {
          $("#work8").fadeTo("slow", 1);
          $("#pic8").fadeTo("slow", 0);
        });
    */


    $(".click1").click(function () {
        $("#design").toggle();
        $("#pdesign").toggle();
    })

    $(".click2").click(function () {
        $("#development").toggle();
        $("#pdevelopment").toggle();
    })
    $(".click3").click(function () {
        $("#management").toggle();
        $("#pmanagement").toggle();
    })



    $("#row").submit(function (event) {
        event.preventDefault();
        var blanks = ["name", "mail", "message"];
        var input = [];
        blanks.forEach(function (blank) {
            input.push($("#" + blank).val());
        });
        alert("Thank You " + input[0] + " for reaching out to us. We have received your message");
        $("#row")[0].reset();
    });

    $("#btn").submit(function (event) {
        event.preventDefault();
        var blanks = ["name", "mail", "message"];
        var input = [];
        blanks.forEach(function (blank) {
            input.push($("#" + blank).val());
        });
        alert("Thank You " + input[0] + " for reaching out to us. We have received your message");
        $("#contacts")[0].reset();
    });
});