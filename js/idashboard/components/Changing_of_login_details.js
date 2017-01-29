// ==UserScript==
// @name         Auto Change of Tunnel Details add-on
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Aleksey Samusenko
// @match        https://idashboard.prismsl.net/remoteaccess/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    var changeLoginButton = "<input type=\"button\" value=\"Change\" id=\"change\" class=\"test\">",
        returnButton = "<input type=\"button\" value=\"Defualt Value\" id=\"return\" class=\"test\">",
        inputField = "<input type=\"text\" value=\"root\" id=\"inputValue\" class=\"test\">",
        formBlock = document.querySelector("form"),
        divBlock = "<div id=\"insertedBlock\"></div>",
        header = "</br><label class=\"primary\">Auto Change of Tunnel Details</label></br>";

//Creating a button

    formBlock.insertAdjacentHTML('afterend', divBlock);

    var divBlocHtml = document.getElementById('insertedBlock');

    divBlocHtml.insertAdjacentHTML('afterbegin', header);
    divBlocHtml.insertAdjacentHTML('beforeend', returnButton);
    divBlocHtml.insertAdjacentHTML('beforeend', inputField);
    divBlocHtml.insertAdjacentHTML('beforeend', changeLoginButton);

//A listtle bit of CSS...
    
    var inputFieldHtml = document.getElementById("inputValue"),
        headerElement = document.querySelector('label.primary');

    inputFieldHtml.style.fontSize = "0.7em";
    inputFieldHtml.style.width = "10em";
    inputFieldHtml.style.margin = "0px 15px";
    //divBlocHtml.style.marginBottom = "10px";
    

//Creating event
    
    divBlocHtml.addEventListener('click', clicking, false);

//Replacing function

    function clicking (e){
        var target = e && e.target || e.srcElement,
            buttonId = target.id;


        if(buttonId == "change"){
            var inputValue = document.querySelector('#inputValue').value;
            replaceLogin(inputValue);
        }else if(buttonId == "return"){
            replaceLogin("CAMERA_USERNAME");
        }

    };

    function replaceLogin(login){
        var tunnelDetails = document.querySelectorAll('td.tunnel_details'),
            loginDetails = login;

       
        
        for(var i = 0, arrLength = tunnelDetails.length ; i < arrLength ; i++ ){

            var currentTunnelDetails = tunnelDetails[i].innerText,
                currentTunnelDetailsHtml = tunnelDetails[i];
                // current Tunnel Details in iDashboard
                if(currentTunnelDetails.slice(0, 3) == "ssh"){
                    var firstPart = currentTunnelDetails.substr(0, currentTunnelDetails.indexOf("l") + 1),
                    lastPart = currentTunnelDetails.substr(currentTunnelDetails.lastIndexOf("-"), currentTunnelDetails.length),
                    finalTunnelDetails = firstPart + " " + loginDetails + " " + lastPart;
                    //setting "root" as as login
                    tunnelDetails[i].innerText = finalTunnelDetails;
                    
                    //using "clipboard.js"
                    currentTunnelDetailsHtml.className += " btn";
                    currentTunnelDetailsHtml.id = "id" + i;
                    currentTunnelDetailsHtml.setAttribute("data-clipboard-target", "#id" + i);
                    currentTunnelDetailsHtml.setAttribute("data-clipboard-demo", "");
                    console.log(currentTunnelDetailsHtml);

                };       

        };
    };

})();