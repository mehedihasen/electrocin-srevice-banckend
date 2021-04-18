import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee} from '@fortawesome/free-solid-svg-icons'
import {  faFacebookF, faGoogle, faInstagram, faTwitter , } from '@fortawesome/free-brands-svg-icons';

import './Fotter.css'

const Fotter = () => {
    return (
        <div className='fotter'>
         <div className="fotterbody">
         <p>Connect with us</p>
         <table>
        
             <tr>
                
                 <td className="icon"> <FontAwesomeIcon icon={faFacebookF} /></td>
                 <td className="icon"><FontAwesomeIcon icon={faGoogle} /></td>
                 <td className="icon"><FontAwesomeIcon icon={faTwitter} /></td>
                 <td className="icon"><FontAwesomeIcon icon={faInstagram} /></td>
                 
             </tr>
         </table>
        
         <p>© 2021 Kaodim. All rights reserved</p>
         </div>
            
        </div>
    );
};

export default Fotter;