import axios from 'axios';

export default async function User(req, res) {
    try {
        const config = {
            headers: {
                Authorization: "token"
            }  
        };
        
        let { data: ReposLoiren } = await axios.get('https://api.github.com/users/loirenn/repos');
        let { data: ReposSerity } = await axios.get('https://api.github.com/users/teamSerity/repos');
        
        res.send([...ReposLoiren, ...ReposSerity])
    } catch(err) {
        res.status(500).json({ error: 'Something went wrong!' });
    }
};