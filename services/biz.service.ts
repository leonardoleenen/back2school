import Hashids from 'hashids'

class BizService {
    generateId(salt: string) {
        const hashids = new Hashids(salt, 10)

        return hashids.encode(1)
    }
}

export const bizService = new BizService()
