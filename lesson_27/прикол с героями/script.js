const lBtn = document.querySelectorAll(".letter"); // сохраняем все кнопочки
const number = lBtn.length
console.log (lBtn, number)

for (let i = 0; i < number; i++) {
    lBtn[i].addEventListener("click", function(event){
        const bIH = lBtn[i].innerHTML; //получаем нажатую букву
        makeSound(bIH); // 
    })
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key)
})

const makeSound = (key) => {
    switch (key){
        case "а":
            const letA = new Audio("sounds/warden.mp3");
            letA.play();
            break;
        case "т":
            const letB = new Audio("sounds/tinker.mp3");
            letB.play();
            break;
        case "к":
            const letC = new Audio("sounds/antimage.mp3");
            letC.play();
            break;
    }
}