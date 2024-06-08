const $res = document.querySelector(".res");




const url = location.search;
const postId = new URLSearchParams(url).get("blog-id");


const renderData = (post) => {
    console.log(post)
    $res.innerHTML = `
    <div class="blog__wrapper">
        <div class="blog__top">
            <h1>${post.title}</h1>
            <p>${post.tags}</p>
        </div>
        <div class="blog__img">
            <img src="${post.image}" alt="">
        </div>
        <div class="blog__text">
            <p>${post.description}</p>
        </div>
    </div>
    `
    
}

const loadData = () => {
    fetch(`https://blogpost-server-production-d92d.up.railway.app/api/v1/blogs/${postId}`)
        .then(response => response.json())
        .then(data => {
            let post = data.data
            renderData(post)
        }) 
}

loadData()
