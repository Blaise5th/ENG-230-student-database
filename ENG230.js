const todoList = [];

renderTodoList();

function renderTodoList() {
let todoListHtml = '';

for(let i = 0; i < todoList.length; i++) {

const todoObject = todoList[i];
const { name,matNumber,dateOfEntry } = todoObject;
const innerHtml = `
<tr>
    <td><span>${i + 1} )</span></td>
    <td>${name}</td> 
    <td>${matNumber}</td> 
    <td>${dateOfEntry}</td>
    <td class="button">
      <button
      class="remove-button" onclick="todoList.splice(${i}, 1);
    renderTodoList();
    ">
     Remove
    </button>
    </td>
</tr>
`;

todoListHtml += innerHtml;   
}  
document.querySelector('.js-student-info').innerHTML = todoListHtml; 
}

let studentName;
let studentMatNumber;

function addInfo() {
let nameElement = document.querySelector('.js-name-input');
let matNumberElement = document.querySelector('.js-mat-number-input');
let dateOfEntryElement = document.querySelector('.js-date-input');
const name = nameElement.value;
const matNumber = matNumberElement.value;
const dateOfEntry = dateOfEntryElement.value;

todoList.push({
    name,
    matNumber,
    dateOfEntry
});

nameElement.value = '';
matNumberElement.value = '';
dateOfEntryElement.value = ''; 

studentName = name;
studentMatNumber = matNumber;

renderTodoList();
}

function check() {

const checkStudentName = prompt('Name:');

const checkStudentMatNumber = prompt('Mat Number:');

if (studentName?.includes(checkStudentName) && studentMatNumber?.includes(checkStudentMatNumber)) {
alert(`${checkStudentName} has written his name and mat number`);   
} 

else if (studentName?.includes(checkStudentName) && ! studentMatNumber?.includes(checkStudentMatNumber)) {
alert(`${checkStudentName} name is saved,but with a different mat number`);  
}

else if (! studentName?.includes(checkStudentName) && studentMatNumber?.includes(checkStudentMatNumber)) {
alert(`${checkStudentName} name isn't here,but his mat number is`);  
}

renderTodoList(); 
}
