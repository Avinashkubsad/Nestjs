import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { AnswerDto } from './dto/app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() request,@Res() response) {
    // console.log(request.headers)
    // return this.appService.getHello();
    response.status(200).json({
      response: this.appService.getHello()
    })
  }

  @Get('/askquestion')
  askquestion(){
     return "HI buddy how are you?"
  }

  @Post('/answer')
  answer(
    @Body() getAnswerDto : AnswerDto,
    @Req() request,
    @Res() response 
  ){
    let res;
    let status;
    if(request.body.answer == 'yes'){
      res = "It is yes"
      status = 200
   } else{
      res = "It is no"
      status = 400
    }
    response.status(status).json({
      response : res
    })
  }
}
