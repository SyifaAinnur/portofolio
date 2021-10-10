var domain = "https://syifaainnur.github.io/portofolio/";
$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: domain + "home.html",
    cache: false,
    processData: false,
    contentType: false,
    success: function (result) {
      $("#content").html(result);
    },
  });
});

$("a.home").bind("click", function (event) {
  $.ajax({
    type: "GET",
    url: domain + "home.html",
    cache: false,
    processData: false,
    contentType: false,
    success: function (result) {
      $("#content").html(result);
    },
  });
});
$("a.about").bind("click", function (event) {
  $.ajax({
    type: "GET",
    url: domain + "about.html",
    cache: false,
    processData: false,
    contentType: false,
    success: function (result) {
      $("#content").html(result);
    },
  });
});

$("a.skill").bind("click", function (event) {
  $.ajax({
    type: "GET",
    url: domain + "skill.html",
    cache: false,
    processData: false,
    contentType: false,
    success: function (result) {
      $("#content").html(result);
    },
  });
});

$("a.contact").bind("click", function (event) {
  $.ajax({
    type: "GET",
    url: domain + "portofolio.html",
    cache: false,
    processData: false,
    contentType: false,
    success: function (result) {
      $("#content").html(result);
    },
  });
});
$("a.contact").bind("click", function (event) {
  $.ajax({
    type: "GET",
    url: domain + "qoute.html",
    cache: false,
    processData: false,
    contentType: false,
    success: function (result) {
      $("#content").html(result);
    },
  });
});
const text = document.getElementById("quote");
const author = document.getElementById("author");
const tweetButton = document.getElementById("tweet");

const getNewQuote = async () => {
  var url = "https://type.fit/api/quotes";

  const response = await fetch(url);
  console.log(typeof response);
  const allQuotes = await response.json();
  const indx = Math.floor(Math.random() * allQuotes.length);
  const quote = allQuotes[indx].text;
  const auth = allQuotes[indx].author;

  if (auth == null) {
    author = "Anonymous";
  }
  //tweet the quote
};
getNewQuote();
