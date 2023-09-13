class Animal {
    // Properties
    private _id: number;
    private _nom: string;
    private _age: number;
    private _debutPret: Date;
    private _finPret: Date;
// Constructor
    constructor(id:number , nom:string , age:number , debutPret:Date , finPret:Date ) {
        this._id = id;
        this._nom = nom;
        this._age = age;
        this._debutPret = debutPret;
        this._finPret = finPret;
    }
    // Accessors
    get id(){
        return this._id;
    }
    set id(id){
        this._id = id;
    }
    get nom(){
        return ' le nom de l animal est' + this._nom ;
    }
    set nom(nom){
        this._nom = nom;
    }
    get age(){
        return this._age ;
    }
    set age(age){
        this._age = age;
    }
    get debutPret(){
        return this._debutPret  ;
    }
    set debutPret(debutPret){
        this._debutPret=debutPret;
    }
    get finPret(){
        return this._finPret ;
    }
    set finPret(finPret){
        this._finPret = finPret;
    }
    // Methods
    faireDuBruit(bruit: string): string {
        return `${this.worker()} le bruit spécifique de l'animal est  ${bruit} .`
    }
    // This function performs work for the other method functions
    worker(): string {
    return this._nom;
}

    
}

