class Animal{

constructor(name){
    this.name = name

}

    eat(){
    
        console.log(this.name+ ' eat food');
}
}

//  let animal = new Animal('Goat');

//  animal.eat();

class Monkey extends Animal{


 eat(){
   
    super.eat(); // you can override with the use of super as well
   console.log(this.name+' eat banana')
}


}
let baboon = new Monkey('baboon');
baboon.eat();
