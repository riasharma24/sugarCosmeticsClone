document.addEventListener('DOMContentLoaded',function(){
    var buttons=document.querySelectorAll('button')
    var links=document.querySelectorAll('a')
    buttons.forEach(function(button)
    {
        button.addEventListener('click',function(){
            alert('Oops, not available!')
        })
    })

    links.forEach(function(link){
        link.addEventListener('click',function(){
            alert('Nada!')
        })
    })
})
