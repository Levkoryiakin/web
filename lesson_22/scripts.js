// const teacher = {
//     birthYear: 1999,
//     calcAge: function(){
//         return 2023 - this.birthYear;
    
//     }
// };

// console.log(teacher.calcAge());

// const teacher = {
//     firstName : "Лол",
//     birthYear: 1999,
//     calcAge: function(){
//         this.age = 2023 - this.birthYear //Добавили свойство
//         return this.age;
    
//     }
// };

// console.log(teacher.calcAge());
// delete teacher.firstName //удалили нафек
// console.log(teacher)

// if ("birthYear" in teacher){
//     console.log("Е")
// }

// let chel1 = {
//     name: "чел",
//     rost: 1.75,
//     ves: 70,

//     calcImt: function(){
//         this.imt = this.ves / this.rost ** 2
//         return this.imt;
//     }
// }

// let chel2 = {
//     name: "поц",
//     rost: 1.80,
//     ves: 80,
//     calcImt: function(){
//         this.imt = this.ves / this.rost ** 2
//         return this.imt;
//     }

// }
// if(chel1.imt > chel2.imt){
//     console.log("красавец")
// }if(chel1.imt < chel2.imt){
//     console.log("ты тоже неплох")
// }

// // imt1 = chel1.ves / chel1.rost ** 2
// // imt2 = chel2.ves / chel2.rost ** 2



// console.log(chel1.calcImt())
// console.log(chel2.calcImt())

// imt1 = chel1.calcImt();
// imt2 = chel2.calcImt();

// if (imt1 > imt2){
//     console.log(chel1.name + "победа")
// }else if (imt1 < imt2){
//     console.log(chel2.name + "проигрыш")
// }

// for( let jump=1; jump<=10; jump++ ){
//     console.log("прыг" + jump);
// }

    let luck = ["1920","2013","2020","1996","1630"]
    let ages = [];


    for(let jump=4; jump-0; jump--){
        ages.push(2023 - luck[jump])
    }

    console.log(ages)

    // 92 слайд