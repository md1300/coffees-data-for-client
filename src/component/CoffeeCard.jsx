import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({coffee,coffees,setCoffees}) => {
    const {name,chef,supplier,test,category,details,photoUrl,_id}=coffee ;
    console.log(_id)

    

    const handleDeleteButton=_id=>{
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
          

            fetch(`http://localhost:5000/coffees/${_id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount>0){
                   Swal.fire({
                title: "Deleted!",
                text: "Your coffee been deleted.",
                icon: "success"
              }); 
              const remainingCoffees=coffees.filter(coffee=>console.log(coffee._id !==_id));
              setCoffees(remainingCoffees);
                }
            })
            }
          });
    }
    
    return (
        <div className="flex justify-between items-center">
           
              <div className="card card-side bg-base-100 shadow-xl">
              
  <figure>
    <img
      src={photoUrl}
      alt="Movie" className="h-96" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
{/* --------------------- */}

<div className="join join-vertical ">
  <button className="btn join-item">details</button>
  <Link to={`/update/${_id}`}><button className="btn join-item">update</button></Link>
  <button onClick={()=>handleDeleteButton(_id)} className="btn join-item">delete</button>
</div>
{/* ---------------------------- */}

        </div>
    );
};

export default CoffeeCard;