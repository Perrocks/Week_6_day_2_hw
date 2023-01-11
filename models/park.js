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

Park.prototype.getMostGuestsAttracted = function() {
    var dinosaurs = this.collectionOfDinosaurs
    var guests = []
        for (var dinosaur of dinosaurs) {
        guests.push(dinosaur.guestsAttractedPerDay)
    }
    return Math.max(...guests)

}
  
Park.prototype.getNumberOfSameSpecies = function(dinosaurSpecies){
    var dinosaurs = this.collectionOfDinosaurs
    for (var dinosaur of dinosaurs){
        if (dinosaur.species === dinosaurSpecies){
        var listOfDinosaurs = []
        listOfDinosaurs.push(dinosaur.species)
        }
    }
    return listOfDinosaurs
}

Park.prototype.getTotalVisitsPerDay = function() {
    var dinosaurs = this.collectionOfDinosaurs
    var visits = []
        for (var dinosaur of dinosaurs) {
        visits.push(dinosaur.guestsAttractedPerDay)}

        let totalVisits = visits.reduce(function (a, b){
        return a+b})
    return totalVisits
}

Park.prototype.getTotalVisitsPerYear = function() {
    var dinosaurs = this.collectionOfDinosaurs
    var visits = []
        for (var dinosaur of dinosaurs) {
        visits.push(dinosaur.guestsAttractedPerDay)}

        let totalVisits = visits.reduce(function (a, b){
        return a+b})
    return totalVisits
}

Park.prototype.getTotalRevenue = function() {
    var dinosaurs = this.collectionOfDinosaurs
    var visits = []
        for (var dinosaur of dinosaurs) {
        visits.push(dinosaur.guestsAttractedPerDay)}

        let totalVisits = visits.reduce(function (a, b){
        return a+b})
    return totalVisits * this.ticketPrice
}
module.exports = Park