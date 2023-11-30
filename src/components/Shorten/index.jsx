import { useState } from "react";
import copy from "copy-to-clipboard";
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
  ButtonCopied,
  Divider,
} from "./styles";

import background from "../../assets/bg-shorten-desktop.svg";

function Shorten() {
  const [shortLink, setShortLink] = useState("");
  const [linkformated, setLinkFormated] = useState([]);
  const [linkOriginal, setLinkOriginal] = useState([]);
  const [showWarning, setShowWarning] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [copyText, setCopyText] = useState("");
  const [copied, setCopied] = useState(true);

  const handleChange = (e) => {
    setShortLink(e.target.value);
  };

  async function findShortLink() {
    try {
      if (shortLink !== "") {
        const response = await fetch(
          `https://api.shrtco.de/v2/shorten?url=${shortLink}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const link = await response.json();
        setLinkFormated([link.result.short_link]);
        setLinkOriginal([link.result.original_link]);
        setShortLink("");
        setShowWarning(false);
        setShowResult(true);
        setCopyText([link.result.short_link]);
      } else {
        setShowWarning(true);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
      // Handle the error, e.g., show an error message to the user
    }
  }

  console.log(linkOriginal);

  const copyToClipboard = () => {
    copy(copyText);
    setCopied(false);
  };

  return (
    <ContainerResultsShort>
      <ContainerShorten style={{ backgroundImage: `url(${background})` }}>
        <Input
          value={shortLink}
          onChange={handleChange}
          placeholder="Shorten a link here..."
          style={{ border: showWarning ? "1px solid red" : "none" }}
        />
        {showWarning && <Warning>Add a link</Warning>}
        <Button onClick={findShortLink}>Shorten it!</Button>
      </ContainerShorten>
      {showResult && (
        <SectionResult>
          <Original>{linkOriginal}</Original>
          <Divider />
          <Result>{linkformated}</Result>
          {copied ? (
            <ButtonCopy onClick={copyToClipboard}>Copy</ButtonCopy>
          ) : (
            <ButtonCopied>Copied!</ButtonCopied>
          )}
        </SectionResult>
      )}
    </ContainerResultsShort>
  );
}

export default Shorten;
