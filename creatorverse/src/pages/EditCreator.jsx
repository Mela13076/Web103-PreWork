import React from "react";
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import {useNavigate} from 'react-router-dom'
import Back from '../assets/back.png'

function Edit(){

    //get the id from the url
    const { id } = useParams();

    //set up state variables
    const [creators, setCreators] = React.useState(null);
    const navigate = useNavigate();


    //fetch the crewmate from the database
    React.useEffect(() => {
        const getCreators = async () => {
            const {data} = await supabase
            .from('creators')
            .select()
            .eq('id', id)

            if(data.length > 0){
                setCreators(data[0]);
            }
        }
        getCreators().catch(console.error);
    }, [id]);

    //update the crewmate
    const updateCreator = async (e) => {
        e.preventDefault();

        //update the crewmember in the database
        await supabase.from('creators').update({
            name: creators.name,
            description: creators.description,
            imageUrl: creators.image_url,
            twitterUrl: creators.twitter_url,
            instagramUrl: creators.instagram_url,
            youtubeUrl: creators.youtube_url,
            twitchUrl: creators.twitch_url
        }).eq('id', id);

        //redirect to the home page
        navigate(`/info/${id}`);
    }

    //delete the crewmate
    const deletePost = async (e) => {
        e.preventDefault();

        //delete the crewmate from the database
        await supabase.from('creators').delete().eq('id', id);

        //redirect to the home page
        // window.location = 'gallery';
        navigate(`/`);
    }

    if (!creators) {
        return <h1>Loading...</h1>
    }

    return(
        <div className="edit">
            <a href="/">
                <img className="back-btn" src={Back} alt="back button" width='20px' />
            </a>
            <h1 className="namePage">Editing a Creator</h1>
            <div className="edit-content">
                <form onSubmit={updateCreator}>
                    <div className="mini-container">
                        <label>Name:</label>
                        <input type="text" value={creators.name} onChange={(e) => setCreators({...creators, name: e.target.value})} id="name" required/>
                    </div>

                    <div className="mini-container">
                        <label>Description:</label>
                        <input type="text" value={creators.description} onChange={(e) => setCreators({...creators, description: e.target.value})} id="description"  width="80%" required/>

                    </div>

                    <div className="mini-container">
                        <label>Image URL:</label>
                        <input type="text" value={creators.imageUrl} onChange={(e) => setCreators({...creators, imageUrl: e.target.value})} id="image_url" required/>
                    </div>

                    <div className="mini-container">
                        <label>Twitter URL</label>
                        <input type="text" value={creators.twitterUrl} onChange={(e) => setCreators({...creators, twitterUrl: e.target.value})} id="twitter_url" required/>
                    </div>
                    <div className="mini-container">
                        <label>Instagram URL</label>
                        <input type="text" value={creators.instagramUrl} onChange={(e) => setCreators({...creators, instagramUrl: e.target.value})} id="instagram_url" required/>
                    </div>
                    <div className="mini-container">
                        <label>YouTube URL:</label>
                        <input type="text" value={creators.youtubeUrl} onChange={(e) => setCreators({...creators, youtubeUrl: e.target.value})} id="youtube_url" required/>
                    </div>
                    <div className="mini-container">
                        <label>Twitch URL:</label>
                        <input type="text" value={creators.twitchUrl} onChange={(e) => setCreators({...creators, twitchUrl: e.target.value})} id="twitch_url" />
                    </div>
                    
                    
                
                    <button type="submit">Update</button>
                    <button onClick={deletePost}>Delete</button>
                </form>
            </div>
    
        </div>
    )
}

export default Edit