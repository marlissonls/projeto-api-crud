import { nomeInput } from '../index.js'
import { emailInput }  from '../index.js'

export function reqEditUserFn(id) {
    fetch(`/usuarios/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nome: nomeInput.value,
            email: emailInput.value
        })
    })
}