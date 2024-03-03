import { NextRequest, NextResponse} from 'next/server'
import { mailer } from '@/helper/mailer';

export async function POST(request: NextRequest){
     try{
        const reqbody = await request.json();
     
        const res = await mailer(reqbody);
      console.log(res);
      return NextResponse.json({message: res}, {status:200});
     }catch(error: any){
        console.log('MESSAGE_SERVER_ERROR', error.message);
        return NextResponse.json({message:'server error'}, {status: 500});
     }
}