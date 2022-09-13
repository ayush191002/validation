import { PostTransactionsRequest } from '../models';
import { AbstractValidator } from './AbstractValidator';

class PostTransactionsRequestValidator extends AbstractValidator<PostTransactionsRequest>{
   constructor() {
      super();
      this.ruleForEach("transactions")
            .notNull()
            .withMessage(`transactions[] can't have null elements.`);
      this.ruleForEach('transactions.account')     
   }
}

export const postTransactionsRequestValidator = new PostTransactionsRequestValidator();