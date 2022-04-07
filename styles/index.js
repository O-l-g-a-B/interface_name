function myFunction() {
const names = document.querySelector('input').value;
const cleanNames = names.trim(); //убираем пробелы в начале и конце строки
const registr1 = cleanNames.toLowerCase(); //преобразовали в маленькие буквы
const array = registr1.split(" "); //преобразуем строку в массив
const lastName = array[0]; //взяли фамилию
const lastName1 = (lastName[0]); //из фамилии взяли 1-ю букву
const lastName2 = lastName1.toUpperCase(); //преобразование в верхний регистр
const lastName3 = lastName.slice(1);  //извлечение части строки (в данном случае с первого символа)

document.querySelector('.surname').textContent = lastName2 + lastName3;



const FirstName = array[1];
const FirstName1 = (FirstName[0]); 
const FirstName2 = FirstName1.toUpperCase(); 
const FirstName3 = FirstName.slice(1);  

document.querySelector('.f_name').textContent = FirstName2 + FirstName3;



const patronymic = array[2]; 
const patronymic1 = (patronymic[0]); 
const patronymic2 = patronymic1.toUpperCase();
const patronymic3 = patronymic.slice(1);  

document.querySelector('.p_atronymic').textContent = patronymic2 + patronymic3;






}