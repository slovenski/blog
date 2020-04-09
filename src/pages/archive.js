import React from 'react';
import { graphql } from 'gatsby';
import { PageHeader } from '@ds';
import PageLayout from '@layouts/page-layout';
import { ArchiveList } from '@components/archive-list';

const Archive = ({
  data: {
    archive: { archives },
  },
}) => (
  <PageLayout title="Archive" pathname="/archive" maxWidth={7} px={3}>
    <PageHeader title="Archive" />

    <main>
      <ArchiveList archives={archives} />
    </main>
  </PageLayout>
);

export const pageQuery = graphql`
  query Archive {
    archive: allArchiveJson {
      archives: nodes {
        id
        link
        title
        description
        featured
        slides
      }
    }
  }
`;

export default Archive;
