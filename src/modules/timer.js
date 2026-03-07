const timer = (deadline) => {
    const timerBlocks = document.querySelectorAll('.count-wrap')

    timerBlocks.forEach((block) => {
        const timerDays = block.querySelector('.timer-days')
        const timerHours = block.querySelector('.timer-hours')
        const timerMinutes = block.querySelector('.timer-minutes')
        const timerSeconds = block.querySelector('.timer-seconds')

        let interval;

        const getTimeRemaining = () => {
            let dateStop = new Date(deadline).getTime()
            let dateNow = new Date().getTime()
            let timeRemaining = (dateStop - dateNow) / 1000

            let days = Math.floor(timeRemaining / 60 / 60 / 24)
            let fhours = Math.floor((timeRemaining / 60 / 60) % 24)
            let fminutes = Math.floor((timeRemaining / 60) % 60)
            let fseconds = Math.floor(timeRemaining % 60)

            const hours = fhours < 10 ? '0' + fhours : fhours;
            const minutes = fminutes < 10 ? '0' + fminutes : fminutes;
            const seconds = fseconds < 10 ? '0' + fseconds : fseconds;

            return { timeRemaining, days, hours, minutes, seconds }
        }

        const updateClock = () => {
            let getTime = getTimeRemaining()
            timerDays.textContent = getTime.days
            timerHours.textContent = getTime.hours
            timerMinutes.textContent = getTime.minutes
            timerSeconds.textContent = getTime.seconds

            if (getTime.timeRemaining <= 0) {
                clearInterval(interval)
                timerDays.textContent = '00'
                timerHours.textContent = '00'
                timerMinutes.textContent = '00'
                timerSeconds.textContent = '00'
            }
        }
        updateClock()
        interval = setInterval(updateClock, 500)
    })
}

export default timer