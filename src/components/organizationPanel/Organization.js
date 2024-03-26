import { useState } from "react"
import '../../assets/css/homeTabs.css';

export function Organization() {

    const [tab, setTab] = useState("post")

    function handleTabs(tab){
        setTab(tab);
    }

    return(
        <div className="announcement-tabs">
            <div className="tabs">
                <button 
                onClick={()=>{handleTabs("post")}}
                    className={`tab ${tab === "post" ? "active" : ""}`}
                >
                    Post
                </button>
                <button 
                onClick={()=>{handleTabs("announcement")}}
                    className={`tab ${tab === "announcement" ? "active" : ""}`}
                >
                    Announcement
                </button>
                <button 
                onClick={()=>{handleTabs("poll")}}
                className={`tab ${tab === "poll" ? "active" : ""}`}
                >
                    Poll
                </button>
                <button 
                onClick={()=>{handleTabs("praise")}}
                className={`tab ${tab === "praise" ? "active" : ""}`}
                >
                    Praise
                </button>
            </div>
            <div className="panel">
                {
                    tab === "post" 
                    ?
                    <p>
                        Write your post here and let your peers know
                    </p>
                    :
                    tab === "announcement"
                    ?
                    <p>
                        Write the Title of the announcement
                    </p>
                    :
                    tab === 'poll'
                    ?
                    <p>
                        Title of the Poll
                    </p>
                    :
                    <p>
                        Give praise from here
                    </p>

                }
            </div>
        </div>
    )
}