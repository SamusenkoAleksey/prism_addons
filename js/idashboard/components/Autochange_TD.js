	function Autochange_TD(){
		if(this.getActiveTab() != "remoteaccess"){
			return
		};
		//creating HTML elements as strings
		this.tunnelDetails = document.querySelectorAll('td.tunnel_details');
		this.changeLoginButton = "<input type=\"button\" value=\"Change\">";
		this.returnButton = "<input type=\"button\" value=\"Defualt Value\">";
		this.inputField = "<input type=\"text\" value=\"root\" id=\"inputValue\">";
		this.divBlock = "<div id=\"insertedBlock\"></div>";
		this.header = "</br><label class=\"primary\">Auto Change of Tunnel Details</label></br>";
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

	Autochange_TD.prototype = Object.create(App.prototype);
	Autochange_TD.prototype.constructor = Autochange_TD;

	Autochange_TD.prototype.creatingButtons = function (){

		this.divBlocHtml.insertAdjacentHTML('afterbegin', this.header);
    	this.divBlocHtml.insertAdjacentHTML('beforeend', this.returnButton);
    	this.divBlocHtml.insertAdjacentHTML('beforeend', this.inputField);
    	this.divBlocHtml.insertAdjacentHTML('beforeend', this.changeLoginButton);
	}

	Autochange_TD.prototype.changingCss = function (){

        this.inputFieldHtml.style.fontSize = "0.7em";
    	this.inputFieldHtml.style.width = "10em";
    	this.inputFieldHtml.style.margin = "0px 15px";
	}

	Autochange_TD.prototype.addingEvent = function (){

		this.divBlocHtml.addEventListener('click', this.buttonsEvents.bind(this), false);
	}

	Autochange_TD.prototype.buttonsEvents = function (e){

		var target = e && e.target || e.srcElement,
			value = target.value;

		if(value == "Change"){
			this.autoChangeTunnelDetails(this.inputFieldHtml.value);
		}else if(value == "Defualt Value"){
			this.autoChangeTunnelDetails("CAMERA_USERNAME");
		}

	};