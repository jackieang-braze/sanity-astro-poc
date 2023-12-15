import { sanityClient } from 'sanity:client'
import type { PortableTextBlock, ImageAsset, Slug } from 'sanity'
import groq from 'groq'

export async function getExams(): Promise<CertificationExam[]> {
  return await sanityClient.fetch(
    groq`*[_type == "certificationExam" && defined(slug.current) ]`
  )
}

export async function getPages(): Promise<Page[]> {
  return await sanityClient.fetch(
    groq`*[_type == "page" && defined(slug.current)]`
  )
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
  return await sanityClient.fetch(groq`*[_id == $id][0]`, { id })
}

export async function getExam(slug: string): Promise<CertificationExam> {
  return await sanityClient.fetch(
    groq`*[_type == "certificationExam" && slug.current == $slug][0]`,
    { slug }
  )
}

export async function getExamViaID(id: string): Promise<CertificationExam> {
  return await sanityClient.fetch(
    groq`*[_type == "certificationExam" && _id == $id][0]`,
    { id }
  )
}
export interface CertificationExam {
  _type: 'certificationExam'
  _createdAt: string
  _updatedAt: string
  _ref: string
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
  modules: ModuleTypes[]
}

export interface ModuleTypes {
  hero: Hero
  announcementBanner: AnnouncementBanner
  courseSection: CourseSection
  cta: CTA
}

export interface ModuleReference {
  _type: keyof ModuleTypes
  _rev: string
  _id: string
  _ref: string
}

export interface Hero {
  _type: 'hero'
  _rev: string
  _id: string
  _ref: string
  title: string
  subtitle: string
  image: ImageAsset
  cta: ModuleReference
}
export interface AnnouncementBanner {
  _type: 'announcementBanner'
  _rev: string
  _id: string
  _ref: string
  title: string
  subtitle: string
  cta: ModuleReference
}
export interface CourseSection {
  _type: 'courseSection'
  _rev: string
  _id: string
  _ref: string
  title: string
  subtitle: string
  cta: ModuleReference
}
export interface CTA {
  _type: 'cta'
  _rev: string
  _id: string
  _ref: string
  title: string
  link: 'external' | 'internal' | 'target'
  externalLink: string
  internalLink: ModuleReference
  targetLink: string
  showArrow: boolean
}
