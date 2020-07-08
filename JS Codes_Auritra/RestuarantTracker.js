let restuarant ={
    name: "ABC",
    capacity: 100,
    guestCount: 0,
    seatParty: function(partySize){
        let seatsLeft = this.capacity-this.guestCount
        if (partySize <= seatsLeft){
            console.log("Guest are welcome.")
            this.guestCount= this.guestCount+ partySize
        } 
        else{
            console.log("Guest needs to wait")
        } 
      
    },
    removeParty:function(partySize){
        if (this.guestCount>0 && this.guestCount>=partySize){
            this.guestCount=this.guestCount-partySize
        }
    }
 
}
restuarant.seatParty(100)
console.log(restuarant.guestCount)
restuarant.removeParty(5)
console.log(restuarant.guestCount)
restuarant.seatParty(35)
console.log(restuarant.guestCount)
