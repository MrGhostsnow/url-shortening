import { useState } from 'react';
import {
    ContainerShorten,
    Input,
    Button,
    ContainerResultsShort,
    Result,
    Warning,
    SectionResult,
    Original,
    ButtonCopy,
    Divider
} from './styles'

import background from '../../assets/bg-shorten-desktop.svg'

function Shorten() {

    const [shortLink, setShortLink] = useState('')
    const [linkformated, setLinkFormated] = useState([])
    const [linkOriginal, setLinkOriginal] = useState([])
    const [showWarning, setShowWarning] = useState(false)
    const [showResult, setShowResult] = useState(false)

    const handleChange = (e) => {
        setShortLink(e.target.value)
    }

    async function findShortLink() {
        if (shortLink !== '') {
            const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${shortLink}`);
            const link = await response.json();
            setLinkFormated([link.result.short_link])
            setLinkOriginal([link.result.original_link])
            setShortLink('')
            setShowWarning(false)
            setShowResult(true)
        } else {
            setShowWarning(true)
        }
    }

    console.log(linkOriginal)



    return (
        <ContainerResultsShort>
            <ContainerShorten style={{ backgroundImage: `url(${background})` }}>
                <Input value={shortLink} onChange={handleChange} placeholder='Shorten a link here...' style={{ border: showWarning ? '1px solid red' : 'none' }} />
                {showWarning && (
                    <Warning>Add a link</Warning>
                )}
                <Button onClick={findShortLink}>Shorten it!</Button>
            </ContainerShorten>
            {showResult && (
                <SectionResult>
                    <Original>
                        {linkOriginal}
                    </Original>
                    <Divider />
                    <Result>
                        {linkformated}
                    </Result>
                    <ButtonCopy>
                        Copy
                    </ButtonCopy>
                </SectionResult>
            )}
        </ContainerResultsShort>
    )
}

export default Shorten;