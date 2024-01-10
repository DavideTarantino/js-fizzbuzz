const ul = document.querySelector('ul.list')
for( let i = 1; i <= 100; i++ ){

        if((i % 5 || i % 3) === 0){
            const element = `<li style="color: violet; border: 1px solid black; background-color: red;"> <span class="d-none">${i}</span> FizzBuzz </li>`
            ul.innerHTML += element  

        }else if((i % 5) === 0){
            const element = `<li style="color: red; border: 1px solid black; background-color: yellow"> <span class="d-none">${i}</span> Buzz </li>`
            ul.innerHTML += element 
        
        }else if((i % 3) === 0){
            const element = `<li style="color: blue; border: 1px solid black; background-color: green"> <span class="d-none">${i}</span> Fizz </li>`
            ul.innerHTML += element
        
        }else{
            const element = `<li style="color : white; border: 1px solid black; background-color: purple"> ${i} </li>`
            ul.innerHTML += element
    }
}






