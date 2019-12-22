import React from 'react';
import styles from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user-logo.jpg';

let Users = (props) => {

    let getUsers = () => {

        if(props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })
        }
        // props.setUsers(
            // [
            //     {id: 1, photoURL: "https://langery.ru/upload/iblock/5cb/5cb2ae043187adcf7db4ea0b85d261c8.jpg", followed: true, fullName: "Dmitry", status: "I'm creator of this social network", location: { city: "Minsk", photoURL: "https://langery.ru/upload/iblock/5cb/5cb2ae043187adcf7db4ea0b85d261c8.jpg", country: "Belarus" }},
            //     {id: 2, photoURL: "https://langery.ru/upload/iblock/5cb/5cb2ae043187adcf7db4ea0b85d261c8.jpg", followed: false, fullName: "Masha", status: "I'm just Masha", location: { city: "Gomel", country: "Belarus" }}, 
            //     {id: 3, photoURL: "https://langery.ru/upload/iblock/5cb/5cb2ae043187adcf7db4ea0b85d261c8.jpg", followed: true, fullName: "Sveta", status: "I'm Masha's best friend", location: { city: "Kiev", country: "Ukraine" }}, 
            //     {id: 4, photoURL: "https://langery.ru/upload/iblock/5cb/5cb2ae043187adcf7db4ea0b85d261c8.jpg", followed: false, fullName: "Kirill", status: "I'm like Dmitry but just Kirill", location: { city: "Vitebsk", country: "Belarus" }}
            // ]
        // )
    }

    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
        props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img className={styles.usersPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                    </div>
                    <div>
                        { u.followed 
                        ? <button onClick={() => {props.unfollow(u.id) } }> Unfollow</button> 
                        : <button onClick={ () => { props.follow(u.id) } } > Follow</button>  }
                        
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        {/* <div>{u.location.country}</div> */}
                        {/* <div>{u.location.city}</div> */}
                    </span>
                </span>
            </div>)
        }
    </div>
}


export default Users;