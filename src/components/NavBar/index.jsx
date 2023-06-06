import {
    ContainerNavBar,
    SectionPaths,
    Logo,
    Paths,
    Path,
    SectionButtons,
    Login,
    SignUp
} from './styles'

import Logoicon from '../../assets/logo.svg'

function NavBar() {
    return (
        <ContainerNavBar>
            <SectionPaths>
                <Logo src={Logoicon} />
                <Paths>
                    <Path>Features</Path>
                    <Path>Pricing</Path>
                    <Path>Resources</Path>
                </Paths>
            </SectionPaths>
            <SectionButtons>
                <Login>Login</Login>
                <SignUp>Sign Up</SignUp>
            </SectionButtons>
        </ContainerNavBar>
    )
}

export default NavBar;