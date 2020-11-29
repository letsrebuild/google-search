import { Injectable } from '@nestjs/common';
import { Message } from '@lets-rebuild/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
