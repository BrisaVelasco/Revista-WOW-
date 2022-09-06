import { Box } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import PhoneHeader from "./PhoneHeader";
import DesktopHeader from "./DesktopHeader";
import { SubHeader } from "./SubHeader";

export const Header = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {isMobile ? (
        <>
          <PhoneHeader />
        </>
      ) : (
      <Box
      position='sticky'
      top="1px"
      zIndex="916569406"
       >
      <DesktopHeader/>
      <SubHeader/>
      </Box>
      )}
    </>
  );
};
