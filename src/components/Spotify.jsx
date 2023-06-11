import React, { useEffect } from 'react'
import { useStateProvider } from '../utils/StateProvider'
import axios from 'axios'
import { reducerCases } from '../utils/Constants';

export default function Spotify() {
    

    const [{token},dispatch] = useStateProvider();

    useEffect(()=>{
        const getUserInfo = async () =>{
            const { data } = await axios.get('https://api.spotify.com/v1/me/playlists',{
                headers: {
                    Authorization: "Bearer "+token,
                    "Content-Type":"application/json",
                },
            });
            console.log(data);
            const userInfo = {
                userId: data.id,
                userName: data.display_name,
            };
            // dispatch({ type: reducerCases.SET_USER, userInfo});
        };
        getUserInfo();
    })

    

    return (
        <div>{token}</div>
    )
}
