import { Outlet } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import { Post, postMarkdown } from '~/layouts/post';
import { baseMeta } from '~/utils/meta';
import config from '~/config.json';
import { formatTimecode, readingTime } from '~/utils/timecode';


export function meta() {
  return baseMeta({ 
    title: 'Article', 
    description: 'Article content' 
  });
}

export default function Articles() {
  // Static data for now since loader was removed
  const frontmatter = { title: 'Article', date: new Date().toISOString() };
  const timecode = '00:00:00';

  return (
    <MDXProvider components={postMarkdown}>
      <Post {...frontmatter} timecode={timecode}>
        <Outlet />
      </Post>
    </MDXProvider>
  );
}
