import {
    ContainerBanner,
    Text,
    Button,
    SectionText
} from './styles'

import background from '../../assets/bg-boost-desktop.svg'

function Banner() {
    return (
        <ContainerBanner style={{ backgroundImage: `url(${background})` }}>
            <SectionText>
                <Text>
                    Boost your links today
                </Text>
                <Button>
                    Get Started
                </Button>
            </SectionText>
        </ContainerBanner>
    )
}

export default Banner;