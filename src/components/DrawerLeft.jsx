import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const DrawerLeft = ({ isOpen, onClose, btnRef }) => {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Tata Neu</DrawerHeader>
          <DrawerBody>
            <Flex lineHeight={"40px"} flexDir={"column"}>
              <Link to={"#"}>Offers</Link>
              <Link to={"#"}>Stories</Link>
              <Link to={"#"}>Tata Pay</Link>
              <Link to={"#"}>NeuPass</Link>
            </Flex>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
