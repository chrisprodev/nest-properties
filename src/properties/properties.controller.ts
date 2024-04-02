import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { PartialGetPropertiesDto } from './dto/get-properties.dto';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Get()
  getProperties(@Query() searchQuery: PartialGetPropertiesDto) {
    if (Object.keys(searchQuery).length) {
      return this.propertiesService.searchWithFilters(searchQuery);
    }
    return this.propertiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.propertiesService.findOne(id);
  }
}
