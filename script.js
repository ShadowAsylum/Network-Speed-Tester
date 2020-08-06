var i = "time";
var iNumber = 0;
var hour = {};
            var hide = document.getElementById("hide");

//JUST AN EXAMPLE, PLEASE USE YOUR OWN PICTURE!
var imageAddr = "http://www.kenrockwell.com/contax/images/g2/examples/31120037-5mb.jpg"; 
var downloadSize = 4995374; //bytes

function ShowProgressMessage(msg) {
    if (console) {
        if (typeof msg == "string") {
            
        } else {
            for (var i = 0; i < msg.length; i++) {
                
            }
        }
    }
    
    var oProgress = document.getElementById("progress");
    if (oProgress) {
        var actualHTML = (typeof msg == "string") ? msg : msg.join("<br />");
        oProgress.innerHTML = actualHTML;
    }
}

setInterval(MeasureConnectionSpeed,60000);
setInterval(InitiateSpeedDetection,60000);
function InitiateSpeedDetection() {

    window.setTimeout(MeasureConnectionSpeed, 1);
};    

if (window.addEventListener) {
    window.addEventListener('load', InitiateSpeedDetection, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', InitiateSpeedDetection);
}

function MeasureConnectionSpeed() {
    var startTime, endTime;
    var download = new Image();
    download.onload = function () {
        endTime = (new Date()).getTime();
        showResults();
    }
    
    download.onerror = function (err, msg) {
        ShowProgressMessage("Invalid image, or error downloading");
    }
    
    startTime = (new Date()).getTime();
    var cacheBuster = "?nnn=" + startTime;
    download.src = imageAddr + cacheBuster;
    
    function showResults() {
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = downloadSize * 8;
        var speedBps = (bitsLoaded / duration).toFixed(2);
        var speedKbps = (speedBps / 1024).toFixed(2);
        var speedMbps = (speedKbps / 1024).toFixed(2);
        ShowProgressMessage([
hide.innerHTML="Updates Every Minute",
            "Your connection speed is:", 
            speedBps + " bps", 
            speedKbps + " kbps", 
            speedMbps + " Mbps"
            
        ]);
i = "time";
iNumber = iNumber + 1;
i = i + iNumber;
console.log(i)
var card_id = i;
hour[card_id] = speedMbps;

        
  /*  
for (var i = 0; i < 24; ++i) {
    hour[i] = speedMbps;

}
*/

new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
    datasets: [{ 
        data: [hour.time1,hour.time2,hour.time3,hour.time4,hour.time5,hour.time6,hour.time7,hour.time8,hour.time9,hour.time10,hour.time11,hour.time12,hour.time13,hour.time14,hour.time15,hour.time16,hour.time17,hour.time18,hour.time19,hour.time20,hour.time21,hour.time22,hour.time23,hour.time24],
        label: "Speed",
        borderColor: "#3e95cd",
        fill: true,
            fontColor: 'white',
      },
    ]
  },
  options: {
    title: {
      display: true,
      text: 'WiFi Speed'
    },
    layout: {
            padding: {
                left: 20,
                right:25,
                top: 20,
                bottom: 0
            },
        scales: {
      xAxes: [{
        display: true,
        gridLines: {

        },
      }],
      yAxes: [{
        display: true,
        gridLines: {

        },
      }]
    },

    
  }
}})
}
}