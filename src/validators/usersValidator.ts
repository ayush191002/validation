import { Validator } from 'fluentvalidation-ts';
import { User } from '../models/user';

class UserValidator extends Validator<User>{
   constructor() {
      super();

      this.ruleFor('name')
         .notEmpty()
         .withMessage('Please enter your name')

      this.ruleFor('age')
         .greaterThanOrEqualTo(18)
         .withMessage('Your should be equal or above 18')
   }
}

export const userValidator = new UserValidator();