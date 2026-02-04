"use client"; 
import { motion } from "framer-motion"; 

export default function EditProfileModal({ onClose }) {
   return ( 
   <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50" > 
      
    <motion.div 
      initial={{ scale: 0.9 }} 
      animate={{ scale: 1 }} 
      className="modal" > 
      
    <h2 className="title">Edit Profile</h2> 
    <input 
       className="input" 
       placeholder="First Name" /> 
      
    <input 
       className="input" 
       placeholder="Last Name" /> 
       
    <input 
       className="input" 
       placeholder="Email" /> 
    
    <input 
       className="input" 
       placeholder="Mobile" /> 
       <div className="flex justify-end gap-3"> 
    
    <button 
        onClick={onClose} 
        className="cursor-pointer"> 
        Cancel 
      </button> 
  
    <button className="btn-primary cursor-pointer"> 
         Save Changes 
       </button> 
            </div> 
        </motion.div> 
    </motion.div> 
    ); 
  }

// "use client";
// import { motion } from "framer-motion";

// export default function EditProfileModal({ onClose }) {
//   return (
//     <motion.div
//       className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//     >
//       <motion.div
//         className="bg-white p-6 rounded-xl w-full max-w-md"
//         initial={{ scale: 0.9 }}
//         animate={{ scale: 1 }}
//       >
//         <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>

//         <input className="input" placeholder="First Name" />
//         <input className="input mt-3" placeholder="Last Name" />
//         <input className="input mt-3" placeholder="Email" />
//         <input className="input mt-3" placeholder="Mobile" />
//         <input className="input mt-3" placeholder="City" />

//         <div className="flex justify-end gap-3 mt-6">
//           <button onClick={onClose}>Cancel</button>
//           <button className="btn-primary">Save</button>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }
