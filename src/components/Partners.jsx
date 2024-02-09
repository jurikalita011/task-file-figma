import { Box, Flex, Grid, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import styles from "../stylesheet/Partners.module.css";

import hdfc from "../Assets/Partners/hdfc.svg";
import icici from "../Assets/Partners/icici.svg";
import baroda from "../Assets/Partners/baroda.svg";

export const Partners = () => {
  return (
    <Box>
      <Flex
        className={styles.flex1}
        p={{
          base: "10px",
          sm: "10px",
          md: "20px",
          lg: "60px 50px",
          xl: "60px 50px",
          "2xl": "60px 50px",
        }}
        flexDir={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
      >
        <Text
          mb={{
            base: "25px",
            sm: "25px",
            md: "25px",
            lg: "0",
            xl: "0",
            "2xl": "0",
          }}
          w={{
            base: "100%",
            sm: "100%",
            md: "100%",
            lg: "20%",
            xl: "20%",
            "2xl": "20%",
          }}
        >
          Our Partners
        </Text>
        <Grid
          className={styles.grid}
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(4, 1fr)",
            "2xl": "repeat(4, 1fr)",
          }}
        >
          <VStack>
            <Image src={hdfc} />
            <Text>HDFC Bank</Text>
          </VStack>
          <VStack>
            <Image src={icici} />
            <Text>ICICI Bank</Text>
          </VStack>
          <VStack>
            <Image src={icici} />
            <Text>ICICI Bank</Text>
          </VStack>
          <VStack>
            <Image src={baroda} />
            <Text>Bank of Baroda</Text>
          </VStack>
        </Grid>
      </Flex>
    </Box>
  );
};
