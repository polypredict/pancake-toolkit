import React from "react";
import Box from "../Box/Box";
import Flex from "../Box/Flex";
import Text from "../Text/Text";
import Svg from "./Svg";
import { LogoIcon } from ".";
import ArrowDropDown from "./Icons/ArrowDropDown.tsx";

export default {
  title: "Components/Svg Icons",
  component: Svg,
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <div>
      <LogoIcon />
      <Svg color="red" viewBox="0 0 18 13">
        <path d="M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" />
      </Svg>
      <Svg color="primary" width="50px" viewBox="0 0 18 13">
        <path d="M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" />
      </Svg>
    </div>
  );
};

const context = require.context("./Icons", true, /.tsx$/);
const components = context.keys().reduce((accum, path) => {
  const file = path.substring(2).replace(".tsx", "");
  return {
    ...accum,
    [file]: context(path),
  };
}, {});

export const Icons: React.FC = () => {
  return (
    <Flex justifyContent="start" alignItems="center" flexWrap="wrap">
      {Object.keys(components).map((file) => {
        const Icon = components[file].default;
        return (
          <Flex
            key={file}
            flexDirection="column"
            alignItems="center"
            width="128px"
            style={{ border: "1px solid #eee" }}
            justifyContent="center"
            py="8px"
            m="4px"
          >
            <Flex alignItems="center" justifyContent="center" style={{ flex: 1 }} height="100%">
              <Icon width="48px" />
              <Icon width="24px" color="secondary" ml="4px" />
            </Flex>
            <Box py="4px">
              <Text color="textSubtle" fontSize="14px">
                {file}
              </Text>
            </Box>
          </Flex>
        );
      })}
    </Flex>
  );
};
