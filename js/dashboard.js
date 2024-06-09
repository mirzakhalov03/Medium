const $form = document.querySelector("#post-form");
const userAcc = document.querySelector('.user-acc');



const createPost = (e) => {
    e.preventDefault();

    const title = document.querySelector("#title").value;
    const image = document.querySelector("#image").value;
    const description = document.querySelector("#description").value;

    console.log(title, image, description);

    fetch("https://blogpost-server-production-d92d.up.railway.app/api/v1/blogs/", {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, image, description })
    }).then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.status === 'success') {
                alert("Post created successfully");
                location.reload();
            }
        })
}



$form.addEventListener("submit", createPost);
