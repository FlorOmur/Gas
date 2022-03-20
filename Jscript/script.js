const boxImg = document.querySelectorAll('.img')
const price = document.querySelectorAll('.price')
const typeGas = document.querySelectorAll('.type-gas')
const totalLiters = document.querySelector('.total')
const petrol = document.querySelector('.petrol span')
const oneLiter = document.querySelector('.price-one-liter span')
const liters = document.querySelector('.total-liter span')
const vat = document.querySelector('.vat span')
const totalPrice = document.querySelector('.total-price span')
const btn = document.querySelector('.btn')

// boxImg.addEventListener('click', () =>{
//     if(totalLiters.value.length === 0){
//         alert('Выберите количество топлива')
//     }else if(price.value.length === 0){
//         petrol.textContent = `${typeGas.textContent}`
//         price.value = '1.1'
//         oneLiter.textContent = `${price.value}$`
//         liters.textContent = `${totalLiters.value}`
//         vat.textContent = '5%'
//         totalPrice.textContent = `${((totalLiters.value * price.value) + (totalLiters.value * price.value * 0.05))}$`
//         boxImg.classList.add('active')
//     }
// })

boxImg.forEach(oneClick => {
    oneClick.addEventListener('click', () => {
        boxImg.forEach(reclick => {
            reclick.classList.remove('active')
        })
        oneClick.classList.add('active')
    })

btn.addEventListener('click',()=>{
  boxImg.forEach(()=>{
      if (price.value === '' || totalLiters.value === '') {
          alert('Заполните форму')
      }
      if (price[0].value !== '') {
          petrol.textContent = typeGas[0].textContent
          oneLiter.textContent = price[0].value
          liters.textContent = totalLiters.value
          vat.textContent = '5%'
          totalPrice.textContent = `${((totalLiters.value * price[0].value) + (totalLiters.value * price[0].value * 0.05))}$`


      } else if (price[1].value !== '') {
          petrol.textContent = typeGas[1].textContent
          oneLiter.textContent = price[1].value
          liters.textContent = totalLiters.value
          vat.textContent = '5%'
          totalPrice.textContent = `${((totalLiters.value * price[1].value) + (totalLiters.value * price[1].value * 0.05))}$`


      } else if (price[2].value !== '') {
          petrol.textContent = typeGas[2].textContent
          oneLiter.textContent = price[2].value
          liters.textContent = totalLiters.value
          vat.textContent = '5%'
          totalPrice.textContent = `${((totalLiters.value * price[2].value) + (totalLiters.value * price[2].value * 0.05))}$`
      }
  })
})



})

