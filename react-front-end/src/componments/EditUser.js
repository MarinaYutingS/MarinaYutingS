import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";


const EditUser = ({
    users, handleEdit, handleDelete,editLastName, seteditLastName,
    editFirstName, setedituserFirstName,
    editAddress1, seteditAddress1,
    editAddress2, seteditAddress2,
    editCity, seteditCity,
    editPostalCode, seteditPostalCode,
    editCountry, seteditCountry,
    editEmail, seteditEmail,
    editPhoneNumber, seteditPhoneNumber,
    editNotes, seteditNotes}) => {
        
    const { id } = useParams();
    const user = users.find (user =>  (user.id).toString() === id);
    // const user = users[0];
    // console.log("before"+user._id)
    console.log(user)
    // console.log("after"+user._id)

    useEffect(() => {
        if  (user) {
            seteditLastName (user.lastName);
            setedituserFirstName (user.firstName);
        }
    },  [user, seteditLastName, setedituserFirstName])


    return (
        <body>
            <>
                <div class="container">
                    <h2>Update User</h2>
                    <form className="newUserForm" onSubmit={(e) => e.preventDefault()}>
                        <div class="form-row">
                            <div class="form-item">
                        
                                <label htmlFor= "userTitle">Last Name:</label>
                                <input
                                    id= "userLastName"
                                    type="text"
                                    required
                                    value={editLastName}
                                    onChange={(e) => seteditLastName(e.target.value)}
                                />
                            </div>
                            <div class="form-item">
                                <label htmlFor= "userBody"> First Name:</label>
                                <input
                                    id= "editFirstName"
                                    required
                                    value={editFirstName}
                                    onChange={(e) => setedituserFirstName(e.target.value)}
                                />
                            </div>
                            <div class="form-item">
                                <label htmlFor= "userBody"> Address1:</label>
                                <input
                                    id= "editAddress1"
                                    // required
                                    value={editAddress1}
                                    onChange={(e) => seteditAddress1(e.target.value)}
                                />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-item">
                                <label htmlFor= "userBody"> Address2:</label>
                                <input
                                    id= "editAddress2"
                                    // required
                                    value={editAddress2}
                                    onChange={(e) => seteditAddress2(e.target.value)}
                                />
                            </div>
                            <div class="form-item">
                                <label htmlFor= "userBody"> City:</label>
                                <input
                                    id= "editCity"
                                    // required
                                    value={editCity}
                                    onChange={(e) => seteditCity(e.target.value)}
                                />
                            </div>
                            <div class="form-item">
                                <label htmlFor= "userBody"> Postal Code:</label>
                                <input
                                    id= "editPostalCode"
                                    // required
                                    value={editPostalCode}
                                    onChange={(e) => seteditPostalCode(e.target.value)}
                                />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-item">
                                <label htmlFor= "userBody"> Country:</label>
                                <input
                                    id= "editCountry"
                                    // required
                                    value={editCountry}
                                    onChange={(e) => seteditCountry(e.target.value)}
                                />
                            </div>
                                {/* <label htmlFor= "userBody"> Phone Number:</label>
                                <input
                                    id= "editPhoneNumber"
                                    // required
                                    value={editPhoneNumber}
                                    onChange={(e) => seteditPhoneNumber(e.target.value)}
                                /> */}
                            <div class="form-item">
                                <label htmlFor= "userBody"> Email:</label>
                                <input
                                    id= "editEmail"
                                    // required
                                    value={editEmail}
                                    onChange={(e) => seteditEmail(e.target.value)}
                                />
                            </div>
                            <div class="form-item">
                                <label htmlFor= "userBody"> User Notes:</label>
                                <input
                                    id= "editEeditNotesmail"
                                    // required
                                    value={editNotes}
                                    onChange={(e) => seteditNotes(e.target.value)}
                                />
                            </div>
                        </div>
                        <button class="btn btn-primary" type="submit" onClick={() => handleEdit (user.id)}>Update</button>
                        <button class="btn btn-danger" type="submit" onClick={() => handleDelete (user.id)}>Delete</button>
                    </form>
                    </div>
                </>
           
                
            
            {/* {!editLastName &&
                <>
                    <h2> user Not Found</h2>
                    <p>Well, that's disappointing.</p>
                    <p>
                        < Link to='/'>Visit Our Homepage</Link>
                    </p>
                </>
            } */}
        </body>
    )
}

export default EditUser