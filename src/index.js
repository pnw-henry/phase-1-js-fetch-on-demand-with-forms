const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const textInput = document.querySelector('input#searchByID').value;
        // Or const textInput = e.target.children[1].value;
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');
        console.log(textInput);
    
        if (textInput > 0 && textInput < 4){
            fetch(`http://localhost:3000/movies/${textInput}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                title.innerText = data.title;
                summary.innerText = data.summary;
                })

        }
        else {
            title.innerText = 'Invalid Entry';
            summary.innerText = 'Please Enter a number between 1 and 3';

        }
    


    })
}


document.addEventListener('DOMContentLoaded', init);