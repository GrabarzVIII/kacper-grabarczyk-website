interface ProjectSummary {
	id: string;
	data: {
		draft: boolean;
		featured: boolean;
		featuredOrder: number;
		date: Date;
	};
}

export function selectFeaturedProjects<T extends ProjectSummary>(projects: T[]): T[] {
	return projects
		.filter((project) => !project.data.draft && project.data.featured)
		.sort((a, b) =>
			a.data.featuredOrder - b.data.featuredOrder ||
			b.data.date.valueOf() - a.data.date.valueOf() ||
			a.id.localeCompare(b.id)
		)
		.slice(0, 3);
}
