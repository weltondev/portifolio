const titulo = document.querySelector(".dev");

function textWriter(element) {
    const textArray = element.textContent.split("");
    element.textContent = "";
    textArray.forEach((letter, i) => {
        setTimeout(() =>{
            element.textContent += letter;
        }, 150 * i);
    });

    console.log(textArray);
}

textWriter(titulo);