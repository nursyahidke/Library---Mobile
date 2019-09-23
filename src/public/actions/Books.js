import axios from 'axios';

export const getAllBooks = () => {
    return {
        type: 'GET_ALL_BOOKS',
        payload: axios.get('http://192.168.100.112:8000/api/books')
    }
}