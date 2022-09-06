import { table } from '../index.js'

export function reqShowUsersFn() {
    fetch(`/usuarios`, { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        table.innerHTML = '';
        let titleRow = table.insertRow(0);
        titleRow.insertCell(0).innerHTML = '#ID'
        titleRow.insertCell(1).innerHTML = 'NOME'
        titleRow.insertCell(2).innerHTML = 'E-MAIL'
        titleRow.insertCell(3).innerHTML = 'EDITAR'
        titleRow.insertCell(4).innerHTML = 'EXCLUIR'

        for(let i = 0; i < data.length; i++) {
            let nRow = table.insertRow(i+1);
            if (data[i].id < 10)        nRow.insertCell(0).innerHTML = `000${data[i].id}`
            else if (data[i].id < 100)  nRow.insertCell(0).innerHTML = `00${data[i].id}` 
            else                        nRow.insertCell(0).innerHTML = `0${data[i].id}`
            nRow.insertCell(1).innerHTML = `${data[i].nome}`
            nRow.insertCell(2).innerHTML = `${data[i].email}`
            nRow.insertCell(3).innerHTML = `<span onclick="reqEditUserFn(${data[i].id})">
                                                <img src="./assets/images/editar.png">
                                            </span>`
            nRow.insertCell(4).innerHTML = `<span onclick="reqDeleteUserFn(${data[i].id})">
                                                <img src="./assets/images/excluir.png">
                                            </span>`

            if(data.indexOf(data[i])%2 === 0) {
                nRow.style.backgroundColor = "#bde3c6"
            } else {
                nRow.style.backgroundColor = "#f8f8f8"
            }
        }
    })
}