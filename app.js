let pallate = document.querySelector("#canvas");
let button = document.querySelector("#button");
let para = document.querySelector('.para')


function returnRandomColor() {
    let hexTemplate = "0123456789ABCDEF";
    var result = "#";
    for (let i = 0; i < 6; i++) {
		result = result + hexTemplate[Math.floor(Math.random()* 16)];
	}

    console.log(result)
    return result
}

button.addEventListener("click", () => {
	pallate.style.backgroundColor = returnRandomColor();
    button.style.backgroundColor = result;
});

