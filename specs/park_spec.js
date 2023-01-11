const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  
  let park
  let dinosaur1
  let dinosaur2

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('raptor', 'carnivore', 100);
    park = new Park("Jurrasic Park", 40)
  })

  it('should have a name', function() {
    const actual = park.name
    assert.strictEqual(actual, "Jurrasic Park")
  })

  it('should have a ticket price', function() {
    const actual = park.ticketPrice
    assert.strictEqual(actual, 40)
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.numberOfDinosaurs()
    assert.deepStrictEqual(actual, 0)
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur1)
    const actual = park.numberOfDinosaurs()
    assert.deepStrictEqual(actual, 1)
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.removeDinosaur(dinosaur1)
    const expected = [dinosaur2]
    const actual = park.collectionOfDinosaurs
    assert.deepStrictEqual(actual, expected)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    const actual = park.getMostGuestsAttracted(park.collectionOfDinosaurs)
    assert.deepStrictEqual(actual, 100)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    const expected = [dinosaur2.species, dinosaur2.species]
    const actual = park.getNumberOfSameSpecies(dinosaur2.species)
    assert.deepStrictEqual(actual, expected)
  })


  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    const actual = park.getTotalVisitsPerDay(park.collectionOfDinosaurs)
    assert.strictEqual(actual, 150)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    const actual = park.getTotalVisitsPerYear(park.collectionOfDinosaurs) * 365
    assert.strictEqual(actual, 54750)
  });

  it('should be able to calculate total revenue for one year', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    const actual = park.getTotalRevenue(park.collectionOfDinosaurs) * 365
    assert.strictEqual(actual, 2190000)
  });

});
