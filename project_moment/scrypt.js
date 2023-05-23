// cake = document.querySelectorAll (".cake");
// makaroni = document.querySelectorAll (".makaroni");
// icecream = document.querySelectorAll (".icecream");
// wafer = document.querySelectorAll (".wafer");
// praga = document.querySelectorAll (".praga");
// napoleon = document.querySelectorAll (".napoleon");
// medovik = document.querySelectorAll (".medovik");
// actions = document.querySelectorAll (".actions");
// discs = document.querySelectorAll (".discs");

let tovari = document.querySelectorAll(".tovar");
console.log("товары:", tovari)
let basket = document.querySelector(".basket");

tovari.forEach(tovar => {
  tovar.addEventListener("click", () => {
    console.log("check")
    const copyTovar = tovar.cloneNode(true);  // создание копии
    console.log(copyTovar)
    basket.append(copyTovar);  // добавление в конец корзины
  })
});


