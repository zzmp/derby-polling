module.exports = Home
function Home() {}

Home.prototype.init = function() {
  var filter = this.model.filter(this.model.scope("polls"), function(poll) { return true });
  this.model.ref("polls", filter);
}

Home.prototype.create = function() {
}

