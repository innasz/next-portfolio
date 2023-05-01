import Link from 'next/link';
import Animation from './animation';

export default function Hero() {
  return (
    <>
      <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
        <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
          안녕하세요 김유안입니다!
          <br className='hidden lg:inline-block' />
          오늘도 빡코딩?
        </h1>
        <p className='mb-8 leading-relaxed'>
          그들의 것은 보이는 얼음 우리 청춘이 교향악이다. 이상의 인간이
          뜨거운지라, 어디 같은 이것이다. 산야에 군영과 피는 미인을 얼음과
          청춘을 석가는 속에 사막이다. 있을 이상의 인간에 있는가?
        </p>
        <div className='flex justify-center'>
          <Link href='/projects'>
            <div className='btn-project'>프로젝트 보러가기</div>
          </Link>
        </div>
      </div>
      <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
        <Animation />
      </div>
    </>
  );
}
