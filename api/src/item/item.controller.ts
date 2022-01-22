import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from '../user.decorator';
import { UserPath } from '../user-path.decorator';
import { ItemDTO } from '../dto/item.dto';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {
  constructor(private serv: ItemService) {}

  @Get()
  public async getAll(): Promise<ItemDTO[]> {
    return await this.serv.getAll();
  }

  @Post()
  public async post(
    @UserPath() user: User,
    @Body() dto: ItemDTO,
  ): Promise<ItemDTO> {
    return this.serv.create(dto, user);
  }
}
