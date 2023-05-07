const UserAPI = 'https://jsonplaceholder.typicode.com/users';

async function GetServerData(url) {
    let response = await fetch(url);
    console.log(`Response status: ${response.status}`);

    let data = await response.json();
    console.log(`Data:`, data);

    RenderUserList(data)
}

GetServerData(UserAPI);

function RenderUserList(dataU) {
    const list = document.getElementById('user-list');
    let i = 1;
    for (const u of dataU) {
        list.innerHTML +=`<li class="user-row" id="users/${i}">${u.name}: ${u.email}`;
        i++;
    }
    
    const userRows = document.getElementsByClassName('user-row');
for (let i = 0; i < userRows.length; i++) {
    userRows[i].addEventListener('click', function() {
      const userId = this.id;
      getUserInformation(userId);
    });
}
}



function getUserInformation(uId)
{
    fetch(`https://jsonplaceholder.typicode.com/users/${uId[uId.length-1]}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('userInfo').textContent = JSON.stringify(data);
    })
    .catch(error => {
        console.error('Помилка при отриманні інформації про користувача', error);
        
    });
}

