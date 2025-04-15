import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';

@Injectable()
export class QueryService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async slowQuery() {
    // Simulasi query berat
    await this.userRepository.query(`
      SELECT pg_sleep(5); -- simulasi delay 5 detik
      SELECT * FROM "user";
    `);
    return []
  }
}
