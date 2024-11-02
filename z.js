// const app = {
//     "name": "rohit",
//     "no": "45",
//     "place": "virar"
// }

// var a = app

// console.log(a)

// // const num = new Promise((resolve, reject) => {
// //     resolve("console.log")
// // })

// let v = setTimeout(() => {
//     console.log("run ru n")
// }, 2000);

// async function n() {
//     try {
//         const m = await v
//         console.log(m)
//     } catch (error) {
//         console.log(error)
//     }
// }
// n()

// var z = "pehile me"
// console.log(z)

const div = document.querySelector('.div')

async function api() {
    try {
        let y = await fetch("https://api.freeapi.app/api/v1/public/randomjokes")
        let w = y.json()
        div.append(w)
    } catch (error) {
        console.log(error)
    }
}

api()