	function ClipBoard_TD(){
		if(this.getActiveTab() != "remoteaccess"){
			return
		}
		this.tunnelDetails = document.querySelectorAll('td.tunnel_details');
		this.setAutoClipBoard();
		this.setNotification();
	};

	ClipBoard_TD.prototype = Object.create(App.prototype);
	ClipBoard_TD.prototype.constructor = ClipBoard_TD;

	ClipBoard_TD.prototype.setAutoClipBoard = function(){

		for(var i = 0, arrLength = this.tunnelDetails.length ; i < arrLength ; i++ ){

			var currentTunnelDetails = this.tunnelDetails[i].innerText,
                currentTunnelDetailsHtml = this.tunnelDetails[i];

            if(currentTunnelDetails.slice(0, 3) == "ssh"){
            	currentTunnelDetailsHtml.className += " btn";
                currentTunnelDetailsHtml.id = "id" + i;
                currentTunnelDetailsHtml.setAttribute("data-clipboard-target", "#id" + i);
            };    
		};
	};

	ClipBoard_TD.prototype.setNotification = function() {

		var tableContainer = document.querySelector('.table-container');

			tableContainer.addEventListener('click', this.showNotification, false);

		

	};





	new App();

})();