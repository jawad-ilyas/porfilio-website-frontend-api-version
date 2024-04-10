// Single workspace configuration

import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


export const client = createClient({
    projectId: 'sni8d0iq',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2024-04-05', // use current date (YYYY-MM-DD) to target the latest API version
    token:'skA1tIEj39ysMjN8v0AiEvMRGab2m5vWcOx5ZIY50CHptIMEocTIZx8VrEQ8253yQ7GAQJudqGeJIaBufvGsztDuI1G3gx592jzArEmSB31O56SPVbccJcHziH3YTNdngCvLtYUzoc07Lkn6QZFWnloP5JkQvQg3rxOT8sTtPzPozntaFtRB'
})
const builder = imageUrlBuilder(client)

export default function urlFor(source) {
    return builder.image(source)
}