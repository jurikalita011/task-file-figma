import { Box, Button, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import styles from "../stylesheet/Processes.module.css";
import backgroundImg from "../Assets/Processes/backgroundImg.svg";
import iphone from "../Assets/Processes/iphone.svg";
import range from "../Assets/Processes/range.svg";
import logo from "../Assets/Logo.svg";
import hospital from "../Assets/Processes/Hospital.svg";
import travel from "../Assets/Processes/Travel.svg";
import hammer from "../Assets/Processes/hammer.svg";
import shopping from "../Assets/Processes/Shopping.svg";
import building from "../Assets/Processes/Buildings.svg";
import lightning from "../Assets/Processes/lightning.svg";

export const Processes = () => {
  return (
    <Box className={styles.cont}>
      <Flex
        minH={"70vh"}
        className={styles.flex1}
        flexDir={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
      >
        <Box
          className={styles.box1}
          backgroundSize={"contain"}
          backgroundImage={`url(${backgroundImg})`}
          w={{
            base: "100%",
            sm: "100%",
            md: "100%",
            lg: "50%",
            xl: "50%",
            "2xl": "50%",
          }}
        >
          <Box className={styles.insideBox}>
            <Image src={iphone} w={{ base: "130%", lg: "95%" }} />
            <Image className={styles.box1Img2} src={logo} />
            <VStack className={styles.vstack1}>
              <Image src={shopping} w={{ base: "0", lg: "30px" }} />
              <Text color={"gray.600"} fontSize={"14px"}>
                Personal Loan
              </Text>
              <Text className={styles.txt2}>upto Rs 10 Lacs</Text>
            </VStack>
            <VStack
              className={styles.vstack2}
              bottom={{ base: "20%", lg: "18%" }}
            >
              <Image src={building} w={{ base: "0", lg: "30px" }} />
              <Text color={"gray.600"} fontSize={"14px"}>
                Flexible Repayment
              </Text>
              <Text className={styles.txt2}>at interest rate 10.49% p.a.</Text>
            </VStack>
          </Box>
          <Flex
            className={styles.outsideBox}
            top={"15%"}
            left={"13%"}
            bg={"#FFE0B3"}
          >
            <Image src={hospital} />
            <Text>Medical</Text>
          </Flex>
          <Flex
            className={styles.outsideBox}
            top={"9%"}
            right={"8%"}
            bg={"#B3E0FF"}
          >
            <Image src={hammer} />
            <Text>Rennovations</Text>
          </Flex>
          <Flex
            className={styles.outsideBox}
            top={"46%"}
            right={"8%"}
            bg={"#FFB3E0"}
          >
            <Image src={building} />
            <Text>School Loans</Text>
          </Flex>
          <Flex
            className={styles.outsideBox}
            bottom={"12%"}
            right={"17%"}
            bg={"#D0FFB3"}
          >
            <Image src={travel} />
            <Text>Travel</Text>
          </Flex>
          <Flex
            className={styles.outsideBox}
            bottom={"38%"}
            left={"11%"}
            bg={"#DFB3FF"}
          >
            <Image src={shopping} />
            <Text>Shopping</Text>
          </Flex>
        </Box>
        <Box
          h={"fit-content"}
          display={"grid"}
          placeItems={"center"}
          className={styles.box2}
          w={{
            base: "100%",
            sm: "100%",
            md: "100%",
            lg: "50%",
            xl: "50%",
            "2xl": "50%",
          }}
        >
          <Flex>
            <Image src={lightning} />
            <Text
              fontSize={{
                base: "19px",
                sm: "19px",
                md: "27px",
                lg: "30px",
                xl: "30px",
                "2xl": "30px",
              }}
              fontWeight={"500"}
            >
              Lightning Fast Process
            </Text>
          </Flex>
          <Box marginTop={"11%"}>
            <Image className="range-img" src={range} />
          </Box>
          <Flex
            justifyContent={"center"}
            w={{ base: "100%", lg: "80%" }}
            mb={"20px"}
          >
            <Button
              color={"white"}
              background={"var(--1, #8800EC)"}
              fontSize={"85%"}
              mt={"40px"}
              w={{
                base: "90%",
                sm: "90%",
                md: "60%",
                lg: "60%",
                xl: "60%",
                "2xl": "60%",
              }}
            >
              APPLY NOW
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
