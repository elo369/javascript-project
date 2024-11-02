var p = document.querySelector("#para")

p.addEventListener("click", function () {
    var alp = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"]

    var str = ""
    for (let i = 0; i < 6; i++) {
        var math = Math.floor(Math.random() * 15) + 1
        str += alp[math]
    }
  
    p.innerHTML = `${str.toUpperCase()}`
})


