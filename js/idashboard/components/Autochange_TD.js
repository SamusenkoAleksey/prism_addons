	function Autochange_TD(){
		if(this.getActiveTab() != "remoteaccess"){
			return
		};
		this.tunnelDetails = document.querySelectorAll('td.tunnel_details');
		this.changeLoginButton = "<input type=\"button\" value=\"Change\" id=\"change\" class=\"test\">";
		this.returnButton = "<input type=\"button\" value=\"Defualt Value\" id=\"return\" class=\"test\">";
		this.inputField = "<input type=\"text\" value=\"root\" id=\"inputValue\" class=\"test\">";
		this.divBlock = "<div id=\"insertedBlock\"></div>";
		this.header = "</br><label class=\"primary\">Auto Change of Tunnel Details</label></br>";
		this.formBlock = document.querySelector("form");

		this.creatinButtons();
		this.changingCss();
	};

	Autochange_TD.prototype = Object.create(App.prototype);
	Autochange_TD.prototype.constructor = Autochange_TD;

	Autochange_TD.prototype.creatinButtons = function (){

		this.formBlock.insertAdjacentHTML('afterend', this.divBlock);
		var divBlocHtml = document.getElementById('insertedBlock');

		divBlocHtml.insertAdjacentHTML('afterbegin', this.header);
    	divBlocHtml.insertAdjacentHTML('beforeend', this.returnButton);
    	divBlocHtml.insertAdjacentHTML('beforeend', this.inputField);
    	divBlocHtml.insertAdjacentHTML('beforeend', this.changeLoginButton);
	}

	Autochange_TD.prototype.changingCss = function (){

		var inputFieldHtml = document.getElementById("inputValue"),
        headerElement = document.querySelector('label.primary');

        inputFieldHtml.style.fontSize = "0.7em";
    	inputFieldHtml.style.width = "10em";
    	inputFieldHtml.style.margin = "0px 15px";
	}

	
	