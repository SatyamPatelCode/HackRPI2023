let count=1;
$("#addsection").click(function() {
    $("#section").append($('<h3>').text("Section "+count)).append($('</h3>'));
    count = count+1;
    $("#section").append($('<label for="date">').text("Date:"));
    $("#section").append($('</label>'));
    $("#section").append($('<select name="date" id="date"><option value="monday">').text("Monday"));
    $("#section").append($('</option><option value="tuesday">').text("Tuesday"));
    $("#section").append($('</option><option value="wednesday">').text("Wednesday"));
    $("#section").append($('</option><option value="thursday">').text("Thursday"));
    $("#section").append($('</option><option value="friday">').text("Friday"));
    $("#section").append($('</option></select><br><label for="time">').text("Time:"));
    $("#section").append($('</label><input type="text" id="time" name="time"><p id="host"><u>').text("Host"));
    $("#section").append($('</u></p><input type="checkbox" id="professor" name="professor" value="Professor"><label for="professor">').text("Professor"));
    $("#section").append($('</label><input type="checkbox" id="ta" name="ta" value="TA"><label for="ta">').text("TA"));
    $("#section").append($('</label><input type="checkbox" id="mentor" name="mentor" value="Mentor"><label for="mentor">').text("Mentor"));
    $("#section").append($('</label><br><p id="host"><u>').text("Names of hosts"));
    $("#section").append($('</u></p><label for="profname">').text("Professor:"));
    $("#section").append($('</label><input type="text" id="profname" name="profname"><label for="taname">').text("TA(s):"));
    $("#section").append($('</label><input type="text" id="taname" name="taname"><label for="mentname">').text("Mentor(s):"));
    $("#section").append($('</label><input type="text" id="mentname" name="mentname"><br>'));
});
$("addcourse").click(function() {
    
});