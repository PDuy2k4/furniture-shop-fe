import React from 'react'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
export default function ErrorPgaeNotFound() {
  return (
    <div className='container mx-auto h-screen flex flex-col items-center justify-center'>
      <SentimentVeryDissatisfiedIcon
        sx={{
          fontSize: 200,
          color: '#B88E2F'
        }}
      />
      <h1 className='text-[100px] font-bold text-[#B88E2F]'>404</h1>
      <h2 className='text-[30px] opacity-60 font-bold'>Page Not Found</h2>
      <p className='opacity-50 text-center'>This Page you are looking for doesn't exist or an other error occurred.</p>
      <span className='opacity-50'>Go back to choose a new direction.</span>
    </div>
  )
}
