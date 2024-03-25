import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertiesModule } from './properties/properties.module';
import { SearchModule } from './search/search.module';

@Module({
  imports: [PropertiesModule, SearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
