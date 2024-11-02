var arr =[
  {db:"https://img.etimg.com/thumb/width-1200,height-900,imgsize-1157704,resizemode-75,msid-94321543/news/sports/new-cricket-rules-saliva-ban-made-permanent-icc-announces-a-slew-of-changes-to-playing-conditions.jpg",story:"https://brightcoveimagecompression.s3.ap-south-1.amazonaws.com/output/input/6348474456112-1709919874.jpg"},
  {db:"https://brightcoveimagecompression.s3.ap-south-1.amazonaws.com/output/input/6348476557112-1709909590.jpg",story:"https://th-i.thgim.com/public/incoming/kh9esv/article67928014.ece/alternates/LANDSCAPE_385/17_RVM_7991.jpg"},
  {db:"https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTk5OTQ0OTE5Mjc0NDk3MTI3/types-of-cricket-matches.jpg",story:"https://c.ndtvimg.com/2022-11/jsjh3gbc_virat-kohli-ani-650_625x300_11_November_22.jpg?im=FaceCrop,algorithm=dnn,width=806,height=605"},
  {db:"https://www.hindustantimes.com/ht-img/img/2023/09/28/1600x900/CRICKET-IND-AUS-ODI-70_1695911961950_1695912000368.jpg",story:"https://www.livemint.com/lm-img/img/2023/12/21/1600x900/CRICKET-ICC-MENS-WC-2023-IND-SRI-ODI-234_1702529697614_1703149340678.jpg"}
]

var string =""

arr.forEach(function (e,inx) {
     string += `<div class="story">
    <img id="${inx}" src="${e.db}"
        alt="">
</div> `
console.log(inx)
})

var storiyan = document.querySelector("#storiyan")

storiyan.innerHTML=string

storiyan.addEventListener("click",function (e) {
    document.querySelector("#full-screen").style.display="block"
    document.querySelector("#full-screen").style.backgroundImage=`url(${arr[e.target.id].story})`

    setTimeout(function () {
        document.querySelector("#full-screen").style.display="none"
    },3000)

})