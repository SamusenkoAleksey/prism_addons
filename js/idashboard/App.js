
    function App() {
    	this.init();
	};

	App.prototype = Object.create(Helper.prototype);
	App.prototype.constructor = App;


	App.prototype.init = function(){
	   this.clipBoardJs();
	   new ClipBoard_TD();
	   new Mass_Change_TD();
	   new Auto_Change_TD();
	};

// })();

