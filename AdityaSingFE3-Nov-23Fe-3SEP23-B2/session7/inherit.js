//parent class
class CreditCard {
  constructor(cardNumber, expiryDate, cvv){
    this.cardNumber = cardNumber
    this.expiryDate = expiryDate
    this.cvv = cvv
  }
  onlineTransaction(){
    console.log('transact')
  }
  getCashback(){
    console.log('cashback')
  }
}

//child class
class FlipkartCreditCard extends CreditCard {
  //constructor over riding
  constructor(cardNumber, expiryDate, cvv, partnerName){
    //super(cardNumber, expiryDate, cvv) //mandatory
    this.partnerName = partnerName
  }
  //method overriding
  getCashback(merchantName){
    super.onlineTransaction()
    if(merchantName === 'flipkart')
    console.log('extra cashback')
    else console.log('cashback')
  }
}

const bhagwatiCC = new FlipkartCreditCard('1234', '10/27', '123', 'flipkart')
bhagwatiCC.onlineTransaction()
bhagwatiCC.getCashback('flipkart')
bhagwatiCC.getCashback('myntra')