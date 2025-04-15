import { Controller, Get } from '@nestjs/common';
import { QueryService } from './query.service';

@Controller('query')
export class QueryController {
  constructor(private readonly queryService: QueryService) {}

  @Get('slow')
  slowQuery() {
    console.log('Slow query started');
    return this.queryService.slowQuery();
  }
}
