


export const Count = ( ) => {

    const deleteUser = () => {
        alert('deleted')
    }
    const addUser = () => {
        alert('added')
    }

    const nameChanged = () => {
        console.log('nameChange')
    }


    return <div>
        <textarea onChange={nameChanged} onBlur={addUser}>Igor</textarea>
        <button onClick={deleteUser}>-</button>
        <button onClick={addUser}>+</button>
    </div>

}