import React from 'react';
import { Stack, Text, Box } from '@ds';

export const ArchiveFeatured = ({ archive, ...props }) => (
  <Stack {...props}>
    <Stack.Title to="/archive">Archive</Stack.Title>

    {archive.map(archive => (
      <Stack.Item
        key={archive.id}
        to={archive.link || '/'}
        justifyContent="space-between"
      >
        <Box measure="narrow" mr={3} flex="1 1 auto" truncate>
          {archive.title}
        </Box>
        <Text
          as="span"
          mb={0}
          style={{ whiteSpace: 'nowrap' }}
          lineHeight="solid"
          color="neutral.2"
          fontSize={0}
        >
          {archive.description}
        </Text>
      </Stack.Item>
    ))}
    <Stack.MoreLink to="/archive">View all archive</Stack.MoreLink>
  </Stack>
);
