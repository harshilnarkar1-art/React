import React, { useEffect, useState } from 'react'
import App from '../App';
// import { data } from 'react-router-dom';

const userDataContext = React.createContext();

function UserContext({ component }) {
    const [userData, setUserData] = useState({});
    useEffect(() => {
        fetch("http://127.0.0.1:5500/dummy/data1.json")
            .then((res) => res.json())
            .then((data) => {
                setUserData(data);
                console.log(data);

            });
    }, []);

    return (
        <userDataContext.Provider value={userData}>
            <App />
        </userDataContext.Provider>
    )
}
export default UserContext;
export { userDataContext };
