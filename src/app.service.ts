import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { faker } from '@faker-js/faker';
import { Prisma } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async createUser(payload: Prisma.UserCreateInput) {
    console.log('@@ payload');
    console.log(payload);
    const newUser = await this.prisma.user.create({
      data: {
        name: payload.name,
        email: faker.datatype.uuid(),
        profile: payload.profile,
      },
    });
    console.log('@ RESULT');
    console.log(newUser);

    return newUser;
  }

  async createPost(payload: Prisma.PostUncheckedCreateInput) {
    const newPost = await this.prisma.post.create({
      data: {
        content: faker.lorem.paragraph(),
        writerId: Math.round(Math.random() * 10000) + 3,
      },
    });
    console.log('@ RESULT');
    console.log(newPost);

    return newPost;
  }
}
