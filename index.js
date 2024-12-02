const inputName =document.getElementById('name');
const outputName = document.getElementById('name-output');

console.log(inputName);

inputName.addEventListener('input',()=>{
console.log(inputName.value);
 outputName.textContent = `Typed Name: ${inputName.value}`;
});

const carSelect = document.getElementById('car');
const selectedCar = document.getElementById('selected-car');

carSelect.addEventListener('change', ()=>{
    selectedCar.textContent = `Selected Car:${carSelect.value}`;

});
