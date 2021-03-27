import React, {useState, useReducer, useEffect} from 'react';
import PropTypes from 'prop-types';
import chatReducer from './chatReducer';

const data = {
    users: [
        {
            id: 1,
            name: 'John Smith',
        },
        {
            id: 2,
            name: 'Tom Fox',
        }
    ],
    messages: [
        {
            userId: 1,
            body: 'some message',
        },
        {
            userId: 1,
            body: 'some message',
        },
        {
            userId: 2,
            body: 'some message',
        },
        {
            userId: 2,
            body: 'some message',
        },
        {
            userId: 1,
            body: 'some message',
        },
        {
            userId: null,
            body: 'some message',
        }
    ]
};

const getData = () => data;

const initialState = {users: new Map(), messages: []};

const Chat = (props) => {
    const [state, dispatch] = useReducer(chatReducer, initialState);

    useEffect(() => {
        const data = getData();
        dispatch({
            type: 'GET_MESSAGE_SUCCESS',
            data,
        });
    }, []);

    const {messages} = state;
    return(
        <ul>
            {messages.map((msg,index)=>(
                <li key={index}>{JSON.stringify(msg)}</li>
            ))}
        </ul>
    );
}
export default Chat;