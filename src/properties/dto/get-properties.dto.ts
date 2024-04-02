import { IsNumberString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class GetPropertiesDto {
  @IsNumberString()
  beds: number;

  @IsNumberString()
  baths: number;
}

export class PartialGetPropertiesDto extends PartialType(GetPropertiesDto) {}
