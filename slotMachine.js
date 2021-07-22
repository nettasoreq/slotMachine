(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVABQAEgXARgXIAYAWQgQAPgKAPQgMASgFAVQgHgXAFgWg");
	this.shape.setTransform(5.1356,10.9717,1.0081,1.0082);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgwACQAXgSAZgGQAYgGAZAGQgUAGgVAOQgQAKgPASg");
	this.shape_1.setTransform(11.6513,4.1918,1.0081,1.0082);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ED1C24").s().p("AhtBvQgvguAAhBQAAhAAvgtQAtguBAAAQBBAAAtAuQAuAtAABAQAABBguAuQgtAthBAAQhAAAgtgtg");
	this.shape_2.setTransform(15.6082,15.6597,1.0081,1.0082);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDE493").s().p("AhuBvQgvgtAAhCQAAhAAvguQAtguBBgBQBBABAuAuQAvAuAABAQAABCgvAtQguAvhBgBQhBABgtgvg");
	this.shape_3.setTransform(15.675,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1.0081,x:11.6513,y:4.1918}},{t:this.shape,p:{scaleX:1.0081,x:5.1356,y:10.9717}}]}).to({state:[{t:this.shape_3},{t:this.shape_1,p:{scaleX:1.0082,x:11.7125,y:4.2313}},{t:this.shape,p:{scaleX:1.0082,x:5.1967,y:11.0115}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-0.1,31.6,31.6);


(lib.sy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}
	this.frame_3 = function() {
		var self = this;
		self.stop();
	}
	this.frame_4 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// flash0_ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D9E6EE").s().p("AgTgVQAXgXAgALQACAXgQAUQgPATgUAFQgNAAgGADQgMgjAZgXg");
	this.shape.setTransform(8.7028,-2.2389);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C0D4E3").s().p("AgdAuQgQgKgHgSQACgDAJgBQAVgCARgQQAPgRACgVQAAgIACgCQATAGAJAQQAKAQgCAUQgCAQgNAOQgNAOgRACIgIABQgPAAgNgHg");
	this.shape_1.setTransform(10.7167,-0.3228);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D9E6EE").s().p("AgjAGQAEgPALgLQAMgMAPgDQAQgDAOAGQgBAbgQASQgRAUgZADIgKABQgGgPADgQg");
	this.shape_2.setTransform(-12.1613,-2.2612);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C0D4E3").s().p("Ag0ASQADgDAHgBQAugJAKgtQABgJACgCQASAGAKARQAJAQgCAUQgCARgPANQgOANgRABIgFAAQglAAgOgig");
	this.shape_3.setTransform(-10.199,-0.3139);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#61A1F8").s().p("AgPAQQgHgHABgJQAAgIAHgHQAHgHAIAAQAJAAAGAHQAHAHAAAJQAAAKgGAGQgHAGgKAAQgIAAgHgHg");
	this.shape_4.setTransform(16.0483,-17.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C0D4E3").s().p("AgmAPQAXAFAPgKQALgIAEgMQADgNgFgPQANAEAHANQAHAMgBAMQgCAOgLALQgLAKgNABIgDAAQgbAAgKgYg");
	this.shape_5.setTransform(0.3375,-18.4708);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D9E6EE").s().p("AgQAfQgHgBgDgDQgFgMACgNQACgLAJgJQAIgJALgCQAMgCAMAFQAGAEAAAMQAAASgPAMQgNALgOAAIgFAAg");
	this.shape_6.setTransform(-0.8517,-19.6084);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C0D4E3").s().p("AgmA4QgLAAgDgDQgDgEAAgLIAAgHIAYAAQAMgBAAgMIAAgWQABgPAOAAIAVAAQAOAAAAgNIAAgXQARgBAEADQAEAEAAASIAAAWQAAAOgPAAIgdAAQgHAAAAAHQABAOgBAOQAAAQgOAAg");
	this.shape_7.setTransform(-18.575,-14.4475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D9E6EE").s().p("AgSBDIgBgTQABgHgIAAQgOABgOgBQgJAAgDgDQgDgDAAgIIAAggQAAgNANgBIAeAAQAIABAAgJIAAgdQAAgNANAAIAhAAQANAAAAANIABAdQgBAJAIgBIASABQAGALgFARQgCAIgLABIgVABQgHAAgEADQgDADAAAIIgBAVQgBAOgOABIgLAAQgHAAgEgDg");
	this.shape_8.setTransform(-22.2237,-18.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DC578F").s().p("Ag5A6QgYgYAAgiQABgiAXgXQAYgXAhgBQAiAAAYAZQAYAXgBAhQAAAigYAYQgXAYgigBQgiABgXgYg");
	this.shape_9.setTransform(10.5005,-0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DC578F").s().p("AAABRQgiAAgYgYQgXgYABghQAAgiAYgXQAYgYAiAAQAhAAAXAZQAYAXAAAiQgBAigXAYQgYAXgiAAIAAgBg");
	this.shape_10.setTransform(-10.4005,-0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#85F0A6").s().p("AgFAWQgOgEgCgNQgDgLAIgHQAHgIANgBQAOAHADAIQAEAIgHAOQgIAIgJAAIgGgBg");
	this.shape_11.setTransform(21.1521,-11.9467);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DC578F").s().p("AgPAQQgHgGAAgKQAAgHAHgIQAHgHAIAAQAJABAHAHQAHAHAAAIQAAAJgHAGQgGAHgKAAQgJAAgGgHg");
	this.shape_12.setTransform(26.2234,-17.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F5E166").s().p("AgHAVIgIgCQgFgLgCgHQADgMAHgGQAIgGAJACQAKACAFAJQAFAJgDAIQgDAJgJAEQgFADgFAAIgHgCg");
	this.shape_13.setTransform(21.1471,-22.0734);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#407092").s().p("AkWE+QgqgBgZgmQg9hfAihmQAqh6A/ipQASgwAqgeQAqgdA0gBID0ABQAnAIASAJQAzAaAXAwIAEAGQAGAFABANIAQAvIAEAMIgIAEQgKADgEAIQgEAIAEAIQADAJAJADQAIACAJgEQAGgDABAAIAqB0IAQAqQAJAaAEARQAVBRgnBOIgEAJIhShyQgXgggnAAQiGABiFgBQgnAAgWAgIheCCQgbAlgoAAIgBAAg");
	this.shape_14.setTransform(-7.7553,0.042);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#45667F").s().p("AABgEIAAAJQgDgFADgEg");
	this.shape_15.setTransform(46.1875,16.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2B4D66").s().p("AAkEgIgPgWQgDgEAFgIQAZgzgBg4QAAgigOglIg7ioIgCgKIAAgFQAEgMgCgFQgDgGgJgHIgFgEIgSgxQgCgGABgEQACgCADABIAGABQAIABAGgCQAHgDACgGQAIgOgOgLQgGgGgKACQgKACgEAJQgDAIgBABQgEABgBgDIgCgFQgmhEhNgRIgIAAQgEgBgCgEIBLgBQArgBAfADQA1AEAkAbQAlAcATAyQASAwBWDzQAHAUACAUQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAAAiQgCAGACAFIAAADIgIAgQgJAogZAkQgXAggoABIgCAAQgmAAgYgeg");
	this.shape_16.setTransform(25.8,-0.0276);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FAC600").s().p("AgSAaIhXg5QACgCAHAAIDBAAQAHAAACACIhOA5QgMAIgMAAQgKAAgMgIg");
	this.shape_17.setTransform(13.625,24.2938);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F8CBBE").s().p("AAAgIQADAIgDAJg");
	this.shape_18.setTransform(-42.5375,17.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F9CBBE").s().p("AAAgIQADAIgDAJg");
	this.shape_19.setTransform(-42.7375,13.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FBCC7F").s().p("AgBBIQgBhGABgiQABgkgagMIAWAAQAMABAKAJQAJAKAAAMIAACBIgVAAIgBAAQgGAAAAgJg");
	this.shape_20.setTransform(-17.125,-36.6237);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FCD69A").s().p("AAPBSQgJAAgCgCQgBgBAAgKIAAg7QAAgHgCgCQgBgIgEgEQgEgEgJAAIgPAAQgKAAgGgBQgSgEAAgSIAAgUQAAgXAXAAIA3AAQAcAIAAAfIAABrQABAJABABQACACAIAAQAMAAADADIAAACg");
	this.shape_21.setTransform(-21.0875,-36.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FCE5BE").s().p("AkLAmQACgCAEAAQASAEAFgTIGYAAQALAAACgDQAFgFgFgJIgSggQgCgFAAgCQABgCAGABIAVAAQAKAAAHAHQAFAFAGALIAUAkQAIAQAMgDQAHgBACADg");
	this.shape_22.setTransform(-18.225,-24.605);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FCD69A").s().p("Ah2AYQgTAAgKgQIgSgfIEyAAQAGAAADAEQABAGAGAHIAJAMQgHASgXAAIj+AAg");
	this.shape_23.setTransform(-19.425,42.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D83131").s().p("ADKAqIACgKIABgXIAAgWQAAgHgKgCIgJgBImpAAIgHAAQgDAAgCgDIgBgPQgBgKALAAIHlABIAGgBQADAAABAEIgEBPIgqAUQgFgEAAgGg");
	this.shape_24.setTransform(-18.509,-5.775);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FEB441").s().p("AjvAsQgRgNAAgNQALAFAOABIAZABIFnAAQAbAAAVgUQAVgTABgbIABgKQABgGgDgDQAEgDAGABIAJACQAQAIAAAWQAAAdgEANQgJAYgTANQgUAOgcAAIlpAAQgeAAgZgTg");
	this.shape_25.setTransform(21.2493,38.3857);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FEB441").s().p("AiaBgQgSAAgFgBQgEgCgUABIgXgBQgNAAgJABIgJgKQgEgIABgHQABgGAEgDQADgCAIAAIGoAAQAOAAAFgFQAFgEAAgPQAAgpgigtQgPgUgXgSIgDgCQAAAAAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQBhAsAaBbQADAIACAZQAAANgNAHIjJABQgJgBgDACIgSABg");
	this.shape_26.setTransform(20.8554,11.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FDF0D9").s().p("AjQBHQgEAAgCgDIAVglQALgWAYAAICNABQAMAAABgBQABgBAAgLIAAhDQADABAAAEIABA9QAAAIACABQABACAJAAIAmAAQAIAAADADICQgCQAHAAACACQgDACgFABIgHgBQgHABAAABQgBABACAGIANAYIAEAJQAEAOgPADIgKAAg");
	this.shape_27.setTransform(-20.6,-29.325);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FEC165").s().p("AhNAkQgFgCgOAAIkXAAQgLAAgGgDQgKABgEgDIE+AAQAGAAABgBQACgCgBgGQgEgLACgeQAAgOAPgJIHWAAQAEAAAAAHQAAAdgOAUQgPAWgdAIQgGACgNAAIl0ABQgQAAgTgJg");
	this.shape_28.setTransform(3.2,36.725);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E94444").s().p("AiRBOQgRgDgMgLQgMgMgCgSIgDg0IgCgvQBIAMA+AAQBvACBzgaIAIgCIABAcQAAARABALQADARAOAKQAAADgDACQgMAIABATQAAAWACAKQABAHgCACQgBACgHABIkRAAIgEAAIgpgCg");
	this.shape_29.setTransform(-22.9214,31.8792);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#935B44").s().p("AjwA8QgNgFgFgRQgEgNgBgRIABgdIACgFQAIgWAIgHQACgDAEAAQAvgBAOACIBaA7QAXAOAWgQIBFgyIALgHQAEgCAKAAIC1ABIAIAAQAEAAADACQARARgCAXQgBAMABAWQABAYgRAPQgDACgHAAQgHgBgEACInDAAIgPAAg");
	this.shape_30.setTransform(20.6561,26.55);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E94444").s().p("AjeBOIgHieQCQABEegBQAUAAAEAFQAFAEAAAUIgBAZQgBAPABAKQg5AZhIAVQh6Aih5ACIgQAAQggAAgfgDg");
	this.shape_31.setTransform(-20.725,-0.39);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FEC165").s().p("AjPARQAcgsA5ggIADgCQAxgXApgHQBVgPBRAfIATAIQAfAWAQAYQAfArAAAqQgBANgFAFQgGAGgMABImiAAIgNABQgHABgFAGQABgmAZgqg");
	this.shape_32.setTransform(18.3754,8.7804);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FDF0D9").s().p("AhpCTQhIgBgzgJQgHgBgEgEIgBgLQgBgHAAgEQACgJgCgJIgBgYQABgJgBgKIgCgYQACgJgCgJIgCgXQABgMgBgMIAAgGQADgCAIABQB0AICAgaQBigUBfgqIAmgRIADgCIAEAAIAAAUQAAAMgCAIQgBAJADADQgBADgDACIgFADQg/AkgZA5QgOAfgBAaQAAAMAHAHQADADAAAEIgIANQgEAIgBAGQgBACgEACQgvAMg2AHQhEAHgwAAIgPAAg");
	this.shape_33.setTransform(-18.3,12.0774);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FCD69A").s().p("AkLAuQgGABgFgFIgJgKIAAhFIAIgJQAFgFAHgBIAmgDIHLABQANAAAZACQAUAFAAAVIAAAvQAAAZgbABIgGAAQgDAAgCADIhHAAImfAAQgOAAgFAGQgBgKgLAAg");
	this.shape_34.setTransform(-18.225,-15.575);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0592FB").s().p("AhgCPIg2g2QAcgeALgSQAhgzAShLIALgzQAWAdAeAEQAZADAVgLQAWgMALgXQADgFABAAQACAAADADIA2A2QAMAMgMAMIg7A7QAcALANAXQAMAWgDAaQgDAXgQASQgQASgYAFQgbAHgVgMQgVgLgUggIg4A4QgJAJgFAAQgFAAgJgJg");
	this.shape_35.setTransform(-14.55,29.925);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FEDF7D").s().p("AgGB+IhkAAIAAhbQAAgFACgCQACgBAFACQAnANAggZQAegXgBgoQgBgdgVgWQgVgUgdgBQgTAAgJADQgGADgCgCQgBgCAAgFIAAhbIB2AAIAVAUQAyAxASBRQAJArgFAwQgKBthKBDIgLAIQgjgjATg0g");
	this.shape_36.setTransform(22.9612,-23.85);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#7EDAAD").s().p("AgwCqQgEAAgBgCQgCgBACgFQAMgigSgeQgQgdghgHIgCgBQACgIADgmQADgkgKgxQgLg1ggguIDHAAQACADAAAKIAABGQAAAKACABQABABAKgCQAmgJAeAYQAeAYgBAlQAAAmgdAXQgeAYglgIIgDgBQgIgCgBACQgCABAAAIIAABIQAAAKgCADg");
	this.shape_37.setTransform(7.8754,-28.175);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A6E8A5").s().p("AgWCpQgKAAgEgDQgEgEAAgLIAAhFQAAgKgCgBQgBgBgJADQgkALgfgXQgegXgBglQAAgnAggXQAhgXAlANQAFACACgBQABgBAAgFIAAhOQAAgPAPAAIB6AAQAEACAHALQAeAxAKA+QAGAqgHAxIgBAIQgBAFgDACQgggEgXAPQgWAPgJAYQgJAYAJAaQACAFgBACQgCACgFAAg");
	this.shape_38.setTransform(-17.4314,-28.175);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EA5468").s().p("AA8B+IhPAAQgMAAgEgEQgEgEAAgMIAAhQQgbAKgVgFQgcgFgSgYQgRgWACgeQACgbAVgUQAVgUAbgBQAUgBAKAFQAFACACgCQABAAAAgGIAAhcIABgBIAHgBIBSAAQAIAAABACQACADgCAGQgMAnAZAhQADADAAADQATAVAdAAIAJABQgBAAAAABQAAAAgBAAQAAAAgBAAQgBAAAAAAIgEACQAOAiAFAbQAJA0gGAuQgGA3gYAtQgOAdgVAUQgEAFAAADQgmglAUg1g");
	this.shape_39.setTransform(16.3309,10.05);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#22A5FD").s().p("AhgDaQgVgLgLgVQgLgUACgYQADgYAPgRQAIgJAHgEIARgKIg6g6QgHgHAAgFQAAgGAIgGIA1g1IADgEQABgCgFgCQgYgMgMgWQgMgWAEgXQAEgbARgRQASgSAZgEQAZgEAWAMQAWANALAYIADAFIA3g4QAKgKAGAAQAFABAKAJIA4A4QglAPgLAhQgKAiATAgQABALgHAgQgTBUgnA6QgNATgQAPQgGAGgCAAQgBgBAAAAQgBAAgBAAQAAAAgBAAQAAAAAAABIgCAEQgTAmgoAFIgKABQgSAAgQgJg");
	this.shape_40.setTransform(-30.975,20.9321);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E4384F").s().p("Ag/DgQgZgCgUgQIgBgCQgCgEAGgFQA0g6ALhYQAKhMgdhMQgDgIABgBQABgBAIgBQAmgCAUggQAVgfgMglQgCgFABgBQABgBAFAAIBdAAIAAFJQgGAJgOAAIhGAAQgHAAgBACQgBACACAGQAIAYgJAZQgJAYgUAOQgTAMgWAAIgGAAg");
	this.shape_41.setTransform(35.1483,11.1625);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FECF64").s().p("AhkDVQgJgGgCgGQABgCAFgEQBEg4AQhfQAOhPgZhLQgUg+gygsIgEgDQgCgCABgDIDMAAQAIgBAGAKIAAFJQgCADgJAAIhKAAQgIAAgBABQgBABACAHQAKAlgXAeQgVAeglACIgGAAQgYAAgRgMg");
	this.shape_42.setTransform(35.05,-22.6437);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FEBDAB").s().p("AgRASQgIgIAAgKQABgJAHgIQAIgHAJgBQAJAAAJAIQAHAIABAJQAAAKgIAHQgIAIgJABIgBAAQgIAAgJgIg");
	this.shape_43.setTransform(28,-27.9236);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FE9979").s().p("AgiAlQgQgOAAgWQAAgVAOgPQAOgOAWgBQAVAAAPAOQAPAPAAAVQAAAVgPAPQgOAOgVABIgBAAQgTAAgPgOg");
	this.shape_44.setTransform(30.5258,-16.875);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FE7E68").s().p("AjaGnIAVgOQAwgjAjggIAwgtQASgRAug2QAcgkAkg3QA+hiAWhkQAKgwgCgoQgGhxg8hOQg5hKhWgRQgIABgEgEQAJgCAMABIAVACQAzAFAsAWQB/BAAiCHQAWBagmBlQgjBdhKBYQiGCjjNBuIgFACQAHgHANgIg");
	this.shape_45.setTransform(25.3934,-0.3393);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FE5A4E").s().p("AhEG2QABgBAAAAQAAgBAAgBQAAAAAAAAQAAgBgBAAIgDgDIg7g9Qgvg2gggrQgthAgghAQguhdgMhWQgJg4AIg3QAJhIAfg6QA0hhBXgqIAHgDQAEgCABgDQAyATAkAgQAFADADAAQAEAAAEgEQBPhBBjgDQA4ADA2ApQBEA1AdBcQARAyAAA6QAABAgbBMQgjBmhTBrQgZAhgiAlQhIBMhVA9IgRAKIgQALIgLAGIgFABQgEAAgEgDg");
	this.shape_46.setTransform(6.0242,0.1279);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EA443F").s().p("ADxG4Qg5gchAgsQiVhmhjh/QhPhogZhhQgGgXgDgYQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAAAgBgBIAAgHQACgGgCgGIAAgVQADgGgDgGIAAgJQADgIACgOIAFgXQApiQCLg4QA+gaBIAHQAoAEAiAOQABAEgDACIgGADQgfAPgaAUQhOBAgeBlQgUA+ACBAQABA1APA6QAfBzBTB5QAtA+AzA4IAvAwQAFAGABACQABABAAABQAAABAAAAQgBABAAAAQAAAAgBAAIgBAAg");
	this.shape_47.setTransform(-24.9775,-0.0976);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F5F8F8").s().p("Ag8BJQgFgDAAgLIAAh2QAAgKAFgDQAFgDAKAFIBnA8QAIAFAAAFQAAAGgJAFIhlA7QgHAEgEAAIgFgBg");
	this.shape_48.setTransform(1.15,27.9938);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#DC5790").s().p("AgJAcQgDgEgBgGIAAgkQABgFAEgEQAEgEAEABQAMAAABAMQABASgBATQgBAMgMAAIAAAAQgFAAgEgDg");
	this.shape_49.setTransform(-16.725,-3.725);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#DC5890").s().p("AAAAfQgFAAgEgEQgDgEgBgGIAAghQAAgGAEgEQAEgEAFgBQAFAAAEAEQAEAEABAGIAAARIAAASQgBAGgEAEQgDAEgFAAIgBgBg");
	this.shape_50.setTransform(5.5375,-3.7472);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#DC5790").s().p("AgJAvQgEgEAAgIIAAhFQAAgPANgBQAOAAAAAQIAABFQAAAQgOAAQgFAAgEgEg");
	this.shape_51.setTransform(16.675,-3.75);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#DC578F").s().p("AAABGQgNAAAAgRIAAhpQAAgRANAAQAOABAAAQIAABpQAAARgNAAIgBAAg");
	this.shape_52.setTransform(-11.175,-3.7474);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#DC5790").s().p("AgJBSQgEgFAAgIIAAiKQAAgLAIgEQAGgDAHAEQAGAFAAAKIAACIQAAAQgMACIgCAAQgFAAgEgEg");
	this.shape_53.setTransform(-0.025,-3.731);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#DC578F").s().p("AgNBUIAAioQAAgMAKgEQAIgDAGAIQADADAAAJIAACnQAAASgNAAQgOAAAAgSg");
	this.shape_54.setTransform(11.1,-3.7298);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#DC5790").s().p("AgIBiQgEgFgBgGIAAiqQABgSAMAAQANAAABASIAACpQAAAHgEAEQgEAFgGAAQgEAAgEgEg");
	this.shape_55.setTransform(-5.625,-3.725);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D9E6EE").s().p("AgVClQgCgBAAgGIAAkeIANABQAJAAACgDQADgCAAgIIgBgOIAAgKQACAGgBATQgBAOANgCIAHAAIABALIAADfQAAATgLAQQgLAQgRAGIgEABIgCAAg");
	this.shape_56.setTransform(38.875,11.395);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#C0D4E3").s().p("AgECrQgkgJgHgkQADgCAEAAIAIAAQAegBAAgdIAAkHQAKgEANAAIAbAAIAAFaIgWABQgUAAgKgDg");
	this.shape_57.setTransform(-41.3,15.7417);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D9387D").s().p("AhECHQgxgRgbgpQAKABAOAKQAfANAfgBQA3AAApghQAtgjANg2QANg9gfg3IgCgGQA2AlAMBBQALA9ghA0QggAzg9ARQgVAGgUAAQgbAAgbgKg");
	this.shape_58.setTransform(1.4375,29.444);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#2B4D66").s().p("ACwDSIAAgZQAAgagbgEQgHhUgihDQgZgxglgoQg0g6hCgfQg6gcg5gHQgOgBgDgCQBjgFBYArQChBRAvCuQAMAqABA0QABALgBAVQAAAFgDABIgMABQgHAAgGgEg");
	this.shape_59.setTransform(18.8083,-22.5508);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#C0D4E3").s().p("AAeDqIg7AAQgOAAgIgIQgIgJAAgOIAAgUIAYAAQAOABAJgCQAKgCAFgIQAFgHAAgLIAAl4QAHACACgFIACgIQgCAMANgBQAOAAAIAIQAIAJAAAPIAAGEQAAAXgOAJQgIAEgGAAIgCAAg");
	this.shape_60.setTransform(-30.475,15.2025);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D9E6EE").s().p("AgbDMQgEAAgCgCIAAgFQgDgEAAgIIAAlCQAAgJADgDIAAgZQAAgNAIgIQAIgIANgBIAmABQADADAAAJIAAFqQAAAdgdAEIgMABIgXgBg");
	this.shape_61.setTransform(-33.075,13.375);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D9E6EE").s().p("AgiDQIAAl2QABggAfABQAFAAABgDQACgCAAgFQABALALgBIARAAIAAF0QgBAPgIAJQgJAJgQAAg");
	this.shape_62.setTransform(27.95,12.775);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#C0D4E3").s().p("AhiDdQgJgJgBgSIAAgHQAAgGABgDQACgCAKgBIAaAAQAagBACgbIAAlmIAAgIQABgFADgDIAXgBQAKgCAIAIQAKAIABAMIAAE1QAAAIADABQACACAHgEQAdgQABgjIABgiIgBjBQAAgGACgBQAnAGAKApIABAKIAADlQABAYgSAQQgQARgYAAQgRABgQgBQgHAAAAAIIAAATQAAAOgJAHQgGAIgNAAQglAAgTABIgDAAQgOAAgJgIg");
	this.shape_63.setTransform(35.25,15.7502);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#DC578F").s().p("AhbB7IgRgKQghgvAFg6QAFg5ApgpQApgpA5gFQA6gGAuAiQAUAYAFAqQAIBMgzA2QgqAsg9AFIgNABQgiAAgjgPg");
	this.shape_64.setTransform(-2.1723,25.8654);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#407092").s().p("AltDSQgChXATg5QA9i8C6hFQA2gTA5gCQAlACAnAMQBUAaBCA7QA1AvAiBBQAfA5AJBDIADAZQAAAHgDACIgLABIgMAAIgOAAQgJAAgCgBQgCgCgBgJQgIhOgxhAQhLhgh7gPQhugNhdBGQhdBFgRBuIgCAPIgBAEQACALgMgBIglAAQgbABgCAbIABANQAAAHgEAFQgHACgGAAQgIAAgGgDg");
	this.shape_65.setTransform(-2.6848,-22.6237);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D9E6EE").s().p("AgWCUIgCgBIAAj6QAKgYAMgKQAOgKAKgBQADADAAAJIAAD7QAAAgggABIgHABIgIgBg");
	this.shape_66.setTransform(-43.775,13.57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.3,-45.1,98.6,90.30000000000001);


(lib.whell = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED3724").s().p("AiGCHQg3g4AAhPQAAhOA3g4QA4g3BOAAQBPAAA3A3QA4A4AABOQAABPg4A4Qg3A3hPAAQhOAAg4g3g");
	this.shape.setTransform(171.175,175.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(0.9,1,1).p("AA7AwIh1hf");
	this.shape_1.setTransform(28.75,126.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.9,1,1).p("AA7AwIh1hf");
	this.shape_2.setTransform(27.5,121.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5DC6CF").s().p("AjwBtIAAjZIHhAAIAADZg");
	this.shape_3.setTransform(28.125,123.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCCCC").s().p("AiWDxQglAAgbgaQgagbAAglIAAktQAAglAagbQAbgaAlAAIEtAAQAlAAAbAaQAaAbAAAlIAAEtQAAAlgaAbQgbAaglAAg");
	this.shape_4.setTransform(28.125,128.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A6A8AB").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAAQgMAMQgLAMgRAAQgQAAgLgMg");
	this.shape_5.setTransform(28.125,104.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(0.9,1,1).p("AA7AwIh1hf");
	this.shape_6.setTransform(77.05,54.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(0.9,1,1).p("AA7AwIh1hf");
	this.shape_7.setTransform(75.75,49.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5DC6CF").s().p("AjxBtIAAjRIABgHIHhAAIABAHIAADRg");
	this.shape_8.setTransform(76.4,51.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#66FF99").s().p("AiWDxQgmABgagbQgagbgBglIAAktQABgmAagaQAagbAmAAIEtAAQAlAAAbAbQAaAaABAmIAAEtQgBAlgaAbQgbAbglgBg");
	this.shape_9.setTransform(76.4,56.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A6A8AB").s().p("AgbAcQgMgLAAgRQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAARgMALQgLAMgRAAQgQAAgLgMg");
	this.shape_10.setTransform(76.4,31.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(0.9,1,1).p("Ag6AwIB1hf");
	this.shape_11.setTransform(266.65,290.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(0.9,1,1).p("Ag6AwIB1hf");
	this.shape_12.setTransform(267.9,286.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5DC6CF").s().p("AjwBtIAAjZIHhAAIAAAIIAADRg");
	this.shape_13.setTransform(267.275,287.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFF99").s().p("AiWDyQglgBgbgaQgagbAAglIAAktQAAglAagbQAbgaAlgBIEtAAQAlABAbAaQAaAbAAAlIAAEtQAAAlgaAbQgbAaglABg");
	this.shape_14.setTransform(267.275,292.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A6A8AB").s().p("AgbAcQgMgLAAgRQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAARgMALQgLAMgRAAQgQAAgLgMg");
	this.shape_15.setTransform(267.275,268.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(0.9,1,1).p("Ag6AwIB1hf");
	this.shape_16.setTransform(317.6,212);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(0.9,1,1).p("Ag6AwIB1hf");
	this.shape_17.setTransform(318.85,207.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5DC6CF").s().p("AjwBtIAAjRIAAgHIHhAAIAADYg");
	this.shape_18.setTransform(318.225,209);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#66FFCC").s().p("AiWDxQglABgbgbQgagbAAglIAAktQAAgmAagaQAbgbAlAAIEtAAQAlAAAbAbQAaAaAAAmIAAEtQAAAlgaAbQgbAbglgBg");
	this.shape_19.setTransform(318.225,214);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A6A8AB").s().p("AgbAcQgMgLAAgRQAAgQAMgLQALgMAQAAQARAAAMAMQALALAAAQQAAARgLALQgMAMgRAAQgQAAgLgMg");
	this.shape_20.setTransform(318.225,189.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(0.9,1,1).p("Ag6AwIB1hf");
	this.shape_21.setTransform(316.95,126.575);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(0.9,1,1).p("Ag6AwIB1hf");
	this.shape_22.setTransform(318.25,121.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5DC6CF").s().p("AjxBtIABjZIHhAAIABDZg");
	this.shape_23.setTransform(317.6,123.575);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CCCCFF").s().p("AiWDxQgmAAgagaQgagbgBglIAAktQABglAagbQAagaAmAAIEtAAQAlAAAbAaQAaAbABAlIAAEtQgBAlgaAbQgbAaglAAg");
	this.shape_24.setTransform(317.6,128.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A6A8AB").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAAQgMAMQgLAMgRAAQgQAAgLgMg");
	this.shape_25.setTransform(317.6,104.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(0.9,1,1).p("Ag6AwIB1hf");
	this.shape_26.setTransform(262.65,54.025);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(0.9,1,1).p("Ag6AwIB1hf");
	this.shape_27.setTransform(263.9,49.275);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#5DC6CF").s().p("AjxBtIAAjRIABgHIHhAAIABAHIAADRg");
	this.shape_28.setTransform(263.25,51.05);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFF99").s().p("AiWDxQglABgbgbQgbgbAAglIAAktQAAgmAbgaQAbgbAlAAIEtAAQAlAAAbAbQAaAaABAmIAAEtQgBAlgaAbQgbAbglgBg");
	this.shape_29.setTransform(263.25,56.05);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A6A8AB").s().p("AgbAcQgMgLAAgRQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAARgMALQgMAMgQAAQgQAAgLgMg");
	this.shape_30.setTransform(263.25,31.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(0.9,1,1).p("Ag6AwIB1hf");
	this.shape_31.setTransform(171,324.925);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(0.9,1,1).p("Ag6AwIB1hf");
	this.shape_32.setTransform(172.25,320.15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#5DC6CF").s().p("AjwBtIAAjZIHhAAIAADZg");
	this.shape_33.setTransform(171.625,321.925);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#99FFFF").s().p("AiWDxQglAAgbgaQgagbAAglIAAktQAAglAagbQAbgaAlAAIEtAAQAlAAAbAaQAaAbAAAlIAAEtQAAAlgaAbQgbAaglAAg");
	this.shape_34.setTransform(171.625,326.925);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A6A8AB").s().p("AgbAcQgMgLAAgRQAAgQAMgLQAMgMAPAAQARAAAMAMQALALAAAQQAAARgLALQgMAMgRAAQgPAAgMgMg");
	this.shape_35.setTransform(171.6,302.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(0.9,1,1).p("Ag6AwIB1hf");
	this.shape_36.setTransform(171,26.125);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(0.9,1,1).p("Ag6AwIB1hf");
	this.shape_37.setTransform(172.25,21.375);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#5DC6CF").s().p("AjwBtIAAjZIHhAAIAADZg");
	this.shape_38.setTransform(171.625,23.125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#66CCFF").s().p("AiWDxQglABgbgbQgagbAAgmIAAksQAAgmAagaQAbgbAlAAIEtAAQAlAAAbAbQAaAaAAAmIAAEsQAAAmgaAbQgbAbglgBg");
	this.shape_39.setTransform(171.625,28.15);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#A6A8AB").s().p("AgbAcQgMgLAAgRQAAgQAMgLQAMgMAPAAQARAAAMAMQALALAAAQQAAARgLALQgMAMgRAAQgPAAgMgMg");
	this.shape_40.setTransform(171.6,4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(0.9,1,1).p("AA7AwIh1hf");
	this.shape_41.setTransform(75.55,290.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(0.9,1,1).p("AA7AwIh1hf");
	this.shape_42.setTransform(74.3,286.15);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#5DC6CF").s().p("AjwBsIAAjYIHhAAIAADYg");
	this.shape_43.setTransform(74.925,287.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFCC").s().p("AiWDyQglgBgbgaQgagbAAglIAAktQAAglAagbQAbgaAlgBIEtAAQAlABAbAaQAaAbAAAlIAAEtQAAAlgaAbQgbAaglABg");
	this.shape_44.setTransform(74.925,292.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#A6A8AB").s().p("AgbAcQgMgLAAgRQAAgQAMgLQALgMAQAAQARAAAMAMQALALAAAQQAAARgLALQgMAMgRAAQgQAAgLgMg");
	this.shape_45.setTransform(74.925,268.775);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(0.9,1,1).p("AA7AwIh1hf");
	this.shape_46.setTransform(24.75,212);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(0.9,1,1).p("AA7AwIh1hf");
	this.shape_47.setTransform(23.475,207.225);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#5DC6CF").s().p("AjwBtIAAjYIHhAAIAAAHIAADRg");
	this.shape_48.setTransform(24.125,209);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#99FF99").s().p("AiWDxQglABgbgbQgagbAAglIAAktQAAgmAagaQAbgbAlAAIEtAAQAlAAAbAbQAaAaAAAmIAAEtQAAAlgaAbQgbAbglgBg");
	this.shape_49.setTransform(24.125,214);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#A6A8AB").s().p("AgbAcQgMgLAAgRQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAARgMALQgLAMgRAAQgQAAgLgMg");
	this.shape_50.setTransform(24.1,189.85);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#929497").ss(4.7).p("AHWAAQAADCiKCKQiKCKjCAAQjCAAiJiKQiKiKAAjCQAAjBCKiKQCKiKDBAAQDCAACKCKQCKCJAADCg");
	this.shape_51.setTransform(171.175,175.525);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#929497").ss(4.7).p("AX0AAQAAE2h4EbQh0ERjTDTQjTDTkRB0QkbB4k2AAQk1AAkbh4QkSh0jTjTQjSjTh0kRQh4kbAAk2QAAk1B4kbQB0kRDSjTQDTjTESh0QEbh4E1AAQE2AAEbB4QERB0DTDTQDTDTB0ERQB4EbAAE1g");
	this.shape_52.setTransform(171.175,175.525);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#A6A8AB").ss(3.5).p("AJVV6MgSpgrz");
	this.shape_53.setTransform(171.175,175.525);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#A6A8AB").ss(3.5).p("AV6pUMgrzASp");
	this.shape_54.setTransform(171.175,175.525);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#A6A8AB").ss(3.5).p("AWFI5MgsJgRx");
	this.shape_55.setTransform(171.175,175.525);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#A6A8AB").ss(3.5).p("AI62EMgRyAsJ");
	this.shape_56.setTransform(171.15,175.525);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#A6A8AB").ss(3.5).p("AQ1Q1Mghpghp");
	this.shape_57.setTransform(171.175,175.525);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#A6A8AB").ss(3.5).p("AQ1w0MghpAhp");
	this.shape_58.setTransform(171.175,175.525);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#A6A8AB").ss(3.5).p("AX0AAMgvnAAA");
	this.shape_59.setTransform(171.175,175.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#A6A8AB").ss(3.5).p("AAA3zMAAAAvn");
	this.shape_60.setTransform(171.15,175.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.whell, new cjs.Rectangle(0,0,342.4,351.1), null);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFFFF").s().p("AAmGIQhEgcgsgxQg2AohGAWQhHAXhQAAQh2AAhigwQhegvguhNQgWACgbAAQh+AAhag3QhZg4AAhPQAAhOBZg3QBag4B+AAQBaAABMAfQBqg9CFAAQAdAAAfAEQAJhmBdhHQBdhHCBAAQBlAABUAuQBRAtAkBJQAdgEAdAAQCCAABeBEQBeBDAGBhQAegCAaAAQB2AABUAlQBTAmAAA2QAAA2hTAmQhUAmh2AAIgFAAQglAkhDAWQhFAWhSAAQggAAgWgDQgrA0hHAeQhJAfhUAAQhRAAhHgcg");
	this.shape.setTransform(106,42);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,212,84), null);


(lib.Symbol12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFFFF").s().p("AAmGIQhEgcgsgxQg2AohGAWQhHAXhQAAQh2AAhigwQhegvguhNQgWACgbAAQh+AAhag3QhZg4AAhPQAAhOBZg3QBag4B+AAQBaAABMAfQBqg9CFAAQAdAAAfAEQAJhmBdhHQBdhHCBAAQBlAABUAuQBRAtAkBJQAdgEAdAAQCCAABeBEQBeBDAGBhQAegCAaAAQB2AABUAlQBTAmAAA2QAAA2hTAmQhUAmh2AAIgFAAQglAkhDAWQhFAWhSAAQggAAgWgDQgrA0hHAeQhJAfhUAAQhRAAhHgcg");
	this.shape.setTransform(106,42);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,212,84), null);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFFFF").s().p("AAmGIQhEgcgsgxQg2AohGAWQhHAXhQAAQh2AAhigwQhegvguhNQgWACgbAAQh+AAhag3QhZg4AAhPQAAhOBZg3QBag4B+AAQBaAABMAfQBqg9CFAAQAdAAAfAEQAJhmBdhHQBdhHCBAAQBlAABUAuQBRAtAkBJQAdgEAdAAQCCAABeBEQBeBDAGBhQAegCAaAAQB2AABUAlQBTAmAAA2QAAA2hTAmQhUAmh2AAIgFAAQglAkhDAWQhFAWhSAAQggAAgWgDQgrA0hHAeQhJAfhUAAQhRAAhHgcg");
	this.shape.setTransform(151.2574,59.9143,1.4269,1.4269);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,302.5,119.9), null);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8E8E9").s().p("AjyDTQgmhTAAhfQAAibBehuQBdhvCDAAQBIABBAAjQA/AjAsA/QhRhChjAAQiDgBhdBvQheBuAACcQAABDAUBAQAUA9AkAzQhAg0glhRg");
	this.shape.setTransform(35.225,42.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED3724").s().p("AkoFgQh7iSAAjOQAAjNB7iSQB7iRCtAAQCuAAB7CRQB7CSAADNQAADOh7CSQh7CRiuAAQitAAh7iRg");
	this.shape_1.setTransform(42.025,49.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#512A0F").ss(2.5).p("AAAsiIAAZF");
	this.shape_2.setTransform(42,173.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,84.1,254.9), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8E8E9").s().p("AiFEIQg9hEgbhbQguiVA5iEQA4iFB+gnQBEgVBIAQQBGAPA9AvQhigoheAdQh9Ang5CFQg4CEAtCVQAUBBAmA3QAlA1AwAlQhMgfg6hCg");
	this.shape.setTransform(30.7352,45.4459);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAA925").s().p("Ai0GnQighng9jFQg8jEBLivQBLivCmgzQCmgzCgBnQCgBnA9DFQA8DEhLCvQhLCvimAzQg3ARg3AAQhtAAhrhFg");
	this.shape_1.setTransform(42.875,49.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#512A0F").ss(2.5).p("AkFr5IILXz");
	this.shape_2.setTransform(81.7,166.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,109.1,244.4), null);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8E8E9").s().p("AieD+Qg4hIgXhcQgkiXBBiBQBBiBCAgfQBFgRBHAUQBEATA6AzQheguhgAXQh/AfhBCBQhBCBAkCXQAQBDAiA5QAiA3AuAoQhKgjg2hGg");
	this.shape.setTransform(31.6437,45.0397);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BAD875").s().p("AjOGbQiZhwgxjJQgwjHBWiqQBVirCqgoQCogpCaBxQCZBxAwDIQAxDHhWCqQhWCripAoQgtALgsAAQh4AAhxhTg");
	this.shape_1.setTransform(42.6148,49.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#512A0F").ss(2.5).p("Ai0zpMAFpAnU");
	this.shape_2.setTransform(70.875,217.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,90.3,344.5), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8E8E9").s().p("AkVC6QgahXAMheQAUiaBrhhQBqhiCCARQBHAJA8AtQA5ArAkBDQhIhMhigNQiCgRhrBhQhqBigVCaQgJBDAMBCQAMA/AdA3Qg5g8gahVg");
	this.shape.setTransform(38.488,40.9988);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDC160").s().p("Ag/HtQitgXhnigQhnigAajMQAbjMCNiAQCNiACrAWQCtAXBnCgQBnCggaDLQgbDMiNCBQh4BtiOAAQgZAAgZgDg");
	this.shape_1.setTransform(43.325,49.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#512A0F").ss(2.5).p("AC90UMgF5Aop");
	this.shape_2.setTransform(18.875,222.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-1.2,0,86.8,354.2), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8E8E9").s().p("Aj7DNQgjhUADhfQAFibBghrQBhhsCDAEQBHACA/AnQA9AkArBAQhPhFhjgDQiDgDhgBrQhhBrgFCbQgCBFASBAQASA+AiAzQg+g2gihSg");
	this.shape.setTransform(35.7133,42.3178);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE5496").s().p("AgOHxQiugFh3iWQh2iVAGjNQAGjOCAiOQB/iNCtAFQCuAFB3CVQB2CWgGDNQgHDOh/CNQh6CJilAAIgNAAg");
	this.shape_1.setTransform(42.025,49.7017);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#512A0F").ss(2.5).p("AgG4MMAANAwZ");
	this.shape_2.setTransform(41.35,247.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,84.1,404.1), null);


(lib.Sy8797mbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E5F61").s().p("AgaLqIAA3UIA1AAIAAXUg");
	this.shape.setTransform(49.025,74.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Sy8797mbol6, new cjs.Rectangle(46.3,0,5.5,149.3), null);


(lib.Sy879mbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7B4780").s().p("AgyAoQgVgUAAgeIAAgyICPAAIAAAyQAAAegVAUQgWAWgdgBQgdABgVgWg");
	this.shape.setTransform(52.875,32.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDC160").s().p("AhCAvQgcgbAAgmIAAg4IC+AAIAAA4QAAAmgcAbQgcAdgoAAQgmAAgcgdg");
	this.shape_1.setTransform(52.85,34.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#909295").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_2.setTransform(10.275,16.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2E3E4").s().p("AgjCyIAAljIBGAAIAAFjg");
	this.shape_3.setTransform(40.6,62.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2E3E4").s().p("AgiCyIAAljIBFAAIAAFjg");
	this.shape_4.setTransform(67.175,62.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2E3E4").s().p("AghAqIAhhTIAiBTg");
	this.shape_5.setTransform(17.925,4.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2E3E4").s().p("AhzBhQgXgXAHgbQAGgWAcgbIBYhXQAYgZAiAAQAjABAZAYQAYAZAAAjQAAAigZAYQhYApgpAYQghATgTACIgEAAQgUAAgSgSg");
	this.shape_6.setTransform(13.3169,18.3343);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2E3E4").s().p("AiggmIB5h/IDIDNIh5B+g");
	this.shape_7.setTransform(28.025,25.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2E3E4").s().p("AhoCBQg1AAgmgmQglglAAg2QAAg0AlgmQAmgmA1AAIDQAAQA2AAAmAmQAlAmAAA0QAAA2glAlQgmAmg2AAg");
	this.shape_8.setTransform(52.55,39.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D4D6D7").s().p("AgegtIA9BDIg9AYg");
	this.shape_9.setTransform(13.825,6.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#ED3724").s().p("AiYhoIAlgfIAagHIgGAaIAagGIgGAaIAagGIgFAaIAZgGIgFAaIAagHIgGAaIAZgGIgFAaIAZgGIgFAZIAagFIgGAYIAagGIgGAaIAagGIgFAaIAagGIgGAaIAagGIgFAZIAZgGIgvAxg");
	this.shape_10.setTransform(31.725,17.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#909295").s().p("AAZCGQgPgWAAgsIAAiBQAAgHgFgFQgFgGgIAAIglAAQgQAAgKgLQgLgKAAgQQAAgPALgKQAKgLAQAAIAlAAQAmAAAaAbQAbAaAAAmQAAAJgLAvQgMAuAABwQgXAAgMgTg");
	this.shape_11.setTransform(77.05,48.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D4D6D7").s().p("AhiAhIAAAAICBi1IA7AoIhbB/IBkBJIgqA5g");
	this.shape_12.setTransform(31.375,57.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D4D6D7").s().p("AgiCyIAAljIBGAAIAAFjg");
	this.shape_13.setTransform(57.3,62.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Sy879mbol7, new cjs.Rectangle(0,0,85.4,80.4), null);


(lib._908098 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8E8E9").s().p("AkSC8QgchXAMheQASiaBqhjQBphiCCAQQBIAIA7AsQA6AqAlBDQhJhLhigMQiCgQhqBjQhpBigTCaQgIBEANBCQALA/AeA2Qg5g8gbhUg");
	this.shape.setTransform(48.8826,41.1942);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5DC6CF").s().p("Ag6HuQitgVhpifQhpifAZjMQAYjMCMiCQCLiCCsAUQCsAVBpCfQBpCfgYDMQgYDMiMCCQh4BxiQAAQgXAAgYgDg");
	this.shape_1.setTransform(53.9165,49.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#512A0F").ss(2.5).p("AC5tmIlybN");
	this.shape_2.setTransform(18.55,178.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._908098, new cjs.Rectangle(-1.2,0,97.3,266.9), null);


(lib._89789 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED3724").s().p("AgyAoQgVgUAAgeIAAgyICPAAIAAAyQAAAegVAUQgWAWgdgBQgdABgVgWg");
	this.shape.setTransform(52.875,32.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDC160").s().p("AhCAvQgcgbAAgmIAAg4IC9AAIAAA4QAAAmgcAbQgcAdgnAAQgnAAgbgdg");
	this.shape_1.setTransform(52.875,34.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#909295").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_2.setTransform(10.3,16.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2E3E4").s().p("AgjCyIAAljIBGAAIAAFjg");
	this.shape_3.setTransform(40.6,62.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2E3E4").s().p("AgjCyIAAljIBHAAIAAFjg");
	this.shape_4.setTransform(67.2,62.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2E3E4").s().p("AghAqIAhhTIAiBTg");
	this.shape_5.setTransform(17.925,4.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2E3E4").s().p("AhzBhQgXgXAHgbQAGgWAcgbIBYhXQAYgZAjAAQAiABAZAYQAYAZAAAjQAAAigZAYQhYApgpAYQghATgTACIgEAAQgUAAgSgSg");
	this.shape_6.setTransform(13.3183,18.3343);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2E3E4").s().p("AiggmIB5h/IDIDNIh5B+g");
	this.shape_7.setTransform(28.025,25.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2E3E4").s().p("AhnCBQg2AAgmgmQglglAAg2QAAg0AlgmQAmgmA2AAIDQAAQA1AAAmAmQAlAmAAA0QAAA2glAlQgmAmg1AAg");
	this.shape_8.setTransform(52.55,39.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D4D6D7").s().p("AgegtIA9BDIg9AYg");
	this.shape_9.setTransform(13.825,6.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#ED3724").s().p("AiYhoIAkgfIAagHIgFAaIAZgGIgFAaIAagGIgFAaIAZgGIgFAaIAZgHIgFAaIAZgGIgFAaIAZgGIgFAZIAagFIgGAYIAagGIgGAaIAagGIgFAaIAagGIgGAaIAagGIgGAZIAagGIgvAxg");
	this.shape_10.setTransform(31.75,17.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#909295").s().p("AAYCGQgOgWABgsIgBiBQAAgHgFgFQgFgGgIAAIglAAQgPAAgLgLQgLgKAAgQQAAgPALgKQALgLAPAAIAlAAQAlAAAbAbQAbAaAAAmQAAAJgMAvQgMAuABBwQgXAAgNgTg");
	this.shape_11.setTransform(77.05,48.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D4D6D7").s().p("AhiAhIAAAAICBi1IA7AoIhbB/IBkBJIgpA5g");
	this.shape_12.setTransform(31.375,57.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D4D6D7").s().p("AgiCyIAAljIBGAAIAAFjg");
	this.shape_13.setTransform(57.3,62.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._89789, new cjs.Rectangle(0,0,85.4,80.4), null);


(lib._811 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5DC6CF").s().p("AgyAoQgVgUAAgeIAAgyICPAAIAAAyQAAAegVAUQgWAWgdgBQgdABgVgWg");
	this.shape.setTransform(52.875,32.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDC160").s().p("AhDAvQgcgbAAgmIAAg4IC+AAIAAA4QAAAmgcAbQgcAdgnAAQgnAAgcgdg");
	this.shape_1.setTransform(52.85,34.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#909295").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_2.setTransform(10.3,16.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2E3E4").s().p("AgiCyIAAljIBGAAIAAFjg");
	this.shape_3.setTransform(40.6,62.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2E3E4").s().p("AgjCyIAAljIBGAAIAAFjg");
	this.shape_4.setTransform(67.2,62.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2E3E4").s().p("AghAqIAhhTIAiBTg");
	this.shape_5.setTransform(17.925,4.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2E3E4").s().p("AhzBhQgXgXAHgbQAGgWAcgbIBYhXQAYgZAiAAQAjABAZAYQAYAZAAAjQAAAigZAYQhYApgpAYQghATgTACIgEAAQgUAAgSgSg");
	this.shape_6.setTransform(13.3183,18.3343);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2E3E4").s().p("AiggmIB5h/IDIDNIh5B+g");
	this.shape_7.setTransform(28.025,25.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2E3E4").s().p("AhnCBQg1AAgmgmQgmglAAg2QAAg0AmgmQAlgmA2AAIDPAAQA2AAAlAmQAmAmAAA0QAAA2gmAlQglAmg2AAg");
	this.shape_8.setTransform(52.55,39.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D4D6D7").s().p("AgegtIA9BDIg9AYg");
	this.shape_9.setTransform(13.825,6.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#ED3724").s().p("AiYhoIAkgfIAagHIgFAaIAagGIgGAaIAagGIgGAaIAagGIgFAaIAZgHIgFAaIAZgGIgGAaIAagGIgGAZIAagFIgFAYIAZgGIgEAaIAZgGIgGAaIAbgGIgGAaIAZgGIgFAZIAagGIgvAxg");
	this.shape_10.setTransform(31.75,17.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#909295").s().p("AAYCGQgOgWABgsIgBiBQAAgHgGgFQgEgGgHAAIgnAAQgPAAgKgLQgLgKAAgQQAAgPALgKQAKgLAPAAIAnAAQAlAAAaAbQAbAaAAAmQAAAJgLAvQgNAuAABwQgWAAgNgTg");
	this.shape_11.setTransform(77.05,48.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D4D6D7").s().p("AhiAhIAAAAICBi1IA7AoIhbB/IBkBJIgpA5g");
	this.shape_12.setTransform(31.375,57.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D4D6D7").s().p("AgjCyIAAljIBGAAIAAFjg");
	this.shape_13.setTransform(57.3,62.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._811, new cjs.Rectangle(0,0,85.4,80.4), null);


(lib.startbtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
		
		self.addEventListener("rollover",h);
		
		function h(){
			self.gotoAndStop(1);
		}
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
		
		self.addEventListener("rollout",o);
		function o(){
			self.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAMB5QgKgGAAgFQAAgJAbgKIAzgUQAbgOAAgQQAAgggPgjQgSgrgZAAQgigBgkAsQgQATgrBBQgjA2gVAOQgQgFAAgiQAAgXAZgiIAqgxIgagoQgQgZgBgRQABgPARgKIAhAbQAQAMAHAWQAHgIAhgZQAggaAHgBIAPgBQA3AAAgBAQAaAzAAAwQAAArgqAZQgkAWguAAQgJAAgIgGg");
	this.shape.setTransform(172.4,33.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AB2BvQgIgPAAgJIAChoQAAgshTAAIgSAAQg0AAgCAXQABAdgCA1QgHAtgFAOQgHASgNADQgHADgiAAQgeAAgLgcQgEgKgBgLQAAgQAUAAIAfADQAbAAgCgyQgBgWAEgzQABgQADgPQABgIAIgKQAIgKAHgBIAkgEIAZgDQA8AAAgANQBCAeAABXQABAmgHAhQgJAygRABQgGAAgHgQg");
	this.shape_1.setTransform(137.9,33.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABTBxQgFgWgDg/QgCgxgOgVQgVgdg1AAQgdAAgIACQgWADgDAQQgCAPAAAzQAAA4gBANQgFAqgTAAQgaAAAAhEIAAh/QAAgnAOgKQALgJApAAQBwAAApAmQAqApAAB0QAAAbgDALQgHAUgTAAQgQAAgDgOg");
	this.shape_2.setTransform(106,33.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AABBKIgKgBQgTgWAAhCQAAgiAEgUIAOgEIAVAAQAJgBAFAXQAEAVAAAMIAAAtQgBAdgFAPQgEADgGAAIgFABIgHgBg");
	this.shape_3.setTransform(86.275,28);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmCdQgIgIAAgKQAAgBArg7QAug/AJgiQAGgTiAAAQgjAAAAgTQAAgSALgkQAJghAKgVIAYABQAOgBAHAFIACAqQAAAMgDARIApAAQApAAATAHQAkAKAAAeQAAAigwBTQgxBZgcAAQgJAAgKgIg");
	this.shape_4.setTransform(68.9,29.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AABBKIgKgBQgTgWAAhCQAAgiAEgUIAOgEIAVAAQAJgBAFAXQAEAVAAAMIAAAtQgBAdgFAPQgEADgGAAIgFABIgHgBg");
	this.shape_5.setTransform(52.875,28);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhqB0QgMgKAAgeIAAidQAAgtApAAIARABIA5AAIArgBQA5AAAOAJQAIAGAAA/QAABygEARQgGAjgmAHQgMACh7AAQgeAAgMgLgAhBhEQgHAHAAATIAABgQAAAPALADQAaAKA3gFIAlgDQAKgCADgJQABgIAAgeIABgWIABgZQAAgygaAAIgrgBIgpgBQgVgBgHAHg");
	this.shape_6.setTransform(34.225,33.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5DC6CF").s().p("AupEnQguAAghghQghghAAguIAAluQAAgtAhgiQAhggAuAAIdUAAQAtAAAiAgQAgAiAAAtIAAFuQAAAuggAhQgiAhgtAAg");
	this.shape_7.setTransform(105,29.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(134,134,134,0.298)").s().p("AuiBnQgrAAgfgfQgegdAAgrQAAgpAegfQAfgeArAAIdGAAQAqAAAeAeQAeAfAAApQAAArgeAdQgeAfgqAAg");
	this.shape_8.setTransform(104,53.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FBC926").s().p("AupEnQguAAghghQghghAAguIAAltQAAgvAhghQAhggAuAAIdTAAQAvAAAgAgQAhAhAAAvIAAFtQAAAughAhQggAhgvAAg");
	this.shape_9.setTransform(105,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_9},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,63.5);


(lib.lightstart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAAQACgKAHgLIAMALQgHAGgFAHQgFAIgDALQgEgLADgLg");
	this.shape.setTransform(607.2778,-36.1613,1.008,1.008);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWABQAMgJAKgCQALgDAMADQgJADgKAGQgGAEgJAJg");
	this.shape_1.setTransform(610.4048,-39.4249,1.008,1.008);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_2.setTransform(612.32,-33.9436,1.008,1.008);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJABQACgLAHgLIAMAKQgHAGgFAIQgFAIgDALQgEgKADgLg");
	this.shape_3.setTransform(607.3615,242.1267,1.0082,1.0082);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQAMgDALADQgJADgKAGQgGAEgJAJg");
	this.shape_4.setTransform(610.4889,238.8626,1.0082,1.0082);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_5.setTransform(612.354,244.3952,1.0082,1.0082);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKAAQADgLAHgKIALAKQgIAJgDAGQgFAIgEAKQgCgMABgKg");
	this.shape_6.setTransform(607.2509,211.0064,1.008,1.0081);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDAKADQgLADgIAHQgJAFgGAHg");
	this.shape_7.setTransform(610.379,207.7553,1.008,1.0081);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_8.setTransform(612.269,213.2493,1.008,1.0081);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJAAQACgLAHgKIAMALQgIAGgEAHQgGAKgCAJQgEgKADgMg");
	this.shape_9.setTransform(607.3668,180.1435,1.0082,1.0082);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXABQAKgIANgDQAMgDALADQgJACgKAHQgFADgKAKg");
	this.shape_10.setTransform(610.4942,176.8795,1.0082,1.0082);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	this.shape_11.setTransform(612.3593,182.412,1.0082,1.0082);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKAAQACgKAIgLIALAKQgHAHgEAIQgFAHgEALQgCgNABgJg");
	this.shape_12.setTransform(607.2561,149.2563,1.008,1.0081);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXABQAMgJALgCQAKgDAOADQgKADgKAGQgIAFgGAIg");
	this.shape_13.setTransform(610.359,145.9926,1.008,1.0081);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_14.setTransform(612.2743,151.4741,1.008,1.0081);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgIAHgEAHQgGAKgCAJQgEgKADgMg");
	this.shape_15.setTransform(607.3721,118.3855,1.0082,1.0082);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgXABQAJgIAOgDQANgDALADQgLADgJAGQgGAEgJAJg");
	this.shape_16.setTransform(610.4996,115.1089,1.0082,1.0082);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_17.setTransform(612.3647,120.6288,1.0082,1.0082);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJAAQACgKAHgLIAMALQgHAGgFAHQgFAIgDALQgEgLADgLg");
	this.shape_18.setTransform(607.2372,87.431,1.008,1.0081);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgWABQAMgJAKgCQALgDAMADQgJADgKAGQgGAEgJAJg");
	this.shape_19.setTransform(610.3642,84.1673,1.008,1.0081);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_20.setTransform(612.2795,89.6488,1.008,1.0081);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgKAAQADgLAHgKIAMAKQgIAHgEAHQgGALgCAIQgEgKACgMg");
	this.shape_21.setTransform(607.3681,56.6024,1.0082,1.0082);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDAKADQgLAEgIAFQgKAHgFAHg");
	this.shape_22.setTransform(610.4797,53.3509,1.0082,1.0082);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_23.setTransform(612.37,58.8456,1.0082,1.0082);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJAAQACgLAHgKIAMALQgHAFgFAJQgFAGgDAMQgEgLADgLg");
	this.shape_24.setTransform(607.3393,25.687,1.0082,1.0082);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQAKgDANADQgJADgKAGQgGAEgJAJg");
	this.shape_25.setTransform(610.4668,22.4228,1.0082,1.0082);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAXAAAdQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_26.setTransform(612.3823,27.9051,1.0082,1.0082);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgKAAQADgLAHgKIAMAKQgIAHgEAHQgGALgCAIQgEgKACgMg");
	this.shape_27.setTransform(607.3681,-5.2476,1.0082,1.0082);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDAKADQgLAEgIAFQgKAHgFAHg");
	this.shape_28.setTransform(610.4797,-8.4991,1.0082,1.0082);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_29.setTransform(612.37,-3.0044,1.0082,1.0082);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgJAAQACgKAHgLIAMALQgHAGgFAHQgFAIgDALQgEgLADgLg");
	this.shape_30.setTransform(4.7888,-4.7895,1.008,1.008);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgWABQAMgJAKgCQALgDAMADQgJADgKAGQgGAEgJAJg");
	this.shape_31.setTransform(7.9156,-8.053,1.008,1.008);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_32.setTransform(9.8307,-2.5719,1.008,1.008);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgJABQACgLAHgLIAMAKQgHAGgFAIQgFAIgDALQgEgKADgLg");
	this.shape_33.setTransform(5.3615,-35.6233,1.0082,1.0082);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQAMgDALADQgJADgKAGQgGAEgJAJg");
	this.shape_34.setTransform(8.4889,-38.8874,1.0082,1.0082);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_35.setTransform(10.354,-33.3548,1.0082,1.0082);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgKAAQADgLAHgKIALAKQgIAJgDAGQgFAIgEAKQgCgMABgKg");
	this.shape_36.setTransform(4.7916,241.6081,1.008,1.008);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDAKADQgLADgIAHQgJAFgGAHg");
	this.shape_37.setTransform(7.9195,238.3571,1.008,1.008);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_38.setTransform(9.8096,243.851,1.008,1.008);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgJAAQACgLAHgKIAMALQgIAGgEAHQgGAKgCAJQgEgKADgMg");
	this.shape_39.setTransform(4.9668,210.7935,1.0082,1.0082);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgXABQAKgIANgDQAMgDALADQgJACgKAHQgFADgKAKg");
	this.shape_40.setTransform(8.0942,207.5295,1.0082,1.0082);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	this.shape_41.setTransform(9.9593,213.062,1.0082,1.0082);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgKAAQACgKAIgLIALAKQgHAHgEAIQgFAHgEALQgCgNABgJg");
	this.shape_42.setTransform(4.7968,180.011,1.008,1.008);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgXABQAMgJALgCQAKgDAOADQgKADgKAGQgIAFgGAIg");
	this.shape_43.setTransform(7.8996,176.7474,1.008,1.008);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_44.setTransform(9.8148,182.2287,1.008,1.008);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgIAHgEAHQgGAKgCAJQgEgKADgMg");
	this.shape_45.setTransform(4.9721,149.2355,1.0082,1.0082);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgXABQAJgIAOgDQANgDALADQgLADgJAGQgGAEgJAJg");
	this.shape_46.setTransform(8.0995,145.9589,1.0082,1.0082);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_47.setTransform(9.9647,151.4788,1.0082,1.0082);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgJAAQACgKAHgLIAMALQgHAGgFAHQgFAIgDALQgEgLADgLg");
	this.shape_48.setTransform(4.7778,118.3887,1.008,1.008);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgWABQAMgJAKgCQALgDAMADQgJADgKAGQgGAEgJAJg");
	this.shape_49.setTransform(7.9048,115.1252,1.008,1.008);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_50.setTransform(9.82,120.6064,1.008,1.008);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgKAAQADgLAHgKIAMAKQgIAHgEAHQgGALgCAIQgEgKACgMg");
	this.shape_51.setTransform(4.9681,87.6524,1.0082,1.0082);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDAKADQgLAEgIAFQgKAHgFAHg");
	this.shape_52.setTransform(8.0796,84.4009,1.0082,1.0082);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_53.setTransform(9.97,89.8956,1.0082,1.0082);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgJAAQACgLAHgKIAMALQgHAFgFAJQgFAGgDAMQgEgLADgLg");
	this.shape_54.setTransform(4.9393,56.837,1.0082,1.0082);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQAKgDANADQgJADgKAGQgGAEgJAJg");
	this.shape_55.setTransform(8.0668,53.5728,1.0082,1.0082);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAXAAAdQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_56.setTransform(9.9823,59.0551,1.0082,1.0082);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgKAAQADgLAHgKIAMAKQgIAHgEAHQgGALgCAIQgEgKACgMg");
	this.shape_57.setTransform(4.9681,26.0524,1.0082,1.0082);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDAKADQgLAEgIAFQgKAHgFAHg");
	this.shape_58.setTransform(8.0796,22.8009,1.0082,1.0082);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_59.setTransform(9.97,28.2956,1.0082,1.0082);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgHAGgFAIQgEAHgEAMQgEgKADgMg");
	this.shape_60.setTransform(15.4115,266.5235,1.0081,1.0081);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgWABQAMgIAKgDQANgDAKADQgLADgIAGQgJAGgGAIg");
	this.shape_61.setTransform(18.5387,263.2724,1.0081,1.0081);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_62.setTransform(20.4541,268.7665,1.0081,1.0081);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgJAAQACgJAHgMIAMAKQgHAGgFAIQgEAHgEAMQgEgKADgMg");
	this.shape_63.setTransform(53.8118,266.4869,1.008,1.008);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgXABQAMgIALgDQANgDAKADQgKADgJAGQgJAGgFAIg");
	this.shape_64.setTransform(56.9386,263.2363,1.008,1.008);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_65.setTransform(58.8537,268.7297,1.008,1.008);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgKAAQADgLAHgKIALAKQgIAJgDAFQgFAJgEAKQgCgMABgKg");
	this.shape_66.setTransform(92.4254,266.5235,1.0081,1.0081);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDAKADQgLADgIAGQgKAHgFAHg");
	this.shape_67.setTransform(95.5536,263.2724,1.0081,1.0081);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_68.setTransform(97.4438,268.7665,1.0081,1.0081);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgIAHgEAHQgGALgCAIQgEgKADgMg");
	this.shape_69.setTransform(130.8422,266.4869,1.008,1.008);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDALADQgLADgJAGQgHAFgIAJg");
	this.shape_70.setTransform(133.969,263.2363,1.008,1.008);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_71.setTransform(135.8338,268.7297,1.008,1.008);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgHAGgFAIQgGALgCAIQgEgKADgMg");
	this.shape_72.setTransform(169.4413,266.5235,1.0081,1.0081);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgXABQAMgIALgDQANgDAKADQgKADgJAGQgIAGgHAIg");
	this.shape_73.setTransform(172.5685,263.2724,1.0081,1.0081);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_74.setTransform(174.4334,268.7665,1.0081,1.0081);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgJAAQACgJAHgMIAMAKQgHAGgFAIQgEAHgEAMQgEgKADgMg");
	this.shape_75.setTransform(207.7723,266.4869,1.008,1.008);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgWABQALgIALgDQANgDALADQgLADgJAGQgJAGgFAIg");
	this.shape_76.setTransform(210.8991,263.2363,1.008,1.008);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_77.setTransform(212.8142,268.7297,1.008,1.008);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgKAAQACgJAIgMIALAKQgIAJgDAFQgFAJgEAKQgCgMABgKg");
	this.shape_78.setTransform(246.4052,266.5235,1.0081,1.0081);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDAKADQgLADgIAGQgKAHgFAHg");
	this.shape_79.setTransform(249.5334,263.2724,1.0081,1.0081);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_80.setTransform(251.4235,268.7665,1.0081,1.0081);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgKAAQADgMAHgJIAMAKQgIAHgEAHQgGALgCAIQgEgKACgMg");
	this.shape_81.setTransform(284.8434,266.4869,1.008,1.008);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgXABQALgIAMgDQAMgDALADQgLADgIAGIgPAOg");
	this.shape_82.setTransform(287.9795,263.2363,1.008,1.008);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_83.setTransform(289.8442,268.7297,1.008,1.008);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgHAGgFAIQgGALgCAIQgEgKADgMg");
	this.shape_84.setTransform(323.4211,266.5235,1.0081,1.0081);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgXABQANgIAKgDQANgDALADQgKADgKAGQgIAFgHAJg");
	this.shape_85.setTransform(326.5483,263.2724,1.0081,1.0081);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_86.setTransform(328.4132,268.7665,1.0081,1.0081);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgHAGgFAIQgEAHgEAMQgEgKADgMg");
	this.shape_87.setTransform(361.7828,266.4869,1.008,1.008);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgWABQAMgIAKgDQANgDAKADQgLADgIAGQgIAGgHAIg");
	this.shape_88.setTransform(364.9096,263.2363,1.008,1.008);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_89.setTransform(366.8247,268.7297,1.008,1.008);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgKAAQACgJAIgMIALAKQgHAGgEAIQgFAJgEAKQgCgMABgKg");
	this.shape_90.setTransform(400.435,266.5235,1.0081,1.0081);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgXABQANgIAKgDQANgDALADQgMADgIAGQgKAHgEAHg");
	this.shape_91.setTransform(403.538,263.2724,1.0081,1.0081);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_92.setTransform(405.4533,268.7665,1.0081,1.0081);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgKAAQADgLAHgKIAMAKQgIAHgEAHQgGALgCAIQgEgKACgMg");
	this.shape_93.setTransform(438.8038,266.4869,1.008,1.008);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDAKADQgLADgIAGQgKAHgFAHg");
	this.shape_94.setTransform(441.9148,263.2363,1.008,1.008);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_95.setTransform(443.8047,268.7297,1.008,1.008);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgIAHgEAHQgGALgCAIQgEgKADgMg");
	this.shape_96.setTransform(477.4509,266.5235,1.0081,1.0081);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgWABQAMgIAKgDQANgDAKADQgKADgJAGQgHAFgIAJg");
	this.shape_97.setTransform(480.5781,263.2724,1.0081,1.0081);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_98.setTransform(482.443,268.7665,1.0081,1.0081);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgHAGgFAIQgEAHgEAMQgEgKADgMg");
	this.shape_99.setTransform(515.7932,266.4869,1.008,1.008);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgXABQAMgIALgDQANgDAKADQgKADgJAGQgJAGgFAIg");
	this.shape_100.setTransform(518.92,263.2363,1.008,1.008);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_101.setTransform(520.8352,268.7297,1.008,1.008);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgKAAQACgJAIgMIALAKQgHAGgEAIQgFAHgEAMQgDgNACgJg");
	this.shape_102.setTransform(554.4028,266.5235,1.0081,1.0081);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgWABQAMgIAKgDQANgDALADQgLADgJAGQgJAGgGAIg");
	this.shape_103.setTransform(557.5178,263.2724,1.0081,1.0081);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_104.setTransform(559.4331,268.7665,1.0081,1.0081);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgKAAQADgLAHgKIAMAKQgIAHgEAHQgGALgCAIQgEgKACgMg");
	this.shape_105.setTransform(593.0643,266.4869,1.008,1.008);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDAKADQgLADgIAGQgKAHgFAHg");
	this.shape_106.setTransform(596.1753,263.2363,1.008,1.008);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_107.setTransform(598.0652,268.7297,1.008,1.008);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgIAHgEAHQgGALgCAIQgEgKADgMg");
	this.shape_108.setTransform(16.0302,-63.8484,1.0079,1.0079);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDALADQgLADgJAGQgHAFgIAJg");
	this.shape_109.setTransform(19.1568,-67.0989,1.0079,1.0079);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_110.setTransform(21.0214,-61.6059,1.0079,1.0079);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgHAGgFAIQgEAHgEAMQgEgKADgMg");
	this.shape_111.setTransform(592.4115,-63.8265,1.0081,1.0081);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgWABQAMgIAKgDQANgDAKADQgLADgIAGQgJAGgGAIg");
	this.shape_112.setTransform(595.5387,-67.0776,1.0081,1.0081);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_113.setTransform(597.4541,-61.5835,1.0081,1.0081);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgKAAQADgLAHgKIALAKQgIAJgDAFQgFAJgEAKQgCgMABgKg");
	this.shape_114.setTransform(54.4754,-63.8265,1.0081,1.0081);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDAKADQgLADgIAGQgKAHgFAHg");
	this.shape_115.setTransform(57.6036,-67.0776,1.0081,1.0081);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_116.setTransform(59.4938,-61.5835,1.0081,1.0081);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgIAHgEAHQgGALgCAIQgEgKADgMg");
	this.shape_117.setTransform(92.825,-63.8643,1.0079,1.0079);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDALADQgLADgJAGQgHAFgIAJg");
	this.shape_118.setTransform(95.9517,-67.1148,1.0079,1.0079);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_119.setTransform(97.8163,-61.6217,1.0079,1.0079);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgHAGgFAIQgGALgCAIQgEgKADgMg");
	this.shape_120.setTransform(131.2913,-63.8265,1.0081,1.0081);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgXABQAMgIALgDQANgDAKADQgKADgJAGQgIAGgHAIg");
	this.shape_121.setTransform(134.4185,-67.0776,1.0081,1.0081);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_122.setTransform(136.2834,-61.5835,1.0081,1.0081);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgJAAQACgJAHgMIAMAKQgHAGgFAIQgEAHgEAMQgEgKADgMg");
	this.shape_123.setTransform(169.5515,-63.8643,1.0079,1.0079);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgWABQALgIALgDQANgDALADQgLADgJAGQgJAGgFAIg");
	this.shape_124.setTransform(172.6781,-67.1148,1.0079,1.0079);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_125.setTransform(174.5932,-61.6217,1.0079,1.0079);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgKAAQACgJAIgMIALAKQgIAJgDAFQgFAJgEAKQgCgMABgKg");
	this.shape_126.setTransform(208.0552,-63.8265,1.0081,1.0081);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDAKADQgLADgIAGQgKAHgFAHg");
	this.shape_127.setTransform(211.1834,-67.0776,1.0081,1.0081);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_128.setTransform(213.0735,-61.5835,1.0081,1.0081);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgKAAQADgMAHgJIAMAKQgIAHgEAHQgGALgCAIQgEgKACgMg");
	this.shape_129.setTransform(246.3689,-63.8643,1.0079,1.0079);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgXABQALgIAMgDQAMgDALADQgLADgIAGIgPAOg");
	this.shape_130.setTransform(249.5049,-67.1148,1.0079,1.0079);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_131.setTransform(251.3696,-61.6217,1.0079,1.0079);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgHAGgFAIQgGALgCAIQgEgKADgMg");
	this.shape_132.setTransform(284.8711,-63.8265,1.0081,1.0081);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgXABQANgIAKgDQANgDALADQgKADgKAGQgIAFgHAJg");
	this.shape_133.setTransform(287.9983,-67.0776,1.0081,1.0081);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_134.setTransform(289.8632,-61.5835,1.0081,1.0081);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgHAGgFAIQgEAHgEAMQgEgKADgMg");
	this.shape_135.setTransform(323.1547,-63.8643,1.0079,1.0079);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgWABQAMgIAKgDQANgDAKADQgLADgIAGQgIAGgHAIg");
	this.shape_136.setTransform(326.2813,-67.1148,1.0079,1.0079);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_137.setTransform(328.1964,-61.6217,1.0079,1.0079);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgKAAQACgJAIgMIALAKQgHAGgEAIQgFAJgEAKQgCgMABgKg");
	this.shape_138.setTransform(361.685,-63.8265,1.0081,1.0081);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgXABQANgIAKgDQANgDALADQgMADgIAGQgKAHgEAHg");
	this.shape_139.setTransform(364.788,-67.0776,1.0081,1.0081);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_140.setTransform(366.7033,-61.5835,1.0081,1.0081);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgKAAQADgLAHgKIAMAKQgIAHgEAHQgGALgCAIQgEgKACgMg");
	this.shape_141.setTransform(399.9721,-63.8643,1.0079,1.0079);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDAKADQgLADgIAGQgKAHgFAHg");
	this.shape_142.setTransform(403.083,-67.1148,1.0079,1.0079);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_143.setTransform(404.9728,-61.6217,1.0079,1.0079);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgIAHgEAHQgGALgCAIQgEgKADgMg");
	this.shape_144.setTransform(438.5009,-63.8265,1.0081,1.0081);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgWABQAMgIAKgDQANgDAKADQgKADgJAGQgHAFgIAJg");
	this.shape_145.setTransform(441.6281,-67.0776,1.0081,1.0081);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_146.setTransform(443.493,-61.5835,1.0081,1.0081);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgHAGgFAIQgEAHgEAMQgEgKADgMg");
	this.shape_147.setTransform(476.7079,-63.8643,1.0079,1.0079);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgXABQAMgIALgDQANgDAKADQgKADgJAGQgJAGgFAIg");
	this.shape_148.setTransform(479.8346,-67.1148,1.0079,1.0079);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_149.setTransform(481.7496,-61.6217,1.0079,1.0079);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgKAAQACgJAIgMIALAKQgHAGgEAIQgFAHgEAMQgDgNACgJg");
	this.shape_150.setTransform(515.2528,-63.8265,1.0081,1.0081);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgWABQAMgIAKgDQANgDALADQgLADgJAGQgJAGgGAIg");
	this.shape_151.setTransform(518.3678,-67.0776,1.0081,1.0081);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_152.setTransform(520.2831,-61.5835,1.0081,1.0081);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgKAAQADgLAHgKIAMAKQgIAHgEAHQgGALgCAIQgEgKACgMg");
	this.shape_153.setTransform(553.5754,-63.8643,1.0079,1.0079);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDAKADQgLADgIAGQgKAHgFAHg");
	this.shape_154.setTransform(556.6862,-67.1148,1.0079,1.0079);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_155.setTransform(558.576,-61.6217,1.0079,1.0079);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_155,p:{x:558.576,y:-61.6217}},{t:this.shape_154,p:{x:556.6862,y:-67.1148}},{t:this.shape_153,p:{x:553.5754,y:-63.8643}},{t:this.shape_152,p:{x:520.2831,y:-61.5835}},{t:this.shape_151,p:{x:518.3678,y:-67.0776}},{t:this.shape_150,p:{x:515.2528,y:-63.8265}},{t:this.shape_149,p:{x:481.7496,y:-61.6217}},{t:this.shape_148,p:{x:479.8346,y:-67.1148}},{t:this.shape_147,p:{x:476.7079,y:-63.8643}},{t:this.shape_146,p:{x:443.493,y:-61.5835}},{t:this.shape_145,p:{x:441.6281,y:-67.0776}},{t:this.shape_144,p:{x:438.5009,y:-63.8265}},{t:this.shape_143,p:{x:404.9728,y:-61.6217}},{t:this.shape_142,p:{x:403.083,y:-67.1148}},{t:this.shape_141,p:{x:399.9721,y:-63.8643}},{t:this.shape_140,p:{x:366.7033,y:-61.5835}},{t:this.shape_139,p:{x:364.788,y:-67.0776}},{t:this.shape_138,p:{x:361.685,y:-63.8265}},{t:this.shape_137,p:{x:328.1964,y:-61.6217}},{t:this.shape_136,p:{x:326.2813,y:-67.1148}},{t:this.shape_135,p:{x:323.1547,y:-63.8643}},{t:this.shape_134,p:{x:289.8632,y:-61.5835}},{t:this.shape_133,p:{x:287.9983,y:-67.0776}},{t:this.shape_132,p:{x:284.8711,y:-63.8265}},{t:this.shape_131,p:{x:251.3696,y:-61.6217}},{t:this.shape_130,p:{x:249.5049,y:-67.1148}},{t:this.shape_129,p:{x:246.3689,y:-63.8643}},{t:this.shape_128,p:{x:213.0735,y:-61.5835}},{t:this.shape_127,p:{x:211.1834,y:-67.0776}},{t:this.shape_126,p:{x:208.0552,y:-63.8265}},{t:this.shape_125,p:{x:174.5932,y:-61.6217}},{t:this.shape_124,p:{x:172.6781,y:-67.1148}},{t:this.shape_123,p:{x:169.5515,y:-63.8643}},{t:this.shape_122,p:{x:136.2834,y:-61.5835}},{t:this.shape_121,p:{x:134.4185,y:-67.0776}},{t:this.shape_120,p:{x:131.2913,y:-63.8265}},{t:this.shape_119,p:{x:97.8163,y:-61.6217}},{t:this.shape_118,p:{x:95.9517,y:-67.1148}},{t:this.shape_117,p:{x:92.825,y:-63.8643}},{t:this.shape_116,p:{x:59.4938,y:-61.5835}},{t:this.shape_115,p:{x:57.6036,y:-67.0776}},{t:this.shape_114,p:{x:54.4754,y:-63.8265}},{t:this.shape_113,p:{x:597.4541,y:-61.5835}},{t:this.shape_112,p:{x:595.5387,y:-67.0776}},{t:this.shape_111,p:{x:592.4115,y:-63.8265}},{t:this.shape_110,p:{x:21.0214,y:-61.6059}},{t:this.shape_109,p:{x:19.1568,y:-67.0989}},{t:this.shape_108,p:{x:16.0302,y:-63.8484}},{t:this.shape_107,p:{x:598.0652,y:268.7297}},{t:this.shape_106,p:{x:596.1753,y:263.2363}},{t:this.shape_105,p:{x:593.0643,y:266.4869}},{t:this.shape_104,p:{x:559.4331,y:268.7665}},{t:this.shape_103,p:{x:557.5178,y:263.2724}},{t:this.shape_102,p:{x:554.4028,y:266.5235}},{t:this.shape_101,p:{x:520.8352,y:268.7297}},{t:this.shape_100,p:{x:518.92,y:263.2363}},{t:this.shape_99,p:{x:515.7932,y:266.4869}},{t:this.shape_98,p:{x:482.443,y:268.7665}},{t:this.shape_97,p:{x:480.5781,y:263.2724}},{t:this.shape_96,p:{x:477.4509,y:266.5235}},{t:this.shape_95,p:{x:443.8047,y:268.7297}},{t:this.shape_94,p:{x:441.9148,y:263.2363}},{t:this.shape_93,p:{x:438.8038,y:266.4869}},{t:this.shape_92,p:{x:405.4533,y:268.7665}},{t:this.shape_91,p:{x:403.538,y:263.2724}},{t:this.shape_90,p:{x:400.435,y:266.5235}},{t:this.shape_89,p:{x:366.8247,y:268.7297}},{t:this.shape_88,p:{x:364.9096,y:263.2363}},{t:this.shape_87,p:{x:361.7828,y:266.4869}},{t:this.shape_86,p:{x:328.4132,y:268.7665}},{t:this.shape_85,p:{x:326.5483,y:263.2724}},{t:this.shape_84,p:{x:323.4211,y:266.5235}},{t:this.shape_83,p:{x:289.8442,y:268.7297}},{t:this.shape_82,p:{x:287.9795,y:263.2363}},{t:this.shape_81,p:{x:284.8434,y:266.4869}},{t:this.shape_80,p:{x:251.4235,y:268.7665}},{t:this.shape_79,p:{x:249.5334,y:263.2724}},{t:this.shape_78,p:{x:246.4052,y:266.5235}},{t:this.shape_77,p:{x:212.8142,y:268.7297}},{t:this.shape_76,p:{x:210.8991,y:263.2363}},{t:this.shape_75,p:{x:207.7723,y:266.4869}},{t:this.shape_74,p:{x:174.4334,y:268.7665}},{t:this.shape_73,p:{x:172.5685,y:263.2724}},{t:this.shape_72,p:{x:169.4413,y:266.5235}},{t:this.shape_71,p:{x:135.8338,y:268.7297}},{t:this.shape_70,p:{x:133.969,y:263.2363}},{t:this.shape_69,p:{x:130.8422,y:266.4869}},{t:this.shape_68,p:{x:97.4438,y:268.7665}},{t:this.shape_67,p:{x:95.5536,y:263.2724}},{t:this.shape_66,p:{x:92.4254,y:266.5235}},{t:this.shape_65,p:{x:58.8537,y:268.7297}},{t:this.shape_64,p:{x:56.9386,y:263.2363}},{t:this.shape_63,p:{x:53.8118,y:266.4869}},{t:this.shape_62,p:{x:20.4541,y:268.7665}},{t:this.shape_61,p:{x:18.5387,y:263.2724}},{t:this.shape_60,p:{x:15.4115,y:266.5235}},{t:this.shape_59,p:{x:9.97,y:28.2956}},{t:this.shape_58,p:{x:8.0796,y:22.8009}},{t:this.shape_57,p:{x:4.9681,y:26.0524}},{t:this.shape_56,p:{x:9.9823,y:59.0551}},{t:this.shape_55,p:{x:8.0668,y:53.5728}},{t:this.shape_54,p:{x:4.9393,y:56.837}},{t:this.shape_53,p:{x:9.97,y:89.8956}},{t:this.shape_52,p:{x:8.0796,y:84.4009}},{t:this.shape_51,p:{x:4.9681,y:87.6524}},{t:this.shape_50,p:{x:9.82,y:120.6064}},{t:this.shape_49,p:{x:7.9048,y:115.1252}},{t:this.shape_48,p:{x:4.7778,y:118.3887}},{t:this.shape_47,p:{x:9.9647,y:151.4788}},{t:this.shape_46,p:{x:8.0995,y:145.9589}},{t:this.shape_45,p:{x:4.9721,y:149.2355}},{t:this.shape_44,p:{x:9.8148,y:182.2287}},{t:this.shape_43,p:{x:7.8996,y:176.7474}},{t:this.shape_42,p:{x:4.7968,y:180.011}},{t:this.shape_41,p:{x:9.9593,y:213.062}},{t:this.shape_40,p:{x:8.0942,y:207.5295}},{t:this.shape_39,p:{x:4.9668,y:210.7935}},{t:this.shape_38,p:{x:9.8096,y:243.851}},{t:this.shape_37,p:{x:7.9195,y:238.3571}},{t:this.shape_36,p:{x:4.7916,y:241.6081}},{t:this.shape_35,p:{x:10.354,y:-33.3548}},{t:this.shape_34,p:{x:8.4889,y:-38.8874}},{t:this.shape_33,p:{x:5.3615,y:-35.6233}},{t:this.shape_32,p:{x:9.8307,y:-2.5719}},{t:this.shape_31,p:{x:7.9156,y:-8.053}},{t:this.shape_30,p:{x:4.7888,y:-4.7895}},{t:this.shape_29,p:{x:612.37,y:-3.0044}},{t:this.shape_28,p:{x:610.4797,y:-8.4991}},{t:this.shape_27,p:{x:607.3681,y:-5.2476}},{t:this.shape_26,p:{x:612.3823,y:27.9051}},{t:this.shape_25,p:{x:610.4668,y:22.4228}},{t:this.shape_24,p:{x:607.3393,y:25.687}},{t:this.shape_23,p:{x:612.37,y:58.8456}},{t:this.shape_22,p:{x:610.4797,y:53.3509}},{t:this.shape_21,p:{x:607.3681,y:56.6024}},{t:this.shape_20,p:{x:612.2795,y:89.6488}},{t:this.shape_19,p:{x:610.3642,y:84.1673}},{t:this.shape_18,p:{x:607.2372,y:87.431}},{t:this.shape_17,p:{x:612.3647,y:120.6288}},{t:this.shape_16,p:{x:610.4996,y:115.1089}},{t:this.shape_15,p:{x:607.3721,y:118.3855}},{t:this.shape_14,p:{x:612.2743,y:151.4741}},{t:this.shape_13,p:{x:610.359,y:145.9926}},{t:this.shape_12,p:{x:607.2561,y:149.2563}},{t:this.shape_11,p:{x:612.3593,y:182.412}},{t:this.shape_10,p:{x:610.4942,y:176.8795}},{t:this.shape_9,p:{x:607.3668,y:180.1435}},{t:this.shape_8,p:{x:612.269,y:213.2493}},{t:this.shape_7,p:{x:610.379,y:207.7553}},{t:this.shape_6,p:{x:607.2509,y:211.0064}},{t:this.shape_5,p:{x:612.354,y:244.3952}},{t:this.shape_4,p:{x:610.4889,y:238.8626}},{t:this.shape_3,p:{x:607.3615,y:242.1267}},{t:this.shape_2,p:{x:612.32,y:-33.9436}},{t:this.shape_1,p:{x:610.4048,y:-39.4249}},{t:this.shape,p:{x:607.2778,y:-36.1613}}]}).to({state:[{t:this.shape_155,p:{x:557.926,y:268.7283}},{t:this.shape_154,p:{x:556.0362,y:263.2352}},{t:this.shape_153,p:{x:552.9254,y:266.4857}},{t:this.shape_152,p:{x:519.6331,y:268.7665}},{t:this.shape_151,p:{x:517.7178,y:263.2724}},{t:this.shape_150,p:{x:514.6028,y:266.5235}},{t:this.shape_149,p:{x:481.0996,y:268.7283}},{t:this.shape_148,p:{x:479.1846,y:263.2352}},{t:this.shape_147,p:{x:476.0579,y:266.4857}},{t:this.shape_146,p:{x:442.843,y:268.7665}},{t:this.shape_145,p:{x:440.9781,y:263.2724}},{t:this.shape_144,p:{x:437.8509,y:266.5235}},{t:this.shape_143,p:{x:404.3228,y:268.7283}},{t:this.shape_142,p:{x:402.433,y:263.2352}},{t:this.shape_141,p:{x:399.3221,y:266.4857}},{t:this.shape_140,p:{x:366.0533,y:268.7665}},{t:this.shape_139,p:{x:364.138,y:263.2724}},{t:this.shape_138,p:{x:361.035,y:266.5235}},{t:this.shape_137,p:{x:327.5464,y:268.7283}},{t:this.shape_136,p:{x:325.6313,y:263.2352}},{t:this.shape_135,p:{x:322.5047,y:266.4857}},{t:this.shape_134,p:{x:289.2132,y:268.7665}},{t:this.shape_133,p:{x:287.3483,y:263.2724}},{t:this.shape_132,p:{x:284.2211,y:266.5235}},{t:this.shape_131,p:{x:250.7196,y:268.7283}},{t:this.shape_130,p:{x:248.8549,y:263.2352}},{t:this.shape_129,p:{x:245.7189,y:266.4857}},{t:this.shape_128,p:{x:212.4235,y:268.7665}},{t:this.shape_127,p:{x:210.5334,y:263.2724}},{t:this.shape_126,p:{x:207.4052,y:266.5235}},{t:this.shape_125,p:{x:173.9432,y:268.7283}},{t:this.shape_124,p:{x:172.0281,y:263.2352}},{t:this.shape_123,p:{x:168.9015,y:266.4857}},{t:this.shape_122,p:{x:135.6334,y:268.7665}},{t:this.shape_121,p:{x:133.7685,y:263.2724}},{t:this.shape_120,p:{x:130.6413,y:266.5235}},{t:this.shape_119,p:{x:97.1663,y:268.7283}},{t:this.shape_118,p:{x:95.3017,y:263.2352}},{t:this.shape_117,p:{x:92.175,y:266.4857}},{t:this.shape_116,p:{x:58.8438,y:268.7665}},{t:this.shape_115,p:{x:56.9536,y:263.2724}},{t:this.shape_114,p:{x:53.8254,y:266.5235}},{t:this.shape_113,p:{x:596.8041,y:268.7665}},{t:this.shape_112,p:{x:594.8887,y:263.2724}},{t:this.shape_111,p:{x:591.7615,y:266.5235}},{t:this.shape_110,p:{x:20.3714,y:268.7441}},{t:this.shape_109,p:{x:18.5068,y:263.2511}},{t:this.shape_108,p:{x:15.3802,y:266.5016}},{t:this.shape_107,p:{x:598.7152,y:-61.6203}},{t:this.shape_106,p:{x:596.8253,y:-67.1137}},{t:this.shape_105,p:{x:593.7143,y:-63.8631}},{t:this.shape_104,p:{x:560.0831,y:-61.5835}},{t:this.shape_103,p:{x:558.1678,y:-67.0776}},{t:this.shape_102,p:{x:555.0528,y:-63.8265}},{t:this.shape_101,p:{x:521.4852,y:-61.6203}},{t:this.shape_100,p:{x:519.57,y:-67.1137}},{t:this.shape_99,p:{x:516.4432,y:-63.8631}},{t:this.shape_98,p:{x:483.093,y:-61.5835}},{t:this.shape_97,p:{x:481.2281,y:-67.0776}},{t:this.shape_96,p:{x:478.1009,y:-63.8265}},{t:this.shape_95,p:{x:444.4547,y:-61.6203}},{t:this.shape_94,p:{x:442.5648,y:-67.1137}},{t:this.shape_93,p:{x:439.4538,y:-63.8631}},{t:this.shape_92,p:{x:406.1033,y:-61.5835}},{t:this.shape_91,p:{x:404.188,y:-67.0776}},{t:this.shape_90,p:{x:401.085,y:-63.8265}},{t:this.shape_89,p:{x:367.4747,y:-61.6203}},{t:this.shape_88,p:{x:365.5596,y:-67.1137}},{t:this.shape_87,p:{x:362.4328,y:-63.8631}},{t:this.shape_86,p:{x:329.0632,y:-61.5835}},{t:this.shape_85,p:{x:327.1983,y:-67.0776}},{t:this.shape_84,p:{x:324.0711,y:-63.8265}},{t:this.shape_83,p:{x:290.4942,y:-61.6203}},{t:this.shape_82,p:{x:288.6295,y:-67.1137}},{t:this.shape_81,p:{x:285.4934,y:-63.8631}},{t:this.shape_80,p:{x:252.0735,y:-61.5835}},{t:this.shape_79,p:{x:250.1834,y:-67.0776}},{t:this.shape_78,p:{x:247.0552,y:-63.8265}},{t:this.shape_77,p:{x:213.4642,y:-61.6203}},{t:this.shape_76,p:{x:211.5491,y:-67.1137}},{t:this.shape_75,p:{x:208.4223,y:-63.8631}},{t:this.shape_74,p:{x:175.0834,y:-61.5835}},{t:this.shape_73,p:{x:173.2185,y:-67.0776}},{t:this.shape_72,p:{x:170.0913,y:-63.8265}},{t:this.shape_71,p:{x:136.4838,y:-61.6203}},{t:this.shape_70,p:{x:134.619,y:-67.1137}},{t:this.shape_69,p:{x:131.4922,y:-63.8631}},{t:this.shape_68,p:{x:98.0938,y:-61.5835}},{t:this.shape_67,p:{x:96.2036,y:-67.0776}},{t:this.shape_66,p:{x:93.0754,y:-63.8265}},{t:this.shape_65,p:{x:59.5037,y:-61.6203}},{t:this.shape_64,p:{x:57.5886,y:-67.1137}},{t:this.shape_63,p:{x:54.4618,y:-63.8631}},{t:this.shape_62,p:{x:21.1041,y:-61.5835}},{t:this.shape_61,p:{x:19.1887,y:-67.0776}},{t:this.shape_60,p:{x:16.0615,y:-63.8265}},{t:this.shape_59,p:{x:612.47,y:27.7456}},{t:this.shape_58,p:{x:610.5797,y:22.2509}},{t:this.shape_57,p:{x:607.4681,y:25.5024}},{t:this.shape_56,p:{x:612.4823,y:58.5051}},{t:this.shape_55,p:{x:610.5668,y:53.0228}},{t:this.shape_54,p:{x:607.4393,y:56.287}},{t:this.shape_53,p:{x:612.47,y:89.3456}},{t:this.shape_52,p:{x:610.5797,y:83.8509}},{t:this.shape_51,p:{x:607.4681,y:87.1024}},{t:this.shape_50,p:{x:612.32,y:120.0564}},{t:this.shape_49,p:{x:610.4048,y:114.5752}},{t:this.shape_48,p:{x:607.2778,y:117.8387}},{t:this.shape_47,p:{x:612.4647,y:150.9288}},{t:this.shape_46,p:{x:610.5996,y:145.4089}},{t:this.shape_45,p:{x:607.4721,y:148.6855}},{t:this.shape_44,p:{x:612.3148,y:181.6787}},{t:this.shape_43,p:{x:610.3996,y:176.1974}},{t:this.shape_42,p:{x:607.2968,y:179.461}},{t:this.shape_41,p:{x:612.4593,y:212.512}},{t:this.shape_40,p:{x:610.5942,y:206.9795}},{t:this.shape_39,p:{x:607.4668,y:210.2435}},{t:this.shape_38,p:{x:612.3096,y:243.301}},{t:this.shape_37,p:{x:610.4196,y:237.8071}},{t:this.shape_36,p:{x:607.2916,y:241.0581}},{t:this.shape_35,p:{x:612.854,y:-33.9048}},{t:this.shape_34,p:{x:610.9889,y:-39.4374}},{t:this.shape_33,p:{x:607.8615,y:-36.1733}},{t:this.shape_32,p:{x:612.3307,y:-3.1219}},{t:this.shape_31,p:{x:610.4156,y:-8.603}},{t:this.shape_30,p:{x:607.2888,y:-5.3395}},{t:this.shape_29,p:{x:9.87,y:-2.4544}},{t:this.shape_28,p:{x:7.9796,y:-7.9491}},{t:this.shape_27,p:{x:4.8681,y:-4.6976}},{t:this.shape_26,p:{x:9.8823,y:28.4551}},{t:this.shape_25,p:{x:7.9668,y:22.9728}},{t:this.shape_24,p:{x:4.8393,y:26.237}},{t:this.shape_23,p:{x:9.87,y:59.3956}},{t:this.shape_22,p:{x:7.9796,y:53.9009}},{t:this.shape_21,p:{x:4.8681,y:57.1524}},{t:this.shape_20,p:{x:9.7795,y:90.1988}},{t:this.shape_19,p:{x:7.8642,y:84.7173}},{t:this.shape_18,p:{x:4.7372,y:87.981}},{t:this.shape_17,p:{x:9.8646,y:121.1788}},{t:this.shape_16,p:{x:7.9995,y:115.6589}},{t:this.shape_15,p:{x:4.8721,y:118.9355}},{t:this.shape_14,p:{x:9.7743,y:152.0241}},{t:this.shape_13,p:{x:7.859,y:146.5426}},{t:this.shape_12,p:{x:4.7561,y:149.8063}},{t:this.shape_11,p:{x:9.8593,y:182.962}},{t:this.shape_10,p:{x:7.9942,y:177.4295}},{t:this.shape_9,p:{x:4.8668,y:180.6935}},{t:this.shape_8,p:{x:9.769,y:213.7993}},{t:this.shape_7,p:{x:7.879,y:208.3053}},{t:this.shape_6,p:{x:4.7509,y:211.5564}},{t:this.shape_5,p:{x:9.854,y:244.9452}},{t:this.shape_4,p:{x:7.9889,y:239.4126}},{t:this.shape_3,p:{x:4.8615,y:242.6767}},{t:this.shape_2,p:{x:9.82,y:-33.3936}},{t:this.shape_1,p:{x:7.9048,y:-38.8749}},{t:this.shape,p:{x:4.7778,y:-35.6113}}]},14).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.2,-69.2,618.1999999999999,345.5);


(lib.light2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAAQACgLAHgKIAMALQgHAFgFAJQgFAGgDAMQgEgLADgLg");
	this.shape.setTransform(603.0893,5.337,1.0082,1.0082);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQAKgDANADQgJADgKAGQgGAEgJAJg");
	this.shape_1.setTransform(606.2168,2.0728,1.0082,1.0082);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAXAAAdQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_2.setTransform(608.1323,7.5551,1.0082,1.0082);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKAAQADgLAHgKIAMAKQgIAHgEAHQgGALgCAIQgEgKACgMg");
	this.shape_3.setTransform(600.2126,266.0223,1.008,1.008);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDAKADQgLADgIAGQgKAHgFAHg");
	this.shape_4.setTransform(603.3237,262.7714,1.008,1.008);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_5.setTransform(605.2138,268.2652,1.008,1.008);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgHAGgFAIQgEAHgEAMQgEgKADgMg");
	this.shape_6.setTransform(520.4354,266.0223,1.008,1.008);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXABQAMgIALgDQANgDAKADQgKADgJAGQgJAGgFAIg");
	this.shape_7.setTransform(523.5625,262.7714,1.008,1.008);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_8.setTransform(525.4777,268.2652,1.008,1.008);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKAAQADgLAHgKIAMAKQgIAHgEAHQgGALgCAIQgEgKACgMg");
	this.shape_9.setTransform(440.69,266.0223,1.008,1.008);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDAKADQgLADgIAGQgKAHgFAHg");
	this.shape_10.setTransform(443.8012,262.7714,1.008,1.008);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_11.setTransform(445.6913,268.2652,1.008,1.008);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgHAGgFAIQgEAHgEAMQgEgKADgMg");
	this.shape_12.setTransform(360.9129,266.0223,1.008,1.008);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWABQAMgIAKgDQANgDAKADQgLADgIAGQgIAGgHAIg");
	this.shape_13.setTransform(364.0399,262.7714,1.008,1.008);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_14.setTransform(365.9552,268.2652,1.008,1.008);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKAAQADgMAHgJIAMAKQgIAHgEAHQgGALgCAIQgEgKACgMg");
	this.shape_15.setTransform(281.1674,266.0223,1.008,1.008);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgXABQALgIAMgDQAMgDALADQgLADgIAGIgPAOg");
	this.shape_16.setTransform(284.3038,262.7714,1.008,1.008);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_17.setTransform(286.1687,268.2652,1.008,1.008);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJAAQACgJAHgMIAMAKQgHAGgFAIQgEAHgEAMQgEgKADgMg");
	this.shape_18.setTransform(201.3903,266.0223,1.008,1.008);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgWABQALgIALgDQANgDALADQgLADgJAGQgJAGgFAIg");
	this.shape_19.setTransform(204.5174,262.7714,1.008,1.008);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_20.setTransform(206.4326,268.2652,1.008,1.008);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgIAHgEAHQgGALgCAIQgEgKADgMg");
	this.shape_21.setTransform(121.6543,266.0223,1.008,1.008);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDALADQgLADgJAGQgHAFgIAJg");
	this.shape_22.setTransform(124.7813,262.7714,1.008,1.008);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_23.setTransform(126.6462,268.2652,1.008,1.008);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJAAQACgJAHgMIAMAKQgHAGgFAIQgEAHgEAMQgEgKADgMg");
	this.shape_24.setTransform(41.8678,266.0223,1.008,1.008);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgXABQAMgIALgDQANgDAKADQgKADgJAGQgJAGgFAIg");
	this.shape_25.setTransform(44.9948,262.7714,1.008,1.008);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_26.setTransform(46.9101,268.2652,1.008,1.008);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgKAAQADgLAHgKIALAKQgIAJgDAGQgFAIgEAKQgCgMABgKg");
	this.shape_27.setTransform(601.0288,201.6868,1.0081,1.0082);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDAKADQgLADgIAHQgJAFgGAHg");
	this.shape_28.setTransform(604.1572,198.4355,1.0081,1.0082);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_29.setTransform(606.0474,203.93,1.0081,1.0082);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgKAAQACgKAIgLIALAKQgHAHgEAIQgFAHgEALQgCgNABgJg");
	this.shape_30.setTransform(601.6841,136.2318,1.0081,1.0082);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgXABQAMgJALgCQAKgDAOADQgKADgKAGQgIAFgGAIg");
	this.shape_31.setTransform(604.7873,132.9679,1.0081,1.0082);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_32.setTransform(606.7027,138.4498,1.0081,1.0082);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgJAAQACgKAHgLIAMALQgHAGgFAHQgFAIgDALQgEgLADgLg");
	this.shape_33.setTransform(602.3152,70.7516,1.0081,1.0082);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgWABQAMgJAKgCQALgDAMADQgJADgKAGQgGAEgJAJg");
	this.shape_34.setTransform(605.4426,67.4877,1.0081,1.0082);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_35.setTransform(607.358,72.9696,1.0081,1.0082);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgKABQACgKAIgMIALAKQgIAJgDAFQgGAJgDAKQgCgMABgJg");
	this.shape_36.setTransform(2.4499,234.4269,1.0081,1.0082);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgWABQAIgHAOgEQAMgDALADQgJADgKAGQgHAFgIAIg");
	this.shape_37.setTransform(5.5783,231.163,1.0081,1.0082);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_38.setTransform(7.4685,236.6953,1.0081,1.0082);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgKAAQACgIAIgNIALALQgHAGgEAHQgFAIgEALQgDgNACgJg");
	this.shape_39.setTransform(3.0932,168.9467,1.0081,1.0082);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgXABQAKgIANgDQAMgDAMADQgKADgKAGQgHAEgHAJg");
	this.shape_40.setTransform(6.2083,165.6828,1.0081,1.0082);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_41.setTransform(8.1238,171.2151,1.0081,1.0082);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgJAAQACgJAHgMIAMAKQgHAGgFAIQgFAHgDAMQgEgKADgMg");
	this.shape_42.setTransform(3.7363,103.4917,1.0081,1.0082);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgXABQALgIAMgDQANgDALADQgLAEgJAFQgIAFgGAIg");
	this.shape_43.setTransform(6.8636,100.2152,1.0081,1.0082);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_44.setTransform(8.7791,105.7349,1.0081,1.0082);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgHAGgFAIQgEAHgEAMQgEgKADgMg");
	this.shape_45.setTransform(4.3916,38.0115,1.0081,1.0082);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgWABQAMgIAKgDQANgDAKADQgLAEgIAFQgJAGgGAIg");
	this.shape_46.setTransform(7.5189,34.7602,1.0081,1.0082);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_47.setTransform(9.4344,40.2547,1.0081,1.0082);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAXAAAdQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_48.setTransform(608.1323,7.5551,1.0082,1.0082);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_49.setTransform(605.303,268.3165,1.0081,1.0081);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_50.setTransform(525.5633,268.3165,1.0081,1.0081);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_51.setTransform(445.7732,268.3165,1.0081,1.0081);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_52.setTransform(366.0335,268.3165,1.0081,1.0081);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_53.setTransform(286.2434,268.3165,1.0081,1.0081);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_54.setTransform(206.5037,268.3165,1.0081,1.0081);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_55.setTransform(126.7136,268.3165,1.0081,1.0081);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_56.setTransform(46.9739,268.3165,1.0081,1.0081);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_57.setTransform(606.1069,203.9784,1.0082,1.0082);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_58.setTransform(606.7622,138.4952,1.0082,1.0082);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_59.setTransform(607.4175,73.012,1.0082,1.0082);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_60.setTransform(7.5098,236.7452,1.0082,1.0082);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_61.setTransform(8.1652,171.262,1.0082,1.0082);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#66FFFF").s().p("Ag0A1QgXgWAAgfQAAgeAXgWQAWgXAeAAQAfAAAWAXQAXAWAAAeQAAAfgXAWQgWAXgfAAQgeAAgWgXg");
	this.shape_62.setTransform(8.825,105.775);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_63.setTransform(9.4758,40.2956,1.0082,1.0082);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46,p:{scaleX:1.0081,x:7.5189,y:34.7602}},{t:this.shape_45,p:{scaleX:1.0081,x:4.3916,y:38.0115}},{t:this.shape_44},{t:this.shape_43,p:{scaleX:1.0081,x:6.8636,y:100.2152}},{t:this.shape_42,p:{scaleX:1.0081,x:3.7363,y:103.4917}},{t:this.shape_41},{t:this.shape_40,p:{scaleX:1.0081,x:6.2083,y:165.6828}},{t:this.shape_39,p:{scaleX:1.0081,x:3.0932,y:168.9467}},{t:this.shape_38},{t:this.shape_37,p:{scaleX:1.0081,x:5.5783,y:231.163}},{t:this.shape_36,p:{scaleX:1.0081,x:2.4499,y:234.4269}},{t:this.shape_35},{t:this.shape_34,p:{scaleX:1.0081,x:605.4426,y:67.4877}},{t:this.shape_33,p:{scaleX:1.0081,x:602.3152,y:70.7516}},{t:this.shape_32},{t:this.shape_31,p:{scaleX:1.0081,x:604.7873,y:132.9679}},{t:this.shape_30,p:{scaleX:1.0081,x:601.6841,y:136.2318}},{t:this.shape_29},{t:this.shape_28,p:{scaleX:1.0081,x:604.1572,y:198.4355}},{t:this.shape_27,p:{scaleX:1.0081,x:601.0288,y:201.6868}},{t:this.shape_26},{t:this.shape_25,p:{scaleX:1.008,scaleY:1.008,x:44.9948,y:262.7714}},{t:this.shape_24,p:{scaleX:1.008,scaleY:1.008,x:41.8678,y:266.0223}},{t:this.shape_23},{t:this.shape_22,p:{scaleX:1.008,scaleY:1.008,x:124.7813,y:262.7714}},{t:this.shape_21,p:{scaleX:1.008,scaleY:1.008,x:121.6543,y:266.0223}},{t:this.shape_20},{t:this.shape_19,p:{scaleX:1.008,scaleY:1.008,x:204.5174,y:262.7714}},{t:this.shape_18,p:{scaleX:1.008,scaleY:1.008,x:201.3903,y:266.0223}},{t:this.shape_17},{t:this.shape_16,p:{scaleX:1.008,scaleY:1.008,x:284.3038,y:262.7714}},{t:this.shape_15,p:{scaleX:1.008,scaleY:1.008,x:281.1674,y:266.0223}},{t:this.shape_14},{t:this.shape_13,p:{scaleX:1.008,scaleY:1.008,x:364.0399,y:262.7714}},{t:this.shape_12,p:{scaleX:1.008,scaleY:1.008,x:360.9129,y:266.0223}},{t:this.shape_11},{t:this.shape_10,p:{scaleX:1.008,scaleY:1.008,x:443.8012,y:262.7714}},{t:this.shape_9,p:{scaleX:1.008,scaleY:1.008,x:440.69,y:266.0223}},{t:this.shape_8},{t:this.shape_7,p:{scaleX:1.008,scaleY:1.008,x:523.5625,y:262.7714}},{t:this.shape_6,p:{scaleX:1.008,scaleY:1.008,x:520.4354,y:266.0223}},{t:this.shape_5},{t:this.shape_4,p:{scaleX:1.008,scaleY:1.008,x:603.3237,y:262.7714}},{t:this.shape_3,p:{scaleX:1.008,scaleY:1.008,x:600.2126,y:266.0223}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_63},{t:this.shape_46,p:{scaleX:1.0082,x:7.5603,y:34.8009}},{t:this.shape_45,p:{scaleX:1.0082,x:4.4328,y:38.0524}},{t:this.shape_62},{t:this.shape_43,p:{scaleX:1.0082,x:6.9049,y:100.2589}},{t:this.shape_42,p:{scaleX:1.0082,x:3.7775,y:103.5355}},{t:this.shape_61},{t:this.shape_40,p:{scaleX:1.0082,x:6.2496,y:165.7295}},{t:this.shape_39,p:{scaleX:1.0082,x:3.1344,y:168.9935}},{t:this.shape_60},{t:this.shape_37,p:{scaleX:1.0082,x:5.6195,y:231.2126}},{t:this.shape_36,p:{scaleX:1.0082,x:2.4911,y:234.4767}},{t:this.shape_59},{t:this.shape_34,p:{scaleX:1.0082,x:605.502,y:67.5299}},{t:this.shape_33,p:{scaleX:1.0082,x:602.3746,y:70.7939}},{t:this.shape_58},{t:this.shape_31,p:{scaleX:1.0082,x:604.8467,y:133.0131}},{t:this.shape_30,p:{scaleX:1.0082,x:601.7434,y:136.2771}},{t:this.shape_57},{t:this.shape_28,p:{scaleX:1.0082,x:604.2166,y:198.4837}},{t:this.shape_27,p:{scaleX:1.0082,x:601.0881,y:201.7351}},{t:this.shape_56},{t:this.shape_25,p:{scaleX:1.0081,scaleY:1.0081,x:45.0585,y:262.8224}},{t:this.shape_24,p:{scaleX:1.0081,scaleY:1.0081,x:41.9314,y:266.0735}},{t:this.shape_55},{t:this.shape_22,p:{scaleX:1.0081,scaleY:1.0081,x:124.8486,y:262.8224}},{t:this.shape_21,p:{scaleX:1.0081,scaleY:1.0081,x:121.7215,y:266.0735}},{t:this.shape_54},{t:this.shape_19,p:{scaleX:1.0081,scaleY:1.0081,x:204.5883,y:262.8224}},{t:this.shape_18,p:{scaleX:1.0081,scaleY:1.0081,x:201.4612,y:266.0735}},{t:this.shape_53},{t:this.shape_16,p:{scaleX:1.0081,scaleY:1.0081,x:284.3784,y:262.8224}},{t:this.shape_15,p:{scaleX:1.0081,scaleY:1.0081,x:281.2419,y:266.0735}},{t:this.shape_52},{t:this.shape_13,p:{scaleX:1.0081,scaleY:1.0081,x:364.1181,y:262.8224}},{t:this.shape_12,p:{scaleX:1.0081,scaleY:1.0081,x:360.991,y:266.0735}},{t:this.shape_51},{t:this.shape_10,p:{scaleX:1.0081,scaleY:1.0081,x:443.883,y:262.8224}},{t:this.shape_9,p:{scaleX:1.0081,scaleY:1.0081,x:440.7717,y:266.0735}},{t:this.shape_50},{t:this.shape_7,p:{scaleX:1.0081,scaleY:1.0081,x:523.6479,y:262.8224}},{t:this.shape_6,p:{scaleX:1.0081,scaleY:1.0081,x:520.5208,y:266.0735}},{t:this.shape_49},{t:this.shape_4,p:{scaleX:1.0081,scaleY:1.0081,x:603.4128,y:262.8224}},{t:this.shape_3,p:{scaleX:1.0081,scaleY:1.0081,x:600.3015,y:266.0735}},{t:this.shape_48},{t:this.shape_1},{t:this.shape}]},14).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0,615.8000000000001,275.9);


(lib.light1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_28 = function() {
		var self = this;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAAQACgJAIgMIALAKQgHAGgEAIQgFAHgEAMQgDgNACgJg");
	this.shape.setTransform(560.8028,301.8235,1.0081,1.0081);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWABQAMgIAKgDQANgDALADQgLADgJAGQgJAGgGAIg");
	this.shape_1.setTransform(563.9178,298.5724,1.0081,1.0081);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_2.setTransform(565.8331,304.0665,1.0081,1.0081);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgIAHgEAHQgGALgCAIQgEgKADgMg");
	this.shape_3.setTransform(481.0509,301.8235,1.0081,1.0081);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWABQAMgIAKgDQANgDAKADQgKADgJAGQgHAFgIAJg");
	this.shape_4.setTransform(484.1781,298.5724,1.0081,1.0081);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_5.setTransform(486.043,304.0665,1.0081,1.0081);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKAAQACgJAIgMIALAKQgHAGgEAIQgFAJgEAKQgCgMABgKg");
	this.shape_6.setTransform(401.285,301.8235,1.0081,1.0081);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXABQANgIAKgDQANgDALADQgMADgIAGQgKAHgEAHg");
	this.shape_7.setTransform(404.388,298.5724,1.0081,1.0081);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_8.setTransform(406.3033,304.0665,1.0081,1.0081);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgHAGgFAIQgGALgCAIQgEgKADgMg");
	this.shape_9.setTransform(321.5211,301.8235,1.0081,1.0081);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXABQANgIAKgDQANgDALADQgKADgKAGQgIAFgHAJg");
	this.shape_10.setTransform(324.6483,298.5724,1.0081,1.0081);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_11.setTransform(326.5132,304.0665,1.0081,1.0081);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKAAQACgJAIgMIALAKQgIAJgDAFQgFAJgEAKQgCgMABgKg");
	this.shape_12.setTransform(241.7552,301.8235,1.0081,1.0081);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDAKADQgLADgIAGQgKAHgFAHg");
	this.shape_13.setTransform(244.8834,298.5724,1.0081,1.0081);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_14.setTransform(246.7735,304.0665,1.0081,1.0081);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgHAGgFAIQgGALgCAIQgEgKADgMg");
	this.shape_15.setTransform(161.9913,301.8235,1.0081,1.0081);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgXABQAMgIALgDQANgDAKADQgKADgJAGQgIAGgHAIg");
	this.shape_16.setTransform(165.1185,298.5724,1.0081,1.0081);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_17.setTransform(166.9834,304.0665,1.0081,1.0081);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgKAAQADgLAHgKIALAKQgIAJgDAFQgFAJgEAKQgCgMABgKg");
	this.shape_18.setTransform(82.2254,301.8235,1.0081,1.0081);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDAKADQgLADgIAGQgKAHgFAHg");
	this.shape_19.setTransform(85.3536,298.5724,1.0081,1.0081);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_20.setTransform(87.2438,304.0665,1.0081,1.0081);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgHAGgFAIQgEAHgEAMQgEgKADgMg");
	this.shape_21.setTransform(2.4615,301.8235,1.0081,1.0081);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgWABQAMgIAKgDQANgDAKADQgLADgIAGQgJAGgGAIg");
	this.shape_22.setTransform(5.5887,298.5724,1.0081,1.0081);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_23.setTransform(7.5041,304.0665,1.0081,1.0081);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJABQACgLAHgLIAMAKQgHAGgFAIQgFAIgDALQgEgKADgLg");
	this.shape_24.setTransform(601.1615,270.2267,1.0082,1.0082);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQAMgDALADQgJADgKAGQgGAEgJAJg");
	this.shape_25.setTransform(604.2889,266.9626,1.0082,1.0082);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_26.setTransform(606.154,272.4952,1.0082,1.0082);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgJAAQACgLAHgKIAMALQgIAGgEAHQgGAKgCAJQgEgKADgMg");
	this.shape_27.setTransform(601.8168,204.7435,1.0082,1.0082);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgXABQAKgIANgDQAMgDALADQgJACgKAHQgFADgKAKg");
	this.shape_28.setTransform(604.9442,201.4795,1.0082,1.0082);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	this.shape_29.setTransform(606.8093,207.012,1.0082,1.0082);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgIAHgEAHQgGAKgCAJQgEgKADgMg");
	this.shape_30.setTransform(602.4721,139.2855,1.0082,1.0082);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgXABQAJgIAOgDQANgDALADQgLADgJAGQgGAEgJAJg");
	this.shape_31.setTransform(605.5996,136.0089,1.0082,1.0082);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_32.setTransform(607.4647,141.5288,1.0082,1.0082);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgKAAQADgLAHgKIAMAKQgIAHgEAHQgGALgCAIQgEgKACgMg");
	this.shape_33.setTransform(603.1181,73.8024,1.0082,1.0082);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDAKADQgLAEgIAFQgKAHgFAHg");
	this.shape_34.setTransform(606.2297,70.5509,1.0082,1.0082);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_35.setTransform(608.12,76.0456,1.0082,1.0082);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgHAGgFAJQgGAJgCAJQgEgKADgMg");
	this.shape_36.setTransform(3.2198,237.4851,1.0082,1.0082);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgWABQALgJALgCQANgDAKADQgKADgJAHQgIAEgHAIg");
	this.shape_37.setTransform(6.3472,234.2337,1.0082,1.0082);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_38.setTransform(8.2123,239.7284,1.0082,1.0082);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgJAJgDAGQgGAJgCAJQgEgLADgLg");
	this.shape_39.setTransform(3.8751,172.0271,1.0082,1.0082);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgXABQALgIAMgDQAKgDANADQgKADgJAGQgIAFgHAIg");
	this.shape_40.setTransform(7.0025,168.7631,1.0082,1.0082);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_41.setTransform(8.8676,174.2452,1.0082,1.0082);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgKAAQADgLAHgKIAMALQgIAHgEAGQgGAKgCAJQgEgKACgMg");
	this.shape_42.setTransform(4.521,106.544,1.0082,1.0082);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQAKgDANADQgJADgKAGQgHAFgIAIg");
	this.shape_43.setTransform(7.6326,103.2799,1.0082,1.0082);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_44.setTransform(9.5229,108.762,1.0082,1.0082);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgKAAQACgKAIgLIALALQgIAIgDAGQgGAJgCAJQgEgKACgMg");
	this.shape_45.setTransform(5.1511,41.0608,1.0082,1.0082);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgWABQAIgHAOgEQAKgDANADQgJADgKAGQgHAFgIAIg");
	this.shape_46.setTransform(8.2879,37.7967,1.0082,1.0082);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#66FFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_47.setTransform(10.1782,43.2788,1.0082,1.0082);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_48.setTransform(565.8331,304.0665,1.0081,1.0081);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_49.setTransform(486.043,304.0665,1.0081,1.0081);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_50.setTransform(406.3033,304.0665,1.0081,1.0081);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_51.setTransform(326.5132,304.0665,1.0081,1.0081);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_52.setTransform(246.7735,304.0665,1.0081,1.0081);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_53.setTransform(166.9834,304.0665,1.0081,1.0081);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_54.setTransform(87.2438,304.0665,1.0081,1.0081);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_55.setTransform(7.5041,304.0665,1.0081,1.0081);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_56.setTransform(606.154,272.4952,1.0082,1.0082);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgdAAgXgWg");
	this.shape_57.setTransform(606.8093,207.012,1.0082,1.0082);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_58.setTransform(607.4647,141.5288,1.0082,1.0082);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_59.setTransform(608.12,76.0456,1.0082,1.0082);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_60.setTransform(8.2123,239.7284,1.0082,1.0082);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_61.setTransform(8.8676,174.2452,1.0082,1.0082);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_62.setTransform(9.5229,108.762,1.0082,1.0082);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_63.setTransform(10.1782,43.2788,1.0082,1.0082);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_63},{t:this.shape_46},{t:this.shape_45},{t:this.shape_62},{t:this.shape_43},{t:this.shape_42},{t:this.shape_61},{t:this.shape_40},{t:this.shape_39},{t:this.shape_60},{t:this.shape_37},{t:this.shape_36},{t:this.shape_59},{t:this.shape_34},{t:this.shape_33},{t:this.shape_58},{t:this.shape_31},{t:this.shape_30},{t:this.shape_57},{t:this.shape_28},{t:this.shape_27},{t:this.shape_56},{t:this.shape_25},{t:this.shape_24},{t:this.shape_55},{t:this.shape_22},{t:this.shape_21},{t:this.shape_54},{t:this.shape_19},{t:this.shape_18},{t:this.shape_53},{t:this.shape_16},{t:this.shape_15},{t:this.shape_52},{t:this.shape_13},{t:this.shape_12},{t:this.shape_51},{t:this.shape_10},{t:this.shape_9},{t:this.shape_50},{t:this.shape_7},{t:this.shape_6},{t:this.shape_49},{t:this.shape_4},{t:this.shape_3},{t:this.shape_48},{t:this.shape_1},{t:this.shape}]},14).to({state:[{t:this.shape_63},{t:this.shape_46},{t:this.shape_45},{t:this.shape_62},{t:this.shape_43},{t:this.shape_42},{t:this.shape_61},{t:this.shape_40},{t:this.shape_39},{t:this.shape_60},{t:this.shape_37},{t:this.shape_36},{t:this.shape_59},{t:this.shape_34},{t:this.shape_33},{t:this.shape_58},{t:this.shape_31},{t:this.shape_30},{t:this.shape_57},{t:this.shape_28},{t:this.shape_27},{t:this.shape_56},{t:this.shape_25},{t:this.shape_24},{t:this.shape_55},{t:this.shape_22},{t:this.shape_21},{t:this.shape_54},{t:this.shape_19},{t:this.shape_18},{t:this.shape_53},{t:this.shape_16},{t:this.shape_15},{t:this.shape_52},{t:this.shape_13},{t:this.shape_12},{t:this.shape_51},{t:this.shape_10},{t:this.shape_9},{t:this.shape_50},{t:this.shape_7},{t:this.shape_6},{t:this.shape_49},{t:this.shape_4},{t:this.shape_3},{t:this.shape_48},{t:this.shape_1},{t:this.shape}]},14).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,35.7,615.8000000000001,275.90000000000003);


(lib.bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F6FFCE","#FFFFFF","#FFFFFC","#F8FFD2"],[0,0.192,0.8,1],0,-132,0,132.1).s().p("EgjJAUpMAAAgpRMBGTAAAMAAAApRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-225,-132.1,450,264.2), null);


(lib.wheel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.whell();
	this.instance.setTransform(171.2,175.5,1,1,0,0,0,171.2,175.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:1.5126,x:171.15},0).wait(1).to({rotation:3.0252,x:171.2,y:175.55},0).wait(1).to({rotation:4.5378,x:171.15},0).wait(1).to({rotation:6.0504,x:171.2,y:175.5},0).wait(1).to({rotation:7.563,x:171.15,y:175.55},0).wait(1).to({rotation:9.0756},0).wait(1).to({rotation:10.5882,x:171.2,y:175.5},0).wait(1).to({rotation:12.1008,x:171.15,y:175.55},0).wait(1).to({rotation:13.6134,x:171.2,y:175.5},0).wait(1).to({rotation:15.1261,x:171.15},0).wait(1).to({rotation:16.6387,x:171.2},0).wait(1).to({rotation:18.1513,y:175.55},0).wait(1).to({rotation:19.6639,x:171.15,y:175.5},0).wait(1).to({rotation:21.1765,x:171.2,y:175.55},0).wait(1).to({rotation:22.6891,x:171.15},0).wait(1).to({rotation:24.2017},0).wait(1).to({rotation:25.7143},0).wait(1).to({rotation:27.2269,x:171.2,y:175.5},0).wait(1).to({rotation:28.7395,x:171.15,y:175.55},0).wait(1).to({rotation:30.2521,x:171.2},0).wait(1).to({rotation:31.7647,x:171.15,y:175.5},0).wait(1).to({rotation:33.2773,x:171.2,y:175.55},0).wait(1).to({rotation:34.7899,x:171.15,y:175.6},0).wait(1).to({rotation:36.3025,y:175.55},0).wait(1).to({rotation:37.8151},0).wait(1).to({rotation:39.3277,x:171.2},0).wait(1).to({rotation:40.8403,x:171.15},0).wait(1).to({rotation:42.3529,y:175.6},0).wait(1).to({rotation:43.8655,x:171.2},0).wait(1).to({rotation:45.3782,x:171.15},0).wait(1).to({rotation:46.8908,x:171.2},0).wait(1).to({rotation:48.4034,x:171.15,y:175.55},0).wait(1).to({rotation:49.916,x:171.2},0).wait(1).to({rotation:51.4286},0).wait(1).to({rotation:52.9412,x:171.15},0).wait(1).to({rotation:54.4538,y:175.6},0).wait(1).to({rotation:55.9664,x:171.1,y:175.5},0).wait(1).to({rotation:57.479,x:171.15,y:175.55},0).wait(1).to({rotation:58.9916},0).wait(1).to({rotation:60.5042},0).wait(1).to({rotation:62.0168,y:175.6},0).wait(1).to({rotation:63.5294,y:175.55},0).wait(1).to({rotation:65.042},0).wait(1).to({rotation:66.5546,y:175.6},0).wait(1).to({rotation:68.0672,y:175.55},0).wait(1).to({rotation:69.5798,x:171.2,y:175.6},0).wait(1).to({rotation:71.0924,x:171.1,y:175.55},0).wait(1).to({rotation:72.605,x:171.2},0).wait(1).to({rotation:74.1176,x:171.15,y:175.6},0).wait(1).to({rotation:75.6303,y:175.55},0).wait(1).to({rotation:77.1429},0).wait(1).to({rotation:78.6555,x:171.2},0).wait(1).to({rotation:80.1681,x:171.15},0).wait(1).to({rotation:81.6807,x:171.1,y:175.6},0).wait(1).to({rotation:83.1933,x:171.15},0).wait(1).to({rotation:84.7059,y:175.55},0).wait(1).to({rotation:86.2185},0).wait(1).to({rotation:87.7311},0).wait(1).to({rotation:89.2437,x:171.1,y:175.5},0).wait(1).to({rotation:90.7563,y:175.55},0).wait(1).to({rotation:92.2689,y:175.5},0).wait(1).to({rotation:93.7815,x:171.15,y:175.55},0).wait(1).to({rotation:95.2941,x:171.1,y:175.5},0).wait(1).to({rotation:96.8067,y:175.55},0).wait(1).to({rotation:98.3193,x:171.15,y:175.5},0).wait(1).to({rotation:99.8319,x:171.1,y:175.55},0).wait(1).to({rotation:101.3445},0).wait(1).to({rotation:102.8571,y:175.5},0).wait(1).to({rotation:104.3697,y:175.55},0).wait(1).to({rotation:105.8824,y:175.5},0).wait(1).to({rotation:107.395},0).wait(1).to({rotation:108.9076,y:175.55},0).wait(1).to({rotation:110.4202,y:175.5},0).wait(1).to({rotation:111.9328},0).wait(1).to({rotation:113.4454,x:171.15},0).wait(1).to({rotation:114.958,x:171.1},0).wait(1).to({rotation:116.4706,y:175.55},0).wait(1).to({rotation:117.9832,x:171.05},0).wait(1).to({rotation:119.4958,x:171.1,y:175.5},0).wait(1).to({rotation:121.0084,y:175.55},0).wait(1).to({rotation:122.521,x:171.05,y:175.5},0).wait(1).to({rotation:124.0336,x:171.1},0).wait(1).to({rotation:125.5462,x:171.05},0).wait(1).to({rotation:127.0588,x:171.1},0).wait(1).to({rotation:128.5714,y:175.55},0).wait(1).to({rotation:130.084},0).wait(1).to({rotation:131.5966},0).wait(1).to({rotation:133.1092,y:175.5},0).wait(1).to({rotation:134.6218},0).wait(1).to({rotation:136.1345},0).wait(1).to({rotation:137.6471},0).wait(1).to({rotation:139.1597},0).wait(1).to({rotation:140.6723},0).wait(1).to({rotation:142.1849},0).wait(1).to({rotation:143.6975},0).wait(1).to({rotation:145.2101,x:171.05},0).wait(1).to({rotation:146.7227,y:175.55},0).wait(1).to({rotation:148.2353,x:171.1,y:175.5},0).wait(1).to({rotation:149.7479},0).wait(1).to({rotation:151.2605,y:175.45},0).wait(1).to({rotation:152.7731,x:171.05,y:175.5},0).wait(1).to({rotation:154.2857,y:175.55},0).wait(1).to({rotation:155.7983,x:171.1},0).wait(1).to({rotation:157.3109},0).wait(1).to({rotation:158.8235,x:171.05,y:175.5},0).wait(1).to({rotation:160.3361,x:171.1},0).wait(1).to({rotation:161.8487},0).wait(1).to({rotation:163.3613,x:171.05,y:175.45},0).wait(1).to({rotation:164.8739,x:171.1,y:175.5},0).wait(1).to({rotation:166.3866,x:171.05},0).wait(1).to({rotation:167.8992},0).wait(1).to({rotation:169.4118},0).wait(1).to({rotation:170.9244},0).wait(1).to({rotation:172.437,x:171.1},0).wait(1).to({rotation:173.9496,x:171.05},0).wait(1).to({rotation:175.4622},0).wait(1).to({rotation:176.9748,x:171.1},0).wait(1).to({rotation:178.4874,x:171.05,y:175.45},0).wait(1).to({rotation:180,x:171.1,y:175.5},0).wait(1).to({rotation:181.5126},0).wait(1).to({rotation:183.0252,x:171.05,y:175.45},0).wait(1).to({rotation:184.5378,x:171.1},0).wait(1).to({rotation:186.0504,x:171.05,y:175.5},0).wait(1).to({rotation:187.563,x:171.1,y:175.45},0).wait(1).to({rotation:189.0756},0).wait(1).to({rotation:190.5882,x:171.05,y:175.5},0).wait(1).to({rotation:192.1008,x:171.1,y:175.45},0).wait(1).to({rotation:193.6134,x:171.05,y:175.5},0).wait(1).to({rotation:195.1261,x:171.1},0).wait(1).to({rotation:196.6387,x:171.05},0).wait(1).to({rotation:198.1513,y:175.45},0).wait(1).to({rotation:199.6639,x:171.1,y:175.5},0).wait(1).to({rotation:201.1765,x:171.05,y:175.45},0).wait(1).to({rotation:202.6891,x:171.1},0).wait(1).to({rotation:204.2017},0).wait(1).to({rotation:205.7143},0).wait(1).to({rotation:207.2269,x:171.05,y:175.5},0).wait(1).to({rotation:208.7395,x:171.1,y:175.45},0).wait(1).to({rotation:210.2521,x:171.05},0).wait(1).to({rotation:211.7647,x:171.1,y:175.5},0).wait(1).to({rotation:213.2773,x:171.05,y:175.45},0).wait(1).to({rotation:214.7899,x:171.1,y:175.4},0).wait(1).to({rotation:216.3025,y:175.45},0).wait(1).to({rotation:217.8151},0).wait(1).to({rotation:219.3277,x:171.05},0).wait(1).to({rotation:220.8403,x:171.1},0).wait(1).to({rotation:222.3529,y:175.4},0).wait(1).to({rotation:223.8655,x:171.05},0).wait(1).to({rotation:225.3782,x:171.1},0).wait(1).to({rotation:226.8908,x:171.05},0).wait(1).to({rotation:228.4034,x:171.1,y:175.45},0).wait(1).to({rotation:229.916,x:171.05},0).wait(1).to({rotation:231.4286},0).wait(1).to({rotation:232.9412,x:171.1},0).wait(1).to({rotation:234.4538,y:175.4},0).wait(1).to({rotation:235.9664,x:171.15,y:175.5},0).wait(1).to({rotation:237.479,x:171.1,y:175.45},0).wait(1).to({rotation:238.9916},0).wait(1).to({rotation:240.5042},0).wait(1).to({rotation:242.0168,y:175.4},0).wait(1).to({rotation:243.5294,y:175.45},0).wait(1).to({rotation:245.042},0).wait(1).to({rotation:246.5546,y:175.4},0).wait(1).to({rotation:248.0672,y:175.45},0).wait(1).to({rotation:249.5798,x:171.05,y:175.4},0).wait(1).to({rotation:251.0924,x:171.15,y:175.45},0).wait(1).to({rotation:252.605,x:171.05},0).wait(1).to({rotation:254.1176,x:171.1,y:175.4},0).wait(1).to({rotation:255.6303,y:175.45},0).wait(1).to({rotation:257.1429},0).wait(1).to({rotation:258.6555,x:171.05},0).wait(1).to({rotation:260.1681,x:171.1},0).wait(1).to({rotation:261.6807,x:171.15,y:175.4},0).wait(1).to({rotation:263.1933,x:171.1},0).wait(1).to({rotation:264.7059,y:175.45},0).wait(1).to({rotation:266.2185},0).wait(1).to({rotation:267.7311},0).wait(1).to({rotation:269.2437,x:171.2},0).wait(1).to({rotation:270.7563,y:175.4},0).wait(1).to({rotation:272.2689,y:175.45},0).wait(1).to({rotation:273.7815,x:171.15,y:175.4},0).wait(1).to({rotation:275.2941,x:171.2,y:175.45},0).wait(1).to({rotation:276.8067,y:175.4},0).wait(1).to({rotation:278.3193,x:171.15,y:175.45},0).wait(1).to({rotation:279.8319,x:171.2,y:175.4},0).wait(1).to({rotation:281.3445},0).wait(1).to({rotation:282.8571,y:175.45},0).wait(1).to({rotation:284.3697,y:175.4},0).wait(1).to({rotation:285.8824,y:175.45},0).wait(1).to({rotation:287.395},0).wait(1).to({rotation:288.9076,y:175.4},0).wait(1).to({rotation:290.4202,y:175.45},0).wait(1).to({rotation:291.9328},0).wait(1).to({rotation:293.4454,x:171.15},0).wait(1).to({rotation:294.958,x:171.2},0).wait(1).to({rotation:296.4706,y:175.4},0).wait(1).to({rotation:297.9832,x:171.25},0).wait(1).to({rotation:299.4958,x:171.2,y:175.45},0).wait(1).to({rotation:301.0084,y:175.4},0).wait(1).to({rotation:302.521,x:171.25,y:175.45},0).wait(1).to({rotation:304.0336,x:171.2},0).wait(1).to({rotation:305.5462,x:171.25},0).wait(1).to({rotation:307.0588,x:171.2},0).wait(1).to({rotation:308.5714,y:175.4},0).wait(1).to({rotation:310.084},0).wait(1).to({rotation:311.5966},0).wait(1).to({rotation:313.1092,y:175.45},0).wait(1).to({rotation:314.6218},0).wait(1).to({rotation:316.1345},0).wait(1).to({rotation:317.6471},0).wait(1).to({rotation:319.1597},0).wait(1).to({rotation:320.6723},0).wait(1).to({rotation:322.1849},0).wait(1).to({rotation:323.6975},0).wait(1).to({rotation:325.2101,x:171.25},0).wait(1).to({rotation:326.7227,y:175.4},0).wait(1).to({rotation:328.2353,x:171.2,y:175.45},0).wait(1).to({rotation:329.7479},0).wait(1).to({rotation:331.2605,y:175.5},0).wait(1).to({rotation:332.7731,x:171.25,y:175.45},0).wait(1).to({rotation:334.2857,y:175.4},0).wait(1).to({rotation:335.7983,x:171.2},0).wait(1).to({rotation:337.3109},0).wait(1).to({rotation:338.8235,x:171.25,y:175.45},0).wait(1).to({rotation:340.3361,x:171.2},0).wait(1).to({rotation:341.8487},0).wait(1).to({rotation:343.3613,x:171.25,y:175.5},0).wait(1).to({rotation:344.8739,x:171.2,y:175.45},0).wait(1).to({rotation:346.3866,x:171.25},0).wait(1).to({rotation:347.8992},0).wait(1).to({rotation:349.4118},0).wait(1).to({rotation:350.9244},0).wait(1).to({rotation:352.437,x:171.2},0).wait(1).to({rotation:353.9496,x:171.25},0).wait(1).to({rotation:355.4622},0).wait(1).to({rotation:356.9748,x:171.2},0).wait(1).to({rotation:358.4874,x:171.25,y:175.5},0).wait(1).to({rotation:360,x:171.2},0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED3724").s().p("As9A6QgYAAgRgRQgRgRAAgYQAAgXARgRQARgRAYAAIZ7AAQAYAAASARQAQARAAAXQAAAYgQARQgSARgYAAg");
	this.shape.setTransform(171.15,407.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#58595B").s().p("AJKSgMgJKghhMgJJAhhIhdAAMAJ6gk/IBZAAMAJ6Ak/g");
	this.shape_1.setTransform(171.175,292.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(239));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-7.2,365.4,420.2);


(lib.Sy8mbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Symbol_5
	this.instance = new lib._89789();
	this.instance.setTransform(42.6,97.65,1,1,0,0,0,42.6,40.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:42.7,x:42.7,y:95.65},0).wait(1).to({y:93.65},0).wait(1).to({y:91.7},0).wait(1).to({y:89.7},0).wait(1).to({y:87.7},0).wait(1).to({y:85.75},0).wait(1).to({y:83.75},0).wait(1).to({y:81.8},0).wait(1).to({y:79.8},0).wait(1).to({y:77.8},0).wait(1).to({y:75.85},0).wait(1).to({y:73.85},0).wait(1).to({y:71.85},0).wait(1).to({y:69.9},0).wait(1).to({y:67.9},0).wait(1).to({y:65.95},0).wait(1).to({y:63.95},0).wait(1).to({y:61.95},0).wait(1).to({y:60},0).wait(1).to({y:58},0).wait(1).to({y:56},0).wait(1).to({y:54.05},0).wait(1).to({y:52.05},0).wait(1).to({y:50.1},0).wait(1).to({y:48.1},0).wait(1).to({y:46.1},0).wait(1).to({y:44.15},0).wait(1).to({y:42.15},0).wait(1).to({y:40.2},0).wait(1).to({y:42.2},0).wait(1).to({y:44.25},0).wait(1).to({y:46.3},0).wait(1).to({y:48.35},0).wait(1).to({y:50.4},0).wait(1).to({y:52.45},0).wait(1).to({y:54.5},0).wait(1).to({y:56.55},0).wait(1).to({y:58.6},0).wait(1).to({y:60.65},0).wait(1).to({y:62.7},0).wait(1).to({y:64.75},0).wait(1).to({y:66.8},0).wait(1).to({y:68.85},0).wait(1).to({y:70.85},0).wait(1).to({y:72.9},0).wait(1).to({y:74.95},0).wait(1).to({y:77},0).wait(1).to({y:79.05},0).wait(1).to({y:81.1},0).wait(1).to({y:83.15},0).wait(1).to({y:85.2},0).wait(1).to({y:87.25},0).wait(1).to({y:89.3},0).wait(1).to({y:91.35},0).wait(1).to({y:93.4},0).wait(1).to({y:95.45},0).wait(1).to({y:97.5},0).wait(1).to({y:99.55},0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E5F61").s().p("AgaLqIAA3UIA1AAIAAXUg");
	this.shape.setTransform(49.025,74.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(59));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85.4,149.3);


(lib.Sy8mbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib._811();
	this.instance.setTransform(42.6,58.4,1,1,0,0,0,42.6,40.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:42.7,x:42.7,y:59.8},0).wait(1).to({y:61.2},0).wait(1).to({y:62.65},0).wait(1).to({y:64.05},0).wait(1).to({y:65.5},0).wait(1).to({y:66.9},0).wait(1).to({y:68.3},0).wait(1).to({y:69.75},0).wait(1).to({y:71.15},0).wait(1).to({y:72.6},0).wait(1).to({y:74},0).wait(1).to({y:75.4},0).wait(1).to({y:76.85},0).wait(1).to({y:78.25},0).wait(1).to({y:79.7},0).wait(1).to({y:81.1},0).wait(1).to({y:82.55},0).wait(1).to({y:83.95},0).wait(1).to({y:85.35},0).wait(1).to({y:86.8},0).wait(1).to({y:88.2},0).wait(1).to({y:89.65},0).wait(1).to({y:91.05},0).wait(1).to({y:92.45},0).wait(1).to({y:93.9},0).wait(1).to({y:95.3},0).wait(1).to({y:96.75},0).wait(1).to({y:98.15},0).wait(1).to({y:99.6},0).wait(1).to({y:98.15},0).wait(1).to({y:96.75},0).wait(1).to({y:95.3},0).wait(1).to({y:93.9},0).wait(1).to({y:92.45},0).wait(1).to({y:91.05},0).wait(1).to({y:89.65},0).wait(1).to({y:88.2},0).wait(1).to({y:86.8},0).wait(1).to({y:85.35},0).wait(1).to({y:83.95},0).wait(1).to({y:82.55},0).wait(1).to({y:81.1},0).wait(1).to({y:79.7},0).wait(1).to({y:78.25},0).wait(1).to({y:76.85},0).wait(1).to({y:75.4},0).wait(1).to({y:74},0).wait(1).to({y:72.6},0).wait(1).to({y:71.15},0).wait(1).to({y:69.75},0).wait(1).to({y:68.3},0).wait(1).to({y:66.9},0).wait(1).to({y:65.5},0).wait(1).to({y:64.05},0).wait(1).to({y:62.65},0).wait(1).to({y:61.2},0).wait(1).to({y:59.8},0).wait(1).to({y:58.4},0).wait(1));

	// Layer_1
	this.instance_1 = new lib.Sy8797mbol6();
	this.instance_1.setTransform(42.6,74.7,1,1,0,0,0,42.6,74.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85.4,149.3);


(lib.clouds = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol11();
	this.instance.setTransform(778.6,59.9,1,1,0,0,0,151.2,59.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:151.3,x:781.9,y:61.05},0).wait(1).to({x:785.1,y:62.2},0).wait(1).to({x:788.35,y:63.4},0).wait(1).to({x:791.55,y:64.55},0).wait(1).to({x:794.8,y:65.7},0).wait(1).to({x:798.05,y:66.85},0).wait(1).to({x:801.25,y:68},0).wait(1).to({x:804.5,y:69.1},0).wait(1).to({x:807.75,y:70.25},0).wait(1).to({x:811,y:71.35},0).wait(1).to({x:814.2,y:72.5},0).wait(1).to({x:817.45,y:73.6},0).wait(1).to({x:820.7,y:74.7},0).wait(1).to({x:823.95,y:75.8},0).wait(1).to({x:827.2,y:76.9},0).wait(1).to({x:830.45,y:78},0).wait(1).to({x:833.7,y:79.05},0).wait(1).to({x:836.95,y:80.15},0).wait(1).to({x:840.2,y:81.2},0).wait(1).to({x:843.5,y:82.3},0).wait(1).to({x:846.75,y:83.35},0).wait(1).to({x:850,y:84.4},0).wait(1).to({x:853.25,y:85.45},0).wait(1).to({x:856.55,y:86.5},0).wait(1).to({x:859.8,y:87.5},0).wait(1).to({x:863.05,y:88.55},0).wait(1).to({x:866.35,y:89.6},0).wait(1).to({x:869.6,y:90.6},0).wait(1).to({x:872.9,y:91.6},0).wait(1).to({x:876.2,y:92.6},0).wait(1).to({x:879.45,y:93.6},0).wait(1).to({x:882.75,y:94.6},0).wait(1).to({x:886,y:95.55},0).wait(1).to({x:889.3,y:96.55},0).wait(1).to({x:892.6,y:97.5},0).wait(1).to({x:895.9,y:98.5},0).wait(1).to({x:899.2,y:99.45},0).wait(1).to({x:902.45,y:100.4},0).wait(1).to({x:905.75,y:101.35},0).wait(1).to({x:909.05,y:102.25},0).wait(1).to({x:912.35,y:103.2},0).wait(1).to({x:915.65,y:104.1},0).wait(1).to({x:919,y:105.05},0).wait(1).to({x:922.3,y:105.95},0).wait(1).to({x:925.6,y:106.85},0).wait(1).to({x:928.9,y:107.75},0).wait(1).to({x:932.2,y:108.6},0).wait(1).to({x:935.55,y:109.5},0).wait(1).to({x:938.85,y:110.35},0).wait(1).to({x:942.15,y:111.2},0).wait(1).to({x:945.5,y:112.1},0).wait(1).to({x:948.8,y:112.95},0).wait(1).to({x:952.15,y:113.75},0).wait(1).to({x:955.45,y:114.6},0).wait(1).to({x:958.8,y:115.4},0).wait(1).to({x:962.1,y:116.25},0).wait(1).to({x:965.45,y:117.05},0).wait(1).to({x:968.8,y:117.85},0).wait(1).to({x:972.1,y:118.65},0).wait(1).to({x:975.45,y:119.4},0).wait(1).to({x:978.8,y:120.2},0).wait(1).to({x:982.15,y:120.95},0).wait(1).to({x:985.5,y:121.75},0).wait(1).to({x:988.8,y:122.5},0).wait(1).to({x:992.15,y:123.2},0).wait(1).to({x:995.5,y:123.95},0).wait(1).to({x:998.85,y:124.7},0).wait(1).to({x:1002.2,y:125.4},0).wait(1).to({x:1005.6,y:126.1},0).wait(1).to({x:1008.95,y:126.8},0).wait(1).to({x:1012.3,y:127.5},0).wait(1).to({x:1015.65,y:128.2},0).wait(1).to({x:1019,y:128.85},0).wait(1).to({x:1022.4,y:129.5},0).wait(1).to({x:1025.75,y:130.15},0).wait(1).to({x:1029.1,y:130.8},0).wait(1).to({x:1032.5,y:131.45},0).wait(1).to({x:1035.85,y:132.1},0).wait(1).to({x:1039.25,y:132.7},0).wait(1).to({x:1042.6,y:133.3},0).wait(1).to({x:1046,y:133.9},0).wait(1).to({x:1049.35,y:134.5},0).wait(1).to({x:1052.75,y:135.05},0).wait(1).to({x:1056.1,y:135.65},0).wait(1).to({x:1059.5,y:136.2},0).wait(1).to({x:1062.9,y:136.75},0).wait(1).to({x:1066.25,y:137.3},0).wait(1).to({x:1069.65,y:137.8},0).wait(1).to({x:1073.05,y:138.35},0).wait(1).to({x:1076.45,y:138.85},0).wait(1).to({x:1079.8,y:139.35},0).wait(1).to({x:1083.2,y:139.85},0).wait(1).to({x:1086.6,y:140.3},0).wait(1).to({x:1090,y:140.75},0).wait(1).to({x:1093.4,y:141.25},0).wait(1).to({x:1096.8,y:141.65},0).wait(1).to({x:1100.2,y:142.1},0).wait(1).to({x:1103.6,y:142.55},0).wait(1).to({x:1107,y:142.95},0).wait(1).to({x:1110.4,y:143.35},0).wait(1).to({x:1113.85,y:143.75},0).wait(1).to({x:1117.25,y:144.1},0).wait(1).to({x:1120.65,y:144.5},0).wait(1).to({x:1124.05,y:144.85},0).wait(1).to({x:1127.45,y:145.2},0).wait(1).to({x:1130.9,y:145.5},0).wait(1).to({x:1134.3,y:145.85},0).wait(1).to({x:1137.7,y:146.15},0).wait(1).to({x:1141.1,y:146.45},0).wait(1).to({x:1144.55,y:146.7},0).wait(1).to({x:1147.95,y:147},0).wait(1).to({x:1151.4,y:147.25},0).wait(1).to({x:1154.8,y:147.5},0).wait(1).to({x:1158.2,y:147.75},0).wait(1).to({x:1161.65,y:147.95},0).wait(1).to({x:1165.05,y:148.15},0).wait(1).to({x:1168.5,y:148.35},0).wait(1).to({x:1171.9,y:148.55},0).wait(1).to({x:1175.35,y:148.7},0).wait(1).to({x:1178.75,y:148.9},0).wait(1).to({x:1182.2,y:149},0).wait(1).to({x:1185.6,y:149.15},0).wait(1).to({x:1189.05,y:149.25},0).wait(1).to({x:1192.45,y:149.4},0).wait(1).to({x:1195.9,y:149.45},0).wait(1).to({x:1199.3,y:149.55},0).wait(1).to({x:1202.75,y:149.6},0).wait(1).to({x:1206.15,y:149.65},0).wait(1).to({x:1209.6,y:149.7},0).wait(1).to({x:1213.05},0).wait(1).to({x:1216.45},0).wait(1).to({x:1219.9},0).wait(1).to({x:1223.3},0).wait(1).to({x:1226.75,y:149.65},0).wait(1).to({x:1230.15,y:149.6},0).wait(1).to({x:1233.6,y:149.55},0).wait(1).to({x:1237.05,y:149.45},0).wait(1).to({x:1240.45,y:149.35},0).wait(1).to({x:1243.9,y:149.25},0).wait(1).to({x:1247.3,y:149.15},0).wait(1).to({x:1250.75,y:149},0).wait(1).to({x:1254.15,y:148.85},0).wait(1).to({x:1257.6,y:148.65},0).wait(1).to({x:1261,y:148.45},0).wait(1).to({x:1264.45,y:148.25},0).wait(1).to({x:1267.85,y:148.05},0).wait(1).to({x:1271.25,y:147.8},0).wait(1).to({x:1274.7,y:147.55},0).wait(1).to({x:1278.1,y:147.3},0).wait(1).to({x:1281.5,y:147},0).wait(1).to({x:1284.95,y:146.7},0).wait(1).to({x:1288.35,y:146.4},0).wait(1).to({x:1291.75,y:146.05},0).wait(1).to({x:1295.2,y:145.7},0).wait(1).to({x:1298.6,y:145.35},0).wait(1).to({x:1302,y:144.95},0).wait(1).to({x:1305.4,y:144.55},0).wait(1).to({x:1308.8,y:144.15},0).wait(1).to({x:1312.2,y:143.7},0).wait(1).to({x:1315.6,y:143.25},0).wait(1).to({x:1319,y:142.75},0).wait(1).to({x:1322.4,y:142.3},0).wait(1).to({x:1325.8,y:141.75},0).wait(1).to({x:1329.15,y:141.25},0).wait(1).to({x:1332.55,y:140.7},0).wait(1).to({x:1335.95,y:140.15},0).wait(1).to({x:1339.3,y:139.55},0).wait(1).to({x:1342.7,y:138.95},0).wait(1).to({x:1346.05,y:138.35},0).wait(1).to({x:1349.45,y:137.7},0).wait(1).to({x:1352.8,y:137.05},0).wait(1).to({x:1356.15,y:136.4},0).wait(1).to({x:1359.5,y:135.7},0).wait(1).to({x:1362.85,y:135},0).wait(1).to({x:1366.2,y:134.25},0).wait(1).to({x:1369.55,y:133.5},0).wait(1).to({x:1372.9,y:132.75},0).wait(1).to({x:1376.25,y:131.95},0).wait(1).to({x:1379.6,y:131.15},0).wait(1).to({x:1382.9,y:130.35},0).wait(1).to({x:1386.25,y:129.5},0).wait(1).to({x:1389.55,y:128.65},0).wait(1).to({x:1392.85,y:127.75},0).wait(1).to({x:1396.2,y:126.85},0).wait(1).to({x:1399.5,y:125.95},0).wait(1).to({x:1402.75,y:125},0).wait(1).to({x:1406.05,y:124.05},0).wait(1).to({x:1409.35,y:123.05},0).wait(1).to({x:1412.65,y:122.05},0).wait(1).to({x:1415.9,y:121.05},0).wait(1).to({x:1419.15,y:120},0).wait(1).to({x:1422.45,y:118.95},0).wait(1).to({x:1425.7,y:117.85},0).wait(1).to({x:1428.95,y:116.75},0).wait(1).to({x:1432.15,y:115.65},0).wait(1).to({x:1435.4,y:114.5},0).wait(1).to({x:1438.65,y:113.3},0).wait(1).to({x:1441.85,y:112.15},0).wait(1).to({x:1445.05,y:110.95},0).wait(1).to({x:1448.25,y:109.7},0).wait(1).to({x:1451.45,y:108.45},0).wait(1).to({x:1454.65,y:107.2},0).wait(1).to({x:1457.85,y:105.95},0).wait(1).to({x:1461,y:104.6},0).wait(1).to({x:1464.15,y:103.3},0).wait(1).to({x:1467.3,y:101.95},0).wait(1).to({x:1470.45,y:100.6},0).wait(1).to({x:1473.6,y:99.2},0).wait(1).to({x:1476.7,y:97.8},0).wait(1).to({x:1479.85,y:96.35},0).wait(1).to({x:1482.95,y:94.9},0).wait(1).to({x:1486.05,y:93.45},0).wait(1).to({x:1489.15,y:91.95},0).wait(1).to({x:1492.2,y:90.45},0).wait(1).to({x:1495.3,y:88.95},0).wait(1).to({x:1498.35,y:87.4},0).wait(1).to({x:1501.4,y:85.8},0).wait(1).to({x:1504.4,y:84.2},0).wait(1).to({x:1507.45,y:82.6},0).wait(1).to({x:1510.45,y:81},0).wait(1).to({x:1513.45,y:79.35},0).wait(1).to({x:1516.45,y:77.65},0).wait(1).to({x:1519.45,y:75.95},0).wait(1).to({x:1522.4,y:74.25},0).wait(1).to({x:1525.4,y:72.55},0).wait(1).to({x:1528.35,y:70.8},0).wait(1).to({x:1531.25,y:69},0).wait(1).to({x:1534.2,y:67.2},0).wait(1).to({x:1537.1,y:65.4},0).wait(1).to({x:1540,y:63.6},0).wait(1).to({x:1542.9,y:61.75},0).wait(1).to({x:1545.8,y:59.9},0).wait(1).to({x:1549.25,y:68.95},0).wait(1).to({x:1549.2,y:78.8},0).wait(1).to({x:1546.85,y:88.3},0).wait(1).to({x:1542.9,y:97.3},0).wait(1).to({x:1537.85,y:105.75},0).wait(1).to({x:1531.95,y:113.6},0).wait(1).to({x:1525.35,y:120.95},0).wait(1).to({x:1518.25,y:127.75},0).wait(1).to({x:1510.65,y:134},0).wait(1).to({x:1502.75,y:139.85},0).wait(1).to({x:1494.5,y:145.25},0).wait(1).to({x:1486.05,y:150.25},0).wait(1).to({x:1477.35,y:154.85},0).wait(1).to({x:1468.5,y:159.15},0).wait(1).to({x:1459.45,y:163.05},0).wait(1).to({x:1450.35,y:166.7},0).wait(1).to({x:1441.05,y:170.05},0).wait(1).to({x:1431.75,y:173.15},0).wait(1).to({x:1422.3,y:175.95},0).wait(1).to({x:1412.8,y:178.55},0).wait(1).to({x:1403.25,y:180.9},0).wait(1).to({x:1393.65,y:183.05},0).wait(1).to({x:1384,y:185},0).wait(1).to({x:1374.35,y:186.75},0).wait(1).to({x:1364.6,y:188.3},0).wait(1).to({x:1354.9,y:189.7},0).wait(1).to({x:1345.1,y:190.95},0).wait(1).to({x:1335.35,y:192},0).wait(1).to({x:1325.55,y:192.95},0).wait(1).to({x:1315.75,y:193.75},0).wait(1).to({x:1305.95,y:194.4},0).wait(1).to({x:1296.1,y:194.95},0).wait(1).to({x:1286.25,y:195.35},0).wait(1).to({x:1276.45,y:195.6},0).wait(1).to({x:1266.6,y:195.8},0).wait(1).to({x:1256.75,y:195.85},0).wait(1).to({x:1246.95,y:195.8},0).wait(1).to({x:1237.1,y:195.65},0).wait(1).to({x:1227.25,y:195.4},0).wait(1).to({x:1217.4,y:195.05},0).wait(1).to({x:1207.6,y:194.65},0).wait(1).to({x:1197.75,y:194.1},0).wait(1).to({x:1187.95,y:193.5},0).wait(1).to({x:1178.1,y:192.85},0).wait(1).to({x:1168.3,y:192.1},0).wait(1).to({x:1158.5,y:191.25},0).wait(1).to({x:1148.7,y:190.35},0).wait(1).to({x:1138.95,y:189.35},0).wait(1).to({x:1129.15,y:188.35},0).wait(1).to({x:1119.35,y:187.35},0).wait(1).to({x:1109.55,y:186.3},0).wait(1).to({x:1099.75,y:185.3},0).wait(1).to({x:1090,y:184.25},0).wait(1).to({x:1080.2,y:183.2},0).wait(1).to({x:1070.4,y:182.2},0).wait(1).to({x:1060.65,y:181.15},0).wait(1).to({x:1050.85,y:180.1},0).wait(1).to({x:1041.05,y:179.05},0).wait(1).to({x:1031.3,y:178},0).wait(1).to({x:1021.5,y:176.95},0).wait(1).to({x:1011.7,y:175.9},0).wait(1).to({x:1001.95,y:174.8},0).wait(1).to({x:992.15,y:173.75},0).wait(1).to({x:982.4,y:172.7},0).wait(1).to({x:972.6,y:171.65},0).wait(1).to({x:962.8,y:170.55},0).wait(1).to({x:953.05,y:169.5},0).wait(1).to({x:943.25,y:168.45},0).wait(1).to({x:933.45,y:167.35},0).wait(1).to({x:923.7,y:166.3},0).wait(1).to({x:913.9,y:165.2},0).wait(1).to({x:904.15,y:164.15},0).wait(1).to({x:894.35,y:163.05},0).wait(1).to({x:884.6,y:161.95},0).wait(1).to({x:874.8,y:160.9},0).wait(1).to({x:865,y:159.8},0).wait(1).to({x:855.25,y:158.7},0).wait(1).to({x:845.45,y:157.6},0).wait(1).to({x:835.7,y:156.55},0).wait(1).to({x:825.9,y:155.45},0).wait(1).to({x:816.1,y:154.35},0).wait(1).to({x:806.35,y:153.25},0).wait(1).to({x:796.55,y:152.15},0).wait(1).to({x:786.8,y:151.05},0).wait(1).to({x:777,y:149.95},0).wait(1).to({x:767.25,y:148.85},0).wait(1).to({x:757.45,y:147.75},0).wait(1).to({x:747.7,y:146.65},0).wait(1).to({x:737.9,y:145.5},0).wait(1).to({x:728.1,y:144.4},0).wait(1).to({x:718.35,y:143.3},0).wait(1).to({x:708.6,y:142.15},0).wait(1).to({x:698.8,y:141.05},0).wait(1).to({x:689.05,y:139.95},0).wait(1).to({x:679.25,y:138.8},0).wait(1).to({x:669.5,y:137.7},0).wait(1).to({x:659.7,y:136.55},0).wait(1).to({x:649.95,y:135.4},0).wait(1).to({x:640.15,y:134.3},0).wait(1).to({x:630.4,y:133.15},0).wait(1).to({x:620.6,y:132},0).wait(1).to({x:610.85,y:130.85},0).wait(1).to({x:601.05,y:129.7},0).wait(1).to({x:591.3,y:128.55},0).wait(1).to({x:581.5,y:127.4},0).wait(1).to({x:571.75,y:126.25},0).wait(1).to({x:562,y:125.1},0).wait(1).to({x:552.2,y:123.9},0).wait(1).to({x:542.45,y:122.75},0).wait(1).to({x:532.7,y:121.6},0).wait(1).to({x:522.9,y:120.4},0).wait(1).to({x:513.15,y:119.2},0).wait(1).to({x:503.4,y:118.05},0).wait(1).to({x:493.6,y:116.85},0).wait(1).to({x:483.85,y:115.65},0).wait(1).to({x:474.05,y:114.45},0).wait(1).to({x:464.3,y:113.2},0).wait(1).to({x:454.55,y:112},0).wait(1).to({x:444.8,y:110.75},0).wait(1).to({x:435,y:109.55},0).wait(1).to({x:425.25,y:108.3},0).wait(1).to({x:415.5,y:107.05},0).wait(1).to({x:405.75,y:105.75},0).wait(1).to({x:396,y:104.5},0).wait(1).to({x:386.25,y:103.2},0).wait(1).to({x:376.5,y:101.9},0).wait(1).to({x:366.75,y:100.55},0).wait(1).to({x:357,y:99.2},0).wait(1).to({x:347.25,y:97.85},0).wait(1).to({x:337.5,y:96.45},0).wait(1).to({x:327.75,y:95.05},0).wait(1).to({x:318.05,y:93.65},0).wait(1).to({x:308.3,y:92.25},0).wait(1).to({x:298.55,y:90.9},0).wait(1).to({x:288.8,y:89.55},0).wait(1).to({x:279.05,y:88.15},0).wait(1).to({x:269.3,y:86.8},0).wait(1).to({x:259.55,y:85.5},0).wait(1).to({x:249.8,y:84.15},0).wait(1).to({x:240.1,y:82.8},0).wait(1).to({x:230.35,y:81.5},0).wait(1).to({x:220.55,y:80.15},0).wait(1).to({x:210.8,y:78.85},0).wait(1).to({x:201.05,y:77.55},0).wait(1).to({x:191.3,y:76.25},0).wait(1).to({x:181.55,y:74.95},0).wait(1).to({x:171.8,y:73.65},0).wait(1).to({x:162.05,y:72.4},0).wait(1).to({x:152.3,y:71.1},0).wait(1).to({x:142.6,y:69.85},0).wait(1).to({x:132.8,y:68.6},0).wait(1).to({x:123.05,y:67.35},0).wait(1).to({x:113.3,y:66.15},0).wait(1).to({x:103.55,y:64.95},0).wait(1).to({x:93.75,y:63.75},0).wait(1).to({x:84,y:62.55},0).wait(1).to({x:74.25,y:61.4},0).wait(1).to({x:64.45,y:60.25},0).wait(1).to({x:54.65,y:59.25},0).wait(1).to({x:44.9,y:58.2},0).wait(1).to({x:35,y:57.2},0).wait(1).to({x:25.25,y:56.4},0).wait(1).to({x:15.45,y:55.9},0).wait(1).to({x:5.65,y:55.45},0).wait(1).to({x:-4.2,y:55.05},0).wait(1).to({x:-14,y:54.6},0).wait(1).to({x:-23.85,y:54.2},0).wait(1).to({x:-33.7,y:53.8},0).wait(1).to({x:-43.5,y:53.4},0).wait(1).to({x:-53.35,y:53.05},0).wait(1).to({x:-63.2,y:52.65},0).wait(1).to({x:-73,y:52.3},0).wait(1).to({x:-83,y:51.95},0).wait(1).to({x:-92.7,y:51.6},0).wait(1).to({x:-96,y:52.5},0).wait(1).to({x:-89.8,y:53.45},0).wait(1).to({x:-84.3,y:54.05},0).wait(1).to({x:-78.85,y:54.5},0).wait(1).to({x:-73.3,y:54.95},0).wait(1).to({x:-67.8,y:55.4},0).wait(1).to({x:-62.25,y:55.8},0).wait(1).to({x:-56.75,y:56.25},0).wait(1).to({x:-51.25,y:56.65},0).wait(1).to({x:-45.75,y:57.05},0).wait(1).to({x:-40.2,y:57.45},0).wait(1).to({x:-34.7,y:57.9},0).wait(1).to({x:-29.2,y:58.3},0).wait(1).to({x:-23.7,y:58.7},0).wait(1).to({x:-18.2,y:59.1},0).wait(1).to({x:-12.65,y:59.5},0).wait(1).to({x:-7.15,y:59.9},0).wait(1).to({x:-1.65,y:60.2},0).wait(1).to({x:3.85,y:60.6},0).wait(1).to({x:9.35,y:61},0).wait(1).to({x:14.9,y:61.4},0).wait(1).to({x:20.4,y:61.75},0).wait(1).to({x:25.9,y:62.15},0).wait(1).to({x:31.9,y:62.55},0).wait(1).to({x:36.95,y:62.8},0).wait(1).to({x:42.45,y:63},0).wait(1).to({x:47.95,y:63.1},0).wait(1).to({x:53.5,y:63.15},0).wait(1).to({x:59.05,y:63.2},0).wait(1).to({x:64.55},0).wait(1).to({x:70.05,y:63.15},0).wait(1).to({x:75.6,y:63.05},0).wait(1).to({x:81.1,y:62.95},0).wait(1).to({x:86.65,y:62.85},0).wait(1).to({x:92.15,y:62.7},0).wait(1).to({x:97.65,y:62.5},0).wait(1).to({x:103.2,y:62.35},0).wait(1).to({x:108.7,y:62.1},0).wait(1).to({x:114.25,y:61.9},0).wait(1).to({x:119.75,y:61.65},0).wait(1).to({x:125.3,y:61.35},0).wait(1).to({x:130.8,y:61.05},0).wait(1).to({x:136.3,y:60.75},0).wait(1).to({x:141.85,y:60.4},0).wait(1).to({x:147.35,y:60.05},0).wait(1).to({x:152.8,y:59.75},0).wait(1).to({x:158.3,y:59.35},0).wait(1).to({x:163.85,y:58.95},0).wait(1).to({x:169.35,y:58.5},0).wait(1).to({x:174.85,y:58.05},0).wait(1).to({x:180.35,y:57.55},0).wait(1).to({x:185.85,y:57.05},0).wait(1).to({x:191.35,y:56.5},0).wait(1).to({x:196.85,y:55.95},0).wait(1).to({x:202.35,y:55.35},0).wait(1).to({x:207.8,y:54.75},0).wait(1).to({x:213.3,y:54.1},0).wait(1).to({x:218.8,y:53.45},0).wait(1).to({x:224.3,y:52.75},0).wait(1).to({x:229.75,y:52},0).wait(1).to({x:235.2,y:51.25},0).wait(1).to({x:240.7,y:50.4},0).wait(1).to({x:246.15,y:49.55},0).wait(1).to({x:251.6,y:48.65},0).wait(1).to({x:257.05,y:47.75},0).wait(1).to({x:262.45,y:46.75},0).wait(1).to({x:267.9,y:45.7},0).wait(1).to({x:273.3,y:44.6},0).wait(1).to({x:278.7,y:43.4},0).wait(1).to({x:284.1,y:42.15},0).wait(1).to({x:289.45,y:40.85},0).wait(1).to({x:294.8,y:39.45},0).wait(1).to({x:300.15,y:37.95},0).wait(1).to({x:305.4,y:36.3},0).wait(1).to({x:310.65,y:34.55},0).wait(1).to({x:315.85,y:32.6},0).wait(1).to({x:320.9,y:30.55},0).wait(1).to({x:326,y:28.35},0).wait(1).to({x:331.2,y:26.45},0).wait(1).to({x:336.4,y:24.75},0).wait(1).to({x:341.7,y:23.2},0).wait(1).to({x:347.05,y:21.7},0).wait(1).to({x:352.4,y:20.35},0).wait(1).to({x:357.75,y:19.05},0).wait(1).to({x:363.15,y:17.85},0).wait(1).to({x:368.55,y:16.7},0).wait(1).to({x:374,y:15.6},0).wait(1).to({x:379.4,y:14.55},0).wait(1).to({x:384.85,y:13.55},0).wait(1).to({x:390.3,y:12.6},0).wait(1).to({x:395.75,y:11.7},0).wait(1).to({x:401.2,y:10.85},0).wait(1).to({x:406.65,y:10.05},0).wait(1).to({x:412.1,y:9.3},0).wait(1).to({x:417.6,y:8.6},0).wait(1).to({x:423.1,y:7.9},0).wait(1).to({x:428.6,y:7.25},0).wait(1).to({x:434.1,y:6.65},0).wait(1).to({x:439.55,y:6.1},0).wait(1).to({x:445.05,y:5.6},0).wait(1).to({x:450.6,y:5.1},0).wait(1).to({x:456.1,y:4.65},0).wait(1).to({x:461.6,y:4.25},0).wait(1).to({x:467.1,y:3.85},0).wait(1).to({x:472.6,y:3.55},0).wait(1).to({x:478.15,y:3.25},0).wait(1).to({x:483.65,y:3},0).wait(1).to({x:489.2,y:2.8},0).wait(1).to({x:494.7,y:2.65},0).wait(1).to({x:500.2,y:2.5},0).wait(1).to({x:505.75,y:2.4},0).wait(1).to({x:511.25,y:2.35},0).wait(1).to({x:516.8},0).wait(1).to({x:522.3,y:2.4},0).wait(1).to({x:527.85,y:2.5},0).wait(1).to({x:533.35,y:2.6},0).wait(1).to({x:538.9,y:2.8},0).wait(1).to({x:544.4,y:3},0).wait(1).to({x:549.9,y:3.3},0).wait(1).to({x:555.45,y:3.6},0).wait(1).to({x:560.95,y:3.95},0).wait(1).to({x:566.45,y:4.35},0).wait(1).to({x:571.95,y:4.85},0).wait(1).to({x:577.45,y:5.35},0).wait(1).to({x:582.95,y:5.9},0).wait(1).to({x:588.45,y:6.55},0).wait(1).to({x:593.95,y:7.2},0).wait(1).to({x:599.4,y:7.95},0).wait(1).to({x:604.9,y:8.7},0).wait(1).to({x:610.35,y:9.5},0).wait(1).to({x:615.8,y:10.35},0).wait(1).to({x:621.25,y:11.25},0).wait(1).to({x:626.7,y:12.15},0).wait(1).to({x:632.15,y:13.1},0).wait(1).to({x:637.6,y:14.1},0).wait(1).to({x:643,y:15.15},0).wait(1).to({x:648.4,y:16.25},0).wait(1).to({x:653.85,y:17.35},0).wait(1).to({x:659.25,y:18.5},0).wait(1).to({x:664.65,y:19.7},0).wait(1).to({x:670,y:20.9},0).wait(1).to({x:675.4,y:22.2},0).wait(1).to({x:680.75,y:23.5},0).wait(1).to({x:686.1,y:24.9},0).wait(1).to({x:691.45,y:26.3},0).wait(1).to({x:696.8,y:27.75},0).wait(1).to({x:702.1,y:29.25},0).wait(1).to({x:707.4,y:30.8},0).wait(1).to({x:712.7,y:32.4},0).wait(1).to({x:717.95,y:34.05},0).wait(1).to({x:723.2,y:35.75},0).wait(1).to({x:728.5,y:37.5},0).wait(1).to({x:733.7,y:39.3},0).wait(1).to({x:738.9,y:41.2},0).wait(1).to({x:744.1,y:43.1},0).wait(1).to({x:749.2,y:45.15},0).wait(1).to({x:754.3,y:47.2},0).wait(1).to({x:759.4,y:49.4},0).wait(1).to({x:764.45,y:51.65},0).wait(1).to({x:769.4,y:54.05},0).wait(1).to({x:774.3,y:56.7},0).wait(1).to({x:778.7,y:59.9},0).wait(1));

	// Layer_3
	this.instance_1 = new lib.Symbol12();
	this.instance_1.setTransform(1242.6,239.95,1,1,0,0,0,106,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:1237.3,y:237.9},0).wait(1).to({x:1232.05,y:235.95},0).wait(1).to({x:1226.8,y:233.95},0).wait(1).to({x:1221.55,y:232},0).wait(1).to({x:1216.3,y:230.05},0).wait(1).to({x:1211.05,y:228.1},0).wait(1).to({x:1205.8,y:226.2},0).wait(1).to({x:1200.55,y:224.25},0).wait(1).to({x:1195.35,y:222.35},0).wait(1).to({x:1190.1,y:220.5},0).wait(1).to({x:1184.9,y:218.6},0).wait(1).to({x:1179.7,y:216.75},0).wait(1).to({x:1174.5,y:214.9},0).wait(1).to({x:1169.3,y:213.1},0).wait(1).to({x:1164.1,y:211.25},0).wait(1).to({x:1158.9,y:209.45},0).wait(1).to({x:1153.7,y:207.65},0).wait(1).to({x:1148.5,y:205.9},0).wait(1).to({x:1143.35,y:204.1},0).wait(1).to({x:1138.15,y:202.35},0).wait(1).to({x:1133,y:200.6},0).wait(1).to({x:1127.85,y:198.9},0).wait(1).to({x:1122.7,y:197.2},0).wait(1).to({x:1117.55,y:195.5},0).wait(1).to({x:1112.4,y:193.8},0).wait(1).to({x:1107.25,y:192.15},0).wait(1).to({x:1102.1,y:190.45},0).wait(1).to({x:1097,y:188.8},0).wait(1).to({x:1091.85,y:187.2},0).wait(1).to({x:1086.75,y:185.55},0).wait(1).to({x:1081.65,y:183.95},0).wait(1).to({x:1076.55,y:182.35},0).wait(1).to({x:1071.4,y:180.8},0).wait(1).to({x:1066.3,y:179.2},0).wait(1).to({x:1061.25,y:177.65},0).wait(1).to({x:1056.15,y:176.1},0).wait(1).to({x:1051.05,y:174.6},0).wait(1).to({x:1046,y:173.1},0).wait(1).to({x:1040.9,y:171.6},0).wait(1).to({x:1035.85,y:170.1},0).wait(1).to({x:1030.8,y:168.6},0).wait(1).to({x:1025.7,y:167.15},0).wait(1).to({x:1020.65,y:165.7},0).wait(1).to({x:1015.6,y:164.25},0).wait(1).to({x:1010.6,y:162.85},0).wait(1).to({x:1005.55,y:161.45},0).wait(1).to({x:1000.5,y:160.05},0).wait(1).to({x:995.5,y:158.65},0).wait(1).to({x:990.45,y:157.3},0).wait(1).to({x:985.45,y:155.95},0).wait(1).to({x:980.45,y:154.6},0).wait(1).to({x:975.45,y:153.25},0).wait(1).to({x:970.45,y:151.95},0).wait(1).to({x:965.45,y:150.65},0).wait(1).to({x:960.45,y:149.35},0).wait(1).to({x:955.45,y:148.1},0).wait(1).to({x:950.5,y:146.8},0).wait(1).to({x:945.5,y:145.55},0).wait(1).to({x:940.55,y:144.35},0).wait(1).to({x:935.6,y:143.1},0).wait(1).to({x:930.6,y:141.9},0).wait(1).to({x:925.65,y:140.7},0).wait(1).to({x:920.7,y:139.5},0).wait(1).to({x:915.8,y:138.35},0).wait(1).to({x:910.85,y:137.2},0).wait(1).to({x:905.9,y:136.05},0).wait(1).to({x:901,y:134.9},0).wait(1).to({x:896.05,y:133.8},0).wait(1).to({x:891.15,y:132.7},0).wait(1).to({x:886.25,y:131.6},0).wait(1).to({x:881.3,y:130.55},0).wait(1).to({x:876.4,y:129.45},0).wait(1).to({x:871.5,y:128.4},0).wait(1).to({x:866.65,y:127.35},0).wait(1).to({x:861.75,y:126.35},0).wait(1).to({x:856.85,y:125.35},0).wait(1).to({x:852,y:124.35},0).wait(1).to({x:847.1,y:123.35},0).wait(1).to({x:842.25,y:122.4},0).wait(1).to({x:837.4,y:121.4},0).wait(1).to({x:832.55,y:120.45},0).wait(1).to({x:827.7,y:119.55},0).wait(1).to({x:822.85,y:118.6},0).wait(1).to({x:818,y:117.7},0).wait(1).to({x:813.15,y:116.8},0).wait(1).to({x:808.35,y:115.95},0).wait(1).to({x:803.5,y:115.1},0).wait(1).to({x:798.7,y:114.25},0).wait(1).to({x:793.9,y:113.4},0).wait(1).to({x:789.1,y:112.55},0).wait(1).to({x:784.3,y:111.75},0).wait(1).to({x:779.5,y:110.95},0).wait(1).to({x:774.7,y:110.15},0).wait(1).to({x:769.9,y:109.4},0).wait(1).to({x:765.1,y:108.6},0).wait(1).to({x:760.35,y:107.9},0).wait(1).to({x:755.55,y:107.15},0).wait(1).to({x:750.8,y:106.4},0).wait(1).to({x:746.05,y:105.7},0).wait(1).to({x:741.3,y:105},0).wait(1).to({x:736.55,y:104.35},0).wait(1).to({x:731.8,y:103.65},0).wait(1).to({x:727.05,y:103},0).wait(1).to({x:722.3,y:102.4},0).wait(1).to({x:717.6,y:101.75},0).wait(1).to({x:712.85,y:101.15},0).wait(1).to({x:708.15,y:100.55},0).wait(1).to({x:703.4,y:99.95},0).wait(1).to({x:698.7,y:99.35},0).wait(1).to({x:694,y:98.8},0).wait(1).to({x:689.3,y:98.25},0).wait(1).to({x:684.6,y:97.7},0).wait(1).to({x:679.9,y:97.2},0).wait(1).to({x:675.25,y:96.7},0).wait(1).to({x:670.55,y:96.2},0).wait(1).to({x:665.9,y:95.7},0).wait(1).to({x:661.2,y:95.25},0).wait(1).to({x:656.55,y:94.8},0).wait(1).to({x:651.9,y:94.35},0).wait(1).to({x:647.25,y:93.9},0).wait(1).to({x:642.6,y:93.5},0).wait(1).to({x:637.95,y:93.1},0).wait(1).to({x:633.3,y:92.7},0).wait(1).to({x:628.7,y:92.35},0).wait(1).to({x:624.05,y:91.95},0).wait(1).to({x:619.45,y:91.6},0).wait(1).to({x:614.8,y:91.3},0).wait(1).to({x:610.2,y:90.95},0).wait(1).to({x:605.6,y:90.65},0).wait(1).to({x:601,y:90.35},0).wait(1).to({x:596.4,y:90.05},0).wait(1).to({x:591.8,y:89.8},0).wait(1).to({x:587.25,y:89.55},0).wait(1).to({x:582.65,y:89.3},0).wait(1).to({x:578.05,y:89.05},0).wait(1).to({x:573.5,y:88.85},0).wait(1).to({x:568.95,y:88.65},0).wait(1).to({x:564.4,y:88.45},0).wait(1).to({x:559.8,y:88.25},0).wait(1).to({x:555.25,y:88.1},0).wait(1).to({x:550.75,y:87.95},0).wait(1).to({x:546.2,y:87.8},0).wait(1).to({x:541.65,y:87.7},0).wait(1).to({x:537.15,y:87.55},0).wait(1).to({x:532.6,y:87.45},0).wait(1).to({x:528.1,y:87.4},0).wait(1).to({x:523.6,y:87.3},0).wait(1).to({x:519.05,y:87.25},0).wait(1).to({x:514.55,y:87.2},0).wait(1).to({x:510.05,y:87.15},0).wait(1).to({x:505.6},0).wait(1).to({x:501.1},0).wait(1).to({x:496.6},0).wait(1).to({x:492.15,y:87.2},0).wait(1).to({x:487.65},0).wait(1).to({x:483.2,y:87.25},0).wait(1).to({x:478.75,y:87.3},0).wait(1).to({x:474.3,y:87.4},0).wait(1).to({x:469.85,y:87.5},0).wait(1).to({x:465.4,y:87.55},0).wait(1).to({x:460.95,y:87.7},0).wait(1).to({x:456.5,y:87.8},0).wait(1).to({x:452.1,y:87.95},0).wait(1).to({x:447.65,y:88.1},0).wait(1).to({x:443.25,y:88.25},0).wait(1).to({x:438.8,y:88.45},0).wait(1).to({x:434.4,y:88.65},0).wait(1).to({x:430,y:88.85},0).wait(1).to({x:425.6,y:89.05},0).wait(1).to({x:421.2,y:89.3},0).wait(1).to({x:416.8,y:89.55},0).wait(1).to({x:412.45,y:89.8},0).wait(1).to({x:408.05,y:90.05},0).wait(1).to({x:403.7,y:90.35},0).wait(1).to({x:399.3,y:90.65},0).wait(1).to({x:394.95,y:90.95},0).wait(1).to({x:390.6,y:91.3},0).wait(1).to({x:386.25,y:91.65},0).wait(1).to({x:381.9,y:92},0).wait(1).to({x:377.55,y:92.35},0).wait(1).to({x:373.25,y:92.7},0).wait(1).to({x:368.9,y:93.1},0).wait(1).to({x:364.55,y:93.5},0).wait(1).to({x:360.25,y:93.95},0).wait(1).to({x:355.95,y:94.35},0).wait(1).to({x:351.6,y:94.8},0).wait(1).to({x:347.3,y:95.25},0).wait(1).to({x:343,y:95.75},0).wait(1).to({x:338.7,y:96.2},0).wait(1).to({x:334.45,y:96.7},0).wait(1).to({x:330.15,y:97.2},0).wait(1).to({x:325.85,y:97.75},0).wait(1).to({x:321.6,y:98.3},0).wait(1).to({x:317.35,y:98.85},0).wait(1).to({x:313.05,y:99.4},0).wait(1).to({x:308.8,y:99.95},0).wait(1).to({x:304.55,y:100.55},0).wait(1).to({x:300.3,y:101.15},0).wait(1).to({x:296.05,y:101.8},0).wait(1).to({x:291.8,y:102.4},0).wait(1).to({x:287.6,y:103.05},0).wait(1).to({x:283.35,y:103.7},0).wait(1).to({x:279.15,y:104.35},0).wait(1).to({x:274.9,y:105.05},0).wait(1).to({x:270.7,y:105.75},0).wait(1).to({x:266.5,y:106.45},0).wait(1).to({x:262.3,y:107.2},0).wait(1).to({x:258.1,y:107.9},0).wait(1).to({x:253.9,y:108.65},0).wait(1).to({x:249.75,y:109.4},0).wait(1).to({x:245.55,y:110.2},0).wait(1).to({x:241.35,y:111},0).wait(1).to({x:237.2,y:111.8},0).wait(1).to({x:233.05,y:112.6},0).wait(1).to({x:228.9,y:113.45},0).wait(1).to({x:224.7,y:114.25},0).wait(1).to({x:220.55,y:115.1},0).wait(1).to({x:216.45,y:116},0).wait(1).to({x:212.3,y:116.85},0).wait(1).to({x:208.15,y:117.75},0).wait(1).to({x:204.05,y:118.65},0).wait(1).to({x:199.9,y:119.6},0).wait(1).to({x:195.8,y:120.5},0).wait(1).to({x:191.65,y:121.45},0).wait(1).to({x:187.55,y:122.45},0).wait(1).to({x:183.45,y:123.4},0).wait(1).to({x:179.35,y:124.4},0).wait(1).to({x:175.25,y:125.4},0).wait(1).to({x:171.2,y:126.4},0).wait(1).to({x:167.1,y:127.4},0).wait(1).to({x:163,y:128.45},0).wait(1).to({x:158.95,y:129.5},0).wait(1).to({x:154.9,y:130.6},0).wait(1).to({x:150.8,y:131.65},0).wait(1).to({x:146.75,y:132.75},0).wait(1).to({x:142.7,y:133.85},0).wait(1).to({x:138.65,y:135},0).wait(1).to({x:134.65,y:136.1},0).wait(1).to({x:130.6,y:137.25},0).wait(1).to({x:126.55,y:138.4},0).wait(1).to({x:122.55,y:139.6},0).wait(1).to({x:118.5,y:140.75},0).wait(1).to({x:114.5,y:141.95},0).wait(1).to({x:110.5,y:143.15},0).wait(1).to({x:106.5,y:144.4},0).wait(1).to({x:102.55,y:145.65},0).wait(1).to({x:98.55,y:146.9},0).wait(1).to({x:94.55,y:148.15},0).wait(1).to({x:90.6,y:149.45},0).wait(1).to({x:86.6,y:150.7},0).wait(1).to({x:82.6,y:152},0).wait(1).to({x:78.65,y:153.35},0).wait(1).to({x:74.7,y:154.65},0).wait(1).to({x:70.75,y:156},0).wait(1).to({x:66.8,y:157.35},0).wait(1).to({x:62.85,y:158.75},0).wait(1).to({x:58.9,y:160.1},0).wait(1).to({x:54.95,y:161.5},0).wait(1).to({x:51.05,y:162.95},0).wait(1).to({x:47.1,y:164.35},0).wait(1).to({x:43.2,y:165.8},0).wait(1).to({x:39.25,y:167.25},0).wait(1).to({x:35.35,y:168.7},0).wait(1).to({x:31.45,y:170.15},0).wait(1).to({x:27.55,y:171.65},0).wait(1).to({x:23.65,y:173.15},0).wait(1).to({x:19.75,y:174.7},0).wait(1).to({x:15.9,y:176.2},0).wait(1).to({x:12,y:177.75},0).wait(1).to({x:8.1,y:179.3},0).wait(1).to({x:4.25,y:180.85},0).wait(1).to({x:0.4,y:182.45},0).wait(1).to({x:-3.45,y:184.05},0).wait(1).to({x:-7.35,y:185.65},0).wait(1).to({x:-11.15,y:187.3},0).wait(1).to({x:-15,y:188.9},0).wait(1).to({x:-18.85,y:190.55},0).wait(1).to({x:-22.7,y:192.2},0).wait(1).to({x:-26.5,y:193.9},0).wait(1).to({x:-30.35,y:195.6},0).wait(1).to({x:-34.15,y:197.3},0).wait(1).to({x:-37.95,y:199},0).wait(1).to({x:-41.8,y:200.75},0).wait(1).to({x:-29.8,y:201.65},0).wait(1).to({x:-17.9,y:202.6},0).wait(1).to({x:-6.05,y:203.5},0).wait(1).to({x:5.8,y:204.4},0).wait(1).to({x:17.55,y:205.3},0).wait(1).to({x:29.25,y:206.2},0).wait(1).to({x:40.9,y:207.1},0).wait(1).to({x:52.5,y:208},0).wait(1).to({x:64.05,y:208.9},0).wait(1).to({x:75.55,y:209.75},0).wait(1).to({x:86.95,y:210.65},0).wait(1).to({x:98.35,y:211.5},0).wait(1).to({x:109.65,y:212.35},0).wait(1).to({x:120.9,y:213.2},0).wait(1).to({x:132.15,y:214.05},0).wait(1).to({x:143.3,y:214.9},0).wait(1).to({x:154.45,y:215.75},0).wait(1).to({x:165.5,y:216.6},0).wait(1).to({x:176.5,y:217.4},0).wait(1).to({x:187.5,y:218.25},0).wait(1).to({x:198.4,y:219.05},0).wait(1).to({x:209.25,y:219.85},0).wait(1).to({x:220.05,y:220.65},0).wait(1).to({x:230.8,y:221.45},0).wait(1).to({x:241.5,y:222.25},0).wait(1).to({x:252.15,y:223.05},0).wait(1).to({x:262.75,y:223.85},0).wait(1).to({x:273.25,y:224.6},0).wait(1).to({x:283.75,y:225.4},0).wait(1).to({x:294.2,y:226.15},0).wait(1).to({x:304.55,y:226.9},0).wait(1).to({x:314.9,y:227.65},0).wait(1).to({x:325.15,y:228.4},0).wait(1).to({x:335.4,y:229.15},0).wait(1).to({x:345.55,y:229.9},0).wait(1).to({x:355.65,y:230.65},0).wait(1).to({x:365.75,y:231.35},0).wait(1).to({x:375.75,y:232.05},0).wait(1).to({x:385.7,y:232.8},0).wait(1).to({x:395.6,y:233.5},0).wait(1).to({x:405.45,y:234.2},0).wait(1).to({x:415.25,y:234.9},0).wait(1).to({x:425,y:235.6},0).wait(1).to({x:434.7,y:236.3},0).wait(1).to({x:444.35,y:236.95},0).wait(1).to({x:453.95,y:237.65},0).wait(1).to({x:463.45,y:238.3},0).wait(1).to({x:472.95,y:239},0).wait(1).to({x:482.4,y:239.65},0).wait(1).to({x:491.75,y:240.3},0).wait(1).to({x:501.1,y:240.95},0).wait(1).to({x:510.35,y:241.6},0).wait(1).to({x:519.55,y:242.25},0).wait(1).to({x:528.75,y:242.85},0).wait(1).to({x:537.85,y:243.5},0).wait(1).to({x:546.9,y:244.1},0).wait(1).to({x:555.9,y:244.7},0).wait(1).to({x:564.9,y:245.35},0).wait(1).to({x:573.8,y:245.95},0).wait(1).to({x:582.65,y:246.55},0).wait(1).to({x:591.45,y:247.15},0).wait(1).to({x:600.15,y:247.7},0).wait(1).to({x:608.85,y:248.3},0).wait(1).to({x:617.5,y:248.85},0).wait(1).to({x:626.1,y:249.45},0).wait(1).to({x:634.65,y:250},0).wait(1).to({x:643.1,y:250.55},0).wait(1).to({x:651.55,y:251.1},0).wait(1).to({x:659.9,y:251.65},0).wait(1).to({x:668.25,y:252.2},0).wait(1).to({x:676.5,y:252.75},0).wait(1).to({x:684.75,y:253.3},0).wait(1).to({x:692.9,y:253.8},0).wait(1).to({x:701,y:254.35},0).wait(1).to({x:709.1,y:254.85},0).wait(1).to({x:717.1,y:255.35},0).wait(1).to({x:725.05,y:255.85},0).wait(1).to({x:732.95,y:256.35},0).wait(1).to({x:740.8,y:256.85},0).wait(1).to({x:748.6,y:257.35},0).wait(1).to({x:756.35,y:257.8},0).wait(1).to({x:764.05,y:258.3},0).wait(1).to({x:771.7,y:258.75},0).wait(1).to({x:779.3,y:259.25},0).wait(1).to({x:786.8,y:259.7},0).wait(1).to({x:794.3,y:260.15},0).wait(1).to({x:801.75,y:260.6},0).wait(1).to({x:809.1,y:261.05},0).wait(1).to({x:816.45,y:261.5},0).wait(1).to({x:823.7,y:261.9},0).wait(1).to({x:830.95,y:262.35},0).wait(1).to({x:838.1,y:262.75},0).wait(1).to({x:845.25,y:263.15},0).wait(1).to({x:852.3,y:263.6},0).wait(1).to({x:859.3,y:264},0).wait(1).to({x:866.25,y:264.4},0).wait(1).to({x:873.2,y:264.8},0).wait(1).to({x:880.05,y:265.15},0).wait(1).to({x:886.85,y:265.55},0).wait(1).to({x:893.6,y:265.9},0).wait(1).to({x:900.3,y:266.3},0).wait(1).to({x:906.95,y:266.65},0).wait(1).to({x:913.55,y:267},0).wait(1).to({x:920.05,y:267.35},0).wait(1).to({x:926.55,y:267.7},0).wait(1).to({x:933,y:268.05},0).wait(1).to({x:939.4,y:268.4},0).wait(1).to({x:945.7,y:268.75},0).wait(1).to({x:952,y:269.05},0).wait(1).to({x:958.2,y:269.4},0).wait(1).to({x:964.4,y:269.7},0).wait(1).to({x:970.5,y:270},0).wait(1).to({x:976.6,y:270.3},0).wait(1).to({x:982.6,y:270.6},0).wait(1).to({x:988.55,y:270.9},0).wait(1).to({x:994.5,y:271.2},0).wait(1).to({x:1000.35,y:271.45},0).wait(1).to({x:1006.15,y:271.75},0).wait(1).to({x:1011.9,y:272},0).wait(1).to({x:1017.6,y:272.3},0).wait(1).to({x:1023.25,y:272.55},0).wait(1).to({x:1028.85,y:272.8},0).wait(1).to({x:1034.4,y:273.05},0).wait(1).to({x:1039.9,y:273.3},0).wait(1).to({x:1045.35,y:273.5},0).wait(1).to({x:1050.75,y:273.75},0).wait(1).to({x:1056.1,y:274},0).wait(1).to({x:1061.35,y:274.2},0).wait(1).to({x:1066.6,y:274.4},0).wait(1).to({x:1071.8,y:274.65},0).wait(1).to({x:1076.9,y:274.85},0).wait(1).to({x:1082,y:275.05},0).wait(1).to({x:1087,y:275.2},0).wait(1).to({x:1092,y:275.4},0).wait(1).to({x:1096.9,y:275.6},0).wait(1).to({x:1101.75,y:275.75},0).wait(1).to({x:1106.6,y:275.95},0).wait(1).to({x:1111.35,y:276.1},0).wait(1).to({x:1116.05,y:276.25},0).wait(1).to({x:1120.7,y:276.4},0).wait(1).to({x:1125.35,y:276.55},0).wait(1).to({x:1129.9,y:276.7},0).wait(1).to({x:1134.4,y:276.85},0).wait(1).to({x:1138.85,y:277},0).wait(1).to({x:1143.25,y:277.1},0).wait(1).to({x:1147.6,y:277.25},0).wait(1).to({x:1151.85,y:277.35},0).wait(1).to({x:1156.1,y:277.45},0).wait(1).to({x:1160.3,y:277.55},0).wait(1).to({x:1164.45,y:277.65},0).wait(1).to({x:1168.5,y:277.75},0).wait(1).to({x:1172.55,y:277.85},0).wait(1).to({x:1176.55,y:277.9},0).wait(1).to({x:1180.45,y:278},0).wait(1).to({x:1184.35,y:278.05},0).wait(1).to({x:1188.15,y:278.15},0).wait(1).to({x:1191.9,y:278.2},0).wait(1).to({x:1195.65,y:278.25},0).wait(1).to({x:1199.3,y:278.3},0).wait(1).to({x:1202.9,y:278.35},0).wait(1).to({x:1206.5,y:278.4},0).wait(1).to({x:1210},0).wait(1).to({x:1213.45,y:278.45},0).wait(1).to({x:1216.85},0).wait(1).to({x:1220.2},0).wait(1).to({x:1223.5,y:278.5},0).wait(1).to({x:1226.75},0).wait(1).to({x:1229.95},0).wait(1).to({x:1233.1},0).wait(1).to({x:1236.2,y:278.45},0).wait(1).to({x:1239.2},0).wait(1).to({x:1242.2},0).wait(1).to({x:1245.15,y:278.4},0).wait(1).to({x:1248,y:278.35},0).wait(1).to({x:1250.85,y:278.3},0).wait(1).to({x:1253.65},0).wait(1).to({x:1256.35,y:278.25},0).wait(1).to({x:1259.05,y:278.15},0).wait(1).to({x:1261.65,y:278.1},0).wait(1).to({x:1264.2,y:278.05},0).wait(1).to({x:1266.75,y:277.95},0).wait(1).to({x:1269.2,y:277.9},0).wait(1).to({x:1271.6,y:277.8},0).wait(1).to({x:1273.95,y:277.7},0).wait(1).to({x:1276.3,y:277.6},0).wait(1).to({x:1278.55,y:277.5},0).wait(1).to({x:1280.75,y:277.4},0).wait(1).to({x:1282.9,y:277.3},0).wait(1).to({x:1285,y:277.2},0).wait(1).to({x:1287.05,y:277.05},0).wait(1).to({x:1289,y:276.95},0).wait(1).to({x:1290.95,y:276.8},0).wait(1).to({x:1292.85,y:276.65},0).wait(1).to({x:1294.7,y:276.5},0).wait(1).to({x:1296.5,y:276.35},0).wait(1).to({x:1298.2,y:276.2},0).wait(1).to({x:1299.9,y:276.05},0).wait(1).to({x:1301.5,y:275.85},0).wait(1).to({x:1303.1,y:275.7},0).wait(1).to({x:1304.6,y:275.5},0).wait(1).to({x:1306.1,y:275.35},0).wait(1).to({x:1307.5,y:275.15},0).wait(1).to({x:1308.85,y:274.95},0).wait(1).to({x:1310.2,y:274.75},0).wait(1).to({x:1311.45,y:274.55},0).wait(1).to({x:1312.65,y:274.35},0).wait(1).to({x:1313.8,y:274.1},0).wait(1).to({x:1314.9,y:273.9},0).wait(1).to({x:1315.95,y:273.65},0).wait(1).to({x:1316.95,y:273.4},0).wait(1).to({x:1317.9,y:273.2},0).wait(1).to({x:1318.8,y:272.95},0).wait(1).to({x:1319.65,y:272.7},0).wait(1).to({x:1320.45,y:272.45},0).wait(1).to({x:1321.2,y:272.15},0).wait(1).to({x:1321.9,y:271.9},0).wait(1).to({x:1322.5,y:271.65},0).wait(1).to({x:1323.1,y:271.35},0).wait(1).to({x:1323.6,y:271.05},0).wait(1).to({x:1324.1,y:270.75},0).wait(1).to({x:1324.5,y:270.5},0).wait(1).to({x:1324.9,y:270.15},0).wait(1).to({x:1325.2,y:269.85},0).wait(1).to({x:1325.5,y:269.55},0).wait(1).to({x:1325.7,y:269.25},0).wait(1).to({x:1325.85,y:268.9},0).wait(1).to({x:1325.95,y:268.6},0).wait(1).to({x:1326.05,y:268.25},0).wait(1).to({y:267.9},0).wait(1).to({x:1326,y:267.55},0).wait(1).to({x:1325.9,y:267.2},0).wait(1).to({x:1325.75,y:266.85},0).wait(1).to({x:1325.55,y:266.5},0).wait(1).to({x:1325.3,y:266.1},0).wait(1).to({x:1324.95,y:265.75},0).wait(1).to({x:1324.6,y:265.35},0).wait(1).to({x:1324.2,y:265},0).wait(1).to({x:1323.75,y:264.6},0).wait(1).to({x:1323.2,y:264.2},0).wait(1).to({x:1322.65,y:263.8},0).wait(1).to({x:1322,y:263.4},0).wait(1).to({x:1321.35,y:263},0).wait(1).to({x:1320.6,y:262.55},0).wait(1).to({x:1319.85,y:262.15},0).wait(1).to({x:1319,y:261.7},0).wait(1).to({x:1318.1,y:261.25},0).wait(1).to({x:1317.15,y:260.85},0).wait(1).to({x:1316.2,y:260.4},0).wait(1).to({x:1315.15,y:259.95},0).wait(1).to({x:1314.05,y:259.45},0).wait(1).to({x:1312.9,y:259},0).wait(1).to({x:1311.7,y:258.55},0).wait(1).to({x:1310.45,y:258.05},0).wait(1).to({x:1309.15,y:257.6},0).wait(1).to({x:1307.8,y:257.1},0).wait(1).to({x:1306.35,y:256.6},0).wait(1).to({x:1304.9,y:256.1},0).wait(1).to({x:1303.4,y:255.6},0).wait(1).to({x:1301.8,y:255.1},0).wait(1).to({x:1300.2,y:254.6},0).wait(1).to({x:1298.5,y:254.05},0).wait(1).to({x:1296.8,y:253.55},0).wait(1).to({x:1295,y:253},0).wait(1).to({x:1293.2,y:252.5},0).wait(1).to({x:1291.3,y:251.95},0).wait(1).to({x:1289.35,y:251.4},0).wait(1).to({x:1287.4,y:250.85},0).wait(1).to({x:1285.35,y:250.3},0).wait(1).to({x:1283.25,y:249.7},0).wait(1).to({x:1281.1,y:249.15},0).wait(1).to({x:1278.9,y:248.55},0).wait(1).to({x:1276.65,y:248},0).wait(1).to({x:1274.35,y:247.4},0).wait(1).to({x:1272,y:246.8},0).wait(1).to({x:1269.55,y:246.2},0).wait(1).to({x:1267.1,y:245.6},0).wait(1).to({x:1264.6,y:245},0).wait(1).to({x:1262.05,y:244.4},0).wait(1).to({x:1259.4,y:243.75},0).wait(1).to({x:1256.75,y:243.15},0).wait(1).to({x:1254,y:242.5},0).wait(1).to({x:1251.25,y:241.85},0).wait(1).to({x:1248.4,y:241.25},0).wait(1).to({x:1245.5,y:240.6},0).wait(1).to({x:1242.6,y:239.95},0).wait(1));

	// Layer_4
	this.instance_2 = new lib.Symbol13();
	this.instance_2.setTransform(116.8,154.95,1,1,0,0,0,106,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:111.25,y:155.8},0).wait(1).to({x:105.9,y:156.7},0).wait(1).to({x:100.5,y:157.55},0).wait(1).to({x:95.2,y:158.4},0).wait(1).to({x:89.95,y:159.25},0).wait(1).to({x:84.8,y:160.1},0).wait(1).to({x:79.65,y:160.95},0).wait(1).to({x:74.6,y:161.75},0).wait(1).to({x:69.65,y:162.6},0).wait(1).to({x:64.7,y:163.4},0).wait(1).to({x:59.85,y:164.2},0).wait(1).to({x:55.05,y:165},0).wait(1).to({x:50.35,y:165.8},0).wait(1).to({x:45.7,y:166.6},0).wait(1).to({x:41.1,y:167.35},0).wait(1).to({x:36.55,y:168.15},0).wait(1).to({x:32.1,y:168.9},0).wait(1).to({x:27.65,y:169.65},0).wait(1).to({x:23.35,y:170.4},0).wait(1).to({x:19.05,y:171.15},0).wait(1).to({x:14.85,y:171.9},0).wait(1).to({x:10.7,y:172.65},0).wait(1).to({x:6.6,y:173.35},0).wait(1).to({x:2.6,y:174.05},0).wait(1).to({x:-1.35,y:174.75},0).wait(1).to({x:-5.25,y:175.45},0).wait(1).to({x:-9.05,y:176.15},0).wait(1).to({x:-12.85,y:176.85},0).wait(1).to({x:-16.55,y:177.55},0).wait(1).to({x:-20.15,y:178.2},0).wait(1).to({x:-23.7,y:178.85},0).wait(1).to({x:-27.25,y:179.55},0).wait(1).to({x:-30.65,y:180.2},0).wait(1).to({x:-34.05,y:180.8},0).wait(1).to({x:-37.35,y:181.45},0).wait(1).to({x:-40.6,y:182.1},0).wait(1).to({x:-43.75,y:182.7},0).wait(1).to({x:-46.9,y:183.3},0).wait(1).to({x:-49.95,y:183.95},0).wait(1).to({x:-52.9,y:184.55},0).wait(1).to({x:-55.85,y:185.1},0).wait(1).to({x:-58.7,y:185.7},0).wait(1).to({x:-61.5,y:186.3},0).wait(1).to({x:-64.2,y:186.85},0).wait(1).to({x:-66.9,y:187.4},0).wait(1).to({x:-69.5,y:188},0).wait(1).to({x:-72,y:188.55},0).wait(1).to({x:-74.5,y:189.05},0).wait(1).to({x:-76.9,y:189.6},0).wait(1).to({x:-79.2,y:190.15},0).wait(1).to({x:-81.5,y:190.65},0).wait(1).to({x:-83.7,y:191.15},0).wait(1).to({x:-85.85,y:191.7},0).wait(1).to({x:-87.95,y:192.2},0).wait(1).to({x:-89.95,y:192.65},0).wait(1).to({x:-91.9,y:193.15},0).wait(1).to({x:-93.8,y:193.65},0).wait(1).to({x:-95.6,y:194.1},0).wait(1).to({x:-97.4,y:194.55},0).wait(1).to({x:-99.05,y:195},0).wait(1).to({x:-100.7,y:195.45},0).wait(1).to({x:-102.25,y:195.9},0).wait(1).to({x:-103.75,y:196.35},0).wait(1).to({x:-105.2,y:196.8},0).wait(1).to({x:-106.55,y:197.2},0).wait(1).to({x:-107.9,y:197.6},0).wait(1).to({x:-109.1,y:198},0).wait(1).to({x:-110.3,y:198.4},0).wait(1).to({x:-111.4,y:198.8},0).wait(1).to({x:-112.45,y:199.2},0).wait(1).to({x:-113.45,y:199.55},0).wait(1).to({x:-114.35,y:199.95},0).wait(1).to({x:-115.2,y:200.3},0).wait(1).to({x:-116,y:200.65},0).wait(1).to({x:-116.7,y:201},0).wait(1).to({x:-117.4,y:201.35},0).wait(1).to({x:-118,y:201.7},0).wait(1).to({x:-118.5,y:202},0).wait(1).to({x:-118.95,y:202.35},0).wait(1).to({x:-119.35,y:202.65},0).wait(1).to({x:-119.7,y:202.95},0).wait(1).to({x:-120,y:203.25},0).wait(1).to({x:-120.2,y:203.55},0).wait(1).to({x:-120.35,y:203.8},0).wait(1).to({x:-120.4,y:204.1},0).wait(1).to({y:204.35},0).wait(1).to({x:-120.35,y:204.65},0).wait(1).to({x:-120.25,y:204.9},0).wait(1).to({x:-120.05,y:205.15},0).wait(1).to({x:-119.85,y:205.35},0).wait(1).to({x:-119.5,y:205.6},0).wait(1).to({x:-119.15,y:205.85},0).wait(1).to({x:-118.7,y:206.05},0).wait(1).to({x:-118.2,y:206.25},0).wait(1).to({x:-117.65,y:206.45},0).wait(1).to({x:-117,y:206.65},0).wait(1).to({x:-116.3,y:206.85},0).wait(1).to({x:-115.55,y:207.05},0).wait(1).to({x:-114.7,y:207.2},0).wait(1).to({x:-113.8,y:207.4},0).wait(1).to({x:-112.85,y:207.55},0).wait(1).to({x:-111.85,y:207.7},0).wait(1).to({x:-110.75,y:207.85},0).wait(1).to({x:-109.6,y:208},0).wait(1).to({x:-108.4,y:208.1},0).wait(1).to({x:-107.1,y:208.25},0).wait(1).to({x:-105.75,y:208.35},0).wait(1).to({x:-104.35,y:208.45},0).wait(1).to({x:-102.85,y:208.55},0).wait(1).to({x:-101.35,y:208.65},0).wait(1).to({x:-99.75,y:208.75},0).wait(1).to({x:-98.05,y:208.85},0).wait(1).to({x:-96.35,y:208.9},0).wait(1).to({x:-94.55,y:209},0).wait(1).to({x:-92.65,y:209.05},0).wait(1).to({x:-90.75,y:209.1},0).wait(1).to({x:-88.75,y:209.15},0).wait(1).to({x:-86.7,y:209.2},0).wait(1).to({x:-84.55},0).wait(1).to({x:-82.4,y:209.25},0).wait(1).to({x:-80.15},0).wait(1).to({x:-77.8},0).wait(1).to({x:-75.45},0).wait(1).to({x:-73},0).wait(1).to({x:-70.5},0).wait(1).to({x:-67.9},0).wait(1).to({x:-65.25,y:209.2},0).wait(1).to({x:-62.55,y:209.15},0).wait(1).to({x:-59.8},0).wait(1).to({x:-56.95,y:209.1},0).wait(1).to({x:-54.05,y:209.05},0).wait(1).to({x:-51.1,y:208.95},0).wait(1).to({x:-48.05,y:208.9},0).wait(1).to({x:-45,y:208.8},0).wait(1).to({x:-41.8,y:208.75},0).wait(1).to({x:-38.6,y:208.65},0).wait(1).to({x:-35.3,y:208.55},0).wait(1).to({x:-31.95,y:208.45},0).wait(1).to({x:-28.55,y:208.35},0).wait(1).to({x:-25.05,y:208.2},0).wait(1).to({x:-21.5,y:208.1},0).wait(1).to({x:-17.9,y:207.95},0).wait(1).to({x:-14.25,y:207.8},0).wait(1).to({x:-10.5,y:207.65},0).wait(1).to({x:-6.7,y:207.5},0).wait(1).to({x:-2.8,y:207.35},0).wait(1).to({x:1.1,y:207.15},0).wait(1).to({x:5.1,y:207},0).wait(1).to({x:9.2,y:206.8},0).wait(1).to({x:13.3,y:206.6},0).wait(1).to({x:17.5,y:206.4},0).wait(1).to({x:21.75,y:206.2},0).wait(1).to({x:26.1,y:206},0).wait(1).to({x:30.45,y:205.8},0).wait(1).to({x:34.9,y:205.55},0).wait(1).to({x:39.45,y:205.3},0).wait(1).to({x:44,y:205.1},0).wait(1).to({x:48.65,y:204.85},0).wait(1).to({x:53.35,y:204.55},0).wait(1).to({x:58.15,y:204.3},0).wait(1).to({x:63,y:204.05},0).wait(1).to({x:67.9,y:203.75},0).wait(1).to({x:72.85,y:203.45},0).wait(1).to({x:77.9,y:203.2},0).wait(1).to({x:83,y:202.9},0).wait(1).to({x:88.15,y:202.55},0).wait(1).to({x:93.4,y:202.25},0).wait(1).to({x:98.65,y:201.95},0).wait(1).to({x:104.05,y:201.6},0).wait(1).to({x:109.4,y:201.25},0).wait(1).to({x:114.9,y:200.95},0).wait(1).to({x:120.45,y:200.6},0).wait(1).to({x:126.05,y:200.2},0).wait(1).to({x:131.75,y:199.85},0).wait(1).to({x:137.5,y:199.5},0).wait(1).to({x:143.3,y:199.1},0).wait(1).to({x:149.15,y:198.7},0).wait(1).to({x:155.1,y:198.35},0).wait(1).to({x:161.1,y:197.95},0).wait(1).to({x:167.15,y:197.5},0).wait(1).to({x:173.3,y:197.1},0).wait(1).to({x:179.5,y:196.7},0).wait(1).to({x:185.75,y:196.25},0).wait(1).to({x:192.1,y:195.8},0).wait(1).to({x:198.5,y:195.35},0).wait(1).to({x:204.95,y:194.9},0).wait(1).to({x:211.45,y:194.45},0).wait(1).to({x:218.05,y:194},0).wait(1).to({x:224.7,y:193.55},0).wait(1).to({x:231.4,y:193.05},0).wait(1).to({x:238.2,y:192.55},0).wait(1).to({x:245.05,y:192.05},0).wait(1).to({x:251.95,y:191.55},0).wait(1).to({x:258.95,y:191.05},0).wait(1).to({x:265.95,y:190.55},0).wait(1).to({x:273.05,y:190},0).wait(1).to({x:280.25,y:189.5},0).wait(1).to({x:287.45,y:188.95},0).wait(1).to({x:294.75,y:188.4},0).wait(1).to({x:302.15,y:187.85},0).wait(1).to({x:309.55,y:187.3},0).wait(1).to({x:317.05,y:186.75},0).wait(1).to({x:324.6,y:186.15},0).wait(1).to({x:332.25,y:185.6},0).wait(1).to({x:339.9,y:185},0).wait(1).to({x:347.65,y:184.4},0).wait(1).to({x:355.5,y:183.8},0).wait(1).to({x:363.35,y:183.2},0).wait(1).to({x:371.3,y:182.55},0).wait(1).to({x:379.3,y:181.95},0).wait(1).to({x:387.4,y:181.3},0).wait(1).to({x:395.5,y:180.65},0).wait(1).to({x:403.7,y:180.05},0).wait(1).to({x:412,y:179.35},0).wait(1).to({x:420.3,y:178.7},0).wait(1).to({x:428.7,y:178.05},0).wait(1).to({x:437.2,y:177.35},0).wait(1).to({x:445.7,y:176.7},0).wait(1).to({x:454.3,y:176},0).wait(1).to({x:462.95,y:175.3},0).wait(1).to({x:471.65,y:174.6},0).wait(1).to({x:480.45,y:173.9},0).wait(1).to({x:489.3,y:173.2},0).wait(1).to({x:498.2,y:172.45},0).wait(1).to({x:507.2,y:171.7},0).wait(1).to({x:516.25,y:171},0).wait(1).to({x:525.35,y:170.25},0).wait(1).to({x:534.5,y:169.5},0).wait(1).to({x:543.75,y:168.7},0).wait(1).to({x:553.05,y:167.95},0).wait(1).to({x:562.4,y:167.2},0).wait(1).to({x:571.85,y:166.4},0).wait(1).to({x:581.35,y:165.6},0).wait(1).to({x:590.9,y:164.8},0).wait(1).to({x:600.5,y:164},0).wait(1).to({x:610.2,y:163.2},0).wait(1).to({x:619.95,y:162.4},0).wait(1).to({x:629.8,y:161.55},0).wait(1).to({x:639.65,y:160.7},0).wait(1).to({x:649.6,y:159.9},0).wait(1).to({x:659.6,y:159.05},0).wait(1).to({x:669.7,y:158.2},0).wait(1).to({x:679.85,y:157.3},0).wait(1).to({x:690.05,y:156.45},0).wait(1).to({x:700.3,y:155.6},0).wait(1).to({x:710.65,y:154.7},0).wait(1).to({x:721.05,y:153.8},0).wait(1).to({x:731.5,y:152.9},0).wait(1).to({x:742.05,y:152},0).wait(1).to({x:752.6,y:151.1},0).wait(1).to({x:763.3,y:150.2},0).wait(1).to({x:774,y:149.25},0).wait(1).to({x:784.8,y:148.3},0).wait(1).to({x:795.65,y:147.4},0).wait(1).to({x:806.55,y:146.45},0).wait(1).to({x:817.55,y:145.5},0).wait(1).to({x:828.55,y:144.5},0).wait(1).to({x:839.7,y:143.55},0).wait(1).to({x:850.85,y:142.55},0).wait(1).to({x:862.1,y:141.6},0).wait(1).to({x:873.4,y:140.6},0).wait(1).to({x:884.75,y:139.6},0).wait(1).to({x:896.2,y:138.6},0).wait(1).to({x:907.7,y:137.6},0).wait(1).to({x:919.25,y:136.55},0).wait(1).to({x:930.85,y:135.55},0).wait(1).to({x:942.55,y:134.5},0).wait(1).to({x:954.3,y:133.45},0).wait(1).to({x:966.1,y:132.4},0).wait(1).to({x:978,y:131.35},0).wait(1).to({x:989.95,y:130.3},0).wait(1).to({x:1001.95,y:129.25},0).wait(1).to({x:1014.05,y:128.15},0).wait(1).to({x:1026.15,y:127.05},0).wait(1).to({x:1038.35,y:126},0).wait(1).to({x:1050.65,y:124.9},0).wait(1).to({x:1062.95,y:123.75},0).wait(1).to({x:1075.35,y:122.65},0).wait(1).to({x:1087.85,y:121.55},0).wait(1).to({x:1100.35,y:120.4},0).wait(1).to({x:1112.95,y:119.3},0).wait(1).to({x:1125.6,y:118.15},0).wait(1).to({x:1138.3,y:117},0).wait(1).to({x:1151.1,y:115.85},0).wait(1).to({x:1163.95,y:114.7},0).wait(1).to({x:1176.85,y:113.5},0).wait(1).to({x:1189.85,y:112.35},0).wait(1).to({x:1202.85,y:111.15},0).wait(1).to({x:1216,y:109.95},0).wait(1).to({x:1229.15,y:108.75},0).wait(1).to({x:1242.4,y:107.55},0).wait(1).to({x:1255.7,y:106.35},0).wait(1).to({x:1269.05,y:105.1},0).wait(1).to({x:1282.45,y:103.9},0).wait(1).to({x:1295.95,y:102.65},0).wait(1).to({x:1309.5,y:101.4},0).wait(1).to({x:1323.15,y:100.15},0).wait(1).to({x:1336.8,y:98.9},0).wait(1).to({x:1350.55,y:97.65},0).wait(1).to({x:1364.35,y:96.4},0).wait(1).to({x:1378.25,y:95.1},0).wait(1).to({x:1392.2,y:93.8},0).wait(1).to({x:1406.2,y:92.5},0).wait(1).to({x:1420.25,y:91.25},0).wait(1).to({x:1434.4,y:89.9},0).wait(1).to({x:1448.6,y:88.6},0).wait(1).to({x:1462.85,y:87.3},0).wait(1).to({x:1477.2,y:85.95},0).wait(1).to({x:1491.6,y:84.65},0).wait(1).to({x:1488.55,y:83.6},0).wait(1).to({x:1485.5,y:82.65},0).wait(1).to({x:1482.4,y:81.65},0).wait(1).to({x:1479.35,y:80.7},0).wait(1).to({x:1476.25,y:79.7},0).wait(1).to({x:1473.1,y:78.75},0).wait(1).to({x:1470,y:77.8},0).wait(1).to({x:1466.8,y:76.9},0).wait(1).to({x:1463.65,y:75.95},0).wait(1).to({x:1460.45,y:75.05},0).wait(1).to({x:1457.25,y:74.15},0).wait(1).to({x:1454,y:73.25},0).wait(1).to({x:1450.8,y:72.4},0).wait(1).to({x:1447.5,y:71.5},0).wait(1).to({x:1444.25,y:70.65},0).wait(1).to({x:1440.95,y:69.8},0).wait(1).to({x:1437.65,y:68.95},0).wait(1).to({x:1434.3,y:68.1},0).wait(1).to({x:1430.95,y:67.3},0).wait(1).to({x:1427.6,y:66.5},0).wait(1).to({x:1424.2,y:65.7},0).wait(1).to({x:1420.8,y:64.9},0).wait(1).to({x:1417.35,y:64.1},0).wait(1).to({x:1413.95,y:63.35},0).wait(1).to({x:1410.5,y:62.55},0).wait(1).to({x:1407,y:61.8},0).wait(1).to({x:1403.5,y:61.1},0).wait(1).to({x:1400,y:60.35},0).wait(1).to({x:1396.5,y:59.6},0).wait(1).to({x:1392.95,y:58.9},0).wait(1).to({x:1389.4,y:58.2},0).wait(1).to({x:1385.8,y:57.5},0).wait(1).to({x:1382.2,y:56.85},0).wait(1).to({x:1378.6,y:56.15},0).wait(1).to({x:1374.95,y:55.5},0).wait(1).to({x:1371.3,y:54.85},0).wait(1).to({x:1367.65,y:54.2},0).wait(1).to({x:1363.95,y:53.55},0).wait(1).to({x:1360.25,y:52.95},0).wait(1).to({x:1356.55,y:52.3},0).wait(1).to({x:1352.8,y:51.7},0).wait(1).to({x:1349.05,y:51.1},0).wait(1).to({x:1345.3,y:50.55},0).wait(1).to({x:1341.5,y:49.95},0).wait(1).to({x:1337.7,y:49.4},0).wait(1).to({x:1333.9,y:48.85},0).wait(1).to({x:1330.05,y:48.3},0).wait(1).to({x:1326.2,y:47.75},0).wait(1).to({x:1322.3,y:47.25},0).wait(1).to({x:1318.4,y:46.7},0).wait(1).to({x:1314.5,y:46.2},0).wait(1).to({x:1310.6,y:45.7},0).wait(1).to({x:1306.65,y:45.25},0).wait(1).to({x:1302.65,y:44.75},0).wait(1).to({x:1298.7,y:44.3},0).wait(1).to({x:1294.7,y:43.85},0).wait(1).to({x:1290.65,y:43.4},0).wait(1).to({x:1286.65,y:42.95},0).wait(1).to({x:1282.6,y:42.55},0).wait(1).to({x:1278.5,y:42.1},0).wait(1).to({x:1274.45,y:41.75},0).wait(1).to({x:1270.35,y:41.35},0).wait(1).to({x:1266.2,y:40.95},0).wait(1).to({x:1262.05,y:40.6},0).wait(1).to({x:1257.9,y:40.25},0).wait(1).to({x:1253.75,y:39.85},0).wait(1).to({x:1249.55,y:39.5},0).wait(1).to({x:1245.35,y:39.2},0).wait(1).to({x:1241.1,y:38.85},0).wait(1).to({x:1236.9,y:38.55},0).wait(1).to({x:1232.6,y:38.25},0).wait(1).to({x:1228.35,y:37.95},0).wait(1).to({x:1224.05,y:37.65},0).wait(1).to({x:1219.75,y:37.35},0).wait(1).to({x:1215.4,y:37.1},0).wait(1).to({x:1211.05,y:36.85},0).wait(1).to({x:1206.7,y:36.6},0).wait(1).to({x:1202.3,y:36.35},0).wait(1).to({x:1197.9,y:36.1},0).wait(1).to({x:1193.45,y:35.9},0).wait(1).to({x:1189.05,y:35.7},0).wait(1).to({x:1184.6,y:35.5},0).wait(1).to({x:1180.1,y:35.3},0).wait(1).to({x:1175.6,y:35.1},0).wait(1).to({x:1171.1,y:34.95},0).wait(1).to({x:1166.6,y:34.8},0).wait(1).to({x:1162.05,y:34.65},0).wait(1).to({x:1157.5,y:34.5},0).wait(1).to({x:1152.9,y:34.35},0).wait(1).to({x:1148.3,y:34.25},0).wait(1).to({x:1143.7,y:34.15},0).wait(1).to({x:1139.1,y:34.05},0).wait(1).to({x:1134.45,y:33.95},0).wait(1).to({x:1129.75,y:33.85},0).wait(1).to({x:1125.1,y:33.8},0).wait(1).to({x:1120.4,y:33.7},0).wait(1).to({x:1115.65,y:33.65},0).wait(1).to({x:1110.95,y:33.6},0).wait(1).to({x:1106.2},0).wait(1).to({x:1101.4,y:33.55},0).wait(1).to({x:1096.6},0).wait(1).to({x:1091.8},0).wait(1).to({x:1087},0).wait(1).to({x:1082.15},0).wait(1).to({x:1077.3,y:33.6},0).wait(1).to({x:1072.4,y:33.65},0).wait(1).to({x:1067.55,y:33.7},0).wait(1).to({x:1062.6,y:33.75},0).wait(1).to({x:1057.7,y:33.8},0).wait(1).to({x:1052.75,y:33.85},0).wait(1).to({x:1047.8,y:33.95},0).wait(1).to({x:1042.8,y:34.05},0).wait(1).to({x:1037.8,y:34.15},0).wait(1).to({x:1032.8,y:34.25},0).wait(1).to({x:1027.75,y:34.4},0).wait(1).to({x:1022.7,y:34.5},0).wait(1).to({x:1017.65,y:34.65},0).wait(1).to({x:1012.55,y:34.8},0).wait(1).to({x:1007.45,y:35},0).wait(1).to({x:1002.3,y:35.15},0).wait(1).to({x:997.15,y:35.35},0).wait(1).to({x:992,y:35.55},0).wait(1).to({x:986.85,y:35.75},0).wait(1).to({x:981.65,y:35.95},0).wait(1).to({x:976.45,y:36.15},0).wait(1).to({x:971.2,y:36.4},0).wait(1).to({x:965.95,y:36.65},0).wait(1).to({x:960.7,y:36.9},0).wait(1).to({x:955.4,y:37.15},0).wait(1).to({x:950.1,y:37.4},0).wait(1).to({x:944.8,y:37.7},0).wait(1).to({x:939.45,y:38},0).wait(1).to({x:934.1,y:38.3},0).wait(1).to({x:928.75,y:38.6},0).wait(1).to({x:923.35,y:38.95},0).wait(1).to({x:917.95,y:39.25},0).wait(1).to({x:912.55,y:39.6},0).wait(1).to({x:907.1,y:39.95},0).wait(1).to({x:901.65,y:40.3},0).wait(1).to({x:896.15,y:40.65},0).wait(1).to({x:890.65,y:41.05},0).wait(1).to({x:885.15,y:41.45},0).wait(1).to({x:879.65,y:41.85},0).wait(1).to({x:874.1,y:42.2},0).wait(1).to({x:868.5,y:42.6},0).wait(1).to({x:862.95,y:43.05},0).wait(1).to({x:857.35,y:43.5},0).wait(1).to({x:851.7,y:43.95},0).wait(1).to({x:846.1,y:44.4},0).wait(1).to({x:840.45,y:44.85},0).wait(1).to({x:834.75,y:45.35},0).wait(1).to({x:829.1,y:45.8},0).wait(1).to({x:823.35,y:46.3},0).wait(1).to({x:817.65,y:46.8},0).wait(1).to({x:811.9,y:47.35},0).wait(1).to({x:806.15,y:47.85},0).wait(1).to({x:800.35,y:48.4},0).wait(1).to({x:794.6,y:48.95},0).wait(1).to({x:788.75,y:49.5},0).wait(1).to({x:782.95,y:50.05},0).wait(1).to({x:777.1,y:50.65},0).wait(1).to({x:771.2,y:51.2},0).wait(1).to({x:765.35,y:51.8},0).wait(1).to({x:759.45,y:52.4},0).wait(1).to({x:753.5,y:53.05},0).wait(1).to({x:747.6,y:53.65},0).wait(1).to({x:741.65,y:54.3},0).wait(1).to({x:735.65,y:54.95},0).wait(1).to({x:729.65,y:55.6},0).wait(1).to({x:723.65,y:56.25},0).wait(1).to({x:717.65,y:56.95},0).wait(1).to({x:711.6,y:57.6},0).wait(1).to({x:705.55,y:58.3},0).wait(1).to({x:699.45,y:59},0).wait(1).to({x:693.35,y:59.7},0).wait(1).to({x:687.25,y:60.45},0).wait(1).to({x:681.1,y:61.2},0).wait(1).to({x:674.95,y:61.9},0).wait(1).to({x:668.8,y:62.65},0).wait(1).to({x:662.6,y:63.45},0).wait(1).to({x:656.4,y:64.2},0).wait(1).to({x:650.15,y:65},0).wait(1).to({x:643.95,y:65.8},0).wait(1).to({x:637.65,y:66.6},0).wait(1).to({x:631.4,y:67.4},0).wait(1).to({x:625.1,y:68.2},0).wait(1).to({x:618.8,y:69.05},0).wait(1).to({x:612.45,y:69.9},0).wait(1).to({x:606.1,y:70.75},0).wait(1).to({x:599.75,y:71.6},0).wait(1).to({x:593.35,y:72.45},0).wait(1).to({x:586.95,y:73.35},0).wait(1).to({x:580.55,y:74.25},0).wait(1).to({x:574.1,y:75.15},0).wait(1).to({x:567.65,y:76.05},0).wait(1).to({x:561.15,y:76.95},0).wait(1).to({x:554.7,y:77.9},0).wait(1).to({x:548.15,y:78.85},0).wait(1).to({x:541.65,y:79.8},0).wait(1).to({x:535.1,y:80.75},0).wait(1).to({x:528.55,y:81.7},0).wait(1).to({x:521.95,y:82.7},0).wait(1).to({x:515.35,y:83.7},0).wait(1).to({x:508.75,y:84.7},0).wait(1).to({x:502.1,y:85.7},0).wait(1).to({x:495.45,y:86.7},0).wait(1).to({x:488.75,y:87.75},0).wait(1).to({x:482.1,y:88.75},0).wait(1).to({x:475.4,y:89.8},0).wait(1).to({x:468.65,y:90.9},0).wait(1).to({x:461.9,y:91.95},0).wait(1).to({x:455.15,y:93.05},0).wait(1).to({x:448.35,y:94.1},0).wait(1).to({x:441.55,y:95.2},0).wait(1).to({x:434.75,y:96.3},0).wait(1).to({x:427.9,y:97.45},0).wait(1).to({x:421.05,y:98.55},0).wait(1).to({x:414.2,y:99.7},0).wait(1).to({x:407.3,y:100.85},0).wait(1).to({x:400.4,y:102},0).wait(1).to({x:393.45,y:103.2},0).wait(1).to({x:386.55,y:104.35},0).wait(1).to({x:379.55,y:105.55},0).wait(1).to({x:372.6,y:106.75},0).wait(1).to({x:365.6,y:107.95},0).wait(1).to({x:358.55,y:109.15},0).wait(1).to({x:351.55,y:110.4},0).wait(1).to({x:344.5,y:111.65},0).wait(1).to({x:337.4,y:112.85},0).wait(1).to({x:330.35,y:114.15},0).wait(1).to({x:323.2,y:115.4},0).wait(1).to({x:316.1,y:116.65},0).wait(1).to({x:308.95,y:117.95},0).wait(1).to({x:301.8,y:119.25},0).wait(1).to({x:294.6,y:120.55},0).wait(1).to({x:287.4,y:121.9},0).wait(1).to({x:280.2,y:123.2},0).wait(1).to({x:272.95,y:124.55},0).wait(1).to({x:265.7,y:125.9},0).wait(1).to({x:258.45,y:127.25},0).wait(1).to({x:251.15,y:128.6},0).wait(1).to({x:243.85,y:130},0).wait(1).to({x:236.5,y:131.4},0).wait(1).to({x:229.15,y:132.75},0).wait(1).to({x:221.8,y:134.2},0).wait(1).to({x:214.4,y:135.6},0).wait(1).to({x:207,y:137},0).wait(1).to({x:199.6,y:138.45},0).wait(1).to({x:192.15,y:139.9},0).wait(1).to({x:184.7,y:141.35},0).wait(1).to({x:177.25,y:142.85},0).wait(1).to({x:169.75,y:144.3},0).wait(1).to({x:162.25,y:145.8},0).wait(1).to({x:154.7,y:147.3},0).wait(1).to({x:147.15,y:148.8},0).wait(1).to({x:139.6,y:150.3},0).wait(1).to({x:132,y:151.85},0).wait(1).to({x:124.4,y:153.4},0).wait(1).to({x:116.8,y:154.95},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-247.3,-57.5,1947.8,378);


(lib.ballons = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5DC6CF").s().p("Aj4B1IAAiPQAAgmAagaQAagaAmAAIE9AAQAmAAAaAaQAaAaAAAmIAACPg");
	this.shape.setTransform(102,399.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

	// Layer_2
	this.instance = new lib.Symbol9();
	this.instance.setTransform(107.85,276.65,1,1,0,0,0,42,127.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:126.8,rotation:-0.2631,x:107.35,y:276},0).wait(1).to({rotation:-0.5263,x:106.8},0).wait(1).to({rotation:-0.7894,x:106.3},0).wait(1).to({rotation:-1.0526,x:105.8,y:276.05},0).wait(1).to({rotation:-1.3157,x:105.25,y:276},0).wait(1).to({rotation:-1.5788,x:104.75,y:276.05},0).wait(1).to({rotation:-1.842,x:104.2},0).wait(1).to({rotation:-2.1051,x:103.65,y:276},0).wait(1).to({rotation:-2.3682,x:103.2},0).wait(1).to({rotation:-2.6314,x:102.65},0).wait(1).to({rotation:-2.8945,x:102.15,y:276.05},0).wait(1).to({rotation:-3.1577,x:101.65},0).wait(1).to({rotation:-3.4208,x:101.15,y:276},0).wait(1).to({rotation:-3.6839,x:100.6,y:276.05},0).wait(1).to({rotation:-3.9471,x:100.1,y:276},0).wait(1).to({rotation:-4.2102,x:99.55},0).wait(1).to({rotation:-4.4734,x:99.05},0).wait(1).to({rotation:-4.7365,x:98.5,y:276.05},0).wait(1).to({rotation:-4.9996,x:98.05,y:276},0).wait(1).to({rotation:-5.2628,x:97.5},0).wait(1).to({rotation:-5.5259,x:97},0).wait(1).to({rotation:-5.789,x:96.5},0).wait(1).to({rotation:-6.0522,x:95.9},0).wait(1).to({rotation:-6.3153,x:95.45,y:276.05},0).wait(1).to({rotation:-6.5785,x:94.95},0).wait(1).to({rotation:-6.8416,x:94.4},0).wait(1).to({rotation:-7.1047,x:93.95,y:276},0).wait(1).to({rotation:-7.3679,x:93.35},0).wait(1).to({rotation:-7.631,x:92.9,y:276.05},0).wait(1).to({rotation:-7.8942,x:92.35},0).wait(1).to({rotation:-8.1573,x:91.8,y:276},0).wait(1).to({rotation:-8.4204,x:91.3,y:276.05},0).wait(1).to({rotation:-8.6836,x:90.8},0).wait(1).to({rotation:-8.9467,x:90.3,y:276},0).wait(1).to({rotation:-9.2099,x:89.75,y:276.05},0).wait(1).to({rotation:-9.473,x:89.25,y:276},0).wait(1).to({rotation:-9.7361,x:88.75},0).wait(1).to({rotation:-9.9993,x:88.2},0).wait(1).to({rotation:-10.2624,x:87.75},0).wait(1).to({rotation:-10.5255,x:87.2,y:276.05},0).wait(1).to({rotation:-10.7887,x:86.7},0).wait(1).to({rotation:-11.0518,x:86.15},0).wait(1).to({rotation:-11.315,x:85.7},0).wait(1).to({rotation:-11.5781,x:85.15,y:276},0).wait(1).to({rotation:-11.8412,x:84.6,y:276.05},0).wait(1).to({rotation:-12.1044,x:84.1},0).wait(1).to({rotation:-12.3675,x:83.6},0).wait(1).to({rotation:-12.6307,x:83.1},0).wait(1).to({rotation:-12.8938,x:82.55},0).wait(1).to({rotation:-13.1569,x:82},0).wait(1).to({rotation:-13.4201,x:81.55},0).wait(1).to({rotation:-13.6832,x:81},0).wait(1).to({rotation:-13.9463,x:80.45},0).wait(1).to({rotation:-14.2095,x:79.95},0).wait(1).to({rotation:-14.4726,x:79.45},0).wait(1).to({rotation:-14.7358,x:78.9},0).wait(1).to({rotation:-14.9989,x:78.4,y:276.1},0).wait(1).to({rotation:-14.757,x:78.9,y:276.05},0).wait(1).to({rotation:-14.5151,x:79.4,y:276},0).wait(1).to({rotation:-14.2731,x:79.85,y:276.05},0).wait(1).to({rotation:-14.0312,x:80.35,y:276},0).wait(1).to({rotation:-13.7893,x:80.8,y:276.05},0).wait(1).to({rotation:-13.5474,x:81.3,y:276},0).wait(1).to({rotation:-13.3055,x:81.75,y:276.05},0).wait(1).to({rotation:-13.0636,x:82.2,y:276},0).wait(1).to({rotation:-12.8216,x:82.7,y:276.05},0).wait(1).to({rotation:-12.5797,x:83.15},0).wait(1).to({rotation:-12.3378,x:83.65},0).wait(1).to({rotation:-12.0959,x:84.05},0).wait(1).to({rotation:-11.854,x:84.6,y:276},0).wait(1).to({rotation:-11.6121,x:85.05,y:276.05},0).wait(1).to({rotation:-11.3701,x:85.55,y:276},0).wait(1).to({rotation:-11.1282,x:85.95,y:276.05},0).wait(1).to({rotation:-10.8863,x:86.5,y:276},0).wait(1).to({rotation:-10.6444,x:86.95,y:276.05},0).wait(1).to({rotation:-10.4025,x:87.45,y:276},0).wait(1).to({rotation:-10.1605,x:87.9,y:276.05},0).wait(1).to({rotation:-9.9186,x:88.35,y:276},0).wait(1).to({rotation:-9.6767,x:88.85,y:276.05},0).wait(1).to({rotation:-9.4348,x:89.35},0).wait(1).to({rotation:-9.1929,x:89.8,y:276},0).wait(1).to({rotation:-8.951,x:90.3},0).wait(1).to({rotation:-8.709,x:90.75,y:276.05},0).wait(1).to({rotation:-8.4671,x:91.2,y:276},0).wait(1).to({rotation:-8.2252,x:91.7,y:276.05},0).wait(1).to({rotation:-7.9833,x:92.15,y:276},0).wait(1).to({rotation:-7.7414,x:92.65,y:276.05},0).wait(1).to({rotation:-7.4994,x:93.15,y:276},0).wait(1).to({rotation:-7.2575,x:93.55,y:276.05},0).wait(1).to({rotation:-7.0156,x:94.1,y:276},0).wait(1).to({rotation:-6.7737,x:94.55},0).wait(1).to({rotation:-6.5318,x:95,y:276.05},0).wait(1).to({rotation:-6.2899,x:95.5},0).wait(1).to({rotation:-6.0479,x:95.95},0).wait(1).to({rotation:-5.806,x:96.5},0).wait(1).to({rotation:-5.5641,x:96.9},0).wait(1).to({rotation:-5.3222,x:97.35,y:276},0).wait(1).to({rotation:-5.0803,x:97.9,y:276.05},0).wait(1).to({rotation:-4.8384,x:98.35,y:276},0).wait(1).to({rotation:-4.5964,x:98.8,y:276.05},0).wait(1).to({rotation:-4.3545,x:99.35},0).wait(1).to({rotation:-4.1126,x:99.8,y:276},0).wait(1).to({rotation:-3.8707,x:100.2},0).wait(1).to({rotation:-3.6288,x:100.65,y:276.05},0).wait(1).to({rotation:-3.3868,x:101.2},0).wait(1).to({rotation:-3.1449,x:101.65,y:276},0).wait(1).to({rotation:-2.903,x:102.1},0).wait(1).to({rotation:-2.6611,x:102.6},0).wait(1).to({rotation:-2.4192,x:103.05,y:276.05},0).wait(1).to({rotation:-2.1773,x:103.5,y:276},0).wait(1).to({rotation:-1.9353,x:104.05,y:276.05},0).wait(1).to({rotation:-1.6934,x:104.55,y:276},0).wait(1).to({rotation:-1.4515,x:105,y:276.05},0).wait(1).to({rotation:-1.2096,x:105.5,y:276},0).wait(1).to({rotation:-0.9677,x:105.95,y:276.05},0).wait(1).to({rotation:-0.7258,x:106.4,y:276},0).wait(1).to({rotation:-0.4838,x:106.85,y:276.05},0).wait(1).to({rotation:-0.2419,x:107.35,y:276},0).wait(1).to({rotation:0,x:107.85,y:276.05},0).wait(1));

	// Layer_3
	this.instance_1 = new lib.Symbol8();
	this.instance_1.setTransform(54.6,281.95,1,1,0,0,0,54.6,122.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:54.5,regY:121.8,rotation:0.1166,x:54.85,y:281.5},0).wait(1).to({rotation:0.2332,x:55.25},0).wait(1).to({rotation:0.3498,x:55.6,y:281.55},0).wait(1).to({rotation:0.4664,x:56},0).wait(1).to({rotation:0.583,x:56.35},0).wait(1).to({rotation:0.6996,x:56.75,y:281.5},0).wait(1).to({rotation:0.8162,x:57.1,y:281.55},0).wait(1).to({rotation:0.9328,x:57.5},0).wait(1).to({rotation:1.0494,x:57.85},0).wait(1).to({rotation:1.166,x:58.25,y:281.5},0).wait(1).to({rotation:1.2826,x:58.65},0).wait(1).to({rotation:1.3992,x:59.05,y:281.55},0).wait(1).to({rotation:1.5158,x:59.45,y:281.5},0).wait(1).to({rotation:1.6324,x:59.8},0).wait(1).to({rotation:1.749,x:60.15},0).wait(1).to({rotation:1.8656,x:60.5},0).wait(1).to({rotation:1.9822,x:60.9,y:281.55},0).wait(1).to({rotation:2.0988,x:61.3,y:281.5},0).wait(1).to({rotation:2.2154,x:61.65},0).wait(1).to({rotation:2.332,x:62.05},0).wait(1).to({rotation:2.4486,x:62.4,y:281.55},0).wait(1).to({rotation:2.5652,x:62.8},0).wait(1).to({rotation:2.6818,x:63.2,y:281.5},0).wait(1).to({rotation:2.7984,x:63.55},0).wait(1).to({rotation:2.915,x:63.95},0).wait(1).to({rotation:3.0316,x:64.25,y:281.55},0).wait(1).to({rotation:3.1482,x:64.65,y:281.5},0).wait(1).to({rotation:3.2648,x:65.05},0).wait(1).to({rotation:3.3814,x:65.4},0).wait(1).to({rotation:3.498,x:65.8,y:281.45},0).wait(1).to({rotation:3.6146,x:66.2,y:281.55},0).wait(1).to({rotation:3.7312,x:66.6},0).wait(1).to({rotation:3.8478,x:67,y:281.5},0).wait(1).to({rotation:3.9644,x:67.35},0).wait(1).to({rotation:4.081,x:67.7,y:281.55},0).wait(1).to({rotation:4.1976,x:68.1,y:281.5},0).wait(1).to({rotation:4.3142,x:68.5},0).wait(1).to({rotation:4.4308,x:68.85,y:281.55},0).wait(1).to({rotation:4.5474,x:69.25,y:281.5},0).wait(1).to({rotation:4.664,x:69.6,y:281.55},0).wait(1).to({rotation:4.7806,x:69.95},0).wait(1).to({rotation:4.8972,x:70.35,y:281.5},0).wait(1).to({rotation:5.0138,x:70.75},0).wait(1).to({rotation:5.1304,x:71.1},0).wait(1).to({rotation:5.247,x:71.45,y:281.55},0).wait(1).to({rotation:5.3636,x:71.85,y:281.5},0).wait(1).to({rotation:5.4802,x:72.25},0).wait(1).to({rotation:5.5968,x:72.6},0).wait(1).to({rotation:5.7134,x:73.05,y:281.55},0).wait(1).to({rotation:5.83,x:73.4,y:281.5},0).wait(1).to({rotation:5.9466,x:73.75,y:281.55},0).wait(1).to({rotation:6.0632,x:74.15,y:281.5},0).wait(1).to({rotation:6.1798,x:74.55},0).wait(1).to({rotation:6.2964,x:74.9,y:281.55},0).wait(1).to({rotation:6.413,x:75.25},0).wait(1).to({rotation:6.5296,x:75.65,y:281.5},0).wait(1).to({rotation:6.6462,x:76.05,y:281.55},0).wait(1).to({rotation:6.7628,x:76.4,y:281.5},0).wait(1).to({rotation:6.8794,x:76.75},0).wait(1).to({rotation:6.996,x:77.15,y:281.55},0).wait(1).to({rotation:7.1126,x:77.55,y:281.5},0).wait(1).to({rotation:7.2292,x:77.9,y:281.55},0).wait(1).to({rotation:7.1023,x:77.55,y:281.5},0).wait(1).to({rotation:6.9755,x:77.1},0).wait(1).to({rotation:6.8487,x:76.7,y:281.55},0).wait(1).to({rotation:6.7219,x:76.25},0).wait(1).to({rotation:6.595,x:75.85,y:281.5},0).wait(1).to({rotation:6.4682,x:75.45},0).wait(1).to({rotation:6.3414,x:75.05},0).wait(1).to({rotation:6.2145,x:74.65,y:281.55},0).wait(1).to({rotation:6.0877,x:74.25},0).wait(1).to({rotation:5.9609,x:73.8,y:281.5},0).wait(1).to({rotation:5.8341,x:73.35},0).wait(1).to({rotation:5.7072,x:73},0).wait(1).to({rotation:5.5804,x:72.55},0).wait(1).to({rotation:5.4536,x:72.2,y:281.55},0).wait(1).to({rotation:5.3267,x:71.75,y:281.5},0).wait(1).to({rotation:5.1999,x:71.35,y:281.55},0).wait(1).to({rotation:5.0731,x:70.95,y:281.5},0).wait(1).to({rotation:4.9463,x:70.5,y:281.55},0).wait(1).to({rotation:4.8194,x:70.1,y:281.5},0).wait(1).to({rotation:4.6926,x:69.7},0).wait(1).to({rotation:4.5658,x:69.3},0).wait(1).to({rotation:4.439,x:68.85},0).wait(1).to({rotation:4.3121,x:68.45},0).wait(1).to({rotation:4.1853,x:68.05},0).wait(1).to({rotation:4.0585,x:67.65},0).wait(1).to({rotation:3.9316,x:67.2},0).wait(1).to({rotation:3.8048,x:66.8},0).wait(1).to({rotation:3.678,x:66.45,y:281.55},0).wait(1).to({rotation:3.5512,x:66},0).wait(1).to({rotation:3.4243,x:65.6},0).wait(1).to({rotation:3.2975,x:65.15},0).wait(1).to({rotation:3.1707,x:64.75,y:281.5},0).wait(1).to({rotation:3.0439,x:64.35,y:281.55},0).wait(1).to({rotation:2.917,x:63.95,y:281.5},0).wait(1).to({rotation:2.7902,x:63.5},0).wait(1).to({rotation:2.6634,x:63.15},0).wait(1).to({rotation:2.5365,x:62.7,y:281.55},0).wait(1).to({rotation:2.4097,x:62.3},0).wait(1).to({rotation:2.2829,x:61.85,y:281.5},0).wait(1).to({rotation:2.1561,x:61.45},0).wait(1).to({rotation:2.0292,x:61.05},0).wait(1).to({rotation:1.9024,x:60.6,y:281.55},0).wait(1).to({rotation:1.7756,x:60.25},0).wait(1).to({rotation:1.6488,x:59.85,y:281.5},0).wait(1).to({rotation:1.5219,x:59.4},0).wait(1).to({rotation:1.3951,x:59.05,y:281.55},0).wait(1).to({rotation:1.2683,x:58.6,y:281.5},0).wait(1).to({rotation:1.1414,x:58.15},0).wait(1).to({rotation:1.0146,x:57.8,y:281.55},0).wait(1).to({rotation:0.8878,x:57.35},0).wait(1).to({rotation:0.761,x:56.95,y:281.5},0).wait(1).to({rotation:0.6341,x:56.55,y:281.55},0).wait(1).to({rotation:0.5073,x:56.1},0).wait(1).to({rotation:0.3805,x:55.7,y:281.5},0).wait(1).to({rotation:0.2537,x:55.3,y:281.55},0).wait(1).to({rotation:0.1268,x:54.9,y:281.5},0).wait(1).to({rotation:0,x:54.5,y:281.55},0).wait(1));

	// Layer_4
	this.instance_2 = new lib._908098();
	this.instance_2.setTransform(155.25,270.6,1,1,0,0,0,47.4,133.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:133,rotation:-0.112,x:155,y:270.15},0).wait(1).to({rotation:-0.2241,x:154.75},0).wait(1).to({rotation:-0.3361,x:154.6},0).wait(1).to({rotation:-0.4481,x:154.35,y:270.2},0).wait(1).to({rotation:-0.5602,x:154.1},0).wait(1).to({rotation:-0.6722,x:153.9},0).wait(1).to({rotation:-0.7842,x:153.65},0).wait(1).to({rotation:-0.8962,x:153.5},0).wait(1).to({rotation:-1.0083,x:153.25},0).wait(1).to({rotation:-1.1203,x:153,y:270.15},0).wait(1).to({rotation:-1.2323,x:152.8,y:270.2},0).wait(1).to({rotation:-1.3444,x:152.55,y:270.15},0).wait(1).to({rotation:-1.4564,x:152.4},0).wait(1).to({rotation:-1.5684,x:152.15},0).wait(1).to({rotation:-1.6805,x:151.95},0).wait(1).to({rotation:-1.7925,x:151.7},0).wait(1).to({rotation:-1.9045,x:151.4,y:270.1},0).wait(1).to({rotation:-2.0165,x:151.25,y:270.2},0).wait(1).to({rotation:-2.1286,x:151},0).wait(1).to({rotation:-2.2406,x:150.8},0).wait(1).to({rotation:-2.3526,x:150.55},0).wait(1).to({rotation:-2.4647,x:150.35},0).wait(1).to({rotation:-2.5767,x:150.15,y:270.15},0).wait(1).to({rotation:-2.6887,x:149.95,y:270.2},0).wait(1).to({rotation:-2.8008,x:149.7},0).wait(1).to({rotation:-2.9128,x:149.5},0).wait(1).to({rotation:-3.0248,x:149.25,y:270.15},0).wait(1).to({rotation:-3.1369,x:149.1},0).wait(1).to({rotation:-3.2489,x:148.8,y:270.2},0).wait(1).to({rotation:-3.3609,x:148.6,y:270.15},0).wait(1).to({rotation:-3.4729,x:148.35,y:270.2},0).wait(1).to({rotation:-3.585,x:148.15},0).wait(1).to({rotation:-3.697,x:147.9,y:270.15},0).wait(1).to({rotation:-3.809,x:147.75},0).wait(1).to({rotation:-3.9211,x:147.5,y:270.2},0).wait(1).to({rotation:-4.0331,x:147.3,y:270.15},0).wait(1).to({rotation:-4.1451,x:147.05},0).wait(1).to({rotation:-4.2572,x:146.8,y:270.2},0).wait(1).to({rotation:-4.3692,x:146.6,y:270.15},0).wait(1).to({rotation:-4.4812,x:146.4,y:270.2},0).wait(1).to({rotation:-4.5932,x:146.15,y:270.15},0).wait(1).to({rotation:-4.7053,x:145.95},0).wait(1).to({rotation:-4.8173,x:145.7,y:270.2},0).wait(1).to({rotation:-4.9293,x:145.5},0).wait(1).to({rotation:-5.0414,x:145.25},0).wait(1).to({rotation:-5.1534,x:145.05,y:270.15},0).wait(1).to({rotation:-5.2654,x:144.85,y:270.2},0).wait(1).to({rotation:-5.3775,x:144.6,y:270.15},0).wait(1).to({rotation:-5.4895,x:144.4},0).wait(1).to({rotation:-5.6015,x:144.15},0).wait(1).to({rotation:-5.7136,x:143.95,y:270.2},0).wait(1).to({rotation:-5.8256,x:143.75},0).wait(1).to({rotation:-5.9376,x:143.5},0).wait(1).to({rotation:-6.0496,x:143.3,y:270.15},0).wait(1).to({rotation:-6.1617,x:143.05,y:270.2},0).wait(1).to({rotation:-6.2737,x:142.85,y:270.15},0).wait(1).to({rotation:-6.3857,x:142.65},0).wait(1).to({rotation:-6.4978,x:142.4,y:270.2},0).wait(1).to({rotation:-6.6098,x:142.2,y:270.15},0).wait(1).to({rotation:-6.7218,x:141.9,y:270.2},0).wait(1).to({rotation:-6.8339,x:141.75,y:270.15},0).wait(1).to({rotation:-6.9459,x:141.55},0).wait(1).to({rotation:-6.824,x:141.75},0).wait(1).to({rotation:-6.7022,x:142},0).wait(1).to({rotation:-6.5803,x:142.25},0).wait(1).to({rotation:-6.4585,x:142.45},0).wait(1).to({rotation:-6.3366,x:142.75},0).wait(1).to({rotation:-6.2147,x:142.95},0).wait(1).to({rotation:-6.0929,x:143.2},0).wait(1).to({rotation:-5.971,x:143.45,y:270.2},0).wait(1).to({rotation:-5.8492,x:143.7,y:270.15},0).wait(1).to({rotation:-5.7273,x:143.9},0).wait(1).to({rotation:-5.6055,x:144.15},0).wait(1).to({rotation:-5.4836,x:144.4},0).wait(1).to({rotation:-5.3617,x:144.7},0).wait(1).to({rotation:-5.2399,x:144.9},0).wait(1).to({rotation:-5.118,x:145.1},0).wait(1).to({rotation:-4.9962,x:145.35},0).wait(1).to({rotation:-4.8743,x:145.65},0).wait(1).to({rotation:-4.7525,x:145.85},0).wait(1).to({rotation:-4.6306,x:146.1},0).wait(1).to({rotation:-4.5087,x:146.3},0).wait(1).to({rotation:-4.3869,x:146.55},0).wait(1).to({rotation:-4.265,x:146.8,y:270.2},0).wait(1).to({rotation:-4.1432,x:147.05},0).wait(1).to({rotation:-4.0213,x:147.35},0).wait(1).to({rotation:-3.8994,x:147.55},0).wait(1).to({rotation:-3.7776,x:147.75},0).wait(1).to({rotation:-3.6557,x:148.05},0).wait(1).to({rotation:-3.5339,x:148.25},0).wait(1).to({rotation:-3.412,x:148.45},0).wait(1).to({rotation:-3.2902,x:148.75},0).wait(1).to({rotation:-3.1683,x:149},0).wait(1).to({rotation:-3.0464,x:149.2},0).wait(1).to({rotation:-2.9246,x:149.5},0).wait(1).to({rotation:-2.8027,x:149.7},0).wait(1).to({rotation:-2.6809,x:149.9},0).wait(1).to({rotation:-2.559,x:150.2,y:270.15},0).wait(1).to({rotation:-2.4372,x:150.4,y:270.2},0).wait(1).to({rotation:-2.3153,x:150.6},0).wait(1).to({rotation:-2.1934,x:150.9},0).wait(1).to({rotation:-2.0716,x:151.1},0).wait(1).to({rotation:-1.9497,x:151.35,y:270.15},0).wait(1).to({rotation:-1.8279,x:151.65,y:270.2},0).wait(1).to({rotation:-1.706,x:151.85},0).wait(1).to({rotation:-1.5842,x:152.15},0).wait(1).to({rotation:-1.4623,x:152.35},0).wait(1).to({rotation:-1.3404,x:152.6,y:270.15},0).wait(1).to({rotation:-1.2186,x:152.85},0).wait(1).to({rotation:-1.0967,x:153.05},0).wait(1).to({rotation:-0.9749,x:153.3,y:270.2},0).wait(1).to({rotation:-0.853,x:153.55},0).wait(1).to({rotation:-0.7311,x:153.8},0).wait(1).to({rotation:-0.6093,x:154},0).wait(1).to({rotation:-0.4874,x:154.3},0).wait(1).to({rotation:-0.3656,x:154.5},0).wait(1).to({rotation:-0.2437,x:154.75},0).wait(1).to({rotation:-0.1219,x:155},0).wait(1).to({rotation:0,x:155.25},0).wait(1));

	// Layer_5
	this.instance_3 = new lib.Symbol7();
	this.instance_3.setTransform(63.95,231.8,1,1,0,0,0,45.1,172.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regY:171.7,rotation:0.1781,x:64.4,y:231.3},0).wait(1).to({rotation:0.3563,x:64.9},0).wait(1).to({rotation:0.5344,x:65.35,y:231.25},0).wait(1).to({rotation:0.7125,x:65.85,y:231.3},0).wait(1).to({rotation:0.8907,x:66.35},0).wait(1).to({rotation:1.0688,x:66.8,y:231.25},0).wait(1).to({rotation:1.247,x:67.3,y:231.3},0).wait(1).to({rotation:1.4251,x:67.8,y:231.25},0).wait(1).to({rotation:1.6032,x:68.25,y:231.3},0).wait(1).to({rotation:1.7814,x:68.75,y:231.25},0).wait(1).to({rotation:1.9595,x:69.2,y:231.3},0).wait(1).to({rotation:2.1376,x:69.65},0).wait(1).to({rotation:2.3158,x:70.15,y:231.25},0).wait(1).to({rotation:2.4939,x:70.65,y:231.3},0).wait(1).to({rotation:2.672,x:71.1,y:231.25},0).wait(1).to({rotation:2.8502,x:71.6,y:231.3},0).wait(1).to({rotation:3.0283,x:72.1},0).wait(1).to({rotation:3.2065,x:72.6,y:231.25},0).wait(1).to({rotation:3.3846,x:73},0).wait(1).to({rotation:3.5627,x:73.5},0).wait(1).to({rotation:3.7409,x:74,y:231.3},0).wait(1).to({rotation:3.919,x:74.45},0).wait(1).to({rotation:4.0971,x:75,y:231.25},0).wait(1).to({rotation:4.2753,x:75.4},0).wait(1).to({rotation:4.4534,x:75.85,y:231.3},0).wait(1).to({rotation:4.6315,x:76.4},0).wait(1).to({rotation:4.8097,x:76.85},0).wait(1).to({rotation:4.9878,x:77.35,y:231.25},0).wait(1).to({rotation:5.166,x:77.8},0).wait(1).to({rotation:5.3441,x:78.3},0).wait(1).to({rotation:5.5222,x:78.8,y:231.3},0).wait(1).to({rotation:5.7004,x:79.3},0).wait(1).to({rotation:5.8785,x:79.7,y:231.25},0).wait(1).to({rotation:6.0566,x:80.25,y:231.3},0).wait(1).to({rotation:6.2348,x:80.7},0).wait(1).to({rotation:6.4129,x:81.15,y:231.25},0).wait(1).to({rotation:6.591,x:81.65,y:231.3},0).wait(1).to({rotation:6.7692,x:82.15,y:231.25},0).wait(1).to({rotation:6.9473,x:82.6,y:231.3},0).wait(1).to({rotation:7.1255,x:83.1,y:231.25},0).wait(1).to({rotation:7.3036,x:83.55,y:231.3},0).wait(1).to({rotation:7.4817,x:84.05,y:231.25},0).wait(1).to({rotation:7.6599,x:84.5},0).wait(1).to({rotation:7.838,x:85.05,y:231.3},0).wait(1).to({rotation:8.0161,x:85.5,y:231.25},0).wait(1).to({rotation:8.1943,x:86,y:231.3},0).wait(1).to({rotation:8.3724,x:86.45,y:231.25},0).wait(1).to({rotation:8.5505,x:86.9,y:231.3},0).wait(1).to({rotation:8.7287,x:87.45},0).wait(1).to({rotation:8.604,x:87.05,y:231.25},0).wait(1).to({rotation:8.4793,x:86.75},0).wait(1).to({rotation:8.3546,x:86.4,y:231.3},0).wait(1).to({rotation:8.2299,x:86.05},0).wait(1).to({rotation:8.1052,x:85.75},0).wait(1).to({rotation:7.9805,x:85.35},0).wait(1).to({rotation:7.8558,x:85.1},0).wait(1).to({rotation:7.7311,x:84.75,y:231.25},0).wait(1).to({rotation:7.6064,x:84.35},0).wait(1).to({rotation:7.4817,x:84.05},0).wait(1).to({rotation:7.357,x:83.75,y:231.3},0).wait(1).to({rotation:7.2323,x:83.4},0).wait(1).to({rotation:7.1076,x:83.05},0).wait(1).to({rotation:6.9829,x:82.7,y:231.25},0).wait(1).to({rotation:6.8582,x:82.4},0).wait(1).to({rotation:6.7336,x:82.05,y:231.3},0).wait(1).to({rotation:6.6089,x:81.7},0).wait(1).to({rotation:6.4842,x:81.35},0).wait(1).to({rotation:6.3595,x:81.05},0).wait(1).to({rotation:6.2348,x:80.7},0).wait(1).to({rotation:6.1101,x:80.4,y:231.25},0).wait(1).to({rotation:5.9854,x:80.05},0).wait(1).to({rotation:5.8607,x:79.65},0).wait(1).to({rotation:5.736,x:79.35,y:231.3},0).wait(1).to({rotation:5.6113,x:79.05,y:231.25},0).wait(1).to({rotation:5.4866,x:78.7},0).wait(1).to({rotation:5.3619,x:78.35},0).wait(1).to({rotation:5.2372,x:78.05,y:231.3},0).wait(1).to({rotation:5.1125,x:77.65,y:231.25},0).wait(1).to({rotation:4.9878,x:77.35},0).wait(1).to({rotation:4.8631,x:77.05},0).wait(1).to({rotation:4.7384,x:76.65,y:231.3},0).wait(1).to({rotation:4.6137,x:76.35},0).wait(1).to({rotation:4.489,x:76,y:231.25},0).wait(1).to({rotation:4.3643,x:75.65,y:231.3},0).wait(1).to({rotation:4.2396,x:75.35},0).wait(1).to({rotation:4.1149,x:75.05},0).wait(1).to({rotation:3.9903,x:74.65},0).wait(1).to({rotation:3.8656,x:74.35},0).wait(1).to({rotation:3.7409,x:74},0).wait(1).to({rotation:3.6162,x:73.6,y:231.25},0).wait(1).to({rotation:3.4915,x:73.3,y:231.3},0).wait(1).to({rotation:3.3668,x:72.95,y:231.25},0).wait(1).to({rotation:3.2421,x:72.7},0).wait(1).to({rotation:3.1174,x:72.3,y:231.3},0).wait(1).to({rotation:2.9927,x:72,y:231.25},0).wait(1).to({rotation:2.868,x:71.65,y:231.3},0).wait(1).to({rotation:2.7433,x:71.35,y:231.25},0).wait(1).to({rotation:2.6186,x:70.95},0).wait(1).to({rotation:2.4939,x:70.65,y:231.3},0).wait(1).to({rotation:2.3692,x:70.3,y:231.25},0).wait(1).to({rotation:2.2445,x:69.95},0).wait(1).to({rotation:2.1198,x:69.6},0).wait(1).to({rotation:1.9951,x:69.25},0).wait(1).to({rotation:1.8704,x:69},0).wait(1).to({rotation:1.7457,x:68.6},0).wait(1).to({rotation:1.621,x:68.3,y:231.3},0).wait(1).to({rotation:1.4963,x:67.95},0).wait(1).to({rotation:1.3716,x:67.65},0).wait(1).to({rotation:1.247,x:67.3},0).wait(1).to({rotation:1.1223,x:66.95,y:231.25},0).wait(1).to({rotation:0.9976,x:66.6},0).wait(1).to({rotation:0.8729,x:66.3,y:231.3},0).wait(1).to({rotation:0.7482,x:65.95},0).wait(1).to({rotation:0.6235,x:65.6},0).wait(1).to({rotation:0.4988,x:65.25},0).wait(1).to({rotation:0.3741,x:64.95},0).wait(1).to({rotation:0.2494,x:64.6},0).wait(1).to({rotation:0.1247,x:64.3},0).wait(1).to({rotation:0,x:63.95},0).wait(1));

	// Layer_6
	this.instance_4 = new lib.Symbol6();
	this.instance_4.setTransform(149.95,227.05,1,1,0,0,0,42.1,177.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:42.2,regY:176.5,rotation:0.109,x:150.35,y:226.45},0).wait(1).to({rotation:0.218,x:150.7,y:226.4},0).wait(1).to({rotation:0.327,x:151,y:226.45},0).wait(1).to({rotation:0.436,x:151.3,y:226.4},0).wait(1).to({rotation:0.545,x:151.65,y:226.45},0).wait(1).to({rotation:0.654,x:152},0).wait(1).to({rotation:0.763,x:152.3},0).wait(1).to({rotation:0.872,x:152.6},0).wait(1).to({rotation:0.981,x:153,y:226.4},0).wait(1).to({rotation:1.09,x:153.3},0).wait(1).to({rotation:1.199,x:153.6,y:226.45},0).wait(1).to({rotation:1.308,x:153.95,y:226.4},0).wait(1).to({rotation:1.417,x:154.3,y:226.45},0).wait(1).to({rotation:1.526,x:154.6,y:226.4},0).wait(1).to({rotation:1.635,x:154.9,y:226.45},0).wait(1).to({rotation:1.744,x:155.3,y:226.4},0).wait(1).to({rotation:1.853,x:155.6},0).wait(1).to({rotation:1.962,x:155.85,y:226.45},0).wait(1).to({rotation:2.071,x:156.2,y:226.4},0).wait(1).to({rotation:2.18,x:156.55},0).wait(1).to({rotation:2.289,x:156.85,y:226.45},0).wait(1).to({rotation:2.398,x:157.15,y:226.4},0).wait(1).to({rotation:2.507,x:157.55,y:226.45},0).wait(1).to({rotation:2.616,x:157.85},0).wait(1).to({rotation:2.725,x:158.15,y:226.4},0).wait(1).to({rotation:2.834,x:158.5,y:226.45},0).wait(1).to({rotation:2.943,x:158.85,y:226.4},0).wait(1).to({rotation:3.0519,x:159.15,y:226.45},0).wait(1).to({rotation:3.1609,x:159.5},0).wait(1).to({rotation:3.2699,x:159.85,y:226.4},0).wait(1).to({rotation:3.3789,x:160.15,y:226.45},0).wait(1).to({rotation:3.4879,x:160.4,y:226.4},0).wait(1).to({rotation:3.5969,x:160.8,y:226.45},0).wait(1).to({rotation:3.7059,x:161.1},0).wait(1).to({rotation:3.8149,x:161.4,y:226.4},0).wait(1).to({rotation:3.9239,x:161.75,y:226.45},0).wait(1).to({rotation:4.0329,x:162.1,y:226.4},0).wait(1).to({rotation:4.1419,x:162.4,y:226.45},0).wait(1).to({rotation:4.2509,x:162.75},0).wait(1).to({rotation:4.3599,x:163.1},0).wait(1).to({rotation:4.4689,x:163.35},0).wait(1).to({rotation:4.5779,x:163.7},0).wait(1).to({rotation:4.6869,x:164.05,y:226.4},0).wait(1).to({rotation:4.7959,x:164.4,y:226.45},0).wait(1).to({rotation:4.9049,x:164.7,y:226.4},0).wait(1).to({rotation:5.0139,x:165.05},0).wait(1).to({rotation:5.1229,x:165.4},0).wait(1).to({rotation:5.2319,x:165.65},0).wait(1).to({rotation:5.3409,x:165.95,y:226.45},0).wait(1).to({rotation:5.4499,x:166.35,y:226.4},0).wait(1).to({rotation:5.5589,x:166.65},0).wait(1).to({rotation:5.6679,x:166.95,y:226.45},0).wait(1).to({rotation:5.7769,x:167.35},0).wait(1).to({rotation:5.8859,x:167.65},0).wait(1).to({rotation:5.9949,x:167.9},0).wait(1).to({rotation:6.1039,x:168.3},0).wait(1).to({rotation:6.2129,x:168.6,y:226.4},0).wait(1).to({rotation:6.3219,x:168.95,y:226.45},0).wait(1).to({rotation:6.4309,x:169.3},0).wait(1).to({rotation:6.5399,x:169.6},0).wait(1).to({rotation:6.6489,x:169.9},0).wait(1).to({rotation:6.7579,x:170.25,y:226.4},0).wait(1).to({rotation:6.8669,x:170.55,y:226.45},0).wait(1).to({rotation:6.9759,x:170.9,y:226.4},0).wait(1).to({rotation:7.0849,x:171.25,y:226.45},0).wait(1).to({rotation:7.1939,x:171.55},0).wait(1).to({rotation:7.0581,x:171.15},0).wait(1).to({rotation:6.9224,x:170.75},0).wait(1).to({rotation:6.7867,x:170.35},0).wait(1).to({rotation:6.6509,x:169.9},0).wait(1).to({rotation:6.5152,x:169.5},0).wait(1).to({rotation:6.3795,x:169.15},0).wait(1).to({rotation:6.2437,x:168.7},0).wait(1).to({rotation:6.108,x:168.25},0).wait(1).to({rotation:5.9723,x:167.9},0).wait(1).to({rotation:5.8365,x:167.5},0).wait(1).to({rotation:5.7008,x:167.05,y:226.4},0).wait(1).to({rotation:5.5651,x:166.7},0).wait(1).to({rotation:5.4293,x:166.25,y:226.45},0).wait(1).to({rotation:5.2936,x:165.8},0).wait(1).to({rotation:5.1579,x:165.5},0).wait(1).to({rotation:5.0221,x:165.05,y:226.4},0).wait(1).to({rotation:4.8864,x:164.65,y:226.45},0).wait(1).to({rotation:4.7507,x:164.25},0).wait(1).to({rotation:4.6149,x:163.8},0).wait(1).to({rotation:4.4792,x:163.4,y:226.4},0).wait(1).to({rotation:4.3435,x:163.05,y:226.45},0).wait(1).to({rotation:4.2077,x:162.65,y:226.4},0).wait(1).to({rotation:4.072,x:162.2,y:226.45},0).wait(1).to({rotation:3.9363,x:161.8},0).wait(1).to({rotation:3.8005,x:161.4,y:226.4},0).wait(1).to({rotation:3.6648,x:160.95,y:226.45},0).wait(1).to({rotation:3.5291,x:160.6,y:226.4},0).wait(1).to({rotation:3.3933,x:160.2,y:226.45},0).wait(1).to({rotation:3.2576,x:159.75,y:226.4},0).wait(1).to({rotation:3.1219,x:159.4,y:226.45},0).wait(1).to({rotation:2.9861,x:158.95,y:226.4},0).wait(1).to({rotation:2.8504,x:158.55,y:226.45},0).wait(1).to({rotation:2.7147,x:158.15},0).wait(1).to({rotation:2.5789,x:157.7,y:226.4},0).wait(1).to({rotation:2.4432,x:157.35,y:226.45},0).wait(1).to({rotation:2.3075,x:156.9,y:226.4},0).wait(1).to({rotation:2.1717,x:156.5},0).wait(1).to({rotation:2.036,x:156.1,y:226.45},0).wait(1).to({rotation:1.9003,x:155.75,y:226.4},0).wait(1).to({rotation:1.7645,x:155.3},0).wait(1).to({rotation:1.6288,x:154.95,y:226.45},0).wait(1).to({rotation:1.4931,x:154.5},0).wait(1).to({rotation:1.3573,x:154.1},0).wait(1).to({rotation:1.2216,x:153.7,y:226.4},0).wait(1).to({rotation:1.0859,x:153.3},0).wait(1).to({rotation:0.9501,x:152.9},0).wait(1).to({rotation:0.8144,x:152.45,y:226.45},0).wait(1).to({rotation:0.6787,x:152.05},0).wait(1).to({rotation:0.5429,x:151.65},0).wait(1).to({rotation:0.4072,x:151.25},0).wait(1).to({rotation:0.2715,x:150.8},0).wait(1).to({rotation:0.1357,x:150.45},0).wait(1).to({rotation:0,x:150.05},0).wait(1));

	// Layer_7
	this.instance_5 = new lib.Symbol5();
	this.instance_5.setTransform(107.85,202.1,1,1,0,0,0,42,202.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regY:201.4,rotation:-0.1084,x:107.4,y:201.35},0).wait(1).to({rotation:-0.2167,x:106.95,y:201.4},0).wait(1).to({rotation:-0.3251,x:106.5,y:201.35},0).wait(1).to({rotation:-0.4334,x:106.05,y:201.4},0).wait(1).to({rotation:-0.5418,x:105.6},0).wait(1).to({rotation:-0.6501,x:105.2,y:201.35},0).wait(1).to({rotation:-0.7585,x:104.7,y:201.4},0).wait(1).to({rotation:-0.8669,x:104.3},0).wait(1).to({rotation:-0.9752,x:103.85,y:201.35},0).wait(1).to({rotation:-1.0836,x:103.4},0).wait(1).to({rotation:-1.1919,x:102.95,y:201.4},0).wait(1).to({rotation:-1.3003,x:102.5},0).wait(1).to({rotation:-1.4087,x:102.1,y:201.35},0).wait(1).to({rotation:-1.517,x:101.65,y:201.4},0).wait(1).to({rotation:-1.6254,x:101.2,y:201.35},0).wait(1).to({rotation:-1.7337,x:100.75,y:201.4},0).wait(1).to({rotation:-1.8421,x:100.3},0).wait(1).to({rotation:-1.9504,x:99.9,y:201.35},0).wait(1).to({rotation:-2.0588,x:99.4},0).wait(1).to({rotation:-2.1672,x:98.95},0).wait(1).to({rotation:-2.2755,x:98.5,y:201.4},0).wait(1).to({rotation:-2.3839,x:98.05,y:201.35},0).wait(1).to({rotation:-2.4922,x:97.6},0).wait(1).to({rotation:-2.6006,x:97.2,y:201.4},0).wait(1).to({rotation:-2.7089,x:96.75,y:201.35},0).wait(1).to({rotation:-2.8173,x:96.3,y:201.4},0).wait(1).to({rotation:-2.9257,x:95.9},0).wait(1).to({rotation:-3.034,x:95.45},0).wait(1).to({rotation:-3.1424,x:95},0).wait(1).to({rotation:-3.2507,x:94.55,y:201.35},0).wait(1).to({rotation:-3.3591,x:94.1,y:201.4},0).wait(1).to({rotation:-3.4675,x:93.65},0).wait(1).to({rotation:-3.5758,x:93.2},0).wait(1).to({rotation:-3.6842,x:92.75},0).wait(1).to({rotation:-3.7925,x:92.3,y:201.35},0).wait(1).to({rotation:-3.9009,x:91.9,y:201.4},0).wait(1).to({rotation:-4.0092,x:91.45,y:201.35},0).wait(1).to({rotation:-4.1176,x:91,y:201.4},0).wait(1).to({rotation:-4.226,x:90.6,y:201.35},0).wait(1).to({rotation:-4.3343,x:90.1,y:201.4},0).wait(1).to({rotation:-4.4427,x:89.65},0).wait(1).to({rotation:-4.551,x:89.25,y:201.35},0).wait(1).to({rotation:-4.6594,x:88.75,y:201.4},0).wait(1).to({rotation:-4.7677,x:88.35,y:201.35},0).wait(1).to({rotation:-4.8761,x:87.9,y:201.4},0).wait(1).to({rotation:-4.9845,x:87.45},0).wait(1).to({rotation:-5.0928,x:87.05,y:201.35},0).wait(1).to({rotation:-5.2012,x:86.6},0).wait(1).to({rotation:-5.3095,x:86.1,y:201.4},0).wait(1).to({rotation:-5.4179,x:85.65},0).wait(1).to({rotation:-5.5263,x:85.25,y:201.35},0).wait(1).to({rotation:-5.6346,x:84.8,y:201.4},0).wait(1).to({rotation:-5.743,x:84.35},0).wait(1).to({rotation:-5.656,x:84.7,y:201.35},0).wait(1).to({rotation:-5.5689,x:85.05},0).wait(1).to({rotation:-5.4819,x:85.45,y:201.4},0).wait(1).to({rotation:-5.3949,x:85.8,y:201.35},0).wait(1).to({rotation:-5.3079,x:86.15,y:201.4},0).wait(1).to({rotation:-5.2209,x:86.55},0).wait(1).to({rotation:-5.1339,x:86.85},0).wait(1).to({rotation:-5.0469,x:87.2,y:201.35},0).wait(1).to({rotation:-4.9598,x:87.55},0).wait(1).to({rotation:-4.8728,x:87.9},0).wait(1).to({rotation:-4.7858,x:88.25,y:201.4},0).wait(1).to({rotation:-4.6988,x:88.6,y:201.35},0).wait(1).to({rotation:-4.6118,x:88.95},0).wait(1).to({rotation:-4.5248,x:89.35},0).wait(1).to({rotation:-4.4377,x:89.7,y:201.4},0).wait(1).to({rotation:-4.3507,x:90.1,y:201.35},0).wait(1).to({rotation:-4.2637,x:90.4,y:201.4},0).wait(1).to({rotation:-4.1767,x:90.75,y:201.35},0).wait(1).to({rotation:-4.0897,x:91.1,y:201.4},0).wait(1).to({rotation:-4.0027,x:91.45,y:201.35},0).wait(1).to({rotation:-3.9157,x:91.8,y:201.4},0).wait(1).to({rotation:-3.8286,x:92.2},0).wait(1).to({rotation:-3.7416,x:92.55,y:201.35},0).wait(1).to({rotation:-3.6546,x:92.9},0).wait(1).to({rotation:-3.5676,x:93.25,y:201.4},0).wait(1).to({rotation:-3.4806,x:93.55},0).wait(1).to({rotation:-3.3936,x:93.95,y:201.35},0).wait(1).to({rotation:-3.3066,x:94.3,y:201.4},0).wait(1).to({rotation:-3.2195,x:94.7},0).wait(1).to({rotation:-3.1325,x:95.05,y:201.35},0).wait(1).to({rotation:-3.0455,x:95.4},0).wait(1).to({rotation:-2.9585,x:95.75,y:201.4},0).wait(1).to({rotation:-2.8715,x:96.1},0).wait(1).to({rotation:-2.7845,x:96.45,y:201.35},0).wait(1).to({rotation:-2.6975,x:96.8,y:201.4},0).wait(1).to({rotation:-2.6104,x:97.15},0).wait(1).to({rotation:-2.5234,x:97.5,y:201.35},0).wait(1).to({rotation:-2.4364,x:97.85},0).wait(1).to({rotation:-2.3494,x:98.2,y:201.4},0).wait(1).to({rotation:-2.2624,x:98.55},0).wait(1).to({rotation:-2.1754,x:98.9,y:201.35},0).wait(1).to({rotation:-2.0884,x:99.3},0).wait(1).to({rotation:-2.0013,x:99.65,y:201.4},0).wait(1).to({rotation:-1.9143,x:100.05},0).wait(1).to({rotation:-1.8273,x:100.35,y:201.35},0).wait(1).to({rotation:-1.7403,x:100.7},0).wait(1).to({rotation:-1.6533,x:101.1},0).wait(1).to({rotation:-1.5663,x:101.45},0).wait(1).to({rotation:-1.4792,x:101.8,y:201.4},0).wait(1).to({rotation:-1.3922,x:102.15},0).wait(1).to({rotation:-1.3052,x:102.5},0).wait(1).to({rotation:-1.2182,x:102.9,y:201.35},0).wait(1).to({rotation:-1.1312,x:103.2},0).wait(1).to({rotation:-1.0442,x:103.55},0).wait(1).to({rotation:-0.9572,x:103.9},0).wait(1).to({rotation:-0.8701,x:104.25,y:201.4},0).wait(1).to({rotation:-0.7831,x:104.65},0).wait(1).to({rotation:-0.6961,x:105},0).wait(1).to({rotation:-0.6091,x:105.35},0).wait(1).to({rotation:-0.5221,x:105.7,y:201.35},0).wait(1).to({rotation:-0.4351,x:106.05,y:201.4},0).wait(1).to({rotation:-0.3481,x:106.4},0).wait(1).to({rotation:-0.261,x:106.75,y:201.35},0).wait(1).to({rotation:-0.174,x:107.1},0).wait(1).to({rotation:-0.087,x:107.45,y:201.4},0).wait(1).to({rotation:0,x:107.85},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,231.2,411);


(lib._8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Sy879mbol7();
	this.instance.setTransform(42.6,97.65,1,1,0,0,0,42.6,40.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:42.7,x:42.7,y:96.2},0).wait(1).to({y:94.75},0).wait(1).to({y:93.3},0).wait(1).to({y:91.85},0).wait(1).to({y:90.4},0).wait(1).to({y:88.95},0).wait(1).to({y:87.5},0).wait(1).to({y:86.1},0).wait(1).to({y:84.65},0).wait(1).to({y:83.2},0).wait(1).to({y:81.75},0).wait(1).to({y:80.3},0).wait(1).to({y:78.85},0).wait(1).to({y:77.4},0).wait(1).to({y:76},0).wait(1).to({y:74.55},0).wait(1).to({y:73.1},0).wait(1).to({y:71.65},0).wait(1).to({y:70.2},0).wait(1).to({y:68.75},0).wait(1).to({y:67.3},0).wait(1).to({y:65.9},0).wait(1).to({y:64.45},0).wait(1).to({y:63},0).wait(1).to({y:61.55},0).wait(1).to({y:60.1},0).wait(1).to({y:58.65},0).wait(1).to({y:57.2},0).wait(1).to({y:55.8},0).wait(1).to({y:57.2},0).wait(1).to({y:58.65},0).wait(1).to({y:60.1},0).wait(1).to({y:61.55},0).wait(1).to({y:63},0).wait(1).to({y:64.45},0).wait(1).to({y:65.9},0).wait(1).to({y:67.3},0).wait(1).to({y:68.75},0).wait(1).to({y:70.2},0).wait(1).to({y:71.65},0).wait(1).to({y:73.1},0).wait(1).to({y:74.55},0).wait(1).to({y:76},0).wait(1).to({y:77.4},0).wait(1).to({y:78.85},0).wait(1).to({y:80.3},0).wait(1).to({y:81.75},0).wait(1).to({y:83.2},0).wait(1).to({y:84.65},0).wait(1).to({y:86.1},0).wait(1).to({y:87.5},0).wait(1).to({y:88.95},0).wait(1).to({y:90.4},0).wait(1).to({y:91.85},0).wait(1).to({y:93.3},0).wait(1).to({y:94.75},0).wait(1).to({y:96.2},0).wait(1).to({y:97.65},0).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E5F61").s().p("AgaLqIAA3UIA1AAIAAXUg");
	this.shape.setTransform(49.025,74.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(59));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85.4,149.3);


(lib.startf = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ballons();
	this.instance.setTransform(244,487.45,1,1,0,0,0,102,205.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9FC75F").s().p("EhIFAQ3IAA4iQM8jcNoiLQI5hbGDgtQJohJI0gPQXagqUZFiQG2B3F1CrQEvCLFdDbQGeECEbErQEiEyCKFKg");
	this.shape.setTransform(534.95,578.1023);

	this.instance_1 = new lib.wheel();
	this.instance_1.setTransform(416.8,224.4,1,1,0,0,0,171.2,206.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9FC75F").s().p("AAAAIIAAgPIAAAPg");
	this.shape_1.setTransform(1297.5,189.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9FC75F").s().p("AAAAIIAAgPIAAAPg");
	this.shape_2.setTransform(1194.575,189.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAAAIIAAgPIAAAPg");
	this.shape_3.setTransform(1194.575,189.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D1D1D1").s().p("Ag4BVQgYgXABgiIAAiIICgAAIAACIQgBAigXAXQgXAYgiAAQggAAgYgYg");
	this.shape_4.setTransform(1245.65,340.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ED3724").s().p("Ag4BVQgYgXAAgiIAAiIIChAAIAACIQAAAigYAXQgYAYghAAQghAAgXgYg");
	this.shape_5.setTransform(1229.525,340.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D1D1D1").s().p("Ag4BVQgXgXAAgiIAAiIICfAAIAACIQAAAigXAXQgYAYghAAQghAAgXgYg");
	this.shape_6.setTransform(1213.4,340.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ED3724").s().p("Ag4BVQgXgXAAgiIAAiIICgAAIAACIQAAAigYAXQgYAYghAAQggAAgYgYg");
	this.shape_7.setTransform(1197.3,340.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D1D1D1").s().p("Ag4BVQgYgXAAgiIAAiIIChAAIAACIQAAAigYAXQgXAYgiAAQghAAgXgYg");
	this.shape_8.setTransform(1181.175,340.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ED3724").s().p("Ag4BVQgXgXgBgiIAAiIICgAAIAACIQAAAigXAXQgYAYghAAQghAAgXgYg");
	this.shape_9.setTransform(1165.05,340.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D1D1D1").s().p("Ag4BVQgXgXgBgiIAAiIICgAAIAACIQAAAigXAXQgYAYghAAQghAAgXgYg");
	this.shape_10.setTransform(1148.95,340.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#ED3724").s().p("Ag4BVQgYgXAAgiIAAiIIChAAIAACIQAAAigYAXQgXAYgiAAQggAAgYgYg");
	this.shape_11.setTransform(1132.825,340.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D1D1D1").s().p("Ag4BVQgYgXAAgiIAAiIICgAAIAACIQABAigYAXQgYAYghAAQghAAgXgYg");
	this.shape_12.setTransform(1116.7,340.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#ED3724").s().p("Ag4BVQgXgXgBgiIAAiIICgAAIAACIQABAigYAXQgYAYghAAQghAAgXgYg");
	this.shape_13.setTransform(1100.6,340.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D1D1D1").s().p("Ag4BVQgXgXgBgiIAAiIICgAAIAACIQABAigYAXQgYAYghAAQghAAgXgYg");
	this.shape_14.setTransform(1084.5,340.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#ED3724").s().p("Ag4BVQgYgXAAgiIAAiIIChAAIAACIQAAAigYAXQgYAYghAAQghAAgXgYg");
	this.shape_15.setTransform(1068.375,340.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D1D1D1").s().p("Ag4BVQgYgXAAgiIAAiIIChAAIAACIQAAAigYAXQgXAYgiAAQggAAgYgYg");
	this.shape_16.setTransform(1052.25,340.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#ED3724").s().p("Ag4BVQgYgXAAgiIAAiIICgAAIAACIQABAigYAXQgYAYghAAQghAAgXgYg");
	this.shape_17.setTransform(1036.15,340.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FDC160").s().p("AhTAeQgMAAgJgJQgIgJAAgMQAAgMAIgIQAJgJAMAAICmAAQANAAAIAJQAJAIAAAMQAAAMgJAJQgIAJgNAAg");
	this.shape_18.setTransform(1139.725,228.475);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#512A0F").s().p("AgGDTQgDgDAAgEIAAmYQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAAGYQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_19.setTransform(1140.625,209.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#ED3724").s().p("AinBaQAdAAAjgrQgigzgehVQAlAyAvgHQAcgFA3gmQA4glAcgFQAvgIAlAyIAACzQglgygvAHQgcAFg4AmQg3AlgcAFIgMABQgoAAgggrg");
	this.shape_20.setTransform(1123.775,200.3437);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Am8HyQCPhUB1hbQCShyB0iCQCAiMBUiWQAthSAghSQAPglAPgxIAKgkIAlAAIgGAuQgJAygLAqQgYBbglBZQhICrhyChQhsCYiMCLIg5A2g");
	this.shape_21.setTransform(1092.45,279.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AC1HyIgcg6QhEiYgnisQgfiFgNiWQgNCSggCJQgoCrhECZIgcA6IjSAAQAzg/AshGQBPiAA6ibQA3iQAjikQAPhKAMhVQAIg3AFg5IA+AAQADAvAIBBQAMBXAPBJQAfCgA3CTQA6CZBPCCQAqBFA0BAg");
	this.shape_22.setTransform(1140.7,279.675);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ACHHyIg4g2QiPiNhqiWQh0ijhGipQgnhegWhWQgLgqgJgyIgHguIAjAAIAOAkQALAoASAuQAhBVAtBPQBWCZB9CJQByCACUB0QB4BcCLBTg");
	this.shape_23.setTransform(1188.95,279.675);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#ED3724").s().p("AxpHyQF4i5EDjoQEtkOBwk0ICZAAQBoEfF/E9QEADVE7Cyg");
	this.shape_24.setTransform(1140.725,279.675);

	this.instance_2 = new lib.Sy8mbol10();
	this.instance_2.setTransform(1226.55,412.3,1,1,0,0,0,42.6,74.7);

	this.instance_3 = new lib.Sy8mbol9();
	this.instance_3.setTransform(1136.85,412.3,1,1,0,0,0,42.6,74.7);

	this.instance_4 = new lib._8();
	this.instance_4.setTransform(1047.15,412.3,1,1,0,0,0,42.6,74.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#5E5F61").s().p("A2XArIAAhWMAsvAAAIAABWg");
	this.shape_25.setTransform(1140.725,509.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8E9093").s().p("A0GArIAAhVMAoNAAAIAABVg");
	this.shape_26.setTransform(1140.7,500.65);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#ED3724").s().p("AwsAvQgTAAgOgNQgOgOAAgUQAAgSAOgOQAOgOATAAMAhZAAAQATAAAOAOQAOAOAAASQAAAUgOAOQgOANgTAAg");
	this.shape_27.setTransform(1140.7,491.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FDC160").s().p("AmdLcIAA24IM8AAIAAW4g");
	this.shape_28.setTransform(1140.7,413.65);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B8D65B").s().p("AnrVzQiKjakijJQkcjFmdisQptkAtKirQA5kJDWj1QDQjvFTjHQHyklK4ikQLQipMiAAQL+AAK0CbQKeCVHxEOMAAAAing");
	this.shape_29.setTransform(1046.55,547.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C1E65F").s().p("AP0QqQr5hZscABQwPAAvECTQlcA1lFBHMAAAghqQDzhaEFhHQN+j2PXAAQT7AARJGVQIKDBGuEPQGuEPEzFJQlTDyjPEkQjWEqg6FEQqPijrghUg");
	this.shape_30.setTransform(393.85,492.35);

	this.instance_5 = new lib.clouds();
	this.instance_5.setTransform(663.5,141,1,1,0,0,0,674.3,141);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.startf, new cjs.Rectangle(0,0,1354.6,692.9), null);


(lib.startm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.lightstart();
	this.instance.setTransform(-4.35,42.25,1.2608,1.2608,0,0,0,307.7,137.8);

	this.btn = new lib.startbtn();
	this.btn.name = "btn";
	this.btn.setTransform(0.05,76.85,1.2418,1.2418,0,0,0,105,29.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5DC6CF").s().p("AgjCVQgIgIAAgJQAAgCAog3QArg8AKggQAFgTh5AAQghAAAAgSQAAgPAKgkQAKghAIgRIAXAAQANAAAHAFIACAnQAAAMgEAPIAnABQAnAAATAGQAhAJAAAdQAAAigsBNQgvBUgbAAQgJAAgIgHg");
	this.shape.setTransform(289.7779,-33.9616,1.2417,1.2417);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5DC6CF").s().p("ABPBrQgFgUgDg9QgCgtgOgVQgTgbgzAAQgdAAgGABQgUAFgCANQgDAKAAA1QAAA1gBAMQgFAogRAAQgZAAAAhAIAAh4QAAglANgKQALgIAnAAQBpAAAmAkQApAmAABuQAAAZgEALQgGATgSAAQgOAAgDgNg");
	this.shape_1.setTransform(258.9519,-29.5534,1.2417,1.2417);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5DC6CF").s().p("AgjB4IgkgBQgUAAgJgFQgJgFAAgMIACgQQACgKANAAIAmADIA7ACQAvAAgDgJQhLhIhJhJQgDgDgEgKQgFgJAAgFQAAgPAdAAQACAAApArQAqAsAOAFQANgPAOgdIAVgvQABgBAJAAQAKAAAKALQAJAKAAALQAAAOgTAeIgeAqQAWAUAOAWQAVAeAAATQAAAghiAAIgxgBg");
	this.shape_2.setTransform(225.27,-29.4292,1.2417,1.2417);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5DC6CF").s().p("AgKB4QgHgNgGhPQgFhIAAgYQAAgeAKgVIAKAAQAYAAAHATQAHASgCBGIAABEIAAAiQAAALgDAFQgBADgKALg");
	this.shape_3.setTransform(204.892,-29.5845,1.2417,1.2417);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5DC6CF").s().p("AiDB5QAAgQA2gVQA9gXAKgNQgRgVgpg4QguhBAAgNIgBgIIgBgJQAAgIAGgDQAFgDALADQAYAABfCaQAKgMAahMQAYhEANAAQAeAAAAAJQAAArgeBDQgiBJgoAfQgaAUg0ARQgrAPgNAAQgZAAAAgRg");
	this.shape_4.setTransform(168.1194,-27.3804,1.2417,1.2417);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5DC6CF").s().p("AgjCVQgJgIABgJQAAgCAog3QArg8AJggQAFgTh4AAQgiAAAAgSQAAgQAMgjQAIggAJgSIAWAAQANAAAIAFIACAnQAAAMgEAPIAnABQAnAAATAGQAhAKABAcQgBAhgsBOQgvBUgbAAQgJAAgIgHg");
	this.shape_5.setTransform(136.3311,-33.9616,1.2417,1.2417);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5DC6CF").s().p("AA/BqIgBgNQAAgIADgYQAEgWAAgKQAAhfhhAAQgKAAgTAFQgTAEgKAAQgMAAgIgHQgJgHAAgLQAAglA9AAQBXAAAjAVQAwAcAABRQAABtghAAQgSAAgCgOgAhnBmQgHgOAAgPQAAgRAIgWQALgbANAAQADAAAIAPQAIAQAAAEQAAAagEATQgGAhgOAAQgMAAgIgSg");
	this.shape_6.setTransform(94.5158,-29.5534,1.2417,1.2417);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5DC6CF").s().p("AABBGIgJAAQgTgVAAg/QAAghAFgSIANgFIAUAAQAIAAAEAXQAEASAAAMIABAqQgBAZgGARQgDADgGAAIgFABIgGgBg");
	this.shape_7.setTransform(72.2889,-35.7155,1.2417,1.2417);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5DC6CF").s().p("AAMAqIAAgyQABgYgCgaQgDgFghAAIhGACQgTAAgFgCQgJgDgCgKIgBgTIAAgLQACgFAFgFQAHgCAMgBIArABIBhgBQA2gBARACIARACQAJAFAAAUQAAAUgQAFQgGACgXAAQgRAAgCAJQgEAOAAAnIAAApQAABQgXACIgCAAQgZAAgChPg");
	this.shape_8.setTransform(47.982,-29.6497,1.2417,1.2417);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5DC6CF").s().p("AABBGIgJAAQgTgVAAg/QAAghAFgSIANgFIAUAAQAIAAAEAXQAEASAAAMIABAqQgBAZgGARQgDADgGAAIgFABIgGgBg");
	this.shape_9.setTransform(25.2273,-35.7155,1.2417,1.2417);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5DC6CF").s().p("ABvBpQgHgPAAgIIAChjQAAgphOABIgRAAQgyAAgBAVQABAbgDAzQgGApgFAOQgHARgMADQgJADgdAAQgdAAgLgaQgEgLAAgJQAAgPATAAIAdACQAaABgCgwQgBgcADgoIAEgeQACgIAHgJQAHgLAGABIAjgFIAYgDQA4AAAeANQBAAcAABTQAAAggHAjQgIAwgQAAQgFAAgIgPg");
	this.shape_10.setTransform(-1.8424,-29.5845,1.2417,1.2417);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5DC6CF").s().p("Ag7B2QgYAAgRgLQgTgMgBgYQAAgJAWAAQARAAAeAHQAhAGANABQBNAAAAhDQAAgWgGgTQgFgTgxgGIhWgHQgtgGAAgXQAAgTAagEQAIgBAiAAQBPAAAnAXQA2AdgBBJQABBAgvAaQgjAUhEAAg");
	this.shape_11.setTransform(-50.8597,-29.3361,1.2417,1.2417);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5DC6CF").s().p("AANAqIgBgyQABgRgBghQgEgFghAAIhFACQgUAAgFgCQgJgDgCgKIgBgTIAAgLQABgFAHgFQAGgCAMgBIArABIBhgBQA2gBARACIAQACQAKAFAAAUQAAAUgQAFQgFACgYAAQgRAAgCAJQgEAOAAAnIAAApQAABQgXACIgCAAQgZAAgBhPg");
	this.shape_12.setTransform(-85.1935,-29.6497,1.2417,1.2417);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5DC6CF").s().p("AABBGIgJAAQgTgVAAg/QAAghAFgSIANgFIAUAAQAIAAAEAXQAEASAAAMIABAqQgBAZgGARQgDADgGAAIgFABIgGgBg");
	this.shape_13.setTransform(-107.9482,-35.7155,1.2417,1.2417);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5DC6CF").s().p("AgjCVQgJgIAAgJQAAgCApg3QAqg7ALghQAFgTh5AAQghAAAAgSQAAgPAKgkQAJghAJgRIAWAAQAOAAAHAFIACAnQAAAPgEAMIAnABQAnAAASAGQAiAKAAAcQAAAhgtBOQguBUgbAAQgJAAgIgHg");
	this.shape_14.setTransform(-140.2952,-33.9616,1.2417,1.2417);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5DC6CF").s().p("AA/BqIgBgNQAAgKAEgWQADgYAAgIQAAhfhhAAQgKAAgTAFQgTAEgKAAQgLAAgJgHQgJgHAAgLQAAglA9AAQBXAAAjAVQAwAcAABRQAABtghAAQgRAAgDgOgAhnBmQgHgPAAgOQAAgPAIgYQALgbANAAQADAAAIAPQAIAQAAAEQAAAagEATQgGAhgOAAQgLAAgJgSg");
	this.shape_15.setTransform(-170.1588,-29.5534,1.2417,1.2417);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5DC6CF").s().p("AAlBXIgegrQgPAHgZAjQgVAigIgBQgeABABgXQAAgZAbggQATgXAcgWQgMgSgMgcQgQgiAAgNQAAgKAGgHQADgCAKgBQAIAAADADQAqBAAnBGQAmBIAAAMQAAARgUgBQgLAAgYggg");
	this.shape_16.setTransform(-198.998,-29.5224,1.2417,1.2417);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5DC6CF").s().p("ABHBxQgKgJAAgPIABgtIABhGQAAgoglAAIhoAAQgjAAAAgbQAAgKAFgLQADgHAnAAIApABIAoABQAmAAARADQAXAHAKATQALAXAAAvQAABIgBAUQgDAygNAAQgRAAgJgJg");
	this.shape_17.setTransform(-227.3405,-29.8328,1.2417,1.2417);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5DC6CF").s().p("AABBGIgJAAQgTgVAAg/QAAghAFgSIANgFIAUAAQAIAAAEAXQAEASAAAMIABAqQgBAZgGARQgDADgGAAIgFABIgGgBg");
	this.shape_18.setTransform(-247.7049,-35.7155,1.2417,1.2417);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5DC6CF").s().p("AgjCVQgIgIAAgJQAAgCAog3QArg8AJggQAGgTh5AAQgiAAABgSQAAgNALgmQAIggAJgSIAWAAQAOAAAHAFIACAnQAAAMgEAPIAnABQAnAAASAGQAjAKAAAcQgBAhgsBOQgvBUgbAAQgJAAgIgHg");
	this.shape_19.setTransform(-268.1003,-33.9616,1.2417,1.2417);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5DC6CF").s().p("AgZBcQAAgXAaAAQAZAAAAAZQAAAHgIAJQgGAJgJAAQgcAAAAgbgAAAAvQgZgHAAg1IAAg+IAEgfQACgMATAAQAGAAAIAGQAGAFABAJQAEAwgEBQQAAAIgHAFQgGAEgFAAIgDAAg");
	this.shape_20.setTransform(-347.0743,-101.5737,1.2417,1.2417);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#5DC6CF").s().p("AhmB4QgkgBAAgTQAAgiA3AAQCAAAADgBQAGgDAAgJIADhAQAAgYgGgHQgQgYhDAAIgrABIgiABIgbgIQgDgOAAgIQAAgLAGgGQAFgFAPAAQALgCAngBQBHAAAQACQBGAGADAVQADALAAATIgCAqIgCAoIgBAhQAAAJACABQABAAAYAFQARAEAAALIAAAVQAAAGgSAFQgOACgIABg");
	this.shape_21.setTransform(333.0211,-101.4185,1.2417,1.2417);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#5DC6CF").s().p("ABHBxQgKgJAAgOIACh0QAAgpglAAIhoAAQgjAAABgbQAAgJAEgLQADgHAnAAIBRACQAqAAANAEQAXAGAKAUQALAVAAAwQgBBSAAALQgDAxgOAAQgPAAgKgJg");
	this.shape_22.setTransform(298.6873,-101.729,1.2417,1.2417);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5DC6CF").s().p("AgKB4QgGgLgHhRQgFhAAAghQAAgfAKgTIAKAAQAYAAAHATQAHAUgCBEQgBAlABAfIAAAiQAAALgDAFQgDAFgJAJg");
	this.shape_23.setTransform(278.2152,-101.4496,1.2417,1.2417);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5DC6CF").s().p("Ag7B2QgYAAgRgLQgUgMAAgYQAAgJAWAAQANAAAiAHQAeAGAQAAQBNAAAAhCQAAgXgGgSQgGgUgwgFIhWgGQgtgHAAgXQAAgTAagEQAFgBAlAAQBOAAAoAXQA1AeAABIQAAA/guAbQgkAUhDAAg");
	this.shape_24.setTransform(254.7921,-101.2012,1.2417,1.2417);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#5DC6CF").s().p("AgIBGQgTgWAAg9QAAgiAFgSIANgEIAUAAQAHAAAGAVQADARAAANIABArQgBAbgFAPQgEADgGAAg");
	this.shape_25.setTransform(233.4033,-107.5651,1.2417,1.2417);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#5DC6CF").s().p("AhkBuQgLgJAAgdIAAiUQAAgrAnAAIAfACIBPgCQA1AAAOAJQAHAFAAA7QAABtgDAQQgGAhgkAGQgLACh1AAQgdAAgKgKgAg9hAQgHAGAAASIgBAYIgBAWIABAtQAAAOAMAEQAYAIA0gEIAjgDQAJgCADgIQABgJAAgcIABgUIABgYQAAgvgZAAIhPgDQgSAAgIAHg");
	this.shape_26.setTransform(211.5489,-101.5117,1.2417,1.2417);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#5DC6CF").s().p("AA+BqIAAgNQAAgNADgTQAEgUAAgMQAAhfhhAAQgKABgTAEQgSAEgMAAQgLAAgJgHQgIgGAAgMQAAglA9AAQBWAAAkAVQAwAdAABQQAABtgiAAQgRAAgDgOgAhnBmQgHgPAAgNQAAgRAIgXQAKgbANAAQAEAAAIAPQAIAQAAAEQAAAXgEAWQgHAhgNAAQgMAAgIgSg");
	this.shape_27.setTransform(168.2746,-101.4185,1.2417,1.2417);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#5DC6CF").s().p("AhmB4QgkgBAAgTQAAgiA4AAQCAAAACgBQAFgCACgKIAAgkIABgcQAAgYgEgHQgRgYhEAAIgqABIghABIgbgIQgEgNAAgJQABgLAFgGQAFgFAPAAQALgCAngBQBGAAASACQBFAGAEAVQACALAAATIgFBzQAAAJACABIAZAFQARADAAAMIAAAVQABAGgTAFQgPACgHABg");
	this.shape_28.setTransform(132.1092,-101.4185,1.2417,1.2417);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#5DC6CF").s().p("AhmB4QgUgCADgqIAQg0QAQgwAAgDQAAgJgJgMQgCgGgSgbQgDgDAAgHQAAgJAGgOQALgFAIAAQAEAAACACIA3A+QAxA3AJAAIABgBQAFgFAXg7QAUg0ANgCQAdgCAAAdQAAANgGARIgWA1QgUAuABADIAbAZQAYAYAAALQgCAWgZgCQgPgBgGgGIhuhoIgDgBQgGAAgKAoQgNAzgEAHQgCAEgKAGQgIAEgFAAIgDAAg");
	this.shape_29.setTransform(96.9134,-101.4515,1.2417,1.2417);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#5DC6CF").s().p("AgIBGQgTgVAAg+QAAgiAFgSIANgEIAUAAQAIAAAEAVQAEAUAAAKIABArQgBAZgGARQgDADgGAAg");
	this.shape_30.setTransform(74.1515,-107.5651,1.2417,1.2417);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5DC6CF").s().p("AhlBuQgLgKABgcIAAiUQgBgrAnAAIAhACIBOgCQA2AAANAJQAHAFABA7QgBBqgDATQgHAigiAFQgMACh1AAQgdAAgLgKgAg9hAQgHAGAAASIAABbQAAAOALAEQAYAIA0gEIAigDQALgCACgIQABgHABgeIABgsQAAgvgZAAIhPgDQgTAAgHAHg");
	this.shape_31.setTransform(52.266,-101.5117,1.2417,1.2417);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5DC6CF").s().p("AgjCVQgIgIAAgJQAAgCAog3QAqg5ALgjQAFgTh5AAQghAAAAgRQAAgQAKgjQAJghAJgSQAEABASgBQAOAAAHAFIACAoQAAANgEAOIAnAAQAmAAAUAGQAhAJAAAeQAAAggtBOQguBUgbAAQgJAAgIgHg");
	this.shape_32.setTransform(10.8853,-105.8577,1.2417,1.2417);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#5DC6CF").s().p("AAKBzQgJgFAAgHQAAgHAagKIAxgTQAagOAAgOQAAgdgPgjQgSgpgXAAQggAAghApQgPAQgqBBQghAygTANQgQgFAAgfQAAgXAYggIAnguIgYgmQgQgYAAgPQAAgPARgJIAfAZQAQANAGAUQAKgKAbgWQAegYAIgBIANgBQA0AAAfA9QAZAwAAAtQAAAogoAZQgkAUgqAAQgIAAgJgFg");
	this.shape_33.setTransform(-22.5172,-101.3254,1.2417,1.2417);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5DC6CF").s().p("Ag5BTQgegfgTguIgXgvQgOgjAAgPQAAgIAJgJQAIgJAIAAQAQAAAFAMIAEAaQANAxAZApQAfA5AkABQAogBAdhJIAKhBQAIgyALAAQALAAAMAOQALAOAAANQAAA9gfA/QglBMg2ABQgpAAgmgngAgaAFQgIgMABgHQgBgFAUguQASgwAEgCQACgCAEAAQAMAAALAKQAKAKAAANQAAAMgaAtQgZAugJAAQgHAAgGgOg");
	this.shape_34.setTransform(-61.7869,-101.6669,1.2417,1.2417);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#5DC6CF").s().p("ABOBrQgEgUgDg9QgCgtgNgVQgUgbgzAAQgaAAgIABQgVAEgDAOQgBALgBA0QAAA1gBAMQgEAogTAAQgYAAAAhAIABh5QAAgkAMgKQAKgIAoAAQBpAAAnAkQAoAnAABtQAAAZgDALQgHATgSAAQgOAAgEgNg");
	this.shape_35.setTransform(-98.0454,-101.4185,1.2417,1.2417);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#5DC6CF").s().p("AhOCmQgLgFgCgCQgGgFAAgKIABhPQADhSAFgSQADgQAWAAQARAAgCArIgDB9QgDAmgNAIQgFADgDAAIgDAAgAAAAuQAAgHAUgTQARgPAHgOQALgbABgdQgBgPgQgNQgOgMgRgEQgdgIg5AAQgdAAABgWQAAgWA2gEIAoAAIAeABQArAAAYAbQAWAaABAtQAAAZgHAaQgGAVgdAhQggAjgVAAQgNAAAAgcg");
	this.shape_36.setTransform(-131.1996,-95.8178,1.2417,1.2417);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#5DC6CF").s().p("AA+BqIgBgNQAAgKAEgWQAEgUAAgMQAAhfhhAAQgKABgTAEQgSAEgMAAQgLAAgJgHQgHgGgBgMQAAglA9AAQBWAAAkAVQAwAcAABRQAABtgiAAQgRAAgDgOgAhnBmQgHgPAAgNQAAgRAJgXQAKgbAMAAQAEAAAIAPQAIAQgBAEQAAAagDATQgHAhgNAAQgMAAgIgSg");
	this.shape_37.setTransform(-175.4051,-101.4185,1.2417,1.2417);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#5DC6CF").s().p("AA/BqIgBgNQAAgIADgYQAEgXAAgJQAAhfhhAAQgKABgTAEQgRAEgMAAQgMAAgIgHQgJgGAAgMQAAglA9AAQBWAAAkAVQAwAdAABQQAABtghAAQgSAAgCgOgAhnBmQgHgPAAgNQAAgSAIgWQALgbANAAQADAAAIAPQAIAPAAAFQAAAbgEASQgGAhgOAAQgMAAgIgSg");
	this.shape_38.setTransform(-208.6525,-101.4185,1.2417,1.2417);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#5DC6CF").s().p("AAlBXIgfgrQgPAHgXAkQgWAggIAAQgeAAAAgWQAAgYAbghQAVgYAbgUQgKgRgOgdQgQgkAAgMQAAgKAGgGQADgDAJgBQAJgBACAEQApA8ApBKQAnBHAAAOQAAAPgVAAQgLAAgYggg");
	this.shape_39.setTransform(-237.4916,-101.3999,1.2417,1.2417);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#5DC6CF").s().p("ABHBxQgKgJABgOIACh0QgBgpgkAAIhpAAQgiAAgBgbQAAgJAGgLQACgHAnAAIBRACQAqAAAOAEQAWAGAKAUQAKAVAAAwQAABSgBALQgCAxgNAAQgQAAgKgJg");
	this.shape_40.setTransform(-265.8652,-101.729,1.2417,1.2417);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#5DC6CF").s().p("AgjCVQgJgIAAgJQAAgCApg3QAqg7ALghQAFgTh5AAQghAAAAgRQAAgQAKgjQAJggAJgTQAEABASgBQAOAAAHAFIACAoQAAAOgEANIAnAAQAnAAASAGQAiAJAAAeQAAAggtBOQguBUgbAAQgJAAgIgHg");
	this.shape_41.setTransform(-295.2631,-105.8577,1.2417,1.2417);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#5DC6CF").s().p("AA/BqIgBgNQAAgKAEgWQADgYAAgIQAAhfhhAAQgKABgTAEQgRAEgMAAQgMAAgIgHQgJgGAAgMQAAglA9AAQBWAAAkAVQAwAcAABRQAABtghAAQgSAAgCgOgAhnBmQgHgPAAgNQAAgPAIgZQALgbANAAQADAAAIAPQAIAPAAAFQAAAagEATQgHAhgNAAQgMAAgIgSg");
	this.shape_42.setTransform(-325.1267,-101.4185,1.2417,1.2417);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("EgrbAYnQhBAAgtgtQgtgtAAhAMAAAgsZQAAg/AtguQAtgtBBAAMBW4AAAQBAAAAtAtQAtAuAAA/MAAAAsZQAABAgtAtQgtAthAAAg");
	this.shape_43.setTransform(0.0043,-0.6593,1.2418,1.2418);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FBC926").s().p("EgtLAcIQh5AAhWhWQhWhVAAh6MAAAgvFQAAh5BWhWQBWhWB5AAMBaXAAAQB6AABWBWQBVBWAAB5MAAAAvFQAAB6hVBVQhWBWh6AAg");
	this.shape_44.setTransform(0.0043,-0.0384,1.2418,1.2418);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.startm, new cjs.Rectangle(-395.5,-223.5,791,447), null);


(lib.handle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
		
		self.addEventListener("rollover",over);
		self.addEventListener("rollout",out);
		self.addEventListener("click",cl);
		
		self.cursor="pointer";
		function over(){
			self.handle.gotoAndStop(1);
		}
		function out(){
			self.handle.gotoAndStop(0);
		}
		function cl(){
			self.gotoAndPlay(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// Layer_2
	this.handle = new lib.Symbol2();
	this.handle.name = "handle";
	this.handle.setTransform(10.35,-0.05);

	this.timeline.addTween(cjs.Tween.get(this.handle).wait(1).to({regX:15.6,regY:15.7,x:23.95,y:24.65},0).wait(1).to({x:21.95,y:33.7},0).wait(1).to({x:19.95,y:42.7},0).wait(1).to({x:17.95,y:51.75},0).wait(1).to({x:15.95,y:60.75},0).wait(1).to({x:14,y:69.8},0).wait(1).to({x:12,y:78.8},0).wait(1).to({x:10,y:87.85},0).wait(1).to({x:8,y:96.9},0).wait(1).to({x:10,y:87.85},0).wait(1).to({x:12,y:78.8},0).wait(1).to({x:14,y:69.8},0).wait(1).to({x:15.95,y:60.75},0).wait(1).to({x:17.95,y:51.75},0).wait(1).to({x:19.95,y:42.7},0).wait(1).to({x:21.95,y:33.7},0).wait(1).to({x:23.95,y:24.65},0).wait(1).to({x:25.95,y:15.65},0).wait(1).to({regX:15.7,x:26.05},0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#D0D4D7","#999999"],[0.035,0.941],0,0,0,0,0,48.6).s().p("AhuHTQgMgDgIgKQgHgJgBgMIDQuDIBFAQIjQODQgGALgMAFQgHACgHAAIgJAAg");
	this.shape.setTransform(14.0714,69.2021,1.0084,1.0084);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#D0D4D7","#999999"],[0.035,0.941],2.1,-4,0,2.1,-4,48.8).s().p("AhnGpQgMgDgIgKQgHgKAAgMIC/svIBGARIjAMwQgHALgMAFQgHACgHAAIgJgBg");
	this.shape_1.setTransform(13.075,73.6981);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#D0D4D7","#999999"],[0.035,0.941],4.2,-8.1,0,4.2,-8.1,48.7).s().p("AhfF7QgLgDgIgKQgHgKAAgNICsrTIBHARIivLXQgHAKgLAFQgGACgHAAIgLgCg");
	this.shape_2.setTransform(12.075,78.1692);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#D0D4D7","#999999"],[0.035,0.941],6.4,-12.2,0,6.4,-12.2,48.6).s().p("AhXFOQgLgEgIgLQgGgKAAgMICap3IBHARIidJ8QgHALgMAEQgGABgGAAQgGAAgGgBg");
	this.shape_3.setTransform(11.1,82.6875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#D0D4D7","#999999"],[0.035,0.941],8.5,-16.2,0,8.5,-16.2,48.6).s().p("AhPEgQgLgEgHgLQgGgKAAgNICIobIBHASIiMIiQgHAKgNAEIgJABQgHAAgHgCg");
	this.shape_4.setTransform(10.1231,87.1893);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#D0D4D7","#999999"],[0.035,0.941],10.6,-20.3,0,10.6,-20.3,48.6).s().p("AhGDyQgLgFgHgKQgGgKABgNIB1nAIBHASIh6HIQgIAKgMADIgKACQgHAAgGgDg");
	this.shape_5.setTransform(9.0981,91.6643);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#D0D4D7","#999999"],[0.035,0.941],12.7,-24.4,0,12.7,-24.4,48.6).s().p("Ag+DEQgLgFgHgKQgFgLABgMIBilkIBHASIhoFuQgIAJgMADIgIABQgIAAgHgDg");
	this.shape_6.setTransform(8.1173,96.1696);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#D0D4D7","#999999"],[0.035,0.941],14.9,-28.5,0,14.9,-28.5,48.7).s().p("Ag2CXQgLgGgGgLQgFgKABgNIBQkIIBHATIhWETQgIAKgNACIgIABQgHAAgIgDg");
	this.shape_7.setTransform(7.1327,100.6917);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#D0D4D7","#999999"],[0.035,0.941],17,-32.5,0,17,-32.5,48.8).s().p("AguBpQgLgGgFgLQgFgLABgMIA/itIBGATIhEC6QgJAJgNACIgGABQgIAAgJgEg");
	this.shape_8.setTransform(6.1327,105.1767);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#D0D4D7","#999999"],[0.035,0.941],9.3,-40.8,0,9.3,-40.8,49).s().p("AgSA+QgMgDgIgKQgHgJgBgNIAVhZIBIAAIgYBqQgHALgLAFQgGADgIAAIgJgBg");
	this.shape_9.setTransform(4.6896,110.0953,1,1,14.9992);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#D0D4D7","#999999"],[0.035,0.941],17.2,-33,0,17.2,-33,48.8).s().p("AgtBkQgLgFgGgMQgEgKABgNIA9ijIBGATIhCCwQgJAJgNADIgGAAQgJAAgIgEg");
	this.shape_10.setTransform(6.0313,105.6267);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#D0D4D7","#999999"],[0.035,0.941],15.3,-29.3,0,15.3,-29.3,48.7).s().p("Ag1COQgKgGgGgLQgFgLABgMIBMj2IBIATIhTEBQgJAKgMACIgIABQgIAAgIgDg");
	this.shape_11.setTransform(6.9417,101.5808);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#D0D4D7","#999999"],[0.035,0.941],13.4,-25.6,0,13.4,-25.6,48.7).s().p("Ag8C3QgLgFgGgLQgGgLACgMIBdlJIBHATIhjFSQgIAKgNADIgIABQgHAAgIgDg");
	this.shape_12.setTransform(7.8339,97.5196);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#D0D4D7","#999999"],[0.035,0.941],11.4,-21.9,0,11.4,-21.9,48.6).s().p("AhDDgQgLgFgHgLQgGgKABgNIBumaIBHASIhzGjQgIAKgMADIgJABQgHAAgHgCg");
	this.shape_13.setTransform(8.7179,93.485);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#D0D4D7","#999999"],[0.035,0.941],9.5,-18.3,0,9.5,-18.3,48.6).s().p("AhLEJQgLgEgHgLQgGgKABgNIB+ntIBHASIiCH1QgIAKgMADIgKABQgHAAgHgCg");
	this.shape_14.setTransform(9.6231,89.4393);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#D0D4D7","#999999"],[0.035,0.941],7.7,-14.6,0,7.7,-14.6,48.6).s().p("AhSEyQgLgEgHgKQgHgKAAgNICPpAIBHARIiSJHQgIAKgLAEIgLABQgHAAgGgCg");
	this.shape_15.setTransform(10.5,85.3692);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#D0D4D7","#999999"],[0.035,0.941],5.7,-10.9,0,5.7,-10.9,48.6).s().p("AhZFbQgMgEgHgKQgGgKgBgMICgqTIBHARIijKYQgHAKgMAEQgFACgGAAQgGAAgGgCg");
	this.shape_16.setTransform(11.375,81.3375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#D0D4D7","#999999"],[0.035,0.941],3.8,-7.3,0,3.8,-7.3,48.7).s().p("AhgGEQgMgDgIgKQgHgKAAgMICwrmIBHARIiyLpQgHAKgMAFQgGACgGAAQgGAAgFgCg");
	this.shape_17.setTransform(12.275,77.2817);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#D0D4D7","#999999"],[0.035,0.941],1.9,-3.6,0,1.9,-3.6,48.9).s().p("AhoGuQgMgEgHgJQgIgKAAgNIDAs3IBHAQIjCM6QgHALgLAEQgHACgHAAIgKAAg");
	this.shape_18.setTransform(13.175,73.2481);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-0.1,49.5,116.5);


(lib.machine = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.light2();
	this.instance.setTransform(-1.2,31.3,0.7699,0.7699,0,0,0,307.9,137.9);

	this.instance_1 = new lib.light1();
	this.instance_1.setTransform(-1.3,17.6,0.7699,0.7699,0,0,0,308.1,155.8);

	this.handle = new lib.handle();
	this.handle.name = "handle";
	this.handle.setTransform(267.9,-28.25,0.7699,0.7699,0,0,0,21.2,56.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#D0D4D7","#999999"],[0.035,0.941],0,0,0,0,0,8.8).s().p("Ag4A4QgXgXAAghQAAghAXgWQAXgYAhAAQAhAAAYAYQAXAWAAAhQAAAhgXAXQgYAYghAAQghAAgXgYg");
	this.shape.setTransform(254.3834,13.1719,0.694,0.7026,0,0,3.595);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#D0D4D7","#999999"],[0.035,0.941],0,0,0,0,0,48.9).s().p("AilHLIAAuVIEQAAQAZAAARARQASARAAAZIAAMUQAAAcgVAVQgVAVgdAAg");
	this.shape_1.setTransform(254.5312,12.7255,0.4623,0.7699);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkIHvIAAvdIIRAAIAAPdg");
	this.shape_2.setTransform(-144.4438,239.4884,0.7763,0.7763);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkIHvIAAvdIIRAAIAAPdg");
	this.shape_3.setTransform(-238.6449,239.4884,0.7763,0.7763);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkIHvIAAvdIIRAAIAAPdg");
	this.shape_4.setTransform(-50.2039,239.4884,0.7763,0.7763);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkIHvIAAvdIIRAAIAAPdg");
	this.shape_5.setTransform(44.0747,239.4884,0.7763,0.7763);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AkIHvIAAvdIIRAAIAAPdg");
	this.shape_6.setTransform(138.3146,239.4884,0.7763,0.7763);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AkIHvIAAvdIIRAAIAAPdg");
	this.shape_7.setTransform(232.5545,239.4884,0.7763,0.7763);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgCgZIABhlIAGBbQAHCXgSALIAEiYg");
	this.shape_8.setTransform(215.617,105.2483,0.7763,0.7763);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAtOQAWBIgPMxQgHGZgMGLg");
	this.shape_9.setTransform(-217.0838,18.8665,0.7763,0.7763);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhwOTIoM8lIIcAAILdclg");
	this.shape_10.setTransform(153.792,-204.7345,0.7761,0.7995);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AlBOTIhq8lIIbAAIE8clg");
	this.shape_11.setTransform(54.1223,-204.7345,0.7761,0.7995);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AmpOTIE38lIIcAAIhmclg");
	this.shape_12.setTransform(-53.6769,-204.7345,0.7761,0.7995);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ap6OTILZ8lIIcAAIoJclg");
	this.shape_13.setTransform(-153.6764,-204.7345,0.7761,0.7995);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#ED1C24").s().p("Eg0pAOTIOv8lMBL1AAAIOvclg");
	this.shape_14.setTransform(-0.2624,-204.7345,0.7761,0.7995);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#995218").s().p("Eg87ABBIAAiBMB53AAAIAACBg");
	this.shape_15.setTransform(0.0599,196.0161,0.7763,0.7763);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#ED1C24").s().p("AkFDGQhthMgGhvIgBkdILzAAIgBEdQgGBvhtBMQhuBNiYAAQiYAAhthNg");
	this.shape_16.setTransform(-232.0968,-110.5478,0.7761,0.7762);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AkFDGQhthMgGhvIgBkdILzAAIgBEdQgGBvhtBMQhtBNiZAAQiXAAhuhNg");
	this.shape_17.setTransform(-173.8476,-110.5478,0.7761,0.7762);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#ED1C24").s().p("AkFDGQhuhMgFhvIAAkdILxAAIAAEdQgGBvhtBMQhuBNiYAAQiXAAhuhNg");
	this.shape_18.setTransform(-115.9671,-110.5478,0.7761,0.7762);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AkFDGQhthMgGhvIgBkdILzAAIgBEdQgFBvhuBMQhtBNiZAAQiXAAhuhNg");
	this.shape_19.setTransform(-57.5821,-110.5478,0.7761,0.7762);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#ED1C24").s().p("AkFDGQhuhMgFhvIgBkdILzAAIgBEdQgGBvhtBMQhuBNiYAAQiYAAhthNg");
	this.shape_20.setTransform(0.1626,-110.5478,0.7761,0.7762);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AkFDGQhthMgHhvIAAkdILyAAIAAEdQgGBvhtBMQhuBNiYAAQiXAAhuhNg");
	this.shape_21.setTransform(58.3148,-110.5478,0.7761,0.7762);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#ED1C24").s().p("AkFDGQhthMgGhvIgBkdILzAAIgBEdQgGBvhtBMQhtBNiZAAQiXAAhuhNg");
	this.shape_22.setTransform(116.2729,-110.5478,0.7761,0.7762);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AkFDGQhuhMgFhvIgBkdILyAAIAAEdQgFBvhuBMQhuBNiYAAQiXAAhuhNg");
	this.shape_23.setTransform(174.1922,-110.5478,0.7761,0.7762);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#ED1C24").s().p("AkFDGQhuhMgFhvIAAkdILyAAIAAEdQgHBvhtBMQhuBNiYAAQiYAAhthNg");
	this.shape_24.setTransform(232.4026,-110.5478,0.7761,0.7762);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgHAGgFAIQgGALgCAIQgEgKADgMg");
	this.shape_25.setTransform(-234.3141,-100.5428,0.7761,0.7762);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgWABQALgIALgDQANgDAKADQgKADgJAHQgIAEgHAIg");
	this.shape_26.setTransform(-231.9066,-103.0459,0.7761,0.7762);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_27.setTransform(-230.4708,-98.8159,0.7761,0.7762);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F4E09C").s().p("EgqUAXFQg+AAgsgsQgsgsAAg+MAAAgpoQAAgvAbgmQAagmArgQMAAAAskMBWVAAAMAAAgskQAqAQAbAmQAbAmAAAvMAAAApoQAAA+gsAsQgtAsg+AAg");
	this.shape_28.setTransform(-0.5416,7.2981,0.7699,0.7699);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FBC926").s().p("EgwWAbgMAAAgySQAAg2ASgyQARgvAhgoQAqg0A7gcQA+geBFAAMBXUAAAQBGAAA9AeQA7AcArA0QAgAoARAvQATAyAAA2MAAAAySgEgqsAVkMBVoAAAMAAAgutMhVoAAAg");
	this.shape_29.setTransform(-1.1045,6.213,0.7763,0.7763);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgiXwMAAAgvfIBFAAMAAAAvfg");
	this.shape_30.setTransform(-73.8319,5.3051,0.697,0.7762);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgiXwMAAAgvfIBFAAMAAAAvfg");
	this.shape_31.setTransform(71.1485,5.3051,0.697,0.7762);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#ED1C24").s().p("Eg71AIwIAAxfMB3rAAAIAARfg");
	this.shape_32.setTransform(-0.7164,234.4425,0.7763,0.7763);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D47A11").s().p("Eg87AE2ILQprMBjUAAAILTJrg");
	this.shape_33.setTransform(0.0599,166.8858,0.7763,0.7763);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C41A26").s().p("EgxrAa9MAAAg15MBjXAAAMAAAA15gEgq7AUZMBVoAAAMAAAgutMhVoAAAg");
	this.shape_34.setTransform(0.0599,12.0351,0.7763,0.7763);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["rgba(0,0,0,0)","rgba(102,102,102,0.588)"],[0.749,0.976],-0.1,0,0,-0.1,0,193.8).s().p("AuXZSMAAAgyjIcvAAMAAAAyjg");
	this.shape_35.setTransform(-0.8082,0.0092,0.7699,0.7699);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["rgba(0,0,0,0)","rgba(102,102,102,0.588)"],[0.749,0.976],0,0,0,0,0,200.9).s().p("Au5ZSIAAiSMAAAgu6IAAhXIdzAAMAAAAyjg");
	this.shape_36.setTransform(-145.062,0.0092,0.7699,0.7699);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgNXeMAAAgu7IAbAAMAAAAu7g");
	this.shape_37.setTransform(-219.5466,-2.2426,0.7699,0.7699);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["rgba(0,0,0,0)","rgba(102,102,102,0.588)"],[0.749,0.976],-0.1,0,0,-0.1,0,193.8).s().p("AuXZSMAAAgyjIcvAAMAAAAyjg");
	this.shape_38.setTransform(144.2347,0.0092,0.7699,0.7699);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.handle},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.machine, new cjs.Rectangle(-302.7,-277.8,605.5,555.7), null);


// stage content:
(lib.slotMachine = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this;
		stage.enableMouseOver(24); //תמיכה במעברי עכבר
		
		
		
		
		init(); //הטעמת סאונד בקובץ אנימייט לוקאלי
		
		function init() { //קובץ לוקאלי
			//לטעון את הסאונד - נתיב + שם
			createjs.Sound.registerSound("sounds/soundmp3.mp3", "music");
			//createjs.Sound.registerSound("sounds/tickwav.mp3", "tick1");
		}
		//self.seee.addEventListener("click", start);
		
		
		var c1;
		var s1;
		var top1;
		var middle1;
		var bottom1;
		
		var c2;
		var s2;
		var top2;
		var middle2;
		var bottom2;
		
		var c3;
		var s3;
		var top3;
		var middle3;
		var bottom3;
		
		var bg;
		var trys;
		var machine;
		var stratm;
		var startf;
		start();
		
		function start() {
			startf = new lib.startf();
			startf.x = -76
			startf.y = 41
			stage.addChildAt(startf, 0);
		
			bg = new lib.bg();
			bg.x = 640;
			bg.y = 450;
			stage.addChildAt(bg, 1);
		
			create1();
			create2();
			create3();
		
			machine = new lib.machine();
			machine.x = 640;
			machine.y = 450;
			stage.addChildAt(machine, stage.numChildren - 1);
		
			stratm = new lib.startm();
			stratm.x = 640;
			stratm.y = 370;
			stratm.scale = 0;
			stage.addChildAt(stratm, stage.numChildren - 1);
			createjs.Tween.get(stratm).wait(300).to({
				scale: 1
			}, 1000);
			stratm.btn.cursor = "pointer";
			stratm.btn.addEventListener("click", game)
		
		}
		
		
		function game() {
			//מוזיקת רקע
		
			var mymusic = new createjs.Sound.play("music");
			mymusic.loop = -1;
			mymusic.volume = 0;
			createjs.Tween.get(mymusic).to({
				volume: 0.1
			}, 2000);
			createjs.Tween.get(stratm).to({
				scale: 0
			}, 1000).call(bye);
		
		
			trys = Math.floor((Math.random() * 4)) + 3;
		
			machine.handle.addEventListener("click", rnd);
		
		}
		
		function bye() {
			stage.removeChild(stratm);
		}
		function create1() {
			c1 = Math.floor((Math.random() * 5))
			top1 = new lib.sy();
			top1.x = 490;
			top1.y = 330;
			top1.gotoAndStop(c1);
			c1++;
			if (c1 == 5)
				c1 = 0
			middle1 = new lib.sy();;
			middle1.x = 490;
			middle1.y = 450;
			middle1.gotoAndStop(c1);
			c1++;
			if (c1 == 5)
				c1 = 0
			bottom1 = new lib.sy();;
			bottom1.x = 490;
			bottom1.y = 580;
			bottom1.gotoAndStop(c1);
		
			stage.addChildAt(top1, 2);
			stage.addChildAt(middle1, 2);
			stage.addChildAt(bottom1, 2);
			//var tick1 = new createjs.Sound.play("tick1");
		
		
		}
		function create2() {
			//2
			c2 = Math.floor((Math.random() * 5))
			top2 = new lib.sy();
			top2.x = 640;
			top2.y = 330;
			top2.gotoAndStop(c2);
			c2++;
			if (c2 == 5)
				c2 = 0
			middle2 = new lib.sy();;
			middle2.x = 640;
			middle2.y = 450;
			middle2.gotoAndStop(c2);
			c2++;
			if (c2 == 5)
				c2 = 0
			bottom2 = new lib.sy();;
			bottom2.x = 640;
			bottom2.y = 580;
			bottom2.gotoAndStop(c2);
		
			stage.addChildAt(top2, 2);
			stage.addChildAt(middle2, 2);
			stage.addChildAt(bottom2, 2);
			//var tick = new createjs.Sound.play("tick");
		}
		
		function create3() {
			c3 = Math.floor((Math.random() * 5))
			top3 = new lib.sy();
			top3.x = 790;
			top3.y = 330;
			top3.gotoAndStop(c3);
			c3++;
			if (c3 == 5)
				c3 = 0
			middle3 = new lib.sy();;
			middle3.x = 790;
			middle3.y = 450;
			middle3.gotoAndStop(c3);
			c3++;
			if (c3 == 5)
				c3 = 0
			bottom3 = new lib.sy();;
			bottom3.x = 790;
			bottom3.y = 580;
			bottom3.gotoAndStop(c3);
		
			stage.addChildAt(top3, 2);
			stage.addChildAt(middle3, 2);
			stage.addChildAt(bottom3, 2);
			//var tick = new createjs.Sound.play("tick");
		
		}
		
		
		
		
		function rnd() {
			s1 = Math.floor((Math.random() * 15)) + 5;
			s2 = Math.floor((Math.random() * 15)) + 5;
			s3 = Math.floor((Math.random() * 15)) + 5;
		
			if (trys == 0) {
				c = Math.floor((Math.random() * 5))
				s1 = 10 + c - c1;
				s2 = 10 + c - c2;
				s3 = 10 + c - c3;
			}
		
			go1();
			go2();
			go3();
		}
		function go1() {
			if (s1 > 0) {
				createjs.Tween.get(top1).to({
					y: 450
				}, 200);
				createjs.Tween.get(middle1).to({
					y: 580
				}, 200);
				createjs.Tween.get(bottom1).to({
					y: 710
				}, 200).call(change1);
			}
			if (s3 == 0 && s2 == 0 && s1 == 0)
				check()
		}
		function go2() {
			//2
			if (s2 > 0) {
				createjs.Tween.get(top2).to({
					y: 450
				}, 200);
				createjs.Tween.get(middle2).to({
					y: 580
				}, 200);
				createjs.Tween.get(bottom2).to({
					y: 710
				}, 200).call(change2);
			}
			if (s3 == 0 && s2 == 0 && s1 == 0)
				check()
		}
		function go3() {
			//3
			if (s3 > 0) {
				createjs.Tween.get(top3).to({
					y: 450
				}, 200);
				createjs.Tween.get(middle3).to({
					y: 580
				}, 200);
				createjs.Tween.get(bottom3).to({
					y: 710
				}, 200).call(change3);
			}
			if (s3 == 0 && s2 == 0 && s1 == 0)
				check()
		}
		function change1() {
			//1
			if (s1 > 0) {
				var temp1 = bottom1;
				bottom1 = middle1;
				middle1 = top1;
				top1 = temp1;
				c1++;
				if (c1 == 5)
					c1 = 0
				top1.gotoAndStop(c1);
				top1.y = 330;
				middle1.y = 450;
				bottom1.y = 580;
				s1--
				go1();
			}
		}
		//2
		function change2() {
			if (s2 > 0) {
				var temp2 = bottom2;
				bottom2 = middle2;
				middle2 = top2;
				top2 = temp2;
		
				c2++;
				if (c2 == 5)
					c2 = 0;
				top2.gotoAndStop(c2);
				top2.y = 330;
				middle2.y = 450;
				bottom2.y = 580;
				s2--
				go2();
		
			}
		}
		function change3() {
			//3
			if (s3 > 0) {
				var temp3 = bottom3;
				bottom3 = middle3;
				middle3 = top3;
				top3 = temp3;
		
				c3++;
				if (c3 == 5)
					c3 = 0;
				top3.gotoAndStop(c3);
				top3.y = 330;
				middle3.y = 450;
				bottom3.y = 580;
				s3--;
				go3();
			}
		
		}
		
		function check() {
			if (c1 == c2 && c2 == c3) {
				trys = Math.floor((Math.random() * 5)) + 3;
			} else {
				trys--
			}
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: '5FD801A39711F5479B2E57C4E98C66B9',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#BEFBFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['5FD801A39711F5479B2E57C4E98C66B9'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;