import {
    ContainerSecondContent,
    SectionText,
    Title,
    SubTitle,
    SectionCards,
    FirstCard,
    Image,
    TitleCard,
    TextCard,
    SecondCard,
    ThirdCard
} from './styles'

import Recognition from '../../assets/icon-brand-recognition.svg'
import Detailed from '../../assets/icon-detailed-records.svg'
import Customizable from '../../assets/icon-fully-customizable.svg'

function SecondContent() {
    return (
        <ContainerSecondContent>
            <SectionText>
                <Title>Advanced Statistics</Title>
                <SubTitle>
                    Track how your links are performing across the web with our advanced statistics dashboard.
                </SubTitle>
            </SectionText>
            <SectionCards>
                <FirstCard>
                    <Image src={Recognition} />
                    <TitleCard>Brand Recognition</TitleCard>
                    <TextCard>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content</TextCard>
                </FirstCard>
                <SecondCard>
                    <Image src={Detailed} />
                    <TitleCard>Detailed Records</TitleCard>
                    <TextCard>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</TextCard>
                </SecondCard>
                <ThirdCard>
                    <Image src={Customizable} />
                    <TitleCard>Fully Customizable</TitleCard>
                    <TextCard>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</TextCard>
                </ThirdCard>
            </SectionCards>
        </ContainerSecondContent>
    )
}

export default SecondContent;