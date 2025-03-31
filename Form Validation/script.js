const btn = document.getElementById('btn');
const guide_msg = document.getElementById('guide_msg');

btn.addEventListener('click', () => {
    
    let name = document.getElementById('name').value.trim().replace(/\s+/g, ' '); 
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    let confirm_password = document.getElementById('confirm_password').value.trim();

    const name_sequence = /^[A-Za-z\s]+$/;

    if (!name || !email || !password || !confirm_password) {
        guide_msg.innerHTML = "*All fields must be filled.";
    } else if (!name_sequence.test(name)) {
        guide_msg.innerHTML = '* Name field must contain only alphabets!';
    } else if (password.length < 8) {
        guide_msg.innerHTML = '* Password must be at least 8 characters long with One one lowercase and One lowercase also Special character and atleast one number.';
    } else if (password !== confirm_password) {
        guide_msg.innerHTML = '* Confirm Password must match Password.';
    } else {
        guide_msg.innerHTML = "Form submitted successfully!";
        guide_msg.style.color = "green";
    }

});
