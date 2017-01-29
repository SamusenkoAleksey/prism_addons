	function Default_AutoChange_TD(){
		if(this.getActiveTab() != "remoteaccess"){
			return
		}
		this.inputFieldHtml = document.getElementById("inputValue").value;
		if(this.findCookieValue('defaultautochange') == "yes"){
			this.autoChangeTunnelDetails(this.inputFieldHtml);
			// this.toggleButton()
		}
	
		this.questionText = "<br><label class=\"primary\">Would you like to set up changing by default ?</label>";
		this.buttonYes = "<br><input type='button' value='Yes' id='yes'>";
		this.buttonNo = "<input type='button' value='No'>";
		this.divBlocHtml = document.getElementById('insertedBlock');

		this.creatingHtmlElements();
		this.addingEvent();

	};

	Default_AutoChange_TD.prototype = Object.create(App.prototype);
	Default_AutoChange_TD.prototype.constructor = Default_AutoChange_TD;

	Default_AutoChange_TD.prototype.creatingHtmlElements = function (){

		this.divBlocHtml.insertAdjacentHTML('beforeend', this.questionText);
		this.divBlocHtml.insertAdjacentHTML('beforeend', this.buttonYes);
		this.divBlocHtml.insertAdjacentHTML('beforeend', this.buttonNo);
	};

	Default_AutoChange_TD.prototype.addingEvent = function (){

		this.divBlocHtml.addEventListener('click', this.yesOrNoEvens.bind(this), false);
	}

	Default_AutoChange_TD.prototype.yesOrNoEvens = function (e){

		var target = e && e.target || e.srcElement,
			value = target.value;

			if(value == "Yes"){
				document.cookie = "defaultautochange=yes; max-age=604800";
				location.reload();
			}else if(value == "No"){
				document.cookie = "defaultautochange=no; max-age=604800";
				location.reload();
			}
	}

	// Default_AutoChange_TD.prototype.toggleButton = function (chosenButton){
	// 	chosenButton.style.cssText = "backgroundColor: blue";
	// }





