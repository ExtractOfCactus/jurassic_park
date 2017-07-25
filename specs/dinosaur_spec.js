var assert = require("assert");
var Dinosaur = require("../dinosaur")

describe("Dinosaur", function() {
  var dino1;
  var dino2;

  beforeEach(function() {
    dino1 = new Dinosaur("Tyrannosaurus", 1);
    dino2 = new Dinosaur("Velociraptor", 3);
  })

  it("has type", function() {
    assert.strictEqual(dino1.type, "Tyrannosaurus");
  })
}) 