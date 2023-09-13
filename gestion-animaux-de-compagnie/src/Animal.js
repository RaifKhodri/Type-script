"use strict";
class Animal {
    // Properties
    _id;
    _nom;
    _age;
    _debutPret;
    _finPret;
    // Constructor
    constructor(id, nom, age, debutPret, finPret) {
        this._id = id;
        this._nom = nom;
        this._age = age;
        this._debutPret = debutPret;
        this._finPret = finPret;
    }
    // Accessors
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get nom() {
        return ' le nom de l animal est' + this._nom;
    }
    set nom(nom) {
        this._nom = nom;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }
    get debutPret() {
        return this._debutPret;
    }
    set debutPret(debutPret) {
        this._debutPret = debutPret;
    }
    get finPret() {
        return this._finPret;
    }
    set finPret(finPret) {
        this._finPret = finPret;
    }
    // Methods
    faireDuBruit(bruit) {
        return `${this.worker()} le bruit spécifique de l'animal est  ${bruit} .`;
    }
    // This function performs work for the other method functions
    worker() {
        return this._nom;
    }
}
let myCar1 = new Animal(1, 'bobi', 2, new Date("2023-09-01"), new Date("2023-09-15"));
