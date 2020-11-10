import React from 'react'
import Bottomimage from '../Images/BottomImage.PNG'


class BottomImage extends React.Component{
    render(){
        return(
            <>
                <img src={Bottomimage} alt="bottomimage" className="mt-5 img-fluid"/>
            </>
        )
    }
}

export default BottomImage