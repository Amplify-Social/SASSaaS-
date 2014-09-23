$(function() {
  var links = $("link");
  var resultcss = "";

  for (var i = 0; i < links.length; i++) {
    resultcss += $.ajax({
      type: "POST",
      async: false,
      url: "http://localhost:3000/compile",
      data: $.ajax(links.eq(i).attr('href'), { async: false }).responseText,
      success: function() { console.log("done"); },
      dataType: "text"
    }).responseText;
  }

  function addcss(css) {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = resultcss;
    document.getElementsByTagName('head')[0].appendChild(style)
  }

  addcss(resultcss);
});