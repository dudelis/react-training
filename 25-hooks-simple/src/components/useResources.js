import { useState, useEffect } from 'react';
import jsonplaceholder from '../api/jsonplaceholder';

const useResources = (resource) =>{
    const [resources, setResources] = useState([]);
    
    const fetchResource = async (resource) => {
        const response = await jsonplaceholder.get(`/${resource}`);
        setResources(response.data);
    }

    useEffect(()=>{
        fetchResource(resource)
    }, [resource]);

    return resources;
}

export default useResources