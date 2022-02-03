const fs = require('fs');
const store = require('store');
exports = {TimerLibrary}

const Timer = {
    construct(end,func,updateInterval){
        this.endTime = end,
        this.func = func,
        this.startTime = null,
        this.active = false,
        this.done = false;
    },
    start(){
        this.lastUpdateTime = Date.now();
        this.startTime = Date.now();
        this.active = true;
        //this.saveTimer();
        while(this.active == true){
            if(Date.now() >= this.startTime + this.endTime){
                this.func();
                this.done = true;
                return true;
            }
        }
    },
    cancel(){
        if(!this.active){
            code = 1;
            console.error('Timer Is not Active', code);
            return;
        }
        this.done = true;
        return true;
    },
    status(){
        stat = [this.active, this.done];
        return stat;
    }
}
