/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) {
    
    return !isNaN(str)&& str === str.trim()
}






// function isNumeric(str) {
//     for (let i = 0; i < str.length; i++) {
//         if(test = !isNaN(str[i]) && test === str[i]){
//             str = true
//         }
//     } return str
// }



console.log(isNumeric("123")) // Ожидаемый результат: true
console.log(isNumeric("12.3")) // Ожидаемый результат: true
console.log(isNumeric("123abc")) // Ожидаемый результат: false
console.log(isNumeric("abc")) // Ожидаемый результат: false
console.log(isNumeric(" ")) // Ожидаемый результат: false