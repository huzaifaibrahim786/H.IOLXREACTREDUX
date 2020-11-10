import React from 'react'
import mainImage from '../Images/mainImage.PNG'


class MainImage extends React.Component{
    render(){
        return(
            <>
                <img src={mainImage} alt="mainImage" className="img-fluid" width="100%"/>
            </>
        )
    }
}

export default MainImage;