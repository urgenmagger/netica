import { IMAGE_URLS } from 'common/C';

export const getImageUrls = (count: number): string[] => {
  return Array.from({ length: count }, (_, i) => `${IMAGE_URLS}${i + 1}`);
};
