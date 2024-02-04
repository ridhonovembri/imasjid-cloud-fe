import http from '@/api/http'

class Get {
    masjidInfo(){
        return http.get('/masjidInfo')
    }
}

export default new Get();
