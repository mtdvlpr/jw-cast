import type { JwLangCode, Language } from '@/types/lang';
import type { MediaItem, MediaItemVideo } from '@/types/mediator';

export function languageLabel(item: Language) {
  return item.name === item.vernacular ? item.name : `${item.name} (${item.vernacular})`;
}

/**
 * Finds the best image from a list of images.
 * @param images The images to find the best image from.
 * @returns The best image.
 */
export function findBestImage(images: MediaItem['images'], ratio: '16x9' | '2x1' = '16x9') {
  for (const type of ratio === '16x9' ? imageTypes : imageTypes.slice(2)) {
    for (const size of imageSizes) {
      const image = images[type]?.[size];
      if (image) {
        return image;
      }
    }
  }

  return null;
}

const mediaCache = new Map<string, MediaItemVideo>();

export async function fetchMediaItem(code: JwLangCode, lank: string) {
  const url = `${__MEDIATOR_URL__}/media-items/${code}/${lank}?clientType=www`;
  if (mediaCache.has(url)) {
    return mediaCache.get(url);
  }

  try {
    const res = await fetch(url);
    const data = (await res.json()) as { media: [MediaItemVideo] };

    const mediaItem = data.media[0] || null;
    if (mediaItem) {
      mediaCache.set(url, mediaItem);
    }

    return mediaItem;
  } catch (error) {
    console.debug('Error fetching media item:', error);
  }

  return null;
}
