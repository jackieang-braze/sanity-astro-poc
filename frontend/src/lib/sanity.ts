import { sanityClient } from 'sanity:client'
import type { PortableTextBlock, Slug, ImageAsset, Image } from 'sanity'
import groq from 'groq'
import type { TshirtSize } from 'bl-astro'
import PortableTextImage from '@components/PortableTextImage.astro'

export async function getExams(): Promise<CertificationExam[]> {
	return await sanityClient.fetch(groq`*[_type == "certificationExam" && defined(slug.current) ]`)
}

export async function getPages(): Promise<Page[]> {
	return await sanityClient.fetch(groq`*[_type == "page" && defined(slug.current)]`)
}
export async function getPublishedPages(): Promise<Page[]> {
	return await sanityClient.fetch(
		groq`*[_type == "page" && defined(slug.current) && !(_id in path("drafts.**")) ]`
	)
}

export async function getDrafts(): Promise<Page[]> {
	return await sanityClient.fetch(
		groq`*[_type == "page" && defined(slug.current) && _id in path("drafts.**") ]`
	)
}
export async function getPage(slug: string): Promise<Page> {
	return await sanityClient.fetch(
		groq`*[_type == "page" && defined(slug.current) && slug.current == $slug][0]`,
		{ slug }
	)
}

export async function getModuleViaID<T>(id: string): Promise<T> {
	if (!id) {
		throw new Error('No ID provided')
	}
	return await sanityClient.fetch(groq`*[_id == $id][0]`, { id })
}
export async function getModuleViaKey<T>(key: string): Promise<T> {
	if (!key) {
		throw new Error('No key provided')
	}
	return await sanityClient.fetch(groq`*[_key == $key][0]`, { key })
}

export async function getExam(slug: string): Promise<CertificationExam> {
	return await sanityClient.fetch(
		groq`*[_type == "certificationExam" && slug.current == $slug][0]`,
		{ slug }
	)
}

export async function getExamViaID(id: string): Promise<CertificationExam> {
	return await sanityClient.fetch(groq`*[_type == "certificationExam" && _id == $id][0]`, { id })
}
export interface CertificationExam {
	_type: 'certificationExam'
	_createdAt: string
	_updatedAt: string
	_ref: string
	cardType: 'certification'
	title: string
	slug: string
	shortDescription: string
	longDescription: PortableTextBlock[]
	details: ExamDetails
}

export interface ExamDetails {
	_type: 'examDetails'
	examLevel: 1 | 2 | 3 | 4
	examFormat: string
	examDuration: number
	examNumberOfQuestions: number
	examPassingScore: number
	examPrice: number
}

export interface Page {
	_type: 'page'
	_createdAt: string
	_updatedAt: string
	slug: Slug
	title: string
	modules: ModuleReference[]
	hero: HeroType
}

export interface ModuleTypes {
	hero: HeroType
	announcementBanner: AnnouncementBannerType
	courseCardGrid: CourseCardGridType
	cta: CTAType
}

export interface ModuleReference {
	_type: keyof ModuleTypes
	_key: string
}

export interface HeroType {
	_type: 'hero'
	_rev: string
	_id: string
	_ref: string
	eyebrow: string
	heading: string
	subheading: string
	image: Image
	ctas: CTAType[]
}
export interface AnnouncementBannerType {
	_type: 'announcementBanner'
	_rev: string
	_id: string
	_ref: string
	heading: string
	subheading: string
	bannerImage: Image
	cta: CTAType
	url: string
	width: TshirtSize
	statusFlag: 'New!' | undefined
}
export interface CourseCardGridType {
	_type: 'courseCardGrid'
	_rev: string
	_id: string
	_ref: string
	heading: string
	subheading: string
	cta: CTAType
	cardSection: CertificationExam[]
}
export interface CTAType {
	_type: 'cta'
	_rev: string
	_id: string
	_ref: string
	ctaText: string
	externalLink: string
	showArrow: boolean
	icon: string
	variant: 'primary' | 'secondary' | 'tertiary'
}
