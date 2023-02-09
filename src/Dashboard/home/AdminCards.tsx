

interface adminCard {
  value: number; color: string; tittle:string
}

const AdminCard = ({value , color , tittle}:adminCard)=>{

    return (
        <div className={`bg-${color}-200 py-2 rounded-md `}>
    <div className="flex">
      <div>
      <h2 className="text-base md:text-2xl lg:text-5xl px-2 whitespace-no-wrap text-gray-600">{tittle}</h2>
      <h2 className="ltext-base md:text-2xl lg:text-5xl px-4 py-2 lg:px-8 text-gray-600">{value}</h2>
      </div>
      <div className="flex justify-center items-center">
        <svg
        className="w-1/2 m-auto opacity-75"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
        >
          <path
            d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
    )
}


export const AdminCards = ({carrdsAray}:{carrdsAray:adminCard[]})=>{
    return(
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-5 w-full ">
          { carrdsAray.map((elem)=>{
            return(
                <AdminCard {...elem} ></AdminCard>
                
            )
          }) }
   
 
  
</div>
    )
}


