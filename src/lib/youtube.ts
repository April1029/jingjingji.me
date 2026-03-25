export function ytThumb(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

export function ytUrl(videoId: string): string {
  return `https://www.youtube.com/watch?v=${videoId}`;
}
