var Park = function() {
  this.enclosure = [];
}

Park.prototype.population = function() {
  return this.enclosure.length;
}

Park.prototype.add = function(dinosaur) {
  this.enclosure.push(dinosaur);
}

Park.prototype.removeType = function(type) {
  for (dino of this.enclosure) {
    if (dino.type === type) {
      var index = this.enclosure.indexOf(dino);
      this.enclosure.splice(index, 1);
    }
  }
}

Park.prototype.offspringLevel = function(amount) {
  var total = 0;
  for (dino of this.enclosure) {
    if (dino.offspring > amount) {
      total ++;
    }
  }
  return total;
}

module.exports = Park;