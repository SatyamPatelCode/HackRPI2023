let count=1;
$("#addsection").click(function() {
    $("#section").append($('<h3>').text("Section "+count));
    count = count+1;
});