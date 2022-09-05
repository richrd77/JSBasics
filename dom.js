// let mybuttons = document.querySelectorAll('button');

// function ClickEvent(event) {
//     console.log(event.target.innerText);
//     // alert('button clicked');
// }

// mybuttons.forEach(mybutton => {
//     mybutton.addEventListener('click', ClickEvent);
// });


let mybuttons = document.querySelectorAll('.grid-btn');

mybuttons.forEach(mybutton => {
    mybutton.addEventListener('click', DeleteRowEvent);
});


function DeleteRowEvent(event) {
    console.log(event.target.getAttribute('data-index'));
    let choice = confirm('are you sure you want to delete this?');
    if(choice) {
        document.getElementById('tbl').deleteRow(event.target.getAttribute('data-index'));
    }
}