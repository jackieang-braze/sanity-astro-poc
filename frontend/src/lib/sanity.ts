import { sanityClient } from 'sanity:client'
import type { PortableTextBlock, Slug, Image } from 'sanity'
import groq from 'groq'
import type { HeadingSize, TshirtSize } from 'bl-astro'

export async function getExams(): Promise<CertificationExamType[]> {
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

export async function getExam(slug: string): Promise<CertificationExamType> {
	return await sanityClient.fetch(
		groq`*[_type == "certificationExam" && slug.current == $slug][0]`,
		{ slug }
	)
}

export async function getExamViaID(id: string): Promise<CertificationExamType> {
	return await sanityClient.fetch(groq`*[_type == "certificationExam" && _id == $id][0]`, { id })
}
export async function getTestimonialViaID(id: string): Promise<TestimonialCardType> {
	return await sanityClient.fetch(groq`*[_type == "testimonialCard" && _id == $id][0]`, { id })
}

export interface CertificationExamType {
	_type: 'certificationExam'
	_createdAt: string
	_updatedAt: string
	_ref: string
	cardType: 'certification'
	title: string
	slug: Slug
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
export interface CardTypes {
	certification: CertificationExamType
	testimonial: TestimonialCardType
}
export interface ModuleTypes {
	hero: HeroType
	announcementBanner: AnnouncementBannerType
	cta: CTAType
	courseCardSection: CourseCardSectionType
	testimonialSection: TestimonialSectionType
	fullWidthBanner: FullWidthBannerType
	faqSection: FAQSectionType
	faq: FAQType[]
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
	gridHeading: HeadingGroupType
	width: 'md' | 'lg'
	columnsAtFullWidth: number
	cardSection: CertificationExamType[]
}
export interface HeadingGroupType {
	_type: 'headingGroup' | 'heading'
	_rev: string
	_id: string
	_ref: string
	heading: string
	subheading: string
	headingSize: HeadingSize
}
export interface CourseCardSectionType {
	_type: 'courseCardSection'
	_rev: string
	_id: string
	_ref: string
	content: CourseCardGridType[]
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

export interface TestimonialSectionType {
	_type: 'testimonialSection'
	_rev: string
	_id: string
	_ref: string
	testimonialHeading: HeadingGroupType
	testimonialCards: TestimonialCardType[]
	testimonialCta: CTAType
	backgroundColor: 'teal-700' | 'blue-50' | 'white'
	columnsAtFullWidth: number
}

export interface TestimonialCardType {
	_type: 'testimonialCard'
	_rev: string
	_id: string
	_ref: string
	companyName: string
	highlighted: string
	testimonial: string
	sourceName: string
	sourceDescription: string
	headshot: Image
	companyLogo: AllyImage
	logoImgUrl: string
	headshotImgUrl: string
}

export interface AllyImage extends Image {
	alt: string
}

export interface FullWidthBannerType {
	_type: 'fullWidthBanner'
	_rev: string
	_id: string
	_ref: string
	heading: HeadingGroupType
	body: PortableTextBlock[]
	cta: CTAType[]
	backgroundColor: Color
	contentWidth: TshirtSize
}

export interface Color {
	label: string
	value: string
}

export interface FAQSectionType {
	_type: 'faqSection'
	_rev: string
	_id: string
	_ref: string
	heading: HeadingGroupType
	content: FAQContentType[]
}

export interface FAQContentType {
	_type: 'faq'
	_rev: string
	_id: string
	_ref: string
	heading: string
	questions: FAQType[]
}
export interface FAQType {
	_type: 'faq'
	_rev: string
	_id: string
	_ref: string
	question: string
	answer: PortableTextBlock[]
}
