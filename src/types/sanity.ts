// تعريف شكل الصورة في سانيتي
export interface SanityImage {
    _type: 'image';
    asset: {
        _ref: string;
        _type: 'reference';
    };
    alt?: string;
}

// تعريف شكل صندوق الاتصال الديناميكي
export interface ContactCard {
    _type: 'contactCard';
    title: string;
    officeLocation: string;
    phone: string;
    website: string;
}

// تعريف شكل المقال بالكامل
export interface Post {
    _id: string;
    title: string;
    slug: { current: string };
    mainImage: SanityImage;
    body: any[]; // الـ Body يكون مصفوفة من الـ Portable Text
    publishedAt: string;
}