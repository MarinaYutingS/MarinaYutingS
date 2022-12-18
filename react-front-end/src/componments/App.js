import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewUser from './NewUser';
import UserPage from './UserPage';
import EditUser from './EditUser';
import About from './About';
import Missing from './Missing';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import api from '../api/users';


function App() {
  const [users, setusers] = useState([])
//   const [search, setSearch] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
  const [userLastName, setUserLastName] = useState('');
  const [userFirstName, setUserFirstName] = useState('');
  const [userAddress1, setUserAddress1] = useState('');
  const [userAddress2, setUserAddress2] = useState('');
  const [userCity, setUserCity] = useState('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const [userPostalCode, setUserPostalCode] = useState('');
  const [userCountry, setUserCountry] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userNotes, setUserNotes] = useState('');

  const [editLastName, seteditLastName] = useState('');
  const [editFirstName, setedituserFirstName] = useState('');
  const [editAddress1, seteditAddress1] = useState('');
  const [editAddress2, seteditAddress2] = useState('');
  const [editCity, seteditCity] = useState('');
  const [editPostalCode, seteditPostalCode] = useState('');
  const [editCountry, seteditCountry] = useState('');
  const [editPhoneNumber, seteditPhoneNumber] = useState('');
  const [editEmail, seteditEmail] = useState('');
  const [editNotes, seteditNotes] = useState('');
  const history = useNavigate();

//   fetch api data only at load time
  useEffect(() => {
    const fetchusers = async () => {
      try {
        const response = await api.get('/');
        setusers(response.data); // set response from the get request
        // console.log(response.data);
      } catch (err) {
        if (err.response) {
          // Not in the 200 response range 
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
          // console.log(err.response);
        }
      }
    }

    fetchusers();
  }, [])

// add new user handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = users.length ? users[users.length - 1].id + 1 : 1;
    const NewUser = {id, 
        lastName: userLastName, 
        firstName: userFirstName,
        address1: userAddress1,
        address2: userAddress2,
        city: userCity,
        postalCode: userPostalCode,
        country: userCountry,
        email: userEmail,
        userNotes: userNotes
    }
    try {
      const response = await api.post('/', NewUser);
      const UserPage= [...users, response.data];
      setusers(UserPage);
      setUserLastName('');
      setUserFirstName('');
      setUserAddress1('');
      setUserAddress2('');
      setUserCity('');
      setUserPostalCode('');
      setUserCountry('');
      setUserEmail('');
      setUserNotes('');
      history.push('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
      console.log(err.response);
    }
  }

  // update user handle
  const handleEdit = async (id) => {
    // const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    // const updatedPost = { id, title: editTitle, datetime, body: edituserFirstName };
    const updateUser = {id, 
      lastName: editLastName, 
      firstName: editFirstName,
      address1: editAddress1,
      address2: editAddress2,
      city: editCity,
      postalCode: editPostalCode,
      country: editCountry,
      email: editEmail,
      userNotes: editNotes
  }
    try {
      // const response = await api.put(`/users/${id}`, updateUser);
      const response = await api.patch(`/users/${id}`, updateUser);
      setusers(users.map(user => user.id === id ? { ...response.data } : user));
      console.log(users);
      seteditLastName('');
      setedituserFirstName('');
      seteditAddress1('');
      seteditAddress2('');
      seteditCity('');
      seteditPostalCode('');
      seteditCountry('');
      seteditEmail('');
      seteditNotes('');
      history.push('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
      console.log(`Error: ${err.response}`);
    }
  }

  const handleDelete = async (id) => {
    // console.log(id);
    try {
      await api.delete(`/users/${id}`);
      
      const usersList = users.filter(user => user.id !== id);
      setusers(usersList);
      history.push('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
      console.log(`Error: ${err.response}`);
    }
  }

  return (
    <div className="App">
      <Header title="JS Project User Pool - MarinaYutingS" />
      
      {/* Display user information lists under Home.js */}
      {/* <Home users={users} />  */}
      <Nav />
      <Routes>
      <Home users={users} 
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        />
      <NewUser
            handleSubmit={handleSubmit}
            userLastName={userLastName}
            setUserLastName={setUserLastName}
            userFirstName={userFirstName}
            setUserFirstName={setUserFirstName}
            userAddress1={userAddress1}
            setUserAddress1={setUserAddress1}
            userAddress2={userAddress2}
            setUserAddress2={setUserAddress2}
            userCity={userCity}
            setUserCity={setUserCity}
            userPostalCode={userPostalCode}
            setUserPostalCode={setUserPostalCode}
            userCountry={userCountry}
            setUserCountry={setUserCountry}
            userPhoneNumber={userPhoneNumber}
            setUserPhoneNumber={setUserPhoneNumber}
            userEmail={userEmail}
            setUserEmail={setUserEmail}
            userNotes={userNotes}
            setUserNotes={setUserNotes}
          />
          <Route path="/post/:id">
            <EditUser
                  
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                  users={users}
                  setusers={setusers}
                  editLastName={editLastName}
                  seteditLastName={seteditLastName}
                  editFirstName={editFirstName}
                  setedituserFirstName={setedituserFirstName}
                  editAddress1={editAddress1}
                  seteditAddress1={seteditAddress1}
                  editAddress2={editAddress2}
                  seteditAddress2={seteditAddress2}
                  editCity={editCity}
                  seteditCity={seteditCity}
                  editPostalCode={editPostalCode}
                  seteditPostalCode={seteditPostalCode}
                  editCountry={editCountry}
                  seteditCountry={seteditCountry}
                  editPhoneNumber={editPhoneNumber}
                  seteditPhoneNumber={seteditPhoneNumber}
                  editEmail={editEmail}
                  seteditEmail={seteditEmail}
                  editNotes={editNotes}
                  seteditNotes={seteditNotes}
            />
      </Route>
      </Routes>
      {/* <About />
      <Missing /> */}
      
      
      {/* <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route exact path="/">
          <Home users={users} />
        </Route> */}
        {/* <Route exact path="/postUser">
          <NewUser
            handleSubmit={handleSubmit}
            userLastName={userLastName}
            setuserLastName={setuserLastName}
            userFirstName={userFirstName}
            setuserFirstName={setuserFirstName}
          />
        </Route>
        <Route path="/edit/:id">
          <EditPost
            users={users}
            handleEdit={handleEdit}
            editTitle={editTitle}
            seteditTitle={seteditTitle}
            edituserFirstName={edituserFirstName}
            setedituserFirstName={setedituserFirstName}
          />
        </Route>
        <Route path="/post/:id">
          <UserPage
           users={users} handleDelete={handleDelete} />
        </Route>
        <Route path="/about" component={About} />
        <Route path="*" component={Missing} /> */}
      {/* </Routes> */}
      <Footer />
    </div>
  );
}

export default App;