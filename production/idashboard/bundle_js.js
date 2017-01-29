(function() {
	//'use strict';
	function Helper () {
		
	};

	Helper.prototype.getActiveTab = function() {

		var currentWebAddres = window.location.href,
			splittedWebAddress = currentWebAddres.split("/"),
			activeTab = splittedWebAddress[3];
			
			return activeTab;

	};

	Helper.prototype.clipBoardJs = function() {
	
		!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Clipboard=e()}}(function(){var e,t,n;return function e(t,n,i){function o(a,c){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!c&&l)return l(a,!0);if(r)return r(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var u=n[a]={exports:{}};t[a][0].call(u.exports,function(e){var n=t[a][1][e];return o(n?n:e)},u,u.exports,e,t,n,i)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<i.length;a++)o(i[a]);return o}({1:[function(e,t,n){function i(e,t){for(;e&&e.nodeType!==o;){if(e.matches(t))return e;e=e.parentNode}}var o=9;if(Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}t.exports=i},{}],2:[function(e,t,n){function i(e,t,n,i,r){var a=o.apply(this,arguments);return e.addEventListener(n,a,r),{destroy:function(){e.removeEventListener(n,a,r)}}}function o(e,t,n,i){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&i.call(e,n)}}var r=e("./closest");t.exports=i},{"./closest":1}],3:[function(e,t,n){n.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},n.nodeList=function(e){var t=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===t||"[object HTMLCollection]"===t)&&"length"in e&&(0===e.length||n.node(e[0]))},n.string=function(e){return"string"==typeof e||e instanceof String},n.fn=function(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t}},{}],4:[function(e,t,n){function i(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!c.string(t))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(e))return o(e,t,n);if(c.nodeList(e))return r(e,t,n);if(c.string(e))return a(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function o(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function r(e,t,n){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}function a(e,t,n){return l(document.body,e,t,n)}var c=e("./is"),l=e("delegate");t.exports=i},{"./is":3,delegate:2}],5:[function(e,t,n){function i(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName)e.focus(),e.setSelectionRange(0,e.value.length),t=e.value;else{e.hasAttribute("contenteditable")&&e.focus();var n=window.getSelection(),i=document.createRange();i.selectNodeContents(e),n.removeAllRanges(),n.addRange(i),t=n.toString()}return t}t.exports=i},{}],6:[function(e,t,n){function i(){}i.prototype={on:function(e,t,n){var i=this.e||(this.e={});return(i[e]||(i[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){function i(){o.off(e,i),t.apply(n,arguments)}var o=this;return i._=t,this.on(e,i,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),i=0,o=n.length;for(i;i<o;i++)n[i].fn.apply(n[i].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),i=n[e],o=[];if(i&&t)for(var r=0,a=i.length;r<a;r++)i[r].fn!==t&&i[r].fn._!==t&&o.push(i[r]);return o.length?n[e]=o:delete n[e],this}},t.exports=i},{}],7:[function(t,n,i){!function(o,r){if("function"==typeof e&&e.amd)e(["module","select"],r);else if("undefined"!=typeof i)r(n,t("select"));else{var a={exports:{}};r(a,o.select),o.clipboardAction=a.exports}}(this,function(e,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=n(t),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),c=function(){function e(t){i(this,e),this.resolveOptions(t),this.initSelection()}return a(e,[{key:"resolveOptions",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function e(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function e(){var t=this,n="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=document.body.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[n?"right":"left"]="-9999px";var i=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.addEventListener("focus",window.scrollTo(0,i)),this.fakeElem.style.top=i+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=(0,o.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function e(){this.fakeHandler&&(document.body.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function e(){this.selectedText=(0,o.default)(this.target),this.copyText()}},{key:"copyText",value:function e(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function e(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function e(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function e(){this.removeFake()}},{key:"action",set:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function e(){return this._action}},{key:"target",set:function e(t){if(void 0!==t){if(!t||"object"!==("undefined"==typeof t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function e(){return this._target}}]),e}();e.exports=c})},{select:5}],8:[function(t,n,i){!function(o,r){if("function"==typeof e&&e.amd)e(["module","./clipboard-action","tiny-emitter","good-listener"],r);else if("undefined"!=typeof i)r(n,t("./clipboard-action"),t("tiny-emitter"),t("good-listener"));else{var a={exports:{}};r(a,o.clipboardAction,o.tinyEmitter,o.goodListener),o.clipboard=a.exports}}(this,function(e,t,n,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}var s=o(t),u=o(n),f=o(i),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),h=function(e){function t(e,n){r(this,t);var i=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return i.resolveOptions(n),i.listenClick(e),i}return c(t,e),d(t,[{key:"resolveOptions",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText}},{key:"listenClick",value:function e(t){var n=this;this.listener=(0,f.default)(t,"click",function(e){return n.onClick(e)})}},{key:"onClick",value:function e(t){var n=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s.default({action:this.action(n),target:this.target(n),text:this.text(n),trigger:n,emitter:this})}},{key:"defaultAction",value:function e(t){return l("action",t)}},{key:"defaultTarget",value:function e(t){var n=l("target",t);if(n)return document.querySelector(n)}},{key:"defaultText",value:function e(t){return l("text",t)}},{key:"destroy",value:function e(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}]),t}(u.default);e.exports=h})},{"./clipboard-action":7,"good-listener":4,"tiny-emitter":6}]},{},[8])(8)});

    	var clipboard = new Clipboard('.btn');

	};

	Helper.prototype.autoChangeTunnelDetails = function(login){
		//taking all tunnel details
		var tunnelDetails = document.querySelectorAll('td.tunnel_details');

		for(var i = 0, arrLength = tunnelDetails.length ; i < arrLength ; i++ ){

			//value of the current tunnel details
			var currentTunnelDetails = tunnelDetails[i].innerText;

			//checking if it's 'ssh' tunnel
			if(currentTunnelDetails.slice(0, 3) == "ssh"){

				var firstPart = currentTunnelDetails.substr(0, currentTunnelDetails.indexOf("l") + 1),
                    lastPart = currentTunnelDetails.substr(currentTunnelDetails.lastIndexOf("-"), currentTunnelDetails.length),
                    finalTunnelDetails = firstPart + " " + login + " " + lastPart;

                    //changing login details
                    tunnelDetails[i].innerText = finalTunnelDetails;
			}
		}
	};

	Helper.prototype.findCookieValue = function(cookieName) {
            var allcookies = document.cookie; 
            
            var pos = allcookies.indexOf(cookieName + "="); 

            // Если cookie с указанным именем найден, извлечь его значения.
            if (pos != -1) {
                var start = pos + cookieName.length + 1;
                var end = allcookies.indexOf(";", start); 

                if (end == -1) {
                    end = allcookies.length;
                }

                var value = allcookies.substring(start, end);

                return decodeURIComponent(value);
            }
     };

    function App() {
    	this.init();
	};

	App.prototype = Object.create(Helper.prototype);
	App.prototype.constructor = App;


	App.prototype.init = function(){
	   this.clipBoardJs();
	   new ClipBoard_TD();
	   new Autochange_TD();
	   new Default_AutoChange_TD();
	};

// })();


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
	function Default_AutoChange_TD(){
		if(this.getActiveTab() != "remoteaccess"){
			return
		}
		//this.tunnelDetails = document.querySelectorAll('td.tunnel_details');
		this.questionText = "<br><label class=\"primary\">Would you like to set up changing by default ?</label>";
		this.buttonYes = "<br><input type='button' value='Yes'>";
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
			}else if(value == "No"){
				document.cookie = "defaultautochange=no; max-age=604800";
			}
	}







	function ClipBoard_TD(){
		if(this.getActiveTab() != "remoteaccess"){
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