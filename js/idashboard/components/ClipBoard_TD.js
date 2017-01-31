	function ClipBoard_TD(){
		if(this.getCurrentWebAddress('active tab') != "remoteaccess" || this.getCurrentWebAddress('after active tab') == 'conn'){
			return
		}
		this.tunnelDetails = document.querySelectorAll('td.tunnel_details');
		this.setAutoClipBoard();
		// this.setNotification();
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
                currentTunnelDetailsHtml.setAttribute("data-clipboard-demo", "");
            };    
		};
	};

	// ClipBoard_TD.prototype.setNotification = function() {

	// 	var tableContainer = document.querySelector('.table-container');

	// 	tableContainer.addEventListener('click', this.showNotification, false);
	// };

	// ClipBoard_TD.prototype.showNotification = function(e) {

	// 	var target = e && e.target || e.srcElement,
	// 		spanPopUp = "<span class='popuptext' id='myPopup'>A simple popup!</span>";



	// 	if(target.classList.contains('btn') && !target.classList.contains('tooltipped') && !target.classList.contains('tooltipped-s')){
	// 		//adding popup span
	// 		target.insertAdjacentHTML('beforeend', spanPopUp);


	// 	}else{
	// 		return
	// 	}
		
		
	// }



	new App();

})();