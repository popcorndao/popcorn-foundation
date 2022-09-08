export const isOdd = (num: number) => num % 2 !== 0;

export const removeImage = (content: string) => {
  const regex = /<img[^>]*>/g;
  return content.replace(regex, '');
}