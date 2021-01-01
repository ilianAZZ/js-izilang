

function diagnostic() {
  //no translation
  let i = 0
  const e = $("*[ild]")
  console.log("Lang     element")
  j=0
  for (const el of e)  {
    i=0 ; let lm = []; const els = el.cloneNode()
    for (const [k, v] of Object.entries(LANGS)) {
        if (v[$(el).attr("ild")] == undefined) {
            i++; lm[lm.length]= k
            $(el).css("border", "3px solid red") 
            $(el).html($(el).html() + "<span class=ilmissing>" + k + "<span>")
        }
      } if (i!==0) {console.log(lm + " : " + $(els).prop('outerHTML') )}
    j=j+i
  }
  
  if (j !== 0) {
    alert("Found " + j + " translation missing. Open console for details (F12)")
    console.error("Found " + j + " translation missing")
  } else {
    console.log("Everithing seems okay")
  }
}
