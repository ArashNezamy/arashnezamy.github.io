setInterval(()=>{
    navigator.getBattery()
    .then(function(battery) {
        var batteryLevel = battery.level *100 + "%";
        var battery_daler = document.getElementById('battery_daler');
        battery_daler.innerHTML = batteryLevel;
    });
},1000);