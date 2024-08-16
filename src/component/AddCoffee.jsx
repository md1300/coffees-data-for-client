import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleSubmitForm=e=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const chef=form.chef.value;
        const supplier=form.supplier.value;
        const test=form.test.value;
        const category=form.category.value;
        const details=form.details.value;
        const photoUrl=form.photo.value;
        const addCoffeeData={name,chef,supplier,test,category,details,photoUrl};
        console.log(addCoffeeData)
        // send data to the server site

        fetch('http://localhost:5000/coffees',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
             body:JSON.stringify(addCoffeeData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                Swal.fire({
                    title: 'successful',
                    text: 'successfully added the coffee information',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                form.reset()
            }
        })
    }

    return (
    <div className="bg-gray-50 p-24">
        <div className="mb-10">
            <h1 className="text-2xl text-center text-purple-600">add coffee </h1>
        </div>
        <form onSubmit={handleSubmitForm}>
            {/* coffeename & chef row  */}
            <div className="flex gap-6 mb-8">
               <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Coffee Name</span>
                </label>
               <input type="text" placeholder="coffee name" name="name" className="input input-bordered" required />
               </div>
               <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">chef</span>
                </label>
               <input type="text" placeholder="chef" name="chef"  className="input input-bordered" required />
               </div>
            </div>
            {/* supplier & test row  */}
            <div className="flex gap-6 mb-8">
               <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">supplier</span>
                </label>
               <input type="text" placeholder="supplier" name="supplier" className="input input-bordered" required />
               </div>
               <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">test</span>
                </label>
               <input type="text" placeholder="test" name="test"  className="input input-bordered" required />
               </div>
            </div>
            {/* category & details row  */}
            <div className="flex gap-6 mb-8">
               <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">category</span>
                </label>
               <input type="text" placeholder="category" name="category" className="input input-bordered" required />
               </div>
               <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">details</span>
                </label>
               <input type="text" placeholder="details" name="details"  className="input input-bordered" required />
               </div>
            </div>
            {/* PHOTO URL */}
               <div className="form-control w-full mb-8">
                 <label className="label">
                   <span className="label-text">photo url</span>
                 </label>
                 <input type="text" placeholder="photo url" name="photo"  className="input input-bordered" required />
               </div>
            {/* submit coffee*/}
            <div >
               
              <input type="submit" value="add coffee" className="btn btn-block" />
            </div>
            
        </form>
        
    </div>
    );
};

export default AddCoffee;