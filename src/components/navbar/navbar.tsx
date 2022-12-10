import './navbar.css';
import LinkCustom from './custom_link';
import {NavbarProps} from '../../declarations'

function Navbar(props: NavbarProps): JSX.Element {

    return(
        <div className="navbarBG flex-row">
            <LinkCustom dir="" index="1" currentIndex={props.page} value="Home" />
            <LinkCustom dir="timeline" index="2" currentIndex={props.page} value="Timeline" />
            <LinkCustom dir="about" index="3" currentIndex={props.page} value="About Me" />
            <LinkCustom dir="contact" index="4" currentIndex={props.page} value="Contact" />
        </div>
    )
    
};

export default Navbar;