import React from 'react'
import { Link } from 'react-router-dom';
import '../Css/Navigation.css'
import AllCategoriesNav from './AllCategoriesNav.js'

class Navigation extends React.Component{
    render(){
        const mobile="Mobile Phones";
        const cars="Cars";
        const motorcycles="Motorcycles";
        const houses="Houses";
        const tv="TV-Video-Audio";
        const tablets="Tablets";
        const land="Land & Plots";
        return(
           
            <>
                <div className="" style={{boxShadow:"1px 1px grey",marginTop:"70px"}}>
                <nav className="navbar navbar-expand-lg navbar-white bg-white" style={{height:"40px"}}>

<ul className="navbar-nav">
    
    <li className="nav-item dropdown has-megamenu">
        <div className="nav-link dropdown-toggle black" style={{cursor:"pointer"}}  data-toggle="dropdown">All Categories <i icon="chevron down"/> </div>
        <div className="dropdown-menu megamenu mr-auto ml-auto" role="menu" style={{width:"97%"}}>
                <div className="row">
                        <div className="col-md-3">
                    
                        
                            
                       
                            <div className="col-megamenu mt-3">
                            <h6 className="title">Vehicles</h6>
                                <ul className="list-unstyled">
                                <AllCategoriesNav cat={"Vehicles"}/>

                                </ul>
                            </div> 

                            <div className="col-megamenu mt-3">
                                <h6 className="title">Mobiles</h6>
                                <ul className="list-unstyled">
                                    <AllCategoriesNav cat={"Mobiles"}/>
                                   
                                </ul>
                            </div> 
                      
                  
                            <div className="col-megamenu mt-3">
                            <h6 className="title">Electronics & Home Appliances</h6>
                                <ul className="list-unstyled">
                                <AllCategoriesNav cat={"Electronics & Home Appliances"}/>

                                </ul>
                            </div>  
                      
                            <div className="col-megamenu mt-3">
                                <h6 className="title">Property For Sale</h6>
                                <ul className="list-unstyled">
                                <AllCategoriesNav cat={"Property for Sale"}/>

                                </ul>
                            </div> 
                        </div>


                        <div className="col-md-3">
                    
                        
                    <div className="col-megamenu mt-3">
                        <h6 className="title">Animals</h6>
                        <ul className="list-unstyled">
                        <AllCategoriesNav cat={"Animals"}/>

                           
                           
                        </ul>
                    </div> 
               
                    <div className="col-megamenu mt-3">
                    <h6 className="title">Furniture & Home Decor</h6>
                        <ul className="list-unstyled">
                        <AllCategoriesNav cat={"Furniture & Home Decor"}/>

                           
                        </ul>
                    </div> 
              
          
                    <div className="col-megamenu mt-3">
                    <h6 className="title">Business, Industrial & Agriculture</h6>
                        <ul className="list-unstyled">
                        <AllCategoriesNav cat={"Business, Industrial & Agriculture"}/>

                           
                        </ul>
                    </div>  
              
                    <div className="col-megamenu mt-3">
                    <h6 className="title">Bikes</h6>
                        <ul className="list-unstyled">
                        <AllCategoriesNav cat={"Bikes"}/>

                        </ul>
                    </div> 
                </div>
                <div className="col-md-3">
                    
                        
                    <div className="col-megamenu mt-3">
                        <h6 className="title">Fashion & Beauty</h6>
                        <ul className="list-unstyled">
                        <AllCategoriesNav cat={"Fashion & Beauty"}/>

                           
                        </ul>
                    </div> 
               
                    <div className="col-megamenu mt-3">
                    <h6 className="title">Property For Rent</h6>
                        <ul className="list-unstyled">
                        <AllCategoriesNav cat={"Property for Rent"}/>

                           
                        </ul>
                    </div> 
              
          
                    <div className="col-megamenu mt-3">
                    <h6 className="title">Jobs</h6>
                        <ul className="list-unstyled">
                        <AllCategoriesNav cat={"Jobs"}/>

                           
                        </ul>
                    </div>  
              
                </div>
                <div className="col-md-3">
                  
               
                    <div className="col-megamenu mt-3">
                    <h6 className="title">Services</h6>
                        <ul className="list-unstyled">
                        <AllCategoriesNav cat={"Services"}/>

                           
                        </ul>
                    </div> 
              
          
                    <div className="col-megamenu mt-3">
                    <h6 className="title">Books, Sports & Hobbies</h6>
                        <ul className="list-unstyled">
                        <AllCategoriesNav cat={"Books, Sports & Hobbies"}/>

                           
                        </ul>
                    </div>  
              
                    <div className="col-megamenu mt-3">
                    <h6 className="title">Kids</h6>
                        <ul className="list-unstyled">
                        <AllCategoriesNav cat={"Kids"}/>

                        </ul>
                    </div> 
                </div>

                </div>

                    {/* <div className="row">
                        <div className="col-md-3">
                            <div className="col-megamenu mt-3">
                                <h6 className="title">Title Menu One</h6>
                                <ul className="list-unstyled">
                                   
                                </ul>
                            </div> 
                        </div>
                        <div className="col-md-3">
                            <div className="col-megamenu mt-3">
                            <h6 className="title">Title Menu Two</h6>
                                <ul className="list-unstyled">
                                   
                                </ul>
                            </div> 
                        </div>
                        <div className="col-md-3">
                            <div className="col-megamenu mt-3">
                            <h6 className="title">Title Menu Three</h6>
                                <ul className="list-unstyled">
                                   
                                </ul>
                            </div>  
                        </div>    
                        <div className="col-md-3">
                            <div className="col-megamenu mt-3">
                            <h6 className="title">Title Menu Four</h6>
                                <ul className="list-unstyled">
                                </ul>
                            </div> 
                        </div>
                        <div className="col-md-3">
                            <div className="col-megamenu mt-3">
                                <h6 className="title">Title Menu One</h6>
                                <ul className="list-unstyled">
                                </ul>
                            </div> 
                        </div>
                        <div className="col-md-3">
                            <div className="col-megamenu mt-3">
                            <h6 className="title">Title Menu Two</h6>
                                <ul className="list-unstyled">
                                
                                </ul>
                            </div> 
                        </div>
                        <div className="col-md-3">
                            <div className="col-megamenu mt-3">
                            <h6 className="title">Title Menu Three</h6>
                                <ul className="list-unstyled">
                                    <li className="mt-n2"><Link >Custom Menu</Link></li>
                                    <li className="mt-n2"><Link >Custom Menu</Link></li>
                                    <li className="mt-n2"><Link >Custom Menu</Link></li>
                                    <li className="mt-n2"><Link >Custom Menu</Link></li>
                                    <li className="mt-n2"><Link >Custom Menu</Link></li>
                                </ul>
                            </div>  
                        </div>    
                        <div className="col-md-3">
                            <div className="col-megamenu mt-3">
                            <h6 className="title">Title Menu Four</h6>
                                <ul className="list-unstyled">
                                </ul>
                            </div> 
                        </div>
                        <div className="col-md-3">
                            <div className="col-megamenu mt-3">
                                <h6 className="title">Title Menu One</h6>
                                <ul className="list-unstyled">
                                </ul>
                            </div> 
                        </div>
                        <div className="col-md-3">
                            <div className="col-megamenu mt-3">
                            <h6 className="title">Title Menu Two</h6>
                                <ul className="list-unstyled">
                                </ul>
                            </div> 
                        </div>
                        <div className="col-md-3">
                            <div className="col-megamenu mt-3">
                            <h6 className="title">Title Menu Three</h6>
                                <ul className="list-unstyled">
                                </ul>
                            </div>  
                        </div>    
                        <div className="col-md-3">
                            <div className="col-megamenu mt-3">
                            <h6 className="title">Title Menu Four</h6>
                                <ul className="list-unstyled">
                                </ul>
                            </div> 
                        </div>


                    </div> */}
        </div>
    </li>
    
    <li className="nav-item more"> <Link to={{pathname:'/filtercategory/'+mobile}} className="nav-link black" > Mobile Phones </Link> </li>
    <li className="nav-item more"><Link to={{pathname:'/filtercategory/'+cars}} className="nav-link black" > Cars </Link></li>
    <li className="nav-item more"><Link to={{pathname:'/filtercategory/'+motorcycles}} className="nav-link black" > Motorcycles </Link></li>
    <li className="nav-item more"> <Link to={{pathname:'/filtercategory/'+houses}} className="nav-link black" > Houses </Link> </li>
    <li className="nav-item more"><Link to={{pathname:'/filtercategory/'+tv}} className="nav-link black" > TV-Video-Audio </Link></li>
    <li className="nav-item more"><Link to={{pathname:'/filtercategory/'+tablets}} className="nav-link black" > Tablets </Link></li>
    <li className="nav-item more"> <Link to={{pathname:'/filtercategory/'+land}} className="nav-link black" > Land & Plots </Link> </li>
</ul>

</nav>

                </div>

            </>
        )
    }
}

export default Navigation