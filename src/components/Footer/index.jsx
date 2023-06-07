import {
    ContainerFooter,
    SectionOne,
    SectionSocials,
    Social,
    SectionTwo,
    Options,
    Option,
    SectionThree,
    SectionEmail,
    Input,
    Button,
    Copyright,
    Logo
} from './styles'

import Logoicon from '../../assets/logo.svg'
import FB from '../../assets/icon-facebook.svg'
import IG from '../../assets/icon-instagram.svg'
import PR from '../../assets/icon-pinterest.svg'
import TT from '../../assets/icon-twitter.svg'



function Footer() {
    return (
        <ContainerFooter>
            <SectionOne>
                <Logo src={Logoicon} />
                <SectionSocials>
                    <Social src={FB} />
                    <Social src={TT} />
                    <Social src={PR} />
                    <Social src={IG} />
                </SectionSocials>
            </SectionOne>
            <SectionTwo>
                <Options>
                    <Option>Home</Option>
                    <Option>Pricing</Option>
                    <Option>Products</Option>
                    <Option>About Us</Option>
                </Options>
                <Options>
                    <Option>Careers</Option>
                    <Option>Community</Option>
                    <Option>Privacy Policy</Option>
                </Options>
            </SectionTwo>
        </ContainerFooter>
    )
}

export default Footer;