class Converter{

    constructor(){
        this.iHaveBlock = document.querySelector('.i-have')
        this.wantBuyBlock = document.querySelector('.want-buy')
        this.exChangeRateRubUsd = fetch('https://api.exchangerate.host/latest?base=RUB&symbols=USD')
            .then(resp => resp.json())
            .then(data => console.log(data))

    }
 
    // getValueRight = () =>{

    // }
}

let done = new Converter()
