import React from 'react'
import { useSelector } from 'react-redux'
import { useFirebaseConnect } from 'react-redux-firebase'

function App() {
    useFirebaseConnect([
        { path: 'admin' }
    ])
    const data = useSelector(state => state.firebase)
    console.log("Data", data)
    return (
        <div>
            <h1>Admin</h1>
            {JSON.stringify(data.data.admin, null, 2)}
        </div>
    )
}

export default App;
