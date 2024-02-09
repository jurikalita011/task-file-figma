import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import styles from "../stylesheet/EmiCalculator.module.css";
import handStar from "../Assets/Emi/handStar.svg";
import ellipse from "../Assets/Emi/ellipse.svg";

export const EmiCalculator = () => {
  return (
    <Box className={styles.cont}>
      <Flex className={styles.headingFlex}>
        <Image src={handStar} />
        <Text>EMI Calculator</Text>
      </Flex>
      <Flex
        justifyContent={"space-between"}
        flexDirection={{ base: "column", sm: "column", md: "row" }}
      >
        <Box className={styles.main} w={{ base: "100%", md: "80%", lg: "30%" }}>
          <Box mb={"20px"}>
            <Text>Loan Amount</Text>
            <InputGroup>
              <InputLeftAddon children="₹" />
              <Input
                readOnly
                type="text"
                value={"300000"}
                placeholder="Enter Loan Amount"
              />
            </InputGroup>
            <Slider
              mt={"10px"}
              aria-label="slider-ex-2"
              color={"#FF0096"}
              colorScheme="pink"
              defaultValue={30}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>
          <Box mb={"20px"}>
            <Text>Interest Rates(%)</Text>
            <InputGroup>
              <InputLeftAddon children="%" />
              <Input
                readOnly
                type="text"
                value={"10.5"}
                placeholder="Enter Loan Amount"
              />
            </InputGroup>
            <Slider
              mt={"10px"}
              aria-label="slider-ex-2"
              color={"#FF0096"}
              colorScheme="pink"
              defaultValue={30}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>
          <Box mb={"20px"}>
            <Text>Loan Tenure(In Months)</Text>
            <InputGroup>
              <InputLeftAddon children="Months" />
              <Input
                readonly
                type="text"
                value={"24"}
                placeholder="Enter Loan Amount"
              />
            </InputGroup>
            <Slider
              mt={"10px"}
              aria-label="slider-ex-2"
              color={"#FF0096"}
              colorScheme="pink"
              defaultValue={30}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>
        </Box>
        <Flex
          className={styles.main2}
          w={{ base: "100%", md: "65%" }}
          flexDirection={{ base: "column", lg: "row" }}
          borderRadius={"10px"}
        >
          <Box w={{ base: "100%", lg: "48%" }} fontWeight={"500"}>
            <Image src={ellipse} />
            <Flex mt={"40px"} justifyContent={"space-between"}>
              <Flex gap={"10px"} alignItems={"center"}>
                <Box
                  borderRadius={"1px"}
                  w={"10px"}
                  h={"10px"}
                  bg={"#FF0096"}
                ></Box>
                <Text>Pricipal Amount</Text>
              </Flex>
              <Text color={"#8800EC"} fontWeight={"500"}>
                ₹3,00,000
              </Text>
            </Flex>
            <Flex mt={"40px"} justifyContent={"space-between"}>
              <Flex gap={"10px"} alignItems={"center"}>
                <Box
                  borderRadius={"1px"}
                  w={"10px"}
                  h={"10px"}
                  bg={"#BFBFBF"}
                ></Box>
                <Text>Pricipal Amount</Text>
              </Flex>
              <Text color={"#8800EC"} fontWeight={"500"}>
                ₹59,454
              </Text>
            </Flex>
            <Flex mt={"40px"} justifyContent={"space-between"}>
              <Text>Total Amount Payable</Text>
              <Text color={"#8800EC"} fontWeight={"500"}>
                ₹3,59,454
              </Text>
            </Flex>
          </Box>
          <Flex
            w={{ base: "100%", lg: "40%" }}
            position={"relative"}
            flexDirection={"column"}
          >
            <Box className={styles.rightCont}>
              <Text className={styles.rightTxt}>
                Equated Monthly Installments (EMI)
              </Text>
              <Text className={styles.rightTxt2}>₹14,977</Text>
            </Box>

            <Flex className={styles.btnFlex}>
              <Button
                className={styles.btn}
                backgroundColor=" var(--1, #8800ec)"
                color={"white"}
              >
                APPLY NOW
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
