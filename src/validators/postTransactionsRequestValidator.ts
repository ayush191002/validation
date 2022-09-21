import { unique } from '../helpers/Utils';
import { PostTransactionsRequest, TransactionEntry, AccountConditions } from '../models';
import { AbstractValidator } from './AbstractValidator';
import { TransactionConditions } from '../models/TransactionConditions'

class PostTransactionsRequestValidator extends AbstractValidator<PostTransactionsRequest>{
   constructor() {
      super();

      this.ruleFor("transactions")
            .must(e => e.length > 0)
            .withMessage("entries  is not a valid value.")
            .must(this.haveUniqueSequenceNumbers)
            .withMessage(`sequenceNumber(s) in entries should be unique.`)
            .must(this.haveValidAccountConditions)
            .withMessage('Account transation conditions should remain same.')
            .when(e => e?.transactions?.length > 0, "AppliesToCurrentValidator");

      this.ruleForEach("transactions")
            .notNull()
            .withMessage(`transactions[] can't have null elements.`);
            

      // this.ruleForEach('transactions')
      // this.ruleForEach('transactions')
      //      .when('accountCode')
      // this.ruleFor('account')
      // this.ruleForEach("")
    
      
      
   }

   haveUniqueSequenceNumbers(entries: TransactionEntry[], model: PostTransactionsRequest): boolean {
      let sequenceNums = entries.map(item => item?.sequenceNumber);
      let uniqueSequenceNums = unique(sequenceNums);
      return uniqueSequenceNums.length == sequenceNums.length;
  }

  haveValidAccountConditions(code: TransactionEntry[], model: PostTransactionsRequest): any{
      // let AccountCode  = 
      let AccountCode = code.map((e=>{
            e.accountCode
      }))

      for(let i=0; i<AccountCode.length; i++){
            for(let j=1; j<AccountCode.length;j++){
                  if(AccountCode[i]===AccountCode[j]){
                        
                  }continue;
            }
      }

      function Checker(){
            
      }
   
  }

}

// class PostTransactionRequestValidator extends AbstractValidator<AccountConditions>{
//       constructor(){
//             super();

//             this.ruleForEach('minBalance')
            
//       }
// }


export const postTransactionRequestValidator = new PostTransactionsRequestValidator();

// class PostAccountValidator extends 
export const postTransactionsRequestValidator = new PostTransactionsRequestValidator();