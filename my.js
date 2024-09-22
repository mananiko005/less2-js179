//1.	ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე

for (let i = 5; i < 100; i++) {
  console.log(i);
}

//2.ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და ნაკლებია 10ზე

let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let item of array1) {
  if (item < 10 && item > 0) console.log(item);
}

//3. ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი

let array2 = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < array2.length; i++) {
  sum += array2[i];
}
console.log(sum);

//4.ციკლის საშუალებით გამოთვალეთ საშუალო არითმტიკული

let array3 = [1, 2, 3, 4, 5];
let math = 0;
let count = array3.length;

for (let i = 0; i < array3.length; i++) {
  math += array3[i];
}
console.log(math / count);

//5.ამოიღეთ user ცვლადის სტუდენტის სტატუსი;

let user = {
  fitstname: `giorgi`,
  lastname: `smith`,
  age: 25,
  studentstatus: `active`,
};
console.log(user.studentstatus);

//6.●	თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:  hello user;
//●	თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
//●	თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello anna;
//●	ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;

let user2 = {
  name: `anna`,
  age: 20,
  studentstatus: `active`,
};
if (user2.age < 18 && user2.studentstatus == `active`)
  console.log(`hello user`);
else if (user2.name == `levani`) console.log("hello levan");
else if (user2.studentstatus == `active` || user2.age < 25) {
  console.log(`hello anna`);
} else {
  console.log(`error`);
}

let user3 = {
  name: `anna`,
  age: 20,
  studentstatus: `active`,
};
let resultstatment =
  user3.age < 18 && user3.studentstatus == `active`
    ? `hello user`
    : user3.name == `levani`
    ? "hello levan"
    : user3.studentstatus == `active` || user3.age < 25
    ? `hello anna`
    : `error`;
console.log(resultstatment);

//7. ამოიღეთ მხოლოდ ლუწი რიცხვები

let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];

for (let i = 0; i < array6.length; i++) {
  let number = array6[i];
  if (number % 2 == 0) console.log(number);
}

//8.კონსოლში გამოიტანეთ მარტო ის ობიექტი, რომლის status property-ის მნიშვნელობა არის true;

let users = [
  { username: "giorgi", status: false },
  { username: "levani", status: false },
  { username: "anna", status: true },
];

console.log(users[2]);



// 9.	Მოცემული მასივიდან ამოიღეთ მხოლოდ ციფრები, რომლებიც 5-ის ჯერადია:
let array7 = [32, 14, null, `40`, 50];
for (let i = 0; i < array7.length; i++) {
  let items = array7[i];
  if (items % 5 == 0) console.log(items);
}


//10. 10.	Მოცემული მასივიდან კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:

let array8 = [
  [2, -3, 5, 11],
  [1, -31, -11],
  [12, -36, -24],
];
for (let array8items of array8) {
  for (let array8el of array8items) {
    if (array8el > 0) {
      console.log(array8el);
    }
  }
}

let array9 = [
  [2, -3, 5, 11],
  [1, -31, -11],
  [12, -36, -24],
];
for (let i = 0; i < array9.length; i++) {
  let nestedArray = array9[i];
  for (let x = 0; x < nestedArray.length; x++) {
    let nestedNum = nestedArray[x];
    if (nestedNum > 0) console.log(nestedNum);
  }
}
