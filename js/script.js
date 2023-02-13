let time = document.querySelector(".time")
let todayDate = document.querySelector(".date")
let dateNumeric = document.querySelector(".date_by_number")

let digitalClock = ()=>{
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let timeFromate = " am"

    let day = date.getDay()

    if(hours > 12){
        hours -= 12
        timeFromate = " pm"
    }
    if(hours < 10 ){
        hours = "0" + hours
    }
    if(minutes < 10 ){
        minutes = "0" + minutes
    }
    if(seconds < 10 ){
        seconds = "0" + seconds
    }

    let finalTime = hours + " : " + minutes + " : " + seconds
    time.innerHTML = finalTime + timeFromate
     
    switch(day){
        case 0:
        todayDate.innerHTML = "Sunday" 
        break
        case 1:
        todayDate.innerHTML = "Monday " 
        break
        case 2:
        todayDate.innerHTML = "Tuesday"
        break
        case 3:
        todayDate.innerHTML = "Wednesday"
        break
        case 4:
        todayDate.innerHTML = "Thursday"
        break
        case 5:
        todayDate.innerHTML = "Friday"
        break
        case 6:
        todayDate.innerHTML = "Saturday"
        break
        
    }

    let dateByNumber = date.getDate() + "/" + date.getDay() + "/" + date.getFullYear()
    dateNumeric.innerHTML = dateByNumber
    setInterval(()=>{
        digitalClock()
    }, 1000)
}

digitalClock()