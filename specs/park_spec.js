var assert = require("assert");
var Dinosaur = require("../dinosaur");
var Park = require("../park");

describe("Park", function(){
  var dino1;
  var dino2;
  var dino3;
  var park;

  beforeEach(function() {
    dino1 = new Dinosaur("Tyrannosaurus", 1);
    dino2 = new Dinosaur("Velociraptor", 3);
    dino3 = new Dinosaur("Tyrannosaurus", 4);
    park = new Park();
  })

  it("enclosure starts empty", function() {
    assert.strictEqual(park.population(), 0);
  })

  it("can add dinosaur", function() {
    park.add(dino1);
    assert.strictEqual(park.population(), 1);
  })

  it("can remove all dinosaurs of a particular type", function() {
    park.add(dino1);
    park.add(dino2);
    park.add(dino3);
    park.removeType("Tyrannosaurus");
    assert.strictEqual(park.population(), 1);
  })

  it("can get dinosaurs with certain offsrping count", function() {
    park.add(dino1);
    park.add(dino2);
    park.add(dino3);
    assert.strictEqual(park.offspringLevel(2), 2);
  })

  it("can get number of dinosaurs after one year", function() {
    park.add(dino2);
    assert.strictEqual(park.dinoNumbers(1), 4);
    assert.strictEqual(park.dinoNumbers(2), 7);
  })

  it("can get number of dinosaurs after two years", function() {
    park.add(dino2);
    park.add(dino3);
    assert.strictEqual(park.dinoNumbers(2), 16);
  })
})