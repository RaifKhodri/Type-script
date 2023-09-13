class Chien extends Animal {
    // Properties
_race : string;
// Constructor
constructor(id:number , nom:string , age:number , debutPret:Date , finPret:Date , race: string ) {
    super(id , nom , age , debutPret , finPret );
    this._race = race; 
}
    // Accessors
    get race(){
        return this._race ;
    }
    set race(race){
        this._race = race;
    }
}