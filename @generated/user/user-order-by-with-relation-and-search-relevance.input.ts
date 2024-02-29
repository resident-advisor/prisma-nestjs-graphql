import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { Type } from 'class-transformer';
import { UserOrderByRelationAggregateInput } from './user-order-by-relation-aggregate.input';
import { ArticleOrderByRelationAggregateInput } from '../article/article-order-by-relation-aggregate.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { ProfileOrderByWithRelationAndSearchRelevanceInput } from '../profile/profile-order-by-with-relation-and-search-relevance.input';
import { UserOrderByRelevanceInput } from './user-order-by-relevance.input';

@InputType()
export class UserOrderByWithRelationAndSearchRelevanceInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true, description: "User's name" })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  bio?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  image?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  countComments?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  rating?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  @Type(() => SortOrderInput)
  money?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  role?: SortOrderInput;

  @Field(() => UserOrderByRelationAggregateInput, { nullable: true })
  @Type(() => UserOrderByRelationAggregateInput)
  following?: UserOrderByRelationAggregateInput;

  @Field(() => UserOrderByRelationAggregateInput, { nullable: true })
  @Type(() => UserOrderByRelationAggregateInput)
  followers?: UserOrderByRelationAggregateInput;

  @Field(() => ArticleOrderByRelationAggregateInput, { nullable: true })
  @Type(() => ArticleOrderByRelationAggregateInput)
  favoriteArticles?: ArticleOrderByRelationAggregateInput;

  @Field(() => ArticleOrderByRelationAggregateInput, { nullable: true })
  @Type(() => ArticleOrderByRelationAggregateInput)
  articles?: ArticleOrderByRelationAggregateInput;

  @Field(() => CommentOrderByRelationAggregateInput, { nullable: true })
  @Type(() => CommentOrderByRelationAggregateInput)
  comments?: CommentOrderByRelationAggregateInput;

  @Field(() => ProfileOrderByWithRelationAndSearchRelevanceInput, { nullable: true })
  @Type(() => ProfileOrderByWithRelationAndSearchRelevanceInput)
  profile?: ProfileOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => UserOrderByRelevanceInput, { nullable: true })
  @Type(() => UserOrderByRelevanceInput)
  _relevance?: UserOrderByRelevanceInput;
}
