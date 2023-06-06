import {
    ContainerBanner,
    Text,
    Button,
    SectionText
} from './styles'

function Banner() {
    return (
        <ContainerBanner>
            <SectionText>
                <Text>
                    Simplify how your team works today.
                </Text>
                <Button>
                    Get Started
                </Button>
            </SectionText>
        </ContainerBanner>
    )
}

export default Banner;