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
}
module.exports=Door;