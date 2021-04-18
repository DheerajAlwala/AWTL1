function fetchDetails(){
    const country=document.getElementById("country").value;
    const url=`https://api.covid19api.com/live/country/${country}`
    document.write("<table border='1'>");
    fetch(url).then((response)=>{return response.json()}).then(data=>{
         document.write("<tr><td>Province</td><td>Date</td><td>Active</td><td>Deaths</td><td>Recovered</td></tr>")
        for(let x of data)
        {
            document.write(`<tr><td>${x.Province}</td><td>${x.Date}</td><td>${x.Active}</td><td>${x.Deaths}</td><td>${x.Recovered}</td></tr>`)
        }
        document.write("</table>")
        }).catch(err=>console.log(err))
    }