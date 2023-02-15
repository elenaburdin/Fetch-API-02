document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getHeroes').addEventListener('click', getHeroes);
document.getElementById('getPosts').addEventListener('click', getPosts);
document.getElementById('getTodos').addEventListener('click', getTodos);
document.getElementById('addPost').addEventListener('submit', addPost);






// Get txt file
function getText() {
    fetch('sample.txt')
        .then((res) => res.text())
        .then((data) => {
            document.getElementById('output').innerHTML = data
        })
        .catch((err) => console.log(err));
}

// Get json file
function getHeroes() {
    fetch('heroes.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2 class="mb-4">Marvel Heroes</h2>'
            data.forEach(function (hero) {
                output += `
            <ul class="list-group mb-3">
                    <li class="list-group-item">ID: ${hero.id}</li>
                    <li class="list-group-item">Name: ${hero.name}</li>
                    <li class="list-group-item">Email: ${hero.alterEgo}</li>
                    <li class="list-group-item">Species: ${hero.species}</li>
                    <li class="list-group-item">Place Of Origin: ${hero.placeOfOrigin}</li>
            </ul>`;
            });
            document.getElementById('output').innerHTML = output;
        })
}

// Get API
function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2 class="mb-4">Posts</h2>'
            data.forEach(function (post) {
                output += `
                      <div class="card card-body mb-3">
                      <h3>${post.title}</h3>
                      <p>${post.body}</p>
                      </div>`
            });
            document.getElementById('output').innerHTML = output;
        })
}

// Get API
function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2 class="mb-4">Posts</h2>'
            data.forEach(function (post) {
                output += `
                      <div class="card card-body mb-3">
                      <h3>${post.title}</h3>
                      <p>${post.body}</p>
                      </div>`
            });
            document.getElementById('output').innerHTML = output;
        })
}

// Get API
function getTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2 class="mb-4">Todos</h2>'
            data.forEach(function (todo) {
                output += `
                      <div class="card card-body mb-3">
                      <p>User Id: ${todo.userId}</p>
                      <p>ID: ${todo.id}</p>
                      <p>Title: ${todo.title}</p>
                      <p>Completed: ${todo.completed}</p>
                      </div>`
            });
            document.getElementById('output').innerHTML = output;
        })
}

function addPost(e) {
    e.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ title: title, body: body })
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
}










