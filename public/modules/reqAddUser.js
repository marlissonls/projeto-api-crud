import { nomeInput } from '../index.js';
import { emailInput }  from '../index.js';

export function reqAddUserFn() {
    fetch(`/usuarios`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nome: nomeInput.value,
            email: emailInput.value
        })
    })
}