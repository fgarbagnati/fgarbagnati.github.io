(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.herve = function() {
	this.initialize(img.herve);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,309);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.StartInstructions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text Body
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-0.5,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Text Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("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");
	this.shape_1.setTransform(-0.5,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.StartInstructions, new cjs.Rectangle(-125.1,-6.1,249.3,19.6), null);


(lib.GetReady = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text Body
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtXCHIgGgPQgKAGgLAEQgKADgJAAIgBAAIAAAAIgpgCQgXgCgSgMQgTgLgMgUQgKgTgBgXIAAhHQABgfAIgVQAIgVANgNQANgNAPgFQAPgFAPAAIAkAAQAUAAASALQATAMAMASQAMATAAAVIAAAZIgzACQAAgNgDgMQgEgMgIgHQgHgIgMAAIgDAAIgDABIgcAFQgMACgGAQQgGAQAAAgIAAAWQAAAOAFAPQAEAPAIAKQAHAKALAAIAYAAQADAAAGgDQAFgCADgFQADgEABgFIAAgCIgBgBIgfgDIgEggIBhAAIgBB2gANhCFIACiJIhKiGIBRAJIAmBTIAhhbIBRgBIhNCKIgMCFgAI2CFIAAkNIB3AAQAsABAVASQATATAAAhIAACQQAAANgCAKQgCAKgGAHQgIAHgOAEQgOADgYAAgAKDBcIAaAAQATAAAJgDQAIgDACgGQACgHAAgJIABghIACgqQACgXAAgZQAAgOgEgGQgDgHgGgBQgFgCgGAAIgxAAgAHPCFIgKhWIg9AAIgJBWIhHAAIA4kOIBnAAIBPEOgAGMgCIA1gDIgdhigABqCFIgBkOIC3AAIAAAyIhvAGIAAAvIBmAIIAAAyIhhAAIAAAkIByAIIAABBgAAPCFIAAhRQAAgJgHgGQgGgFgHgDIgPgEIgGgBIAABtIhKAAIAAkOIBuAAQAaAAAPAFQAPAEAIAJQAHAIADAMQACAMAAAPQAAAdgFASQgEATgOAHQgOAJgbAAIAGACIAQAHIATAJQAJAGAHAGQAGAFABAGIAABSgAgcgpIAiAAQALAAAEgCQAFgDABgEQACgEgBgGQAAgLgDgJQgFgJgOAAIgiAAgAoPCFIAKi2IhIgCIgFhWIDfACIABBPIhMAMIAACxgAshCFIAAkOIC3AAIAAAyIhwAGIAAAvIBmAIIAAAyIhgAAIAAAkIByAIIAABBg");
	this.shape.setTransform(-1.1,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Text Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("As7C7IgfgEQgIgBgHgFIgBAAQgOAEgNAAIgBAAIgBAAIgBAAIgpgCIAAAAQgfgCgYgQIgBAAQgYgQgPgZIgBgBQgOgZgBgfIAAgBIAAgjIAAgBIAAhHQABglAKgaIAAAAQAKgcASgQIAAgBQASgRAVgHIAAAAQAVgHATAAIAjAAIABAAQAcAAAaAQIAAAAQAJAFAIAHQAAgMAJgIQAJgJAMAAIC3AAQAHAAAFACQAGgCAGAAIDfACQANAAAIAJQAJAJAAAMIABBPIgBAGIABAeQAAALgHAJQgHAIgLACIg0AIIAACXQAAANgIAJQgJAIgNAAIhQAAQgIAAgIgEQgHgEgEgIQgDgHAAgIIABgaQgBgFAAgFIAGh0IgngBIgIgBIAAAbQAGACAEAFQAIAIAAAMIAABlQAAANgJAJQgJAIgMAAIi/AAIgFAAIgFADQgGADgHAAIgDAAgAImC1IhXAAQgLAAgJgHQgJgIgBgLIgHg8IgHAAIgGA7QgBAMgJAIQgJAHgLAAIhHAAIgHgBIgJABIi+AAQgGAAgEgBQgFABgGAAIhHAAQgMAAgHgIQgJAIgMAAIhKAAQgMAAgJgIQgJgJAAgNIAAkyQAAgNAJgIQAJgJAMAAIBuAAQAfAAATAGIABAAQAKAEAJAEIAEgFQAJgJAMAAIC3AAQANAAAJAJQAIAIAAANIAAAxIAAADIAAAiQAAAMgIAJIgBABIAAADIAAAbIAdiQQADgLAIgGQAIgHALAAIBnAAQAKAAAIAGQAIAGADAKIAkB8IAAhzQAAgMAJgJQAJgJAMAAIB3AAQA0ABAbAVIAAAAQACgMAJgGQAKgHALACIBRAIQAIABAGAFQAHAEADAIIAIARIAIgYQAEgJAHgFQAIgFAJAAIBRgBQALAAAIAHQAJAHACALQACAKgFAKIgCAEQAEAFABAHQACAKgFAKIhLCDIgLCAQgBAMgJAHQgIAIgMAAIhIAAQgIAAgHgEQgHgEgEgHQgEgHAAgIIABggIgBgEIABhfIglhDIAAAAIgBBsIAAABIAAAIIAAAEIAAAWIAAABQABARgDAMQgDATgNANIAAABQgMAMgXAGQgRAEgdAAIiFAAIgIgBIgIABIAAAAg");
	this.shape_1.setTransform(-1.1,12.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.GetReady, new cjs.Rectangle(-106.7,-6.4,211.3,37.4), null);


(lib.GameOver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text Body
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtsCIIgGgPQgKAGgLADQgKAEgJAAIgBAAIgBAAIgogDQgXgBgTgMQgSgMgMgTQgKgTgBgXIAAhHQABgfAIgVQAIgWANgMQANgNAPgFQAPgGAPAAIAjAAQAVABASALQATAMAMASQAMASAAAWIAAAZIgzABQAAgNgEgLQgEgMgHgIQgIgHgLAAIgDAAIgEABIgbAFQgMACgGAQQgGAPAAAhIAAAVQAAAPAEAPQAFAOAHAKQAIALAKgBIAZAAQADABAFgDQAFgDAEgEQADgFABgEIgBgCIAAgBIgfgDIgFggIBhAAIAAB1gAo5CGIAAkPIBOAAIBBCeIAwieIBTADIAGEMIhPAAIAAh/IghB/IhBAAIgZh1IgGB6gAPRCGIAAhSQAAgIgGgGQgHgFgIgDIgOgFIgHAAIAABtIhJAAIAAkPIBuAAQAaAAAQAGQAPAEAHAIQAIAJACAMQACAMAAAOQAAAegEASQgFATgOAHQgNAJgcAAIAHACIAPAHIATAJQAKAGAGAFQAGAGABAGIAABSgAOlgoIAjAAQALAAAEgCQAFgDABgEQACgEgBgGQABgLgEgJQgFgJgOAAIgjAAgAKPCGIAAkPIC3AAIAAAzIhwAGIAAAvIBmAIIAAAyIhhAAIAAAjIBzAIIAABCgAIwCGIgTgBIgYgBIgUAAIgKgBIhOkMIBQAIIArDPIAfjXIBQgCIhLERIgIAAgAE1CGIgBAAIgpgDQgXgBgSgMQgTgLgLgUQgLgSAAgYIAAhGQAAggAIgVQAIgWANgMQANgMAPgGQAQgGAPAAIAjAAQAUABATAMQASAKAMATQAMASABAWIAABjQgBAVgHARQgIAQgMAMQgMALgNAGQgOAGgNAAIgBAAgAEihLIgUACQgMABgFAQQgGAQgBAhIAAAWQAAAOAFAOQAEANAIAKQAIAIAKABIAQAAQAMgBAHgHQAIgIADgKQAEgLAAgHIgBgoQAAgagGgOQgGgPgJgFQgJgGgJAAIgBAAgAkLCGIAAkPIC3AAIAAAzIhwAGIAAAvIBmAIIAAAyIhhAAIAAAjIBzAIIAABCgAqgCGIgKhWIg9AAIgJBWIhGAAIA3kPIBnAAIBPEPgArigCIA0gCIgdhig");
	this.shape.setTransform(-1.2,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Text Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AtQC9IgfgDQgJgBgGgFIgBAAQgOAEgNAAIgBAAIgBAAIgBAAIgpgCIAAAAQgfgDgZgPIAAgBQgYgPgQgaIAAAAQgOgagBgeIAAgBIAAgnIAAgBIAAghIAAgBIAAglQABglAKgaIAAAAQAKgcARgRIABAAQASgSAVgGIAAAAQAUgIAUABIAjAAIABAAQAcAAAZAPIABABQAYAOAQAYIAAABQAOAWADAYIAQhOQACgLAIgHQAJgGAKAAIBnAAQAKAAAIAGQAIAGADAJIAkB9IAAh0QAAgNAJgJQAJgIAMAAIBOAAQAJgBAIAGQAIAFADAIIAhBRIAXhOQAEgKAIgGQAIgGAKABIBTACQAFAAAFACQAHgEAKAAIC3AAQAMAAAJAIQAJAJAAANIAAAwIAAAEIAAAmQAAAMgJAJIgBABIAAAlIAAAEIAAAYQAFADAFAEQAIAJAAAMIAAAoIAAACIAAA/QAAAMgJAJQgJAJgMAAIi/AAQgGAAgFgCQgFACgGAAIhPAAQgJAAgHgFQgIAFgJAAIhBAAQgGAAgFgCIgHAEQgHAEgIgBIhIgFIgGgBIgIABIhXAAQgLAAgJgIQgIgHgCgLIgHg8IgHAAIgGA7QgBALgJAIQgIAIgMAAIhGAAIgFAAIgFADQgGACgHAAIgDAAgAIuC4IgRgBIgCAAIgXAAIgTgBIgCAAIgIAAQgKAAgIgGQgIgHgDgJIgmiFIAAAmIAAABQgBAbgKAWQgKAWgQAPQgQAQgSAIIgBAAQgUAIgSAAIgBAAIgBAAIgCAAIgogCIgBAAQgegDgZgPIgBgBQgYgPgPgZIgBgBQgNgZgBgfIAAgBIAAgnIAAgBIAAhHQAAglAKgaIAAAAQALgcARgQQASgSAVgHIAAAAQAVgIAUABIAjAAIABAAQAcABAZAPQAJAFAIAHQAAgFACgGQAEgJAJgGQAIgFAKABIBQAJQAKABAHAGQAIAHACAKIAHAmIAHgtQACgLAIgHQAIgHALAAIBQgCQAGgBAFADIACAAIC3AAQAGAAAGACQAFgCAHAAIBuAAQAfAAATAGIABAAQAYAHAMAPQANAOADAVQADAOAAASIgBAaIAAAAIAAABIABAMIAAABQAAAigFATIgCAHQAHAKAAALIAAACIAAAmIAAAFIAABPQAAAMgJAJQgJAJgMAAIhHAAQgMAAgJgIQgJAIgMAAIhJAAIgIgBIgIABIi/AAQgMAAgJgJQgJgJAAgMIAAheIgcBmQgCAKgJAGQgIAGgKAAIgIAAIgBAAIgBAAg");
	this.shape_1.setTransform(-1.2,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.GameOver, new cjs.Rectangle(-108.9,-6.6,215.6,37.9), null);


(lib.ScreenFlash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArxKmIAA1LIXjAAIAAVLg");
	this.shape.setTransform(0,0,1.989,2.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ScreenFlash, new cjs.Rectangle(-149.9,-200,300,400), null);


(lib.LowerPipe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6BDB12").ss(5,1,1).p("AAAg7IAAB3");
	this.shape.setTransform(13,116,1,13.833);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6BDB12").ss(5,1,1).p("AAAhAIAACB");
	this.shape_1.setTransform(6,14,1,0.923);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Shadow
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(55,126,0,0.4)").s().p("AklATIAAgTQAAgHAGgFQAFgGAIAAIIlAAQAIAAAFAGQAGAFAAAHIAAATg");
	this.shape_2.setTransform(30,1.5,1.021,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Pipe Top
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#59C900","#459E00"],[0,1],-29.8,0,29.9,0).s().p("AkMCDQgeAAAAgeIAAjJQAAgeAeAAIIZAAQAeAAAAAeIAADJQAAAegeAAg");
	this.shape_3.setTransform(30,13.5,1.004,1.029);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Shadow
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(55,126,0,0.4)").s().p("AjugKIAAgwIHdAAIAAB1g");
	this.shape_4.setTransform(30,30.5,1.005,0.936);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Pipe Bottom
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#59C900","#459E00"],[0,1],-5.3,0,5.4,0).s().p("Ag1CIIAAkPIBrAAIAAEPg");
	this.shape_5.setTransform(30,113.5,4.465,6.569);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.LowerPipe, new cjs.Rectangle(-9,-8,77.3,220), null);


(lib.GroundSlice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Edges
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#84D93D").s().p("AvEAKIAAgTIeJAAIAAATg");
	this.shape.setTransform(96.5,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4B841D").s().p("AvEAKIAAgTIeJAAIAAATg");
	this.shape_1.setTransform(96.5,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Grass
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#72BE32").s().p("AgDAlQgUBRgahRQgRAUgRgUQgPAlgVglQgYA9gng9QgWAmgWgmQgLApgPgpQgaBMgjhMQgTAhgcghQgXA9gkg9QgfBGgohGQgSAXgSgXQgQBQgdhQQgjBBguhBQgbA9gbg9QgZA4gQg4Qg0A3grg3QgSAvgIgvQgSAggSggQggBNgchNIAAh3IeJAAIAAB3QgfBcgYhcQgQAQgQgQQgOApgUgpQgfA9gfg9QgSAvgfgvQgMAlgMglQgZBSgkhSQgVAggVggQgbBCgjhCQgkBJgjhJQgSAVgSgVQgTBMgdhMQghBHgvhHQgbA+gbg+QgVA7gWg7QgqBBg3hBQgIAtgRgtQgTAggUggQgMAugOAAQgNAAgPgug");
	this.shape_2.setTransform(96.5,8.6,1,0.667);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Grass copy
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5AA11F").s().p("AgDAYQgUA3gag3QgRAOgRgOQgPAZgVgZQgYAqgngqQgWAagWgaQgLAcgOgcQgaA0gkg0QgTAXgcgXQgXApgkgpQgfAvgogvQgSAQgTgQQgPA2gdg2QgjAsgugsQgaAqgcgqQgZAmgPgmQg2AmgrgmQgRAggJggQgRAWgSgWQggA0gcg0IAAhOIeJAAIAABOQgeA+gZg+QgQALgQgLQgOAcgUgcQgfApgfgpQgSAgggggQgLAZgMgZQgZA3gkg3QgVAWgVgWQgaAtglgtQgiAxgkgxQgSAOgSgOQgTAzgdgzQgiAwgvgwQgaAqgbgqQgVAogWgoQgqAsg3gsQgIAegRgeQgUAWgTgWQgMAfgOAAQgNAAgPgfg");
	this.shape_3.setTransform(96.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Grass copy 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#665025").s().p("AgDAYQgUA3gag3QgRAOgRgOQgPAZgVgZQgYAqgngqQgWAagWgaQgLAcgOgcQgaA0gkg0QgTAXgcgXQgXApgkgpQgfAvgogvQgSAQgTgQQgPA2gdg2QgjAsgugsQgaAqgcgqQgZAmgPgmQg2AmgrgmQgRAggJggQgRAWgSgWQggA0gcg0IAAhOIeJAAIAABOQgeA+gZg+QgQALgQgLQgOAcgUgcQgfApgfgpQgSAgggggQgLAZgMgZQgZA3gkg3QgVAWgVgWQgaAtglgtQgiAxgkgxQgSAOgSgOQgTAzgdgzQgiAwgvgwQgaAqgbgqQgVAogWgoQgqAsg3gsQgIAegRgeQgUAWgTgWQgMAfgOAAQgNAAgPgfg");
	this.shape_4.setTransform(96.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Dirt
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7B6233").s().p("AvFD6IAAnzIeLAAIAAHzg");
	this.shape_5.setTransform(96.5,25,0.999,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.GroundSlice, new cjs.Rectangle(-8,-8,208,65.8), null);


(lib.CollisionPoint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AgMAMQgEgFAAgHQAAgGAEgGQAGgEAGAAQAHAAAFAEQAGAGgBAGQABAHgGAFQgFAFgHABQgGgBgGgFg");
	this.shape.setTransform(0,0,1.143,1.143);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CollisionPoint, new cjs.Rectangle(-2,-2,4,4), null);


(lib.Trees = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Front
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1CD241").s().p("AiPEwIgJgIQgqATgxAAQhaAAhAg+QgvAqhAAAQg6AAgrgiQgyAig/AAQhIAAg2grQgcAIgfAAQgpAAgkgOQgnAXgxAAQhIAAg0gzQgWgWgNgaIgLAAIgFAAQgUApgiAjQhPBPhwAAQhwAAhPhPQgPgQgNgQIAApOQAcgIAgAAQBaAABBBBQAwAwAMA/QBBANA0AsQAjgSAqAAQBGAAAyAxQATAUAMAXQAJgCAKAAIAKABIAKgLQA8g8BVAAQBIAAA2ArQAbgIAgAAQBVAAA7A8IAQASQAZgIAdAAQAkAAAgANIAMgIQALgPAOgOQBDhCBdAAQBCAAA0AiQBLhABkAAQByAABRBQIADAEQA4goBHAAQBYAABAA9QAfgOAlAAQBGAAAyAxQAOAOALAQQARguAmgnQBGhGBkAAQBjAABGBGQAZAaARAdQAJgQAOgOQAygyBGAAQBGAAAyAyQATATAMAXIAFgCIgBgPQAAhhBFhFQBFhEBhAAIADAAIAAHTIgDAAIgcgBQgMAlgeAdQgyAzhGAAQhGAAgzgzQgTgTgLgWQgXAGgaAAQhGAAgygyIgJgKQgSAvgmAmQhGBGhjAAQhkAAhGhGQgkgkgRgrQgLATgQAQQgyAxhGAAQgiAAgcgLIgCACQhBBBhbAAQhAAAgzggIgPAQQhRBRhyAAQhxAAhQhRg");
	this.shape.setTransform(162.1,352.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Middle
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5BE7AB").s().p("AN8EcQgXgXgOgaIgLAMQgqAqg6AAQg8AAgqgqQgcgcgKgkQggAhgvAAQgvAAghgiQgIgIgFgIQgNAUgSASQg2A3hOAAQhNAAg4g3QgbgcgNgiQgTAIgWAAQgpAAgdgdQgIgJgGgJQgLAtgiAkQgxAwhEAAQguAAgngXQgKAcgWAWQgsArg9AAQg9AAgrgrQgcgcgJghIgUAAQhMAAg1g1IgHgHIgIAIQgrArg8AAQgpAAgggTQgKAOgMALQg2A3hOAAQhOAAg2g3QgmgmgMgwQgaAIgeAAQhGAAgxgyQgygxAAhGIAAgCQgTAKgWAAQgkAAgagaQgRgSgGgWQgfAWgpAAQgfAAgagNIAAjiQAagNAfAAQA1AAAkAkQAmAlgBA1IAAAAQAPgFAQAAQAkAAAZAaQAOAOAHARIAJgKQAxgyBGAAQBHAAAxAyQAeAdAMAkQAjgQApAAQBNAAA2A1QAogjA4AAQAyAAAmAdQALgUATgRQA1g2BMAAQBLAAA2A2QA0AzACBGQAWADAUAJQALgmAegfQAxgwBEAAQBEAAAxAwQAaAbAMAgQAIgQANgOQAdgdApAAQAhAAAZASQALgPAMgOQA4g2BNAAQBOAAA2A2QAjAjANAsQAggdAsAAQAvAAAhAgQARARAIATQAFgHAHgHQAqgpA8AAQA6AAAqApIALANQAOgbAXgXQA5g4BRAAQBPAAA3A1QAZgJAcAAQATAAASAFQANguAjgjQA3g3BNAAQAnAAAgAOQAGgrAegeQAlglA0AAQAvAAAiAdIAADCQgiAcgvAAIgLAAQADAPgBAQQABBOg3A2Qg3A3hOAAQg/AAgwgkIgOAQQglAmg3AAQgMAAgKgCQgMAQgPAPQg5A5hRAAQhRAAg5g5g");
	this.shape_1.setTransform(162,341.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Back
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B6FFFC").s().p("AK0E0QgQgQgKgRQgoAng5AAQg6gBgpgpQgIgHgGgJQgVAFgWAAQhDAAgwgvQgbgcgLgiIgRABQg1AAgngiQgEAlgbAaQgeAfgrAAQgYAAgTgIIgDACQgRATgbAAQgbAAgTgTIgJgLQgjARgpAAQhHAAg0gzIAAgBIgEAEQgsAshAAAQg/AAgtgsQgYgZgLgeQgKAZgWAVQgmAog5AAQgsAAgjgaIgGAGQgtAvhBAAQhBAAgvgvQgMgMgIgNIgUABQg1AAglglQgkglAAg0IAAgMQgdAVgkgBQgmABgdgWQgbAbglAAQgKgBgJgCQgHAJgIAHQgqArg7AAQg8AAgpgrQgrgpAAg7IABgRQgvgBglgcIAAjkQAlgeAzgBQA7ABAqAqQAqAqABA7IgBASQA4ABApApIAJAJQAMgDANAAQASAAAQAGQAHgLAKgKQAhghAvAAQAuAAAhAhQAiAhgBAvIAAAFQAigbAtAAQAsAAAhAbQAfgRAkgBIAAgJQAAg/AsgtQAtgsA/AAQA/AAAtAsQAiAkAIAuIALAAQAoAAAbAcQAKAKAIANQAhgVAqABQA2gBApAhQAHgLAKgKQA0gyBHgBQBIABAzAyQArArAHA4QAVgLAbAAQAdAAAXANIAAgJQAAg6AqgqQArgqA7gBQA7ABAqAqQARARAKATQAUgEAWgBQBCAAAvAwQAXAUAKAaIABAAQAJgmAfgeQArgrA9AAQA9AAAsArQASATALAVQAUgJAYAAQAqAAAdAcQAFgrAhghQAngoA5ABQAuAAAjAaIACgDQApgpA6AAQAvAAAjAbQAHgMALgLQAfgeAogDQgBgLAAgMQAAgvAggiQAiggAvAAQAuAAAiAgQAdAdAEAnQATAIARARIAKAMIAAChIgKALQgmAmg2AAQgnAAgegTIgFAGQgjAjgwAAQgdAAgYgNQgKAagVAVQgkAjgvAFQgGAhgaAZQghAhguAAQgvAAghghQgWgWgIgcQgqgHgfggIgNgOQgGAWgTATIgEADQADAPAAAQQAABAgsAsQgtAsg/AAQg/AAgtgsg");
	this.shape_2.setTransform(162,332.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Trees, new cjs.Rectangle(-9.1,297,342.5,94.1), null);


(lib.Clouds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Front
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECF8FF").s().p("A6cIRIgKiKIAAtrQAUgFAXAAQBBAAAuAtQAkAkAJAvQBrAIBOBNQBNBNAJBoQAJgNAMgLQA3g3BPAAQAbAAAYAHIAAgOQAAhUA8g7QA8g7BVAAQBUAAA8A7QApAoAOAzQAygeA/AAQA1AAAsAUIACgCQArgqA7AAQA7AAAqAqQAqApAAA7IAAACQANgUARgRQBDhBBcAAQBdAABCBBQAiAiARApQALgUASgSQAzgxBHAAQAYAAAWAFIgBgVQgBhmBKhIQBIhIBnAAQBnAABJBIQA8A7ALBPQAlAHAeAXIAAgLQAAhCAvgvQAwgvBCAAQBDAAAwAvQARARALAUQADhcBDhCQBFhFBhAAQBiAABGBFIADADIAAPZg");
	this.shape.setTransform(-0.4,-9.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Back
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D0EFFF").s().p("A5hIRIAAwfIANgBIAUgBQBiAABFBFQBDBCACBcQALgUASgRQAvgvBDAAQBCAAAwAvQAvAvAABCIAAALQAegXAmgHQALhPA7g7QBJhIBnAAQBnAABJBIQAtAtARA3IAOgPQBQhPBwAAQBxAABPBPQAZAZARAcQBNAHA6A5QASARAMAUIAAgCQAAg7AqgpQAqgqA7AAQA8AAAqAqIACACQAsgUA1AAQA/AAAzAeQAOgzAogoQA8g7BUAAQA1AAArAXQAKgMAMgMQBVhVB5AAQB4AABWBVIADAEQAogiA2AAQAlAAAfAQQALgZAVgVQAugtBCAAQAWAAAUAFIAANrIgKCKg");
	this.shape_1.setTransform(-8.8,-13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clouds, new cjs.Rectangle(-172.2,-66.3,342.2,109.4), null);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.Pipe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Upper Pipe
	this.instance = new lib.LowerPipe();
	this.instance.parent = this;
	this.instance.setTransform(26.7,-150.8,1,1,0,180,0,29.7,101.8);
	this.instance.cache(-11,-10,81,224);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Lower Pipe
	this.instance_1 = new lib.LowerPipe();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.7,150.8,1,1,0,0,0,29.7,101.8);
	this.instance_1.cache(-11,-10,81,224);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Pipe, new cjs.Rectangle(-3,-252,60,504), null);


(lib.birdve = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Collision Points
	this.hitt3 = new lib.CollisionPoint();
	this.hitt3.name = "hitt3";
	this.hitt3.parent = this;
	this.hitt3.setTransform(-18.3,12);

	this.hitt8 = new lib.CollisionPoint();
	this.hitt8.name = "hitt8";
	this.hitt8.parent = this;
	this.hitt8.setTransform(6.6,-29);

	this.hitt4 = new lib.CollisionPoint();
	this.hitt4.name = "hitt4";
	this.hitt4.parent = this;
	this.hitt4.setTransform(6.6,36.5);

	this.hitt5 = new lib.CollisionPoint();
	this.hitt5.name = "hitt5";
	this.hitt5.parent = this;
	this.hitt5.setTransform(-14.3,26.8);

	this.hitt1 = new lib.CollisionPoint();
	this.hitt1.name = "hitt1";
	this.hitt1.parent = this;
	this.hitt1.setTransform(35.1,-5.8);

	this.hitt7 = new lib.CollisionPoint();
	this.hitt7.name = "hitt7";
	this.hitt7.parent = this;
	this.hitt7.setTransform(-10.3,-27.7);

	this.hitt6 = new lib.CollisionPoint();
	this.hitt6.name = "hitt6";
	this.hitt6.parent = this;
	this.hitt6.setTransform(-22.4,-8.3);

	this.hitt2 = new lib.CollisionPoint();
	this.hitt2.name = "hitt2";
	this.hitt2.parent = this;
	this.hitt2.setTransform(29.3,15.2);

	this.hitt0 = new lib.CollisionPoint();
	this.hitt0.name = "hitt0";
	this.hitt0.parent = this;
	this.hitt0.setTransform(26.6,-22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hitt0},{t:this.hitt2},{t:this.hitt6},{t:this.hitt7},{t:this.hitt1},{t:this.hitt5},{t:this.hitt4},{t:this.hitt8},{t:this.hitt3}]}).to({state:[]},14).wait(1));

	// Body
	this.instance = new lib.herve();
	this.instance.parent = this;
	this.instance.setTransform(-23,-30,0.222,0.222);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},14).wait(1));

	// Wing
	this.hit1 = new lib.CollisionPoint();
	this.hit1.name = "hit1";
	this.hit1.parent = this;
	this.hit1.setTransform(35.1,-5.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C90102").s().p("Ah8BgIACgBIABgCIA7g0IB7iMQAEgEAIgCQAHgBAIABQASADAPAPQAOAPADARQACAJgCAGQgCAIgFAFIgvAfIgqAZIhgAvIhUAfg");
	this.shape.setTransform(39.3,-14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C90102").s().p("AhIBMIABgCIBYjFIAEgFIAGgEQAHgEAIAAQARgBATAKQARAKAIAQQADAHABAIIgBAHQAAAEgDADIgDAFIgnAuIhvBvIg4Avg");
	this.shape_1.setTransform(36.1,-17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C90102").s().p("AgwBjIALg9IAAgCIAAgBIABgDIAEg7IgEhaQAAgFAEgGIALgKQAPgIAUgBQAVABAOAKQAIAGACAFQAEAGAAAIIgMAwIgVA8IgaA0IgBABIAAACIgJAQIg4BQg");
	this.shape_2.setTransform(31.7,-18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C90102").s().p("AB4BlIiDg4IgegQIgqgZIgvgfQgFgFgCgIQgCgGACgJQADgRAOgPQAPgPASgDQAIgBAHABQAIACAEAEIBgBxIBWBPIABACIACABIAOALg");
	this.shape_3.setTransform(-23.2,-15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C90102").s().p("AAeBHIh5iAIgIgKIgDgFQgDgDAAgEIgBgHQABgIADgHQAIgQARgKQATgKARABQAIAAAHAEIAGAEIAEAFIBZDHIAiA9g");
	this.shape_4.setTransform(-20.1,-18.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C90102").s().p("AAlBzIgng/IAAgBIgBgCIgag1IgVg6IgMgxQAAgIAEgGQACgFAIgFQAOgKAVgBQAUgBAPAJIALAKQAEAHAAAFIgEBaIAEA6IABADIAAABIAAACIALA9IAOAwg");
	this.shape_5.setTransform(-15.6,-19.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C90102").s().p("Ah8BgIACgBIABgCIBIhBIBuh/QAEgEAIgCQAHgBAIABQASADAPAPQAOAPADARQACAJgCAGQgCAIgFAFIgvAfIgqAZIgeAQIiBA3IgVAHg");
	this.shape_6.setTransform(39.3,-14.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C90102").s().p("AAZA/IhCgiIgqgZIgvgfQgFgFgCgIQgCgGACgJQADgRAOgPQAPgPASgDQAIgBAHABQAIACAEAEIBgBxIBWBPIABACIACABIAOALg");
	this.shape_7.setTransform(-23.2,-15.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C90102").s().p("AABAsIhkhvIgDgFQgDgDAAgEIgBgHQABgIADgHQAIgQARgKQATgKARABQAIAAAHAEIAGAEIAEAFIBZDHIAiA9g");
	this.shape_8.setTransform(-20.1,-18.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C90102").s().p("AiaAhQD8hQASgCQAOgBALANQALANADAVQACATgIAQQgIAQgNACIgGAAQglAAjvgRg");
	this.shape_9.setTransform(39.1,-7.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C90102").s().p("Ah/AyQgNgCgIgQQgIgQACgTQADgVALgNQALgNAOABQASACD8BPQjvASglAAIgGAAg");
	this.shape_10.setTransform(-24.8,-7.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C90102").s().p("ABIBrQgHgBgFgFIgggoQgggoggghIg1g0IgIgHIgngkICCA3QAsAXAtAbIAuAfQAFAFADAHQABAHgBAJQgDARgOAPQgQAPgQADIgIABIgIgBg");
	this.shape_11.setTransform(35,5.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C90102").s().p("AhXBrQgQgDgQgPQgOgPgDgRQgBgJABgHQADgHAFgFIAugfQAtgbAsgXICCg3IgnAkIgIAHIg1A0QggAhggAoIggAoQgFAFgHABIgIABIgIgBg");
	this.shape_12.setTransform(-23.1,6.2);

	this.hit2 = new lib.CollisionPoint();
	this.hit2.name = "hit2";
	this.hit2.parent = this;
	this.hit2.setTransform(29.3,15.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C90102").s().p("AArCLQgIAAgGgFQgHgDgDgGIgCgGIgfhPIgBgCIgDgGQgKgZgMgWIgJgSIg8hqIAjAcQARANASAQIAKAJIBIBJIACACIADACIA3BDIAEAGQADAHAAAIQgBAJgEAFQgHARgSAJQgQAIgOAAIgHgBg");
	this.shape_13.setTransform(29,10.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C90102").s().p("ABIBrQgHgBgFgFIgggoQgggoggghIhkhfICCA3QAsAXAtAbIAuAfQAFAFADAHQABAHgBAJQgDARgOAPQgQAPgQADIgIABIgIgBg");
	this.shape_14.setTransform(31.7,7.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C90102").s().p("AhOCEQgSgJgJgRQgDgFgBgJQAAgIAEgHIADgGIA3hDIADgCIACgCIAqgtIBuheIgXAmQgHALgPAcIgYAvQgLAWgLAZIgDAGIgBACIgeBPIgDAGQgDAGgHADQgGAFgIAAIgHABQgOAAgPgIg");
	this.shape_15.setTransform(-20.3,9.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C90102").s().p("AgVCLIgLgKQgEgGAAgFIAEhEIgEhRIgBgDIAAgCIAAgBIgLg9IgOgxIAlAyIAcAuIAAACIABABIAqBgIADAKIACAGIAMAwQAAAIgEAGQgCAFgIAGQgOAJgVACQgUAAgPgJg");
	this.shape_16.setTransform(24.6,10.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C90102").s().p("AArCLQgIAAgGgFQgHgDgDgGIgDgGIgehPIgBgCIgDgGQgLgZgLgWIgYgvQgPgcgHgLIgXgmIAjAcIAjAdIAKAJIBIBJIACACIADACIA3BDIADAGQAEAHAAAIQgBAJgEAFQgHARgTAJQgPAIgOAAIgHgBg");
	this.shape_17.setTransform(28,10.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C90102").s().p("AgwCJQgIgGgCgFQgEgHAAgHIACgMIAKgkIACgGIADgKIAqhgIABgCIAAgBIAcguIABgCIACgCIAiguIgOAxIgLA9IAAACIAAABIgBADIgEBRIAEBEQAAAEgEAHIgLAKQgPAIgUAAQgVAAgOgKg");
	this.shape_18.setTransform(-15.6,10.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C90102").s().p("AgVCLIgLgKQgEgGAAgFIAEhEIgEhRIgBgDIAAgCIAAgBIgLg9IgOgxIAlAyIAcAuIAAACIABABIAqBgIADAKIACAGIAKAkIACAMQAAAIgEAGQgCAFgIAGQgOAJgVACQgUAAgPgJg");
	this.shape_19.setTransform(24.6,10.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C90102").s().p("AArCLQgIAAgGgFQgHgDgDgGIgDgGIgehPIgBgCIgDgGQgLgZgLgWIgYgvQgPgcgHgLIgXgmIAjAcIAjAdIAKAJIBKBLIADACIA3BDIADAGQAEAHAAAIQgBAJgEAFQgHARgTAJQgPAIgOAAIgHgBg");
	this.shape_20.setTransform(28,10.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C90102").s().p("AgwCJQgIgGgCgFQgEgHAAgHIACgMIAKgkIAVg8IAag0IABgCIAAgBIAcguIABgCIACgCIAiguIgUBQIgFAeIAAACIAAABIgBADIgEBRIAEBEQAAAEgEAHIgLAKQgPAIgUAAQgVAAgOgKg");
	this.shape_21.setTransform(-15.6,10.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C90102").s().p("AArCLQgIAAgGgFQgHgDgDgGIgCgGIgfhPIgBgCIgDgGQgKgZgMgWIgJgSIg8hqIAjAcQARANASAQIBUBUIADACIA3BDIAEAGQADAHAAAIQgBAJgEAFQgHARgSAJQgQAIgOAAIgHgBg");
	this.shape_22.setTransform(29,10.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C90102").s().p("AhIBMIABgCIAHgNIBRi4IAEgFIAGgEQAHgEAIAAQARgBATAKQARAKAIAQQADAHABAIIgBAHQAAAEgDADIgDAFIgfAlIh3B4Ig4Avg");
	this.shape_23.setTransform(36.2,-17.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C90102").s().p("Ah8BgIACgBIABgCIBNhGIBph6QAEgEAIgCQAHgBAIABQASADAPAPQAOAPADARQACAJgCAGQgCAIgFAFIgvAfIgqAZIhgAvIhUAfg");
	this.shape_24.setTransform(39.3,-14.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C90102").s().p("Ag3B8IAShWIAAgCIAAgBIABgDIAEhRIgEhEQAAgFAEgGIALgKQAPgIAUgBQAVABAOAKQAIAGACAFQAEAGAAAIIgMAwIgVA8IgaA0IgBABIAAACIgcAuIglAyg");
	this.shape_25.setTransform(31.7,-18.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C90102").s().p("AAaBjIgcgvIAAgBIgBgCIgag1IgVg6IgMgxQAAgIAEgGQACgFAIgFQAOgKAVgBQAUgBAPAJIALAKQAEAHAAAFIgDAqIADBqIABADIAAABIAAACIASBXIAHAWg");
	this.shape_26.setTransform(-15.6,-19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:36.1}},{t:this.shape},{t:this.hit1}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_1,p:{x:36.2}},{t:this.shape_6,p:{x:39.3,y:-14.5}}]},1).to({state:[{t:this.shape_7},{t:this.shape_6,p:{x:39.4,y:-14.6}},{t:this.hit1}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_15},{t:this.shape_14,p:{x:31.7,y:7.4}},{t:this.shape_13},{t:this.hit2}]},1).to({state:[{t:this.shape_12},{t:this.shape_15},{t:this.shape_18},{t:this.shape_14,p:{x:30.7,y:6.9}},{t:this.shape_17},{t:this.shape_16},{t:this.hit2}]},1).to({state:[{t:this.shape_12},{t:this.shape_15},{t:this.shape_21},{t:this.shape_14,p:{x:30.7,y:6.9}},{t:this.shape_20},{t:this.shape_19},{t:this.hit2}]},1).to({state:[{t:this.shape_12},{t:this.shape_15},{t:this.shape_14,p:{x:31.7,y:7.4}},{t:this.shape_22}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.hit1}]},1).to({state:[{t:this.shape_7},{t:this.shape_6,p:{x:39.4,y:-14.6}}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_23,p:{x:36.2}},{t:this.shape_6,p:{x:39.3,y:-14.5}},{t:this.hit1}]},1).to({state:[{t:this.shape_26},{t:this.shape_8},{t:this.shape_7},{t:this.shape_25},{t:this.shape_23,p:{x:36.1}},{t:this.shape_24},{t:this.hit1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.1,-34.1,90.3,72.9);


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Trees
	this.instance = new lib.Trees();
	this.instance.parent = this;
	this.instance.setTransform(162.1,344,1,1,0,0,0,162.1,344);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Clouds
	this.instance_1 = new lib.Clouds();
	this.instance_1.parent = this;
	this.instance_1.setTransform(162.7,309.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Sky
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#70C6CE").ss(1,1,1).p("A3b/PMAu3AAAMAAAA+fMgu3AAAg");
	this.shape.setTransform(150,200.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#56CCFF","#E7F7FF"],[0,1],0,-199.9,0,200).s().p("A3bfQMAAAg+fMAu3AAAMAAAA+fg");
	this.shape_1.setTransform(150,200.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Background, new cjs.Rectangle(-9.6,-0.9,342.9,402), null);


// stage content:
(lib.flappy_herve = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		function Main() {
			this.ground = new Ground();
			this.pipes = new Pipes();
			this.bird = new Bird();
			this.ui = new UI();
			
			this.score = 0;
			
			canvas.onmousedown = this.userPressed.bind(this);
			window.onkeydown = this.userPressed.bind(this);
			
			createjs.Ticker.addEventListener("tick", this.update.bind(this));
		}
		
		Main.SCROLL_SPEED = 3.0;
		Main.GRAVITY = 0.55;
		Main.FLAP_IMPULSE = -8.15;
		Main.MAX_VELOCITY = 15;
		
		Main.prototype.update = function(evt) {
			this.bird.update();
			this.ground.update();
			this.pipes.update();
			
			this.checkForBirdCollidingWithGround();
			this.checkForBirdCollidingWithPipes();
			this.checkForBirdPassingPipe();
		}
		
		Main.prototype.startGame = function() {
			this.score = 0;
			this.ground.startScrolling();
			this.pipes.setupStartPosition();
			this.pipes.startScrolling();
			this.bird.startFlying();
			this.ui.gameStart();
		}
		
		Main.prototype.birdHitGround = function() {
			this.bird.hitGround();
			this.ground.stopScrolling();
			this.pipes.stopScrolling();
			this.ui.gameOver();
		}
		
		Main.prototype.birdHitPipe = function() {
			this.bird.fallFromSky();
			this.ground.stopScrolling();
			this.pipes.stopScrolling();
			this.ui.triggerScreenFlash();
		}
		
		Main.prototype.userPressed = function(evt) {
			if (this.bird.isDead()) {
				this.startGame();
			} else {
				this.bird.flap();
			}
		}
		
		Main.prototype.checkForBirdCollidingWithGround = function() {
			if (this.bird.isDead() == false) {
				if (this.ground.isBirdTouchingGround(this.bird)) {
					this.birdHitGround();
				}
			}
		}
		
		Main.prototype.checkForBirdCollidingWithPipes = function() {
			if (this.bird.isDead() == false) {
				if (this.pipes.isBirdTouchingAPipe(this.bird)) {
					this.birdHitPipe();
				}
			}
		}
		
		Main.prototype.checkForBirdPassingPipe = function() {
			if (this.bird.isAlive()) {
				if (this.pipes.hasBirdPassedApproachingPipe(this.bird)) {
					this.pipes.setNextApproachingPipe();
					this.scoredPoint();
				}
			}
		}
		
		Main.prototype.scoredPoint = function() {
			this.score++;
			this.ui.updateScore(this.score);
		}
		
		var main = new Main();
		function Bird() {
			this.mc = exportRoot.birdve;
			this.initY = this.mc.y;
			this.state = "dead";
			this.velocity = 0;
			
			this.collisionPoints = [this.mc.hitt0, this.mc.hitt1, this.mc.hitt2,
									this.mc.hitt3, this.mc.hitt4, this.mc.hitt5,
									this.mc.hitt6, this.mc.hitt7, this.mc.hitt8];
			
			for (var i = 0; i < this.collisionPoints.length; i++) {
				this.collisionPoints[i].visible = false;
			}
		}
		
		Bird.ALIVE = 0;
		Bird.DYING = 1;
		Bird.DEAD = 2;
		
		Bird.MAX_UP_ANGLE = -22.5;
		Bird.MAX_DOWN_ANGLE = 90;
		
		Bird.prototype.isAlive = function() {
			return (this.state == "alive");
		}
		
		Bird.prototype.isDead = function() {
			return (this.state == "dead");
		}
		
		Bird.prototype.startFlying = function () {
			this.state = "alive";
			this.mc.y = this.initY;
			this.mc.play();
			this.velocity = 0;
			this.flap();
		}
		
		Bird.prototype.flap = function() {
			if (this.state == "alive" && this.mc.y > 0) {
				this.velocity = Main.FLAP_IMPULSE;
			}
		}
		
		Bird.prototype.update = function () {
			if (this.state == "alive" || this.state == "dying") {
				this.updateVelocity();
				this.updateRotation();
			}
		}
		
		Bird.prototype.updateVelocity = function() {
			this.velocity += Main.GRAVITY;
			
			if (this.velocity > Main.MAX_VELOCITY) {
				this.velocity = Main.MAX_VELOCITY;
			}
			
			this.mc.y += this.velocity;
		}
		
		Bird.prototype.hitTest = function(target) {
			for (var i = 0; i < this.collisionPoints.length; i++) {
				var pt = this.collisionPoints[i].localToLocal(0,0,target);
				var collision = target.hitTest(pt.x, pt.y);
				if (collision == true) {
					return true;
				}
			}
			
			return false;
		}
		
		Bird.prototype.hitGround = function() {
			this.state = "dead";
			this.mc.stop();
		}
		
		Bird.prototype.fallFromSky = function() {
			if (this.state == "alive") {
				this.state = "dying";
				this.velocity = 0;
			}
		}
		
		Bird.prototype.updateRotation = function() {
			if (this.velocity > 0) {
				var diff = Bird.MAX_DOWN_ANGLE - Bird.MAX_UP_ANGLE;
				var norm = this.velocity / Main.MAX_VELOCITY;
				this.mc.rotation = Bird.MAX_UP_ANGLE + (diff * norm);
			} else {
				this.mc.rotation = Bird.MAX_UP_ANGLE;
			}
		}
		
		Bird.prototype.getPosition = function() {
			return {x: this.mc.x, y: this.mc.y};
		}
		function Pipes() {
			this.scrolling = false;
			
			this.distanceBetweenPipes = exportRoot.pipe1.x - exportRoot.pipe0.x;
			this.leftBound = -exportRoot.pipe0.nominalBounds.width;
			
			this.maxPipeY = exportRoot.pipe0.y;
			this.minPipeY = exportRoot.pipe2.y;
		}
		
		Pipes.prototype.startScrolling = function() {
			this.scrolling = true;
			this.setupStartPosition();
			this.approachingPipe = this.pipes[0];
		}
		
		Pipes.prototype.stopScrolling = function() {
			this.scrolling = false;
		}
		
		Pipes.prototype.update = function() {
			if (this.scrolling == true) {
				this.updatePipePositions();
				this.checkLeftPipeIsOutsideScreen();
			}
		}
		
		Pipes.prototype.updatePipePositions = function() {
			for (var i = 0; i < this.pipes.length; i++) {
				var pipe = this.pipes[i];
				pipe.x -= Main.SCROLL_SPEED;
			}
		}
		
		Pipes.prototype.checkLeftPipeIsOutsideScreen = function() {
			var leftMostPipe = this.pipes[0];
			var rightMostPipe = this.pipes[2];
			if (leftMostPipe.x < this.leftBound) {
				leftMostPipe.x = rightMostPipe.x + this.distanceBetweenPipes;
				this.setRandomYPosition(leftMostPipe);
				this.pipes.shift();
				this.pipes.push(leftMostPipe);
			}
		}
		
		Pipes.prototype.setRandomYPosition = function(pipe) {
			var delta = this.minPipeY - this.maxPipeY;
			pipe.y = this.maxPipeY + Math.round(Math.random() * delta);
		}
		
		Pipes.prototype.setupStartPosition = function() {
			this.pipes = [
				exportRoot.pipe0,
				exportRoot.pipe1,
				exportRoot.pipe2
			];
			
			for (var i = 0; i < this.pipes.length; i++) {
				var pipe = this.pipes[i];
				pipe.x = (lib.properties.width * 1.5) + (i * this.distanceBetweenPipes);
				this.setRandomYPosition(pipe);
			}
		}
		
		Pipes.prototype.isBirdTouchingAPipe = function(bird) {
			for (var i = 0; i < this.pipes.length; i++) {
				if (bird.hitTest(this.pipes[i])) {
					return true;
				}
			}
			
			return false;
		}
		
		Pipes.prototype.setNextApproachingPipe = function() {
			for (var i = 0; i < this.pipes.length; i++) {
				if (this.pipes[i] == this.approachingPipe) {
					this.approachingPipe = this.pipes[i + 1];
					return;
				}
			}
		}
		
		Pipes.prototype.hasBirdPassedApproachingPipe = function(bird) {
			var birdXPosition = bird.getPosition().x;
			if (birdXPosition > this.approachingPipe.x) {
				return true;
			}
			
			return false;
		}
		function Ground() {
			this.scrolling = false;
			this.slices = [
				exportRoot.ground0, 
				exportRoot.ground1,
				exportRoot.ground2
			];
			this.sliceWidth = exportRoot.ground1.x - exportRoot.ground0.x;
			this.leftBound = exportRoot.ground0.x - this.sliceWidth;
		}
		
		Ground.prototype.update = function() {
			if (this.scrolling == true) {
				this.updateSlicePositions();
				this.checkLeftSliceIsOutsideScreen();
			}
		}
		
		Ground.prototype.startScrolling = function() {
			this.scrolling = true;
		}
		
		Ground.prototype.stopScrolling = function() {
			this.scrolling = false; 
		}
		
		Ground.prototype.updateSlicePositions = function() {
			for (var i = 0; i < this.slices.length; i++) {
				var slice = this.slices[i];
				slice.x -= Main.SCROLL_SPEED;
			}
		}
		
		Ground.prototype.checkLeftSliceIsOutsideScreen = function() {
			var firstSlice = this.slices[0];
			var lastSlice = this.slices[2];
			if (firstSlice.x < this.leftBound) {
				firstSlice.x = lastSlice.x + this.sliceWidth;
				this.slices.shift();
				this.slices.push(firstSlice);
			}
		}
		
		Ground.prototype.isBirdTouchingGround = function(bird) {
			for (var i = 0; i < this.slices.length; i++) {
				if (bird.hitTest(this.slices[i])) {
					return true;
				}
			}
			
			return false;
		}
		function UI() {
			this.scoreLabel = exportRoot.score;
			this.gameOverPrompt = exportRoot.gameOverPrompt;
			this.getReadyPrompt = exportRoot.getReadyPrompt;
			this.startInstructions = exportRoot.startInstructions;
			this.screenFlash = exportRoot.screenFlash;
			
			exportRoot.gameOverPrompt.visible = false;
			exportRoot.getReadyPrompt.visible = true;
			exportRoot.startInstructions.visible = true;
			exportRoot.screenFlash.visible = false;
		}
		
		UI.prototype.updateScore = function(score) {
			this.scoreLabel.text = score;
		}
		
		UI.prototype.gameStart = function() {
			this.gameOverPrompt.visible = false;
			this.getReadyPrompt.visible = false;
			this.startInstructions.visible = false;
			this.screenFlash.visible = false;
			this.updateScore(0);
		}
		
		UI.prototype.getReady = function() {
			this.gameOverPrompt.visible = false;
			this.getReadyPrompt.visible = true;
			this.startInstructions.visible = true;
			this.screenFlash.visible = false;
		}
		
		UI.prototype.gameOver = function() {
			this.gameOverPrompt.visible = true;
			this.getReadyPrompt.visible = false;
			this.startInstructions.visible = true; 
		}
		
		UI.prototype.triggerScreenFlash = function() {
			this.screenFlash.visible = true;
			this.screenFlash.alpha = 1;
			createjs.Tween.get(this.screenFlash).to({alpha:0}, 100);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(150,200);
	this.___camera___instance.depth = 0;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(1));

	// Screen Flash
	this.screenFlash = new lib.ScreenFlash();
	this.screenFlash.name = "screenFlash";
	this.screenFlash.parent = this;
	this.screenFlash.setTransform(150,200);
	this.screenFlash.cache(-152,-202,304,404);

	this.timeline.addTween(cjs.Tween.get(this.screenFlash).wait(1));

	// Score
	this.score = new cjs.Text("0", "bold 24px 'Arial Black'", "#FFFFFF");
	this.score.name = "score";
	this.score.textAlign = "center";
	this.score.lineHeight = 36;
	this.score.lineWidth = 121;
	this.score.parent = this;
	this.score.setTransform(150,9);

	this.timeline.addTween(cjs.Tween.get(this.score).wait(1));

	// Game Over
	this.gameOverPrompt = new lib.GameOver();
	this.gameOverPrompt.name = "gameOverPrompt";
	this.gameOverPrompt.parent = this;
	this.gameOverPrompt.setTransform(149.8,98.3,1,1,0,0,0,-1.2,12.3);
	this.gameOverPrompt.cache(-111,-9,220,42);

	this.timeline.addTween(cjs.Tween.get(this.gameOverPrompt).wait(1));

	// Get Ready
	this.getReadyPrompt = new lib.GetReady();
	this.getReadyPrompt.name = "getReadyPrompt";
	this.getReadyPrompt.parent = this;
	this.getReadyPrompt.setTransform(149.9,98.2,1,1,0,0,0,-1.1,12.2);
	this.getReadyPrompt.cache(-109,-8,215,41);

	this.timeline.addTween(cjs.Tween.get(this.getReadyPrompt).wait(1));

	// Start Instructions
	this.startInstructions = new lib.StartInstructions();
	this.startInstructions.name = "startInstructions";
	this.startInstructions.parent = this;
	this.startInstructions.setTransform(152.5,246.6,1,1,0,0,0,-0.5,3.6);
	this.startInstructions.cache(-127,-8,253,24);

	this.timeline.addTween(cjs.Tween.get(this.startInstructions).wait(1));

	// Bird
	this.birdve = new lib.birdve();
	this.birdve.name = "birdve";
	this.birdve.parent = this;
	this.birdve.setTransform(100.4,180.1,0.381,0.38,0,0,0,16.8,13.3);

	this.timeline.addTween(cjs.Tween.get(this.birdve).wait(1));

	// Ground
	this.ground0 = new lib.GroundSlice();
	this.ground0.name = "ground0";
	this.ground0.parent = this;
	this.ground0.setTransform(96.5,376,1,1,0,0,0,96.5,25);
	this.ground0.cache(-10,-10,212,70);

	this.ground1 = new lib.GroundSlice();
	this.ground1.name = "ground1";
	this.ground1.parent = this;
	this.ground1.setTransform(283.5,376,1,1,0,0,0,96.5,25);
	this.ground1.cache(-10,-10,212,70);

	this.ground2 = new lib.GroundSlice();
	this.ground2.name = "ground2";
	this.ground2.parent = this;
	this.ground2.setTransform(470.5,376,1,1,0,0,0,96.5,25);
	this.ground2.cache(-10,-10,212,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ground2},{t:this.ground1},{t:this.ground0}]}).wait(1));

	// Pipes
	this.pipe2 = new lib.Pipe();
	this.pipe2.name = "pipe2";
	this.pipe2.parent = this;
	this.pipe2.setTransform(330,250,1,1,0,0,0,27,0);

	this.pipe1 = new lib.Pipe();
	this.pipe1.name = "pipe1";
	this.pipe1.parent = this;
	this.pipe1.setTransform(150,200,1,1,0,0,0,27,0);

	this.pipe0 = new lib.Pipe();
	this.pipe0.name = "pipe0";
	this.pipe0.parent = this;
	this.pipe0.setTransform(-30,100,1,1,0,0,0,27,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pipe0},{t:this.pipe1},{t:this.pipe2}]}).wait(1));

	// Background
	this.instance = new lib.Background();
	this.instance.parent = this;
	this.instance.setTransform(161.8,200.1,1,1,0,0,0,161.8,200.1);
	this.instance.cache(-12,-3,347,406);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(90,48,627,654);
// library properties:
lib.properties = {
	id: '2339CA6BF20B4F0EBA34BDD023A88A09',
	width: 300,
	height: 400,
	fps: 60,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"images/herve.png", id:"herve"}
	],
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
an.compositions['2339CA6BF20B4F0EBA34BDD023A88A09'] = {
	getStage: function() { return exportRoot.getStage(); },
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


// Virtual camera API : 

AdobeAn.VirtualCamera = new function() {
	var _camera = new Object();
	function VirtualCamera(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined )
	{
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VirtualCamera.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VirtualCamera.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VirtualCamera.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VirtualCamera.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VirtualCamera.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VirtualCamera.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VirtualCamera.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VirtualCamera.prototype.resetZoom = function() {
	this.setZoom(100);
};

VirtualCamera.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VirtualCamera.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VirtualCamera.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VirtualCamera.prototype.resetRotation = function() {
this.setRotation(0);
};

VirtualCamera.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VirtualCamera.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VirtualCamera.prototype.getZDepth = function() {
	return this.camera.depth;
}
VirtualCamera.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VirtualCamera.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VirtualCamera.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
if(this.camera.pinToObject != undefined) {
this.camera.pinToObject.pinOffsetX = offsetX;
this.camera.pinToObject.pinOffsetY = offsetY;
this.camera.pinToObject.pinOffsetZ = offsetZ;
}
};

VirtualCamera.prototype.unpinCamera = function() {
this.camera.pinToObject = undefined;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VirtualCamera(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
VirtualCamera.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
