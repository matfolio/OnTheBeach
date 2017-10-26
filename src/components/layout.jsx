import React from 'react';
import Operation from './operations.jsx';
import Content from './content.jsx';


// Component for Displaying the layout of the App
// Just a simple Component
class Layout extends React.Component {

   render() {
      return (
         <div style={{textAlign:"center"}}>
         	<Operation/>
    		<Content />
         </div>
      );
   }
}
export default Layout;