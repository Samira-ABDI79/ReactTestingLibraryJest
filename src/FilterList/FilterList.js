/* eslint-disable jsx-a11y/anchor-is-valid */
export default function FilterList(){
  const users=[
    {title:'Adele'},
{title:'Agnes'},
{title:'Billy'},
{title:'Bob'},
{title:'Calvin'},
{title:'Christina'},
{title:'Cindy'},
  ]
    return(
        <>
          <div className=' flex justify-center items-center py-16 flex-col' >
        <input type="text" id="myInput" className="w-[60%] text-base px-5 py-3 border border-gray-300 mb-3"  placeholder="Search for names.." title="Type in a name"/>

<ul id="myUL" className="w-[60%]" >
{users.map(item => (
            <li><a href="#" className="border border-gray-300 mt-n1 bg-gray-100 px-3 py-2 no-underline text-base text-black block hover:bg-[#eee] " >{item.title}</a></li>

          ))}
 
</ul>
</div>
        </>
    )
}