import {
  Box,
  Image,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  useBreakpointValue,
  Button,
  Flex,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import React from "react";
import styles from "../stylesheet/Faq.module.css";
import question from "../Assets/Faq/questionCircle.svg";

export const FAQ = () => {
  const faqData = [
    {
      title: "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "2. Lorem ipsum dolor sit amet",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "3. Lorem ipsum dolor sit amet, consectetur",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "4. Lorem ipsum dolor sit amet, consectetur",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "5. Lorem ipsum dolor sit amet, consectetur adipiscing",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "6. Lorem ipsum",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "7. Lorem ipsum dolor sit",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  const isSmallerScreen = useBreakpointValue({ base: true, lg: false });

  return (
    <Box maxW={"7xl"} margin={"auto"}>
      <Box>
        <Text className={styles.heading}>
          <Image src={question} w={"40px"} />
          FAQ'S
        </Text>
      </Box>
      <>
        <Accordion defaultIndex={[0]} allowMultiple>
          {faqData.map((item, index) => (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className={styles.question}
                  >
                    {item.title}
                  </Box>
                  <AddIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                textAlign={"left"}
                className={styles.answer}
              >
                {isSmallerScreen
                  ? `${item.content.substring(0, 100)}...`
                  : item.content}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </>
      <Box
        m={"60px 0 40px 0"}
        p={"10px 20px"}
        bg={"#f4ecf9"}
        textAlign={"start"}
      >
        <Text fontWeight={"bold"}>Anything not clear?</Text>
        <Flex
          gap={"20px"}
          alignItems={"center"}
          flexDir={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row",
            "2xl": "row",
          }}
        >
          <Text mt={"15px"} color={"gray.600"}>
            You can see our detailed F&Q sessions if you have more quiries. Also
            we are always a single call away for all your special asks...
          </Text>
          <Button mt={"10px"} variant={"none"} className={styles.btn}>
            CONTACT US
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
