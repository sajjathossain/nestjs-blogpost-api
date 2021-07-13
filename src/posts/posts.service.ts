import { CreatePosts } from './dto/create-posts.dto';
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PostsService {
  url = 'http://localhost:5001/posts';

  async getAllPosts(): Promise<CreatePosts[]> {
    const { data } = await axios.get(this.url);
    return data;
  }

  getOnePost(id: number): string {
    return `getting post number ${id}`;
  }

  createPost(post: CreatePosts): string {
    return `Post created. Post \n${post.content}`;
  }

  updatePost(id: number, post: CreatePosts): string {
    return `Post updated. Content \n ${post.content}`;
  }

  deletePost(id: number): string {
    return `deleting post number ${id}`;
  }
}
