import { sanityClient } from "sanity:client";
import imageUrlBuilder from "@sanity/image-url";

export const imgBuilder = imageUrlBuilder(sanityClient);

export function urlForImage(source) {
  return imgBuilder.image(source);
}