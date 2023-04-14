const hourEl= document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");


function digiclock(){
        //let date = new Date();
        /*let h =  date.getHours();
        let m =  date.getMinutes();
        let s =  date.getSeconds();
        let ampm= "AM";*/
        
        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();
        let ampm= "AM";
        
        //change for am-pm
        if(h>12){
           h=h-12;
           ampm="PM";
        }
        //now make 2-digit in hour, minute and second
        h = h<10 ? "0" + h:h;
        m = m<10 ? "0" + m:m;
        s = s<10 ? "0" + s:s;
        
       //to change element in hour hand, minute and second hand
       hourEl.innerText=h;
       minuteEl.innerText=m;
       secondEl.innerText=s;
       ampmEl.innerText=ampm;
       
       setTimeout( function(){ digiclock()}, 1000);
       

}

digiclock();
