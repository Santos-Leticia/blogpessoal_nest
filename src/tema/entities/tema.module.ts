import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tema } from './tema.entity';
import { TemaController } from '../controllers/tema.controllers';
import { TemaService } from '../services/tema.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tema])],
  providers: [TemaService],
  controllers: [TemaController],
  exports: [TemaService],
})
export class TemaModule {}
