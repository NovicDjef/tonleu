export function formatDate(date) {
  return new Date(date).toLocaleDateString('fr-CA', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });
}
