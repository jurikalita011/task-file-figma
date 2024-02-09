import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../stylesheet/Highlights.module.css";
import star from "../Assets/Highlights/Star.svg";
import star2 from "../Assets/Highlights/star2.svg";
import man from "../Assets/Highlights/man.svg";

export const Highlights = () => {
  return (
    <Box textAlign={"start"}>
      <Box
        p={{
          base: "10px",
          sm: "10px",
          md: "10px",
          lg: "6% 7% 0 4%",
          xl: "6% 7% 0 4%",
          "2xl": "6% 7% 0 4%",
        }}
      >
        <Flex className={styles.flex1}>
          <Image className={styles.star1} src={star} />
          <Text>Personal Loan Highlights</Text>
        </Flex>
        <Flex
          className={styles.flex2}
          flexDir={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row",
            "2xl": "row",
          }}
        >
          <Image
            className={styles.manImg}
            w={{
              base: "100%",
              sm: "100%",
              md: "100%",
              lg: "38%",
              xl: "38%",
              "2xl": "38%",
            }}
            src={man}
          />
          <Box
            className={styles.box}
            w={{
              base: "100%",
              sm: "100%",
              md: "100%",
              lg: "55%",
              xl: "55%",
              "2xl": "55%",
            }}
          >
            <Box>
              <Flex>
                <Image src={star2} />
                <Text className={styles.txt1}>Interest Rate</Text>
              </Flex>
              <Text>
                Usually <Box as="span">10.49% p.a.</Box> onwards: some PSUs may
                offer lower rates
              </Text>
            </Box>
            <Box>
              <Flex>
                <Image src={star2} />
                <Text className={styles.txt1}>Loan Amount</Text>
              </Flex>
              <Text>
                Can go up to <Box as="span">Rs 40 lakh:</Box> some lenders may
                offer higher loan amount
              </Text>
            </Box>
            <Box>
              <Flex>
                <Image src={star2} />
                <Text className={styles.txt1}>Processing Fees</Text>
              </Flex>
              <Text>
                <Box as="span">0.5% to 4%</Box> of loan amount (may vary across
                lenders)
              </Text>
            </Box>
            <Box>
              <Flex>
                <Image src={star2} />
                <Text className={styles.txt1}>Tenure</Text>
              </Flex>
              <Text>
                Up to <Box as="span">5 years</Box> (some lenders offer repayment
                period till 8 year)
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
