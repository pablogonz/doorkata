class Door{
    constructor(IsOpen, IsClosed , IsLocked , IsUnlocked, key){
        if (IsOpen === IsClosed || IsLocked=== IsUnlocked)
        return "Error"
    

this.IsOpen= IsOpen;
this.IsClosed= IsClosed;
this.IsLocked= IsLocked;
this.IsUnlocked= IsUnlocked;
this.key= key;
    }
    get Open(){
        return this.IsOpen;
    }
    get Close(){
        return this.IsClosed;
}
get Lock(){
    return this.IsLocked;
}
OpenAndUnlocked(key){
    if (key !=this.key)return "key isn't match";
    if(this.Open && this.IsUnlocked)
    return "Error";
    this.IsOpen=true;
    this.IsClosed=false;
    this.IsUnlocked=true;
    this.IsLocked=false;
    
}

OpenAndlocked(key){
    if (key !=this.key)return "key isn't match";
    if(this.Open && this.IsLocked)
    return "Error";
    this.IsOpen=true;
    this.IsClosed=false;
    this.IsUnlocked=false;
    this.IsLocked=true;
}
ClosedAndUnlocked(key){
    if (key !=this.key)return "key isn't match";
    if(this.IsClosed && this.IsUnlocked)
    return "Error";
    this.IsOpen=false;
    this.IsClosed=true;
    this.IsUnlocked=true;
    this.IsLocked=false;
}
ClosedAndlocked(key){
    if (key !=this.key)return "key isn't match";
    if(this.IsClosed && this.IsLocked)
    return "Error";
    this.IsOpen=false;
    this.IsClosed=true;
    this.IsUnlocked=false;
    this.IsLocked=true;
}
ToString(){
    return `${this.IsOpen},${this.IsClosed},${this.IsUnlocked},${this.IsLocked},${this.key}`
}
static OpenAndlocked(key){}
static OpenAndUnlocked(key){}
static ClosedAndUnlocked(key){}
static ClosedAndlocked(key){}
}
//Forma imperativa de las puertas
let door= new Door(true,false,false,true, "123")
console.log(door.ToString());
console.log(door.ClosedAndUnlocked("123"));
console.log(door.ToString());

let dooor= new Door(true,false,false,true, "123")
console.log(dooor.ToString());
console.log(dooor.OpenAndlocked("123"));
console.log(dooor.ToString());

let d= new Door(true,false,false,true, "123")
console.log(d.ToString());
console.log(d.ClosedAndlocked("123"));
console.log(d.ToString());
module.exports=Door;