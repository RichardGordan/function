class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time,callback,id){
        if(typeof id === 'undefined'){
            throw new Error('error text');
        }else if(!this.alarmCollection.find(bell => bell.id === id) == 'undefiend'){
            return console.error('Alarm s already standing');
        }
        return this.alarmCollection.push({time,callback,id});

    }
    removeClock(id){
        let inpuntLength = this.alarmCollection.length
        this.alarmCollection = this.alarmCollection.filter(bell => bell.id !== id )
        let outputLength = this.alarmCollection.length
        return outputLength < inpuntLength


        
    }
    getCurrentFormattedTime(){
        const time = new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
            });
            return time

    }
    start(){
        let checkClock = (clock) => {
            let alarm = this.getCurrentFormattedTime();
            if(clock.time === alarm){
                return clock.callback()
            }
        }
        if(this.timerId == null){
            setInterval(() => {
                this.alarmCollection.forEach(clock =>  checkClock(clock));

            },1000)
            
        }
         

    }
    stop(){
        if(this.timerId !== null){
            clearInterval(this.timerId);
            return this.timerId = null
        }
    }
    printAlarms(){
        return this.alarmCollection.forEach(time, id => console.log(`${this.time} + ${this.id}`) );
    }

clearAlarms(){
    this.stop() 
    return this.alarmCollection = [];
}
}
let AlertClock = new AlarmClock ;
AlertClock.addClock('11:25', () => console.log ('New week!'), 1);
AlertClock.addClock('15:30', () => console.log ('New week!!!'), 2);
AlertClock.removeClock(2);
AlertClock.addClock('00:50', () => console.log ('Go sleep'), 3);
AlertClock.start();
AlertClock.stop();
AlertClock.printAlarms()