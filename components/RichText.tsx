import Image from 'next/image'
import { urlFor } from '../src/lib/sanity.client' // اتأكدي من مسار الملف اللي إنتي لسه عاملاه

export const RichTextComponents = {
    types: {
        // ترجمة الصور عشان تظهر بمقاس مظبوط وسريعة
        image: ({ value }: any) => (
            <div className="relative w-full h-96 my-10">
                <Image
                    src={urlFor(value).url()}
                    alt={value.alt || 'Karyani House Image'}
                    fill
                    className="object-contain rounded-lg"
                />
            </div>
        ),
        // ترجمة صندوق الاتصال (التصميم اللي كنتي عاملاه زمان)
        contactCard: ({ value }: any) => (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-700">📍 {value.officeLocation}</p>
                <p className="text-gray-800 font-semibold my-1">📞 {value.phone}</p>
                <a href={value.website} target="_blank" className="text-blue-600 underline text-sm">
                    {value.website}
                </a>
            </div>
        ),
    },
}