import { Injectable, NestMiddleware } from "@nestjs/common";


@Injectable()
export class TestMiddleware implements NestMiddleware {
    use(req: any, res: any, next: (error?: any) => void) {
        // console.log('logger...', req.headers);
        // res.send('not valid req');
        next();
    }
}