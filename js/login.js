const $form = document.querySelector('#form');



const loginUser = (e) => {
    e.preventDefault();
    const children = e.target.children;
    const email = children[0].value;
    const password = children[1].value;
    fetch("https://blogpost-server-production-d92d.up.railway.app/api/v1/user/login", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    .then(response => response.json())
    .then(data => {
        localStorage.setItem("token", data.data.token)
        console.log(data.data.token);
        if (data.status === 'success') {
            alert("User logged in successfully");
            location.replace("http://127.0.0.1:5500/pages/dashboard.html");
        } else {
            alert(data.message);
        }
    })
    
}

$form.addEventListener('submit', loginUser);