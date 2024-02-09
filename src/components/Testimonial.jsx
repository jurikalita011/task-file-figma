import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../stylesheet/Testimonial.module.css";
import hands from "../Assets/Testimonials/handHeart.svg";
import accountant from "../Assets/Testimonials/accountant.svg";
import invertedComma from "../Assets/Testimonials/invertedComma.svg";

export const Testimonial = () => {
  return (
    <Box className={styles.cont}>
      <Box
        className={styles.main}
        w={{
          base: "100%",
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "90%",
          "2xl": "85%",
        }}
      >
        <Flex className={styles.headingFlex}>
          <Image src={hands} />
          <Text
            className={styles.heading}
            fontSize={{
              base: "18px",
              sm: "18px",
              md: "20px",
              lg: "30px",
              "2xl": "40px",
            }}
          >
            What Our Customer Says
          </Text>
        </Flex>
        <Flex
          className={styles.flexMain}
          flexDir={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row",
            "2xl": "row",
          }}
        >
          <Image src={accountant} />
          <Image src={invertedComma} />
          <Box className={styles.paraBox}>
            <Text>SUNIT GUPTA</Text>
            <Text>Chartered Accountant</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              odio vitae justo vestibulum bibendum ac in sem. Sed varius tellus
              et purus iaculis, id varius odio rhoncus. Vestibulum vestibulum
              lacinia tortL orem ipsum dolor sit amet, consectetur adipiscing
              elit. Nullam in odio vitae justo vestibulum bibendum ac in sem.
              Sed varius tellus et purus iaculis, id varius odio rhoncus.
              Vestibulum vestibulum lacinia tortor, et convallis libero vehicula
              ut. or, et convallis libero vehicula ut.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
