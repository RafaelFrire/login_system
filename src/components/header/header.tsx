

function header(props:{title:string}) {
  return (
    <div className='bg-dark container-xl text-center p-3 '>
       <div className='fs-1 fw-bold text-white'>
        {props.title}
       </div>
    </div>
  )
}

export default header;