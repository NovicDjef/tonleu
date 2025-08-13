import { baseMeta } from '~/utils/meta';

export function meta() {
  return baseMeta({
    title: 'Articles',
    description:
      'A collection of technical design and development articles. May contain incoherent ramblings.',
  });
}

export { Articles as default } from './articles';
