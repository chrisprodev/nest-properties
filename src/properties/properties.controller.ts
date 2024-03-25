import { Controller, Get, Param } from '@nestjs/common';

@Controller('properties')
export class PropertiesController {
  /*
     - get /properties
     - get /properties/:id
    */

  @Get()
  findAll() {
    return [];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }
}
