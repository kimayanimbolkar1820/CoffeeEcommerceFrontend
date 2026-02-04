
export default function ChangePassword() {
   return ( 
   <div className="card"> 
   <h2 className="title">Change Password</h2> 
   <input 
      className="input" 
      type="password" 
      placeholder="Current Password" /> 
      
   <input 
      className="input" 
      type="password" 
      placeholder="New Password" /> 
      
   <input 
      className="input" 
      type="password" 
      placeholder="Confirm Password" /> 
      
    <button className="btn-primary cursor-pointer"> 
      Update Password </button> 
      </div> 
      ); 
    }


// export default function ChangePassword() {
//   return (
//     <div className="card">
//       <h2 className="title">Change Password</h2>

//       <input className="input" type="password" placeholder="Current Password" />
//       <input className="input" type="password" placeholder="New Password" />
//       <input className="input" type="password" placeholder="Confirm Password" />

//       <button className="btn-primary cursor-pointer">
//         Update Password
//       </button>
//     </div>
//   );
// }
