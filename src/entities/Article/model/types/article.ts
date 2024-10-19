import { User } from '@/entities/User';
import { ArticleBlockType, ArticleType } from '../consts/consts';

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleCodeBLock extends ArticleBlockBase{
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ArticleImageBLock extends ArticleBlockBase{
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}

export interface ArticleTextBLock extends ArticleBlockBase{
    type: ArticleBlockType.TEXT;
    paragraphs: string[];
    title?: string;
}

export type ArticleBLock = ArticleCodeBLock | ArticleImageBLock | ArticleTextBLock;

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    user: User;
    type: ArticleType[];
    blocks: ArticleBLock[];
}
