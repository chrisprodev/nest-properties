import { Controller, Get, Query } from '@nestjs/common';

@Controller('search')
export class SearchController {
  /*
     - get /search/:key
    */

  @Get()
  searchBy(@Query() query) {
    return { query };
  }
}
