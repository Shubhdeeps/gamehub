import { useState } from "react";
import { Titles } from "../../title/Titles";

export const Discription = ({discription}) => {
    const [isFlex, setIsFlex] = useState(true)

    return(
        <div className="mt-4 text-light container lead">
        <Titles title='discription' setFlex={setIsFlex} isFlex={isFlex} />
        <hr />
        <div className={isFlex ? 'isFlex' : 'isNotFlex'} >
        {discription}
        </div>
        </div>
    )
}