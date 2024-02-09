import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "../stylesheet/Eligibility.module.css";
import eligibilty from "../Assets/Eligibility/eligibility.svg";
import apply from "../Assets/Eligibility/apply.svg";
import doc from "../Assets/Eligibility/doc.svg";
import fee from "../Assets/Eligibility/fee.svg";
import img from "../Assets/Eligibility/img.svg";

export const Eligibility = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabsData = [
    {
      img: eligibilty,
      title: "Eligibility",
      content: [
        {
          heading: "Citizenship proof",
          text: "Indian citizen with valid ID proof",
        },
        { heading: "Age", text: "23 to 58 years of age" },
        { heading: "Lorem", text: "Lorem ipsum" },
        { heading: "Ipsum", text: "Ipsum lorem" },
      ],
    },
    {
      img: apply,
      title: "How to apply",
      content: [
        { heading: "Step 1", text: "Lorem ipsum dolor sit amet" },
        { heading: "Step 2", text: "Consectetur adipiscing elit" },
        { heading: "Step 3", text: "Sed do eiusmod tempor incididunt" },
      ],
    },
    {
      img: doc,
      title: "Documentation",
      content: [
        { heading: "Document 1", text: "Ut enim ad minim veniam" },
        { heading: "Document 2", text: "Quis nostrud exercitation ullamco" },
        {
          heading: "Document 3",
          text: "Duis aute irure dolor in reprehenderit",
        },
      ],
    },
    {
      img: fee,
      title: "Fees & Charges",
      content: [
        { heading: "Fee 1", text: "Excepteur sint occaecat cupidatat" },
        { heading: "Fee 2", text: "Non proident, sunt in culpa qui" },
        {
          heading: "Fee 3",
          text: "Officia deserunt mollit anim id est laborum",
        },
      ],
    },
  ];

  return (
    <Box className={styles.cont}>
      <Tabs
        className={styles.tabs}
        variant="enclosed"
        display={{ base: "flex", lg: "block" }}
        width={{ base: "120%", lg: "100%" }}
        justifyContent={{ base: "flex-start" }}
      >
        <TabList
          display={{ base: "flex" }}
          flexDirection={{ base: "column", lg: "row" }}
        >
          {tabsData.map((tab, index) => {
            return (
              <Tab
                className={styles.tab}
                w={{ base: "90%", lg: "60%" }}
                textDecoration={{
                  base: selectedTab === index ? "underline" : "none",
                  lg: "none",
                }}
                color={selectedTab === index ? "var(--1, #8800EC)" : "gray.500"}
                onClick={() => setSelectedTab(index)}
              >
                <Image
                  src={tab.img}
                  color={
                    selectedTab === index ? "var(--1, #8800EC)" : "gray.500"
                  }
                />
                <Text
                  className={styles.tabTxt}
                  fontWeight={selectedTab === index ? "600" : "400"}
                >
                  {tab.title}
                </Text>
              </Tab>
            );
          })}
        </TabList>
        <TabPanels>
          {tabsData.map((tab) => {
            return (
              <TabPanel
                display={"flex"}
                justifyContent={{ base: "flex-start", lg: "space-around" }}
              >
                <Box w={"50%"} textAlign={"start"}>
                  {tab?.content?.map((item, ind) => {
                    return (
                      <Box
                        key={ind}
                        mb={"40px"}
                        w={{ base: "180%", lg: "" }}
                        ml={{ lg: "50px" }}
                        mt={{ base: "0px", lg: "40px" }}
                      >
                        <Flex alignItems={"center"} gap={"8px"}>
                          <Text className={styles.heading}>
                            ⭐ {item.heading}
                          </Text>
                        </Flex>
                        <Text ml={"2.9%"} className={styles.txt}>
                          {item.text}
                        </Text>
                      </Box>
                    );
                  })}
                </Box>
                <Box w={"30%"}>
                  <Image src={img} height={{ base: "0", md: "105%" }} />
                </Box>
              </TabPanel>
            );
          })}
        </TabPanels>
      </Tabs>
    </Box>
  );
};
