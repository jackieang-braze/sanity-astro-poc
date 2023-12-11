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
    groq`*[_type == "page" && defined(slug.current) ]`
  )
}
export async function getPage(slug: string): Promise<Page> {
  return await sanityClient.fetch(
    groq`*[_type == "page" && slug.current == $slug][0]`,
    { slug }
  )
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
  examFormat: string
  examPassingScore: number
  examPrice: number
}

export interface Page {
  _type: 'page'
  _createdAt: string
  _updatedAt: string
  slug: Slug
  title: string
  content: CertificationExam[]
}

export interface Hero {
  _type: 'hero'
  _createdAt: string
  _updatedAt: string
  heading: string
  subheading: ImageAsset
}
