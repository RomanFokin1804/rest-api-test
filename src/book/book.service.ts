import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/sequelize';
import { BookEntity } from './entities/book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(BookEntity)
    private bookModel: typeof BookEntity,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<BookEntity> {
    const newBook = await this.bookModel.create({
      title: createBookDto.title,
      author: createBookDto.author,
      count: createBookDto.count,
    });

    console.log(
      `CREATED NEW BOOK. INPUT DATA: ${JSON.stringify(createBookDto)}, SAVED DATA: ${JSON.stringify(newBook)}`,
    );
    return newBook;
  }

  async findAll(): Promise<BookEntity[]> {
    return await this.bookModel.findAll();
  }

  async findOne(id: string): Promise<BookEntity> {
    const book = await this.bookModel.findOne({
      where: {
        id,
      },
    });

    if (!book) {
      throw new NotFoundException(`Book with id ${id} not found!`);
    }

    return book;
  }

  async update(id: string, updateBookDto: UpdateBookDto): Promise<BookEntity> {
    await this.bookModel.update(updateBookDto, {
      where: {
        id,
      },
    });
    return await this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    const book = await this.findOne(id);
    await book.destroy();
  }
}
