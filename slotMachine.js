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


(lib.Symbol26 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#C12A1F").s().p("ADHF8QibhbinimQihighdiXQhbiVAUhFQAFgPAKgKQAJgKAOgDQBEgWCXBbQCaBbChCiQCpCmBcCcQBbCbggA/QgEAIgGAFQgGAHgKAEQgPAHgVAAQhCAAh1hFg");
	this.shape.setTransform(115.2748,44.9191);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E8E8E9").s().p("AhoBmQh1hyhMiGIBGiUQBNCeCPCOQCRCQCgBMIiWBFQiGhLh2h2g");
	this.shape_1.setTransform(65.45,94.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E8E8E9").s().p("AiRCOQivithbjAIBWi3QAqBsBKBuQBMByBoBlQBnBnB0BOQBwBJBuApIi6BVQjDhaiwivg");
	this.shape_2.setTransform(93.525,66.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E8E8E9").s().p("AhJBIQhPhOg2hWIA1hwQA6BsBfBfQBjBhBsA5IhxA0Qhag4hNhNg");
	this.shape_3.setTransform(43.75,116.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E8E8E9").s().p("Ag1A0Qgwgvgmg1IAqhaQArBEA+A/QA+A8BGAsIhbAqQgzgkgzgzg");
	this.shape_4.setTransform(27.35,132.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E8E8E9").s().p("AglAmQgZgZgUgYIAhhHQAcAnAgAgQAhAgAnAdIhHAhQgXgTgagag");
	this.shape_5.setTransform(13.475,146.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ED3724").s().p("AsRMHQgOgPAJgTILM30QgUBFBbCVQBbCXCiChQCnCmCcBaQCaBbBBgdIACADI4JLJQgHADgGAAQgLAAgKgJg");
	this.shape_6.setTransform(79.4527,81.0571);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,160.5,159.5), null);


(lib.Symbol25 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E8E8E9").s().p("AhoBmQh1hyhMiGIBGiUQBNCeCPCOQCRCQCgBMIiWBFQiGhLh2h2g");
	this.shape.setTransform(65.45,117.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E8E8E9").s().p("AiRCOQivithbjAIBWi3QAqBsBKBuQBMByBoBlQBnBnB0BOQBwBJBuApIi6BVQjDhaiwivg");
	this.shape_1.setTransform(93.525,90.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E8E8E9").s().p("AhJBIQhPhOg2hWIA1hwQA6BsBfBfQBjBhBsA5IhxA0Qhag4hNhNg");
	this.shape_2.setTransform(43.75,139.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E8E8E9").s().p("Ag1A0Qgwgvgmg1IAqhaQArBEA+A/QA+A8BGAsIhbAqQgzgkgzgzg");
	this.shape_3.setTransform(27.35,155.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E8E8E9").s().p("AglAmQgZgZgUgYIAhhHQAcAnAgAgQAhAgAnAdIhHAhQgXgTgagag");
	this.shape_4.setTransform(13.475,169.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ED3724").s().p("AsRMHQgOgPAJgTILM30QgUBFBbCVQBbCXCiChQCnCmCcBaQCaBbBBgdIACADI4JLJQgHADgGAAQgLAAgKgJg");
	this.shape_5.setTransform(79.4527,104.3071);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2ADDE7").s().p("AhwB9QASgTAUguIAihWQArhrAzgFIAGAAQAXAAAbAQIAEACQgcAcgtBzQgoBlghAMQgJACgLABIAAAAIgFAAQgYAAgfgOg");
	this.shape_6.setTransform(123.95,112.6316);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2ADDE7").s().p("AAzA+IhyhLQhSg3g6gRQgagIgZAAIBlgFQBGgCB6BSIBTA3QAuAeAeANQAgAOAZAAIhpAFQglgBg+gkg");
	this.shape_7.setTransform(92.85,117.1713);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2ADDE7").s().p("AiEBOQAZgQAdgdQAagaArg2QAlgqAugDIAEAAQAagBAdAJQgZAOgfAkQgsA1gJAJQg/A/gsACIgCAAQgXAAgYgPg");
	this.shape_8.setTransform(59.2,117.0958);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2ADDE7").s().p("Ag0ARQgQgNgmgiIBogFQApAnASAMQAZAQAZgBIhrAFQgYgBgcgSg");
	this.shape_9.setTransform(40.15,123.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2ADDE7").s().p("AA0A5Qh4gtiAhLIgEgCQgbgQgXAAIBigFQAagCAeASQCABMB7AuQA8AXAkAHIhoAFQgigHg9gXg");
	this.shape_10.setTransform(155.05,106.9348);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1FD29A").s().p("AibBmIAAgIIAAgBQAGg3BjguIBqgyQBEgiAYgdQAJAOgBAOQgDAmhPArIiBA9QhHAigYAnQgFgKAAgKg");
	this.shape_11.setTransform(83.8102,50.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1FD29A").s().p("ABhB5QgHgggcgeQgagcglgUQgrgUgVgNQglgYgCgfIAAgFIAGg9IAAAIQAAAJAFALQAKAVAhATIA1AdQAuAYAcAiQAeAmgDAnIgFA3QABgKgDgNg");
	this.shape_12.setTransform(78.1096,74.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1FD29A").s().p("AAfBzQgGgggbg8Qgdg7gEgVQgEgUACgQIAAgBIAFgwQAAANACALIAAADQADARAlBQQAgBEgDAlIgGA4QABgMgDgQg");
	this.shape_13.setTransform(71.9432,118.4625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1FD29A").s().p("AhgBNQABgwA2gdQAQgHAhgPQAfgPASgPQAbgYALgYQADAOgBAMIgBAGQgFAognAiQgTAPg/AeQgyAXgOAbQgCgLAAgNg");
	this.shape_14.setTransform(78.3225,96.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1FD29A").s().p("AhSBEIAAgCQADgkBDgqQBMgyAUgjIgGA7QgTAig9AnQg+ApgOAWQgGgRACgNg");
	this.shape_15.setTransform(87.3339,9.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1FD29A").s().p("AgIgPQANgLAHgPQADASgBANIAAABQgEAegXAVg");
	this.shape_16.setTransform(73.8725,134.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1FD29A").s().p("ABeBeQgHgJgIgHQgUgRhRgjQhDgbgLgaQgIgUACgQIAFg5QgBANAFAPIADAGQAKAaBDAdQBRAhAVASQAZAWgCAWIgGA5QABgOgJgNg");
	this.shape_17.setTransform(89.1993,28.7625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F168A0").s().p("AghBGIgGhLQgGhgAlgVIAEgDQARgIAZADIADAAQgLAeAJBlQAHBZgVAVQgFAFgJAFQgSAKgfABQAHgVgCgpg");
	this.shape_18.setTransform(123.5327,62.1202);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F168A0").s().p("AA8AfIhwgQQhRgLgwAIQgYADgSAJIBKgnQAzgaB4ARIBRAMQAtAGAagBQAegBAUgKIhOApQgUAJgjAAIgfgBg");
	this.shape_19.setTransform(102.2125,76.1474);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F168A0").s().p("AhEBrQALgTANghQANg5AIgaQAPgtAegTIAEgCQASgJAZgEQgNATgKAmQgNA3gEAKQgZBFgeARQgOAHgRAAIgLgBg");
	this.shape_20.setTransform(77.1,88.086);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F168A0").s().p("AggAcQgQgDgogOIBKgnQAsAPATACQAXADARgJIhMAoQgMAGgPAAIgSgBg");
	this.shape_21.setTransform(65.325,100);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F168A0").s().p("AioAWIgDAAQgZgCgSAIIBGglQASgLAdADQB7ALBrgJQA2gFAcgHIhKAnQgdAHg1AFQgxAEg0AAQg9AAhBgGg");
	this.shape_22.setTransform(144.525,46.7701);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F9D265").s().p("AgCAfQh0gegfAHQgTAEgLALIAuguQAgghBlAaIBQAUQAtAJAagGQASgFALgLIgzAzQgRAPgkAAQggAAgugMg");
	this.shape_23.setTransform(83.4125,83.884);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F9D265").s().p("AiKgEQAdgYAugMQAtgLA2ADQATABAzAJQApAHATgDQAPgBANgJIgoAoQgSAYg0gFQhAgMghgDQhggCg6AhQgMAHgOAMg");
	this.shape_24.setTransform(49.85,118.0769);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F9D265").s().p("AgGCNQAFghgXhNQgWhKAEgjQAEgiARgTIADgCQALgLASgFIgEAWQgFAhAXBNQAWBLgEAhQgEAZgKANQgEAHgGADQgMAJgOACg");
	this.shape_25.setTransform(67.325,99.65);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F9D265").s().p("AANB0QgJgkgchDQgehDgIgeQgNgzAQgjQAHgPALgLQANgNARgHQgPAjAQA3QAHAZAgBMQAdBBAHAoQALA7gXAtQgGALgGAFIgBABQgLAMgTAEQAQgsgNg5g");
	this.shape_26.setTransform(97.4732,61.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F9D265").s().p("AgngKQADgyAiggQANgLAMgIQgiBDAzBqIgxAyQghhGADg0g");
	this.shape_27.setTransform(30.7084,132.325);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F9D265").s().p("AAAACQiDgdhDAfQgQAHgMAMIAvgwQA4g3CUAcQBtAUBdAsIgxAyQhPgmhjgWg");
	this.shape_28.setTransform(116.2125,39.1555);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F168A0").s().p("AgPAzQgIgigCgaQgCgeAEgOQAFgSAPgMIAigjQgHAJgDALQgEAPACAdQACAbAIAhQADAegSAmIgsAtQASgmgDgeg");
	this.shape_29.setTransform(76.325,105.75);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F168A0").s().p("AgTA/QADgPAAgPIgDgtQgCgVAKgLIADgEIABAAIApgpQgIAKgBAOIACAYQACASAAAMQgCAmgQASIgsAtQAJgLAFgQg");
	this.shape_30.setTransform(97.225,82.925);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F168A0").s().p("AhcASIAFgGQAIgGAJgFQAVgJAtgFQAxgFASgHQAVgFASgLQgHAMgGAHQgYAcgvANQgSAGgpAGQgqAFgSAGQABgPAIgJg");
	this.shape_31.setTransform(109.9,72.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F168A0").s().p("AhJANQALgNAUgJQAYgMAogEQA0gFAKgCQgFAQgJAKQgRATgzAEQg9AFgYALQADgLAHgJg");
	this.shape_32.setTransform(86.825,92.55);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F168A0").s().p("AgJBwQARgkgLg4QgKgtggg8IAtgtQAjBFAJAxQAKA9ggAlIgsAtQAGgHAHgMg");
	this.shape_33.setTransform(121.1455,56.85);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1FD29A").s().p("AkSDnQBQgoBWheQA+hEA0hQQAqg/A5gsQA7gtBFgUIBSgYQgRAFgRAHQhuAxhHBrQg/BfhHBKQhmBphbAbIgBABIhWAZQARgFAXgMg");
	this.shape_34.setTransform(66.8125,109.7625);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1FD29A").s().p("AhRAJIBdgbQAhAMAlgDQgYALgQAFIgBAAIgPAFQgaAHgZAAQgdAAgbgKg");
	this.shape_35.setTransform(31.15,133.8836);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1FD29A").s().p("ABeAnQhWgfghgKQh4glhnAGQgYACgUADQAWgJAYgHIABgBQAtgNAvgDQBmgHB3AmQAgAKBNAbQBIAZAsACQgTAPgTAGIgMAEIgBAAQgKACgOABIgKABQgrAAhHgYg");
	this.shape_36.setTransform(124.225,89.0605);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1FD29A").s().p("Ah3CKQAogfA1hmQA1hnAlggIBegcQgcAYgcAwIguBWQg6Btg9AWIheAcQATgGATgPg");
	this.shape_37.setTransform(165.55,78.65);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2ADDE7").s().p("AhcAtQAZhUBbguQAvgWApgGIgTBGQgjAFgqASQhSAkghBCQgIAPgFARg");
	this.shape_38.setTransform(114.9,13.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2ADDE7").s().p("AgYAwQgdg6AHg5IAGgeQAFgRAIgQQgFA/AsBKQAYAoAFALQALAagFAUQgFARgUAKQgdgzgRggg");
	this.shape_39.setTransform(107.688,35.025);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2ADDE7").s().p("AhRAEQAIgVA8gJQBKgNARgIQATgJAFgSIgTBHQgIAag4AMQhBAJgZAHQgYAJgGAPg");
	this.shape_40.setTransform(102.0875,52.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2ADDE7").s().p("AAKBQQgqg0gPgWQgcgoAFgWIABgDQAGgPAYgIQAOAaA3BCQAtA2gDAMQgCAHgSAAIgDAAQgMAAgbgDg");
	this.shape_41.setTransform(98.8466,66.3778);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2ADDE7").s().p("AhcgJQAGgjAvgFQAbgDA9AHQAeAEAMAAQARAAACgHIgUBFQgCAJgdgCIg9gHQhcgJgPAng");
	this.shape_42.setTransform(94.975,78.9071);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F168A0").s().p("AgFBNQgQgKgMgNQgogqgLg5QgFgbAJgDIApgNQgIAEAFAbQALA5AmApQAdAfAeAEIAKABIALgCIgrANQgGABgHAAQgRAAgTgMg");
	this.shape_43.setTransform(147.2324,92.2399);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F168A0").s().p("AgSA9QgRgOgPgTQgegmgHgqQgDgSAFgBIAqgNQgFACADASQAGAoAeAnQAQAWAUAPQAUAPATAEQAMACALgDIgqANQgGACgHAAQgXAAgdgYg");
	this.shape_44.setTransform(161.8721,89.3025);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F168A0").s().p("AgkAmIAFgFQAfgeAJgoQAMANAQAKQgLASgQAQQgIAIgIAFIgPAEIgLABIgEAAg");
	this.shape_45.setTransform(142.925,101.4083);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F168A0").s().p("AgcAZQAMgOAEgYIApgMQgIAqgZAIQgGABgHAAIgLgBg");
	this.shape_46.setTransform(171.325,93.8818);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F168A0").s().p("AgeAnQAHgHAGgLQAPgZABgiQAPAUARAOIgHAMQgIAPgLAHQgFAEgHACIgNADg");
	this.shape_47.setTransform(156.9,96);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F168A0").s().p("AgRgdQgDgSAFgCQAJgCAMAfQAOAigBAkQgegngGgog");
	this.shape_48.setTransform(159.0221,85.7908);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F168A0").s().p("AgZghQgFgbAJgEQAPgHATArQAWAugKAwQgmgqgMg5g");
	this.shape_49.setTransform(145.4887,89.776);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F168A0").s().p("AgPANQhYhGgmgCIApgMQAnACBMA+QBPA/AiAEIAOgBIgnANIgIAAQgmAAhIg7g");
	this.shape_50.setTransform(126.475,99.2383);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#2ADDE7").s().p("AAYBGQgSgDgQgIQg1gXghgwQgQgWAHgHIAhgcQgGAHAPAWQAiAwAzAXQAmARAdgIIAKgDIAJgGIgiAcQgOALgXAAIgNAAg");
	this.shape_51.setTransform(118.379,68.4932);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#2ADDE7").s().p("AAHA8QgRgFgZgNQgsgZgVgiQgKgQAEgDIAhgcQgEAEAKAPQAWAjAsAYQAXANAYAGQAYAGATgEQAMgBAIgHIggAbQgLAJgTABIgIABQgOAAgSgFgAhJhAIAAAAIAAAAg");
	this.shape_52.setTransform(130.5429,60.065);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#2ADDE7").s().p("AgUAmQARgogIgoQAQAHASADQgCAWgIAUQgFAKgGAIQgGAGgFAEQgGADgHADg");
	this.shape_53.setTransform(118.4,78.75);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#2ADDE7").s().p("AgRgGIAggcQAKApgVASQgIAIgNACQAGgQgGgZg");
	this.shape_54.setTransform(141.1613,60.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#2ADDE7").s().p("AgMAUQAEgegMgeQAXANATAFIgBAPQgCAPgHAMIAAAAQgFAHgEAEIgCABIgIAGIgKADQAEgHABgOg");
	this.shape_55.setTransform(129.1,68.375);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#2ADDE7").s().p("AgdgTQgKgPAFgEQAHgGAYAYQAaAaANAiQgrgZgWgig");
	this.shape_56.setTransform(126.6552,57.465);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#2ADDE7").s().p("AglgSQgPgXAGgHQALgMAjAfQAmAhAKAxQgzgXgigwg");
	this.shape_57.setTransform(115.7143,66.3474);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#2ADDE7").s().p("AgJARQhsgegkANIAhgcQAkgNBfAbQBiAbAggKQAHgCAHgDIggAaQgOAJgaAAQgjAAg5gQg");
	this.shape_58.setTransform(101.95,82.815);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F9D265").s().p("AAYBFQgSgCgRgIQg0gXghgwQgQgXAHgHIAhgcQgGAHAPAXQAhAwA0AXQAnARAcgHQAHgCADgCIAJgFIgiAcQgOALgUAAIgQgCg");
	this.shape_59.setTransform(142.5685,60.4238);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F9D265").s().p("AAHA8QgYgIgSgLQgrgYgXgiQgJgRAEgDIAhgbQgEADAKAQQAWAjArAYQAYANAXAGQAZAGASgDQAMgCAIgHIggAbQgNALgVAAQgQAAgTgFgAhJhAIAAAAIAAAAg");
	this.shape_60.setTransform(154.8157,52.0804);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F9D265").s().p("AgUAmQASgogJgpQARAIASADQgDAWgJAUQgEAKgGAIQgFAGgGAEQgGAEgIACg");
	this.shape_61.setTransform(142.575,70.675);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F9D265").s().p("AgRgGIAggcQAJAqgUARQgIAIgNACQAGgQgGgZg");
	this.shape_62.setTransform(165.4123,52.175);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F9D265").s().p("AgMAVQAEgegNgfQATAKAXAIIgBAPQgBAQgIALQgDAFgGAGIgBABIgIAFQgEADgGACQAEgKABgLg");
	this.shape_63.setTransform(153.35,60.35);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F9D265").s().p("AgcgTQgKgPAEgEQAHgGAYAYQAaAaANAiQgqgZgWgig");
	this.shape_64.setTransform(150.9302,49.44);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F9D265").s().p("AgkgTQgPgWAGgHQALgNAiAgQAnAhAJAxQg0gYgggwg");
	this.shape_65.setTransform(139.9393,58.2724);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F9D265").s().p("AgJARQhsgfgkANIAhgcQAkgNBfAcQBiAcAggKQAIgCAFgDIgfAZQgNAKgbAAQgjAAg5gRg");
	this.shape_66.setTransform(126.1,74.6516);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F168A0").s().p("ABDBFQgggMgzgkQhAgsgUgKQgtgZgkAFQgJABgJAEIA0gXQAigNAsASQAdAMAyAkQA6AoAYAMQAuAZAkgEQANgBANgFIgwAVQgTAIgVAAQgVAAgYgJg");
	this.shape_67.setTransform(138.2,95.8421);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F168A0").s().p("AgYALQiFgrguASIAzgWQAtgTBzAmQCCApAngCQAOgBANgFIgzAXQgMAEgSAAQgyAAhhggg");
	this.shape_68.setTransform(79.0125,121.4775);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F168A0").s().p("AgLgMQAeiJAegPIAAgBIADgBQAQgFAPABQgQAWgOA2QgIAggPBGQgeCFg0AWQgPAHgPABQAmgkAhiTg");
	this.shape_69.setTransform(163.85,84.2339);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F168A0").s().p("AhLBhIAlhdQAyh8BNgkIAJgEQAJgEAJgBQhAArg0CHQgaBGgKAUQgWArgaANIgFACQgNAFgOAAQAVgUAUgxg");
	this.shape_70.setTransform(108.4,107.025);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F168A0").s().p("AANANQgsgogngDQgPgCgPAGIA0gXQAsgRA5AwQAdAWATAbIgzAXQgOgUgXgVg");
	this.shape_71.setTransform(179.2,70.251);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#C12A1F").s().p("ADHF8QibhbinimQihighdiXQhbiVAUhFQAFgPAKgKQAJgKAOgDQBEgWCXBbQCaBbChCiQCpCmBcCcQBbCbggA/QgEAIgGAFQgGAHgKAEQgPAHgVAAQhCAAh1hFg");
	this.shape_72.setTransform(116.8248,66.6191);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,189.4,182.7), null);


(lib.Symbol24 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1FD29A").s().p("AgMgFQANgDAJgFQAEALgBAIQgKAAgJAIQgGgJAAgKg");
	this.shape.setTransform(50.8781,88.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#12B7CC").s().p("AgZAHQAegNAOgOQAHAIABAGQgVARgaAKQgBgKgEgEg");
	this.shape_1.setTransform(48.25,137.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F168A0").s().p("AgMAGQgCgHAEgHQAKADANgCQgJAIgCAHIgDABQgFAAgGgDg");
	this.shape_2.setTransform(78.2054,113.6225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#12B7CC").s().p("AgbAKQATgWAXgRQADALAKAFQgPAMgIAGQgJAKgHAPQgKgHgGgNg");
	this.shape_3.setTransform(40.05,58.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#12B7CC").s().p("AgZgCQAXgMAYgEQgEAOAIAMQgWAEgHAHQgLgGgLgPg");
	this.shape_4.setTransform(30.8,126.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9D265").s().p("AgKAAQAKgFAJgCQAAAEACADQgLACgHAGQgDgDAAgFg");
	this.shape_5.setTransform(70.925,110.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F168A0").s().p("AgdAGQAAgRALgUQAZAQAXAaQgLADgGAEQgGAFgGAJQgPgVgPgFg");
	this.shape_6.setTransform(62.825,137.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9D265").s().p("AgJAHQAFgKgBgGQAFgEAKAAQAAANgFAOQgGgGgIgBg");
	this.shape_7.setTransform(85.2,68.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1FD29A").s().p("AgfANQAUgQAPgaQADAJAGADQAGAEANACQgXAdgQAMQgMgEgMgNg");
	this.shape_8.setTransform(26.525,60.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1FD29A").s().p("AgaARQAagXAIgNQAEAIAEAEQAEADAIABQgKAIgHANQgHACgIAAQgKAAgMgDg");
	this.shape_9.setTransform(79.4,113.226);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F9D265").s().p("AgjAeQAUgiAKghQAMgCAJACQAIACAMAHQghAigQAhQgIgHgOgCg");
	this.shape_10.setTransform(75.575,122.0625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2ADDE7").s().p("AgRgNQAQgDACgKQAHAMAJAIQABAPgMASQgNgdgKgLg");
	this.shape_11.setTransform(78.851,125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F168A0").s().p("AgVgEQADgOAMgJQALAaARASQgHADgDAIQgOgTgTgNg");
	this.shape_12.setTransform(22.275,122.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#12B7CC").s().p("AgNAAQAJgEAFgKQAJAGAEAIQgMAJgFAGQgHgJgDgGg");
	this.shape_13.setTransform(8.075,76.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2ADDE7").s().p("AgXAAQACgFgBgIQAWAEATgBQAHAKgDANQgZgKgVgDg");
	this.shape_14.setTransform(74.8724,44.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2ADDE7").s().p("AgPABQgBgLgIgIQAOgEAHgDQAHgFAGgHQAJAPACAOQADALABATQgUAQgUAAQACgXgCgOg");
	this.shape_15.setTransform(58,76.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1FD29A").s().p("AgcAWQAQgjAUgaQAIAMANACQgOATgGALQgIAQgDATQgNgEgNgOg");
	this.shape_16.setTransform(2.925,116.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F168A0").s().p("AgbAFQAdgJARgSQAHAJACANQgZAPgWAIQAAgLgIgHg");
	this.shape_17.setTransform(30.275,122.725);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1FD29A").s().p("AgegCQALgJAFgKQAeAOAPAMQgGAMgMAFQgOgNgdgLg");
	this.shape_18.setTransform(70.575,118.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1FD29A").s().p("AgQAcQABgVADgLQADgOAIgOQAEAHAOADQgHANgCAMQgBAKABAUIgEAAQgKAAgKgFg");
	this.shape_19.setTransform(44.275,125.0071);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1FD29A").s().p("AgsgcQAIgKAEgDQAGgGAHgBQAXAVANASQANAQAPAcQgRAFgJAJQggg1gfgYg");
	this.shape_20.setTransform(45.8,111.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F168A0").s().p("AgaAMQgDgIACgKQARgDAMgFIAbgOQgGAQgCAJQgDAKACALQgMAKgXABQgIgJgDgIg");
	this.shape_21.setTransform(58.4306,79.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#12B7CC").s().p("AgagKQAegEALgJQAJARACAOQgNAIgnAIQAGgUgGgOg");
	this.shape_22.setTransform(20.75,123.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F9D265").s().p("AgGAIQACgJgCgHQAGAAAGADQgCAFADAIIgHABIgGgBg");
	this.shape_23.setTransform(45.425,110.875);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2ADDE7").s().p("AgOAAQALgGACgGQAIABAIAGQgIAKgNAIQgCgJgGgEg");
	this.shape_24.setTransform(42.1,53.325);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#12B7CC").s().p("AgkgDQARgTASgJQAMASAaALQgGAMgHAIQgHAGgLAIQgUgYgWgLg");
	this.shape_25.setTransform(101,64.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F9D265").s().p("AgUALQAEgPAQgSQAGAKAPADQgPAOgGATQgKgCgKgLg");
	this.shape_26.setTransform(62.4,54.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1FD29A").s().p("AgXAgQAJggACgdQALgFAHAAQAGAAAMAEQgUAigHAfQgJgEgLABg");
	this.shape_27.setTransform(49.05,128.075);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#12B7CC").s().p("AgNgBQAPgCAIgEQAAAHAEADQgFABgHAFQgGgCgJgIg");
	this.shape_28.setTransform(4.175,61.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F168A0").s().p("AAAAXQgKgVgCgXQAJABADgDQAEAbAJAPQgIAFgEAAIgBgBg");
	this.shape_29.setTransform(41.9,90.3525);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F9D265").s().p("AgFAIQACgKAEgHQABABAEACQgEAGgBAKIgGgCg");
	this.shape_30.setTransform(53.85,42.95);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#12B7CC").s().p("AgZATQgLgTADgVQAlAMATgJQABAOACAFQACAJAGAIQgQAEgNAAQgLAAgTgDg");
	this.shape_31.setTransform(25.6179,127.575);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1FD29A").s().p("AgHALIABgMQADgGAMgFQgFARAAAIQgGgEgFACg");
	this.shape_32.setTransform(28.45,115.325);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2ADDE7").s().p("AgHAYQAEgcgHgUQAKgDAKAEQADAagDAXQgKgFgHADg");
	this.shape_33.setTransform(46.3442,80.6019);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F168A0").s().p("AgIAHQgDgGADgGQAJABAJgDQgGAHAAAGIgGACIgGgBg");
	this.shape_34.setTransform(85.6558,148.1571);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#12B7CC").s().p("AgGAJQAEgIABgNQAEAAAEADQgBANgGAJQAAgDgGgBg");
	this.shape_35.setTransform(7.375,108.075);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#12B7CC").s().p("AgNAWQgFgTAHgaQALAHAQgGQgGAWAEAWQgGACgGAAQgHAAgIgCg");
	this.shape_36.setTransform(27.1458,72.3816);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1FD29A").s().p("AgPgJQALAAAHgGQAHAPAGAEQgHAJgIADQgGgGgKgTg");
	this.shape_37.setTransform(3.025,85.85);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2ADDE7").s().p("AgTAMQAKgRgDgNQANgHATAAQgCAZgLAaQgKgMgQgCg");
	this.shape_38.setTransform(26,19.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F168A0").s().p("AgJgCQAFgFAGgBQADAIAFAFQgFADgGABQgCgHgGgEg");
	this.shape_39.setTransform(44.275,132.475);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2ADDE7").s().p("AgRgGQAEgJANgIQAOAFAEANQgPAKgLATQgCgUgHgKg");
	this.shape_40.setTransform(28.2,54.975);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#12B7CC").s().p("AgMACQAMgFAKgNQgBAPAEAHQgEAHgKAEQgJgFgCgKg");
	this.shape_41.setTransform(55.575,63.625);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2ADDE7").s().p("AgEAHQgNgJgRgHQAHgMAOgJQAdAWATAWQgLAFgFAMQgOgQgJgIg");
	this.shape_42.setTransform(34.075,75.375);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F168A0").s().p("AgNAXQACgZALgZQAHAGAHABQgMAbgBAVQgJgBgFgEg");
	this.shape_43.setTransform(79.875,78.925);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1FD29A").s().p("AgdAXQAKgUAKgMQAJgMAQgPQAFALAKAFQggAggKAZQgPgHgDgHg");
	this.shape_44.setTransform(61.35,135.775);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2ADDE7").s().p("AgUAHQABgNAEgIQALgBAZALQgKAIgCALQgTgIgKAAg");
	this.shape_45.setTransform(14.05,96.7739);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F9D265").s().p("AgNAGQAMgRAHgGQAHAGACAHQgJAGgKAPQgFgHgEgEg");
	this.shape_46.setTransform(48.75,55.85);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F9D265").s().p("AgzAYQAigeAYgjQAQACAKAGQAIAFALAMQgcAPgPALQgSANgTATQgIgLgPgHg");
	this.shape_47.setTransform(73.65,101.95);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2ADDE7").s().p("AgUAtQALgvgDgmQAMABAMgFQABApAIAiQgKAJgKADQgGACgKAAIgFAAg");
	this.shape_48.setTransform(37.35,22.2042);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2ADDE7").s().p("AgLgpQALADAMgGQABAqAIAgQgKAKgKADQgHACgOAAQALgvgCgng");
	this.shape_49.setTransform(59.075,48.35);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F168A0").s().p("AgXgDQAXgNAVgCQgBARAFAHQgWACgUALQgJgOADgIg");
	this.shape_50.setTransform(11.6978,62.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F9D265").s().p("AgJgBQACgDACgDQAKAGAFAFQgDABgCADQgFgFgJgEg");
	this.shape_51.setTransform(24.25,90.15);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#2ADDE7").s().p("AgvgMQAcgBARgFQANgEAJgKQAHAPAFAIQAGAJAKAHQgRAMgQAFQgOAFgXAEQgVgVgEgYg");
	this.shape_52.setTransform(70.05,72.875);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#12B7CC").s().p("AgNgHQAFgEAGAAQAEAHAMAKQgIADgDADQgLgMgFgHg");
	this.shape_53.setTransform(81.1,51.05);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F168A0").s().p("AgOAhQgLgXADgnQAKAFAJgCQAHgBAMgGQgDASACANQABAMAHARQgMAHgPAAIgKgBg");
	this.shape_54.setTransform(39.6179,29.2034);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F9D265").s().p("AgIgjQAIAKAGAEQAIAEANABQgHAOgCAIQgDAJABALQgRAKgZgBQADgjAPgjg");
	this.shape_55.setTransform(14.975,139);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F168A0").s().p("AgOgNQAIgKANgFQABAeAHAVQgIABgFAEQgFgUgLgVg");
	this.shape_56.setTransform(22.75,125.95);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F9D265").s().p("AgZAZQAGgjAPgaQAQAPAOACQgPAXgGAgQgVAAgJgLg");
	this.shape_57.setTransform(58.275,76.45);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F9D265").s().p("AgYAAQACgHgBgIQAVAFAXABQAEAHAAAFQAAAFgCAIQgagNgVgDg");
	this.shape_58.setTransform(77.575,1.575);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F9D265").s().p("AgPAhQgIgkAFghQAVAJAPgEQgGAfAIAgQgMAFgIAAIAAAAQgIAAgHgEg");
	this.shape_59.setTransform(98.8038,98.8275);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#12B7CC").s().p("AgVAAQAAgJAHgJQAPALAVAFQgFACgCAGQgBAFABAIQgYgJgMgKg");
	this.shape_60.setTransform(35.5,87.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#1FD29A").s().p("AgLgFQADAAAEgEQAFAHALAFQgCAEgEADQgLgGgGgJg");
	this.shape_61.setTransform(72.925,18.875);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F9D265").s().p("AgUgEQAHgMAKgBQARAMAHAKQgNACgHAKQgEgLgRgKg");
	this.shape_62.setTransform(44.675,80.85);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F9D265").s().p("AgSAEQAAgHACgDQARgBASAGQgDAFAAAEQgVgGgNACg");
	this.shape_63.setTransform(35.525,114.8929);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#2ADDE7").s().p("AgiAIQAUgIALgGQANgJANgOQAJAMADAQQghAVgaAKQgBgNgJgJg");
	this.shape_64.setTransform(59.625,102.375);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F9D265").s().p("AgOAAQACgLAJgGQAJARAJABQgHAKgBAHQgLgGgKgMg");
	this.shape_65.setTransform(86.1,139);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104.8,148.9);


(lib.Symbol23 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F9D265").s().p("AgCAfQh0gegfAHQgTAEgLALIAuguQAgghBlAaIBQAUQAtAJAagGQASgFALgLIgzAzQgRAPgkAAQggAAgugMg");
	this.shape.setTransform(56.7125,50.984);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9D265").s().p("AiKgEQAdgYAugMQAtgLA2ADQATABAzAJQApAHATgDQAPgBANgJIgoAoQgSAYg0gFQhAgMghgDQhggCg6AhQgMAHgOAMg");
	this.shape_1.setTransform(23.15,85.1769);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9D265").s().p("AgGCNQAFghgXhNQgWhKAEgjQAEgiARgTIADgCQALgLASgFIgEAWQgFAhAXBNQAWBLgEAhQgEAZgKANQgEAHgGADQgMAJgOACg");
	this.shape_2.setTransform(40.625,66.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9D265").s().p("AANB0QgJgkgchDQgehDgIgeQgNgzAQgjQAHgPALgLQANgNARgHQgPAjAQA3QAHAZAgBMQAdBBAHAoQALA7gXAtQgGALgGAFIgBABQgLAMgTAEQAQgsgNg5g");
	this.shape_3.setTransform(70.7732,28.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9D265").s().p("AgngKQADgyAiggQANgLAMgIQgiBDAzBqIgxAyQghhGADg0g");
	this.shape_4.setTransform(4.0084,99.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9D265").s().p("AAAACQiDgdhDAfQgQAHgMAMIAvgwQA4g3CUAcQBtAUBdAsIgxAyQhPgmhjgWg");
	this.shape_5.setTransform(89.5125,6.2555);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,112.3,110.6), null);


(lib.Symbol22 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F168A0").s().p("AghBGIgGhLQgGhgAlgVIAEgDQARgIAZADIADAAQgLAeAJBlQAHBZgVAVQgFAFgJAFQgSAKgfABQAHgVgCgpg");
	this.shape.setTransform(67.1326,18.1702);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F168A0").s().p("AA8AfIhwgQQhRgLgwAIQgZADgRAJIBKgnQAzgaB4ARIBRAMQAtAGAagBQAegBAUgKIAAAAIAAAAIhOApQgUAJgjAAIgfgBg");
	this.shape_1.setTransform(45.8375,32.1974);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F168A0").s().p("AhEBrQALgTANghQANg5AIgaQAPgtAegTIAEgCQASgJAZgEQgNATgKAmQgNA3gEAKQgZBFgeARQgOAHgRAAIgLgBg");
	this.shape_2.setTransform(20.7,44.136);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F168A0").s().p("AggAcQgQgDgogOIBKgnQAsAPATACQAXADARgJIhMAoQgMAGgPAAIgSgBg");
	this.shape_3.setTransform(8.925,56.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F168A0").s().p("AioAWIgDAAQgZgCgSAIIBGglQASgLAdADQB7ALBrgJQA2gFAcgHIhKAnQgdAHg1AFQgxAEg0AAQg9AAhBgGg");
	this.shape_4.setTransform(88.125,2.8201);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,109.7,59), null);


(lib.Symbol21 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F168A0").s().p("ABDBFQgggMgzgkQhAgsgUgKQgtgZgkAFQgJABgJAEIA0gXQAigNAsASQAdAMAyAkQA6AoAYAMQAuAZAkgEQANgBANgFIgwAVQgTAIgVAAQgVAAgYgJg");
	this.shape.setTransform(79.6,30.9921);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F168A0").s().p("AgYALQiFgrguASIAzgWQAtgTBzAmQCCApAngCQAOgBANgFIgzAXQgMAEgSAAQgyAAhhggg");
	this.shape_1.setTransform(20.4125,56.6275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F168A0").s().p("AgLgMQAeiJAegPIAAgBIADgBQAQgFAPABQgQAWgOA2QgIAggPBGQgeCFg0AWQgPAHgPABQAmgkAhiTg");
	this.shape_2.setTransform(105.25,19.3839);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F168A0").s().p("AhLBhIAlhdQAyh8BNgkIAJgEQAJgEAJgBQhAArg0CHQgaBGgKAUQgWArgaANIgFACQgNAFgOAAQAVgUAUgxg");
	this.shape_3.setTransform(49.8,42.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F168A0").s().p("AANANQgsgogngDQgPgCgPAGIA0gXQAsgRA5AwQAdAWATAbIgzAXQgOgUgXgVg");
	this.shape_4.setTransform(120.6,5.401);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,130.8,61), null);


(lib.Symbol20 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F9D265").s().p("AAYBFQgSgCgRgIQg0gXghgwQgQgXAHgHIAhgcQgGAHAPAXQAhAwA0AXQAnARAcgHQAHgCADgCIAJgFIgiAcQgOALgUAAIgQgCg");
	this.shape.setTransform(31.9185,14.9738);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9D265").s().p("AAHA8QgYgIgSgLQgrgYgXgiQgJgRAEgDIAhgbQgEADAKAQQAWAjArAYQAYANAXAGQAZAGASgDQAMgCAIgHIggAbQgNALgVAAQgQAAgTgFgAhJhAIAAAAIAAAAg");
	this.shape_1.setTransform(44.1657,6.6304);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9D265").s().p("AgUAmQASgogJgpQARAIASADQgDAWgJAUQgEAKgGAIQgFAGgGAEQgGAEgIACg");
	this.shape_2.setTransform(31.925,25.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9D265").s().p("AgRgGIAggcQAJAqgUARQgIAIgNACQAGgQgGgZg");
	this.shape_3.setTransform(54.7623,6.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9D265").s().p("AgMAVQAEgegNgfQATAKAXAIIgBAPQgBAQgIALQgDAFgGAGIgBABIgIAFQgEADgGACQAEgKABgLg");
	this.shape_4.setTransform(42.7,14.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9D265").s().p("AgcgTQgKgPAEgEQAHgGAYAYQAaAaANAiQgqgZgWgig");
	this.shape_5.setTransform(40.2802,3.99);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9D265").s().p("AgkgTQgPgWAGgHQALgNAiAgQAnAhAJAxQg0gYgggwg");
	this.shape_6.setTransform(29.2893,12.8224);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9D265").s().p("AgJARQhsgfgkANIAhgcQAkgNBfAcQBiAcAggKQAIgCAFgDIgfAZQgNAKgbAAQgjAAg5gRg");
	this.shape_7.setTransform(15.45,29.2016);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,56.6,32.6), null);


(lib.Symbol19 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2ADDE7").s().p("AAYBGQgSgDgQgIQg1gXghgwQgQgWAHgHIAhgcQgGAHAPAWQAiAwAzAXQAmARAdgIIAKgDIAJgGIgiAcQgOALgXAAIgNAAg");
	this.shape.setTransform(31.879,14.9932);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2ADDE7").s().p("AAHA8QgRgFgZgNQgsgZgVgiQgKgQAEgDIAhgcQgEAEAKAPQAWAjAsAYQAXANAYAGQAYAGATgEQAMgBAIgHIggAbQgLAJgTABIgIABQgOAAgSgFgAhJhAIAAAAIAAAAg");
	this.shape_1.setTransform(44.0429,6.565);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2ADDE7").s().p("AgUAmQARgogIgoQAQAHASADQgCAWgIAUQgFAKgGAIQgGAGgFAEQgGADgHADg");
	this.shape_2.setTransform(31.9,25.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2ADDE7").s().p("AgRgGIAggcQAKApgVASQgIAIgNACQAGgQgGgZg");
	this.shape_3.setTransform(54.6613,6.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2ADDE7").s().p("AgMAUQAEgegMgeQAXANATAFIgBAPQgCAPgHAMIAAAAQgFAHgEAEIgCABIgIAGIgKADQAEgHABgOg");
	this.shape_4.setTransform(42.6,14.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2ADDE7").s().p("AgdgTQgKgPAFgEQAHgGAYAYQAaAaANAiQgrgZgWgig");
	this.shape_5.setTransform(40.1552,3.965);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2ADDE7").s().p("AglgSQgPgXAGgHQALgMAjAfQAmAhAKAxQgzgXgigwg");
	this.shape_6.setTransform(29.2143,12.8474);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2ADDE7").s().p("AgJARQhsgegkANIAhgcQAkgNBfAbQBiAbAggKQAHgCAHgDIggAaQgOAJgaAAQgjAAg5gQg");
	this.shape_7.setTransform(15.45,29.315);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,56.5,32.6), null);


(lib.Symbol18 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F168A0").s().p("AgFBNQgQgKgMgNQgogqgLg5QgFgbAJgDIApgNQgIAEAFAbQALA5AmApQAdAfAeAEIAKABIALgCIgrANQgGABgHAAQgRAAgTgMg");
	this.shape.setTransform(34.9824,11.4399);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F168A0").s().p("AgSA9QgRgOgPgTQgegmgHgqQgDgSAFgBIAqgNQgFACADASQAGAoAeAnQAQAWAUAPQAUAPATAEQAMACALgDIgqANQgGACgHAAQgXAAgdgYg");
	this.shape_1.setTransform(49.6221,8.5025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F168A0").s().p("AgkAmIAFgFQAfgeAJgoQAMANAQAKQgLASgQAQQgIAIgIAFIgPAEIgLABIgEAAg");
	this.shape_2.setTransform(30.675,20.6083);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F168A0").s().p("AgcAZQAMgOAEgYIApgMQgIAqgZAIQgGABgHAAIgLgBg");
	this.shape_3.setTransform(59.075,13.0818);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F168A0").s().p("AgeAnQAHgHAGgLQAPgZABgiQAPAUARAOIgHAMQgIAPgLAHQgFAEgHACIgNADg");
	this.shape_4.setTransform(44.65,15.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F168A0").s().p("AgRgdQgDgSAFgCQAJgCAMAfQAOAigBAkQgegngGgog");
	this.shape_5.setTransform(46.7721,4.9908);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F168A0").s().p("AgZghQgFgbAJgEQAPgHATArQAWAugKAwQgmgqgMg5g");
	this.shape_6.setTransform(33.2387,8.976);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F168A0").s().p("AgPANQhYhGgmgCIApgMQAnACBMA+QBPA/AiAEIAOgBIgnANIgIAAQgmAAhIg7g");
	this.shape_7.setTransform(14.225,18.4383);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,62,25.7), null);


(lib.Symbol17 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2ADDE7").s().p("AhcAtQAZhUBbguQAvgWApgGIgTBGQgjAFgqASQhSAkghBCQgIAPgFARg");
	this.shape.setTransform(30.95,11.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2ADDE7").s().p("AgYAwQgdg6AHg5IAGgeQAFgRAIgQQgFA/AsBKQAYAoAFALQALAagFAUQgFARgUAKQgdgzgRggg");
	this.shape_1.setTransform(23.738,32.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2ADDE7").s().p("AhRAEQAIgVA8gJQBKgNARgIQATgJAFgSIgTBHQgIAag4AMQhBAJgZAHQgYAJgGAPg");
	this.shape_2.setTransform(18.1375,50.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2ADDE7").s().p("AAKBQQgqg0gPgWQgcgoAFgWIABgDQAGgPAYgIQAOAaA3BCQAtA2gDAMQgCAHgSAAIgDAAQgMAAgbgDg");
	this.shape_3.setTransform(14.8966,64.0278);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2ADDE7").s().p("AhcgJQAGgjAvgFQAbgDA9AHQAeAEAMAAQARAAACgHIgUBFQgCAJgdgCIg9gHQhcgJgPAng");
	this.shape_4.setTransform(11.025,76.5571);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,42.2,81.7), null);


(lib.Symbol16 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F168A0").s().p("AgPAzQgIgigCgaQgCgeAEgOQAFgSAPgMIAigjQgHAJgDALQgEAPACAdQACAbAIAhQADAegSAmIgsAtQASgmgDgeg");
	this.shape.setTransform(3.125,62);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F168A0").s().p("AgTA/QADgPAAgPIgDgtQgCgVAKgLIADgEIABAAIApgpQgIAKgBAOIACAYQACASAAAMQgCAmgQASIgsAtQAJgLAFgQg");
	this.shape_1.setTransform(24.025,39.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F168A0").s().p("AhcASIAFgGQAIgGAJgFQAVgJAtgFQAxgFASgHQAVgFASgLQgHAMgGAHQgYAcgvANQgSAGgpAGQgqAFgSAGQABgPAIgJg");
	this.shape_2.setTransform(36.7,28.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F168A0").s().p("AhJANQALgNAUgJQAYgMAogEQA0gFAKgCQgFAQgJAKQgRATgzAEQg9AFgYALQADgLAHgJg");
	this.shape_3.setTransform(13.625,48.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F168A0").s().p("AgJBwQARgkgLg4QgKgtggg8IAtgtQAjBFAJAxQAKA9ggAlIgsAtQAGgHAHgMg");
	this.shape_4.setTransform(47.9455,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,52.6,73.9), null);


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1FD29A").s().p("AkSDnQBQgoBWheQA+hEA0hQQAqg/A5gsQA7gtBFgUIBSgYQgRAFgRAHQhuAxhHBrQg/BfhHBKQhmBphbAbIgBABIhWAZQARgFAXgMg");
	this.shape.setTransform(43.8625,47.0125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1FD29A").s().p("AhRAJIBdgbQAhAMAlgDQgYALgQAFIgBAAIgPAFQgaAHgZAAQgdAAgbgKg");
	this.shape_1.setTransform(8.2,71.1336);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1FD29A").s().p("ABeAnQhWgfghgKQh4glhnAGQgYACgUADQAWgJAYgHIABgBQAtgNAvgDQBmgHB3AmQAgAKBNAbQBIAZAsACQgTAPgTAGIgMAEIgBAAQgKACgOABIgKABQgrAAhHgYg");
	this.shape_2.setTransform(101.275,26.3105);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1FD29A").s().p("Ah3CKQAogfA1hmQA1hnAlggIBegcQgcAYgcAwIguBWQg6Btg9AWIheAcQATgGATgPg");
	this.shape_3.setTransform(142.6,15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,158.4,73), null);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1FD29A").s().p("AibBmIAAgIIAAgBQAGg3BjguIBqgyQBEgiAYgdQAJAOgBAOQgDAmhPArIiBA9QhHAigYAnQgFgKAAgKg");
	this.shape.setTransform(16.1602,50.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1FD29A").s().p("ABhB5QgHgggcgeQgagcglgUQgrgUgVgNQglgYgCgfIAAgFIAGg9IAAAIQAAAJAFALQAKAVAhATIA1AdQAuAYAcAiQAeAmgDAnIgFA3QABgKgDgNg");
	this.shape_1.setTransform(10.4596,74.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1FD29A").s().p("AAfBzQgGgggbg8Qgdg7gEgVQgEgUACgQIAAgBIAFgwQAAANACALIAAADQADARAlBQQAgBEgDAlIgGA4QABgMgDgQg");
	this.shape_2.setTransform(4.2932,118.4625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1FD29A").s().p("AhgBNQABgwA2gdQAQgHAhgPQAfgPASgPQAbgYALgYQADAOgBAMIgBAGQgFAognAiQgTAPg/AeQgyAXgOAbQgCgLAAgNg");
	this.shape_3.setTransform(10.6725,96.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1FD29A").s().p("AhSBEIAAgCQADgkBDgqQBMgyAUgjIgGA7QgTAig9AnQg+ApgOAWQgGgRACgNg");
	this.shape_4.setTransform(19.6839,9.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1FD29A").s().p("AgIgPQANgLAHgPQADASgBANIAAABQgEAegXAVg");
	this.shape_5.setTransform(6.2225,134.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1FD29A").s().p("ABeBeQgHgJgIgHQgUgRhRgjQhDgbgLgaQgIgUACgQIAFg5QgBANAFAPIADAGQAKAaBDAdQBRAhAVASQAZAWgCAWIgGA5QABgOgJgNg");
	this.shape_6.setTransform(21.5493,28.7625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,32.3,138.4), null);


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
	this.shape.graphics.f("#2ADDE7").s().p("AhwB9QASgTAUguIAihWQArhrAzgFIAGAAQAXAAAbAQIAEACQgcAcgtBzQgoBlghAMQgJACgLABIAAAAIgFAAQgYAAgfgOg");
	this.shape.setTransform(94.45,14.4316);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2ADDE7").s().p("AAzA+IhyhLQhSg3g6gRQgagIgZAAIBlgFQBGgCB6BSIBTA3QAuAeAeANQAgAOAZAAIhpAFQglgBg+gkg");
	this.shape_1.setTransform(63.35,18.9713);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2ADDE7").s().p("AiEBOQAZgQAdgdQAagaArg2QAlgqAugDIAEAAQAagBAdAJQgZAOgfAkQgsA1gJAJQg/A/gsACIgCAAQgXAAgYgPg");
	this.shape_2.setTransform(29.7,18.8958);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2ADDE7").s().p("Ag0ARQgQgNgmgiIBogFQApAnASAMQAZAQAZgBIhrAFQgYgBgcgSg");
	this.shape_3.setTransform(10.65,25.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2ADDE7").s().p("AA0A5Qh4gtiAhLIgEgCQgbgQgXAAIBigFQAagCAeASQCABMB7AuQA8AXAkAHIhoAFQgigHg9gXg");
	this.shape_4.setTransform(125.55,8.7348);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,150.7,28.9), null);


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
	this.shape.setTransform(5.0441,10.9452,1.0081,1.0081);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgwACQAXgSAZgGQAYgGAZAGQgUAGgVAOQgQAKgPASg");
	this.shape_1.setTransform(11.5594,4.1655,1.0081,1.0081);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ED1C24").s().p("AhtBvQgvguAAhBQAAhAAvgtQAtguBAAAQBBAAAtAuQAuAtAABAQAABBguAuQgtAthBAAQhAAAgtgtg");
	this.shape_2.setTransform(15.5161,15.633,1.0081,1.0081);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDE493").s().p("AhuBvQgvgtAAhCQAAhAAvguQAtguBBgBQBBABAuAuQAvAuAABAQAABCgvAtQguAvhBgBQhBABgtgvg");
	this.shape_3.setTransform(15.675,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1.0081,scaleY:1.0081,x:11.5594,y:4.1655}},{t:this.shape,p:{scaleX:1.0081,scaleY:1.0081,x:5.0441,y:10.9452}}]}).to({state:[{t:this.shape_3},{t:this.shape_1,p:{scaleX:1.0082,scaleY:1.0082,x:11.7125,y:4.2313}},{t:this.shape,p:{scaleX:1.0082,scaleY:1.0082,x:5.1967,y:11.0115}}]},1).wait(1));

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


(lib.Symbol13_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEFFFF").s().p("AAmGIQhEgcgsgxQg2AohGAWQhHAXhQAAQh2AAhigwQhegvguhNQgWACgbAAQh+AAhag3QhZg4AAhPQAAhOBZg3QBag4B+AAQBaAABMAfQBqg9CFAAQAdAAAfAEQAJhmBdhHQBdhHCBAAQBlAABUAuQBRAtAkBJQAdgEAdAAQCCAABeBEQBeBDAGBhQAegCAaAAQB2AABUAlQBTAmAAA2QAAA2hTAmQhUAmh2AAIgFAAQglAkhDAWQhFAWhSAAQggAAgWgDQgrA0hHAeQhJAfhUAAQhRAAhHgcg");
	this.shape_5.setTransform(106,42);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13_1, new cjs.Rectangle(0,0,212,84), null);


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
	this.shape_1.graphics.f("#FAC53B").s().p("Ai0GnQighng9jFQg8jEBLivQBLivCmgzQCmgzCgBnQCgBnA9DFQA8DEhLCvQhLCvimAzQg3ARg3AAQhtAAhrhFg");
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
	this.shape_1.graphics.f("#25FFBA").s().p("AjOGbQiZhwgxjJQgwjHBWiqQBVirCqgoQCogpCaBxQCZBxAwDIQAxDHhWCqQhWCripAoQgtALgsAAQh4AAhxhTg");
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
	this.shape_1.graphics.f("#F9D265").s().p("Ag/HtQitgWhnihQhnigAajMQAbjMCNiAQCNiBCrAXQCtAXBnCgQBnCggaDLQgbDMiNCBQh4BtiOAAQgZAAgZgDg");
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
	this.shape_1.graphics.f("#F168A0").s().p("AgOHxQiugFh3iWQh2iVAGjNQAGjOCAiOQB/iNCtAFQCuAFB3CVQB2CWgGDNQgHDOh/CNQh6CJilAAIgNAAg");
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
	this.shape_1.graphics.f("#2ADDE7").s().p("Ag6HuQitgVhpifQhpifAZjMQAYjMCMiCQCLiCCsAUQCsAVBpCfQBpCfgYDMQgYDMiMCCQh4BxiQAAQgXAAgYgDg");
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
	this.shape.setTransform(607.0998,-36.2319,1.0079,1.008);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWABQAMgJAKgCQALgDAMADQgJADgKAGQgGAEgJAJg");
	this.shape_1.setTransform(610.2264,-39.4952,1.0079,1.008);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_2.setTransform(612.1415,-34.0144,1.0079,1.008);

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
	this.shape_6.setTransform(607.1026,210.9259,1.008,1.008);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDAKADQgLADgIAHQgJAFgGAHg");
	this.shape_7.setTransform(610.2304,207.675,1.008,1.008);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_8.setTransform(612.1204,213.1687,1.008,1.008);

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
	this.shape_12.setTransform(607.1078,149.1808,1.008,1.008);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXABQAMgJALgCQAKgDAOADQgKADgKAGQgIAFgGAIg");
	this.shape_13.setTransform(610.2104,145.9173,1.008,1.008);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_14.setTransform(612.1256,151.3984,1.008,1.008);

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
	this.shape_18.setTransform(607.0888,87.3605,1.008,1.008);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgWABQAMgJAKgCQALgDAMADQgJADgKAGQgGAEgJAJg");
	this.shape_19.setTransform(610.2156,84.097,1.008,1.008);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_20.setTransform(612.1307,89.5781,1.008,1.008);

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
	this.shape_30.setTransform(4.6404,-4.8742,1.0079,1.0079);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgWABQAMgJAKgCQALgDAMADQgJADgKAGQgGAEgJAJg");
	this.shape_31.setTransform(7.767,-8.1374,1.0079,1.0079);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_32.setTransform(9.682,-2.6568,1.0079,1.0079);

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
	this.shape_36.setTransform(4.6136,241.5276,1.0079,1.008);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDAKADQgLADgIAHQgJAFgGAHg");
	this.shape_37.setTransform(7.7413,238.2769,1.0079,1.008);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_38.setTransform(9.6312,243.7703,1.0079,1.008);

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
	this.shape_42.setTransform(4.6188,179.9354,1.0079,1.008);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgXABQAMgJALgCQAKgDAOADQgKADgKAGQgIAFgGAIg");
	this.shape_43.setTransform(7.7213,176.6721,1.0079,1.008);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_44.setTransform(9.6363,182.153,1.0079,1.008);

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
	this.shape_48.setTransform(4.5998,118.3181,1.0079,1.008);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgWABQAMgJAKgCQALgDAMADQgJADgKAGQgGAEgJAJg");
	this.shape_49.setTransform(7.7264,115.0548,1.0079,1.008);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_50.setTransform(9.6415,120.5356,1.0079,1.008);

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
	this.shape_63.setTransform(53.7058,266.4016,1.0079,1.0079);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgXABQAMgIALgDQANgDAKADQgKADgJAGQgJAGgFAIg");
	this.shape_64.setTransform(56.8324,263.1511,1.0079,1.0079);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_65.setTransform(58.7474,268.6441,1.0079,1.0079);

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
	this.shape_69.setTransform(130.7302,266.4016,1.0079,1.0079);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDALADQgLADgJAGQgHAFgIAJg");
	this.shape_70.setTransform(133.8568,263.1511,1.0079,1.0079);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_71.setTransform(135.7214,268.6441,1.0079,1.0079);

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
	this.shape_75.setTransform(207.6542,266.4016,1.0079,1.0079);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgWABQALgIALgDQANgDALADQgLADgJAGQgJAGgFAIg");
	this.shape_76.setTransform(210.7808,263.1511,1.0079,1.0079);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_77.setTransform(212.6958,268.6441,1.0079,1.0079);

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
	this.shape_81.setTransform(284.7193,266.4016,1.0079,1.0079);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgXABQALgIAMgDQAMgDALADQgLADgIAGIgPAOg");
	this.shape_82.setTransform(287.8552,263.1511,1.0079,1.0079);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_83.setTransform(289.7198,268.6441,1.0079,1.0079);

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
	this.shape_87.setTransform(361.6526,266.4016,1.0079,1.0079);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgWABQAMgIAKgDQANgDAKADQgLADgIAGQgIAGgHAIg");
	this.shape_88.setTransform(364.7792,263.1511,1.0079,1.0079);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_89.setTransform(366.6942,268.6441,1.0079,1.0079);

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
	this.shape_93.setTransform(438.6677,266.4016,1.0079,1.0079);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDAKADQgLADgIAGQgKAHgFAHg");
	this.shape_94.setTransform(441.7784,263.1511,1.0079,1.0079);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_95.setTransform(443.6682,268.6441,1.0079,1.0079);

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
	this.shape_99.setTransform(515.651,266.4016,1.0079,1.0079);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgXABQAMgIALgDQANgDAKADQgKADgJAGQgJAGgFAIg");
	this.shape_100.setTransform(518.7776,263.1511,1.0079,1.0079);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_101.setTransform(520.6926,268.6441,1.0079,1.0079);

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
	this.shape_105.setTransform(592.9161,266.4016,1.0079,1.0079);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDAKADQgLADgIAGQgKAHgFAHg");
	this.shape_106.setTransform(596.0268,263.1511,1.0079,1.0079);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_107.setTransform(597.9166,268.6441,1.0079,1.0079);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgIAHgEAHQgGALgCAIQgEgKADgMg");
	this.shape_108.setTransform(15.8958,-63.9509,1.0078,1.0078);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDALADQgLADgJAGQgHAFgIAJg");
	this.shape_109.setTransform(19.0221,-67.201,1.0078,1.0078);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_110.setTransform(20.8865,-61.7085,1.0078,1.0078);

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
	this.shape_117.setTransform(92.713,-63.9496,1.0078,1.0078);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDALADQgLADgJAGQgHAFgIAJg");
	this.shape_118.setTransform(95.8394,-67.1999,1.0078,1.0078);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_119.setTransform(97.7039,-61.7072,1.0078,1.0078);

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
	this.shape_123.setTransform(169.4334,-63.9496,1.0078,1.0078);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgWABQALgIALgDQANgDALADQgLADgJAGQgJAGgFAIg");
	this.shape_124.setTransform(172.5598,-67.1999,1.0078,1.0078);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_125.setTransform(174.4747,-61.7072,1.0078,1.0078);

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
	this.shape_129.setTransform(246.2448,-63.9496,1.0078,1.0078);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgXABQALgIAMgDQAMgDALADQgLADgIAGIgPAOg");
	this.shape_130.setTransform(249.3806,-67.1999,1.0078,1.0078);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_131.setTransform(251.2451,-61.7072,1.0078,1.0078);

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
	this.shape_135.setTransform(323.0246,-63.9496,1.0078,1.0078);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgWABQAMgIAKgDQANgDAKADQgLADgIAGQgIAGgHAIg");
	this.shape_136.setTransform(326.151,-67.1999,1.0078,1.0078);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_137.setTransform(328.0659,-61.7072,1.0078,1.0078);

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
	this.shape_141.setTransform(399.836,-63.9496,1.0078,1.0078);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDAKADQgLADgIAGQgKAHgFAHg");
	this.shape_142.setTransform(402.9466,-67.1999,1.0078,1.0078);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_143.setTransform(404.8363,-61.7072,1.0078,1.0078);

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
	this.shape_147.setTransform(476.5657,-63.9496,1.0078,1.0078);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgXABQAMgIALgDQANgDAKADQgKADgJAGQgJAGgFAIg");
	this.shape_148.setTransform(479.6921,-67.1999,1.0078,1.0078);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_149.setTransform(481.607,-61.7072,1.0078,1.0078);

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
	this.shape_153.setTransform(553.4271,-63.9496,1.0078,1.0078);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDAKADQgLADgIAGQgKAHgFAHg");
	this.shape_154.setTransform(556.5377,-67.1999,1.0078,1.0078);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_155.setTransform(558.4274,-61.7072,1.0078,1.0078);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_155,p:{x:558.4274,y:-61.7072}},{t:this.shape_154,p:{x:556.5377,y:-67.1999}},{t:this.shape_153,p:{x:553.4271,y:-63.9496}},{t:this.shape_152,p:{x:520.2831,y:-61.5835}},{t:this.shape_151,p:{x:518.3678,y:-67.0776}},{t:this.shape_150,p:{x:515.2528,y:-63.8265}},{t:this.shape_149,p:{x:481.607,y:-61.7072}},{t:this.shape_148,p:{x:479.6921,y:-67.1999}},{t:this.shape_147,p:{x:476.5657,y:-63.9496}},{t:this.shape_146,p:{x:443.493,y:-61.5835}},{t:this.shape_145,p:{x:441.6281,y:-67.0776}},{t:this.shape_144,p:{x:438.5009,y:-63.8265}},{t:this.shape_143,p:{x:404.8363,y:-61.7072}},{t:this.shape_142,p:{x:402.9466,y:-67.1999}},{t:this.shape_141,p:{x:399.836,y:-63.9496}},{t:this.shape_140,p:{x:366.7033,y:-61.5835}},{t:this.shape_139,p:{x:364.788,y:-67.0776}},{t:this.shape_138,p:{x:361.685,y:-63.8265}},{t:this.shape_137,p:{x:328.0659,y:-61.7072}},{t:this.shape_136,p:{x:326.151,y:-67.1999}},{t:this.shape_135,p:{x:323.0246,y:-63.9496}},{t:this.shape_134,p:{x:289.8632,y:-61.5835}},{t:this.shape_133,p:{x:287.9983,y:-67.0776}},{t:this.shape_132,p:{x:284.8711,y:-63.8265}},{t:this.shape_131,p:{x:251.2451,y:-61.7072}},{t:this.shape_130,p:{x:249.3806,y:-67.1999}},{t:this.shape_129,p:{x:246.2448,y:-63.9496}},{t:this.shape_128,p:{x:213.0735,y:-61.5835}},{t:this.shape_127,p:{x:211.1834,y:-67.0776}},{t:this.shape_126,p:{x:208.0552,y:-63.8265}},{t:this.shape_125,p:{x:174.4747,y:-61.7072}},{t:this.shape_124,p:{x:172.5598,y:-67.1999}},{t:this.shape_123,p:{x:169.4334,y:-63.9496}},{t:this.shape_122,p:{x:136.2834,y:-61.5835}},{t:this.shape_121,p:{x:134.4185,y:-67.0776}},{t:this.shape_120,p:{x:131.2913,y:-63.8265}},{t:this.shape_119,p:{x:97.7039,y:-61.7072}},{t:this.shape_118,p:{x:95.8394,y:-67.1999}},{t:this.shape_117,p:{x:92.713,y:-63.9496}},{t:this.shape_116,p:{x:59.4938,y:-61.5835}},{t:this.shape_115,p:{x:57.6036,y:-67.0776}},{t:this.shape_114,p:{x:54.4754,y:-63.8265}},{t:this.shape_113,p:{x:597.4541,y:-61.5835}},{t:this.shape_112,p:{x:595.5387,y:-67.0776}},{t:this.shape_111,p:{x:592.4115,y:-63.8265}},{t:this.shape_110,p:{x:20.8865,y:-61.7085}},{t:this.shape_109,p:{x:19.0221,y:-67.201}},{t:this.shape_108,p:{x:15.8958,y:-63.9509}},{t:this.shape_107,p:{x:597.9166,y:268.6441}},{t:this.shape_106,p:{x:596.0268,y:263.1511}},{t:this.shape_105,p:{x:592.9161,y:266.4016}},{t:this.shape_104,p:{x:559.4331,y:268.7665}},{t:this.shape_103,p:{x:557.5178,y:263.2724}},{t:this.shape_102,p:{x:554.4028,y:266.5235}},{t:this.shape_101,p:{x:520.6926,y:268.6441}},{t:this.shape_100,p:{x:518.7776,y:263.1511}},{t:this.shape_99,p:{x:515.651,y:266.4016}},{t:this.shape_98,p:{x:482.443,y:268.7665}},{t:this.shape_97,p:{x:480.5781,y:263.2724}},{t:this.shape_96,p:{x:477.4509,y:266.5235}},{t:this.shape_95,p:{x:443.6682,y:268.6441}},{t:this.shape_94,p:{x:441.7784,y:263.1511}},{t:this.shape_93,p:{x:438.6677,y:266.4016}},{t:this.shape_92,p:{x:405.4533,y:268.7665}},{t:this.shape_91,p:{x:403.538,y:263.2724}},{t:this.shape_90,p:{x:400.435,y:266.5235}},{t:this.shape_89,p:{x:366.6942,y:268.6441}},{t:this.shape_88,p:{x:364.7792,y:263.1511}},{t:this.shape_87,p:{x:361.6526,y:266.4016}},{t:this.shape_86,p:{x:328.4132,y:268.7665}},{t:this.shape_85,p:{x:326.5483,y:263.2724}},{t:this.shape_84,p:{x:323.4211,y:266.5235}},{t:this.shape_83,p:{x:289.7198,y:268.6441}},{t:this.shape_82,p:{x:287.8552,y:263.1511}},{t:this.shape_81,p:{x:284.7193,y:266.4016}},{t:this.shape_80,p:{x:251.4235,y:268.7665}},{t:this.shape_79,p:{x:249.5334,y:263.2724}},{t:this.shape_78,p:{x:246.4052,y:266.5235}},{t:this.shape_77,p:{x:212.6958,y:268.6441}},{t:this.shape_76,p:{x:210.7808,y:263.1511}},{t:this.shape_75,p:{x:207.6542,y:266.4016}},{t:this.shape_74,p:{x:174.4334,y:268.7665}},{t:this.shape_73,p:{x:172.5685,y:263.2724}},{t:this.shape_72,p:{x:169.4413,y:266.5235}},{t:this.shape_71,p:{x:135.7214,y:268.6441}},{t:this.shape_70,p:{x:133.8568,y:263.1511}},{t:this.shape_69,p:{x:130.7302,y:266.4016}},{t:this.shape_68,p:{x:97.4438,y:268.7665}},{t:this.shape_67,p:{x:95.5536,y:263.2724}},{t:this.shape_66,p:{x:92.4254,y:266.5235}},{t:this.shape_65,p:{x:58.7474,y:268.6441}},{t:this.shape_64,p:{x:56.8324,y:263.1511}},{t:this.shape_63,p:{x:53.7058,y:266.4016}},{t:this.shape_62,p:{x:20.4541,y:268.7665}},{t:this.shape_61,p:{x:18.5387,y:263.2724}},{t:this.shape_60,p:{x:15.4115,y:266.5235}},{t:this.shape_59,p:{x:9.97,y:28.2956}},{t:this.shape_58,p:{x:8.0796,y:22.8009}},{t:this.shape_57,p:{x:4.9681,y:26.0524}},{t:this.shape_56,p:{x:9.9823,y:59.0551}},{t:this.shape_55,p:{x:8.0668,y:53.5728}},{t:this.shape_54,p:{x:4.9393,y:56.837}},{t:this.shape_53,p:{x:9.97,y:89.8956}},{t:this.shape_52,p:{x:8.0796,y:84.4009}},{t:this.shape_51,p:{x:4.9681,y:87.6524}},{t:this.shape_50,p:{x:9.6415,y:120.5356}},{t:this.shape_49,p:{x:7.7264,y:115.0548}},{t:this.shape_48,p:{x:4.5998,y:118.3181}},{t:this.shape_47,p:{x:9.9647,y:151.4788}},{t:this.shape_46,p:{x:8.0995,y:145.9589}},{t:this.shape_45,p:{x:4.9721,y:149.2355}},{t:this.shape_44,p:{x:9.6363,y:182.153}},{t:this.shape_43,p:{x:7.7213,y:176.6721}},{t:this.shape_42,p:{x:4.6188,y:179.9354}},{t:this.shape_41,p:{x:9.9593,y:213.062}},{t:this.shape_40,p:{x:8.0942,y:207.5295}},{t:this.shape_39,p:{x:4.9668,y:210.7935}},{t:this.shape_38,p:{x:9.6312,y:243.7703}},{t:this.shape_37,p:{x:7.7413,y:238.2769}},{t:this.shape_36,p:{x:4.6136,y:241.5276}},{t:this.shape_35,p:{x:10.354,y:-33.3548}},{t:this.shape_34,p:{x:8.4889,y:-38.8874}},{t:this.shape_33,p:{x:5.3615,y:-35.6233}},{t:this.shape_32,p:{x:9.682,y:-2.6568}},{t:this.shape_31,p:{x:7.767,y:-8.1374}},{t:this.shape_30,p:{x:4.6404,y:-4.8742}},{t:this.shape_29,p:{x:612.37,y:-3.0044}},{t:this.shape_28,p:{x:610.4797,y:-8.4991}},{t:this.shape_27,p:{x:607.3681,y:-5.2476}},{t:this.shape_26,p:{x:612.3823,y:27.9051}},{t:this.shape_25,p:{x:610.4668,y:22.4228}},{t:this.shape_24,p:{x:607.3393,y:25.687}},{t:this.shape_23,p:{x:612.37,y:58.8456}},{t:this.shape_22,p:{x:610.4797,y:53.3509}},{t:this.shape_21,p:{x:607.3681,y:56.6024}},{t:this.shape_20,p:{x:612.1307,y:89.5781}},{t:this.shape_19,p:{x:610.2156,y:84.097}},{t:this.shape_18,p:{x:607.0888,y:87.3605}},{t:this.shape_17,p:{x:612.3647,y:120.6288}},{t:this.shape_16,p:{x:610.4996,y:115.1089}},{t:this.shape_15,p:{x:607.3721,y:118.3855}},{t:this.shape_14,p:{x:612.1256,y:151.3984}},{t:this.shape_13,p:{x:610.2104,y:145.9173}},{t:this.shape_12,p:{x:607.1078,y:149.1808}},{t:this.shape_11,p:{x:612.3593,y:182.412}},{t:this.shape_10,p:{x:610.4942,y:176.8795}},{t:this.shape_9,p:{x:607.3668,y:180.1435}},{t:this.shape_8,p:{x:612.1204,y:213.1687}},{t:this.shape_7,p:{x:610.2304,y:207.675}},{t:this.shape_6,p:{x:607.1026,y:210.9259}},{t:this.shape_5,p:{x:612.354,y:244.3952}},{t:this.shape_4,p:{x:610.4889,y:238.8626}},{t:this.shape_3,p:{x:607.3615,y:242.1267}},{t:this.shape_2,p:{x:612.1415,y:-34.0144}},{t:this.shape_1,p:{x:610.2264,y:-39.4952}},{t:this.shape,p:{x:607.0998,y:-36.2319}}]}).to({state:[{t:this.shape_155,p:{x:557.7774,y:268.6428}},{t:this.shape_154,p:{x:555.8877,y:263.1501}},{t:this.shape_153,p:{x:552.7771,y:266.4004}},{t:this.shape_152,p:{x:519.6331,y:268.7665}},{t:this.shape_151,p:{x:517.7178,y:263.2724}},{t:this.shape_150,p:{x:514.6028,y:266.5235}},{t:this.shape_149,p:{x:480.957,y:268.6428}},{t:this.shape_148,p:{x:479.0421,y:263.1501}},{t:this.shape_147,p:{x:475.9157,y:266.4004}},{t:this.shape_146,p:{x:442.843,y:268.7665}},{t:this.shape_145,p:{x:440.9781,y:263.2724}},{t:this.shape_144,p:{x:437.8509,y:266.5235}},{t:this.shape_143,p:{x:404.1863,y:268.6428}},{t:this.shape_142,p:{x:402.2966,y:263.1501}},{t:this.shape_141,p:{x:399.186,y:266.4004}},{t:this.shape_140,p:{x:366.0533,y:268.7665}},{t:this.shape_139,p:{x:364.138,y:263.2724}},{t:this.shape_138,p:{x:361.035,y:266.5235}},{t:this.shape_137,p:{x:327.4159,y:268.6428}},{t:this.shape_136,p:{x:325.501,y:263.1501}},{t:this.shape_135,p:{x:322.3746,y:266.4004}},{t:this.shape_134,p:{x:289.2132,y:268.7665}},{t:this.shape_133,p:{x:287.3483,y:263.2724}},{t:this.shape_132,p:{x:284.2211,y:266.5235}},{t:this.shape_131,p:{x:250.5951,y:268.6428}},{t:this.shape_130,p:{x:248.7306,y:263.1501}},{t:this.shape_129,p:{x:245.5948,y:266.4004}},{t:this.shape_128,p:{x:212.4235,y:268.7665}},{t:this.shape_127,p:{x:210.5334,y:263.2724}},{t:this.shape_126,p:{x:207.4052,y:266.5235}},{t:this.shape_125,p:{x:173.8247,y:268.6428}},{t:this.shape_124,p:{x:171.9098,y:263.1501}},{t:this.shape_123,p:{x:168.7834,y:266.4004}},{t:this.shape_122,p:{x:135.6334,y:268.7665}},{t:this.shape_121,p:{x:133.7685,y:263.2724}},{t:this.shape_120,p:{x:130.6413,y:266.5235}},{t:this.shape_119,p:{x:97.0539,y:268.6428}},{t:this.shape_118,p:{x:95.1894,y:263.1501}},{t:this.shape_117,p:{x:92.063,y:266.4004}},{t:this.shape_116,p:{x:58.8438,y:268.7665}},{t:this.shape_115,p:{x:56.9536,y:263.2724}},{t:this.shape_114,p:{x:53.8254,y:266.5235}},{t:this.shape_113,p:{x:596.8041,y:268.7665}},{t:this.shape_112,p:{x:594.8887,y:263.2724}},{t:this.shape_111,p:{x:591.7615,y:266.5235}},{t:this.shape_110,p:{x:20.2365,y:268.6415}},{t:this.shape_109,p:{x:18.3721,y:263.149}},{t:this.shape_108,p:{x:15.2458,y:266.3991}},{t:this.shape_107,p:{x:598.5666,y:-61.7059}},{t:this.shape_106,p:{x:596.6768,y:-67.1989}},{t:this.shape_105,p:{x:593.5661,y:-63.9484}},{t:this.shape_104,p:{x:560.0831,y:-61.5835}},{t:this.shape_103,p:{x:558.1678,y:-67.0776}},{t:this.shape_102,p:{x:555.0528,y:-63.8265}},{t:this.shape_101,p:{x:521.3426,y:-61.7059}},{t:this.shape_100,p:{x:519.4276,y:-67.1989}},{t:this.shape_99,p:{x:516.301,y:-63.9484}},{t:this.shape_98,p:{x:483.093,y:-61.5835}},{t:this.shape_97,p:{x:481.2281,y:-67.0776}},{t:this.shape_96,p:{x:478.1009,y:-63.8265}},{t:this.shape_95,p:{x:444.3182,y:-61.7059}},{t:this.shape_94,p:{x:442.4284,y:-67.1989}},{t:this.shape_93,p:{x:439.3177,y:-63.9484}},{t:this.shape_92,p:{x:406.1033,y:-61.5835}},{t:this.shape_91,p:{x:404.188,y:-67.0776}},{t:this.shape_90,p:{x:401.085,y:-63.8265}},{t:this.shape_89,p:{x:367.3442,y:-61.7059}},{t:this.shape_88,p:{x:365.4292,y:-67.1989}},{t:this.shape_87,p:{x:362.3026,y:-63.9484}},{t:this.shape_86,p:{x:329.0632,y:-61.5835}},{t:this.shape_85,p:{x:327.1983,y:-67.0776}},{t:this.shape_84,p:{x:324.0711,y:-63.8265}},{t:this.shape_83,p:{x:290.3698,y:-61.7059}},{t:this.shape_82,p:{x:288.5052,y:-67.1989}},{t:this.shape_81,p:{x:285.3693,y:-63.9484}},{t:this.shape_80,p:{x:252.0735,y:-61.5835}},{t:this.shape_79,p:{x:250.1834,y:-67.0776}},{t:this.shape_78,p:{x:247.0552,y:-63.8265}},{t:this.shape_77,p:{x:213.3458,y:-61.7059}},{t:this.shape_76,p:{x:211.4308,y:-67.1989}},{t:this.shape_75,p:{x:208.3042,y:-63.9484}},{t:this.shape_74,p:{x:175.0834,y:-61.5835}},{t:this.shape_73,p:{x:173.2185,y:-67.0776}},{t:this.shape_72,p:{x:170.0913,y:-63.8265}},{t:this.shape_71,p:{x:136.3714,y:-61.7059}},{t:this.shape_70,p:{x:134.5068,y:-67.1989}},{t:this.shape_69,p:{x:131.3802,y:-63.9484}},{t:this.shape_68,p:{x:98.0938,y:-61.5835}},{t:this.shape_67,p:{x:96.2036,y:-67.0776}},{t:this.shape_66,p:{x:93.0754,y:-63.8265}},{t:this.shape_65,p:{x:59.3974,y:-61.7059}},{t:this.shape_64,p:{x:57.4824,y:-67.1989}},{t:this.shape_63,p:{x:54.3558,y:-63.9484}},{t:this.shape_62,p:{x:21.1041,y:-61.5835}},{t:this.shape_61,p:{x:19.1887,y:-67.0776}},{t:this.shape_60,p:{x:16.0615,y:-63.8265}},{t:this.shape_59,p:{x:612.47,y:27.7456}},{t:this.shape_58,p:{x:610.5797,y:22.2509}},{t:this.shape_57,p:{x:607.4681,y:25.5024}},{t:this.shape_56,p:{x:612.4823,y:58.5051}},{t:this.shape_55,p:{x:610.5668,y:53.0228}},{t:this.shape_54,p:{x:607.4393,y:56.287}},{t:this.shape_53,p:{x:612.47,y:89.3456}},{t:this.shape_52,p:{x:610.5797,y:83.8509}},{t:this.shape_51,p:{x:607.4681,y:87.1024}},{t:this.shape_50,p:{x:612.1415,y:119.9856}},{t:this.shape_49,p:{x:610.2264,y:114.5048}},{t:this.shape_48,p:{x:607.0998,y:117.7681}},{t:this.shape_47,p:{x:612.4647,y:150.9288}},{t:this.shape_46,p:{x:610.5996,y:145.4089}},{t:this.shape_45,p:{x:607.4721,y:148.6855}},{t:this.shape_44,p:{x:612.1363,y:181.603}},{t:this.shape_43,p:{x:610.2213,y:176.1222}},{t:this.shape_42,p:{x:607.1188,y:179.3854}},{t:this.shape_41,p:{x:612.4593,y:212.512}},{t:this.shape_40,p:{x:610.5942,y:206.9795}},{t:this.shape_39,p:{x:607.4668,y:210.2435}},{t:this.shape_38,p:{x:612.1312,y:243.2203}},{t:this.shape_37,p:{x:610.2413,y:237.7269}},{t:this.shape_36,p:{x:607.1136,y:240.9776}},{t:this.shape_35,p:{x:612.854,y:-33.9048}},{t:this.shape_34,p:{x:610.9889,y:-39.4374}},{t:this.shape_33,p:{x:607.8615,y:-36.1733}},{t:this.shape_32,p:{x:612.182,y:-3.2068}},{t:this.shape_31,p:{x:610.267,y:-8.6874}},{t:this.shape_30,p:{x:607.1404,y:-5.4242}},{t:this.shape_29,p:{x:9.87,y:-2.4544}},{t:this.shape_28,p:{x:7.9796,y:-7.9491}},{t:this.shape_27,p:{x:4.8681,y:-4.6976}},{t:this.shape_26,p:{x:9.8823,y:28.4551}},{t:this.shape_25,p:{x:7.9668,y:22.9728}},{t:this.shape_24,p:{x:4.8393,y:26.237}},{t:this.shape_23,p:{x:9.87,y:59.3956}},{t:this.shape_22,p:{x:7.9796,y:53.9009}},{t:this.shape_21,p:{x:4.8681,y:57.1524}},{t:this.shape_20,p:{x:9.6307,y:90.1281}},{t:this.shape_19,p:{x:7.7156,y:84.647}},{t:this.shape_18,p:{x:4.5888,y:87.9105}},{t:this.shape_17,p:{x:9.8646,y:121.1788}},{t:this.shape_16,p:{x:7.9995,y:115.6589}},{t:this.shape_15,p:{x:4.8721,y:118.9355}},{t:this.shape_14,p:{x:9.6255,y:151.9484}},{t:this.shape_13,p:{x:7.7104,y:146.4673}},{t:this.shape_12,p:{x:4.6078,y:149.7308}},{t:this.shape_11,p:{x:9.8593,y:182.962}},{t:this.shape_10,p:{x:7.9942,y:177.4295}},{t:this.shape_9,p:{x:4.8668,y:180.6935}},{t:this.shape_8,p:{x:9.6204,y:213.7187}},{t:this.shape_7,p:{x:7.7304,y:208.225}},{t:this.shape_6,p:{x:4.6026,y:211.4759}},{t:this.shape_5,p:{x:9.854,y:244.9452}},{t:this.shape_4,p:{x:7.9889,y:239.4126}},{t:this.shape_3,p:{x:4.8615,y:242.6767}},{t:this.shape_2,p:{x:9.6415,y:-33.4644}},{t:this.shape_1,p:{x:7.7264,y:-38.9452}},{t:this.shape,p:{x:4.5998,y:-35.6819}}]},14).wait(15));

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
	this.shape_3.setTransform(600.1533,265.9882,1.008,1.008);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDAKADQgLADgIAGQgKAHgFAHg");
	this.shape_4.setTransform(603.2643,262.7373,1.008,1.008);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_5.setTransform(605.1544,268.231,1.008,1.008);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgHAGgFAIQgEAHgEAMQgEgKADgMg");
	this.shape_6.setTransform(520.3786,265.9882,1.008,1.008);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXABQAMgIALgDQANgDAKADQgKADgJAGQgJAGgFAIg");
	this.shape_7.setTransform(523.5055,262.7373,1.008,1.008);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_8.setTransform(525.4207,268.231,1.008,1.008);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKAAQADgLAHgKIAMAKQgIAHgEAHQgGALgCAIQgEgKACgMg");
	this.shape_9.setTransform(440.6355,265.9882,1.008,1.008);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDAKADQgLADgIAGQgKAHgFAHg");
	this.shape_10.setTransform(443.7466,262.7373,1.008,1.008);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_11.setTransform(445.6366,268.231,1.008,1.008);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgHAGgFAIQgEAHgEAMQgEgKADgMg");
	this.shape_12.setTransform(360.8608,265.9882,1.008,1.008);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWABQAMgIAKgDQANgDAKADQgLADgIAGQgIAGgHAIg");
	this.shape_13.setTransform(363.9878,262.7373,1.008,1.008);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_14.setTransform(365.903,268.231,1.008,1.008);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKAAQADgMAHgJIAMAKQgIAHgEAHQgGALgCAIQgEgKACgMg");
	this.shape_15.setTransform(281.1178,265.9882,1.008,1.008);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgXABQALgIAMgDQAMgDALADQgLADgIAGIgPAOg");
	this.shape_16.setTransform(284.2541,262.7373,1.008,1.008);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_17.setTransform(286.1189,268.231,1.008,1.008);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJAAQACgJAHgMIAMAKQgHAGgFAIQgEAHgEAMQgEgKADgMg");
	this.shape_18.setTransform(201.3431,265.9882,1.008,1.008);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgWABQALgIALgDQANgDALADQgLADgJAGQgJAGgFAIg");
	this.shape_19.setTransform(204.47,262.7373,1.008,1.008);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_20.setTransform(206.3853,268.231,1.008,1.008);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgIAHgEAHQgGALgCAIQgEgKADgMg");
	this.shape_21.setTransform(121.6095,265.9882,1.008,1.008);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDALADQgLADgJAGQgHAFgIAJg");
	this.shape_22.setTransform(124.7364,262.7373,1.008,1.008);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_23.setTransform(126.6012,268.231,1.008,1.008);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJAAQACgJAHgMIAMAKQgHAGgFAIQgEAHgEAMQgEgKADgMg");
	this.shape_24.setTransform(41.8254,265.9882,1.008,1.008);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgXABQAMgIALgDQANgDAKADQgKADgJAGQgJAGgFAIg");
	this.shape_25.setTransform(44.9523,262.7373,1.008,1.008);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_26.setTransform(46.8675,268.231,1.008,1.008);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgKAAQADgLAHgKIALAKQgIAJgDAGQgFAIgEAKQgCgMABgKg");
	this.shape_27.setTransform(600.9399,201.6546,1.0081,1.0081);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgWABQAKgIAMgDQANgDAKADQgLADgIAHQgJAFgGAHg");
	this.shape_28.setTransform(604.0681,198.4034,1.0081,1.0081);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_29.setTransform(605.9582,203.8977,1.0081,1.0081);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgKAAQACgKAIgLIALAKQgHAHgEAIQgFAHgEALQgCgNABgJg");
	this.shape_30.setTransform(601.5951,136.2016,1.0081,1.0081);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgXABQAMgJALgCQAKgDAOADQgKADgKAGQgIAFgGAIg");
	this.shape_31.setTransform(604.6981,132.9378,1.0081,1.0081);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_32.setTransform(606.6135,138.4195,1.0081,1.0081);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgJAAQACgKAHgLIAMALQgHAGgFAHQgFAIgDALQgEgLADgLg");
	this.shape_33.setTransform(602.2262,70.7234,1.0081,1.0081);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgWABQAMgJAKgCQALgDAMADQgJADgKAGQgGAEgJAJg");
	this.shape_34.setTransform(605.3534,67.4595,1.0081,1.0081);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_35.setTransform(607.2688,72.9413,1.0081,1.0081);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgKABQACgKAIgMIALAKQgIAJgDAFQgGAJgDAKQgCgMABgJg");
	this.shape_36.setTransform(2.3881,234.3938,1.0081,1.0081);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgWABQAIgHAOgEQAMgDALADQgJADgKAGQgHAFgIAIg");
	this.shape_37.setTransform(5.5163,231.1299,1.0081,1.0081);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_38.setTransform(7.4065,236.6621,1.0081,1.0081);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgKAAQACgIAIgNIALALQgHAGgEAHQgFAIgEALQgDgNACgJg");
	this.shape_39.setTransform(3.0314,168.9155,1.0081,1.0081);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgXABQAKgIANgDQAMgDAMADQgKADgKAGQgHAEgHAJg");
	this.shape_40.setTransform(6.1464,165.6517,1.0081,1.0081);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_41.setTransform(8.0617,171.1838,1.0081,1.0081);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgJAAQACgJAHgMIAMAKQgHAGgFAIQgFAHgDAMQgEgKADgMg");
	this.shape_42.setTransform(3.6745,103.4625,1.0081,1.0081);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgXABQALgIAMgDQANgDALADQgLAEgJAFQgIAFgGAIg");
	this.shape_43.setTransform(6.8016,100.1861,1.0081,1.0081);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_44.setTransform(8.717,105.7056,1.0081,1.0081);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgHAGgFAIQgEAHgEAMQgEgKADgMg");
	this.shape_45.setTransform(4.3297,37.9843,1.0081,1.0081);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgWABQAMgIAKgDQANgDAKADQgLAEgIAFQgJAGgGAIg");
	this.shape_46.setTransform(7.4569,34.733,1.0081,1.0081);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_47.setTransform(9.3723,40.2274,1.0081,1.0081);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46,p:{scaleX:1.0081,scaleY:1.0081,x:7.4569,y:34.733}},{t:this.shape_45,p:{scaleX:1.0081,scaleY:1.0081,x:4.3297,y:37.9843}},{t:this.shape_44},{t:this.shape_43,p:{scaleX:1.0081,scaleY:1.0081,x:6.8016,y:100.1861}},{t:this.shape_42,p:{scaleX:1.0081,scaleY:1.0081,x:3.6745,y:103.4625}},{t:this.shape_41},{t:this.shape_40,p:{scaleX:1.0081,scaleY:1.0081,x:6.1464,y:165.6517}},{t:this.shape_39,p:{scaleX:1.0081,scaleY:1.0081,x:3.0314,y:168.9155}},{t:this.shape_38},{t:this.shape_37,p:{scaleX:1.0081,scaleY:1.0081,x:5.5163,y:231.1299}},{t:this.shape_36,p:{scaleX:1.0081,scaleY:1.0081,x:2.3881,y:234.3938}},{t:this.shape_35},{t:this.shape_34,p:{scaleX:1.0081,scaleY:1.0081,x:605.3534,y:67.4595}},{t:this.shape_33,p:{scaleX:1.0081,scaleY:1.0081,x:602.2262,y:70.7234}},{t:this.shape_32},{t:this.shape_31,p:{scaleX:1.0081,scaleY:1.0081,x:604.6981,y:132.9378}},{t:this.shape_30,p:{scaleX:1.0081,scaleY:1.0081,x:601.5951,y:136.2016}},{t:this.shape_29},{t:this.shape_28,p:{scaleX:1.0081,scaleY:1.0081,x:604.0681,y:198.4034}},{t:this.shape_27,p:{scaleX:1.0081,scaleY:1.0081,x:600.9399,y:201.6546}},{t:this.shape_26},{t:this.shape_25,p:{scaleX:1.008,scaleY:1.008,x:44.9523,y:262.7373}},{t:this.shape_24,p:{scaleX:1.008,scaleY:1.008,x:41.8254,y:265.9882}},{t:this.shape_23},{t:this.shape_22,p:{scaleX:1.008,scaleY:1.008,x:124.7364,y:262.7373}},{t:this.shape_21,p:{scaleX:1.008,scaleY:1.008,x:121.6095,y:265.9882}},{t:this.shape_20},{t:this.shape_19,p:{scaleX:1.008,scaleY:1.008,x:204.47,y:262.7373}},{t:this.shape_18,p:{scaleX:1.008,scaleY:1.008,x:201.3431,y:265.9882}},{t:this.shape_17},{t:this.shape_16,p:{scaleX:1.008,scaleY:1.008,x:284.2541,y:262.7373}},{t:this.shape_15,p:{scaleX:1.008,scaleY:1.008,x:281.1178,y:265.9882}},{t:this.shape_14},{t:this.shape_13,p:{scaleX:1.008,scaleY:1.008,x:363.9878,y:262.7373}},{t:this.shape_12,p:{scaleX:1.008,scaleY:1.008,x:360.8608,y:265.9882}},{t:this.shape_11},{t:this.shape_10,p:{scaleX:1.008,scaleY:1.008,x:443.7466,y:262.7373}},{t:this.shape_9,p:{scaleX:1.008,scaleY:1.008,x:440.6355,y:265.9882}},{t:this.shape_8},{t:this.shape_7,p:{scaleX:1.008,scaleY:1.008,x:523.5055,y:262.7373}},{t:this.shape_6,p:{scaleX:1.008,scaleY:1.008,x:520.3786,y:265.9882}},{t:this.shape_5},{t:this.shape_4,p:{scaleX:1.008,scaleY:1.008,x:603.2643,y:262.7373}},{t:this.shape_3,p:{scaleX:1.008,scaleY:1.008,x:600.1533,y:265.9882}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_63},{t:this.shape_46,p:{scaleX:1.0082,scaleY:1.0082,x:7.5603,y:34.8009}},{t:this.shape_45,p:{scaleX:1.0082,scaleY:1.0082,x:4.4328,y:38.0524}},{t:this.shape_62},{t:this.shape_43,p:{scaleX:1.0082,scaleY:1.0082,x:6.9049,y:100.2589}},{t:this.shape_42,p:{scaleX:1.0082,scaleY:1.0082,x:3.7775,y:103.5355}},{t:this.shape_61},{t:this.shape_40,p:{scaleX:1.0082,scaleY:1.0082,x:6.2496,y:165.7295}},{t:this.shape_39,p:{scaleX:1.0082,scaleY:1.0082,x:3.1344,y:168.9935}},{t:this.shape_60},{t:this.shape_37,p:{scaleX:1.0082,scaleY:1.0082,x:5.6195,y:231.2126}},{t:this.shape_36,p:{scaleX:1.0082,scaleY:1.0082,x:2.4911,y:234.4767}},{t:this.shape_59},{t:this.shape_34,p:{scaleX:1.0082,scaleY:1.0082,x:605.502,y:67.5299}},{t:this.shape_33,p:{scaleX:1.0082,scaleY:1.0082,x:602.3746,y:70.7939}},{t:this.shape_58},{t:this.shape_31,p:{scaleX:1.0082,scaleY:1.0082,x:604.8467,y:133.0131}},{t:this.shape_30,p:{scaleX:1.0082,scaleY:1.0082,x:601.7434,y:136.2771}},{t:this.shape_57},{t:this.shape_28,p:{scaleX:1.0082,scaleY:1.0082,x:604.2166,y:198.4837}},{t:this.shape_27,p:{scaleX:1.0082,scaleY:1.0082,x:601.0881,y:201.7351}},{t:this.shape_56},{t:this.shape_25,p:{scaleX:1.0081,scaleY:1.0081,x:45.0585,y:262.8224}},{t:this.shape_24,p:{scaleX:1.0081,scaleY:1.0081,x:41.9314,y:266.0735}},{t:this.shape_55},{t:this.shape_22,p:{scaleX:1.0081,scaleY:1.0081,x:124.8486,y:262.8224}},{t:this.shape_21,p:{scaleX:1.0081,scaleY:1.0081,x:121.7215,y:266.0735}},{t:this.shape_54},{t:this.shape_19,p:{scaleX:1.0081,scaleY:1.0081,x:204.5883,y:262.8224}},{t:this.shape_18,p:{scaleX:1.0081,scaleY:1.0081,x:201.4612,y:266.0735}},{t:this.shape_53},{t:this.shape_16,p:{scaleX:1.0081,scaleY:1.0081,x:284.3784,y:262.8224}},{t:this.shape_15,p:{scaleX:1.0081,scaleY:1.0081,x:281.2419,y:266.0735}},{t:this.shape_52},{t:this.shape_13,p:{scaleX:1.0081,scaleY:1.0081,x:364.1181,y:262.8224}},{t:this.shape_12,p:{scaleX:1.0081,scaleY:1.0081,x:360.991,y:266.0735}},{t:this.shape_51},{t:this.shape_10,p:{scaleX:1.0081,scaleY:1.0081,x:443.883,y:262.8224}},{t:this.shape_9,p:{scaleX:1.0081,scaleY:1.0081,x:440.7717,y:266.0735}},{t:this.shape_50},{t:this.shape_7,p:{scaleX:1.0081,scaleY:1.0081,x:523.6479,y:262.8224}},{t:this.shape_6,p:{scaleX:1.0081,scaleY:1.0081,x:520.5208,y:266.0735}},{t:this.shape_49},{t:this.shape_4,p:{scaleX:1.0081,scaleY:1.0081,x:603.4128,y:262.8224}},{t:this.shape_3,p:{scaleX:1.0081,scaleY:1.0081,x:600.3015,y:266.0735}},{t:this.shape_48},{t:this.shape_1},{t:this.shape}]},14).wait(15));

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
	this.instance_2 = new lib.Symbol13_1();
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
	this.shape.setTransform(107,399.25);

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
p.nominalBounds = new cjs.Rectangle(0,0,231.3,411);


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
	this.shape.setTransform(289.7222,-33.9418,1.2417,1.2417);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5DC6CF").s().p("ABPBrQgFgUgDg9QgCgtgOgVQgTgbgzAAQgdAAgGABQgUAFgCANQgDAKAAA1QAAA1gBAMQgFAogRAAQgZAAAAhAIAAh4QAAglANgKQALgIAnAAQBpAAAmAkQApAmAABuQAAAZgEALQgGATgSAAQgOAAgDgNg");
	this.shape_1.setTransform(258.8982,-29.5339,1.2417,1.2417);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5DC6CF").s().p("AgjB4IgkgBQgUAAgJgFQgJgFAAgMIACgQQACgKANAAIAmADIA7ACQAvAAgDgJQhLhIhJhJQgDgDgEgKQgFgJAAgFQAAgPAdAAQACAAApArQAqAsAOAFQANgPAOgdIAVgvQABgBAJAAQAKAAAKALQAJAKAAALQAAAOgTAeIgeAqQAWAUAOAWQAVAeAAATQAAAghiAAIgxgBg");
	this.shape_2.setTransform(225.2183,-29.4097,1.2417,1.2417);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5DC6CF").s().p("AgKB4QgHgNgGhPQgFhIAAgYQAAgeAKgVIAKAAQAYAAAHATQAHASgCBGIAABEIAAAiQAAALgDAFQgBADgKALg");
	this.shape_3.setTransform(204.8416,-29.565,1.2417,1.2417);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5DC6CF").s().p("AiDB5QAAgQA2gVQA9gXAKgNQgRgVgpg4QguhBAAgNIgBgIIgBgJQAAgIAGgDQAFgDALADQAYAABfCaQAKgMAahMQAYhEANAAQAeAAAAAJQAAArgeBDQgiBJgoAfQgaAUg0ARQgrAPgNAAQgZAAAAgRg");
	this.shape_4.setTransform(168.0712,-27.361,1.2417,1.2417);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5DC6CF").s().p("AgjCVQgJgIABgJQAAgCAog3QArg8AJggQAFgTh4AAQgiAAAAgSQAAgQAMgjQAIggAJgSIAWAAQANAAAIAFIACAnQAAAMgEAPIAnABQAnAAATAGQAhAKABAcQgBAhgsBOQgvBUgbAAQgJAAgIgHg");
	this.shape_5.setTransform(136.2849,-33.9418,1.2417,1.2417);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5DC6CF").s().p("AA/BqIgBgNQAAgIADgYQAEgWAAgKQAAhfhhAAQgKAAgTAFQgTAEgKAAQgMAAgIgHQgJgHAAgLQAAglA9AAQBXAAAjAVQAwAcAABRQAABtghAAQgSAAgCgOgAhnBmQgHgOAAgPQAAgRAIgWQALgbANAAQADAAAIAPQAIAQAAAEQAAAagEATQgGAhgOAAQgMAAgIgSg");
	this.shape_6.setTransform(94.4722,-29.5339,1.2417,1.2417);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5DC6CF").s().p("AABBGIgJAAQgTgVAAg/QAAghAFgSIANgFIAUAAQAIAAAEAXQAEASAAAMIABAqQgBAZgGARQgDADgGAAIgFABIgGgBg");
	this.shape_7.setTransform(72.2466,-35.6956,1.2417,1.2417);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5DC6CF").s().p("AAMAqIAAgyQABgYgCgaQgDgFghAAIhGACQgTAAgFgCQgJgDgCgKIgBgTIAAgLQACgFAFgFQAHgCAMgBIArABIBhgBQA2gBARACIARACQAJAFAAAUQAAAUgQAFQgGACgXAAQgRAAgCAJQgEAOAAAnIAAApQAABQgXACIgCAAQgZAAgChPg");
	this.shape_8.setTransform(47.9413,-29.6302,1.2417,1.2417);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5DC6CF").s().p("AABBGIgJAAQgTgVAAg/QAAghAFgSIANgFIAUAAQAIAAAEAXQAEASAAAMIABAqQgBAZgGARQgDADgGAAIgFABIgGgBg");
	this.shape_9.setTransform(25.188,-35.6956,1.2417,1.2417);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5DC6CF").s().p("ABvBpQgHgPAAgIIAChjQAAgphOABIgRAAQgyAAgBAVQABAbgDAzQgGApgFAOQgHARgMADQgJADgdAAQgdAAgLgaQgEgLAAgJQAAgPATAAIAdACQAaABgCgwQgBgcADgoIAEgeQACgIAHgJQAHgLAGABIAjgFIAYgDQA4AAAeANQBAAcAABTQAAAggHAjQgIAwgQAAQgFAAgIgPg");
	this.shape_10.setTransform(-1.8801,-29.565,1.2417,1.2417);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5DC6CF").s().p("Ag7B2QgYAAgRgLQgTgMgBgYQAAgJAWAAQARAAAeAHQAhAGANABQBNAAAAhDQAAgWgGgTQgFgTgxgGIhWgHQgtgGAAgXQAAgTAagEQAIgBAiAAQBPAAAnAXQA2AdgBBJQABBAgvAaQgjAUhEAAg");
	this.shape_11.setTransform(-50.8943,-29.3166,1.2417,1.2417);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5DC6CF").s().p("AANAqIgBgyQABgRgBghQgEgFghAAIhFACQgUAAgFgCQgJgDgCgKIgBgTIAAgLQABgFAHgFQAGgCAMgBIArABIBhgBQA2gBARACIAQACQAKAFAAAUQAAAUgQAFQgFACgYAAQgRAAgCAJQgEAOAAAnIAAApQAABQgXACIgCAAQgZAAgBhPg");
	this.shape_12.setTransform(-85.2261,-29.6302,1.2417,1.2417);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5DC6CF").s().p("AABBGIgJAAQgTgVAAg/QAAghAFgSIANgFIAUAAQAIAAAEAXQAEASAAAMIABAqQgBAZgGARQgDADgGAAIgFABIgGgBg");
	this.shape_13.setTransform(-107.9794,-35.6956,1.2417,1.2417);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5DC6CF").s().p("AgjCVQgJgIAAgJQAAgCApg3QAqg7ALghQAFgTh5AAQghAAAAgSQAAgPAKgkQAJghAJgRIAWAAQAOAAAHAFIACAnQAAAPgEAMIAnABQAnAAASAGQAiAKAAAcQAAAhgtBOQguBUgbAAQgJAAgIgHg");
	this.shape_14.setTransform(-140.3244,-33.9418,1.2417,1.2417);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5DC6CF").s().p("AA/BqIgBgNQAAgKAEgWQADgYAAgIQAAhfhhAAQgKAAgTAFQgTAEgKAAQgLAAgJgHQgJgHAAgLQAAglA9AAQBXAAAjAVQAwAcAABRQAABtghAAQgRAAgDgOgAhnBmQgHgPAAgOQAAgPAIgYQALgbANAAQADAAAIAPQAIAQAAAEQAAAagEATQgGAhgOAAQgLAAgJgSg");
	this.shape_15.setTransform(-170.1862,-29.5339,1.2417,1.2417);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5DC6CF").s().p("AAlBXIgegrQgPAHgZAjQgVAigIgBQgeABABgXQAAgZAbggQATgXAcgWQgMgSgMgcQgQgiAAgNQAAgKAGgHQADgCAKgBQAIAAADADQAqBAAnBGQAmBIAAAMQAAARgUgBQgLAAgYggg");
	this.shape_16.setTransform(-199.0236,-29.5029,1.2417,1.2417);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5DC6CF").s().p("ABHBxQgKgJAAgPIABgtIABhGQAAgoglAAIhoAAQgjAAAAgbQAAgKAFgLQADgHAnAAIApABIAoABQAmAAARADQAXAHAKATQALAXAAAvQAABIgBAUQgDAygNAAQgRAAgJgJg");
	this.shape_17.setTransform(-227.3643,-29.8133,1.2417,1.2417);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5DC6CF").s().p("AABBGIgJAAQgTgVAAg/QAAghAFgSIANgFIAUAAQAIAAAEAXQAEASAAAMIABAqQgBAZgGARQgDADgGAAIgFABIgGgBg");
	this.shape_18.setTransform(-247.7275,-35.6956,1.2417,1.2417);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5DC6CF").s().p("AgjCVQgIgIAAgJQAAgCAog3QArg8AJggQAGgTh5AAQgiAAABgSQAAgNALgmQAIggAJgSIAWAAQAOAAAHAFIACAnQAAAMgEAPIAnABQAnAAASAGQAjAKAAAcQgBAhgsBOQgvBUgbAAQgJAAgIgHg");
	this.shape_19.setTransform(-268.1216,-33.9418,1.2417,1.2417);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5DC6CF").s().p("AgZBcQAAgXAaAAQAZAAAAAZQAAAHgIAJQgGAJgJAAQgcAAAAgbgAAAAvQgZgHAAg1IAAg+IAEgfQACgMATAAQAGAAAIAGQAGAFABAJQAEAwgEBQQAAAIgHAFQgGAEgFAAIgDAAg");
	this.shape_20.setTransform(-347.0908,-101.5498,1.2417,1.2417);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#5DC6CF").s().p("AhmB4QgkgBAAgTQAAgiA3AAQCAAAADgBQAGgDAAgJIADhAQAAgYgGgHQgQgYhDAAIgrABIgiABIgbgIQgDgOAAgIQAAgLAGgGQAFgFAPAAQALgCAngBQBHAAAQACQBGAGADAVQADALAAATIgCAqIgCAoIgBAhQAAAJACABQABAAAYAFQARAEAAALIAAAVQAAAGgSAFQgOACgIABg");
	this.shape_21.setTransform(332.9628,-101.3946,1.2417,1.2417);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#5DC6CF").s().p("ABHBxQgKgJAAgOIACh0QAAgpglAAIhoAAQgjAAABgbQAAgJAEgLQADgHAnAAIBRACQAqAAANAEQAXAGAKAUQALAVAAAwQgBBSAAALQgDAxgOAAQgPAAgKgJg");
	this.shape_22.setTransform(298.6311,-101.705,1.2417,1.2417);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5DC6CF").s().p("AgKB4QgGgLgHhRQgFhAAAghQAAgfAKgTIAKAAQAYAAAHATQAHAUgCBEQgBAlABAfIAAAiQAAALgDAFQgDAFgJAJg");
	this.shape_23.setTransform(278.1603,-101.4256,1.2417,1.2417);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5DC6CF").s().p("Ag7B2QgYAAgRgLQgUgMAAgYQAAgJAWAAQANAAAiAHQAeAGAQAAQBNAAAAhCQAAgXgGgSQgGgUgwgFIhWgGQgtgHAAgXQAAgTAagEQAFgBAlAAQBOAAAoAXQA1AeAABIQAAA/guAbQgkAUhDAAg");
	this.shape_24.setTransform(254.7387,-101.1773,1.2417,1.2417);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#5DC6CF").s().p("AgIBGQgTgWAAg9QAAgiAFgSIANgEIAUAAQAHAAAGAVQADARAAANIABArQgBAbgFAPQgEADgGAAg");
	this.shape_25.setTransform(233.3512,-107.5408,1.2417,1.2417);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#5DC6CF").s().p("AhkBuQgLgJAAgdIAAiUQAAgrAnAAIAfACIBPgCQA1AAAOAJQAHAFAAA7QAABtgDAQQgGAhgkAGQgLACh1AAQgdAAgKgKgAg9hAQgHAGAAASIgBAYIgBAWIABAtQAAAOAMAEQAYAIA0gEIAjgDQAJgCADgIQABgJAAgcIABgUIABgYQAAgvgZAAIhPgDQgSAAgIAHg");
	this.shape_26.setTransform(211.4981,-101.4877,1.2417,1.2417);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#5DC6CF").s().p("AA+BqIAAgNQAAgNADgTQAEgUAAgMQAAhfhhAAQgKABgTAEQgSAEgMAAQgLAAgJgHQgIgGAAgMQAAglA9AAQBWAAAkAVQAwAdAABQQAABtgiAAQgRAAgDgOgAhnBmQgHgPAAgNQAAgRAIgXQAKgbANAAQAEAAAIAPQAIAQAAAEQAAAXgEAWQgHAhgNAAQgMAAgIgSg");
	this.shape_27.setTransform(168.2265,-101.3946,1.2417,1.2417);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#5DC6CF").s().p("AhmB4QgkgBAAgTQAAgiA4AAQCAAAACgBQAFgCACgKIAAgkIABgcQAAgYgEgHQgRgYhEAAIgqABIghABIgbgIQgEgNAAgJQABgLAFgGQAFgFAPAAQALgCAngBQBGAAASACQBFAGAEAVQACALAAATIgFBzQAAAJACABIAZAFQARADAAAMIAAAVQABAGgTAFQgPACgHABg");
	this.shape_28.setTransform(132.0633,-101.3946,1.2417,1.2417);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#5DC6CF").s().p("AhmB4QgUgCADgqIAQg0QAQgwAAgDQAAgJgJgMQgCgGgSgbQgDgDAAgHQAAgJAGgOQALgFAIAAQAEAAACACIA3A+QAxA3AJAAIABgBQAFgFAXg7QAUg0ANgCQAdgCAAAdQAAANgGARIgWA1QgUAuABADIAbAZQAYAYAAALQgCAWgZgCQgPgBgGgGIhuhoIgDgBQgGAAgKAoQgNAzgEAHQgCAEgKAGQgIAEgFAAIgDAAg");
	this.shape_29.setTransform(96.8697,-101.4276,1.2417,1.2417);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#5DC6CF").s().p("AgIBGQgTgVAAg+QAAgiAFgSIANgEIAUAAQAIAAAEAVQAEAUAAAKIABArQgBAZgGARQgDADgGAAg");
	this.shape_30.setTransform(74.1091,-107.5408,1.2417,1.2417);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5DC6CF").s().p("AhlBuQgLgKABgcIAAiUQgBgrAnAAIAhACIBOgCQA2AAANAJQAHAFABA7QgBBqgDATQgHAigiAFQgMACh1AAQgdAAgLgKgAg9hAQgHAGAAASIAABbQAAAOALAEQAYAIA0gEIAigDQALgCACgIQABgHABgeIABgsQAAgvgZAAIhPgDQgTAAgHAHg");
	this.shape_31.setTransform(52.225,-101.4877,1.2417,1.2417);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5DC6CF").s().p("AgjCVQgIgIAAgJQAAgCAog3QAqg5ALgjQAFgTh5AAQghAAAAgRQAAgQAKgjQAJghAJgSQAEABASgBQAOAAAHAFIACAoQAAANgEAOIAnAAQAmAAAUAGQAhAJAAAeQAAAggtBOQguBUgbAAQgJAAgIgHg");
	this.shape_32.setTransform(10.8469,-105.8335,1.2417,1.2417);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#5DC6CF").s().p("AAKBzQgJgFAAgHQAAgHAagKIAxgTQAagOAAgOQAAgdgPgjQgSgpgXAAQggAAghApQgPAQgqBBQghAygTANQgQgFAAgfQAAgXAYggIAnguIgYgmQgQgYAAgPQAAgPARgJIAfAZQAQANAGAUQAKgKAbgWQAegYAIgBIANgBQA0AAAfA9QAZAwAAAtQAAAogoAZQgkAUgqAAQgIAAgJgFg");
	this.shape_33.setTransform(-22.5536,-101.3015,1.2417,1.2417);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5DC6CF").s().p("Ag5BTQgegfgTguIgXgvQgOgjAAgPQAAgIAJgJQAIgJAIAAQAQAAAFAMIAEAaQANAxAZApQAfA5AkABQAogBAdhJIAKhBQAIgyALAAQALAAAMAOQALAOAAANQAAA9gfA/QglBMg2ABQgpAAgmgngAgaAFQgIgMABgHQgBgFAUguQASgwAEgCQACgCAEAAQAMAAALAKQAKAKAAANQAAAMgaAtQgZAugJAAQgHAAgGgOg");
	this.shape_34.setTransform(-61.8209,-101.6429,1.2417,1.2417);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#5DC6CF").s().p("ABOBrQgEgUgDg9QgCgtgNgVQgUgbgzAAQgaAAgIABQgVAEgDAOQgBALgBA0QAAA1gBAMQgEAogTAAQgYAAAAhAIABh5QAAgkAMgKQAKgIAoAAQBpAAAnAkQAoAnAABtQAAAZgDALQgHATgSAAQgOAAgEgNg");
	this.shape_35.setTransform(-98.0772,-101.3946,1.2417,1.2417);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#5DC6CF").s().p("AhOCmQgLgFgCgCQgGgFAAgKIABhPQADhSAFgSQADgQAWAAQARAAgCArIgDB9QgDAmgNAIQgFADgDAAIgDAAgAAAAuQAAgHAUgTQARgPAHgOQALgbABgdQgBgPgQgNQgOgMgRgEQgdgIg5AAQgdAAABgWQAAgWA2gEIAoAAIAeABQArAAAYAbQAWAaABAtQAAAZgHAaQgGAVgdAhQggAjgVAAQgNAAAAgcg");
	this.shape_36.setTransform(-131.2293,-95.7942,1.2417,1.2417);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#5DC6CF").s().p("AA+BqIgBgNQAAgKAEgWQAEgUAAgMQAAhfhhAAQgKABgTAEQgSAEgMAAQgLAAgJgHQgHgGgBgMQAAglA9AAQBWAAAkAVQAwAcAABRQAABtgiAAQgRAAgDgOgAhnBmQgHgPAAgNQAAgRAJgXQAKgbAMAAQAEAAAIAPQAIAQgBAEQAAAagDATQgHAhgNAAQgMAAgIgSg");
	this.shape_37.setTransform(-175.4322,-101.3946,1.2417,1.2417);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#5DC6CF").s().p("AA/BqIgBgNQAAgIADgYQAEgXAAgJQAAhfhhAAQgKABgTAEQgRAEgMAAQgMAAgIgHQgJgGAAgMQAAglA9AAQBWAAAkAVQAwAdAABQQAABtghAAQgSAAgCgOgAhnBmQgHgPAAgNQAAgSAIgWQALgbANAAQADAAAIAPQAIAPAAAFQAAAbgEASQgGAhgOAAQgMAAgIgSg");
	this.shape_38.setTransform(-208.6775,-101.3946,1.2417,1.2417);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#5DC6CF").s().p("AAlBXIgfgrQgPAHgXAkQgWAggIAAQgeAAAAgWQAAgYAbghQAVgYAbgUQgKgRgOgdQgQgkAAgMQAAgKAGgGQADgDAJgBQAJgBACAEQApA8ApBKQAnBHAAAOQAAAPgVAAQgLAAgYggg");
	this.shape_39.setTransform(-237.5149,-101.376,1.2417,1.2417);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#5DC6CF").s().p("ABHBxQgKgJABgOIACh0QgBgpgkAAIhpAAQgiAAgBgbQAAgJAGgLQACgHAnAAIBRACQAqAAAOAEQAWAGAKAUQAKAVAAAwQAABSgBALQgCAxgNAAQgQAAgKgJg");
	this.shape_40.setTransform(-265.8866,-101.705,1.2417,1.2417);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#5DC6CF").s().p("AgjCVQgJgIAAgJQAAgCApg3QAqg7ALghQAFgTh5AAQghAAAAgRQAAgQAKgjQAJggAJgTQAEABASgBQAOAAAHAFIACAoQAAAOgEANIAnAAQAnAAASAGQAiAJAAAeQAAAggtBOQguBUgbAAQgJAAgIgHg");
	this.shape_41.setTransform(-295.2828,-105.8335,1.2417,1.2417);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#5DC6CF").s().p("AA/BqIgBgNQAAgKAEgWQADgYAAgIQAAhfhhAAQgKABgTAEQgRAEgMAAQgMAAgIgHQgJgGAAgMQAAglA9AAQBWAAAkAVQAwAcAABRQAABtghAAQgSAAgCgOgAhnBmQgHgPAAgNQAAgPAIgZQALgbANAAQADAAAIAPQAIAPAAAFQAAAagEATQgHAhgNAAQgMAAgIgSg");
	this.shape_42.setTransform(-325.1445,-101.3946,1.2417,1.2417);

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


(lib.confetti = function(mode,startPosition,loop,reversed) {
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
	this.frame_21 = function() {
		var con = new createjs.Sound.play("con");
	}
	this.frame_64 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(43).call(this.frame_64).wait(1));

	// Layer_1
	this.instance = new lib.Symbol25();
	this.instance.setTransform(94.7,906.5,1,1,0,0,0,94.7,91.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:121.2,y:883.3},0).wait(1).to({x:147.7,y:860.1},0).wait(1).to({x:174.2,y:836.9},0).wait(1).to({x:200.7,y:813.7},0).wait(1).to({x:227.2,y:790.55},0).wait(1).to({x:253.7,y:767.35},0).wait(1).to({x:280.2,y:744.15},0).wait(1).to({x:306.7,y:720.95},0).wait(1).to({x:333.2,y:697.8},0).wait(1).to({x:359.7,y:674.6},0).wait(1).to({x:386.2,y:651.4},0).wait(1).to({x:412.7,y:628.2},0).wait(1).to({x:439.2,y:605},0).wait(1).to({x:465.7,y:581.85},0).wait(1).to({x:492.2,y:558.65},0).wait(1).to({x:518.7,y:535.45},0).wait(1).to({x:545.2,y:512.25},0).wait(1).to({x:571.7,y:489.1},0).to({_off:true},1).wait(46));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8E8E9").s().p("AhoBmQh1hyhMiGIBGiUQBNCeCPCOQCRCQCgBMIiWBFQiGhLh2h2g");
	this.shape.setTransform(544.1,511.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E8E8E9").s().p("AiRCOQivithbjAIBWi3QAqBsBKBuQBMByBoBlQBnBnB0BOQBwBJBuApIi6BVQjDhaiwivg");
	this.shape_1.setTransform(572.175,483.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E8E8E9").s().p("AhJBIQhPhOg2hWIA1hwQA6BsBfBfQBjBhBsA5IhxA0Qhag4hNhNg");
	this.shape_2.setTransform(522.4,532.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E8E8E9").s().p("Ag1A0Qgwgvgmg1IAqhaQArBEA+A/QA+A8BGAsIhbAqQgzgkgzgzg");
	this.shape_3.setTransform(506,549.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E8E8E9").s().p("AglAmQgZgZgUgYIAhhHQAcAnAgAgQAhAgAnAdIhHAhQgXgTgagag");
	this.shape_4.setTransform(492.125,562.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ED3724").s().p("AsRMHQgOgPAJgTILM30QgUBFBbCVQBbCXCiChQCnCmCcBaQCaBbBBgdIACADI4JLJQgHADgGAAQgLAAgKgJg");
	this.shape_5.setTransform(558.1027,497.9071);

	this.instance_1 = new lib.Symbol26();
	this.instance_1.setTransform(558.85,496.55,1,1,0,0,0,80.2,79.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},18).to({state:[{t:this.instance_1}]},20).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(38).to({_off:false},0).wait(1).to({regX:80.3,x:541.55,y:513.75},0).wait(1).to({x:524.15,y:530.95},0).wait(1).to({x:506.75,y:548.15},0).wait(1).to({x:489.35,y:565.35},0).wait(1).to({x:471.95,y:582.55},0).wait(1).to({x:454.55,y:599.75},0).wait(1).to({x:437.15,y:616.95},0).wait(1).to({x:419.75,y:634.15},0).wait(1).to({x:402.35,y:651.35},0).wait(1).to({x:384.95,y:668.55},0).wait(1).to({x:367.55,y:685.75},0).wait(1).to({x:350.15,y:702.95},0).wait(1).to({x:332.75,y:720.15},0).wait(1).to({x:315.35,y:737.35},0).wait(1).to({x:297.95,y:754.55},0).wait(1).to({x:280.55,y:771.75},0).wait(1).to({x:263.15,y:788.95},0).wait(1).to({x:245.75,y:806.15},0).wait(1).to({x:228.35,y:823.35},0).wait(1).to({x:210.95,y:840.55},0).wait(1).to({x:193.55,y:857.75},0).wait(1).to({x:176.15,y:874.95},0).wait(1).to({x:158.75,y:892.15},0).wait(1).to({x:141.35,y:909.35},0).wait(1).to({x:123.95,y:926.55},0).wait(1).to({x:106.55,y:943.75},0).wait(1));

	// Layer_3
	this.instance_2 = new lib.Symbol13();
	this.instance_2.setTransform(583.45,506.2,1,1,0,0,0,75.3,14.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).wait(4).to({rotation:-0.7894,x:597.65,y:502.45},0).wait(1).to({rotation:-1.5788,x:611.85,y:498.75},0).wait(1).to({rotation:-2.3682,x:626.1,y:495},0).wait(1).to({rotation:-3.1577,x:640.3,y:491.25},0).wait(1).to({rotation:-3.9471,x:654.45,y:487.45},0).wait(1).to({rotation:-4.7365,x:668.7,y:483.75},0).wait(1).to({rotation:-5.5259,x:682.9,y:480.05},0).wait(1).to({rotation:-6.3153,x:697.15,y:476.25},0).wait(1).to({rotation:-7.1047,x:711.3,y:472.55},0).wait(1).to({rotation:-7.8942,x:725.55,y:468.8},0).wait(1).to({rotation:-8.6836,x:739.75,y:465.1},0).wait(1).to({rotation:-9.473,x:753.9,y:461.3},0).wait(1).to({rotation:-10.2624,x:768.15,y:457.6},0).wait(1).to({rotation:-11.0518,x:782.35,y:453.85},0).wait(1).to({rotation:-11.8412,x:796.6,y:450.15},0).wait(1).to({rotation:-12.6307,x:810.8,y:446.4},0).wait(1).to({rotation:-13.4201,x:825,y:442.6},0).wait(1).to({rotation:-14.2095,x:839.25,y:438.9},0).wait(1).to({rotation:-14.9989,x:853.45,y:435.15},0).wait(1).to({rotation:-14.3739,x:858.45,y:452.75},0).wait(1).to({rotation:-13.749,x:863.55,y:470.35},0).wait(1).to({rotation:-13.124,x:868.6,y:487.9},0).wait(1).to({rotation:-12.4991,x:873.65,y:505.5},0).wait(1).to({rotation:-11.8741,x:878.75,y:523.1},0).wait(1).to({rotation:-11.2492,x:883.8,y:540.7},0).wait(1).to({rotation:-10.6242,x:888.85,y:558.3},0).wait(1).to({rotation:-9.9993,x:893.9,y:575.95},0).wait(1).to({rotation:-9.3743,x:899,y:593.5},0).wait(1).to({rotation:-8.7494,x:904.05,y:611.1},0).wait(1).to({rotation:-8.1244,x:909.15,y:628.65},0).wait(1).to({rotation:-7.4994,x:914.2,y:646.25},0).wait(1).to({rotation:-6.8745,x:919.2,y:663.85},0).wait(1).to({rotation:-6.2495,x:924.3,y:681.4},0).wait(1).to({rotation:-5.6246,x:929.35,y:699},0).wait(1).to({rotation:-4.9996,x:934.4,y:716.65},0).wait(1).to({rotation:-4.3747,x:939.5,y:734.2},0).wait(1).to({rotation:-3.7497,x:944.55,y:751.8},0).wait(1).to({rotation:-3.1248,x:949.65,y:769.4},0).wait(1).to({rotation:-2.4998,x:954.7,y:786.95},0).wait(1).to({rotation:-1.8749,x:959.7,y:804.6},0).wait(1).to({rotation:-1.2499,x:964.8,y:822.15},0).wait(1).to({rotation:-0.625,x:969.85,y:839.75},0).wait(1).to({rotation:0,x:974.95,y:857.35},0).wait(1));

	// Layer_4
	this.instance_3 = new lib.Symbol14();
	this.instance_3.setTransform(562.4,462.8,1,1,0,0,0,16.1,69.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).wait(1).to({regX:16.2,rotation:1.6304,x:564.1,y:454.15},0).wait(1).to({rotation:3.2608,x:565.65,y:445.6},0).wait(1).to({rotation:4.8913,x:567.3,y:437.05},0).wait(1).to({rotation:6.5217,x:568.9,y:428.45},0).wait(1).to({rotation:8.1521,x:570.5,y:419.85},0).wait(1).to({rotation:9.7825,x:572.05,y:411.25},0).wait(1).to({rotation:11.413,x:573.7,y:402.65},0).wait(1).to({rotation:13.0434,x:575.3,y:394.05},0).wait(1).to({rotation:14.6738,x:576.85,y:385.5},0).wait(1).to({rotation:16.3042,x:578.45,y:376.9},0).wait(1).to({rotation:17.9347,x:580.05,y:368.35},0).wait(1).to({rotation:19.5651,x:581.7,y:359.7},0).wait(1).to({rotation:21.1955,x:583.3,y:351.1},0).wait(1).to({rotation:22.8259,x:584.9,y:342.6},0).wait(1).to({rotation:24.4564,x:586.45,y:333.95},0).wait(1).to({rotation:26.0868,x:588.05,y:325.35},0).wait(1).to({rotation:27.7172,x:589.65,y:316.8},0).wait(1).to({rotation:29.3476,x:591.25,y:308.2},0).wait(1).to({rotation:30.9781,x:592.9,y:299.65},0).wait(1).to({rotation:32.6085,x:594.45,y:291.05},0).wait(1).to({rotation:34.2389,x:596.05,y:282.4},0).wait(1).to({rotation:35.8693,x:597.7,y:273.85},0).wait(1).to({rotation:37.4998,x:599.25,y:265.25},0).wait(1).to({rotation:39.1302,x:600.85,y:256.65},0).wait(1).to({rotation:40.7606,x:602.4,y:248.1},0).wait(1).to({rotation:42.391,x:613.15,y:276.25},0).wait(1).to({rotation:44.0214,x:623.9,y:304.45},0).wait(1).to({rotation:45.6519,x:634.6,y:332.7},0).wait(1).to({rotation:47.2823,x:645.35,y:360.9},0).wait(1).to({rotation:48.9127,x:656.05,y:389.15},0).wait(1).to({rotation:50.5431,x:666.75,y:417.35},0).wait(1).to({rotation:52.1736,x:677.5,y:445.55},0).wait(1).to({rotation:53.804,x:688.2,y:473.7},0).wait(1).to({rotation:55.4344,x:698.9,y:501.95},0).wait(1).to({rotation:57.0648,x:709.6,y:530.15},0).wait(1).to({rotation:58.6953,x:720.35,y:558.4},0).wait(1).to({rotation:60.3257,x:731.1,y:586.6},0).wait(1).to({rotation:61.9561,x:741.8,y:614.8},0).wait(1).to({rotation:63.5865,x:752.5,y:643},0).wait(1).to({rotation:65.217,x:763.2,y:671.2},0).wait(1).to({rotation:66.8474,x:773.9,y:699.45},0).wait(1).to({rotation:68.4778,x:784.7,y:727.65},0).wait(1).to({rotation:70.1082,x:795.4,y:755.9},0).wait(1).to({rotation:71.7387,x:806.15,y:784.1},0).wait(1).to({rotation:73.3691,x:816.85,y:812.25},0).wait(1).to({rotation:74.9995,x:827.55,y:840.5},0).wait(1));

	// Layer_5
	this.instance_4 = new lib.Symbol22();
	this.instance_4.setTransform(589.85,466.95,1,1,0,0,0,54.8,29.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).wait(1).to({regY:29.5,rotation:-1.0971,x:593.15,y:462.25},0).wait(1).to({rotation:-2.1941,x:596.45,y:457.5},0).wait(1).to({rotation:-3.2912,x:599.8,y:452.7},0).wait(1).to({rotation:-4.3882,x:603.1,y:447.95},0).wait(1).to({rotation:-5.4853,x:606.4,y:443.15},0).wait(1).to({rotation:-6.5823,x:609.75,y:438.4},0).wait(1).to({rotation:-7.6794,x:613.05,y:433.7},0).wait(1).to({rotation:-8.7764,x:616.35,y:428.9},0).wait(1).to({rotation:-9.8735,x:619.7,y:424.1},0).wait(1).to({rotation:-10.9705,x:623,y:419.3},0).wait(1).to({rotation:-12.0676,x:626.3,y:414.6},0).wait(1).to({rotation:-13.1647,x:629.6,y:409.75},0).wait(1).to({rotation:-14.2617,x:632.95,y:405.05},0).wait(1).to({rotation:-15.3588,x:636.3,y:400.3},0).wait(1).to({rotation:-16.4558,x:639.6,y:395.55},0).wait(1).to({rotation:-17.5529,x:642.9,y:390.75},0).wait(1).to({rotation:-18.6499,x:646.25,y:386},0).wait(1).to({rotation:-19.747,x:649.55,y:381.2},0).wait(1).to({rotation:-20.844,x:652.85,y:376.4},0).wait(1).to({rotation:-21.9411,x:656.2,y:371.65},0).wait(1).to({rotation:-20.7873,x:665.4,y:390.25},0).wait(1).to({rotation:-19.6334,x:674.55,y:408.85},0).wait(1).to({rotation:-18.4796,x:683.75,y:427.45},0).wait(1).to({rotation:-17.3257,x:692.95,y:446},0).wait(1).to({rotation:-16.1719,x:702.15,y:464.6},0).wait(1).to({rotation:-15.0181,x:711.4,y:483.15},0).wait(1).to({rotation:-13.8642,x:720.5,y:501.75},0).wait(1).to({rotation:-12.7104,x:729.75,y:520.35},0).wait(1).to({rotation:-11.5565,x:738.95,y:538.9},0).wait(1).to({rotation:-10.4027,x:748.15,y:557.45},0).wait(1).to({rotation:-9.2489,x:757.35,y:576.05},0).wait(1).to({rotation:-8.095,x:766.5,y:594.65},0).wait(1).to({rotation:-6.9412,x:775.7,y:613.25},0).wait(1).to({rotation:-5.7873,x:784.85,y:631.8},0).wait(1).to({rotation:-4.6335,x:794.1,y:650.35},0).wait(1).to({rotation:-3.4797,x:803.3,y:668.95},0).wait(1).to({rotation:-2.3258,x:812.5,y:687.6},0).wait(1).to({rotation:-1.172,x:821.7,y:706.15},0).wait(1).to({rotation:-0.0181,x:830.85,y:724.75},0).wait(1).to({rotation:1.1357,x:840.05,y:743.3},0).wait(1).to({rotation:2.2895,x:849.2,y:761.9},0).wait(1).to({rotation:3.4434,x:858.45,y:780.45},0).wait(1).to({rotation:4.5972,x:867.65,y:799.05},0).wait(1).to({rotation:5.7511,x:876.8,y:817.6},0).wait(1).to({rotation:6.9049,x:886,y:836.2},0).wait(1).to({rotation:8.0587,x:895.2,y:854.8},0).wait(1));

	// Layer_6
	this.instance_5 = new lib.Symbol23();
	this.instance_5.setTransform(561.45,481.8,1,1,0,0,0,56.1,55.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(18).to({_off:false},0).wait(5).to({rotation:1.0714,x:570.15,y:469.8},0).wait(1).to({rotation:2.1428,x:578.9,y:457.85},0).wait(1).to({rotation:3.2143,x:587.6,y:445.85},0).wait(1).to({rotation:4.2857,x:596.3,y:433.9},0).wait(1).to({rotation:5.3571,x:605.05,y:421.95},0).wait(1).to({rotation:6.4285,x:613.75,y:409.95},0).wait(1).to({rotation:7.4999,x:622.5,y:398},0).wait(1).to({rotation:8.5714,x:631.15,y:386},0).wait(1).to({rotation:9.6428,x:639.95,y:374.05},0).wait(1).to({rotation:10.7142,x:648.6,y:362.1},0).wait(1).to({rotation:11.7856,x:657.35,y:350.1},0).wait(1).to({rotation:12.857,x:666.1,y:338.15},0).wait(1).to({rotation:13.9284,x:674.85,y:326.15},0).wait(1).to({rotation:14.9999,x:683.55,y:314.15},0).wait(1).to({rotation:16.0713,x:692.25,y:302.25},0).wait(1).to({rotation:17.1427,x:701,y:290.3},0).wait(1).to({rotation:18.2141,x:709.7,y:278.3},0).wait(1).to({rotation:19.2855,x:718.45,y:266.35},0).wait(1).to({rotation:20.357,x:727.15,y:254.35},0).wait(1).to({rotation:21.4284,x:735.85,y:242.4},0).wait(1).to({rotation:22.4998,x:741.55,y:269.35},0).wait(1).to({rotation:23.5712,x:747.1,y:296.4},0).wait(1).to({rotation:24.6426,x:752.75,y:323.35},0).wait(1).to({rotation:25.7141,x:758.35,y:350.35},0).wait(1).to({rotation:26.7855,x:764.05,y:377.35},0).wait(1).to({rotation:27.8569,x:769.6,y:404.35},0).wait(1).to({rotation:28.9283,x:775.25,y:431.35},0).wait(1).to({rotation:29.9997,x:780.85,y:458.35},0).wait(1).to({rotation:31.0712,x:786.45,y:485.3},0).wait(1).to({rotation:32.1426,x:792.1,y:512.3},0).wait(1).to({rotation:33.214,x:797.75,y:539.35},0).wait(1).to({rotation:34.2854,x:803.35,y:566.35},0).wait(1).to({rotation:35.3568,x:808.95,y:593.3},0).wait(1).to({rotation:36.4282,x:814.6,y:620.3},0).wait(1).to({rotation:37.4997,x:820.2,y:647.3},0).wait(1).to({rotation:38.5711,x:825.8,y:674.35},0).wait(1).to({rotation:39.6425,x:831.45,y:701.3},0).wait(1).to({rotation:40.7139,x:837.1,y:728.3},0).wait(1).to({rotation:41.7853,x:842.7,y:755.3},0).wait(1).to({rotation:42.8568,x:848.3,y:782.3},0).wait(1).to({rotation:43.9282,x:853.95,y:809.3},0).wait(1).to({rotation:44.9996,x:859.55,y:836.25},0).wait(1));

	// Layer_7
	this.instance_6 = new lib.Symbol16();
	this.instance_6.setTransform(578.05,474.35,1,1,0,0,0,26.2,37);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).wait(1).to({regX:26.3,regY:36.9,rotation:1.1672,x:586.1,y:467.1},0).wait(1).to({rotation:2.3343,x:594.1,y:459.85},0).wait(1).to({rotation:3.5015,x:602,y:452.75},0).wait(1).to({rotation:4.6686,x:610,y:445.6},0).wait(1).to({rotation:5.8358,x:617.95,y:438.4},0).wait(1).to({rotation:7.0029,x:625.9,y:431.2},0).wait(1).to({rotation:8.1701,x:633.9,y:424.1},0).wait(1).to({rotation:9.3373,x:641.85,y:416.9},0).wait(1).to({rotation:10.5044,x:649.8,y:409.8},0).wait(1).to({rotation:11.6716,x:657.8,y:402.6},0).wait(1).to({rotation:12.8387,x:665.75,y:395.45},0).wait(1).to({rotation:14.0059,x:673.65,y:388.25},0).wait(1).to({rotation:15.173,x:681.7,y:381.1},0).wait(1).to({rotation:16.3402,x:689.65,y:373.95},0).wait(1).to({rotation:17.5073,x:697.6,y:366.8},0).wait(1).to({rotation:18.6745,x:705.55,y:359.6},0).wait(1).to({rotation:19.8417,x:713.55,y:352.45},0).wait(1).to({rotation:21.0088,x:721.45,y:345.3},0).wait(1).to({rotation:22.176,x:729.45,y:338.15},0).wait(1).to({rotation:23.3431,x:737.45,y:330.95},0).wait(1).to({rotation:24.5103,x:745.4,y:323.75},0).wait(1).to({rotation:25.6774,x:753.35,y:316.65},0).wait(1).to({rotation:26.8446,x:761.3,y:309.5},0).wait(1).to({rotation:28.0118,x:769.25,y:302.35},0).wait(1).to({rotation:29.1789,x:777.2,y:295.1},0).wait(1).to({rotation:30.3461,x:780.05,y:320.2},0).wait(1).to({rotation:31.5132,x:782.85,y:345.25},0).wait(1).to({rotation:32.6804,x:785.75,y:370.25},0).wait(1).to({rotation:33.8475,x:788.5,y:395.3},0).wait(1).to({rotation:35.0147,x:791.35,y:420.35},0).wait(1).to({rotation:36.1819,x:794.15,y:445.45},0).wait(1).to({rotation:37.349,x:796.95,y:470.45},0).wait(1).to({rotation:38.5162,x:799.8,y:495.45},0).wait(1).to({rotation:39.6833,x:802.6,y:520.5},0).wait(1).to({rotation:40.8505,x:805.4,y:545.55},0).wait(1).to({rotation:42.0176,x:808.25,y:570.55},0).wait(1).to({rotation:43.1848,x:811.05,y:595.65},0).wait(1).to({rotation:44.3519,x:813.85,y:620.7},0).wait(1).to({rotation:45.5191,x:816.7,y:645.7},0).wait(1).to({rotation:46.6863,x:819.5,y:670.75},0).wait(1).to({rotation:47.8534,x:822.3,y:695.8},0).wait(1).to({rotation:49.0206,x:825.15,y:720.8},0).wait(1).to({rotation:50.1877,x:827.95,y:745.9},0).wait(1).to({rotation:51.3549,x:830.75,y:770.9},0).wait(1).to({rotation:52.522,x:833.55,y:795.9},0).wait(1).to({rotation:53.6892,x:836.35,y:821},0).wait(1));

	// Layer_8
	this.instance_7 = new lib.Symbol15();
	this.instance_7.setTransform(580.8,492.85,1,1,0,0,0,79.2,36.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(18).to({_off:false},0).wait(1).to({rotation:0.3261,x:592.65,y:485.85},0).wait(1).to({rotation:0.6521,x:604.55,y:478.9},0).wait(1).to({rotation:0.9782,x:616.45,y:471.95},0).wait(1).to({rotation:1.3043,x:628.3,y:465},0).wait(1).to({rotation:1.6303,x:640.2,y:458},0).wait(1).to({rotation:1.9564,x:652.1,y:451.05},0).wait(1).to({rotation:2.2824,x:664,y:444.05},0).wait(1).to({rotation:2.6085,x:675.85,y:437.1},0).wait(1).to({rotation:2.9346,x:687.75,y:430.15},0).wait(1).to({rotation:3.2606,x:699.6,y:423.2},0).wait(1).to({rotation:3.5867,x:711.5,y:416.25},0).wait(1).to({rotation:3.9128,x:723.4,y:409.25},0).wait(1).to({rotation:4.2388,x:735.3,y:402.3},0).wait(1).to({rotation:4.5649,x:747.2,y:395.35},0).wait(1).to({rotation:4.8909,x:759.05,y:388.35},0).wait(1).to({rotation:5.217,x:770.95,y:381.4},0).wait(1).to({rotation:5.5431,x:782.85,y:374.45},0).wait(1).to({rotation:5.8691,x:794.7,y:367.45},0).wait(1).to({rotation:6.1952,x:806.6,y:360.55},0).wait(1).to({rotation:6.5213,x:818.5,y:353.55},0).wait(1).to({rotation:6.8473,x:830.4,y:346.6},0).wait(1).to({rotation:7.1734,x:842.3,y:339.6},0).wait(1).to({rotation:7.4995,x:854.15,y:332.7},0).wait(1).to({rotation:7.8255,x:866.05,y:325.7},0).wait(1).to({rotation:8.1516,x:877.9,y:318.75},0).wait(1).to({rotation:8.4776,x:878.95,y:343.7},0).wait(1).to({rotation:8.8037,x:879.95,y:368.6},0).wait(1).to({rotation:9.1298,x:881,y:393.6},0).wait(1).to({rotation:9.4558,x:882.05,y:418.55},0).wait(1).to({rotation:9.7819,x:883.1,y:443.5},0).wait(1).to({rotation:10.108,x:884.1,y:468.5},0).wait(1).to({rotation:10.434,x:885.2,y:493.45},0).wait(1).to({rotation:10.7601,x:886.2,y:518.45},0).wait(1).to({rotation:11.0861,x:887.2,y:543.4},0).wait(1).to({rotation:11.4122,x:888.3,y:568.35},0).wait(1).to({rotation:11.7383,x:889.25,y:593.3},0).wait(1).to({rotation:12.0643,x:890.3,y:618.25},0).wait(1).to({rotation:12.3904,x:891.35,y:643.25},0).wait(1).to({rotation:12.7165,x:892.35,y:668.2},0).wait(1).to({rotation:13.0425,x:893.4,y:693.1},0).wait(1).to({rotation:13.3686,x:894.45,y:718.1},0).wait(1).to({rotation:13.6946,x:895.5,y:743.05},0).wait(1).to({rotation:14.0207,x:896.55,y:768.05},0).wait(1).to({rotation:14.3468,x:897.55,y:792.95},0).wait(1).to({rotation:14.6728,x:898.55,y:817.95},0).wait(1).to({rotation:14.9989,x:899.6,y:842.9},0).wait(1));

	// Layer_9
	this.instance_8 = new lib.Symbol17();
	this.instance_8.setTransform(541.7,483.6,1,1,0,0,0,21.1,40.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(18).to({_off:false},0).wait(5).to({rotation:1.4286,x:547.85,y:472.8},0).wait(1).to({rotation:2.8571,x:553.9,y:461.95},0).wait(1).to({rotation:4.2857,x:560.05,y:451.2},0).wait(1).to({rotation:5.7142,x:566.2,y:440.35},0).wait(1).to({rotation:7.1428,x:572.35,y:429.55},0).wait(1).to({rotation:8.5714,x:578.4,y:418.75},0).wait(1).to({rotation:9.9999,x:584.55,y:407.95},0).wait(1).to({rotation:11.4285,x:590.7,y:397.2},0).wait(1).to({rotation:12.857,x:596.8,y:386.4},0).wait(1).to({rotation:14.2856,x:602.95,y:375.55},0).wait(1).to({rotation:15.7142,x:609.05,y:364.7},0).wait(1).to({rotation:17.1427,x:615.15,y:353.95},0).wait(1).to({rotation:18.5713,x:621.35,y:343.15},0).wait(1).to({rotation:19.9998,x:627.5,y:332.35},0).wait(1).to({rotation:21.4284,x:633.6,y:321.55},0).wait(1).to({rotation:22.857,x:639.7,y:310.75},0).wait(1).to({rotation:24.2855,x:645.85,y:299.95},0).wait(1).to({rotation:25.7141,x:651.95,y:289.1},0).wait(1).to({rotation:27.1426,x:656.85,y:314.4},0).wait(1).to({rotation:28.5712,x:661.65,y:339.7},0).wait(1).to({rotation:29.9998,x:666.45,y:364.95},0).wait(1).to({rotation:31.4283,x:671.3,y:390.2},0).wait(1).to({rotation:32.8569,x:676.05,y:415.5},0).wait(1).to({rotation:34.2854,x:680.95,y:440.8},0).wait(1).to({rotation:35.714,x:685.8,y:466.05},0).wait(1).to({rotation:37.1425,x:690.55,y:491.35},0).wait(1).to({rotation:38.5711,x:695.4,y:516.6},0).wait(1).to({rotation:39.9997,x:700.2,y:541.9},0).wait(1).to({rotation:41.4282,x:705.05,y:567.15},0).wait(1).to({rotation:42.8568,x:709.9,y:592.45},0).wait(1).to({rotation:44.2853,x:714.7,y:617.75},0).wait(1).to({rotation:45.7139,x:719.6,y:643},0).wait(1).to({rotation:47.1425,x:724.4,y:668.25},0).wait(1).to({rotation:48.571,x:729.2,y:693.55},0).wait(1).to({rotation:49.9996,x:734.05,y:718.85},0).wait(1).to({rotation:51.4281,x:738.85,y:744.15},0).wait(1).to({rotation:52.8567,x:743.7,y:769.4},0).wait(1).to({rotation:54.2853,x:748.5,y:794.65},0).wait(1).to({rotation:55.7138,x:753.35,y:820},0).wait(1).to({rotation:57.1424,x:758.2,y:845.2},0).wait(1).to({rotation:58.5709,x:763,y:870.45},0).wait(1).to({rotation:59.9995,x:767.8,y:895.75},0).wait(1));

	// Layer_10
	this.instance_9 = new lib.Symbol18();
	this.instance_9.setTransform(621.8,487.2,1,1,0,0,0,30.9,12.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(18).to({_off:false},0).wait(1).to({regX:31,rotation:-0.6,x:625.55,y:485.85},0).wait(1).to({rotation:-1.1999,x:629.2,y:484.45},0).wait(1).to({rotation:-1.7999,x:632.9,y:483.1},0).wait(1).to({rotation:-2.3998,x:636.55,y:481.7},0).wait(1).to({rotation:-2.9998,x:640.2,y:480.4},0).wait(1).to({rotation:-3.5997,x:643.9,y:478.95},0).wait(1).to({rotation:-4.1997,x:647.55,y:477.6},0).wait(1).to({rotation:-4.7996,x:651.25,y:476.25},0).wait(1).to({rotation:-5.3996,x:654.9,y:474.9},0).wait(1).to({rotation:-5.9996,x:658.6,y:473.5},0).wait(1).to({rotation:-6.5995,x:662.25,y:472.15},0).wait(1).to({rotation:-7.1995,x:665.9,y:470.75},0).wait(1).to({rotation:-7.7994,x:669.6,y:469.45},0).wait(1).to({rotation:-8.3994,x:673.25,y:468},0).wait(1).to({rotation:-8.9993,x:676.95,y:466.7},0).wait(1).to({rotation:-9.5993,x:680.6,y:465.3},0).wait(1).to({rotation:-10.1993,x:684.25,y:463.95},0).wait(1).to({rotation:-10.7992,x:687.95,y:462.55},0).wait(1).to({rotation:-11.3992,x:691.65,y:461.2},0).wait(1).to({rotation:-11.9991,x:695.25,y:459.8},0).wait(1).to({rotation:-12.5991,x:699,y:458.5},0).wait(1).to({rotation:-13.199,x:702.65,y:457.1},0).wait(1).to({rotation:-13.799,x:706.3,y:455.75},0).wait(1).to({rotation:-14.3989,x:710.05,y:454.4},0).wait(1).to({rotation:-14.9989,x:713.65,y:453},0).wait(1).to({y:478.1},0).wait(1).to({y:503.2},0).wait(1).to({y:528.3},0).wait(1).to({y:553.4},0).wait(1).to({y:578.5},0).wait(1).to({y:603.6},0).wait(1).to({y:628.7},0).wait(1).to({y:653.8},0).wait(1).to({y:678.9},0).wait(1).to({y:704},0).wait(1).to({y:729.05},0).wait(1).to({y:754.15},0).wait(1).to({y:779.25},0).wait(1).to({y:804.35},0).wait(1).to({y:829.45},0).wait(1).to({y:854.55},0).wait(1).to({y:879.65},0).wait(1).to({y:904.75},0).wait(1).to({y:929.85},0).wait(1).to({y:954.95},0).wait(1).to({y:980},0).wait(1));

	// Layer_11
	this.instance_10 = new lib.Symbol19();
	this.instance_10.setTransform(593.35,463.4,1,1,0,0,0,28.2,16.3);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(18).to({_off:false},0).wait(1).to({rotation:0.9783,x:598.55,y:459.6},0).wait(1).to({rotation:1.9565,x:603.8,y:455.75},0).wait(1).to({rotation:2.9348,x:609,y:451.95},0).wait(1).to({rotation:3.913,x:614.3,y:448.1},0).wait(1).to({rotation:4.8913,x:619.5,y:444.35},0).wait(1).to({rotation:5.8695,x:624.75,y:440.5},0).wait(1).to({rotation:6.8478,x:630,y:436.7},0).wait(1).to({rotation:7.826,x:635.25,y:432.9},0).wait(1).to({rotation:8.8043,x:640.45,y:429.05},0).wait(1).to({rotation:9.7825,x:645.75,y:425.3},0).wait(1).to({rotation:10.7608,x:650.95,y:421.45},0).wait(1).to({rotation:11.739,x:656.2,y:417.65},0).wait(1).to({rotation:12.7173,x:661.4,y:413.85},0).wait(1).to({rotation:13.6955,x:666.65,y:410.1},0).wait(1).to({rotation:14.6738,x:671.9,y:406.2},0).wait(1).to({rotation:15.652,x:677.15,y:402.4},0).wait(1).to({rotation:16.6303,x:682.35,y:398.55},0).wait(1).to({rotation:17.6085,x:687.6,y:394.85},0).wait(1).to({rotation:18.5868,x:692.85,y:391},0).wait(1).to({rotation:19.565,x:698.05,y:387.2},0).wait(1).to({rotation:20.5433,x:703.35,y:383.35},0).wait(1).to({rotation:21.5215,x:703.3,y:401.35},0).wait(1).to({rotation:22.4998,y:419.35},0).wait(1).to({rotation:23.4781,y:437.35},0).wait(1).to({rotation:24.4563,y:455.3},0).wait(1).to({rotation:25.4346,y:473.25},0).wait(1).to({rotation:26.4128,y:491.25},0).wait(1).to({rotation:27.3911,x:703.35,y:509.2},0).wait(1).to({rotation:28.3693,x:703.3,y:527.2},0).wait(1).to({rotation:29.3476,x:703.35,y:545.15},0).wait(1).to({rotation:30.3258,x:703.3,y:563.15},0).wait(1).to({rotation:31.3041,x:703.35,y:581.2},0).wait(1).to({rotation:32.2823,y:599.15},0).wait(1).to({rotation:33.2606,y:617.1},0).wait(1).to({rotation:34.2388,y:635.1},0).wait(1).to({rotation:35.2171,y:653.05},0).wait(1).to({rotation:36.1953,x:703.3,y:671.05},0).wait(1).to({rotation:37.1736,y:689.05},0).wait(1).to({rotation:38.1518,x:703.35,y:707},0).wait(1).to({rotation:39.1301,y:725},0).wait(1).to({rotation:40.1083,x:703.3,y:742.95},0).wait(1).to({rotation:41.0866,x:703.35,y:761},0).wait(1).to({rotation:42.0648,y:778.95},0).wait(1).to({rotation:43.0431,x:703.3,y:796.9},0).wait(1).to({rotation:44.0213,y:814.9},0).wait(1).to({rotation:44.9996,y:832.9},0).wait(1));

	// Layer_12
	this.instance_11 = new lib.Symbol20();
	this.instance_11.setTransform(617.5,455.25,1,1,0,0,0,28.2,16.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(18).to({_off:false},0).wait(1).to({regX:28.3,regY:16.3,x:623.9,y:451.9},0).wait(1).to({x:630.2,y:448.45},0).wait(1).to({x:636.5,y:445},0).wait(1).to({x:642.8,y:441.55},0).wait(1).to({x:649.1,y:438.15},0).wait(1).to({x:655.4,y:434.7},0).wait(1).to({x:661.7,y:431.25},0).wait(1).to({x:668,y:427.8},0).wait(1).to({x:674.35,y:424.4},0).wait(1).to({x:680.65,y:420.95},0).wait(1).to({x:686.95,y:417.5},0).wait(1).to({x:693.25,y:414.05},0).wait(1).to({x:699.55,y:410.65},0).wait(1).to({x:705.85,y:407.2},0).wait(1).to({x:712.15,y:403.75},0).wait(1).to({x:718.45,y:400.3},0).wait(1).to({x:724.8,y:396.9},0).wait(1).to({x:731.1,y:393.45},0).wait(1).to({x:737.4,y:390},0).wait(1).to({x:743.7,y:386.55},0).wait(1).to({x:750,y:383.15},0).wait(1).to({x:756.3,y:379.7},0).wait(1).to({x:762.6,y:376.25},0).wait(1).to({x:768.9,y:372.8},0).wait(1).to({x:775.25,y:369.4},0).wait(1).to({y:393},0).wait(1).to({y:416.6},0).wait(1).to({y:440.25},0).wait(1).to({y:463.85},0).wait(1).to({y:487.45},0).wait(1).to({y:511.1},0).wait(1).to({y:534.7},0).wait(1).to({y:558.35},0).wait(1).to({y:581.95},0).wait(1).to({y:605.55},0).wait(1).to({y:629.2},0).wait(1).to({y:652.8},0).wait(1).to({y:676.4},0).wait(1).to({y:700.05},0).wait(1).to({y:723.65},0).wait(1).to({y:747.3},0).wait(1).to({y:770.9},0).wait(1).to({y:794.5},0).wait(1).to({y:818.15},0).wait(1).to({y:841.75},0).wait(1).to({y:865.4},0).wait(1));

	// Layer_13
	this.instance_12 = new lib.Symbol21();
	this.instance_12.setTransform(602.55,488.85,1,1,0,0,0,65.3,30.4);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(18).to({_off:false},0).wait(1).to({regX:65.4,regY:30.5,rotation:0.3261,x:611.2,y:485.25},0).wait(1).to({rotation:0.6521,x:619.7,y:481.65},0).wait(1).to({rotation:0.9782,x:628.3,y:477.95},0).wait(1).to({rotation:1.3043,x:636.85,y:474.35},0).wait(1).to({rotation:1.6303,x:645.35,y:470.65},0).wait(1).to({rotation:1.9564,x:653.9,y:467.05},0).wait(1).to({rotation:2.2824,x:662.5,y:463.35},0).wait(1).to({rotation:2.6085,x:671,y:459.7},0).wait(1).to({rotation:2.9346,x:679.55,y:456.05},0).wait(1).to({rotation:3.2606,x:688.1,y:452.35},0).wait(1).to({rotation:3.5867,x:696.65,y:448.75},0).wait(1).to({rotation:3.9128,x:705.2,y:445.1},0).wait(1).to({rotation:4.2388,x:713.75,y:441.45},0).wait(1).to({rotation:4.5649,x:722.3,y:437.75},0).wait(1).to({rotation:4.8909,x:730.85,y:434.15},0).wait(1).to({rotation:5.217,x:739.45,y:430.45},0).wait(1).to({rotation:5.5431,x:747.95,y:426.8},0).wait(1).to({rotation:5.8691,x:756.5,y:423.2},0).wait(1).to({rotation:6.1952,x:765,y:419.45},0).wait(1).to({rotation:6.5213,x:773.6,y:415.85},0).wait(1).to({rotation:6.8473,x:782.15,y:412.2},0).wait(1).to({rotation:7.1734,x:790.7,y:408.5},0).wait(1).to({rotation:7.4995,x:799.2,y:404.9},0).wait(1).to({rotation:7.8255,x:807.8,y:401.2},0).wait(1).to({rotation:8.1516,x:816.35,y:397.55},0).wait(1).to({rotation:8.4776,y:418.25},0).wait(1).to({rotation:8.8037,y:438.9},0).wait(1).to({rotation:9.1298,x:816.3,y:459.6},0).wait(1).to({rotation:9.4558,y:480.25},0).wait(1).to({rotation:9.7819,y:500.9},0).wait(1).to({rotation:10.108,x:816.35,y:521.65},0).wait(1).to({rotation:10.434,x:816.3,y:542.25},0).wait(1).to({rotation:10.7601,y:562.9},0).wait(1).to({rotation:11.0861,x:816.35,y:583.6},0).wait(1).to({rotation:11.4122,x:816.3,y:604.25},0).wait(1).to({rotation:11.7383,x:816.35,y:624.9},0).wait(1).to({rotation:12.0643,y:645.6},0).wait(1).to({rotation:12.3904,y:666.3},0).wait(1).to({rotation:12.7165,y:686.9},0).wait(1).to({rotation:13.0425,x:816.3,y:707.55},0).wait(1).to({rotation:13.3686,x:816.35,y:728.2},0).wait(1).to({rotation:13.6946,y:748.95},0).wait(1).to({rotation:14.0207,x:816.3,y:769.6},0).wait(1).to({rotation:14.3468,y:790.25},0).wait(1).to({rotation:14.6728,x:816.25,y:810.9},0).wait(1).to({rotation:14.9989,x:816.3,y:831.55},0).wait(1));

	// Symbol_24
	this.instance_13 = new lib.Symbol24();
	this.instance_13.setTransform(593.5,446.25,1,1,0,0,0,52.4,74.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(18).to({_off:false},0).wait(1).to({scaleX:1.0981,scaleY:1.0981,x:601.05,y:438.65},0).wait(1).to({scaleX:1.1962,scaleY:1.1962,x:608.65,y:431.1},0).wait(1).to({scaleX:1.2944,scaleY:1.2944,x:616.2,y:423.55},0).wait(1).to({scaleX:1.3925,scaleY:1.3925,x:623.8,y:416},0).wait(1).to({scaleX:1.4906,scaleY:1.4906,x:631.35,y:408.4},0).wait(1).to({scaleX:1.5887,scaleY:1.5887,x:638.95,y:400.85},0).wait(1).to({scaleX:1.6868,scaleY:1.6868,x:646.55,y:393.25},0).wait(1).to({scaleX:1.785,scaleY:1.785,x:654.15,y:385.75},0).wait(1).to({scaleX:1.8831,scaleY:1.8831,x:661.7,y:378.15},0).wait(1).to({scaleX:1.9812,scaleY:1.9812,x:669.25,y:370.6},0).wait(1).to({scaleX:2.0793,scaleY:2.0793,x:676.85,y:363},0).wait(1).to({scaleX:2.1774,scaleY:2.1774,x:684.45,y:355.45},0).wait(1).to({scaleX:2.2756,scaleY:2.2756,x:692.05,y:347.9},0).wait(1).to({scaleX:2.3737,scaleY:2.3737,x:699.65,y:340.35},0).wait(1).to({scaleX:2.4718,scaleY:2.4718,x:707.15,y:332.8},0).wait(1).to({scaleX:2.5699,scaleY:2.5699,x:714.75,y:325.2},0).wait(1).to({scaleX:2.6681,scaleY:2.6681,x:722.35,y:317.65},0).wait(1).to({scaleX:2.7662,scaleY:2.7662,x:729.95,y:310.1},0).wait(1).to({scaleX:2.8643,scaleY:2.8643,x:737.5,y:302.55},0).wait(1).to({scaleX:2.9624,scaleY:2.9624,x:745.1,y:294.95},0).wait(1).to({scaleX:3.0605,scaleY:3.0605,x:752.65,y:287.4},0).wait(1).to({scaleX:3.1587,scaleY:3.1587,x:760.25,y:279.8},0).wait(1).to({scaleX:3.2568,scaleY:3.2568,x:767.85,y:272.3},0).wait(1).to({scaleX:3.3549,scaleY:3.3549,x:775.4,y:264.7},0).wait(1).to({scaleX:3.453,scaleY:3.453,x:783,y:257.2},0).wait(1).to({scaleX:3.5962,scaleY:3.5276,x:784.05,y:297.2},0).wait(1).to({scaleX:3.7393,scaleY:3.6022,x:785.1,y:337.25},0).wait(1).to({scaleX:3.8825,scaleY:3.6768,x:786.15,y:377.3},0).wait(1).to({scaleX:4.0256,scaleY:3.7513,x:787.2,y:417.35},0).wait(1).to({scaleX:4.1688,scaleY:3.8259,x:788.25,y:457.45},0).wait(1).to({scaleX:4.3119,scaleY:3.9005,x:789.3,y:497.5},0).wait(1).to({scaleX:4.4551,scaleY:3.9751,x:790.35,y:537.55},0).wait(1).to({scaleX:4.5982,scaleY:4.0497,x:791.4,y:577.6},0).wait(1).to({scaleX:4.7414,scaleY:4.1242,x:792.45,y:617.65},0).wait(1).to({scaleX:4.8845,scaleY:4.1988,x:793.5,y:657.7},0).wait(1).to({scaleX:5.0277,scaleY:4.2734,x:794.55,y:697.75},0).wait(1).to({scaleX:5.1708,scaleY:4.348,x:795.6,y:737.85},0).wait(1).to({scaleX:5.314,scaleY:4.4225,x:796.65,y:777.95},0).wait(1).to({scaleX:5.4571,scaleY:4.4971,x:797.7,y:818},0).wait(1).to({scaleX:5.6003,scaleY:4.5717,x:798.75,y:858.05},0).wait(1).to({scaleX:5.7434,scaleY:4.6463,x:799.8,y:898.1},0).wait(1).to({scaleX:5.8866,scaleY:4.7209,x:800.85,y:938.15},0).wait(1).to({scaleX:6.0297,scaleY:4.7954,x:801.9,y:978.2},0).wait(1).to({scaleX:6.1729,scaleY:4.87,x:802.95,y:1018.25},0).wait(1).to({scaleX:6.316,scaleY:4.9446,x:804,y:1058.3},0).wait(1).to({scaleX:6.4592,scaleY:5.0192,x:805.05,y:1098.4},0).wait(1));

	// Layer_14
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C12A1F").s().p("ADHF8QibhbinimQihighdiXQhbiVAUhFQAFgPAKgKQAJgKAOgDQBEgWCXBbQCaBbChCiQCpCmBcCcQBbCbggA/QgEAIgGAFQgGAHgKAEQgPAHgVAAQhCAAh1hFg");
	this.shape_6.setTransform(593.9248,461.7691);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(18).to({_off:false},0).to({_off:true},20).wait(27));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,1143.3,1471.8000000000002);


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
	this.shape_10.setTransform(153.7637,-204.745,0.7761,0.7995);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AlBOTIhq8lIIbAAIE8clg");
	this.shape_11.setTransform(54.096,-204.745,0.7761,0.7995);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AmpOTIE38lIIcAAIhmclg");
	this.shape_12.setTransform(-53.7011,-204.745,0.7761,0.7995);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ap6OTILZ8lIIcAAIoJclg");
	this.shape_13.setTransform(-153.6987,-204.745,0.7761,0.7995);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#ED1C24").s().p("Eg0pAOTIOv8lMBL1AAAIOvclg");
	this.shape_14.setTransform(-0.2876,-204.745,0.7761,0.7995);

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
	this.shape_21.graphics.f("#FFFFFF").s().p("AjKCZQhVg7gFhWIAAjdIJJAAIAADdQgFBWhUA7QhVA9h3AAQh1AAhVg9g");
	this.shape_21.setTransform(58.3,-110.55);

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
	this.shape_25.graphics.f("rgba(111,111,111,0.298)").s().p("EAhHACaQhMg1gMhKQgMBKhMA1QhUA7h2ABQh3gBhVg7QhIgzgOhGQgOBGhJAzQhVA7h1ABQh3gBhVg7QhJgzgOhGQgNBGhJAzQhVA7h3ABQh2gBhUg7QhLg1gNhJQgNBJhLA1QhUA7h3ABQh2gBhUg7QhHgygPhCQgPBChGAyQhVA7h2ABQh3gBhUg7QhRg5gIhPQgJBPhQA5QhVA7h2ABQh3gBhUg7QhIgzgPhEQgOBEhHAzQhWA7h2ABQh2gBhVg7QhNg3gLhLQgLBLhNA3QhVA7h3ABQh2gBhVg7QhUg8gFhVIAAjeMBRtAAAIAADeQgEBVhVA8QhVA7h2ABQh3gBhVg7g");
	this.shape_25.setTransform(0.15,-107.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgJAAQACgMAHgJIAMAKQgHAGgFAIQgGALgCAIQgEgKADgMg");
	this.shape_26.setTransform(-234.3347,-100.5554,0.7761,0.7761);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgWABQALgIALgDQANgDAKADQgKADgJAHQgIAEgHAIg");
	this.shape_27.setTransform(-231.9273,-103.0584,0.7761,0.7761);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F2EA72").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_28.setTransform(-230.4915,-98.8285,0.7761,0.7761);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F4E09C").s().p("EgqUAXFQg+AAgsgsQgsgsAAg+MAAAgpoQAAgvAbgmQAagmArgQMAAAAskMBWVAAAMAAAgskQAqAQAbAmQAbAmAAAvMAAAApoQAAA+gsAsQgtAsg+AAg");
	this.shape_29.setTransform(-0.5416,7.2981,0.7699,0.7699);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FBC926").s().p("EgwWAbgMAAAgySQAAg2ASgyQARgvAhgoQAqg0A7gcQA+geBFAAMBXUAAAQBGAAA9AeQA7AcArA0QAgAoARAvQATAyAAA2MAAAAySgEgqsAVkMBVoAAAMAAAgutMhVoAAAg");
	this.shape_30.setTransform(-1.1045,6.213,0.7763,0.7763);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgiXwMAAAgvfIBFAAMAAAAvfg");
	this.shape_31.setTransform(-73.8556,5.2905,0.697,0.7761);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgiXwMAAAgvfIBFAAMAAAAvfg");
	this.shape_32.setTransform(71.1217,5.2905,0.697,0.7761);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#ED1C24").s().p("Eg71AIwIAAxfMB3rAAAIAARfg");
	this.shape_33.setTransform(-0.7164,234.4425,0.7763,0.7763);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D47A11").s().p("Eg87AE2ILQprMBjUAAAILTJrg");
	this.shape_34.setTransform(0.0599,166.8858,0.7763,0.7763);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C41A26").s().p("EgxrAa9MAAAg15MBjXAAAMAAAA15gEgq7AUZMBVoAAAMAAAgutMhVoAAAg");
	this.shape_35.setTransform(0.0599,12.0351,0.7763,0.7763);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["rgba(0,0,0,0)","rgba(102,102,102,0.588)"],[0.749,0.976],0,0,0,0,0,154.7).s().p("ArdRJIAAgiMAAAghwIW7AAMAAAAiSg");
	this.shape_36.setTransform(-145.075,7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgJSEMAAAgkHIATAAIAACXMAAAAhwg");
	this.shape_37.setTransform(-219.55,-2.25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["rgba(0,0,0,0)","rgba(102,102,102,0.588)"],[0.749,0.976],0,0,0,0,0,149.2).s().p("ArDRJMAAAgiSIWHAAMAAAAiSg");
	this.shape_38.setTransform(-0.825,7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["rgba(0,0,0,0)","rgba(102,102,102,0.588)"],[0.749,0.976],0,0,0,0,0,149.2).s().p("ArDRJMAAAgiSIWHAAMAAAAiSg");
	this.shape_39.setTransform(144.225,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.handle},{t:this.instance_1},{t:this.instance}]}).wait(1));

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
			createjs.Sound.registerSound("sounds/PedalBrakingmp3.mp3", "handle");
			createjs.Sound.registerSound("sounds/tikmp3.mp3", "tik");
			createjs.Sound.registerSound("sounds/hwav.mp3", "ding");
			createjs.Sound.registerSound("sounds/conwav.mp3", "con");
		
		
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
			createjs.Tween.get(stratm).wait(500).to({
				scale: 1
			}, 1000);
			stratm.btn.cursor = "pointer";
			stratm.btn.addEventListener("click", game)
		
		
			confetti1 = new lib.confetti()
			confetti1.x = -300
			confetti1.y = 100
			stage.addChildAt(confetti1, stage.numChildren - 1);
			confetti2 = new lib.confetti()
			confetti2.scaleX = -1;
			confetti2.x = 1580
			confetti2.y = 100
			stage.addChildAt(confetti2, stage.numChildren - 1);
			confetti1.stop();
			confetti2.stop();
		
		}
		
		
		function game() {
			//מוזיקת רקע
		
			var mymusic = new createjs.Sound.play("music");
			mymusic.loop = -1;
			mymusic.volume = 0;
			createjs.Tween.get(mymusic).to({
				volume: 0.05
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
		
		}
		
		
		
		
		function rnd() {
		
			var tick = new createjs.Sound.play("handle");
			s1 = Math.floor((Math.random() * 10)) + 10;
			s2 = Math.floor((Math.random() * 10)) + 10;
			s3 = Math.floor((Math.random() * 10)) + 10;
		
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
			var tik = new createjs.Sound.play("tik");
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
			var tik = new createjs.Sound.play("tik");
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
			var tik = new createjs.Sound.play("tik");
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
				if (s1 == 0) {
					var tik = new createjs.Sound.play("ding");
					tik.volume = 0.5
				}
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
				if (s2 == 0) {
					var tik = new createjs.Sound.play("ding");
					tik.volume = 0.5
		
				}
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
				if (s3 == 0) {
					var tik = new createjs.Sound.play("ding");
					tik.volume = 0.5
				}
				go3();
			}
		
		}
		var confetti1;
		var confetti2;
		function check() {
			if (c1 == c2 && c2 == c3) {
				trys = Math.floor((Math.random() * 5)) + 3;
				confetti1.gotoAndPlay(0);
				confetti2.gotoAndPlay(0);
		
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