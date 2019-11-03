
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

    $("#row").submit(function(event) {
        event.preventDefault();
        var blanks = ["name", "mail", "message"];
        var input = [];
        blanks.forEach(function(blank) {
          input.push($("#" + blank).val());
        });
        alert("Thank You " + input[0] + " for reaching out to us. We have received your message");
        $("#row")[0].reset();
        });

    $("#").submit(function(event) {
        event.preventDefault();
        var blanks = ["name", "mail", "message"];
        var input = [];
        blanks.forEach(function(blank) {
          input.push($("#" + blank).val());
        });
        alert("Thank You " + input[0] + " for reaching out to us. We have received your message");
        $("#contacts")[0].reset();
    });

    $("#").row(function(event) {
        event.preventDefault();
        var 
    }

