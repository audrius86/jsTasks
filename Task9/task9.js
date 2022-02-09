/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie{

    constructor(title, director, budget){
        this.title = title;
        this.director = director;
        this.budget = budget;
    }

    wasExpensive() {
        if(this.budget > 100_000_000) {
            return true;
        }
        else{
            return false;
        }
    }

    printAllData() {
        console.log(`Movie title: ${this.title} \nDirector: ${this.director} \n${this.title} budget: ${this.budget} dollars`)
    }
}

const movie = new Movie("Titanic", "James Cameron", 100000001);
console.log(movie.wasExpensive());
movie.printAllData();