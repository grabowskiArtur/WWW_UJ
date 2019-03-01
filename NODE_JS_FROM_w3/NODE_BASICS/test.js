//test file from UJ lessons to prove passing information between objects and methods..
// i think you can ignore it 
var test = {
    ttt: 7
};

console.log(test.ttt);

var tw = function(){};
var g = new tw();

tw.prototype.www = '9';
console.log(tw.www);

var a = new tw();
console.log(a.www)

console.log(g.www)


var Obiekt = function() {};
var o = new Obiekt();
console.log(o.czesc);
Obiekt.prototype.czesc = 'czesc';
console.log(o.czesc);
var p = new Obiekt();
console.log(p.czesc);
Obiekt.prototype.PowedzCzesc = function(){
    console.log(this.czesc);
}
o.PowedzCzesc();
p.PowedzCzesc();