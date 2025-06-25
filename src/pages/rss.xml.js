import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Julian Zanetti | DevOps',
    description: 'Mi portfolio sobre DevOps, Kubernetes, Terraform y más.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>es-mx</language>`,
  });
}