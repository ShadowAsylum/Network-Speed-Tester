var Chart = new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: [],
    datasets: [{ 
        data: [],
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


var postId = 1;

var hide = document.getElementById("hide");

var imageAddr = "https://ffwallpaper.com/wallup/skatepark/skatepark-3.jpg"; 
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

Chart.update();
      Chart.data.labels.push(postId++);
      Chart.data.datasets[0].data.push(speedMbps);
      Chart.update();

    }}
