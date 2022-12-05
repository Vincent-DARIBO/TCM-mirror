import { Module } from '@nestjs/common';
import { BlockedService } from './blocked.service';
import { BlockedResolver } from './blocked.resolver';

@Module({
  providers: [BlockedResolver, BlockedService]
})
export class BlockedModule {}
