import { Router } from "./router/router";

let router = new Router();

router.app.listen(8080, () => {
    console.log('listning')
})