const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  
  let park
  let dinosaur
  let dinosaur1

  beforeEach(function () {
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur1 = new Dinosaur('raptor', 'carnivore', 100);
    park = new Park("Jurrasic Park", 100)
  })

  it('should have a name', function() {
    const actual = park.name
    assert.strictEqual(actual, "Jurrasic Park")
  })

  it('should have a ticket price', function() {
    const actual = park.ticketPrice
    assert.strictEqual(actual, 100)
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.numberOfDinosaurs()
    assert.deepStrictEqual(actual, 0)
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur)
    const actual = park.numberOfDinosaurs()
    assert.deepStrictEqual(actual, 1)
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur1)
    park.removeDinosaur(dinosaur)
    const expected = [dinosaur1]
    const actual = park.collectionOfDinosaurs
    assert.deepStrictEqual(actual, expected)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur1)
    const actual = park.getMostGuestsAttracted(park.collectionOfDinosaurs)
    assert.deepStrictEqual(actual, 100)
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
