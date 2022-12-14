// const request = new XMLHttpRequest();
// request.onreadystatechange = function () {
//     if (this.readyState === 4) {
//         console.log(this.responseText);
//         console.log(this.responseText.name);
//         //parsing [deserialization] string -> object 
//         //[serialization] string <- object

//         //json -> javaScript Object Notation
//         const obj = JSON.parse(this.responseText);
//         obj.forEach(i => addrow(i));
//         // addrow(obj[0])
//         // console.log(obj[0].name);
//     }
// }
// request.open('GET', 'https://jsonplaceholder.typicode.com/users');
// request.send();



fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' })
    .then(r => r.text()).then(r1 => {
        // console.log(r1)
        const obj = JSON.parse(r1);
        console.log(obj)
        obj.forEach(i => addrow(i));
    });


function addrow(user) {
    const tr = document.createElement('tr');
    const firstCol = document.createElement('td');
    const secondCol = document.createElement('td');
    const thirdCol = document.createElement('td');


    firstCol.innerText = user.name;
    secondCol.innerText = user.username;
    thirdCol.innerText = user.email;


    tr.appendChild(firstCol);
    tr.appendChild(secondCol);
    tr.appendChild(thirdCol);

    document.getElementById('tbl').appendChild(tr);
}

const form = document.getElementById('frm');
form.addEventListener('submit', SaveData);

function SaveData(e) {
    e.preventDefault();
    const newUser = { name: form['name'].value, username: form['username'].value, email: form['email'].value };
    console.log(newUser)
    PerformPostRequest(newUser);
}

function PerformPostRequest(user) {
    // const request = new XMLHttpRequest();
    // request.onreadystatechange = function () {
    //     if (this.readyState === 4) {
    //         alert('successfully performed POST operation');
    //     }
    // }
    // request.open('POST', 'https://jsonplaceholder.typicode.com/users');
    // request.send(JSON.stringify(user));

    fetch('https://jsonplaceholder.typicode.com/users/1', { method: 'DELETE' })
    .then(r => r.text()).then(r1 => {
        // console.log(r1)
        alert('successfully performed DELETE operation');
    });
}