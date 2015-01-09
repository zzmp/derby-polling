module.exports = Poll
function Poll() {}

Poll.prototype.init = function() {
  var model = this.model;
	var qfilter = model.filter(model.scope("questions"), function(quetsion) { return true });
  model.ref("questions", qfilter);
  var afilter = model.filter(model.scope("answers"), function(answer) { return true });
  model.ref("answers", afilter);
  
}

Poll.prototype.create = function() {
}

