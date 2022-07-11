import { useState } from "react";
import { Tag } from "../../tags/Tag";
import { Titles } from "../../title/Titles"



export const SingleGamePlatforms = ({platforms}) => {
    const [isFlex, setIsFlex] = useState(true);

    return(
        <div className="container mt-4">
        <Titles title='Platforms' setFlex={setIsFlex} isFlex={isFlex} />
        <div className={`pt-4 ${isFlex ? 'isFlex' : 'isNotFlex'}`}>
            <div>
                {platforms.platforms.map(item => {
                    return(
                    <div key={item.platform.id} className='text-light mb-4'>
                       <h5> {item.platform.name} </h5>
                       <p className="fs-6 lead text-muted"> Released at: {item.released_at} </p>
                       <p className="fs-6 lead"> {item.requirements.minimum} </p>
                       <hr />
                    </div>
                    )
                })}
            </div>
        </div>
        </div>
    )
}