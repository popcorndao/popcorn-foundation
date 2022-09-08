export const isOdd = (num: number) => num % 2 !== 0;

export const removeImage = (content: string) => {
  const regex = /<img[^>]*>/g;
  return content.replace(regex, '');
}

// function to truncate multiline html
export const truncateHtml = (html: string, length: number, clamp: string) => {
  const node = document.createElement('div');
  node.innerHTML = html;

  const content = node.textContent;
  return content.length > length ? content.slice(0, length) + clamp : content;
}