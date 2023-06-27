document.querySelector('#click').onclick = function()
{
    fetch('https://api.chucknorris.io/jokes/random')
    .then((response=> response.json()))
    .then((json)=>{
        let div = document.createElement('div');
        div.innerHTML=json.value;
        document.querySelector('body').appendChild(div)
    })
}

fetch('https://api.chucknorris.io/jokes/categories')
.then((response=>response.json()))
.then((data)=>{
    let categories =document.querySelector('#categories');
    for(let items of data)
    {
        let option =document.createElement('option');
        option.innerText=items
        categories.appendChild(option)
    }
   
})

let categories =document.querySelector('#categories');   
categories.onchange = function(e)
{
    let category = e.currentTarget.value
    fetch('https://api.chucknorris.io/jokes/random?category={'+category+'}',{
        method:"GET",
        node :'cors',
        headers:{}
    })
    .then((response=>response.json()))
    .then((data)=>{
        console.log(data);
    })
  
}