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
    dino3 = new Dinosaur("Tyrannosaurus", 3);
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
    assert.strictEqual(park.offsrpingLevel(2), 2);
  })
})