import { Error } from '~/layouts/error';

export const meta = () => {
  return [{ title: '404 | Redacted' }];
};

export default function NotFound() {
  const error = { status: 404, statusText: 'Not found' };
  return <Error error={error} />;
}
