import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Typography from "@material-ui/core/Typography";
import teal from "@material-ui/core/colors/teal";
import gridTheme from "../../themes/gridTheme";
import { Box, Flex, Image } from "rebass"
import WhatsNewBanner from "./WhatsNewBanner"
import WhatsNewInfo1 from "./WhatsNewInfo1"
import aboutImg1 from "../images.1/2002034EL.jpg"
import aboutImg2 from "../images.1/2002034GL.jpg"
import aboutImg3 from "../images.1/2002034HL.jpg"

const styles = theme => ({

});

class WhatsNewSection1 extends React.Component {
    
      render() {
        const { data } = this.props;
    
        return (
          <div>
            <Flex flexWrap='wrap'>
                <Image
                    width={[1, 2/3, 2/3]}
                    src={aboutImg1}
                    height={['100%', 300, 500]}
                />
                <WhatsNewInfo1 />
            </Flex>
          </div>
        );
      }
}

WhatsNewSection1.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
export default gridTheme(withStyles(styles)(WhatsNewSection1));