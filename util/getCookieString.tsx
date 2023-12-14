import { cookies } from 'next/headers'


const getCookieString = () => cookies().getAll().map(({ name, value }) => `${name}=${value}`).join(";")

export default getCookieString