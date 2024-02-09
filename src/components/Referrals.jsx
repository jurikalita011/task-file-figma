import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import styles from "../stylesheet/Referrals.module.css";
import friends from "../Assets/Referrals/phone.svg";

export const Referrals = () => {
  return (
    <Flex className={styles.cont} direction={{ base: "column", lg: "row" }}>
      <Box
        textAlign={{ base: "center", lg: "center" }}
        mb={{ base: 4, md: 0 }}
        marginLeft={{ base: "60px", lg: "100px" }}
      >
        <Text mb={"25px"}>Refer & Earn Now</Text>
        <Text>Get a ₹500 Big Basket gift card</Text>
        <Button
          w={{ base: "80%", sm: "80%", md: "70%", lg: "70%" }}
          borderRadius={"4px"}
          mt={"20px"}
          mb={"20px"}
          mr={{ base: "30px", sm: "0", lg: "40px", "2xl": "100px" }}
          alignSelf={{ base: "center", lg: "flex-start", "2xl": "flex-start" }}
          background={"var(--1, #8800EC)"}
        >
          <Text fontSize={"16px"} color={"white"} textAlign={"center"}>
            REFER AND EARN
          </Text>
        </Button>
        <Text
          className={styles.terms}
          fontSize="xs"
          textDecoration={"underline"}
          textAlign={{
            base: "center",
            sm: "center",
            lg: "center",
            "2xl": "left",
          }}
        >
          Terms and Conditions apply
        </Text>
      </Box>
      <Box
        mt={{ base: 4, md: 0 }}
        marginLeft={{ base: "auto", md: "auto" }}
        marginRight={{ base: "auto", md: "159px" }}
      >
        <Box
          width={{
            base: "275px",
            md: "300px",
            lg: "350px",
          }}
          height={{
            base: "275px",
            md: "300px",
            lg: "350px",
          }}
        >
          <Box>
            <Image
              src={friends}
              alt="Image 1"
              width={{
                base: "275px",
                md: "300px",
                lg: "350px",
              }}
              height={{
                base: "275px",
                md: "300px",
                lg: "350px",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
