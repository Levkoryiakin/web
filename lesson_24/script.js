
 
// let num = 3.1415
// console.log(num.toFixed(20))
// console.log(num.toFixed(3))
 
// let num2 = 6.35
// console.log(num2.toFixed(6))
 
// let inp = document.
// querySelector(".chiki-pike")
// inp.value ="чикипике"
 
// function myFunction() {
//     document.querySelector(".chiki-pike").value = "Хаха ты лох"
// }
 
let max_life = 20
let life = 20; // Счет
let computer = Math.trunc(Math.random() * 100) + 1; //  счет компьютера
console.log(computer)
 
// increase - увеличивать -> инкримент(--)
// decrease - уменьшать -> декримент(--)
 
let inp_el = document.querySelector(".inp"); //сохранили input
let score_el = document.querySelector(".score") // сохранили счет
console.log("score=", score_el)
let record_el = document.querySelector(".record") // сохранили рекорд
console.log(record_el)
score_el.innerHTML = life;  //запись счета в html
 
function game_over(){
  if (life <=0) {
    bt.disabled = true
  }
}
 
function qwer() {
  let user = inp_el.value // фиксируем value input'a
 
  if (user == computer) {
      q.innerHTML = user;
      inp_el.value = "Угадал";
      alert("Чемпион")
      if (record_el.innerHTML == "-") {
        record_el.innerHTML = max_life - life
 
      }
 
      else {
        if (record_el.innerHTML < max_life - life){
          record_el.innerHTML = max_life - life + 1
 
        }
      }
  }
 
  else if (user < computer) {
    life--;
    score_el.innerHTML = life
    game_over();
  }
  else {
    life--;
    score_el.innerHTML = life;
    score_el.innerHTML = life
    game_over();
  }
}
