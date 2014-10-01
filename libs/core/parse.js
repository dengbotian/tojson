// Generated by CoffeeScript 1.8.0
(function() {
  var Parser;

  Parser = function(name, regExp, parser) {
    this.name = (typeof name === "undefined" ? "Default" : name);
    this.regExp = null;
    if (typeof regExp !== "undefined") {
      if (typeof regExp === "string") {
        this.regExp = new RegExp(regExp);
      } else {
        this.regExp = regExp;
      }
    }
    if (typeof parser !== "undefined") {
      this.parse = parser;
    }
  };

  module.exports = Parser;

  Parser.prototype.test = function(str) {
    if (this.regExp == null) {
      return true;
    } else {
      return this.regExp.test(str);
    }
  };

  Parser.prototype.parse = function(params) {
    params.resultRow[params.head] = params.item;
  };

  Parser.prototype.getHead = function() {
    return this.head;
  };

  Parser.prototype.clone = function() {
    return new Parser(this.name, this.regExp, this.parse);
  };

  Parser.prototype.getName = function() {
    return this.name;
  };

}).call(this);
