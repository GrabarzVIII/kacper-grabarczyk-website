export const BLOG_CATEGORIES = {
	dane: { label: 'Dane', description: 'Analiza danych, SQL, BI i inżynieria danych.' },
	geek: { label: 'Geek', description: 'Technologie, narzędzia i techniczne eksperymenty.' },
	ai: { label: 'AI', description: 'Sztuczna inteligencja, modele językowe i automatyzacja.' },
} as const;

export type BlogCategory = keyof typeof BLOG_CATEGORIES;
