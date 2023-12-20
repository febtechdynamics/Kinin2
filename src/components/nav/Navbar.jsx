// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./Navbar.css"; // Import your CSS file for styling

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className="dropdown">
          <Link className="home" to="/">
            Home
          </Link>
        </li>
        <li className="dropdown medication">
          <Link to="/medication">Medication</Link>
          <div className="dropdown-content">
            <Link to="/medication/category1">Category 1</Link>
            <Link to="/medication/category2">Category 2</Link>
            {/* Add more categories as needed */}
          </div>
        </li>
        <li className="dropdown  medical-equipment">
          <Link to="/medical-equipment">Medical Equipment</Link>
          <div className="dropdown-content">
            <Link to="/medical-equipment/category1">Category 1</Link>
            <Link to="/medical-equipment/category2">Category 2</Link>
            {/* Add more categories as needed */}
          </div>
        </li>
        <li className="dropdown medical-supplies">
          <Link to="/medical-supplies">Medical Supplies</Link>
          <div className="dropdown-content">
            <Link to="/medical-supplies/category1">Category 1</Link>
            <Link to="/medical-supplies/category2">Category 2</Link>
            {/* Add more categories as needed */}
          </div>
        </li>
        <li className="dropdown personal-care">
          <Link to="/personal-care">Personal Care</Link>
          <div className="dropdown-content">
            <Link to="/personal-care/category1">Category 1</Link>
            <Link to="/personal-care/category2">Category 2</Link>
            {/* Add more categories as needed */}
          </div>
        </li>
        <li className="dropdown child-care">
          <Link to="/child-care">Child Care</Link>
          <div className="dropdown-content">
            <Link to="/child-care/category1">Category 1</Link>
            <Link to="/child-care/category2">Category 2</Link>
            {/* Add more categories as needed */}
          </div>
        </li>
        <li className="dropdown fitness-and-supplement">
          <Link to="/fitness-and-supplement">Fitness and Supplement</Link>
          <div className="dropdown-content">
            <Link to="/fitness-and-supplement/category1">Category 1</Link>
            <Link to="/fitness-and-supplement/category2">Category 2</Link>
            {/* Add more categories as needed */}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   const categories = [
//     "Medication",
//     "Medical Equipment",
//     "Medical Supplies",
//     "Personal Care",
//     "Child Care",
//     "Fitness and Supplement",
//   ];

//   const medicationSubcategories = [
//     "Subcategory 1",
//     "Subcategory 2",
//     "Subcategory 3",
//   ];

//   const [selectedCategory, setSelectedCategory] = useState(null);

//   const handleCategorySelect = (subcategory) => {
//     setSelectedCategory(subcategory);
//   };

//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li className="dropdown">
//           <Link to="/medication">Medication</Link>
//           <ul>
//             {medicationSubcategories.map((subcategory) => (
//               <li
//                 key={subcategory}
//                 onClick={(subcategory) => handleCategorySelect(subcategory)}
//               >
//                 {subcategory}
//               </li>
//             ))}
//           </ul>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
