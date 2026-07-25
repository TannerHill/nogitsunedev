import { Axios } from 'axios';

export class ApiClient {
    private readonly client: Axios
    
    constructor() {
        this.client = new Axios({
            transformResponse: (data) => JSON.parse(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    async submitContactRequest(message: string, replyTo: string): Promise<boolean> {
        try {
            const requestBody = JSON.stringify({
                message,
                replyTo
            });

            const response = await this.client.post('/api/contact', requestBody);

            return response.data.success;
        }
        catch(e) {
            console.log(e);
            return false;
        }
    }
}