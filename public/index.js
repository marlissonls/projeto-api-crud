import { reqShowUsersFn } from './modules/reqShowUsers.js';
import { reqAddUserFn }  from './modules/reqAddUser.js';
import { reqEditUserFn }  from './modules/reqEditUser.js';
import { reqDeleteUserFn }  from './modules/reqDeleteUser.js';

export const nomeInput = document.getElementById('nome')
export const emailInput = document.getElementById('email')
export const table = document.getElementById('table')

const refreshTable = document.querySelector('.refresh')
const cadastrarBtn = document.getElementById('cadastrar')

refreshTable.addEventListener( 'click', reqShowUsersFn )
cadastrarBtn.addEventListener( 'click', reqAddUserFn )

window.reqEditUserFn = reqEditUserFn;
window.reqDeleteUserFn = reqDeleteUserFn;