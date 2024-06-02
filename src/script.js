// write your JavaScript here
let first_star=document.querySelector('#star-1')
let second_star=document.querySelector('#star-2')
let third_star=document.querySelector('#star-3')
let fourth_star=document.querySelector('#star-4')
let fifth_star=document.querySelector('#star-5')
const review=document.querySelector('.result')
  const starComponent=document.querySelector('.img-div')

  
first_star.addEventListener('click',()=>{
  first_star.innerHTML=`<img src="yell.png"/>`
  second_star.innerHTML=`<img src="star.png"/>`
  fifth_star.innerHTML=`<img src="star.png"/>`
fourth_star.innerHTML=`<img src="star.png"/>`
third_star.innerHTML=`<img src="star.png"/>`

  review.innerHTML=" We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right."
  
})
second_star.addEventListener('click',()=>{
  first_star.innerHTML=`<img src="yell.png"/>`
  second_star.innerHTML=`<img src="yell.png"/>`
  third_star.innerHTML=`<img src="star.png"/>`
  fifth_star.innerHTML=`<img src="star.png"/>`
  fourth_star.innerHTML=`<img src="star.png"/>`
  
  review.innerHTML=" We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues."
})
third_star.addEventListener('click',()=>{
  third_star.innerHTML=`<img src="yell.png"/>`
    second_star.innerHTML=`<img src="yell.png"/>`
    first_star.innerHTML=`<img src="yell.png"/>`
    fifth_star.innerHTML=`<img src="star.png"/>`
    fourth_star.innerHTML=`<img src="star.png"/>`
    review.innerHTML="Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve."
 
})

fourth_star.addEventListener('click',()=>{
 
  fifth_star.innerHTML=`<img src="star.png"/>`
  fourth_star.innerHTML=`<img src="yell.png"/>`
  third_star.innerHTML=`<img src="yell.png"/>`
  second_star.innerHTML=`<img src="yell.png"/>`
  first_star.innerHTML=`<img src="yell.png"/>`
  review.innerHTML=" Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our product/service."
  
})

fifth_star.addEventListener('click',()=>{

  fifth_star.innerHTML=`<img src="yell.png"/>`
  fourth_star.innerHTML=`<img src="yell.png"/>`
  third_star.innerHTML=`<img src="yell.png"/>`
  second_star.innerHTML=`<img src="yell.png"/>`
  first_star.innerHTML=`<img src="yell.png"/>`
  review.innerHTML="Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our product/service."
  b=true
})





