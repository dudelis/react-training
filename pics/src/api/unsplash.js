import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        'Authorization': 'Client-ID 31cf53ce3acf3afa1756059f888e721a49b3bacf7c6b15668947ff78ddb44f7f'
    }
})