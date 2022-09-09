const form = document.getElementById('frm');

form.addEventListener('submit', ValidateLoginForm);


function ValidateLoginForm(e) {
    // console.log(e);
    e.preventDefault();
    console.log(form['uname'].value);
    console.log(form['pwd'].value);

    const userName = form['uname'].value;
    const password = form['pwd'].value;
    const age = form['age'].value;

    form['uname'].parentElement.classList.remove('not-valid');
    form['pwd'].parentElement.classList.remove('not-valid');

    if (userName && password) {

    } else {
        if (!userName) {
            form['uname'].parentElement.classList.add('not-valid');
        }

        if (!password) {
            form['pwd'].parentElement.classList.add('not-valid');
        }
    }
}


// const p = new Promise((r, re) => {
//     setTimeout(() => {
//         re();
//     }, 5000);
// });



// p.then(r => {
//     console.log('promise completed');
// }).catch(e => {
//     alert('something went wrong');
//     console.error(e);
// });

try {
    console.log(1);
    console.log(2);
    throw 'some error';
    console.log(4);
} catch (error) {
    alert('something went wrong');
}