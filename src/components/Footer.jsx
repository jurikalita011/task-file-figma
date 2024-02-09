import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../stylesheet/Footer.module.css";
import logo from "../Assets/Footer/logo.svg";
import fb from "../Assets/Footer/fb.svg";
import insta from "../Assets/Footer/insta.svg";
import youtube from "../Assets/Footer/youtube.svg";
import linkedin from "../Assets/Footer/linkedin.svg";

export const Footer = () => {
  return (
    <Box className={styles.cont}>
      <Flex
        gap={"20px"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
      >
        <Box w={"20%"}>
          <Image src={logo} />
          <HStack mt={"40px"} gap={"40px"} alignItems={"center"}>
            <Box>
              <Image src={fb} />
            </Box>
            <Box>
              <Image src={linkedin} />
            </Box>
            <Box>
              {" "}
              <Image src={youtube} />
            </Box>
            <Box>
              {" "}
              <Image src={insta} />
            </Box>
          </HStack>
        </Box>
        <Flex
          gap={"20px"}
          color={"gray.200"}
          w={{
            base: "100%",
            sm: "100%",
            md: "100%",
            lg: "45%",
            xl: "45%",
            "2xl": "45%",
          }}
          justifyContent={"space-between"}
          fontSize={"13px"}
          textAlign={"start"}
        >
          <Box lineHeight={"35px"}>
            <Text className={styles.txt}>Help & Support</Text>
            <Text>Terms & service</Text>
            <Text>Privacy Policy</Text>
            <Text>FAQ</Text>
          </Box>
          <Box lineHeight={"35px"}>
            <Text className={styles.txt}>Customer care</Text>
            <Text>2972 Westheimer Rd. Santa Ana, Illinois 85486</Text>
            <Text>987654321</Text>
            <Text>Tataneu Email ID</Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
