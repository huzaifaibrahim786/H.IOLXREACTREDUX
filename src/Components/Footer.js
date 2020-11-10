import React from 'react'
import '../Css/Footer.css'

class Footer extends React.Component{
    render(){
        return(
            <>
               <div className="container-fluid">

                <div className="row bottom">

                        <div className="col-md-6 pt-2 text-white">
                            <p className="ml-2 mt-1">Other Countries India - South Africa - Indonesia</p>
                        </div>
                        <div className="col-md-6 pt-2 text-white">
                            <p style={{textAlign:"right"}} className="mt-1">Free Classifieds in Pakistan. © 2006-2020 OLX</p>
                        </div>

                    </div>


               </div>
            </>
        )
    }
}


export default Footer;