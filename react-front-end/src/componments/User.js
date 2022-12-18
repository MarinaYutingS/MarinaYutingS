// import { Link } from 'react-router-dom';

const User = ({ user,handleEdit,handleDelete }) => {
    // const { id } = useParams();
    // const user = users.find (user =>  (user.id).toString() === id);
    return (
        <div class="container">
            <article className="user">
                <h2>Last Name: {user.lastName}</h2>
                <p >First Name: {user.firstName}</p>
                <p >Date Of Birth: {user.dateOfBirth}</p>
                <p >Address1: {user.address1}</p>
                <p >Address2: {user.address2}</p>
                <p >City: {user.city}</p>
                <p >Postal Code: {user.postalCode}</p>
                <p >Country: {user.country}</p>
                <p >Phone Number: {user.phoneNumber}</p>
                <p >Email: {user.email}</p>
                <p >User Notes: {user.userNotes}</p>
            </article>
            <button class="btn btn-primary" type="submit" onClick={() => handleEdit (user.id)}>Update</button>
            {/* <button class="btn btn-danger" type="submit" onClick={() => handleDelete (user.id)}>Delete</button> */}
        </div>
    )
}

export default User