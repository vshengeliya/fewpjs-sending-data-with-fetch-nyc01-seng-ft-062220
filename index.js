const users = http:"//localhost:3000/users"

function submitData(name, email){

    let options = {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name:name, email:email
        })
    };
    
    fetch(users, options)
    .then(resp => resp.json())
    .then(console.log)


}// f submitData


