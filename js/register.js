const $form = document.querySelector('#form');

function User (firstName, lastName, email, password) {
    this.name = firstName;
    this.lastName = lastName; 
    this.email = email;
    this.password = password;
}

const registerUser = (e) => {
    e.preventDefault();

    const children = e.target.children;
    const firstName = children[0].value;
    const lastName = children[1].value;
    const email = children[2].value;
    const password = children[3].value;
    let newUser = new User(firstName, lastName, email, password);
    fetch("https://blogpost-server-production-d92d.up.railway.app/api/v1/user/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.status === 'success') {
            alert("User created successfully");
            location.replace("http://127.0.0.1:5500/pages/login.html");
        } else {
            alert(data.message);
        }
        // location.replace("http://127.0.0.1:5500/pages/login.html");
    })


}

$form.addEventListener('submit', registerUser);

