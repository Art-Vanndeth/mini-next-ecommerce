import React from 'react'
import { BASE_URL } from '@/lib/constants'
import { EditProductComponent } from '@/components/main/EditProductComponent'

type Props = {
	params:{
		id:number
	},
	searchParams:string
}
const getData = async(id:number )=>
{
  const datat=await fetch(`${BASE_URL}/api/products/${id}/`)
  const respone= await datat.json()
  return respone;
}
export default async function Edit(props:Props) {
  const data= await getData(props.params.id)
  return (
	<div>
       <EditProductComponent
	     id={data.id}
	     name={data.name}
	     price={data.price}
	     desc={data.desc}
	     image={data.image}
	     category={data.category}
 	     seller={data.seller}	
		 quantity={data.quantity}
	   />
	</div>
  )
}