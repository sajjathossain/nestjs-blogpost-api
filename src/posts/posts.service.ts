import { CreatePosts } from './dto/create-posts.dto';
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PostsService {
  url = 'https://jsonplaceholder.typicode.com/posts';

  async getAllPosts(): Promise<CreatePosts[]> {
    const { data } = await axios.get(this.url);
    return data;
  }

  async getOnePost(id: number): Promise<CreatePosts> {
    const { data } = await axios.get(`${this.url}/${id}`);
    return data;
  }

  async createPost(post: CreatePosts): Promise<CreatePosts> {
    const postData = {
      ...post,
      userId: Math.floor(Math.random() * 100),
    };
    const { data } = await axios.post(`${this.url}`, { ...postData });

    return data;
  }

  async updatePost(id: number, post: CreatePosts): Promise<CreatePosts> {
    const { data } = await axios.put(`${this.url}/${id}`, post);
    return data;
  }

  async deletePost(id: number): Promise<CreatePosts> {
    const { data } = await axios.delete(`${this.url}/${id}`);

    return data;
  }
}
