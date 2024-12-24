
export async function data(){
  await fetch('http://localhost:9000/api/product')
  .then(res=>res.json()).then(json=>{
    return json
  })
}