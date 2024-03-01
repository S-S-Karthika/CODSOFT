import AboutImg from '../Asserts/about.png'  
  
  
  export default function About() {
    return<section className='md:flex-row flex flex-col bg-primary px-5'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'id='about'>
            <div className='flex flex-col justify-center'>
            <h1 className='text-4xl border-b-black border-b-4 mb-4 w-[170px] font-hero-font'>About Me</h1>
            <div className='py-4 text-1xl font-about-font'>
            <p className='pb-4'>Hai,My name is Karthika Senthil . I am learning Full-Stack Development . </p>
            <p className='pb-4'>I am proficient in Frontend skills like React.js , Redux , Bootstrap, Material-UI, Redux-Tool-Kit   </p>
            <p className=''> Backend skills like Express, Node.js and Database like My-SQL and MongoDB </p>
            </div>
            </div>
        </div>




    </section>
};
