(function () {
    let input = document.getElementById("num");
    let button = document.getElementById("doThing");
    let result = document.getElementById("result");

    window.addEventListener("load", () => {
        button.addEventListener("click", () => {
            let rand = Math.ceil(Math.random() * parseInt(input.value));
            result.innerText = `Your result is ${rand}`;
            button.setAttribute("disabled", "disabled");
        })
    })
})()