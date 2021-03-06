
const API_URL = 'https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev';

const request = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        else {
            const errorData = await response.json();
            throw errorData;
        }
    } 
    catch(e) {
        throw {
            message: e.message,
            status: e.status
        };
    }
};

const api = {
    getRoot: async () => {
        try {
            const result = await request(API_URL);
            return {isError: false, data: result};
        }
        catch(e) {
            return {isError: true, data: e};
        }
    }
}

export { api };