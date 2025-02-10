const hours = document.querySelector('.hours'),
    minutes = document.querySelector('.minutes'),
    s = document.querySelector('.s'),
    m = document.querySelector('.m'),
    h = document.querySelector('.h'),
    tabsItem = document.querySelectorAll('.tabsItem'),
    tabsContent = document.querySelectorAll('.tabsContentItem'),
    stopwatchBtn = document.querySelector('.stopwatch__btn'),
    tabsLinkSpan = document.querySelector('.tabsLink__span'),
    stopwatchHours = document.querySelector('.stopwatch__hours'),
    stopwatchMinutes = document.querySelector('.stopwatch__minutes'),
    stopwatchSeconds = document.querySelector('.stopwatch__seconds');
    
    
    tabsItem.forEach((tab,index)=>{
        tab.addEventListener('click', function() {
            tabsItem.forEach((el,i)=>el.classList.remove('active'))
            tabsContent.forEach((el,i)=>el.classList.remove('active'))
            this.classList.add('active')
            tabsContent[index].classList.add('active')
        })
    })
  
    

function clock() {
    let date = new Date()
    let min = date.getMinutes()
    let hour = date.getHours()
    let second = date.getSeconds()
    hours.innerHTML = hour < 10 ? '0' + hour : hour
    minutes.innerHTML = min < 10 ? '0' + min : min
    s.style.transform = `rotate(${second * 6}deg)`
    m.style.transform = `rotate(${min * 6}deg)`
    h.style.transform = `rotate(${hour * 30}deg)`
    setTimeout(() => {
       clock()
    }, 1000);
}
clock()


stopwatchBtn.addEventListener('click', function(){

if (stopwatchBtn.innerHTML === 'start') {
    stopwatchBtn.innerHTML = 'stop'
    tabsLinkSpan.classList.add('active')
    startStopwatch()

    
} else if (stopwatchBtn.innerHTML === 'stop') {
     stopwatchBtn.innerHTML = 'clear'
    tabsLinkSpan.classList.remove('active')
    tabsLinkSpan.classList.add('active_clear')
    stopStopwatch() 

} else {
    stopwatchBtn.innerHTML = 'start'
    tabsLinkSpan.classList.remove('active_clear')
    stopwatchSeconds.innerHTML = 0;
    stopwatchMinutes.innerHTML = 0;
    stopwatchHours.innerHTML = 0;
    second = 0

}
   
})



let hour = 1;
let min = 1;
let second = 0;
let isRunning = false;  

function stopwatch() {
  if (!isRunning) return; 
  stopwatchSeconds.innerHTML = second;
  second++;
  
  if (second > 60) {
    stopwatchMinutes.innerHTML = min
    second = 1
    min++
  } else if (min > 60 ) {
    stopwatchHours.innerHTML = hour
    min = 1
    hour++ 

  }
  setTimeout(() => {
    stopwatch();
  }, 10);
}

function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    stopwatch();
  }
}

function stopStopwatch() {
  isRunning = false;
}
