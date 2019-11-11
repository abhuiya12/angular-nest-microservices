import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';

@Injectable()
export class MathService {
    private client: ClientProxy;

    constructor() {
        this.client = ClientProxyFactory.create({
            transport : Transport.TCP,
            options: {
                host: 'localhost',
                port: 3001,
            },
        });
    }

    /**
     * name
     */
    public accumulate(data: number[]) {
        return this.client.send<number, number[]>('add', data);
    }
}