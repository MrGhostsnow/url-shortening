import {
    SectionHeader,
    SectionText,
    Title,
    Subtitle,
    Button,
    SectionImage,
    Image
} from './styles'

import Working from '../../assets/illustration-working.svg'

function Header() {
    return (
        <SectionHeader>
            <SectionText>
                <Title>More than just shorter links</Title>
                <Subtitle>Build your brand's recognition and get detailed insights on how your links are performing.</Subtitle>
                <Button>Get Started</Button>
            </SectionText>
            <SectionImage>
                <Image src={Working} />
            </SectionImage>
        </SectionHeader>
    )
}

export default Header;