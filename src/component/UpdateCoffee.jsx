import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const UpdateCoffee = () => {
    const loadCoffee=useLoaderData()
    const {name,chef,supplier,test,category,details,photoUrl,_id}=loadCoffee;

    const handleUpdateButton=e=>{
        e.preventDefault()

        const form=e.target;
        const name=form.name.value;
        const chef=form.chef.value;
        const supplier=form.supplier.value;
        const test=form.test.value;
        const category=form.category.value;
        const details=form.details.value;
        const photoUrl=form.photo.value;
        const updatedCoffeeData={name,chef,supplier,test,category,details,photoUrl};
        console.log(updatedCoffeeData)
        // send data to the server site

        fetch(`http://localhost:5000/coffees/${_id}`,{
            method:'PUT',
            headers:{
                "content-type":"application/json"
            },
             body:JSON.stringify(updatedCoffeeData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                Swal.fire({
                    title: 'successful',
                    text: 'successfully Updated the coffee information',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                form.reset()
            }
        })

    }
   
    return (
        <div className="bg-slate-400 p-8 ">
            <h1 className="text-3xl text-center mb-9">update coffee</h1>
           
            <form onSubmit={handleUpdateButton}>
            {/* coffeename & chef row  */}
            <div className="flex gap-6 mb-8">
               <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Coffee Name</span>
                </label>
               <input type="text"  name="name" className="input input-bordered" defaultValue={name} required />
               </div>
               <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">chef</span>
                </label>
               <input type="text"  name="chef"  className="input input-bordered" defaultValue={chef} required />
               </div>
            </div>
            {/* supplier & test row  */}
            <div className="flex gap-6 mb-8">
               <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">supplier</span>
                </label>
               <input type="text"  name="supplier" className="input input-bordered" defaultValue={supplier} required />
               </div>
               <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">test</span>
                </label>
               <input type="text"  name="test"  className="input input-bordered" defaultValue={test} required />
               </div>
            </div>
            {/* category & details row  */}
            <div className="flex gap-6 mb-8">
               <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">category</span>
                </label>
               <input type="text"  name="category" className="input input-bordered" defaultValue={category} required />
               </div>
               <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">details</span>
                </label>
               <input type="text"  name="details"  className="input input-bordered" defaultValue={details} required />
               </div>
            </div>
            {/* PHOTO URL */}
               <div className="form-control w-full mb-8">
                 <label className="label">
                   <span className="label-text">photo url</span>
                 </label>
                 <input type="text"  name="photo"  className="input input-bordered" defaultValue={photoUrl}  />
               </div>
            {/* submit coffee*/}
            <div >
               
              <input type="submit" value="update coffee" className="btn btn-block" />
            </div>
            
        </form>
           
        </div>
    );
};

export default UpdateCoffee;