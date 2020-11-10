import React from 'react'
import AppRouter from './Config/router.js'

class App extends React.Component{
  render(){
    return(
      <>
       
        <AppRouter/>
        
      </>
    )
  }
}

export default App


// import React from 'react'
// import {connect} from 'react-redux'

// class App extends React.Component{
//   render(){
//     console.log(this.props)
//     return(
//       <>
       
        
        
//       </>
//     )
//   }
// }

// const mapStateToProps = (state) => ({
//   name:state.name
// })

// export default connect(mapStateToProps,null)(App)