import { useState, useEffect } from "react";
import {
  ContainerHeader,
  SectionLogo,
  Logo,
  SectionPaths,
  ListPaths,
  Path,
  SectionButton,
  Button,
  SectionMenu,
  SectionMobile,
  Overlay,
  SectionPathsMobile,
  ListPathsMobile,
  PathMobile,
  SectionHeader,
  Icon,
} from "./styles";

import Logoicon from "../../assets/logo.svg";
import Menu from "../../assets/icon-hamburger.svg";
import Close from "../../assets/icon-close.svg";

function NavBar() {
  const [showNavBar, setShowNavBar] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const mobile = width <= 768;

  return (
    <ContainerHeader>
      {!mobile ? (
        <>
          <SectionLogo>
            <Logo src={Logoicon} alt="Logo" />
          </SectionLogo>
          <SectionPaths>
            <ListPaths>
              <Path>Features</Path>
              <Path>Pricing</Path>
              <Path>Resources</Path>
            </ListPaths>
          </SectionPaths>
          <SectionButton>
            <Button>Login</Button>
          </SectionButton>
        </>
      ) : (
        <>
          {!showNavBar ? (
            <SectionMobile>
              <SectionLogo>
                <Logo src={Logoicon} alt="Logo" />
              </SectionLogo>
              <SectionMenu>
                <Logo
                  onClick={() => setShowNavBar(true)}
                  src={Menu}
                  alt="menu"
                />
              </SectionMenu>
            </SectionMobile>
          ) : (
            <Overlay data-testid="overlay">
              <SectionHeader>
                <SectionLogo>
                  <Logo src={Logoicon} alt="Logo" />
                </SectionLogo>
                <Icon
                  onClick={() => setShowNavBar(false)}
                  src={Close}
                  alt="close"
                />
              </SectionHeader>
              <SectionPathsMobile>
                <ListPathsMobile>
                  <PathMobile>Features</PathMobile>
                  <PathMobile>Pricing</PathMobile>
                  <PathMobile>Resources</PathMobile>
                </ListPathsMobile>
              </SectionPathsMobile>
            </Overlay>
          )}
        </>
      )}
    </ContainerHeader>
  );
}

export default NavBar;
