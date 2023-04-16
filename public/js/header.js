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