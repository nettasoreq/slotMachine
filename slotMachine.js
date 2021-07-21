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
	this.frame_5 = function() {
		var self = this;
		self.stop();
	}
	this.frame_6 = function() {
		var self = this;
		self.stop();
	}
	this.frame_7 = function() {
		var self = this;
		self.stop();
	}
	this.frame_8 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1));

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
	this.shape_35.graphics.f("#F8E9AF").s().p("AjHAxQgQgNgDgSQgDgSALgQQAMgQATgEIB8gWIApAGIApAIIC2AgQAJABABACIj4ArIiJAYIgGABQgOAAgNgKg");
	this.shape_35.setTransform(-8.9981,34.029);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F8E9AF").s().p("ADcBbIgTgEIkyg2Qg7gJg8gMIg2gLIAPhXIACgFIHyBYQATADALANQAMAOAAASQABAQgMANQgMANgRAEIgJABIgKgBg");
	this.shape_36.setTransform(3.076,19.55);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2C3E50").s().p("AkYBaQgmgagJgvIgBgIQgBgkAQgbQAagsAwgLQAJAQAXAEIBqATQgDAFgJABIhtAUQgaAFgJAWQgJAWAPAUQAQAVAZgEQBigRBqgTICagaQAMgCANABQASACAZAEIAqAIIAjAGQAUABAQgDQgFAUgWADInwBYQgMACgLAAQgiAAgdgUg");
	this.shape_37.setTransform(-4.3814,35.2047);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#BB453F").s().p("AAAgDIACACIgDAFQAAgFABgCg");
	this.shape_38.setTransform(-25.475,5.575);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3F5C6C").s().p("AB0AkIjpgoQgPgDAAgNQAAgMAMgDQAEgBAEABIDqAoQAOAFgDAOQgDANgMAAIgCgBg");
	this.shape_39.setTransform(6.7765,-26.4466);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3F5C6C").s().p("Ai1gPQgQgEACgOQADgQAQADIAuAIIE5A2QAGACAEAFQAEAFgBAGQgCANgSAAg");
	this.shape_40.setTransform(8.1692,-34.2924);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#BF3A2B").s().p("AgvDPQgOgJgkgHIBYnxIAAgEQAlACAfAbQAfAbAHAmQADAPgCASIgGAhIhQHIIgCAEQgBhEg4gjg");
	this.shape_41.setTransform(36.3444,-6.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EBEFF0").s().p("ACSB7IlCg5QgLgCgEgFQgEgGACgLIAbiUQADgTATADIFCA6QAJABAEAFQAEAEgBAKIgbCYQgCAKgFADQgDACgFAAIgGAAg");
	this.shape_42.setTransform(3.6694,-9.1591);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#802F34").s().p("ADHCbIhmgSIgMgBQgIgEgNgCIgVgCIjpgpQgUgFgigFIg1gJQgUgEgHgJQgGgGACgFQgFgVAKgMQAJgLAWAAQAHgDAJABIAPADQBlATDKAjIClAdQATADAQgKQAPgLADgTQADgRgLgOQgKgOgTgDIgpgIIjSglIjggnIgPgDQgHgCgBgEQgPgBgIgOQgIgOAGgPQAAgEADgBQAOgRAWAEIHhBVQAFgDAGABIAKACQAgAHAaAZQAZAZAFAfQADAOgDAQQgBAigXAdQgYAdgiAJIgHACQgIAHgMAAIgVgCg");
	this.shape_43.setTransform(4.483,19.8029);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B9C0C7").s().p("AAAgFQADAFgDAGg");
	this.shape_44.setTransform(-46.1375,-14.875);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#35495E").s().p("AiDioIAAgDIgCgCIAAgCQADgGgDgGIAAgEIACgSQABgLADgGQAbg9BEgNICWgaIAIgBQAEgBAEAEIg8FSIAAAFQgBADACAFQgBAQADAHQAEAHANAIQAFADAAACQAAALgCAQIgFAaIgJApQgBACgGACQgRADgGAIQgFAHAAARQAAAEgBACQgDAEgKADQggALgUAdQgVAcAAAhIAAAGQgBAEgDABg");
	this.shape_45.setTransform(-32.9,3.3219);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E54C3C").s().p("ADLEnInThTQgQgEgNAKQgFAEgDAAQgBAAAAAAQgBgBgBAAQAAAAAAgBQgBAAAAgBQgDgEABgGIACgKIA3k3QAEgIgBgFIAIgwIAIgvIAIgsQAFgdAZgCIAOAAQAqADA4ALICyAfIDAAiIAJACQAFABADAEQADAEgBAGIgCAJIg2EwIgeCpQgBAIgEADQgDACgEAAIgHgBg");
	this.shape_46.setTransform(4.925,-16.625);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0592FB").s().p("AhgCPIg2g2QAcgeALgSQAhgzAShLIALgzQAWAdAeAEQAZADAVgLQAWgMALgXQADgFABAAQACAAADADIA2A2QAMAMgMAMIg7A7QAcALANAXQAMAWgDAaQgDAXgQASQgQASgYAFQgbAHgVgMQgVgLgUggIg4A4QgJAJgFAAQgFAAgJgJg");
	this.shape_47.setTransform(-14.55,29.925);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FEDF7D").s().p("AgGB+IhkAAIAAhbQAAgFACgCQACgBAFACQAnANAggZQAegXgBgoQgBgdgVgWQgVgUgdgBQgTAAgJADQgGADgCgCQgBgCAAgFIAAhbIB2AAIAVAUQAyAxASBRQAJArgFAwQgKBthKBDIgLAIQgjgjATg0g");
	this.shape_48.setTransform(22.9612,-23.85);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#7EDAAD").s().p("AgwCqQgEAAgBgCQgCgBACgFQAMgigSgeQgQgdghgHIgCgBQACgIADgmQADgkgKgxQgLg1ggguIDHAAQACADAAAKIAABGQAAAKACABQABABAKgCQAmgJAeAYQAeAYgBAlQAAAmgdAXQgeAYglgIIgDgBQgIgCgBACQgCABAAAIIAABIQAAAKgCADg");
	this.shape_49.setTransform(7.8754,-28.175);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#A6E8A5").s().p("AgWCpQgKAAgEgDQgEgEAAgLIAAhFQAAgKgCgBQgBgBgJADQgkALgfgXQgegXgBglQAAgnAggXQAhgXAlANQAFACACgBQABgBAAgFIAAhOQAAgPAPAAIB6AAQAEACAHALQAeAxAKA+QAGAqgHAxIgBAIQgBAFgDACQgggEgXAPQgWAPgJAYQgJAYAJAaQACAFgBACQgCACgFAAg");
	this.shape_50.setTransform(-17.4314,-28.175);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EA5468").s().p("AA8B+IhPAAQgMAAgEgEQgEgEAAgMIAAhQQgbAKgVgFQgcgFgSgYQgRgWACgeQACgbAVgUQAVgUAbgBQAUgBAKAFQAFACACgCQABAAAAgGIAAhcIABgBIAHgBIBSAAQAIAAABACQACADgCAGQgMAnAZAhQADADAAADQATAVAdAAIAJABQgBAAAAABQAAAAgBAAQAAAAgBAAQgBAAAAAAIgEACQAOAiAFAbQAJA0gGAuQgGA3gYAtQgOAdgVAUQgEAFAAADQgmglAUg1g");
	this.shape_51.setTransform(16.3309,10.05);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#22A5FD").s().p("AhgDaQgVgLgLgVQgLgUACgYQADgYAPgRQAIgJAHgEIARgKIg6g6QgHgHAAgFQAAgGAIgGIA1g1IADgEQABgCgFgCQgYgMgMgWQgMgWAEgXQAEgbARgRQASgSAZgEQAZgEAWAMQAWANALAYIADAFIA3g4QAKgKAGAAQAFABAKAJIA4A4QglAPgLAhQgKAiATAgQABALgHAgQgTBUgnA6QgNATgQAPQgGAGgCAAQgBgBAAAAQgBAAgBAAQAAAAgBAAQAAAAAAABIgCAEQgTAmgoAFIgKABQgSAAgQgJg");
	this.shape_52.setTransform(-30.975,20.9321);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E4384F").s().p("Ag/DgQgZgCgUgQIgBgCQgCgEAGgFQA0g6ALhYQAKhMgdhMQgDgIABgBQABgBAIgBQAmgCAUggQAVgfgMglQgCgFABgBQABgBAFAAIBdAAIAAFJQgGAJgOAAIhGAAQgHAAgBACQgBACACAGQAIAYgJAZQgJAYgUAOQgTAMgWAAIgGAAg");
	this.shape_53.setTransform(35.1483,11.1625);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FECF64").s().p("AhkDVQgJgGgCgGQABgCAFgEQBEg4AQhfQAOhPgZhLQgUg+gygsIgEgDQgCgCABgDIDMAAQAIgBAGAKIAAFJQgCADgJAAIhKAAQgIAAgBABQgBABACAHQAKAlgXAeQgVAeglACIgGAAQgYAAgRgMg");
	this.shape_54.setTransform(35.05,-22.6437);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#663733").s().p("AgNgaQAMAAAHAIQAHAHAAALQABALgIAIQgHAIgMAAg");
	this.shape_55.setTransform(1.3015,16.275);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FEBD40").s().p("AgNgcQAWADAEAVQACAHgFAIQgFAIgIAFIgKAFg");
	this.shape_56.setTransform(1.3173,-2.525);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#804B40").s().p("AgMAMQgGgMAJgOQAHgKAOgDIAAABQACADAAADQACAUgCAWQAAADgCACIAAAAQgRgCgHgNg");
	this.shape_57.setTransform(-1.2488,16.25);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#804B40").s().p("AgGAeQgHgIAAgMQACgfAYgQIABBLQgNgBgHgHg");
	this.shape_58.setTransform(-1.3766,4.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#804B40").s().p("AgNA2QgLgBgIgIQgIgHAAgMQAAggAYgYQAYgYAhABIAAA1QgOABgGAHQgHAHgBANQgBALgIAIQgGAHgKAAIgBAAg");
	this.shape_59.setTransform(-4.0755,-5.3989);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#663733").s().p("AgmBeQgDgCAAgIIAAg3QAAgGADgEIAAgCQACgEAGgDQASgJgCgPQAAgQgTgGQgDgCgCgCIAAAAQgCgBAAgDQgCgXACgWQAAgCACgDIAAAAQAlACAWAYQAXAYgCAlQgCArgoAWQgKAHgBAIQgDAUgYACg");
	this.shape_60.setTransform(3.8705,-1.35);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FEDE40").s().p("AgFAvQgHgHgBgMIAAg2QABgMAHgIQAGgHAMgBIAABtQgMgBgGgHg");
	this.shape_61.setTransform(-1.4,-40.725);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FEBD40").s().p("AgOArIAAhVQAAgJADgDQALAAAHAIQAIAHAAALQABAcgBAdQAAALgIAIQgHAHgLAAQgDgDAAgJg");
	this.shape_62.setTransform(1.1875,-40.725);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FEDE40").s().p("AgeAoQgKgDgGgKQgFgKADgKQADgJAJgGQAcgRAUgLQAOgHAMAIQANAIAAASQAAALgMAHIgwAcQgHAEgHAAIgHgBg");
	this.shape_63.setTransform(-35.252,20.3396);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FEDE40").s().p("AAMAmQgUgLgdgTQgJgGgDgJQgCgKAFgJQAGgKAKgDQAKgDAKAFIAxAdQALAHAAALQAAARgMAJQgHAFgHAAQgGAAgGgDg");
	this.shape_64.setTransform(-35.2391,-20.2904);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FEBD40").s().p("AgjAmQgJgMAHgOQAKgUATgdQAGgKAKgCQAKgCAJAFQAKAGADAKQADAKgGAKIgcAwQgHAMgMAAQgQAAgJgMg");
	this.shape_65.setTransform(20.2699,-35.1891);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FEBD40").s().p("AAKAlIgtgbQgPgIAAgMQABgQAMgJQANgJANAHQAWAMAcASQAJAGACAJQACALgGAJQgGAJgKADIgGABQgHAAgHgEg");
	this.shape_66.setTransform(35.15,20.306);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FEBD40").s().p("AgmAjQgMgJAAgQQABgMAMgHIAwgcQAJgFAKADQAKADAGAIQAGAJgCAKQgBAKgJAGQggAWgWAJQgFADgFAAQgHAAgHgGg");
	this.shape_67.setTransform(35.165,-20.2982);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FEDE40").s().p("AgIAmIgcgvQgGgKADgKQADgLAKgGQAKgFAKADQAJADAGAJQASAdAKASQAHAPgIAMQgIANgSAAQgLAAgHgNg");
	this.shape_68.setTransform(-20.3465,-35.2029);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FEBD40").s().p("AgbAbQgLAAgIgIQgIgIAAgLQAAgKAIgIQAIgIALAAIA3AAQAMAAAHAIQAIAIAAAKQAAALgHAIQgIAIgMAAIgcAAIgbAAg");
	this.shape_69.setTransform(40.6985,0.025);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FEBD40").s().p("Ah5EOIAAhsIABgBIAHgDQASgGgBgSQgBgSgRgFIgFgCIgCgCIAAg1QAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAQASgFAEgUQABgHAKgEQAegRAJgdQAMgkgVgfQgUggglgEQgHAAgCgCIAAh5QAAgLABgBQABgBALAAIADAAQCGAJBBB4QAhA8gGBIQgHBVg5A7QgtAvABBAIAAAXg");
	this.shape_70.setTransform(12.1648,2.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FEDE40").s().p("AgVEOIAAgfQAAgUgDgNQgJgkgYgaQg7g7gLhQQgMhcAzhNQA0hNBcgWQAVgFAqgCQAJAAACABIgBACQgKAEgBACQgCACAAALIAABuIgCADQgCACgFABIgHABQgcAGgRASQgRAUgDAbQgCASANAJQANAJAOgJQAKgHABgPQACgSARgIQAHgCAEACIABADQACARgBAkIgBADIgFAFIgGAGQgNAMgCAUQgCAVAUAIIAHADIABAEQACAggCARQgBADgGACQgTAHAAARQAAASATAGQAGACABAEQABAEAAAVIAABDQAAAKgDADIAAABg");
	this.shape_71.setTransform(-11.3971,2.75);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FEDE40").s().p("Ag2AHIAAgNQAKgWAaACIAtAAQAMAAAIAHQAIAIAAALQAAALgIAIQgIAIgMAAQgegBgPABIgDAAQgYAAgJgUg");
	this.shape_72.setTransform(-40.75,0.025);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FEFAE5").s().p("AA1BUIgRgEIgRgGQg8gagUhDQgHgZACgkQADgDAJAAIBtAAQAKAAADAEIAACjg");
	this.shape_73.setTransform(-6.8222,37.875);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FEECB2").s().p("AhCBUQgCgEAAgHIAAiOIABgJIACgDQAEgCAJAAIBrAAQAKAAAEADQABAcgCASQgEAYgKASQghA9hBANIgEACg");
	this.shape_74.setTransform(6.6042,37.875);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FEBDAB").s().p("AgRASQgIgIAAgKQABgJAHgIQAIgHAJgBQAJAAAJAIQAHAIABAJQAAAKgIAHQgIAIgJABIgBAAQgIAAgJgIg");
	this.shape_75.setTransform(28,-27.9236);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FE9979").s().p("AgiAlQgQgOAAgWQAAgVAOgPQAOgOAWgBQAVAAAPAOQAPAPAAAVQAAAVgPAPQgOAOgVABIgBAAQgTAAgPgOg");
	this.shape_76.setTransform(30.5258,-16.875);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FE7E68").s().p("AjaGnIAVgOQAwgjAjggIAwgtQASgRAug2QAcgkAkg3QA+hiAWhkQAKgwgCgoQgGhxg8hOQg5hKhWgRQgIABgEgEQAJgCAMABIAVACQAzAFAsAWQB/BAAiCHQAWBagmBlQgjBdhKBYQiGCjjNBuIgFACQAHgHANgIg");
	this.shape_77.setTransform(25.3934,-0.3393);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FE5A4E").s().p("AhEG2QABgBAAAAQAAgBAAgBQAAAAAAAAQAAgBgBAAIgDgDIg7g9Qgvg2gggrQgthAgghAQguhdgMhWQgJg4AIg3QAJhIAfg6QA0hhBXgqIAHgDQAEgCABgDQAyATAkAgQAFADADAAQAEAAAEgEQBPhBBjgDQA4ADA2ApQBEA1AdBcQARAyAAA6QAABAgbBMQgjBmhTBrQgZAhgiAlQhIBMhVA9IgRAKIgQALIgLAGIgFABQgEAAgEgDg");
	this.shape_78.setTransform(6.0242,0.1279);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EA443F").s().p("ADxG4Qg5gchAgsQiVhmhjh/QhPhogZhhQgGgXgDgYQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAAAgBgBIAAgHQACgGgCgGIAAgVQADgGgDgGIAAgJQADgIACgOIAFgXQApiQCLg4QA+gaBIAHQAoAEAiAOQABAEgDACIgGADQgfAPgaAUQhOBAgeBlQgUA+ACBAQABA1APA6QAfBzBTB5QAtA+AzA4IAvAwQAFAGABACQABABAAABQAAABAAAAQgBABAAAAQAAAAgBAAIgBAAg");
	this.shape_79.setTransform(-24.9775,-0.0976);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F5F8F8").s().p("Ag8BJQgFgDAAgLIAAh2QAAgKAFgDQAFgDAKAFIBnA8QAIAFAAAFQAAAGgJAFIhlA7QgHAEgEAAIgFgBg");
	this.shape_80.setTransform(1.15,27.9938);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#DC5790").s().p("AgJAcQgDgEgBgGIAAgkQABgFAEgEQAEgEAEABQAMAAABAMQABASgBATQgBAMgMAAIAAAAQgFAAgEgDg");
	this.shape_81.setTransform(-16.725,-3.725);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#DC5890").s().p("AAAAfQgFAAgEgEQgDgEgBgGIAAghQAAgGAEgEQAEgEAFgBQAFAAAEAEQAEAEABAGIAAARIAAASQgBAGgEAEQgDAEgFAAIgBgBg");
	this.shape_82.setTransform(5.5375,-3.7472);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#DC5790").s().p("AgJAvQgEgEAAgIIAAhFQAAgPANgBQAOAAAAAQIAABFQAAAQgOAAQgFAAgEgEg");
	this.shape_83.setTransform(16.675,-3.75);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#DC578F").s().p("AAABGQgNAAAAgRIAAhpQAAgRANAAQAOABAAAQIAABpQAAARgNAAIgBAAg");
	this.shape_84.setTransform(-11.175,-3.7474);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#DC5790").s().p("AgJBSQgEgFAAgIIAAiKQAAgLAIgEQAGgDAHAEQAGAFAAAKIAACIQAAAQgMACIgCAAQgFAAgEgEg");
	this.shape_85.setTransform(-0.025,-3.731);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#DC578F").s().p("AgNBUIAAioQAAgMAKgEQAIgDAGAIQADADAAAJIAACnQAAASgNAAQgOAAAAgSg");
	this.shape_86.setTransform(11.1,-3.7298);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#DC5790").s().p("AgIBiQgEgFgBgGIAAiqQABgSAMAAQANAAABASIAACpQAAAHgEAEQgEAFgGAAQgEAAgEgEg");
	this.shape_87.setTransform(-5.625,-3.725);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#D9E6EE").s().p("AgVClQgCgBAAgGIAAkeIANABQAJAAACgDQADgCAAgIIgBgOIAAgKQACAGgBATQgBAOANgCIAHAAIABALIAADfQAAATgLAQQgLAQgRAGIgEABIgCAAg");
	this.shape_88.setTransform(38.875,11.395);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#C0D4E3").s().p("AgECrQgkgJgHgkQADgCAEAAIAIAAQAegBAAgdIAAkHQAKgEANAAIAbAAIAAFaIgWABQgUAAgKgDg");
	this.shape_89.setTransform(-41.3,15.7417);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#D9387D").s().p("AhECHQgxgRgbgpQAKABAOAKQAfANAfgBQA3AAApghQAtgjANg2QANg9gfg3IgCgGQA2AlAMBBQALA9ghA0QggAzg9ARQgVAGgUAAQgbAAgbgKg");
	this.shape_90.setTransform(1.4375,29.444);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#2B4D66").s().p("ACwDSIAAgZQAAgagbgEQgHhUgihDQgZgxglgoQg0g6hCgfQg6gcg5gHQgOgBgDgCQBjgFBYArQChBRAvCuQAMAqABA0QABALgBAVQAAAFgDABIgMABQgHAAgGgEg");
	this.shape_91.setTransform(18.8083,-22.5508);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#C0D4E3").s().p("AAeDqIg7AAQgOAAgIgIQgIgJAAgOIAAgUIAYAAQAOABAJgCQAKgCAFgIQAFgHAAgLIAAl4QAHACACgFIACgIQgCAMANgBQAOAAAIAIQAIAJAAAPIAAGEQAAAXgOAJQgIAEgGAAIgCAAg");
	this.shape_92.setTransform(-30.475,15.2025);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#D9E6EE").s().p("AgbDMQgEAAgCgCIAAgFQgDgEAAgIIAAlCQAAgJADgDIAAgZQAAgNAIgIQAIgIANgBIAmABQADADAAAJIAAFqQAAAdgdAEIgMABIgXgBg");
	this.shape_93.setTransform(-33.075,13.375);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#D9E6EE").s().p("AgiDQIAAl2QABggAfABQAFAAABgDQACgCAAgFQABALALgBIARAAIAAF0QgBAPgIAJQgJAJgQAAg");
	this.shape_94.setTransform(27.95,12.775);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#C0D4E3").s().p("AhiDdQgJgJgBgSIAAgHQAAgGABgDQACgCAKgBIAaAAQAagBACgbIAAlmIAAgIQABgFADgDIAXgBQAKgCAIAIQAKAIABAMIAAE1QAAAIADABQACACAHgEQAdgQABgjIABgiIgBjBQAAgGACgBQAnAGAKApIABAKIAADlQABAYgSAQQgQARgYAAQgRABgQgBQgHAAAAAIIAAATQAAAOgJAHQgGAIgNAAQglAAgTABIgDAAQgOAAgJgIg");
	this.shape_95.setTransform(35.25,15.7502);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#DC578F").s().p("AhbB7IgRgKQghgvAFg6QAFg5ApgpQApgpA5gFQA6gGAuAiQAUAYAFAqQAIBMgzA2QgqAsg9AFIgNABQgiAAgjgPg");
	this.shape_96.setTransform(-2.1723,25.8654);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#407092").s().p("AltDSQgChXATg5QA9i8C6hFQA2gTA5gCQAlACAnAMQBUAaBCA7QA1AvAiBBQAfA5AJBDIADAZQAAAHgDACIgLABIgMAAIgOAAQgJAAgCgBQgCgCgBgJQgIhOgxhAQhLhgh7gPQhugNhdBGQhdBFgRBuIgCAPIgBAEQACALgMgBIglAAQgbABgCAbIABANQAAAHgEAFQgHACgGAAQgIAAgGgDg");
	this.shape_97.setTransform(-2.6848,-22.6237);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#D9E6EE").s().p("AgWCUIgCgBIAAj6QAKgYAMgKQAOgKAKgBQADADAAAJIAAD7QAAAgggABIgHABIgIgBg");
	this.shape_98.setTransform(-43.775,13.57);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#7A432A").s().p("AgMAMQgCgEAAgGIABgMQAAgDAFgBIAVAAQAEAOgEAOIgHAAIgKABQgHAAgBgDg");
	this.shape_99.setTransform(-7.2625,5.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#7A432A").s().p("AgMAMQgBgCgBgMQABgIACgCQACgBANAAQAIAAABACQACABgBAKQAAALgCACQgBABgMAAQgKAAgBgCg");
	this.shape_100.setTransform(-13.05,5.875);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#7A432A").s().p("AgMANQgCgDAAgMQAAgJACgBQADgBAMAAQAJAAABACQABACAAANQAAAIgCABQgCABgKABQgKAAgCgCg");
	this.shape_101.setTransform(8.65,1.55);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FDBF92").s().p("AgQgHQgBgOABgQIAAgVQATAJAZgBIABAdQgBASgEALQgSAngiALQAPgegDgjg");
	this.shape_102.setTransform(-4.35,8.15);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#7A432A").s().p("AgMAMQgCgBAAgLQAAgJACgCQACgCAKgBQALABABACQACACAAAKQAAAKgCACQgBABgLABQgKgBgCgCg");
	this.shape_103.setTransform(14.4,1.525);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#C68965").s().p("AgBAAQABAAAAgBQAAAAAAgBQAAAAAAAAQAAAAABAAQACACgDADg");
	this.shape_104.setTransform(15.6818,-7.9611);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#7A432A").s().p("AgMAMQgBgCAAgMQAAgJACgBQACgCAMAAQAJAAABADQABABAAAKQAAALgCABQgCACgMABQgIgBgCgCg");
	this.shape_105.setTransform(24.525,-2.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#2A71AC").s().p("AgKAYQgEgEAAgIIAAgXQAAgRAOAAQAPAAAAASIAAAZQgCANgNABQgHgCgDgDg");
	this.shape_106.setTransform(18.75,18.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#E54D40").s().p("AgiggQgBgCABgEIABgHQAIAgARAPQAPAQAVAHIAEABQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAIgVAAQgNAAgHACQgMADgQANg");
	this.shape_107.setTransform(-15.37,11.725);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FDC8A2").s().p("Ag7AjQgDgGgDgSIAAgnQAeABATgKQAZgPAMghQALAiAeAPQAGAKgEALQgEAEgHAAQgLAAgCABQgCACAAAIQAAAIADACQABACAMgBQAGAAACACQAEAEAAAGIgBAKQgBATgIAWQgCAEgEACQgHAEgIABQgEABgLAAQgKgBgGABQgrgIgUgrg");
	this.shape_108.setTransform(-12.25,5.95);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#CB6394").s().p("AgyggQAGgBAIgFIAOgIQAIAhATATQAQAPAeAIIg0AAQgdgBgUATg");
	this.shape_109.setTransform(5.125,7.325);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FDC8A2").s().p("AAQBRQgZgBgVgUQgTgSgHgYQgCgJABgEIAAgqQAAgIACgDQBBgCAqgeQAEAEABAHIABALIAAAnIgCACQgGAAgCAEQgCADAAAHQgBAFAEADIAJAEQAAAigUAhIgCAFg");
	this.shape_110.setTransform(8.6083,2.075);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#7A432A").s().p("AgMANQgCgDAAgLQAAgKACgBQADgBALAAQAKAAABACQABACAAANQAAAIgCABQgBABgLABQgKAAgCgCg");
	this.shape_111.setTransform(8.65,-27.35);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#7A432A").s().p("AgIAPQgHgCABgGQACgHgBgCQgDgLAIAAIAOgBQAGAAABACQACAEAAAHIAAAMQAAAEgGAAg");
	this.shape_112.setTransform(14.3938,-27.3792);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#7A432A").s().p("AAFAPQgOgBgCgDQgCgCgBgOQAAgKAJABIAKAAQALgBgCALQgBAEABAFQACAKgJAAIgCAAg");
	this.shape_113.setTransform(30.3141,-2.78);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#2A71AC").s().p("AgNAPIAAgaQAAgRANAAQAOAAABARIAAAXQgBAIgCAEQgEADgIACQgMgBgBgNg");
	this.shape_114.setTransform(4.3,18.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#E64E3E").s().p("AgHAIIACgIQAIgGAFgBIgHAPg");
	this.shape_115.setTransform(-18.375,-2.15);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#E54D40").s().p("AgLCFIgJABQgGAAgEgCQACgDAFAAIAHgDQAWgHAQgWQAQgVAAgYIABgXQAAgJACgCQACghgOgYQgZgpgugCIgPAAQAygqASgUIAGgGQAcAIAJAfQAAAAAAABQAAABAAAAQAAABABAAQAAAAAAAAIABCJQACADAAAIIAAA4QAAAGgCAGQgQAUABAXQgWgTgeABg");
	this.shape_116.setTransform(-5.575,1.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#F88400").s().p("AhRA1QgEAAgCgCQgBgdAGgPQgBgHAJgIQAUggApgJQAKgFAOADQAjAFAWAbQAVAZgBAkQAAAHgCACQgTAFgagKQgegOgLgeIgFAKQgLAUgVAMQgSAJgSAAIgIAAg");
	this.shape_117.setTransform(-10.0273,-2.0839);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#7A432A").s().p("AgNAFQABgFgBgFQgCgKALABQAOABACADQACACABANQAAALgKgCIgJABIgCAAQgJAAACgKg");
	this.shape_118.setTransform(-8.7142,-28.78);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#7A432A").s().p("AgMAMQgBgBAAgLQAAgKABgBQACgCAKgBQALABACACQABACAAAKQABAKgCACQgCACgKAAQgLAAgCgDg");
	this.shape_119.setTransform(-14.5,-28.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#CD6695").s().p("AgFAFQABgGAEgDIAFAJg");
	this.shape_120.setTransform(20.35,3.875);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FDB684").s().p("AgUAKQAUgGAUgNIABATg");
	this.shape_121.setTransform(15.225,9.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FDBF92").s().p("AgmBbQgCgDADgEQAPgbADghQAAgEACgCIALgEIABgLQABgKgJAAQgCAAgDgCQgBgCAAgJQAAghgDgRIAJgJQAFgGACgFQABAAAAAAQABAAAAABQAAAAAAABQAAABAAABQgBAzAtALIAAAWQAAAMgBAJIABAEIgBAGQAAADgDABQgHATgSATQgNARgbADg");
	this.shape_122.setTransform(16.185,1.0972);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#F47707").s().p("AgfBDIAAhTQAFgZANgNQANgMAWgEQAFgDAEACQACACgBAEQgEAQABAXIAAAmQgBALgCAEQgJAVgHAHQgNAPgVADIgCAAQgFAAAAgGg");
	this.shape_123.setTransform(-21.405,5.7807);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#CB6394").s().p("AgYAQQAigmAKgPIAFACQgdAdABAsQgMgNgJgJg");
	this.shape_124.setTransform(19.1,-10.025);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#91563A").s().p("ABMAqQgUgIgJgPQgKgQACgUIAAgCIAAgBQgDAFgFAGIgJAIQghAZg0AFIgLACQgGABgFgEQAHgsArgTQAqgTAoAZIADACQAPAGAGAQIAKATQAFAQgBAMQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgGgCg");
	this.shape_125.setTransform(11.6023,-5.6492);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FDC8A2").s().p("AgqA4QgHgCgDgKIAAgsQAAgJgCgLIgBgEQgBgDACgCQAegGARgHQAfgOAUgXQAFgGABABQACAAADAIQABAPAAAgQgCACgHAAQgJAAABAJIAAAHQAAAIAHAAQAIAAACADQACAmgTAiQgFAMgIABIgFAAQgiAAgdgdg");
	this.shape_126.setTransform(25.2283,-1.2209);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#7A432A").s().p("AgMAMQgBgCAAgNQAAgHACgCQACgBANgBQAIABABACQABABAAALQAAAKgCACQgCABgLAAQgJAAgCgCg");
	this.shape_127.setTransform(-30.375,-5.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#7A432A").s().p("AgLAMQgCgCAAgKQAAgKACgCQABgBAKgBQALABACACQACACAAAKQAAAKgCABQgCACgLABQgKgBgBgCg");
	this.shape_128.setTransform(-24.6,-5.675);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FDBF92").s().p("AgsBWQAhgngBgvIACAAQAGgBADgEIABgJQAAgHgDgDIgJgEQAAgtgCgMQAFABAGAEIAIAHIAoAeIAAAgQAAASgCANQADADgEAGIgOAFQgIADgFADQgRAMgFAVQgDAJgCABQgUADgJAAIgDAAg");
	this.shape_129.setTransform(-23.325,-4.2159);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#3085CC").s().p("AhkBcIAAg7QA7gaA2gtQARgPAfgfQADgEgBgDQAPAFALAOQALAPAAAPIABArIgBAEIgqABQgDgDAAgJQABgMgCgHQgBgJgKAAQgKAAgBAJQgCAQACAQQAAAEAEAEIAHAFIAABIg");
	this.shape_130.setTransform(14.45,19.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#79AC54").s().p("AgxA0IgBgBQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAQgJAVgUQAbgYAjgtIABBgQAAAGgIABg");
	this.shape_131.setTransform(29.555,15.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FDC8A2").s().p("AgbBRIAAhIIgCgGQgBguABgRIAKgJQAFgFADgEQAPgDAYACIACACIAACWQAAAIgIAAg");
	this.shape_132.setTransform(21.505,28.1432);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FDB683").s().p("AgbBGQgBgBABgHIAFgsIAGhAQABgNABgGQABgHAHAAIAjAAIAACQIgxAAQgFAAgCgCg");
	this.shape_133.setTransform(-4.37,29);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#348ED8").s().p("Ag0BBIAAgMQANgIgBgTQAAgLgBgGQgBgKgKAAQgLAAgBAKIAAATQAAAIgDACIgrAAIAAgnQgEgIAFgPQAEgLAJgLQATgTAcAAIBVAAIAeAAQAIAAADADIARAAQALAAAGAEQAEADgGAFQgtAwghAWQglAbghAPQgIAEgDAAIgCgBg");
	this.shape_134.setTransform(9.6161,16.5091);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#F39998").s().p("AgEAhIADgWIAAgtIABAAIAGBDIgGACIgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAg");
	this.shape_135.setTransform(-20.1,26.4225);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#3085CC").s().p("AhGA/QgEgDABgIQABgKAAgFIAAgZQAQgJAfgbQAWgVAQgUQADACAAAJIAAAkQAAAJAJgCQAZgGAKgTIAHgOQADgGADAEQABALAAAPIAAAaIAAAMQAAAIgDAFIgIANQgEAHgBAHQgDgCgDABQgVALgbACQgPABgigBIgOABIgCABQgHAAgCgDg");
	this.shape_136.setTransform(-25.9281,13.8536);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#F49797").s().p("AgjATQgBgHgHAAIgqABQgJAAAAgJIACgSQgCgDACgEIADgGQACgGAIgKQAUgUAbACIAWAAIAQgBIAQAAQAKACAUgBQAbABAPATQABAAAAABQAAABAAAAQgBABAAAAQAAAAgBABQgFAEgHAIIgMANQguAsguAcIgHADg");
	this.shape_137.setTransform(-10.8333,20.525);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FDFAF9").s().p("AgDADQgFgDgHAAIAfgFIgPAKIgBABQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_138.setTransform(21.475,-14.1458);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FEFEFE").s().p("AAMAqQgHgZgXgMIgDgCQgHgDgVAAQgJAAgCgCQARgCANgLQALgMAGgSQACABAAAEIACAFQAFAQANAJQANAJARABIALAAQAHgBAEABQgeAIgMAdIgDAJIgBAAQgCAAgBgEg");
	this.shape_139.setTransform(-1.65,-14.2475);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FDBF92").s().p("AgnBsQgHAAgGgCQABgEAEgDIAGgGQAdgmgCgwQADgDAJABQAJAAgBgJIAAgFQABgJgIAAQgKAAgDgDIAAgfQgBgRgEgNQgIgQgBgJQAXAEALAQQAIALAAAOQABAKgDAQQgEAUAJAQQAJAOAUAGQAHACgBAHQgEAigXAWQgZAXggAAIgHAAg");
	this.shape_140.setTransform(14.9559,-26.614);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#D26699").s().p("AhpBaIgBgKIAAhvIABgMQAFgdAYgOQAKgFAHABQAHgCANAAIByAAQANAAAGACQAJgCAEAFQABADgEAFQgbAjgKAJQgFAEgBAAQgbgMgIgBQgfgGgcARQgcASgIAeIgCAKQgCANABAaIgBAMQgEAFgIAFIgOAGIgCABQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_141.setTransform(10.4205,-5.0795);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FDC8A2").s().p("AgkBLQgTgZABgfIAAg7IABgGQACgCAEgBQA0gGAYgtQAEgHAEABQAWAigGA0QgJANAIAPQAEAJgEAUQgJAugdAYQgegGgUgag");
	this.shape_142.setTransform(8.3118,-26.7312);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FEFDFC").s().p("AADgCIAAACIgFADQAAgDAFgCg");
	this.shape_143.setTransform(23.55,-15);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#804A32").s().p("AgNABQAAgPAMgNIAOAMIgNAVQgGAOgHAIg");
	this.shape_144.setTransform(-34.8,-11.55);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#5C2E1A").s().p("AgNArIAAhMQgBgFACgCQACgCAFAAQAOAAADACQACADAAAQIAABAg");
	this.shape_145.setTransform(11.5,37.625);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FDC8A2").s().p("AAdAdIg6AAQgGAAAAgGIAAgYQABgJAFgHQAFgHAJgCQARgDALACQAMACAIAMQADAIAAAKIAAAUQAAABAAABQAAAAAAABQgBAAAAABQgBAAAAAAIgFAAg");
	this.shape_146.setTransform(-38.325,2.9886);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FDBF92").s().p("AgNADQAAgFACgDQAIgFgBgJQAAgIgIgHQgCgIAAgNIgBgVQAAgDADgBIALAQQAHAKAHAFQAMAKAPAGIABAVQAAAMABAIQgCAAgBAEQgEAVgQATQgaAdgiAAQAbgdABgxg");
	this.shape_147.setTransform(32.025,-0.825);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FDBF92").s().p("AgdA6IAAggQACgDAHAAQAJAAAAgJQgBgDABgEQAAgHgIAAQgIAAgCgDQAAghgDgMIATgIQAigOAMAiIAAA+IgaAaQgKAJgMAAQgHAAgHgDg");
	this.shape_148.setTransform(-6.275,-29.8716);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#3085CC").s().p("AhIAdIAAg5ICQAAQADAKgHAMQgDAGgCALQgCANgCAFg");
	this.shape_149.setTransform(-27.43,30.45);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#F6A016").s().p("AAgBWQgSgCgNgMQgMgMgEgSQgEgEAAgGIgBgQQAAgKADgGIAAgYQAAgOgCgKQgFgVgPgRQAcAAAHACQASAEANAPQAMAPABAUIAABuQAAAHgGAAIgCgBg");
	this.shape_150.setTransform(37.8765,-4.2437);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FDC8A2").s().p("AgcBRQgDgDAAgJIAAh4QAAgJADgDIAAgOQADgDAOAAQATAAAEABIAJAKQAEAFAFACQACAEAAAJIAAAvQAAAHgDAEIgBBIg");
	this.shape_151.setTransform(1.4125,28.125);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#91563A").s().p("ABUAoIgBgEQgMgWgYAHQgRAJgJAAQgdAGgZgOQgMgHgMACQgLABgIAJQgGAFgBAHQgJgYAPgXQAPgZAagFQAjgGAnAGQAVAEAOAQQAOARAAAUIAAAXIgBAAQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBg");
	this.shape_152.setTransform(-11.6787,-37.7325);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#F25244").s().p("AhMA7IABgzQAAgHACgCIABgcQAAgRgCgMIBnAAIAIgCQAEACAIgCQARgCAKAFQACAEgCADIgEAEQgXAYgjAbIgMAKIgEACQgfAGgWAcIgFAFIgKAFIgDABQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBg");
	this.shape_153.setTransform(-11.4556,-8.4183);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#91563A").s().p("ABQAxQgtghgJgIIg3gBQgUAAgLgCQgLgCgFgJQgMgOABgZQAAgFAFAAIA6AAIA6ABQAlACANApQAEAEAAAFIAAAtQgBAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_154.setTransform(-27.358,-13.6237);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FDC8A2").s().p("AgdA1IgagaIAAg6IABgGQAAgNARgIQAPgJAPAIQAbAPAbgEQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQAJAQgFAcQgJAGABAIQAAAJAIAHQADAWgEAJQgbgIgWAKQgFACgGAAQgMAAgLgKg");
	this.shape_155.setTransform(-14.6074,-30.0439);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#7A432A").s().p("AhBAnIAAhQQADgDAJAAIBrAAQAJAAADADIgQBVIhtABQgGAAAAgGg");
	this.shape_156.setTransform(-28.1,37.525);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#7EB357").s().p("AgNBNQgCgIAAgLIABgUQgBgSgJgOQgKgMgRgGQgLgEgMAAQgIAAgDgCQgCgEAAgFIAAgJQACgFAEgEQANgRAEgKQACgEADgCQAEgBAGABQAEABAEAEQAZAYAjAAQAZAAAXgSIAHgFQAEgDADgBIAHAAIAAA4QgEAKgJAKIgPAQQghAlgeAWIgEADIgDABQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_157.setTransform(25.825,12.115);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#348ED8").s().p("AAABEIAAgCQgBgOgCgCQgCgCgOAAIhEAAIAAgdQAAgRACgLIAEgOQACgDAJAAIArAAQAJAAABgKQgCgUABgLIAKAAQAbAcAiABQAYgGAJACQACAHAAAIIgBAPQgBAGgFAFQgoApghAYQgFAEgDAAIAAAAg");
	this.shape_158.setTransform(-33.125,8.3091);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FEB431").s().p("ABSA6IgFgDQgYgKgQgZIgGgKQgDgHgFAGQgdAjg5ANQgKACgEgCQgHgJgEgLQgDgrAggeQAGgHALgEIACAAQABgCAEgBQAugSAnAbIAPAMQAGADAFAJQARAbgFAuQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAg");
	this.shape_159.setTransform(27.4235,-9.9475);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FDC8A2").s().p("AALBYQgagGgQgQQgFgEgBgEQgXgbACgjIAAgoQADgIAHgNIANgTQACgFAFAAIBFABQAKAAAEADQADADABAKQABAfgCAMQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAIgFABQgDABgBADQgCAIACAJQABADAEAAIAGABQADACAAAGQgCArgdAjIgDACQgDACgEgBIgHgBg");
	this.shape_160.setTransform(-30.2379,-4.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#7A432A").s().p("AhHBBIAAgFIgBgzQgCgDAAgFIAAg3QAAgGACgDQADgDAJAAIB4AAQAJAAADADQADACAAAHIAAA2QgBAHgCACIAAA5Ig6AAQgCgDAAgJIgBg8IAAgFQAAgDgDgCQgJgCgHADQgDABAAAIIAAA8QAAAJgCADIg1AAQgEABgBgCg");
	this.shape_161.setTransform(11.525,35.35);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#91563A").s().p("AggBCQgFAAgCgDIgNgFQgIgEgEgDQgVgTgBgWIABhLQADgBAFAFIAQAQQASATAWgKQAWgIAWAJQAUAJARgSIASgRIADgEQADgBACABIABBBIgCASQAAATgTAPQgNALgRACIgjABIghAAg");
	this.shape_162.setTransform(-11.5833,-20.695);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FDB683").s().p("AARBzIhlAAQgDgCAAgHIAAg2QAAgFACgEQAEgDAKAAIBIAAQAIAAACgCQACgBAAgIIAAiGQAAgHADgDQAcAAAVAUQAWAUABAdQABA0gBA2QgBASgLAPQgLAOgVAHQgIACgNAAIgGgBg");
	this.shape_163.setTransform(33.0625,16.0044);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#79AC54").s().p("AhqBKIgBgBQgEgkAFgVQADgCAJgBIAgAAQAIAAABgBQACgCAAgHIAAg8QAAgKADgDQADgDAHAAIBxAAQAEAAACACIAcCLQACAGgHAAg");
	this.shape_164.setTransform(29.4125,34.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#EC9090").s().p("AiAB+QgDgDACgJIAPhKIADgSQACgLAEgHIAHgBQAEgBACACQADAJAAATIAEAeQAAAHAHAAIAsAAQAIAAgBgIIgHhCQgDgNABgGQACgCAJgGQA9gnApgwIAHgGQAEgCABAEQACAMgBAWQAAALgCAEQgDACgHAAIgUAAQgIAAgCACQgCACgBAIIgLB0QgBAHACACQABABAHAAIBEAAQAGAAADADIAKAyQABAGgDABIgGABg");
	this.shape_165.setTransform(-10.2444,29.3417);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FDC8A2").s().p("ABhB2QgJAAgDgCQgDgDAAgJIgJhkIABASQAAAFgDADQgDACgKAAIh0AAQgLAAgDgDIgWgBQgLgBgJgFQgdgRgBgeIAAhaQADgCAKAAIA6AAQANAAACACQADADAAANIAAAsQAAAKAJAAIBDAAQAIAAAMgFIAUgGIAGgCQAEAAADADQABADgBAKQAAAHABACQACACAHAAIAjAAQAHAAADADQADACABAIIAMB7QABAIgCADQgDACgIAAg");
	this.shape_166.setTransform(-27.3833,24.65);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#BEBEBC").s().p("AhCCLQgEgBgSAAQgrAAgMgoIgCgIQAAgNADgFQAGgOAPgRQAIgKAAgQIAAhEQAAgiAZgaQAagYAigBIA8AAQAiABAZAYQAaAaAAAiQABAegBAeQgBAaAQAQQAQASgCAWQgCAXgUAOIgGAIIgDAAQgGADgKAAIgQACQhLgBhKABg");
	this.shape_167.setTransform(11.3611,-27.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FEF06B").s().p("AgPA6QgZgYAAgiQAAghAZgYQAXgYAhABIAAChIgDAAQgfAAgWgXg");
	this.shape_168.setTransform(-4.075,38.1015);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FEB354").s().p("AgmBRQgDgDAAgJIAAiJQAAgJADgDQAggBAYAYQAYAYAAAhQAAAigYAYQgWAXgeAAIgEAAg");
	this.shape_169.setTransform(3.9,38.1024);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FEF06B").s().p("AgPCLQgYgXgBggIAAinQABggAYgXQAYgXAgABIAAFBIgDAAQgeAAgXgWg");
	this.shape_170.setTransform(-4.0875,7.875);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FEF06B").s().p("AhpCdQgXgTgFgcQgGgsARg0QA2ibCigfIAHAAQAFgBACgCIALAAQAHACAGgCIAEAAIAACiQgsACgcAYQgcAZgIAqQgCAKAAAUQgFAcgWAUQgXASgeAAQgdAAgWgTg");
	this.shape_171.setTransform(-13.563,-28.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FEB354").s().p("AiFFfQgDgDAAgJIAAkrQAAgJADgDQAqgCAcgYQAYgUAJgeQAPgvgbgrQgbgqgygGIgOgCQgDgDAAgJIAAiKQAAgJADgDIAbAAIAjAHQBPATA4A8QA5A8AMBRQAWCJhmBlQgoAog2ATQgLAEAAALQABArgBAqQAAAggZAXQgXAWgeAAIgDAAg");
	this.shape_172.setTransform(13.3879,-11.0979);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75}]},1).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.3,-46.2,98.6,92.5);


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
	this.shape.setTransform(603.0893,5.3501,1.0082,1.0083);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQAKgDANADQgJADgKAGQgGAEgJAJg");
	this.shape_1.setTransform(606.2168,2.0859,1.0082,1.0083);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAXAAAdQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_2.setTransform(608.1323,7.5683,1.0082,1.0083);

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
	this.shape_48.setTransform(608.1323,7.5683,1.0082,1.0083);

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
	this.shape.graphics.lf(["#F6FFCE","#FFFFFF","#FFFFFC","#F8FFD2"],[0,0.192,0.8,1],0,-168.9,0,169).s().p("Egs9AaaMAAAg0zMBZ7AAAMAAAA0zg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-287.8,-168.9,575.6,337.9), null);


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
	this.instance.setTransform(-1.65,40.8,1,1,0,0,0,307.8,138);

	this.instance_1 = new lib.light1();
	this.instance_1.setTransform(-1.65,22.85,1,1,0,0,0,308.2,155.8);

	this.handle = new lib.handle();
	this.handle.name = "handle";
	this.handle.setTransform(347.95,-36.65,1,1,0,0,0,21,56.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#D0D4D7","#999999"],[0.035,0.941],0,0,0,0,0,8.8).s().p("Ag4A4QgXgXAAghQAAghAXgWQAXgYAhAAQAhAAAYAYQAXAWAAAhQAAAhgXAXQgYAYghAAQghAAgXgYg");
	this.shape.setTransform(330.4328,17.1887,0.9015,0.9126,0,0,3.5972);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#D0D4D7","#999999"],[0.035,0.941],0,0,0,0,0,48.9).s().p("AilHLIAAuVIEQAAQAZAAARARQASARAAAZIAAMUQAAAcgVAVQgVAVgdAAg");
	this.shape_1.setTransform(330.7026,16.575,0.6006,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkIHvIAAvdIIRAAIAAPdg");
	this.shape_2.setTransform(-187.6537,311.0201,1.0084,1.0084);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkIHvIAAvdIIRAAIAAPdg");
	this.shape_3.setTransform(-310.0203,311.0201,1.0084,1.0084);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkIHvIAAvdIIRAAIAAPdg");
	this.shape_4.setTransform(-65.2367,311.0201,1.0084,1.0084);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkIHvIAAvdIIRAAIAAPdg");
	this.shape_5.setTransform(57.2307,311.0201,1.0084,1.0084);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AkIHvIAAvdIIRAAIAAPdg");
	this.shape_6.setTransform(179.6476,311.0201,1.0084,1.0084);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AkIHvIAAvdIIRAAIAAPdg");
	this.shape_7.setTransform(302.0646,311.0201,1.0084,1.0084);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgCgZIABhlIAGBbQAHCXgSALIAEiYg");
	this.shape_8.setTransform(280.063,136.6439,1.0084,1.0084);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAtOQAWBIgPMxQgHGZgMGLg");
	this.shape_9.setTransform(-282.0126,24.435,1.0084,1.0084);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhwOTIoM8lIIcAAILdclg");
	this.shape_10.setTransform(199.7976,-265.9471,1.0082,1.0385);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AlBOTIhq8lIIbAAIE8clg");
	this.shape_11.setTransform(70.3242,-265.9471,1.0082,1.0385);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AmpOTIE38lIIcAAIhmclg");
	this.shape_12.setTransform(-69.7097,-265.9471,1.0082,1.0385);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ap6OTILZ8lIIcAAIoJclg");
	this.shape_13.setTransform(-199.6116,-265.9471,1.0082,1.0385);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#ED1C24").s().p("Eg0pAOTIOv8lMBL1AAAIOvclg");
	this.shape_14.setTransform(-0.3229,-265.9471,1.0082,1.0385);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#995218").s().p("Eg87ABBIAAiBMB53AAAIAACBg");
	this.shape_15.setTransform(0.0557,254.5502,1.0084,1.0084);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#ED1C24").s().p("AkFDGQhthMgGhvIgBkdILzAAIgBEdQgGBvhtBMQhuBNiYAAQiYAAhthNg");
	this.shape_16.setTransform(-301.5001,-143.5973,1.0082,1.0083);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AkFDGQhthMgGhvIgBkdILzAAIgBEdQgGBvhtBMQhtBNiZAAQiXAAhuhNg");
	this.shape_17.setTransform(-225.834,-143.5973,1.0082,1.0083);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#ED1C24").s().p("AkFDGQhuhMgFhvIAAkdILxAAIAAEdQgGBvhtBMQhuBNiYAAQiXAAhuhNg");
	this.shape_18.setTransform(-150.6468,-143.5973,1.0082,1.0083);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AkFDGQhthMgGhvIgBkdILzAAIgBEdQgFBvhuBMQhtBNiZAAQiXAAhuhNg");
	this.shape_19.setTransform(-74.8042,-143.5973,1.0082,1.0083);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#ED1C24").s().p("AkFDGQhuhMgFhvIgBkdILzAAIgBEdQgGBvhtBMQhuBNiYAAQiYAAhthNg");
	this.shape_20.setTransform(0.2066,-143.5973,1.0082,1.0083);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AkFDGQhthMgHhvIAAkdILyAAIAAEdQgGBvhtBMQhuBNiYAAQiXAAhuhNg");
	this.shape_21.setTransform(75.7466,-143.5973,1.0082,1.0083);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#ED1C24").s().p("AkFDGQhthMgGhvIgBkdILzAAIgBEdQgGBvhtBMQhtBNiZAAQiXAAhuhNg");
	this.shape_22.setTransform(151.0347,-143.5973,1.0082,1.0083);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AkFDGQhuhMgFhvIgBkdILyAAIAAEdQgFBvhuBMQhuBNiYAAQiXAAhuhNg");
	this.shape_23.setTransform(226.2723,-143.5973,1.0082,1.0083);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#ED1C24").s().p("AkFDGQhuhMgFhvIAAkdILyAAIAAEdQgHBvhtBMQhuBNiYAAQiYAAhthNg");
	this.shape_24.setTransform(301.888,-143.5973,1.0082,1.0083);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgHAGgFAIQgGALgCAIQgEgKADgMg");
	this.shape_25.setTransform(-304.3618,-130.6801,1.0082,1.0082);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgWABQALgIALgDQANgDAKADQgKADgJAHQgIAEgHAIg");
	this.shape_26.setTransform(-301.2344,-133.9316,1.0082,1.0082);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_27.setTransform(-299.3693,-128.4368,1.0082,1.0082);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F4E09C").s().p("EgqUAXFQg+AAgsgsQgsgsAAg+MAAAgpoQAAgvAbgmQAagmArgQMAAAAskMBWVAAAMAAAgskQAqAQAbAmQAbAmAAAvMAAAApoQAAA+gsAsQgtAsg+AAg");
	this.shape_28.setTransform(-0.725,9.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FBC926").s().p("EgwWAbgMAAAgySQAAg2ASgyQARgvAhgoQAqg0A7gcQA+geBFAAMBXUAAAQBGAAA9AeQA7AcArA0QAgAoARAvQATAyAAA2MAAAAySgEgqsAVkMBVoAAAMAAAgutMhVoAAAg");
	this.shape_29.setTransform(-1.4569,7.9982,1.0084,1.0084);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgiXwMAAAgvfIBFAAMAAAAvfg");
	this.shape_30.setTransform(-95.9383,6.8144,0.9054,1.0082);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgiXwMAAAgvfIBFAAMAAAAvfg");
	this.shape_31.setTransform(92.3903,6.8144,0.9054,1.0082);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#ED1C24").s().p("Eg71AIwIAAxfMB3rAAAIAARfg");
	this.shape_32.setTransform(-0.9527,304.4656,1.0084,1.0084);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D47A11").s().p("Eg87AE2ILQprMBjUAAAILTJrg");
	this.shape_33.setTransform(0.0557,216.7103,1.0084,1.0084);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C41A26").s().p("EgxrAa9MAAAg15MBjXAAAMAAAA15gEgq7AUZMBVoAAAMAAAgutMhVoAAAg");
	this.shape_34.setTransform(0.0557,15.5612,1.0084,1.0084);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["rgba(0,0,0,0)","rgba(102,102,102,0.588)"],[0.749,0.976],0,0,0,0,0,193.8).s().p("AuXZSMAAAgyjIcvAAMAAAAyjg");
	this.shape_35.setTransform(-1.05,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["rgba(0,0,0,0)","rgba(102,102,102,0.588)"],[0.749,0.976],0,0,0,0,0,201).s().p("Au5ZSIAAiSMAAAgu6IAAhXIdzAAMAAAAyjg");
	this.shape_36.setTransform(-188.425,0);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgNXeMAAAgu7IAbAAMAAAAu7g");
	this.shape_37.setTransform(-285.175,-2.925);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["rgba(0,0,0,0)","rgba(102,102,102,0.588)"],[0.749,0.976],0,0,0,0,0,193.8).s().p("AuXZSMAAAgyjIcvAAMAAAAyjg");
	this.shape_38.setTransform(187.35,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.handle},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.machine, new cjs.Rectangle(-393.2,-360.9,786.5,721.9), null);


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
		
		canvas.style.direction = "rtl";
		
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
		
		var bg = new lib.bg();
		bg.x=640;
		bg.y=360;
		stage.addChildAt(bg, 0);
		
		create1();
		create2();
		create3();
		
		function create1() {
			c1 = Math.floor((Math.random() * 3))
			top1 = new lib.sy();
			top1.x = 450;
			top1.y = 250;
			top1.gotoAndStop(c1);
			c1++;
			if (c1 == 9)
				c1 = 0
			middle1 = new lib.sy();;
			middle1.x = 450;
			middle1.y = 370;
			middle1.gotoAndStop(c1);
			c1++;
			if (c1 == 9)
				c1 = 0
			bottom1 = new lib.sy();;
			bottom1.x = 450;
			bottom1.y = 490;
			bottom1.gotoAndStop(c1);
		
			stage.addChildAt(top1, 1);
			stage.addChildAt(middle1, 1);
			stage.addChildAt(bottom1, 1);
		}
		function create2() {
			//2
			c2 = Math.floor((Math.random() * 3))
			top2 = new lib.sy();
			top2.x = 640;
			top2.y = 250;
			top2.gotoAndStop(c2);
			c2++;
			if (c2 == 9)
				c2 = 0
			middle2 = new lib.sy();;
			middle2.x = 640;
			middle2.y = 370;
			middle2.gotoAndStop(c2);
			c2++;
			if (c2 == 9)
				c2 = 0
			bottom2 = new lib.sy();;
			bottom2.x = 640;
			bottom2.y = 490;
			bottom2.gotoAndStop(c2);
		
			stage.addChildAt(top2, 1);
			stage.addChildAt(middle2, 1);
			stage.addChildAt(bottom2, 1);
		}
		
		function create3() {
			c3 = Math.floor((Math.random() * 3))
			top3 = new lib.sy();
			top3.x = 830;
			top3.y = 250;
			top3.gotoAndStop(c3);
			c3++;
			if (c3 == 9)
				c3 = 0
			middle3 = new lib.sy();;
			middle3.x = 830;
			middle3.y = 370;
			middle3.gotoAndStop(c3);
			c3++;
			if (c3 == 9)
				c3 = 0
			bottom3 = new lib.sy();;
			bottom3.x = 830;
			bottom3.y = 490;
			bottom3.gotoAndStop(c3);
		
			stage.addChildAt(top3, 1);
			stage.addChildAt(middle3, 1);
			stage.addChildAt(bottom3, 1);
		}
		
		var machine = new lib.machine();
		machine.x=640;
		machine.y=360;
		stage.addChildAt(machine, stage.numChildren-1);
		
		machine.handle.addEventListener("click", rnd);
		
		
		
		
		function rnd() {
			s1 = Math.floor((Math.random() * 3)) + 10;
			s2 = Math.floor((Math.random() * 3)) + 10;
			s3 = Math.floor((Math.random() * 3)) + 10;
		
			go1();
			go2();
			go3();
		}
		function go1() {
			if (s1 > 0) {
				createjs.Tween.get(top1).to({
					y: 370
				}, 200);
				createjs.Tween.get(middle1).to({
					y: 490
				}, 200);
				createjs.Tween.get(bottom1).to({
					y: 610
				}, 200).call(change1);
			}
			if (s3 == 0 && s2 == 0 && s1 == 0)
				check()
		}
		function go2() {
			//2
			if (s2 > 0) {
				createjs.Tween.get(top2).to({
					y: 370
				}, 200);
				createjs.Tween.get(middle2).to({
					y: 490
				}, 200);
				createjs.Tween.get(bottom2).to({
					y: 610
				}, 200).call(change2);
			}
			if (s3 == 0 && s2 == 0 && s1 == 0)
				check()
		}
		function go3() {
			//3
			if (s3 > 0) {
				createjs.Tween.get(top3).to({
					y: 370
				}, 200);
				createjs.Tween.get(middle3).to({
					y: 490
				}, 200);
				createjs.Tween.get(bottom3).to({
					y: 610
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
				if (c1 == 9)
					c1 = 0
				top1.gotoAndStop(c1);
				top1.y = 250;
				middle1.y = 370;
				bottom1.y = 490;
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
				if (c2 == 9)
					c2 = 0;
				top2.gotoAndStop(c2);
				top2.y = 250;
				middle2.y = 370;
				bottom2.y = 490;
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
				if (c3 == 9)
					c3 = 0;
				top3.gotoAndStop(c3);
				top3.y = 250;
				middle3.y = 370;
				bottom3.y = 490;
				s3--;
				go3();
			}
		
		}
		
		function check() {
			if (c1 == c2 && c2 == c3)
				console.log("yay")
			else
				console.log("no")
		
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
	color: "#B0FAFF",
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