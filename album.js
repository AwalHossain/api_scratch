// fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
// .then (response => response.json())
// .then (data => show(data))



// const photo = document.getElementById('photo');
// function show(data){
//     for(const single of data){

//         const title = single.url;
//         // console.log(photo.title);
//    photo.innerHTML += `<img src="${title}">`

//     }
// }

const premikas= { name: 'keka ferdousi' , cars: { brand: 'toyota'} }

const {brand} = premikas?.cars
console.log(brand);