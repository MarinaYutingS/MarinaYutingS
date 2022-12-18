import Feed from './Feed';

const Home = ({ users, handleEdit,handleDelete }) => {
    return (
        <main className="Home">
            
            <Feed users={users} 
            handleEdit={handleEdit}
            handleDelete={handleDelete}/>
            
        </main>
    )
}

export default Home