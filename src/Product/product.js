export default function Product({title,
    price,
    label,
    bg,}){
    return(
        <>
   
        <div className="border w-[300px]" >
            <div  className={`w-full h-[150px] ${bg}`} />
            <div className="bg-gray-200 p-2 rounded-lg w-16 m-5" >
                {label}
            </div>
            <h1 className="mx-2 font-bold text-xl  my-5" >{title}</h1>
            <span className="mx-2 my-5 text-gray-500" >{price}</span>

        </div>
        
        </>
    )
}