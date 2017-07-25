var assert = require("assert");
var Dinosaur = require("../dinosaur");
var Park = require("../park");

describe("Park", function(){
  var dino1;
  var dino2;
  var park;

  beforeEach(function() {
    dino1 = new Dinosaur("Tyrannosaurus", 1);
    dino2 = new Dinosaur("Velociraptor", 3);
    park = new Park();
  })
})