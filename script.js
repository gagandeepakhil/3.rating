rate=document.querySelector('.rate')
for(i=0;i<5;i++)
rate[i]=rate.getElementsByTagName('button')[i]
submit=document.querySelector('.btn')
function set(i){
    if(i==0)
    submit.querySelector('a').setAttribute('href','rate1.html')
    if(i==1)
    submit.querySelector('a').setAttribute('href','rate2.html')
    if(i==2)
    submit.querySelector('a').setAttribute('href','rate3.html')
    if(i==3)
    submit.querySelector('a').setAttribute('href','rate4.html')
    if(i==4)
    submit.querySelector('a').setAttribute('href','rate5.html')
}
rate[0].addEventListener('click',key=>{
    set(0)
})
rate[1].addEventListener('click',key=>{
    set(1)
})
rate[2].addEventListener('click',key=>{
    set(2)
})
rate[3].addEventListener('click',key=>{
    set(3)
})
rate[4].addEventListener('click',key=>{
    set(4)
})



 
