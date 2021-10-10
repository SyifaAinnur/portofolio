


var domain = "https://syifaainnur.github.io/portofolio/";
$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: domain + "home.html",
        cache: false,
        processData: false,
        contentType: false,
        success: function(result) {
            $("#content").html(result);
        }
    });
});

$('a.home').bind('click', function(event) {
    $.ajax({
        type: 'GET',
        url: domain + "home.html",
        cache: false,
        processData: false,
        contentType: false,
        success: function(result) {
            $("#content").html(result);
        }
    });
});
$('a.about').bind('click', function(event) {
    $.ajax({
        type: 'GET',
        url: domain + "about.html",
        cache: false,
        processData: false,
        contentType: false,
        success: function(result) {
            $("#content").html(result);
        }
    });
});

$('a.skill').bind('click', function(event) {
    $.ajax({
        type: 'GET',
        url: domain + "skill.html",
        cache: false,
        processData: false,
        contentType: false,
        success: function(result) {
            $("#content").html(result);
        }
    });
});

$('a.contact').bind('click', function(event) {
    $.ajax({
        type: 'GET',
        url: domain + "portofolio.html",
        cache: false,
        processData: false,
        contentType: false,
        success: function(result) {
            $("#content").html(result);
        }
    });
});
$('a.contact').bind('click', function(event) {
    $.ajax({
        type: 'GET',
        url: domain + "qoute.html",
        cache: false,
        processData: false,
        contentType: false,
        success: function(result) {
            $("#content").html(result);
        }
    });
});

