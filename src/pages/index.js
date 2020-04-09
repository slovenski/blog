import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@layouts/layout';
import { Box, H1, Text, Link, Flex } from '@ds';
import { Pronunciation } from '@components/pronunciation';
import { ProfileLinks } from '@components/profile-links';
import { Footer } from '@components/footer';
import { WritingFeatured } from '@components/writing-featured';
import { ArchiveFeatured } from '@components/archive-featured';
import { CycleMode } from '@components/cycle-mode';

const Home = ({ data }) => {
  const {
    site,
    writingFeatured: { posts },
    archiveFeatured: { archive },
  } = data;

  return (
    <Layout title="About" description={site.siteMetadata.description}>
      <Box maxWidth={9} mx="auto" px={[0, 0, 5]} alignItems="center">
        <Flex as="header" mt={6} mb={5} px={3}>
          <Box flex="1 1 auto">
            <H1 fontSize={3} mb={0} lineHeight="copy">
              <Pronunciation />
            </H1>
            <Text mb={0} measure="wide" fontSize={2}>
              finder of new ways to confuse myself
            </Text>
          </Box>
          <CycleMode />
        </Flex>

        <main>
          <Box as="section" mb={4} px={3}>
            <H1 mb={1} fontSize={3}>
              About
            </H1>
            <Text measure="wide" fontSize={[2, 3]}>
              I am Cyber Security Operation Engineer with strong focus on research, interactivity and development.
              I currently live in Jakarta, Indonesia and I have a job as the SecOps at{' '} <Link to="https://www.google.com/search?q=define%3Asomewhere&oq=define%3Asomewhere&aqs=chrome..69i57j69i58.309j0j7&sourceid=chrome&ie=UTF-8">somewhere</Link> that I couldn't tell you where it is. In my spare time, 
              I like to hangout with my family, community, friends, and making life happier.
            </Text>
          </Box>
          <ProfileLinks />

          <Flex flexWrap="wrap" justifyContent="space-between">
            <WritingFeatured posts={posts} mr={[3, 4]} />
            <ArchiveFeatured archive={archive} mr={3} />
          </Flex>

        </main>
        <Footer px={3} />
      </Box>
    </Layout>
  );
};

export const pageQuery = graphql`
  query AboutPage {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }

    writingFeatured: allMdx(
      limit: 4
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      posts: nodes {
        id
        excerpt
        frontmatter {
          title
          date(formatString: "Do MMMM, YYYY")
          timestamp: date
        }
        fields {
          slug
        }
      }
    }

    archiveFeatured: allArchiveJson(
      limit: 4
      filter: { featured: { eq: true } }
    ) {
      archive: nodes {
        id
        link
        title
        description
        featured
      }
    }  
  }
`;

export default Home;
