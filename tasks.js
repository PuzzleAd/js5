//1) დაწერეთ ფუნქცია processNumbers, რომელიც პარამეტრად იღებს ორ რიცხვს და callBack ფუნქციას.
// და ამ ფუნქციის გამოძახებით უნდა შესრულდეს არითმეტიკული
//ოპერაციები ციფრებზეც მაგალითად მიმატება ან გამოკლება რომელიც უნდა გვეწეროს callBack ფუნქციაში.

function displayer(sum){
    console.log(sum);
}
function inticator(a, b, parameter) {
    switch (parameter) {
        case "+":
            sum = a + b;
            break;
        case "-":
            sum = a - b;
            break;
        case "*":
            sum = a * b;
            break;
        case "/":
            sum = a / b;
            break;
        default:
            console.log("error!");
            break;
    }
    displayer(sum);
}


function processNumbers(a, b, callback){
    let sum = 0
    inticator(a, b, prompt("Enter parameter"));
}

processNumbers(5, 10, inticator);



//2)შექმენით ფუნქცია isValidUser, რომელიც იღებს მომხმარებლის სახელს და პაროლს პარამეტრად
//და აბრუნებს true, თუ ორივე ცარიელი სტრიქონებია; წინააღმდეგ შემთხვევაში,
//დააბრუნეთ ყალბი. გამოიყენეთ ლოგიკური ოპერატორები.დაგჭირდებათ გაიგოთ მონაცემთა ტიპი
//და ისე შეამოწმოთ თუ სტრინგი აქვს ტიპად!!


function isValidUser(username, password){
    if(username === "" && password === "") {
        return true;
    } else {
        return false;
    }
}

let username = String(prompt("Enter Username:"));
let password = String(prompt("Enter Password:"));

console.log(isValidUser(username, password));




//3)შექმენით რეკურსიული ფუნქცია, რომელიც დააბრუნებს n რიცხვს ფიბონაჩის მიმდევრობაში.


function fibonacci(n) {
    if(n === 1){
        return 0;
    }
    if(n === 2){
        return 1;
    }
    if( n <= 0){
        console.log("error!");
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(8));



//4)შექმენით უკუმთვლელი ტაიმერი, რომელიც ითვლის 10-დან 0 წამამდე, შემდეგ დაბეჭდავს "დრო ამოიწურა!".
//გამოიყენეთ setInterval მეთოდი და დროის დასრულების შემდეგ უნდა დავამთავროთ ტაიმერი!!


let counter = 10;

function reverseTimer() {
    let interval = setInterval(() => {
        console.log(counter);
        counter--
        if(counter === 0){
            clearInterval(interval);
            console.log("დრო ამოიწურა!");
        }
    }, 1000);   
}

reverseTimer();

//5)შექმენით ფუნქცია, რომელიც ითვლის და აბრუნებს ასაკს მოცემული დაბადების თარიღის მიხედვით თარიღის ობიექტების გამოყენებით.



let displayer = (age) => {
    console.log(age);
}

function myAge(birthyear, birthmonth, birthdate, callBack) {
    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth();
    let currentDate = new Date().getDate();
    if((currentMonth > birthmonth) || (currentMonth === birthmonth && currentDate < birthdate)){
        callBack(currentYear - birthyear);
    }else if(currentMonth ===  birthmonth && currentDate >= birthdate){
        callBack(currentYear - birthyear - 1);
    }else{
        callBack(currentYear - birthyear - 1);
    }
}

myAge(2003, 6, 7, displayer);




//6) დაწერეთ ფუნქცია, რომელიც ბეჭდავს კვირის მიმდინარე დღის
// სახელს თარიღის გამოყენებით.დაგჭირდებათ array-ში შეინახოთ
//კვირის დღეები და ისე შეამოწმოთ new Date() დახმარებით!!

let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];



function dayChooser() {
    let currentDate = new Date().getDay();
    let exactDate = null;
    switch (new Date().getDay()) {
        case 0:
            exactDate = weekDays["Monday"];
            break;
        case 1:
            exactDate = weekDays[0];
            break;
        case 2:
            exactDate = weekDays[1];
            break;
        case 3:
            exactDate = weekDays[2];
            break;
        case 4:
            exactDate = weekDays[3];
            break;
        case 5:
            exactDate = weekDays[4];
            break;
        case 6:
            exactDate = weekDays[5];
            break;
        default:
            console.log("error!");
            break;
    }
    return exactDate;
}

console.log(dayChooser());
