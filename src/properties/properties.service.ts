import { Injectable, NotFoundException } from '@nestjs/common';
import { MOCK_PROPERTIES } from 'src/mock';
import { PartialGetPropertiesDto } from './dto/get-properties.dto';
@Injectable()
export class PropertiesService {
  private properties = [...MOCK_PROPERTIES];

  findAll() {
    return this.properties;
  }

  findOne(id: number) {
    const filteredProperties = this.properties.filter(
      (property) => property.id === id,
    );
    if (filteredProperties.length === 0)
      throw new NotFoundException('Property not found');
    return filteredProperties;
  }

  searchWithFilters(searchQuery: PartialGetPropertiesDto) {
    const { beds, baths } = searchQuery;
    let filteredProperties = this.properties;

    if (beds) {
      filteredProperties = filteredProperties.filter(
        (property) => property.beds === +beds,
      );
    }

    if (baths) {
      filteredProperties = filteredProperties.filter(
        (property) => property.baths === +baths,
      );
    }

    return filteredProperties;
  }
}
