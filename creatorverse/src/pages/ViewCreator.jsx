import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import Back from '../assets/back.png'
import Insta from '../assets/instagram.png'
import X from '../assets/twitter.png'
import Twitch from '../assets/twitch.png'
import Youtube from '../assets/youtube.png'
import Edit from '../assets/pencil.png'
import Delete from '../assets/trash.png'

function Info() {
    const { id } = useParams();
    const [creator, setCreator] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getCreator = async () => {
            const { data, error } = await supabase
                .from('creators')
                .select()
                .eq('id', id);

            if (error) {
                console.error(error);
            } else if (data.length > 0) {
                setCreator(data[0]);
            }
        };

        getCreator().catch(console.error);
    }, [id]);

    const handleEditClick = () => {
        navigate(`/edit/${creator.id}`);
    };

    const handleDeleteClick = async () => {
        const { error } = await supabase
            .from('creators')
            .delete()
            .eq('id', id);

        if (error) {
            console.error(error);
        } else {
            navigate('/');
        }
    };

    if (!creator) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="info">
            <a href="/">
                <img className="back-btn" src={Back} alt="back button" width='20px' />
            </a>
            <div className="info-content">
                <h1>{creator.name}</h1>
                <img className="info-image" src={creator.imageUrl} alt={creator.name} />
           
                <h4>{creator.description}</h4>
                <p>Check out {creator.name} Social's below</p>
            </div>
            <div className="social-medias">
                {creator.twitterUrl && (
                    <a href={creator.twitterUrl} target="_blank" rel="noopener noreferrer">
                        <img src={X} alt="Twitter" />
                    </a>
                )}
                {creator.instagramUrl && (
                    <a href={creator.instagramUrl} target="_blank" rel="noopener noreferrer">
                        <img src={Insta} alt="Instagram" />
                    </a>
                )}
                {creator.youtubeUrl && (
                    <a href={creator.youtubeUrl} target="_blank" rel="noopener noreferrer">
                        <img src={Youtube} alt="YouTube" />
                    </a>
                )}
                {creator.twitchUrl && (
                    <a href={creator.twitchUrl} target="_blank" rel="noopener noreferrer">
                        <img src={Twitch} alt="Twitch" />
                    </a>
                )}
            </div>
            <div className="edit-delete">
                {/* <button onClick={handleEditClick}>Edit</button> */}
                <img src={Edit} alt="edit" className='edit-btn' onClick={handleEditClick}/>
                <img src={Delete} alt="delete" className='edit-btn' onClick={handleDeleteClick}/>
                
            </div>
            
        </div>
    );
}

export default Info;
