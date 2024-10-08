import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  return [
    {
      url: `https://hyukbon.com`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `https://hyukbon.com/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 2,
    },
  ];
}
