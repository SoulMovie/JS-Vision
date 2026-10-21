// function isHighScore() {
//     return score >= 10;
// }
// let scores = [7, 12, 8, 9, 10, 5]
//
// let highScore = isHighScore.filter(scores);
// console.log(highScore);

// let scores = [7, 12, 8, 9, 10, 5]
// let highScore = scores.filter(score => score >= 10)
// console.log(highScore)
//
// let courses = [
//     {id: 1, title: "HTML", price: 700, description: "HTML description", active: true},
//     {id: 2, title: "CSS", price: 700, description: "CSS description", active: true},
//     {id: 3, title: "JavaScript", price: 700, description: "Javascript description", active: false},
//     {id: 4, title: "Vue", price: 700, description: "Vue description", active: true},
// ]
// let found = courses.find(course => course.id === 3)
// console.log(found)
// if (found !== undefined) {
//     console.log(found.description)
// }else{
//     console.log("no such course")
// }
//
// let activeCourse = courses.find(course => course.active === true)
// let lowCost = courses.filter(course => course.price<=400)
// console.log(lowCost);
// console.log(activeCourse);
//
// let title = courses.map(course => course.title)
// let salePrice = courses.map(course => course.price*0.9)
//
// console.log(`course names ${title}`);
// console.log(`new prices ${salePrice}`);
//
// let search = courses.filter(course => course.title.includes("Script"))
// console.log(search);

//function isAvailable(book){
//    return book.available === true;
//}
//
//let books = [
//    {id: 1, title: "HTML для початківців", author: "Олена Класна", year: 2024, available: true},
//    {id: 2, title: "JavaScript для початківців", author: "Олена Прекрасна", year: 2022, available: false},
//    {id: 3, title: "CSS для початківців", author: "Олена Щекраща", year: 2022, available: true},
//    {id: 2, title: "HTML+JavaScript+CSS для початківців", author: "Олена Мужня", year: 2024, available: false},
// ]
//let userIdBook = +prompt("Enter user id")
//let searchBookId = books.find(book => book.id === userIdBook)
//let availableBook = books.filter(isAvailable)
//let title = books.map(book => book.title).join(", ");
//let js = books.filter(book => book.title.includes("JavaScript"))
//
// ---------------------------------------------------------------------------


const courses = [
    { id: 1, title: "HTML & CSS для початківців", category: "Веб-розробка", price: 800, duration: 20, rating: 4.8, available: true },
    { id: 2, title: "Основи JavaScript", category: "Веб-розробка", price: 1200, duration: 45, rating: 4.9, available: true },
    { id: 3, title: "Поглиблений React.js", category: "Фронтенд", price: 2500, duration: 60, rating: 4.7, available: false },
    { id: 4, title: "Python для аналізу даних", category: "Data Science", price: 1800, duration: 50, rating: 4.5, available: true },
    { id: 5, title: "Тестування програмного забезпечення (QA)", category: "Тестування", price: 1500, duration: 35, rating: 4.2, available: true },
    { id: 6, title: "UI/UX Дизайн у Figma", category: "Дизайн", price: 1100, duration: 30, rating: 4.6, available: false },
    { id: 7, title: "Бази даних SQL", category: "Бекенд", price: 950, duration: 25, rating: 4.4, available: true },
    { id: 8, title: "Розробка мобільних додатків на Flutter", category: "Мобільна розробка", price: 3000, duration: 80, rating: 5.0, available: true }
];

function getById(id) {
    return courses.find(course => course.id === id);
}

function getByCategory(category) {
    return courses.filter(course =>
        course.category.toLowerCase() === category.toLowerCase()
    );
}

function cheaperThan(price) {
    return courses.filter(course => course.price <= price);
}

function getByName(name) {
    return courses.filter(course =>
        course.title.toLowerCase().includes(name.toLowerCase())
    );
}

function getTitles() {
    return courses.map(course => course.title);
}

function getDiscounted() {
    return courses.map(course => ({title: course.title, price: course.price * 0.85 * 100 / 100}));
}

function sortByPrice() {
    return courses.sort((a, b) => a.price - b.price);
}

function sortByRating() {
    return courses.sort((a, b) => b.rating - a.rating);
}

function sortByName() {
    return courses.sort((a, b) => a.title > b.title ? 1 : -1);
}

function getPriceStats() {
    const availableCourses = courses.filter(course => course.available);
    const total = availableCourses.reduce(
        (sum, course) => sum + course.price, 0
    );

    return {
        total: total,
        average: total / availableCourses.length
    };
}

let choice;
let x = 0;
while (x == 0) {
    choice = prompt(
        "1 - знайти курс за id\n" +
        "2 - знайти курси за категорією\n" +
        "3 - знайти курси за максимальною ціною\n" +
        "4 - знайти курси за назвою\n" +
        "5 - показати назви всіх курсів\n" +
        "6 - показати ціни зі знижкою 15%\n" +
        "7 - сортувати за ціною (зростання)\n" +
        "8 - сортувати за рейтингом (спадання)\n" +
        "9 - сортувати за назвою\n" +
        "10 - загальна та середня ціна доступних курсів\n" +
        "0 - вийти"
    );

    if (choice === null || choice === "0") {
        break;
    }

    switch (choice) {
        case "1": {
            const id = prompt("введіть ID курсу:")
            const number = Number(id)

            if (id === null || id.trim() === "" ||
                !Number.isInteger(number) || number < 1) {
                console.log("нормальний ід введіть")
                break;
            }

            console.log(getById(number))
            break;
        }

        case "2": {
            const category = prompt("введіть категорію:")
            if (category === null) {
                console.log("категорію введіть")
                break;
            }

            console.log(getByCategory(category.trim()))
            break;
        }

        case "3": {
            const input = prompt("введіть максимальну ціну:")
            const price = Number(input)

            if (input === null || input.trim() === "" || price < 0) {
                console.log("некоректна ціна")
                break;
            }

            console.log(cheaperThan(price));
            break;
        }

        case "4": {
            const name = prompt("введіть частину назви:");
            if (name === null || name.trim() === "") {
                console.log("назву введіть")
                break;
            }

            console.log(getByName(name.trim()))
            break;
        }

        case "5":
            console.log(getTitles())
            break;

        case "6":
            console.log(getDiscounted())
            break;

        case "7":
            console.log(sortByPrice())
            break;

        case "8":
            console.log(sortByRating())
            break

        case "9":
            console.log(sortByName())
            break;

        case "10": {
            const stats = getPriceStats();
            console.log(
                "загальна вартість: " + stats.total + " грн\n" +
                "середня вартість: " + stats.average + " грн"
            );
            break;
        }
        case "0": {
            x=1;
            break;
        }

        default:
            console.log("невірний пункт меню ");
    }

}