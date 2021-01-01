/*
  Cookies
*/

function setCookie(name, value, days) {
  var expires;

  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toGMTString();
  } else {
      expires = "";
  }
  document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = encodeURIComponent(name) + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ')
          c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0)
          return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  return null;
}

function delCookie(name) {
  createCookie(name, "", -1);
}

/*
  JS IziLang
*/

//need jQuery

const ildefault="fr"

function changeLang(lang) {
  setCookie("lang", lang, 365)
  if ($(".ilselector") !== undefined) $(".ilselector").val(lang)
  $("*[ild]").each( (i, el) => {
    if  ($(el).attr("ilt") !== undefined) $(el).attr($(el).attr("ilt"), LANGS[lang][$(el).attr("ild")])
    else $(el).text(LANGS[lang][$(el).attr("ild")])
    $("html").attr("lang", lang)
  })
}


$( document ).ready( () => {
  $(".ilselector").attr("onchange", "changeLang(this.value)")
  
  if (getCookie("lang") === null) {
    changeLang(ildefault)
    setCookie("lang", ildefault, 365)
  } else {
    changeLang(getCookie("lang"))
  }
});
