let search=document.querySelector('#search')
let input=document.querySelector('#input-search')

search.addEventListener('click',()=>{
    input.classList.toggle('active');
    if(input.classList.contains('active')){
        search.classList.add('fa-light', 'fa-xmark')
    }
    else{
        search.classList.remove('fa-light','fa-xmark')
    }
})

let close_nav=document.querySelector('#close')
let nav=document.querySelector('#nav')
let bars=document.querySelector('#bars')

bars.addEventListener('click',()=>{
    nav.classList.toggle('active')
    close_nav.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
})

let darkmod = document.querySelector('#darkmod');
let body=document.querySelector('body')
darkmod.addEventListener('change', function() {
  if(darkmod.checked){
    body.classList.remove('darkmod')
  } else {
    body.classList.add('darkmod')
  }
});

let heart=document.querySelectorAll('.card-heart');
heart.forEach(e => {
  e.addEventListener('click',()=>{
    let check= e.querySelector('img')
    if(check.classList.contains('red')){
  
      e.querySelector('img').src = '../public/images/Heart2.png'
      check.classList.remove('red')
    }
    else{
      e.querySelector('img').src = '../public/images/Heart.png'
      check.classList.add('red')
    }
  })
});

document.getElementById('prev').onclick=function(){
  const widthItem= document.querySelector('.category-card-item').offsetWidth;
  document.querySelector('.category-content').scrollLeft -= widthItem + 20;
}
document.getElementById('next').onclick=function(){
  const widthItem= document.querySelector('.category-card-item').offsetWidth;
  document.querySelector('.category-content').scrollLeft += widthItem + 20;
}
// arrow 2
document.getElementById('prev2').onclick=function(){
  const widthItem= document.querySelector('.artist-item').offsetWidth;
  document.querySelector('.artist-content').scrollLeft -= widthItem + 20;
}
document.getElementById('next2').onclick=function(){
  const widthItem= document.querySelector('.artist-item').offsetWidth;
  document.querySelector('.artist-content').scrollLeft += widthItem + 20;
}


let counDown = new Date ("2023-04-20T12:00:00").getTime();
let x = setInterval(()=>{
  let now = new Date().getTime();
  let distance = counDown - now;

  let days = Math.floor(distance /  (1000 * 60 * 60 * 24));
  let Hours = Math.floor((distance %  (1000 * 60 * 60 * 24)) / (1000 *60 * 60));
  let minutes = Math.floor((distance %  (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance %  (1000 * 60)) / 1000);

  document.querySelector('.days').innerHTML=days
  document.querySelector('.hours').innerHTML=Hours
  document.querySelector('.minutes').innerHTML=minutes
  document.querySelector('.seconds').innerHTML=seconds

},1000)

let cardTime= document.querySelectorAll('.card-time h5')


cardTime.forEach(e=>{
  let t = Math.ceil(Math.random()*12)
  let m = Math.floor(Math.random()*60)
  let s = Math.floor(Math.random()*60)
    
  let counDown2 = new Date (`April 20, 2023 ${t}:${m}:${s}`).getTime();
  let y = setInterval(()=>{


    let now = new Date().getTime();
    let distance = counDown2 - now;
    let Hours = Math.floor((distance %  (1000 * 60 * 60 * 24)) / (1000 *60 * 60));
    let minutes = Math.floor((distance %  (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance %  (1000 * 60)) / 1000);
  
  
    e.querySelector('.card-hours').innerHTML=Hours
    e.querySelector('.card-min').innerHTML=minutes
    e.querySelector('.card-sec').innerHTML=seconds

  },1000)
  
})

// header 
let h=  document.querySelector('.header')
document.addEventListener('DOMContentLoaded',()=>{
  if(h.offsetTop==30){
    h.classList.add('sticky')
  }
  window.addEventListener('scroll',()=>{
    if(this.scrollY == 0){
      h.style.top = '30px'
    }
    if(this.scrollY > 0){
      h.classList.add('sticky')
      // h.style.opacity = '1'
      h.style.top = '0'

    }
    else{
      h.classList.remove('sticky')
  
    }
    
  })
})

let follow = document.querySelectorAll('.follow')


follow.forEach(e=>{
  e.innerHTML = 'Follow'
  e.classList.remove('un')
  e.addEventListener('click',()=>{

    e.classList.toggle('un')
    if(!e.classList.contains('un')){
      e.innerHTML = 'Follow'
    }
    else{
      e.innerHTML = 'Unfollow'
    }
  })
})