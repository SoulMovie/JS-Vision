// for (let i=1; i<=5; i++){
//     console.log(i);
// }
// for (let i=10; i>=1; i+=2){
//     console.log(i);
// }
// let sum = 0;
// for(let i = 0; i < 30; i++) {
//     sum += i;
// }
// console.log(sum);

// ------------------------------------
// let sum = 0
// for(let i = 1; i <=50; i +=2){
//     sum +=i
// }
// console.log(sum)
// ------------------------------------
// let count = 0;
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0) {
//         count ++;
//     }
// }
// console.log(count);

// for(let i=1; i<=100; i++){
//     if (i>20 && i%4 ===0 && i%6===0){
//         console.log(i);
//         break;
//     }
// }

// for (let i = 1; i <=30; i++){
//     if (i%5 ===0){
//         continue;
//     }
// }
// let studentCount = +prompt('Enter your student count');
// if(studentCount >0){
//     let sum = 0; highLevel = 0; others = 0;
//     for(let i = 1; i <= studentCount; i++){
//         let grade = +prompt('Enter your grade');
//         if(!(grade >= 1&& grade<=12)){
//             alert("error");
//             i--;
//             continue;
//
//         }
//         if(grade>=7){
//             highLevel ++;
//         }
//         else{
//             others++;
//         }
//         sum+=grade;
//     }
//     console.log(sum);
//     console.log(sum/studentCount);
// }
//-----------------------------------------------
let studentCount = +prompt('Enter your student count');

if (studentCount > 0) {
    let sum = 0;
    let highResults = 0;
    let midResults = 0;
    let lowResults = 0;
    let max = 0;
    let min = 100;
    let first100 = 0;

    for (let i = 1; i <= studentCount; i++) {
        let grade = +prompt('Enter your grade');

        if (!(grade >= 0 && grade <= 100)) {
            alert('error');
            i--;
            continue;
        }

        sum += grade;

        if (grade >= 90) {
            highResults++;
        }
        else if (grade >= 60) {
            midResults++;
        }
        else {
            lowResults++;
        }

        if (grade > max) {
            max = grade;
        }

        if (grade < min) {
            min = grade;
        }

        if (grade === 100 && first100 === 0) {
            first100 = i;
        }
    }

    console.log('average result:', sum / studentCount);
    console.log('results 90-100:', highResults);
    console.log('results 60-89:', midResults);
    console.log('results below 60:', lowResults);
    console.log('max result:', max);
    console.log('min result:', min);
    console.log('first 100:', first100);
}
else {
    alert('error');
}
//-----------------------------------------------