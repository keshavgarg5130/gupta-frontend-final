const categoryIcons = [
  {
    imgUrl: '/ACB.png',
    redirectUrl: '/ACB',
    label: 'ACB'
  },
  {
    imgUrl: '/MCCB.png',
    redirectUrl: '/',
    label: 'MCCB'
  },
  {
    imgUrl: '/OVERLOAD_RELAY.png',
    redirectUrl: '/OVERLOAD_RELAY',
    label: 'OVERLOAD RELAY'
  },
  {
    imgUrl: '/POWER_CONTACTOR.png',
    redirectUrl: '/POWER_CONTRACTOR',
    label: 'POWER CONTRACTOR'
  },
  {
    imgUrl: '/WIRES_AND_CABLES.png',
    redirectUrl: '/WIRES_AND_CABLES',
    label: 'WIRES AND CABLES'
  },
]
const CategoryIconRow = () => {
  return (<div>
    <div className='flex items-center font-bold justify-center text-4xl p-1 box-border my-8'>
      Categories
    </div>
    <div className="flex w-full h-max min-h-[150px] bg-white my-2 items-center justify-evenly gap-10 py-2 overflow-x-scroll overflow-y-hidden scroll-smooth scrollbar-hidden">
      {categoryIcons.map((category, index) => {
        return <CategoryIcon key={index} {...category} />
      })}
    </div>
  </div>)
}


const CategoryIcon = ({ imgUrl, redirectUrl, label }: { imgUrl: string, redirectUrl: string, label: string }) => {
  return (
    <div className="flex items-center justify-center flex-col w-max">
      <div className="h-[100px] w-[100px] duration-500 ease-in-out rounded-full flex items-center hover:h-[120px] hover:w-[120px] transition-all hover:shadow-2xl">
        <a href={redirectUrl}>
          <img src={imgUrl} className="rounded-full" />
        </a>
      </div>
      <div className="font-bold text-sm">
        {label}
      </div>
    </div>
  )
}

export default CategoryIconRow
