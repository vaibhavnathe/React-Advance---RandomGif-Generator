
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

    const [tag, setTag] = useState('car');

    const {gif, loading, fetchData} = useGif(tag);

    return(
        <div className="w-1/2  bg-blue-500 rounded-lg border border-black
                        flex flex-col items-center gap-y-5 mt-[15px]"
        >

            <h1 className="text-2xl mt-[15px] underline uppercase font-bold">
                Random {tag} Gif
            </h1>

            {
                loading ? (<Spinner/>): (<img src={gif} width={450}/>)
            }

            <input className="w-10/12  mb-[3px] text-lg bg-cyan-400 py-2 rounded-lg
                            text-center"
                            onChange={ (event) =>{setTag(event.target.value)} }
                            value={tag}
            />

            <button className="w-10/12 mb-[20px] text-lg bg-cyan-400 py-2 rounded-lg"
                onClick={() => {fetchData(tag)}}>
                Generate
            </button>

        </div>
    );
}

export default Tag;