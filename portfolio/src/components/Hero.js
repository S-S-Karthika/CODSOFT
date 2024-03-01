import HeroImg from '../Asserts/hero.png';
import { AiOutlineMedium,AiOutlineGithub,AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {

    const config  = {
        subtitle: 'Im a Full-stack developer and Designer',
        social: {
            twitter: 'https://twitter.com/jvlcode',
            facebook: 'https://facebook.com/jvlcode',
            linkedin: 'https://in.linkedin.com/company/Karthika-Senthil'
        }
    }

    return<section className='flex md:flex-row flex-col py-30 px-5 bg-secondary justify-center'>
        <div className='md:w-1/2 flex flex-col py-14'>
            <h1 className=' text-6xl font-hero-font '> Hi ,<br/> I'm Karthika.S.S
               <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-6 '>
                <a href={config.social.twitter} className='pr-5 hover:text-white' ><AiOutlineMedium size={40}/></a>
                <a href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
                <a href={config.social.linkedin} className=' hover:text-white'><AiOutlineLinkedin size={40}/></a>
            </div>
        </div>
        <img className='md:w-1/3' src={HeroImg}/>
    </section>
    
};
