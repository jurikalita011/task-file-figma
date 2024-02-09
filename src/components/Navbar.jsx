import { Box, Flex, Image, Input, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import logo from "../Assets/Logo.svg";
import { Link } from "react-router-dom";
import styles from "../stylesheet/Navbar.module.css";
import search from "../Assets/search.svg";
import location from "../Assets/location.svg";
import cart from "../Assets/cart.svg";
import bell from "../Assets/bell.svg";
import profile from "../Assets/profile.svg";
import { HamburgerIcon } from "@chakra-ui/icons";
import { DrawerLeft } from "./DrawerLeft";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box>
      <Flex
        boxShadow={"base"}
        p={"24px"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <DrawerLeft
          onOpen={onOpen}
          btnRef={btnRef}
          isOpen={isOpen}
          onClose={onClose}
        />
        <Flex className={styles.cont1}>
          <Box
            fontSize={"20px"}
            display={{
              base: "block",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "none",
              "2xl": "none",
            }}
          >
            <HamburgerIcon
              ref={btnRef}
              onClick={() => {
                onOpen();
              }}
            />
          </Box>
          <Box>
            <Image src={logo} />
          </Box>
          <Flex
            gap={"24px"}
            alignItems={"center"}
            display={{
              base: "none",
              sm: "none",
              md: "flex",
              lg: "flex",
              xl: "flex",
              "2xl": "flex",
            }}
          >
            <Link to={"#"}>Offers</Link>
            <Link to={"#"}>Stories</Link>
            <Link to={"#"}>Tata Pay</Link>
            <Link to={"#"}>NeuPass</Link>
          </Flex>
        </Flex>
        <Flex className={styles.cont2}>
          <Flex
            className={styles.flex1}
            alignItems={"center"}
            display={{
              base: "none",
              sm: "none",
              md: "none",
              lg: "flex",
              xl: "flex",
              "2xl": "flex",
            }}
          >
            <Input
              pl={"28px"}
              bg={"gray.200"}
              _focusVisible={"none"}
              placeholder="Search Tata Neu"
              _placeholder={{ color: "black" }}
            />
            <Box>
              <Image
                src={search}
                position={"absolute"}
                top={"15px"}
                left={"8px"}
              />
            </Box>
          </Flex>
          <Flex alignItems={"center"} gap={"3px"}>
            <Text
              display={{
                base: "none",
                sm: "none",
                md: "flex",
                lg: "flex",
                xl: "flex",
                "2xl": "flex",
              }}
              fontWeight={"500"}
            >
              122018
            </Text>
            <Box>
              {" "}
              <Image src={location} />
            </Box>
          </Flex>

          <Flex position={"relative"} alignItems={"center"} gap={"25px"}>
            <Box>
              <Image src={cart} />
            </Box>
            <Box
              position={"absolute"}
              w={"10px"}
              h={"10px"}
              right={"0"}
              top={"6%"}
              borderRadius={"50%"}
              bg={"#006A6A"}
            ></Box>
            <Box>
              <Image src={bell} />
            </Box>
            <Box>
              <Image src={profile} />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
