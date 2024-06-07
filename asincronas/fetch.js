fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(function(response)  {
    return response.json()
})
.then(function (data){
    console.log(data);
})
//   .then(response => response.json())
//   .then(data => console.log(data));