
class Car{
    constructor(){
        this.speed = 0;

        setTimeout(function(){
            this.speed++ ;
            console.log("Car is running with speed "+this.speed);
        }.bind(this), 2000);
    }
}




// ES6
// arrow function
// lambda
/* class Car{
    constructor(){
        this.speed = 0;

        setTimeout(()=>{
            this.speed++ ;
            console.log("Car is running with speed "+this.speed);
        }, 2000);
    }
}
 */
var maruti = new Car();
