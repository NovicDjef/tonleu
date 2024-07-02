import { Link } from '~/components/link';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https://tonleu.com">Primary link</Link>
    <Link secondary href="https://tonleu.com">
      Secondary link
    </Link>
  </StoryContainer>
);
