const forms = document.querySelector('form')
// const weights=document.querySelector('#weight')

forms.addEventListener('submit', function (e) {
  e.preventDefault();
  const h = parseInt(document.querySelector('#height').value)
  const w = parseInt(document.querySelector('#weight').value)
  const r = document.querySelector('.result')
  const g = document.querySelector('.guide')

  if (h === '' || h < 0 || isNaN(h)) {
    r.innerHTML = `please give a valid height ${h}`
  }
  else if (w === '' || w < 0 || isNaN(w)) {
    r.innerHTML = `please give a valid weight ${w}`
  } else {
    const bmi = (w / ((h * h) / 10000)).toFixed(2)
    r.innerHTML = `<span>${bmi}</span>`
    if (bmi < 18.6) {
      g.innerHTML = "less"
    } else if (bmi < 24.9) {
      g.innerHTML = "normal"
    } else if (bmi > 24.9) {
      g.innerHTML = "Overweight"
    }
  }
})













