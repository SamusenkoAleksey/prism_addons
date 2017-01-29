	function ClipBoard_TD(){
		if(this.getActiveTab() != "remoteaccess"){
			return
		}
		this.setAutoClipBoard();
	};

	ClipBoard_TD.prototype = Object.create(App.prototype);
	ClipBoard_TD.prototype.constructor = ClipBoard_TD;

	ClipBoard_TD.prototype.setAutoClipBoard = function(){

		var tunnelDetails = document.querySelectorAll('td.tunnel_details');

		for(var i = 0, arrLength = tunnelDetails.length ; i < arrLength ; i++ ){

			var currentTunnelDetails = tunnelDetails[i].innerText,
                currentTunnelDetailsHtml = tunnelDetails[i];

            if(currentTunnelDetails.slice(0, 3) == "ssh"){
            	currentTunnelDetailsHtml.className += " btn";
                currentTunnelDetailsHtml.id = "id" + i;
                currentTunnelDetailsHtml.setAttribute("data-clipboard-target", "#id" + i);
            };    
		};
	}

	new App();

})();