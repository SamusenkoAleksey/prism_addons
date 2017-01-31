	function Mass_Change_TD(){
		if(this.getCurrentWebAddress("active tab") != "remoteaccess" || !isNaN(parseInt(this.getCurrentWebAddress('after active tab'))) == true || this.getCurrentWebAddress('after active tab') == "conn"){
			return
		};
		// console.log();
		
		//creating HTML elements as strings
		this.tunnelDetails = document.querySelectorAll('td.tunnel_details');
		this.changeLoginButton = "<input type=\"button\" value=\"Change\">";
		this.returnButton = "<input type=\"button\" value=\"Defualt Value\">";
		this.inputField = "<input type=\"text\" value=\"root\" id=\"inputValue\">";
		this.divBlock = "<div id=\"insertedBlock\"></div>";
		this.header = "</br><label class=\"primary\">Mass Change of Tunnel Details</label></br>";
		this.formBlock = document.querySelector("form");

		//create our div in the web page
		this.formBlock.insertAdjacentHTML('afterend', this.divBlock);

		//getting the div as a HTML element
		this.divBlocHtml = document.getElementById('insertedBlock');

		//creating other buttons/inputs
		this.creatingButtons();

		this.divBlocHtml = document.getElementById('insertedBlock');
		this.inputFieldHtml = document.getElementById("inputValue");

		//A little bit of CSS changes....
		this.changingCss();

		//
		this.addingEvent();

	};

	Mass_Change_TD.prototype = Object.create(App.prototype);
	Mass_Change_TD.prototype.constructor = Mass_Change_TD;

	Mass_Change_TD.prototype.creatingButtons = function (){

		this.divBlocHtml.insertAdjacentHTML('afterbegin', this.header);
    	this.divBlocHtml.insertAdjacentHTML('beforeend', this.returnButton);
    	this.divBlocHtml.insertAdjacentHTML('beforeend', this.inputField);
    	this.divBlocHtml.insertAdjacentHTML('beforeend', this.changeLoginButton);
	}

	Mass_Change_TD.prototype.changingCss = function (){

        this.inputFieldHtml.style.fontSize = "0.7em";
    	this.inputFieldHtml.style.width = "10em";
    	this.inputFieldHtml.style.margin = "0px 15px";
	}

	Mass_Change_TD.prototype.addingEvent = function (){

		this.divBlocHtml.addEventListener('click', this.buttonsEvents.bind(this), false);
	}

	Mass_Change_TD.prototype.buttonsEvents = function (e){

		var target = e && e.target || e.srcElement,
			value = target.value;

		if(value == "Change"){
			this.autoChangeTunnelDetails(this.inputFieldHtml.value);
		}else if(value == "Defualt Value"){
			this.autoChangeTunnelDetails("CAMERA_USERNAME");
		}

	};