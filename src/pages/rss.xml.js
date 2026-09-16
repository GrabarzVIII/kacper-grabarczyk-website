import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from '../consts';

export async function GET() {
	const posts = (await getCollection('blog')).filter((post) => !post.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: SITE_URL,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			link: `/blog/${post.id}/`,
			pubDate: post.data.date,
		})),
		xmlns: {
			atom: 'http://www.w3.org/2005/Atom',
		},
		tablePrefix: false,
	});
}
