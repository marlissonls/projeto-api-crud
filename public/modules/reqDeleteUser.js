export function reqDeleteUserFn(id) {
    fetch(`/usuarios/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
}