import React from 'react';
import { Box, H2, SimpleLink, FlatList, ListItem, Text, Flex, Icon } from '@ds';

export const ArchiveList = ({ archives }) => (
  <FlatList>
    {archives.map(archive => (
      <ListItem key={archive.id} mb={0}>
        <Flex borderBottom="faded" alignItems="center" py={3}>
          <Box>
            <Text mb={1} lineHeight="solid" color="neutral.2" fontSize={0}>
              {archive.description}
            </Text>
            <H2 mb={0} fontSize={2} fontWeight={5} to={archive.link}>
              {archive.title}
            </H2>
          </Box>
          <Box flex="1" />
          {archive.link && (
            <SimpleLink
              display="block"
              mb={0}
              p={2}
              lineHeight="solid"
              fontSize={1}
              title="gist"
              color="neutral.2"
              to={archive.link}
            >
              <Icon type="markdown" />
            </SimpleLink>
          )}
          {archive.slides && (
            <SimpleLink
              display="block"
              ml={2}
              mb={0}
              p={2}
              lineHeight="solid"
              fontSize={1}
              title="slides"
              color="neutral.2"
              to={archive.slides}
            >
              <Icon type="slides" />
            </SimpleLink>
          )}
          {archive.video && (
            <SimpleLink
              display="block"
              ml={2}
              mb={0}
              p={2}
              lineHeight="solid"
              fontSize={1}
              title="video"
              color="neutral.2"
              to={archive.video}
            >
              <Icon type="video" />
            </SimpleLink>
          )}
        </Flex>
      </ListItem>
    ))}
  </FlatList>
);
