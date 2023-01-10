const Park = function(name, ticketPrice) {
    this.name = name
    this.ticketPrice = ticketPrice
    this.collectionOfDinosaurs = []
}

Park.prototype.numberOfDinosaurs = function() {
    return this.collectionOfDinosaurs.length
}
Park.prototype.addDinosaur = function(dinosaur) {
    this.collectionOfDinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaur = function(dinosaur) {
    const indexOfDinosaur = this.collectionOfDinosaurs.indexOf(dinosaur)
    this.collectionOfDinosaurs.splice(indexOfDinosaur, 1)
}

Park.prototype.getMostGuestsAttracted = function(dinosaur) {
    
    console.log(dinosaur.guestsAttractedPerDay)
}
module.exports = Park