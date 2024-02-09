import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../stylesheet/TopSection.module.css";
import family from "../Assets/TopSection/family.svg";
import wallet from "../Assets/TopSection/wallet.svg";
import lightning from "../Assets/TopSection/lightning.svg";
import rate from "../Assets/TopSection/rate.svg";
import doc from "../Assets/TopSection/doc.svg";

export const TopSection = () => {
  return (
    <Box>
      <Flex
        className={styles.cont}
        p={{
          base: "10px",
          sm: "10px",
          md: "10px",
          lg: "41px 80px 0 80px",
          xl: "41px 80px 0 80px",
          "2xl": "41px 80px 0 80px",
        }}
        flexDir={{
          base: "column-reverse",
          sm: "column-reverse",
          md: "column-reverse",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
      >
        <Box
          className={styles.box1}
          w={{
            base: "100%",
            sm: "100%",
            md: "100%",
            lg: "60%",
            xl: "60%",
            "2xl": "60%",
          }}
        >
          <Heading
            className={styles.heading}
            fontSize={{
              base: "30px",
              sm: "30px",
              md: "50px",
              lg: "50px",
              xl: "50px",
              "2xl": "50px",
            }}
          >
            Turn Dreams Into Reality With{" "}
            <Box as={"span"} className={styles.span}>
              Personal Loans
            </Box>
          </Heading>
          <Flex
            className={styles.flex1}
            gap={{
              base: "20px",
              sm: "20px",
              md: "100px",
              lg: "100px",
              xl: "100px",
              "2xl": "100px",
            }}
          >
            <Flex className={styles.child}>
              <Image src={wallet} className={styles.img} />
              <Box>
                <Text className={styles.txt1}>Avail Zero</Text>
                <Text>Processing Fee</Text>
              </Box>
            </Flex>
            <Flex className={styles.child}>
              <Image src={lightning} className={styles.img} />
              <Box>
                <Text className={styles.txt1}>Quick</Text>
                <Text>Personal Loan</Text>
              </Box>
            </Flex>
          </Flex>
          <Flex
            className={styles.flex2}
            gap={{
              base: "20px",
              sm: "20px",
              md: "108px",
              lg: "100px",
              xl: "100px",
              "2xl": "100px",
            }}
          >
            <Flex className={styles.child}>
              <Image src={rate} className={styles.img} />
              <Box>
                <Text className={styles.txt1}>Lowest</Text>
                <Text>Interest Rates</Text>
              </Box>
            </Flex>
            <Flex className={styles.child2}>
              <Image src={doc} className={styles.img} />
              <Box>
                <Text className={styles.txt1}>Miniamal</Text>
                <Text>Documentation</Text>
              </Box>
            </Flex>
          </Flex>
          <Button
            p={window.screen.availWidth < 430 ? "12px 40px" : "8px 16px"}
            variant={"none"}
            className={styles.btn}
          >
            APPLY NOW
          </Button>
        </Box>
        <Box
          className={styles.box2}
          w={{
            base: "100%",
            sm: "100%",
            md: "100%",
            lg: "40%",
            xl: "40%",
            "2xl": "40%",
          }}
        >
          <Image w={"100%"} src={family} />
        </Box>
      </Flex>
    </Box>
  );
};
