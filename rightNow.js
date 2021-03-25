
console.log('1')



function setMessage(eType) {
  document.querySelector('.entryTypeComposeResponse').click();

    setTimeout(function() {

        var bodyMessage = "<br>";

        if (eType == "reminder") {

            bodyMessage = "Hope you are doing well. <br><br>I wanted to follow up and check if you had an opportunity to review my last response to proceed to close our case.";

        } else if (eType == "moreinfo") {

            bodyMessage = "Hope you are doing well. <br><br>I am glad to assist you. I would like to ask you for more information to investigate <br>  &nbsp;&nbsp;&nbsp;&nbsp;&#8269;	Is every user facing this issue or just a specific user? <br> &nbsp;&nbsp;&nbsp;&nbsp;&#8269;	Is this issue occurring when using another machine and/or network? <br> &nbsp;&nbsp;&nbsp;&nbsp;&#8269;<br> &nbsp;&nbsp;&nbsp;&nbsp;&#8269;<br> &nbsp;&nbsp;&nbsp;&nbsp;&#8269; <br><br>Any extra information, context, or screenshot of the error that you are facing would be useful.  ";

        } else if (eType == "closure") {

            bodyMessage = "Glad to assist you, I will proceed to close our case.";

        } else if(eType=="investigate"){

            bodyMessage = "Hope you are doing well. I am glad to assist you. <br><br>I am able to replicate the same error at my end. I am checking this further within my team. I will get back to you as soon as I have an update.";

        } else if(eType=="update"){

            bodyMessage = "Hope you are doing well, I would like to give you a follow up.<br><br>We are investigating the issue, currently we have review Data Warehouse and Raw Data, turns out there are inconsistences in the data, further investigation is need it and I will keep you updated.";

        } else if(eType=="noresponse"){

            bodyMessage = "Hope you are doing well,<br> I am reaching out about our case. It is been a while since I have heard from you, so I wanted to reach out and let you know the case will be closed. <br><br>Please feel welcome to open a new one if you need any assistance.";

        } else {

            bodyMessage = "Hope you are doing well. <br><br>TVT<br><br>Please let me know if the above is useful to proceed to close our case";

        }
        // var name = document.querySelector("[id^='Incident_CI']").innerText
        var name = document.querySelectorAll(".oj-flex-bar")[document.querySelectorAll(".oj-flex-bar").length - 4].innerText;
        if(name.includes("Support")){        
            name = document.querySelectorAll(".oj-flex-bar")[document.querySelectorAll(".oj-flex-bar").length - 6].innerText;
        } else if(name.includes("Experience")){        
            name = document.querySelector("[id^='Incident_CI']").innerText;
        }     

        name = name.substring(0, name.indexOf(' '));
        var message = "<br>Hi  {{name}}<br><br>";
        message += bodyMessage
        message += "<br><br>Regards,<br>Alberto Orozco <br><br><b>Alberto Orozco</b> | Technical Support Engineer | <b style='color:#f00;'>Adobe</b><br><br>   ";
        message = message.replace("{{name}}", name)
        var prev = document.querySelector("[id$='contents']").querySelector("div").innerHTML;
        document.querySelector("[id$='contents']").querySelector("div").innerHTML = "<div style='max-width:600px'>" + message + prev + "</div>";

    }, 1500)


};

function createButton(eIcon, eName, efunction) {
    var btnImg = document.createElement("IMG");
    btnImg.src = eIcon;
    btnImg.setAttribute("style", "display: inline-block; width: 16px; height: 16px;");

    var btnFull = document.createElement("DIV"); // Create a <button> element
    btnFull.setAttribute('class', 'oj-button-label')
    btnFull.appendChild(btnImg)


    var btnText = document.createElement("SPAN");
    btnText.setAttribute('class', 'oj-button-text')
    btnText.innerText = eName;
    btnFull.appendChild(btnText)

//    btnText.setAttribute('onclick', efunction)


    var btnWrapper = document.createElement('button');
    btnWrapper.setAttribute('class', 'oj-button-jqui oj-button oj-component oj-enabled oj-default oj-button-half-chrome oj-button-text-icon-start oj-component-initnode')
    btnWrapper.appendChild(btnFull)

    var btnWrapperWrapper = document.createElement('SPAN');
        btnWrapperWrapper.setAttribute('onclick', efunction)

    btnWrapperWrapper.appendChild(btnWrapper)

    return btnWrapperWrapper;
};

function appenBts(eButton) {
	var menus = document.querySelectorAll('.commonToolbarButtons > div > span');

 for (var i = 0; i < menus.length; i++) {
     menus[i].style.display = "none"
 }


    document.querySelector(".commonToolbarButtons").querySelector('div.oj-flex-bar-middle').appendChild(createButton('https://img.icons8.com/fluent/48/000000/response.png', 'Response', "setMessage('response')"));
    document.querySelector(".commonToolbarButtons").querySelector('div.oj-flex-bar-middle').appendChild(createButton('https://img.icons8.com/cute-clipart/64/000000/info-popup.png', 'More Info', "setMessage('moreinfo')"));
    document.querySelector(".commonToolbarButtons").querySelector('div.oj-flex-bar-middle').appendChild(createButton('https://img.icons8.com/cute-clipart/64/000000/fine-print.png', 'Investigate', "setMessage('investigate')"));
    document.querySelector(".commonToolbarButtons").querySelector('div.oj-flex-bar-middle').appendChild(createButton('https://img.icons8.com/fluent/48/000000/approve-and-update.png', 'Update', "setMessage('update')"));
    document.querySelector(".commonToolbarButtons").querySelector('div.oj-flex-bar-middle').appendChild(createButton('https://img.icons8.com/plasticine/100/000000/add-reminder.png', 'Reminder', "setMessage('reminder')"));
    document.querySelector(".commonToolbarButtons").querySelector('div.oj-flex-bar-middle').appendChild(createButton('https://img.icons8.com/fluent/50/000000/completed-task.png', 'Closure', "setMessage('closure')"));
    document.querySelector(".commonToolbarButtons").querySelector('div.oj-flex-bar-middle').appendChild(createButton('https://img.icons8.com/dusk/64/000000/logout-rounded-down--v1.png', 'No Response', "setMessage('noresponse')"));

 //  document.querySelector('.commonToolbarButtons > div > span div').addEventListener('click', function(event) {
 //       setMessage();
 //   });


//	var menus = document.querySelector('.commonToolbarButtons ').querySelectorAll('.oj-button-text');

// for (var i = 0; i < menus.length; i++) {
//     menus[i].innerText = menus[i].innerText.replace('Add a','').replace('Add','')
// }

    document.querySelector('.oj-flex-bar-end').remove();
    document.querySelector('.oj-flex-bar-end').remove();
    document.querySelector('.oj-flex-bar-end').remove();
    document.querySelector('.oj-flex-bar-end').remove();
}


function observerRun() {

    // Select the node that will be observed for mutations
    const targetNode = document.getElementById('primaryTabsetContainer').querySelector('div > ul');

    // Options for the observer (which mutations to observe)
    const config2 = {
        attributes: true,
        childList: true,
        subtree: true
    };

    // Callback function to execute when mutations are observed
    const callback = function(mutationsList, observer) {
        // Use traditional 'for loops' for IE 11
        for (const mutation of mutationsList) {
            //  if (mutation.type === 'childList') {
            if (mutation.previousSibling) {
                if (mutation.previousSibling.nodeName) {
                    if (mutation.previousSibling.nodeName === 'LI') {
                        //  console.log('A child node has been added or removed.');

                        if(document.querySelector(".primary-tab-header").innerText==" SAAS EMEA v1.0 \n Incident ")
                        { 
                            console.log("pass")
                            setTimeout(appenBts, 2000)
                        }
                        
                    }
                }
            }
            // }
            // else if (mutation.type === 'attributes') {
            //     console.log('The ' + mutation.attributeName + ' attribute was modified.');
            // }

        }
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config2);

    // Later, you can stop observing
    //observer.disconnect();

};

// if(document.getElementById('primaryTabsetContainer')){
//   setTimeout(observerRun, 3000);  
// }else{
// setTimeout(observerRun, 5000);
// }



function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {

  var startTimeInMs = Date.now();

  (function loopSearch() {
    if (document.querySelector(selector) != null) {
      callback();
      return;
    }
    else {
  console.log('trying');        
      setTimeout(function () {
        if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
          return;
        loopSearch();
      }, checkFrequencyInMs);
    }
  })();
};


//waitForElementToDisplay("#primaryTabsetContainer",function(){alert("Hi");},1000,10000);
waitForElementToDisplay("#primaryTabsetContainer",observerRun,1500,20000);

// var script = document.createElement('script');
// script.src = "https://drive.google.com/uc?export=view&id=1wOKYk4rx5eOobe7UpAAcX73iY6rlUvOg";
// document.head.appendChild(script); //or something of the likes
