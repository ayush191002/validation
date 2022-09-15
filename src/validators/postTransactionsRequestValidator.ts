import { PostTransactionsRequest } from '../models';
import { AbstractValidator } from './AbstractValidator';
import { TransactionConditions } from '../models'

class PostTransactionsRequestValidator extends AbstractValidator<PostTransactionsRequest>{
   constructor() {
      super();
      this.ruleForEach("transactions")
            .notNull()
            .withMessage(`transactions[] can't have null elements.`);
      // this.ruleFor('account')
   }
}

// class PostAccountValidator extends 
export const postTransactionsRequestValidator = new PostTransactionsRequestValidator();