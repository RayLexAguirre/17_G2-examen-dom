export default class Recipe{

    constructor(){
        this._ingredients = new Array();
    }

    getTotalCost(){
        let sum = 0;

        for(let i = 0; i < this._ingredients.length; i++){
            sum = sum + this._ingredients[i].getCost();
        } 

        return "$" + sum;
    } 

    add(ingredient){
        let vec = this._findIngredient(ingredient);

        if(vec >= 0){
            return false;
        }

        this._ingredients.push(ingredient);

        return true;
    }

    _findIngredient(ingredient){
        let vec = this._ingredients.findIndex( (p) => {
            if(p.getName() === ingredient.getName()){
                return true;
            } else {
                return false;
            }
        });

        return vec;
    }
}