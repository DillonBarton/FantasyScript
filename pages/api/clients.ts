

export default async (req, res) => {
    switch (req.method){
        case 'POST':
            break;
        case 'GET':
            res.status(200).json({ data : 'retrieved' })
            break;
    }
}