import TurndownService from 'turndown';

export const htmlToMarkdown = (html: string) => {
  const service = new TurndownService();

  return service.turndown(html);
};
