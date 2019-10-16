//BlackJack
class Player{
  constructor(id,wallet){
    this.id=id;
    this.hand=[];
    this.wallet=wallet;
  }

  addCard(card){
    this.hand.push(card);
  }
  /*
  betMoney(bet){
    if(this.wallet>=bet){
      this.wallet=this.wallet-bet;
      return bet;
    } else{
      console.log("Não têm saldo sufeciente")
    }
  }
  */
}


class Game{
  constructor(){
    const value=["Ás","Rei","Dama", "Valete" ,"10","9","8","7","6","5","4","3","2"];
    const suites=["Espadas","Copas","Ouros","Paus"];
    this.deck=this.createDeck(value,suites);
    this.players=[];
  }

  createDeck(value,suites){
    let deck=[];
    for (let valueIdx=0; valueIdx<value.length; valueIdx++){
      for (let suitesIdx=0; suitesIdx<suites.length; suitesIdx++){
        let card={
          value:value[valueIdx],
          suite:suites[suitesIdx]
        };
        deck.push(card);
      }
    }
    return deck;
  }

  getRandomCard(deck){
    let card = deck.splice(Math.random()*deck.length,1);
    return card;
  }

  startGame(players){
      //Create Dealer
    this.dealer = new Player(0,99999999);
    this.dealer.addCard(this.getRandomCard(this.deck));
    this.dealer.addCard(this.getRandomCard(this.deck));
      //Create Players
    for(let i=0; i<players; i++){
      let newPlayer= new Player(i+1,50);
      newPlayer.addCard(this.getRandomCard(this.deck));
      newPlayer.addCard(this.getRandomCard(this.deck));
      this.players.push(newPlayer);
    }
  }
}