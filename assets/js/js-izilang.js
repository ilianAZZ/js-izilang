//need jQuery

const ildefault="fr"

function changeLang(lang) {
  if ($(".ilselector") !== undefined) $(".ilselector").val(lang)
  $("*[ild]").each( (i, el) => {
    if  ($(el).attr("ilt") !== undefined) $(el).attr($(el).attr("ilt"), LANGS[lang][$(el).attr("ild")])
    else $(el).text(LANGS[lang][$(el).attr("ild")])
    $("html").attr("lang", lang)
  })
}


$( document ).ready( () => {
  $(".ilselector").attr("onchange", "changeLang(this.value)")

  //remove this if you don't want lang initialisation
  changeLang(ildefault)
});
