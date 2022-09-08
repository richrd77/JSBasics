// let btn = document.getElementById('btn');
// let txt = document.getElementById('txt');
// let div = document.getElementById('result');

// // add click event for the button
// btn.addEventListener('click', BtnClickEvent);


// // Function implementation
// function BtnClickEvent() {
//     // alert(txt.value);
//     if (div.childNodes.length <= 5) {
//         const newLbl = document.createElement('label');
//         newLbl.innerText = txt.value
//         div.appendChild(newLbl);
//         txt.value = '';
//     }
// }


let btn = document.getElementById('btn');
let txt = document.getElementById('txt');
let tbl = document.getElementById('tbl');
let tbody = document.getElementById('tbody');


function addRow() {
    const tr = document.createElement('tr');
    const firstCol = document.createElement('td');
    const secondCol = document.createElement('td');
    const deleteBtn = document.createElement('button');

    firstCol.innerText = txt.value;
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', DeleteRow);

    secondCol.appendChild(deleteBtn);

    tr.appendChild(firstCol);
    tr.appendChild(secondCol);

    tbody.appendChild(tr);

    txt.value = '';
}

function DeleteRow(event) {
    console.log(event.target);
    const tr = event.target.parentElement.parentElement;
    tbody.removeChild(tr);
}

btn.addEventListener('click', addRow);