import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePosts } from './dto/create-posts.dto';

import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getAllPosts(): Promise<CreatePosts[]> {
    return this.postsService.getAllPosts();
  }

  @Get(':id')
  getOnePost(@Param('id') id: number): string {
    return this.postsService.getOnePost(id);
  }

  @Post()
  createPost(@Body() post: CreatePosts): string {
    return this.postsService.createPost(post);
  }

  @Put(':id')
  updatePost(@Param('id') id: number, @Body() post: CreatePosts): string {
    return this.postsService.updatePost(id, post);
  }

  @Delete(':id')
  deletePost(@Param('id') id: number): string {
    return this.postsService.deletePost(id);
  }
}
