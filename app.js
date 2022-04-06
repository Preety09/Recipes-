// const getElement = (selector) => {
//   const element = document.querySelector(selector)

//   if (element) return element
//   throw Error(
//     `Please double check your class names, there is no ${selector} class`
//   )
// }

// const links = getElement('.nav-links')
// const navBtnDOM = getElement('.nav-btn')

// navBtnDOM.addEventListener('click', () => {
//   links.classList.toggle('show-links')
// })


const element=document.querySelector('.nav-links')
const btn=document.querySelector('.nav-btn')
btn.addEventListener('click',()=>
  { 
    element.classList.toggle('show-links')

  }
  )
const data=document.querySelector('#date')
const currentYear=new Date().getFullYear()
data.textContent=currentYear