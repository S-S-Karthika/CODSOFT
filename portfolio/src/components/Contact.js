
export default function Contact () {

    const config = {
        email : 'karthikasenthil2004@gmail.com',
        phone: '+45456565656'
    }

    return <section id='contact' className='md:flex-row flex flex-col bg-secondary px-5 py-32 font-project-font'>
        <div className='flex flex-col items-center'>
           
            <h1 className='text-4xl border-b-4 border-black border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
            <div className="flex flex-col ">
            <p className='pb-5'>If you want to discuss more in detail, please contact me</p>
            <p className='py-2'><span className='font-bold'>Email :</span> {config.email}</p>
            <p className='py-2'><span className='font-bold'>Phone :</span> {config.phone}</p>
            </div>
        </div>
    </section>
}