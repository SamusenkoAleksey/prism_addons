	function Auto_Change_TD(){
		if(this.getActiveTab() != "remoteaccess"){
			return
		}
		this.inputFieldHtml = document.getElementById("inputValue").value;

	
		this.questionText = "<br><label class=\"primary\">Auto Change of Tunnel Details</label>";
		// this.buttonYes = "<br><input type='button' value='Yes' id='yes'>";
		// this.buttonNo = "<input type='button' value='No'>";
		this.doAutoChangeOfTD = "<input type='checkbox' id='autoChangeBox'>";
		this.divBlocHtml = document.getElementById('insertedBlock');
		this.creatingHtmlElements();
		this.addingEvent();
		this.doAutoChangeOfTDHTML = document.getElementById('autoChangeBox');

		if(this.findCookieValue('defaultautochange') == "yes"){
			this.autoChangeTunnelDetails(this.inputFieldHtml);
			this.doAutoChangeOfTDHTML.checked = true;
			// this.toggleButton()
		}
	};

	Auto_Change_TD.prototype = Object.create(App.prototype);
	Auto_Change_TD.prototype.constructor = Auto_Change_TD;

	Auto_Change_TD.prototype.creatingHtmlElements = function (){

		this.divBlocHtml.insertAdjacentHTML('beforeend', this.questionText);
		this.divBlocHtml.insertAdjacentHTML('beforeend', this.doAutoChangeOfTD);
		// this.divBlocHtml.insertAdjacentHTML('beforeend', this.buttonNo);
	};

	Auto_Change_TD.prototype.addingEvent = function (){

		this.divBlocHtml.addEventListener('click', this.yesOrNoEvens.bind(this), false);
	}
	

	Auto_Change_TD.prototype.yesOrNoEvens = function (e){

		var target = e && e.target || e.srcElement,
			targetId = target.id;



			if(targetId == "autoChangeBox" && target.checked == true){
				document.cookie = "defaultautochange=yes; max-age=604800";
				location.reload();
				console.log('turn on');
			}else if(targetId == "autoChangeBox" && target.checked == false){
				document.cookie = "defaultautochange=no; max-age=604800";
				location.reload();
			}
	}

	// Auto_Change_TD.prototype.toggleButton = function (chosenButton){
	// 	chosenButton.style.cssText = "backgroundColor: blue";
	// }






