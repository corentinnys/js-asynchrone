document.querySelector('#click').onclick = function()
{
    fetch('code.json')
    .then((response=> response.json()))
    .then((json)=>{
        let ul = document.createElement('ul');
        document.querySelector('body').appendChild(ul)

        for (items of json){
            let li = document.createElement('li');
            li.innerHTML = items;
            ul.appendChild(li)
        }
    })
}