const cars = [];

const tableBody = document.querySelector(`tbody`);

function AddNewCar(car) {
    tableBody.innerHTML += `<tr>
                                <th scope="col">${car.id}</th>
                                <td scope="col">${car.model}</td>  
                                <td scope="col">${car.type}</td>                           
                                <td scope="col">${car.year}</td>
                                <td scope="col">${car.price}$</td>
                                <td scope="col"><div id="colorId${car.id}"></div></td>
                                <td scope="col">${car.customsClearance}</td>
                                <td scope="col">${car.date}</td>                        
</tr>`;
}

function ReadCar(){
    const modelInput = document.getElementById(`modelInput`).value;
    const yearInput = document.getElementById(`yearInput`).value;
    const priceInput = document.getElementById(`priceInput`).value;
    const typeInput = document.getElementById(`typeInput`).value;
    const customsClearanceInput = document.getElementById(`statusInput`);
    const customsClearanceI =customsClearanceInput.checked ? "TRUE" : "FALSE";
    const ddate = NewDateSell();
    return {
        id: cars.length + 1,
        model: modelInput,
        year: yearInput,
        price: priceInput,
        type: typeInput,
        customsClearance: customsClearanceI,
        date: ddate
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
    if (!newCar.model || !newCar.year || !newCar.price || !newCar.type) {
        alert("Please fill in all required fields.");
        return;
    }
    cars.push(newCar);
    AddNewCar(newCar);
    ChangeColor();
    
}

function ChangeColor(){
    const color = document.getElementById("colorInput").value;
    const colorDiv = document.getElementById(`colorId${cars.length}`);
    colorDiv.style.backgroundColor = color;
}

const ClearBtn = document.getElementById(`clear-all-btn`);

ClearBtn.onclick = () =>{
    tableBody.innerHTML = "";
}

/*
const SearchBtn = document.getElementById(`searchInput`);

SearchBtn.onclick = () => {
    const searchInput = document.getElementById(`searchInput`).value.toLowerCase().trim();
    const rows = document.querySelectorAll('tbody tr');
    let cheker = false;
    let i;

    for ( i = 0; i < rows.length; i++) {
        const columns = rows[i].querySelectorAll(`td`);
        let cheker = false;
      
      
          if (columns[1].textContent.toLowerCase().indexOf(searchInput) !== -1) {
            cheker = true;
           
          }
        
      
        if (cheker) {
          rows[i].style.display = '';
        } else {
          rows[i].style.display = 'none';
        }
      }
      

    if (!cheker) {
        alert('No results found.');
    }
}
*/


