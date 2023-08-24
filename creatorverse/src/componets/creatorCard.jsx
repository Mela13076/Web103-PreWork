// import React, { useState, useEffect } from 'react';
// import { supabase } from '../client';
// import { Link } from 'react-router-dom';

// function CreatorCard(){

// //set up state variables
// const [post, setPost] = useState([]);

// //get the post from the supabase database

// useEffect(() => {
//     const getPosts = async () => {
//         const { data, error } = await supabase.from('creators').select();

//         if (error) {
//             console.log(error);
//         } else {
//             setPost(data);
//         }
//     }

//     getPosts().catch(console.error);
// }, []);


//     return(
//         <div className="post">
//                     {post && post.length > 0 ? post.map((postinfo) => (
//                         <div className="charactersPage" key={postinfo.id}>
//                             <h3>
//                                 <Link to={`/info/${postinfo.id}`}>{postinfo.name}</Link>
//                             </h3>
//                             <div className="card-content">
//                                 <div className="image">
//                                     <img className="archive-image" src={postinfo.imageUrl} alt='image url ' width= "400px" height="auto" />
//                                 </div>
//                                 <div className="information">
//                                     <p> {postinfo.description}</p>
//                                 </div>
//                             </div>
                                                        
                            
                            
                        
//                             {/* <Link to={`/edit/${postinfo.id}`}>Edit</Link> */}
//                         </div>
//                     )) : (
//                         <div>
//                             <h3>No Archives yet! 😞 </h3>
//                         </div>
//                     )
//                 }
//                 </div>
//     )
// }

// export default CreatorCard


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';




function CreatorCard({ creator }){

    const cardStyle = {
        backgroundImage: `url(${creator.imageUrl})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };



    return(
        <div className="card" style={cardStyle}>
            <div className="card-content">
                <h2>{creator.name}</h2>
                <p>{creator.description}</p>
                <Link to={`/info/${creator.id}`}>Visit Profile</Link>
            </div>
        </div>
    )
}

export default CreatorCard