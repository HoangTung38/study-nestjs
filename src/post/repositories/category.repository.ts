import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from '../models/post.model';
import { BaseRepository } from '../../base.repository';

@Injectable()
export class CategoryRepository extends BaseRepository<Post> {
  constructor(
    @InjectModel('Category')
    private readonly categoryModel: Model<Post>,
  ) {
    super(categoryModel);
  }
}
