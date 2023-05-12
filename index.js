class Plant {
    constructor(height, age){
        this.height = height;
        this.age = age;
    }

    grow() {
        this.height += 10;
    }
}

class Rose extends Plant {
    constructor(height, age, numberOfFlowers) {
        super(height,age);
        this.numberOfFlowers = numberOfFlowers;
    }
}
 const myRose = new Rose(20,2,5);
 console.log(myRose.height);
 console.log(myRose.numberOfFlowers);

 myRose.grow();
 console.log(myRose.height);