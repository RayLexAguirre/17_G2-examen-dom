import Ingredient from "./ingredient.js";
import Recipe from "./recipe.js";

/*
console.log("Ingredients");
let i1 = new Ingredient("azUcar", 3, "kiLos", 30);

console.log(i1.getName());
console.log(i1.getAmount());
console.log(i1.getUnit());
console.log(i1.getCost());
*/

class App{
    constructor(){
        this.btnAdd = document.querySelector("#btnAdd");
        btnAdd.addEventListener("click", this.readForm);
        this._table = document.querySelector('#table');
        this._ingredients = new Recipe();
    } 

    readForm = () => {
        let ingredient = Ingredient.readForm();
    
        if(ingredient === false){
            Swal.fire(
                'Error',
                'Debe capturar todos los campos',
                'error'
              );
              return;
        }

        let completado = this._ingredients.add(ingredient);
        console.log(this._ingredients);

        if(completado === false){
            
               swal.fire("Error", "El ingrediente ya se encuentra registrado", "error");
            return; 
             
        }

        this._printInTable(ingredient);
            Swal.fire(
                'Bien!',
                'Ingrediente Ingresado',
                'success'
              )

    }

    _printInTable(ingredient){
        let row = this._table.insertRow(1);

        let colName = row.insertCell(0);
        let colAmountUnit = row.insertCell(1);
        let colCost = row.insertCell(2);

        colName.innerHTML = ingredient.getName();
        colAmountUnit.innerHTML = ingredient.getAmount() + " " + ingredient.getUnit();
        colCost.innerHTML = "$" + ingredient.getCost();

        document.querySelector('#total').innerHTML = this._ingredients.getTotalCost();
        
    }

}

new App();