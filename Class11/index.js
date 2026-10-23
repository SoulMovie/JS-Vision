// let book = {
//     title: "Кобзар",
//     author: "Тарас Шевченко",
//     year: "1840",
//     price: 500,
//     availability: true
// }
// console.log(book.title);
// console.log(book[0]);
//
// let books = [
//     {
//         id: 1,
//         title: "Кобзар",
//         author: "Тарас Шевченко",
//         year: "1840",
//         price: 500,
//         availability: true
//     },
//     {
//         id: 2,
//         title: "Лісова Пісня",
//         author: "Леся Українка",
//         year: "1911",
//         price: 450,
//         availability: true
//     },
//     {
//         id: 3,
//         title: "Тигролови",
//         author: "Іван Багряний",
//         year: "1943",
//         price: 550,
//         availability: false
//     },
//     {
//         id: 4,
//         title: "Місто",
//         author: "Валер'ян Підмогильний",
//         year: "1927",
//         price: 450,
//         availability: true
//     }
// ]
// // console.log(books[2]);
// // for(let book of books){
// //     console.log(`[${book.id}] ${book.title} (${book.author}) (${book.year}) (${book.price}) грн`);
// // }
// // books.forEach(function(book){
// //     console.log(book.title);
// // })
//
// let availableCount = 0;
// let totalPrice = 0;
// for (let book of books) {
//     if (book.availability === true) {
//         availableCount++;
//         totalPrice += book.price;
//     }
// }
// console.log(availableCount);
// console.log(totalPrice);
//
// books.push({
//     id: 5,
//     title: "Захар Беркут",
//     author: "Іван Франко",
//     year: "1882",
//     price: "500",
//     availability: true
// })
// console.log(books.length);
// idBooks = +prompt("Введіть ід книги: ");
// let foundBook = null;
// for (let book of books) {
//     if (book.id === idBooks){
//     foundBook = book;
//     break;
//     }
// }
// if (foundBook !== null){
//     let status = "Немає в наявності";
//     if (foundBook.availability === true){
//         status = "У наявності"
//     }
//     alert(`${foundBook.title}, ${foundBook.author}, ${foundBook.year}, ${foundBook.availability}`);
// } else{
//     alert("no such book");
// }
//-----------------------------------------------------------------
let clubs = [
    {
        id: 1,
        name: "maths club",
        category: "maths",
        price: 500,
        members: 8,
        active: true,
    },
    {
        id: 2,
        name: "chess club",
        category: "sport",
        price: 0,
        members: 5,
        active: true,
    },
    {
        id: 3,
        name: "literature club",
        category: "art",
        price: 0,
        members: 4,
        active: true,
    },
]
let x = 0
while (x == 0) {
    console.log("1 - Показати всі гуртки\n" +
        "2 - Знайти гурток за ID\n" +
        "3 - Записати учасника\n" +
        "4 - Змінити статус набору\n" +
        "5 - Додати новий гурток\n" +
        "6 - Показати статистику\n" +
        "0 - Вихід");
    let action = +prompt("select an action")
    switch (action) {
        case 1:
            for (club of clubs) {
                console.log(`id: ${club.id}, name: ${club.name}, category: ${club.category}, price: ${club.price} uah, members: ${club.members}, active: ${club.active}`)
            }
            continue
        case 2:
            userId = +prompt("enter the club id")
            for (club of clubs) {
                if (club.id == userId) {
                    console.log(`id: ${club.id}, name: ${club.name}, category: ${club.category}, price: ${club.price} uah, members: ${club.members}, active: ${club.active}`)
                } else {
                    continue;
                }

            }
            continue;
        case 3:
            memAmount = +prompt("enter the member amount you wish to add ")
            userId = +prompt("enter the club id you want to add ", memAmount, " members to ")
            for (club of clubs) {
                if (club.id == userId && club.active == true) {
                    club.members += memAmount
                    console.log("done")
                    console.log(`id: ${club.id}, name: ${club.name}, category: ${club.category}, price: ${club.price} uah, members: ${club.members}, active: ${club.active}`)

                } else {
                    console.log("smth went wrong")
                    continue
                }
            }
            continue;
        case 4:
            userId = +prompt("enter the club id you want to toggle the active status in ")
            for (club of clubs) {
                if (club.id == userId) {
                    if (club.active == false) {
                        club.active = true
                    } else if (club.active == true) {
                        club.active = false
                    }
                } else {
                    continue;
                }
            }
            continue;
        case 5:
            let newClub = {}
            newClub.id = (clubs[-1].id + 1);
            newClub.name = (prompt("enter your new club's name: "));
            newClub.category = (prompt("enter your new club's category: "));
            newClub.price = (+prompt("enter your new club's price in uah: "));
            newClub.members = (+prompt("enter your new club's member count: "));
            newClub.active = prompt(("Enter true or false") === "true")
            clubs.push(newClub)
            continue;
        case 6:
            console.log("statistics:")
            console.log(`total clubs amount: ${clubs.length}`);
            let c = 0
            for (club of clubs) {
                if (club.active == true){
                    c++ //w c++ reference
                }
                else{
                    continue;
                }
            }
            console.log(`clubs you can join: ${c}`);
            let cmem = 0
            for (club of clubs) {
                cmem += club.members
            }
            console.log(`total registered members: ${cmem}`);
            let priceList = []
            for (club of clubs) {
                priceList.push(club.price)
            }
            if (priceList.length == 0){
                break;
            }
            else{
                let count = 0
                for (el of priceList) {
                    count += el;
                }
                console.log(count/priceList.length);
            }
            break
        case 0:
            x = 1;
            break;

    }
}