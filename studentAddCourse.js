$(document).ready(function() {
    $("#addcourse").click(function() {
        $("#courses").append($('<br>'));
        $("#courses").append($('<label for="courseid">').text("Course ID: "));
        $("#courses").append($('<input type="text" id="courseid" name="courseid">'));
    
    });
});