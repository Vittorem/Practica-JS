function powerPuffGirls(name, color, age){
    this.name = name
    this.color = color
    this.age = age
    this.isLeader = false


    this.displayInfo = function(){
        console.log (`Information 
        Name: ${this.name}, Color: ${this.color}, Age: ${this.age}
        ${this.isLeader ? `Leader: Yes` : `Leadder: No`}
        `)
    }

    this.becomeLeader = function(){
        this.isLeader = true
        console.log(`${this.name} has became the leader`)
    }

}

const Blossom = new powerPuffGirls("Blossom", "pink", 10);
const Buttercup = new powerPuffGirls("Buttercup", "green", 10);
const Bubbles = new powerPuffGirls("Bubbles", "blue", 9);

Blossom.becomeLeader();

Blossom.displayInfo()
Buttercup.displayInfo()
Bubbles.displayInfo()

