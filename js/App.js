
    function App() {
    	this.init();
	};

	App.prototype = Object.create(Helper.prototype);
	App.prototype.constructor = App;


	App.prototype.init = function(){
	   this.getActiveTab()
	   this.clipBoardJs();

	}

    new App();

// })();

