import app from './app';
import request from 'supertest'
import { response } from 'express';

describe('GET /user', async () => {
    it('responds with json', async () => {
        request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect(response.statusCode, 200)
            .expect(response.json)
            console.log(response)
    });
});