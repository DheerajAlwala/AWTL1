function findCases()
        {
            document.getElementById("myData").innerHTML="";
            const city=document.getElementById("count").value;
        fetch("http://api.weatherapi.com/v1/current.json?key=16da9f929c164b1c90e73808211204&q="+city+"&aqi=no")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        }
        function appendData(data) {
            var mainContainer = document.getElementById("myData");
            mainContainer.innerHTML="Location="+data.location.name+" Temp in C="+data.current.temp_c+" Condition="+data.current.condition.text;
        }