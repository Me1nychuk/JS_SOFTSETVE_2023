const cars = [];

const tableBody = document.querySelector(`tbody`);

function AddNewCar(car) {
  tableBody.innerHTML += `<tr>
                                <td scope="col">${car.id}</th>
                                <td scope="col">${car.model}</td>  
                                <td scope="col">${car.type}</td>                           
                                <td scope="col">${car.year}</td>
                                <td scope="col">${car.price}$</td>
                                <td scope="col"><div id="colorId${car.id}"></div></td>
                                <td scope="col">${car.customsClearance}</td>
                                <td scope="col">${car.date}</td>                        
</tr>`;
}

function ReadCar() {
  const modelInput = document.getElementById(`modelInput`).value;
  const yearInput = document.getElementById(`yearInput`).value;
  const priceInput = document.getElementById(`priceInput`).value;
  const typeInput = document.getElementById(`typeInput`).value;
  const customsClearanceInput = document.getElementById(`statusInput`);
  const customsClearanceI = customsClearanceInput.checked ? "TRUE" : "FALSE";
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
function NewDateSell() {
  const date = new Date();
  const year = date.getFullYear().toString();
  const month = date.getMonth().toString();
  const day = date.getDay().toString();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
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

function ChangeColor() {
  const color = document.getElementById("colorInput").value;
  const colorDiv = document.getElementById(`colorId${cars.length}`);
  colorDiv.style.backgroundColor = color;
}

const ClearBtn = document.getElementById(`clear-all-btn`);

ClearBtn.onclick = () => {
  tableBody.innerHTML = "";
}


document.querySelector(`#search`).oninput = function () {
  let val = this.value.trim();
  let tableSearch = document.querySelectorAll(`tbody tr td`);
  if (val != "") {
    tableSearch.forEach(function (elem) {
      if (elem.innerText.search(val) == -1) {
          elem.classList.add('hide');
          elem.innerHTML = elem.innerText
      } else {
          elem.classList.remove(`hide`);
          let str = elem.innerTEXT;
          elem.innerHTML = searchMark(str,elem.innerText.search(val),val.length);
      }
    });
  } else {
    tableSearch.forEach(function (elem) {
      elem.classList.remove('hide');
      elem.innerHTML = elem.innerText;
    })
  }
}

function searchMark(string, pos, len) {
  return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);

  }

