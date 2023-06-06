import { Logo } from '../Header/styles';
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
    Copyright
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
                {/* <Logo src={Logoicon} alt='Logo' width={200} /> */}
                <SectionSocials>
                    {/* <Social src={FB} />
                    <Social src={TT} />
                    <Social src={PR} />
                    <Social src={IG} /> */}
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
            <SectionThree>
                <SectionEmail>
                    <Input type="text" name="email" placeholder='Updates in your box...' />
                    <Button type="submit" value="Go" />
                </SectionEmail>
                <Copyright>Copyright 2020. All Rights Reserved</Copyright>
            </SectionThree>
        </ContainerFooter>
    )
}

export default Footer;