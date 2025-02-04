import {User} from 'hybrid-types/DBTypes';

type MessageResponse = {
  message: string;
};

type ErrorResponse = MessageResponse & {
  stack?: string;
};

type Article = {
  id: number;
  title: string;
  description: string;
  author_id: number;
};

type Author = {
  id: number;
  name: string;
  email: string;
};

export type Credentials = Pick<User, 'username' | 'password'>;
export type RegisterCredentials = Pick<User, 'username' | 'password' | 'email'>;

export type {MessageResponse, ErrorResponse, Article, Author};
