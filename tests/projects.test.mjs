import test from 'node:test';
import assert from 'node:assert/strict';
import { selectFeaturedProjects } from '../src/lib/projects.ts';

function project(id, overrides = {}) {
	return { id, data: { draft: false, featured: true, featuredOrder: 100, date: new Date('2026-01-01'), ...overrides } };
}

test('landing excludes drafts and projects not explicitly featured', () => {
	const entries = [project('draft', { draft: true, featuredOrder: 1 }), project('ordinary', { featured: false }), project('visible')];
	assert.deepEqual(selectFeaturedProjects(entries).map(p => p.id), ['visible']);
});

test('manual order takes priority over recency; landing has at most three projects', () => {
	const entries = [project('fourth', { featuredOrder: 4 }), project('second', { featuredOrder: 2 }), project('first', { featuredOrder: 1, date: new Date('2020-01-01') }), project('third', { featuredOrder: 3 })];
	assert.deepEqual(selectFeaturedProjects(entries).map(p => p.id), ['first', 'second', 'third']);
	assert.equal(entries[0].id, 'fourth');
});

test('ties use newest date, then stable id order', () => {
	assert.deepEqual(selectFeaturedProjects([project('z'), project('a'), project('new', { date: new Date('2026-06-01') })]).map(p => p.id), ['new', 'a', 'z']);
});

test('no selection remains empty, without automatic fallback', () => {
	assert.deepEqual(selectFeaturedProjects([project('ordinary', { featured: false })]), []);
});
