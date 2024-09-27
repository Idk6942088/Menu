import {data} from './data'

export const allCateg = () => {
    const categories = Array.from(new Set(data.map(obj=>obj.category)))
    return [...categories, 'all'].sort()
}