import User from './User';

const Feed = ({ users, handleEdit,handleDelete }) => {
    return (
        <>
            {users.map(user => (
                <User key={user.id} user={user} 
                handleEdit={handleEdit}
                handleDelete={handleDelete}/>
            ))}
        </>
    )
}

export default Feed