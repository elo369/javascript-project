const box=document.querySelectorAll('.button')
const body =document.querySelector('body')
const id=document.getElementById('blue')
const id2=document.getElementById('pink')
const id3=document.getElementById('red')
const id4=document.getElementById('purple')
const id5=document.getElementById('skyblue')


box.forEach(function(e) {
    console.log(e);
    e.addEventListener('click',function (r) {
        console.log(r)
        console.log(r.target)
        if (r.target.id === "blue") {
            body.style.background=r.target.id
            id.style.border="2px solid blue"
        }
        if (r.target.id === "pink") {
            body.style.background=r.target.id
            id2.style.border="2px solid pink"

        }
        if (r.target.id === "red") {
            body.style.background=r.target.id
            id3.style.border="2px solid red"

        }
        if (r.target.id === "purple") {
            body.style.background=r.target.id
            id4.style.border="2px solid purple"
        }
        if (r.target.id === "black") {
            body.style.background=r.target.id
        }
        if (r.target.id === "skyblue") {
            body.style.background=r.target.id
            id5.style.border="2px solid skyblue"
        }
        
    });
});

