import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
export const client = createClient({
    projectId: "ur3moxsp", // الـ ID بتاعك اللي ظهر في الصور
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false, // عشان التعديلات تظهر فوراً
})


const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}