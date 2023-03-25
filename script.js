let money = document.querySelector('#points')
let moneySum = document.querySelector('.money__suma')
let amount = document.querySelector('.amount')
let period = document.querySelector('#period')
let numMonths = document.querySelector('.num__months')
let percentDiv = document.querySelector('.percent')
money.addEventListener('input', moneyFunk)
let geld
let x = 10

function moneyFunk() {
   geld = Number(money.value)
   moneySum.innerHTML = `${geld}$`
   let percent = (geld * x / 100) + geld
   console.log(percent)
   amount.innerHTML = `${percent}$`
   percentDiv.innerHTML = `${x}%`

}
moneyFunk()

period.addEventListener('input', periodFunk)
function periodFunk() {
   let months = Number(period.value)
   numMonths.innerHTML = `${months} months`
   if (months > 6 && months < 12) {
      x = 9.5
      // let percent = (geld * 9.5 / 100) + geld
      // console.log(percent)
      // amount.innerHTML = `${percent}$`
      // percentDiv.innerHTML = '9.5%'
   } else if (months > 12 && months < 24) {
      x = 9
      // let percent = (geld * 9 / 100) + geld
      // console.log(percent)
      // amount.innerHTML = `${percent}$`
      // percentDiv.innerHTML = '9%'
   } else if (months >= 24) {
      x = 8.5
      // let percent = (geld * 8.5 / 100) + geld
      // console.log(percent)
      // amount.innerHTML = `${percent}$`
      // percentDiv.innerHTML = '8.5%'
   }

   moneyFunk()
}
periodFunk()