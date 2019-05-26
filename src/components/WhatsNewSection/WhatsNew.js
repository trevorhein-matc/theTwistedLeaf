import React from 'react';
import WhatsNewBanner from '../WhatsNewSection/WhatsNewBanner'
import WhatsNewSection1 from '../WhatsNewSection/WhatsNewSection1'
import WhatsNewSection2 from '../WhatsNewSection/WhatsNewSection2'
import WhatsNewSection3 from '../WhatsNewSection/WhatsNewSection3'

class WhatsNew extends React.Component {
    
      render() {
    
        return (
          <div>
            <WhatsNewBanner />
            <WhatsNewSection1 />
            <WhatsNewSection2 />
            <WhatsNewSection3 />
          </div>
        );
      }
}
  
export default WhatsNew;