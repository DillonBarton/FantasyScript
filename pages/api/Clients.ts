const Clients = async (req, res) => {
    switch (req.method){
        case 'POST':
            break;
        case 'GET':
            res.status(200).json({ Clients : 'Retrieved' })
            break;
    }
}

export default Clients;