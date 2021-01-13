// const form = document.querySelector('form');
// const emailError = document.querySelector('.email.error');
// const passwordError = document.querySelector('.password.error');
const cb = document.getElementById('cb');
const p = document.getElementById('p');

cb.addEventListener('input',()=>{
    if(cb.checked)
        p.setAttribute('type','text')
    else
    p.setAttribute('type','password')
})
// form.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     emailError.textContent = '';
//     passwordError.textContent = '';
//     const email = form.email.value;
//     const password = form.password.value;
//     try {
//         const res = await fetch('/login', {
//             method: 'POST',
//             body: JSON.stringify({ email, password }),
//             headers: { 'Content-type': 'application/json' }
//         });
//         const data = await res.json();
//         console.log(data);
//         if (data.errors) {
//             emailError.textContent = data.errors.email;
//             passwordError.textContent = data.errors.password;
//         }
//         if (data.user) {
//             // console.log(data.user);
//             location.assign('/');
//         }
//     } catch (error) {
//         console.log(error);
//     }
// });
