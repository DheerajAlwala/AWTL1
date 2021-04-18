function fetchDetails(){
    const username=document.getElementById("uname").value;
    const url=`https://api.github.com/users/${username}/repos`
    document.write("<table border='1'>");
    fetch(url).then((response)=>{return response.json()}).then(data=>{
         document.write("<tr><td>Name</td><td>Description</td></tr>")
        for(let x of data)
        {
            document.write(`<tr><td>${x.name}</td><td>${x.description}</td></tr>`)
        }
        document.write("</table>")
        }).catch(err=>console.log(err))
}