export function limitChar(title: string, limit: number): string {
  if (title.length > limit) {
    return title.substring(0, limit) + "...";
  }
  return title;
}
