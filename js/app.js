const $post = document.querySelector(".post");
const navBtns = document.querySelector(".nav__btns");

if (localStorage.getItem('token')) {
    navBtns.innerHTML = `
    <a href="../pages/dashboard.html" class="auth">Dashboard</a>
    <a href="../pages/logout.html" class="auth">Logout</a>
    `
}



const renderData = (post) => {
    post.forEach((post) => {
        console.log(post._id)
        $post.innerHTML += `
        <a href="../pages/blog.html?blog-id=${post._id}" style="text-decoration: none; color: white">
            <div class="card">
                <div class="card__image">
                    
                    <img src="${post.image}" alt="">
                </div>
                <div class="card__text">
                    <p class="card__title">${post.title}</p>
                    <p>${post.description}</p>
                </div>
                <div class="card__avatar">
                    <div class="image-div">
                        <img src="../img/userPng.png" alt="I">
                        <img src="${post.author.image}" alt="I">
                    </div>
                    <div class="author">
                        <p>Anonymous User</p>
                        <span>author</span>
                    </div>
                </div>
            </div>
        </a>
            
        `
    })


}

fetch("https://blogpost-server-production-d92d.up.railway.app/api/v1/blogs")
    .then(response => response.json())
    .then(data => {
        let post = data.data
        // console.log(post)
        renderData(post)
    })