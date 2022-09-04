export default class Ingredient{
    constructor(name, amount, unit, cost){
        this._name = name.toUpperCase();
        this._amount = amount;
        this._unit = unit.toLowerCase();
        this._cost = cost; 
    }

    getName(){ 
        return this._name;
    }

    getAmount(){
        return this._amount;
    }

    getUnit(){
        return this._unit;
    }

    getCost(){
        return this._cost;   
    }

    static readForm(){
        
        let inpName = document.querySelector("#name");
        let inpAmount = document.querySelector("#amount");
        let inpUnit = document.querySelector("#unit");
        let inpCost = document.querySelector("#cost");
        
        let name = inpName.value;
        let amount = inpAmount.value;
        let unit = inpUnit.value;
        let cost = Number(inpCost.value);

        if(name && amount && unit && cost){
            let ingredientes = new Ingredient(name, amount, unit, cost);

            inpName.value = '';
            inpAmount.value = '';
            inpUnit.value = '';
            inpCost.value = '';

            return ingredientes;

        } 

        Swal.fire(
            'Error',
            'Todos los campos son requeridos',
            'error'
          );
          return false;
    }

}