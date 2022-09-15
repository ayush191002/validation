import { unique } from '../helpers/Utils';
import { PostTransactionsRequest, TransactionEntry } from '../models';
import { AbstractValidator } from './AbstractValidator';

class PostTransactionsRequestValidator extends AbstractValidator<PostTransactionsRequest>{
   constructor() {
      super();

      this.ruleFor("transactions")
            .must(e => e.length > 0)
            .withMessage("entries  is not a valid value.")
            .must(this.haveUniqueSequenceNumbers)
            .withMessage(`sequenceNumber(s) in entries should be unique.`)
            .when(e => e?.transactions?.length > 0, "AppliesToCurrentValidator");

      this.ruleForEach("transactions")
            .notNull()
            .withMessage(`transactions[] can't have null elements.`);
      // this.ruleFor('account')
   }

   haveUniqueSequenceNumbers(entries: TransactionEntry[], model: PostTransactionsRequest): boolean {
      let sequenceNums = entries.map(item => item?.sequenceNumber);
      let uniqueSequenceNums = unique(sequenceNums);
      return uniqueSequenceNums.length == sequenceNums.length;
  }
}

// class PostAccountValidator extends 
export const postTransactionsRequestValidator = new PostTransactionsRequestValidator();