const changeColor = function n() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};


let colors;
const start=function () {
    if (!colors) {       
        colors= setInterval(colorBg,1000)
    }
    function colorBg() {
        document.body.style.backgroundColor=changeColor()
    }

}

const stop=function () {
    clearInterval(colors)
    colors=null;
}

document.querySelector('#start').addEventListener('click',start);
document.querySelector('#stop').addEventListener('click', stop)


