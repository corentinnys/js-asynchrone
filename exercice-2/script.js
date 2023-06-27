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
    console.log("https://api.chucknorris.io/jokes/random?category="+category);
    
    fetch("https://api.chucknorris.io/jokes/random?category="+category)
   
    .then((response=>response.json()))
    .then((data)=>{
        localStorage.setItem("list", data.value);
        let div = document.createElement('div');
        div.innerHTML=data.value;
        document.querySelector('body').appendChild(div)
    })
  
}
let list = localStorage.getItem('list');
console.log(list)
if(list!=null){
    let div = document.createElement('div');
        div.innerHTML=list;
        document.querySelector('body').appendChild(div)
}



document.querySelector('#reset').onclick = function(){
    localStorage.removeItem('list');

}