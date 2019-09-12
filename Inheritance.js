class Car{

setName(name){

    this.name = name 


}

startEngine(){

    console.log ('Engine start for'+' '+this.name);

}
carMoving(){

    console.log ('Car started moving for'+this.name);

}

carStopped(){

    console.log ('Car stopped for'+this.name);

}

engineStopped(){


    console.log ('Engine stopped for'+' '+this.name);

}


}

class Toyota extends Car{

    topspeed(speed){

        console.log ('Top speed for'+' '+this.name +' '+ 'is'+' ' +speed);

    }


}
let myCar = new Toyota();

myCar.setName('BMW')
myCar.startEngine();
myCar.carMoving();
myCar.topspeed(200);
myCar.engineStopped();

