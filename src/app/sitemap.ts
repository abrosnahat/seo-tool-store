import { TOOLS } from '@/data/tools';

export default async function sitemap() {
  const baseUrl = 'https://seotoolstore.ru';

  const tools = TOOLS.flatMap((category) =>
    category.items.map((tool) => {
      return {
        url: `${baseUrl}/tools/${tool.url}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.25,
      };
    })
  );

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.25,
    },
    ...tools,
  ];
}
