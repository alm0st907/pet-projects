import { ApiProperty } from '@nestjs/swagger';

/*
 * todo: figure out if this is going to be stored in db or not
 * */
export class messageDto {
  @ApiProperty()
  textMessage: string;
  @ApiProperty()
  phoneNumber: string;
  @ApiProperty()
  userId: string;
}
