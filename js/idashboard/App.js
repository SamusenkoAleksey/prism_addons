
    function App() {
    	this.init();
	};

	App.prototype = Object.create(Helper.prototype);
	App.prototype.constructor = App;


	App.prototype.init = function(){
	   this.clipBoardJs();
	   new ClipBoard_TD();
	   new Autochange_TD();
	};

// })();

