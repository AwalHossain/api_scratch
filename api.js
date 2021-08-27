
const listItems = document.getElementById('listItems')
const postItem = document.getElementById('post')
function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(json => console.log(json.title))
}

function user(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())
    .then (data => loadUser(data))


}

function loadUser(ee){

    const data = ee;
console.log(data);

    for(const single of data){
        console.log(single.name);
        console.log(listItems);
        const li = document.createElement('li');
        li.innerText =`name: ${ single.name} Email: ${ single.email}`;
        listItems.appendChild(li)
    }

}


function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then (response => response.json())
    .then (data => displayPost (data))
}
loadPost()

function displayPost (data){
console.log(data);
for(const post of data){
    console.log(post);
    // const title = document.createElement('h3');
    console.log(postItem);
    postItem.innerHTML +=`<h3>${post.title}</h3>
            <p>${post.body}</p>
    `
}
}

function addPost (){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title:'foo',
            body: 'bar',
            userId:'1'
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',

        }
    })
    .then(response => response.json())
    .then(json => console.log(json))
}

addPost()