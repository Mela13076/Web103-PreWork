import { supabase } from "../client";
import {Link} from 'react-router-dom';

import Back from '../assets/back.png'

function Create(){

    const createPost = async (e) => {
        e.preventDefault();
        
        //Get the values from from the form
        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;
        const image_url = document.getElementById('image_url').value;
        const twitter_url = document.getElementById('twitter_url').value;
        const instagram_url = document.getElementById('instagram_url').value;
        const youtube_url = document.getElementById('youtube_url').value;
        const twitch_url = document.getElementById('twitch_url').value;
        
    

        //Create a new post
        const post = {
            name: name,
            description: description,
            imageUrl: image_url,
            twitterUrl: twitter_url,
            instagramUrl: instagram_url,
            youtubeUrl: youtube_url,
            twitchUrl: twitch_url
            
        }


        await supabase
        .from('creators')
        .insert(post)
        .select();


        // //Redirect to the home page
        window.location = '/';
        

    }

    


return(
    <div className="create">
        <a href="/">
            <img className="back-btn" src={Back} alt="back button" width='20px' />
        </a>
        <h1 className="namePage">Creating a Creator</h1>
         <div className="create-content">
            <form onSubmit={createPost}>
                <div className="mini-container">
                    <label>Name:</label>
                    <input type="text" placeholder="enter name of creator" id="name" required/>
                </div>

                <div className="mini-container">
                    <label>Description:</label>
                     <input type="text" placeholder="enter a description" id="description"  width="80%" required/>

                </div>

                <div className="mini-container">
                    <label>Image URL:</label>
                    <input type="text" placeholder="enter an image url link" id="image_url" required/>
                </div>

                <div className="mini-container">
                    <label>Twitter URL</label>
                    <input type="text" placeholder="enter a Twitter URL link" id="twitter_url" required/>
                </div>
                <div className="mini-container">
                    <label>Instagram URL</label>
                    <input type="text" placeholder="enter an Instagram URL link" id="instagram_url" required/>
                </div>
                <div className="mini-container">
                    <label>YouTube URL:</label>
                    <input type="text" placeholder="enter a YouTube URL link" id="youtube_url" required/>
                </div>
                <div className="mini-container">
                    <label>Twitch URL:</label>
                    <input type="text" placeholder="enter a Twitch URL link" id="twitch_url" />
                </div>
                
                
                   
                <button className="createBtn" type="submit">Create Creator</button>
            </form>
        </div>
    
    </div>
)
}

export default Create