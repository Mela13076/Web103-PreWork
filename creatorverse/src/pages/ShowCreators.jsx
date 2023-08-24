import World from '../assets/world.png'
import {Link} from 'react-router-dom'
import CreatorCard from '../componets/creatorCard'
import { useEffect, useState } from 'react';
import { supabase } from '../client';

function Home(){

    const [creators, setCreators] = useState([]);

    useEffect(() => {
        const fetchCreators = async () => {
            const { data, error } = await supabase.from('creators').select();
            if (error) {
                console.error(error);
            } else {
                setCreators(data);
            }
        };

        fetchCreators();
    }, []);


    return(
        <div className="Home">
            <div className="header">
                <img src={World} alt="world" className= "worldImage" width="100%" height="auto"/>
                <div className="headerContent">
                    <p className="title">CreatorVerse</p>
                    <p className="subtitle">Connecting Gamers, One Creator at a Time</p>
                    <div className="headerButtons">
                        <Link to="/" className="btn">Current Creators</Link>
                        <Link to="/create" className="btn">Create Creator</Link>    
                    </div>
                </div>
            </div>
            
             <div className="creatorContent">

                {creators && creators.length > 0 ? creators.map((creator) => (
                            <CreatorCard key={creator.id} creator={creator} />
                        )) : (
                            <div>
                                <h3>No Creators yet! 😞 </h3>
                            </div>
                        )
                    }
             </div>
            
            
        </div>
    )
}

export default Home