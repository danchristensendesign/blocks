

var scrnBut = {
	imgInd: 0,
	ignore: false,
	action: function(){
		//do nothing
	}
};

var menuBut = {
	imgInd: 1,
	ignore: false,
	action: function(){
		//load menu
		paused = (paused)? 0: 1;
		console.log(paused);
		drawBase();
	}
};
var restartBut = {
	imgInd: 2,
	ignore: false,
	action: function(){
		//loadLevel(false);
	}
};
var undoBut = {
	imgInd: 3,
	ignore: false,
	action: function(){
		//undo
	}
};
var movesBut = {
	imgInd: 4,
	ignore: true,
	action: function(){
		//toggle hints
	}
};

var prevBut = {
	imgInd: 5,
	ignore: false,
	action: function(){
		//toggle hints
	}
};

var nextBut = {
	imgInd: 6,
	ignore: false,
	action: function(){
		//toggle hints
	}
};

var userBut = {
	imgInd: 7,
	ignore: false,
	action: function(){
		//toggle hints
	}
};
