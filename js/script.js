// 'use strict'

window.onload = () => {


    let start = document.querySelector('.btn-start');
    start.addEventListener('click', ()=>{
        // game.start();
        // game.rndSuit(game.suits);
        game.fillField();
    })

    //CELL OBJECT
    function Cell (suit) {
        this.suit = suit;
        this.suitAround = 0;
        this.isDelete = false;
    }

    //GAME LOGIC
    const game = {
        height: 10,
        width: 10,
        field: [],
        suits: ['hearts', 'spade', 'diamonds', 'crosses'],
        rndSuit: (suits)=>{
            let rnd = parseInt(Math.random()*suits.length);
            return suits[rnd];
        },
        fillField: function() {
            this.field = [];
            for(let i=0; i < this.height; i++){
                console.log(i);
                let td = [];
                for(let j=0; j<this.width; j++){
                    console.log(j);
                    td.push(new Cell( this.rndSuit(this.suits) ) ); 
                }
            this. field.push(td);
            }
           console.log(this.field);
        },


        start: () => {
            console.log('start');
        },

    }

 }
     
 