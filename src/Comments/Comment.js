export default function Comment({item}){
    
    const {name,email,body}=item
    return(
        <>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
         <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{name}</div>
    <div class="font-bold text-xl mb-2">{email}</div>

    <p class="text-gray-700 text-base">
        {body}
    </p>
  </div>
  </div>
        </>
    )
}