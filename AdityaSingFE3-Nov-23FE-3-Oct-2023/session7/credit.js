// Flipkart axis bank card
// Axis neo
// Axis select
// Axis Magnum

class CreditCard {  //parent class
  constructor(cardNumber, name, ownerName, cvv, expiryDate, cardLimit){
    this.cardNumber = cardNumber
    this.name = name
    this.ownerName = ownerName
    this.cvv = cvv
    this.expiryDate = expiryDate
    this.cardLimit = cardLimit
  }
  makePayment(mode){
    console.log("made a payment")
  }
  getCashback(){
    console.log("cashback")
  }
}

//inheritance
class FlipkartCC extends CreditCard { //child class
  constructor(cardNumber, name, ownerName, cvv, expiryDate, cardLimit){ //constructor overriding
    super(cardNumber, name, ownerName, cvv, expiryDate, cardLimit) 
    this.domesticLoungeAccess = true
  }
  getCashback(merchantName){ //method overriding
    if(merchantName === "flipkart" || merchantName === "myntra")
      console.log("extra cashback")
    else
      console.log("cashback")
  }
}

const abhashCC = new FlipkartCC("1234", "flipkart cc", "abhash", 893, "10/27", 1500000)
console.log(abhashCC)

abhashCC.makePayment()
abhashCC.getCashback("myntra")
abhashCC.getCashback("jabong")