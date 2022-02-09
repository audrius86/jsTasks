/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

// const ENDPOINT = 'https://api.github.com/users';

const showUsersBtn = document.getElementById('btn');
const output = document.getElementById('output');
const message = document.getElementById('message');

showUsersBtn.addEventListener('click', () => {

    message.remove();

    fetch('https://api.github.com/users')
    .then((res) => res.json())
    .then((data) => {
        drawUsersList(data);
    })
    .catch((err) => alert(err))
});

function drawUsersList(data) {
    data.forEach(user => {
        
        const table = document.createElement('table');
        output.append(table);

        const tr = document.createElement('tr');
        const tdLogin = document.createElement('td');
        const tdUrl = document.createElement('td');

        const img = document.createElement('img');
        img.src = user.avatar_url;
       
        tdUrl.append(img);
        tr.append(tdUrl);

        tdLogin.textContent = `User login: ${user.login}`;

        tr.append(tdLogin);
        table.append(tr);        
    });

}

