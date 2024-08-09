import RegisterForm from '~/components/RegisterForm'
export default function RegisterPage(props: any) {
  // fix error of mail verification
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[#f3f3f3]'>
      <div className='rounded-lg px-6 py-4 bg-white'>
        <div className='flex items-center rounded-md overflow-hidden'>
          {!props.isTablet && (
            <div className='max-w-[600px] caret-transparent'>
              <img
                className='min-w-[200px] max-w-full min-h-[700px] rounded-md object-cover'
                src='https://res.cloudinary.com/ecomsilver/image/upload/w_1250,h_800/CoachHouse/PageImages/CH_furniture_close_2023_.jpg'
                alt=''
              />
            </div>
          )}
          <RegisterForm isMobile={props.isMobile} isTablet={props.isTablet} />
        </div>
      </div>
    </div>
  )
}
