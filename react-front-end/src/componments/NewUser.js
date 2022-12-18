const NewUser = ({
    handleSubmit, userLastName, setUserLastName, userFirstName, setUserFirstName,
    userAddress1,setUserAddress1,userAddress2,setUserAddress2,
    userCity, setUserCity,userPostalCode, setUserPostalCode,
    userCountry, setUserCountry,userEmail, setUserEmail,
    userNotes, setUserNotes
}) => {
    return (
        <body > 
            
            <div class="container">
            
                <h2>New User</h2>
                <form className="newUserForm" onSubmit={handleSubmit}>
                    <div class="form-row">
                        <div class="form-item">
                            <label htmlFor="userLastName">Last Name:</label>
                            <input
                                id="userLastName"
                                type="text"
                                required
                                value={userLastName}
                                onChange={(e) => setUserLastName(e.target.value)}
                            />
                        </div>
                        <div class="form-item">
                            <label htmlFor="userFirstName">First Name:</label>
                            <input
                                id="userFirstName"
                                type="text"
                                required
                                value={userFirstName}
                                onChange={(e) => setUserFirstName(e.target.value)}
                            />
                        </div>
                        <div class="form-item">
                            <label htmlFor="userAddress1">Address1:</label>
                            <input
                                id="userAddress1"
                                type="text"
                                required
                                value={userAddress1}
                                onChange={(e) => setUserAddress1(e.target.value)}
                            />
                        </div>
                    </div>

                    
                    {/* <label htmlFor="userLastName">Last Name:</label>
                    <input
                        id="userLastName"
                        type="text"
                        required
                        value={userLastName}
                        onChange={(e) => setUserLastName(e.target.value)}
                    />
                    <label htmlFor="userFirstName">First Name:</label>
                    <input
                        id="userFirstName"
                        type="text"
                        required
                        value={userFirstName}
                        onChange={(e) => setUserFirstName(e.target.value)}
                    />
                    <label htmlFor="userAddress1">Address1:</label>
                    <input
                        id="userAddress1"
                        type="text"
                        required
                        value={userAddress1}
                        onChange={(e) => setUserAddress1(e.target.value)}
                    /> */}

                    <div class="form-row">

                        <div class="form-item">
                            <label htmlFor="userAddress2">Address2:</label>
                            <input
                                id="userAddress2"
                                type="text"
                                // required
                                value={userAddress2}
                                onChange={(e) => setUserAddress2(e.target.value)}
                            />
                        </div>
                        <div class="form-item">
                            <label htmlFor="userCity">City:</label>
                            <input
                                id="userCity"
                                type="text"
                                required
                                value={userCity}
                                onChange={(e) => setUserCity(e.target.value)}
                            />
                        </div>
                        <div class="form-item">
                            <label htmlFor="userPostalCode">Postal Code:</label>
                            <input
                                id="userPostalCode"
                                type="text"
                                required
                                value={userPostalCode}
                                onChange={(e) => setUserPostalCode(e.target.value)}
                            />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-item">
                            <label htmlFor="userCountry">Country:</label>
                            <input
                                id="userCountry"
                                type="text"
                                required
                                value={userPostalCode}
                                onChange={(e) => setUserCountry(e.target.value)}
                            />
                        </div>
                        <div class="form-item">
                            <label htmlFor="userEmail">Email:</label>
                            <input
                                id="userEmail"
                                type="text"
                                required
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                            />
                        </div>
                        <div class="form-item">
                            <label htmlFor="userNotes">User Notes:</label>
                            <input
                                id="userNotes"
                                type="text"
                                required
                                value={userNotes}
                                onChange={(e) => setUserNotes(e.target.value)}
                            />
                        </div>
                    </div>
                    <button class="btn btn-primary" type="submit">Submit</button>
                </form>
        
            </div>
        </body>
            
    )
}

export default NewUser