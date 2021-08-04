function changeDate(){
    let date = new Date();
    let year  = date.getFullYear()
    document.getElementById("dateYear").innerHTML = year;
}
changeDate();

/*
function changeThis(){
    const dots = window.setInterval( function() {
        let wait = document.getElementById("wait");
        if ( wait.innerHTML.length > 3 ) 
            wait.innerHTML = "";
        else 
            wait.innerHTML += ".";
        }, 100);
    
}
changeThis();

*/
const fetchSomeData = new Promise((resolve, reject) =>{
    if(!allgood){
        reject("error fetching data");
    } else{
        resolve({
            name: "",
            message: "Why are you looking at the console and not at my work?"
        })
    }
});

//consuming a promise
fetchSomeData.then(fetchedData =>{
   console.log(fetchedData)
}).catch(err =>{
    console.error(err);
});

