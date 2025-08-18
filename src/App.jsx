import {useEffect, useState} from 'react'

import './App.css'

const Card  = ({ title } ) => {
    const [hasLiked, setHasLiked] = useState(false);
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(`${title} has beed liked: ${hasLiked}`);
    }, [hasLiked]);

    useEffect(() => {
    console.log('CARD RENDERED');
    }, []);
    return(
        <div className="card" onClick={() => setCount((prevState) => prevState + 1)}>
            <h2>{title} <br/> {count || null}</h2>

            <button onClick={()=> setHasLiked(!hasLiked) }>
                {hasLiked ? 'Liked' : 'Like'}
            </button>
        </div>
    )
}


const App = () => {
    const [hideAllMovies, setHideAllMovies] = useState(false);


    return (
        <div className="card-container">
            <h2>Functional Arrow Component</h2>
            <Card title="Star Wars" rating={5} isCool={true} actors={[{name: 'Actors'}]}/>
            <Card title="Avatar"/>
            <Card title="The Lion King"/>
        </div>
            )
}

export default App
