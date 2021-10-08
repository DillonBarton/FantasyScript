const Users = async (req, res) => {
    switch (req.method){
        case 'POST':
            break;
        case 'GET':
            res.status(200).json({ Users : 'Retrieved' })
            break;
    }
}

export default Users;