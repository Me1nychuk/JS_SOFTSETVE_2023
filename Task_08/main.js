const cars = [];

const tableBody = document.querySelector(`#cars-table tbody`);

function AddNewCar(car) {
    tableBody.innerHTML += `<tr>
                                <th scope="col">${car.id}</th>
                                <td scope="col">${car.model}</td>                                
                                <td scope="col">${car.year}</td>
                                <td scope="col">${car.price}$</td>
                                <td scope="col"><div id="colorId${car.id}></div></td>
                                <td scope="col"><span id="CheckBox${car.id}$</td>
                                <td scope="col">${car.date}</td>                        
</tr>`;
}

function ReadCar(){
    const modelInput = document.getElementById(`modelInput`);
    const yearInput = document.getElementById(`yearInput`);
    const priceInput = document.getElementById(`priceInput`);
    const typeInput = document.getElementById(`typeInput`);

    return {
        id: cars.length + 1,
        model: modelInput.value,
        year: yearInput.value,
        price: priceInput.value,
        type: typeInput.value,
        date: NewDateSell().value
    };
}
function NewDateSell(){
    const date =new Date();
    const year = date.getFullYear().toString();
    const month = date.getMonth().toString();
    const day = date.getDay().toString();
    const hours = date.getHours().toString().padStart(2,'0');
    const minutes = date.getMinutes().toString().padStart(2,'0');
    const seconds = date.getSeconds().toString().padStart(2,'0');
    const dateForSell = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return dateForSell;
}

const addBtn = document.getElementById('add-car-btn');

addBtn.onclick = (event) => {
    event.preventDefault();
    const newCar = ReadCar();
    cars.push(newCar);
    AddNewCar(newCar);
    secondPartAddBtn();
}

function secondPartAddBtn(){
    const colorInput = document.getElementById(`colorInput`);
    ChangeColor(colorInput);
    const customsClearanceInput = document.getElementById(`statusInput`);
    CheckBoxSpan(customsClearanceInput);
}




function ChangeColor(colorInput){
    const colorId = document.getElementById('colorId'+ cars.length);

    colorInput.addEventListener('change', () => {
        colorId.style.backgroundColor = colorInput.value;
    });
}

function CheckBoxSpan(customsClearanceInput){
    const statusOutput = document.getElementById("CheckBox"+cars.length);

    customsClearanceInput.addEventListener("change", () => {
      statusOutput.innerText = customsClearanceInput.checked ? "+" : "-";
    });
}