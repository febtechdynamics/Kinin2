// src/components/nav/Navbar.jsx
import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./Navbar.css";
import { left } from "@popperjs/core";

const MyNavbar = () => {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#363c48", padding: 20 }}
      variant="dark"
    >
      <Navbar.Brand href="#"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ marginLeft: "11rem", marginRight: "11" }}>
          <NavDropdown title="Medication" id="medication-dropdown">
            <NavDropdown.Item href="#">Digestion</NavDropdown.Item>
            <NavDropdown.Item href="#">Nausea & Probiotics</NavDropdown.Item>
            <NavDropdown.Item href="#">Pain & Fever Relief</NavDropdown.Item>
            <NavDropdown.Item href="#">Homeopathic Remedies</NavDropdown.Item>
            <NavDropdown.Item href="#">First Aid</NavDropdown.Item>
            <NavDropdown.Item href="#">Smoking Cessation</NavDropdown.Item>
            <NavDropdown.Item href="#">Cough, Cold & Flu</NavDropdown.Item>
            <NavDropdown.Item href="#">Allergy & Sinus</NavDropdown.Item>
            <NavDropdown.Item href="#">
              Sleeping Aids & Anti-Snoring
            </NavDropdown.Item>
            <NavDropdown.Item href="#">Children's Medicine</NavDropdown.Item>
            <NavDropdown.Item href="#">Women's Health</NavDropdown.Item>
            <NavDropdown.Item href="#">Men's Health</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Medical Equipment" id="equipment-dropdown">
            {/* Add Medical Equipment-related links here */}
            <NavDropdown.Item href="#">Equipment Link 1</NavDropdown.Item>
            <NavDropdown.Item href="#">Equipment Link 2</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Medical Supplies" id="supplies-dropdown">
            {/* Add Medical Supplies-related links here */}
            <NavDropdown.Item href="#">Supplies Link 1</NavDropdown.Item>
            <NavDropdown.Item href="#">Supplies Link 2</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Personal Care" id="personal-care-dropdown">
            <NavDropdown.Item href="#">Skin Care</NavDropdown.Item>
            <NavDropdown.Item href="#">Hair Care</NavDropdown.Item>
            <NavDropdown.Item href="#">Oral Care</NavDropdown.Item>
            <NavDropdown.Item href="#">Feminine Care</NavDropdown.Item>
            <NavDropdown.Item href="#">Deodorant</NavDropdown.Item>
            <NavDropdown.Item href="#">
              Shaving, Grooming & Hair Removal
            </NavDropdown.Item>
            <NavDropdown.Item href="#">Men's Essentials</NavDropdown.Item>
            <NavDropdown.Item href="#">Soap, Bath & Shower</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Child Care" id="child-care-dropdown">
            <NavDropdown.Item href="#">Bath & Skincare</NavDropdown.Item>
            <NavDropdown.Item href="#">Diaper & Wipes</NavDropdown.Item>
            <NavDropdown.Item href="#">Feeding & Mealtime</NavDropdown.Item>
            <NavDropdown.Item href="#">Formula & Baby Food</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Fitness and Supplement" id="fitness-dropdown">
            <NavDropdown.Item href="#">Weight Management</NavDropdown.Item>
            <NavDropdown.Item href="#">Workout Supplements</NavDropdown.Item>
            <NavDropdown.Item href="#">Protein & Amino Acids</NavDropdown.Item>
            <NavDropdown.Item href="#">Vitamins & Minerals</NavDropdown.Item>
            <NavDropdown.Item href="#">Energy & Endurance</NavDropdown.Item>
            <NavDropdown.Item href="#">Joint Support</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;

// // src/components/Navbar.js
// import React from "react";
// import { Link } from "react-router-dom"; // Import Link from React Router
// import "./Navbar.css"; // Import your CSS file for styling

// const Navbar = () => {
//   return (
//     <nav className="text-white nav">
//       <ul>
//         <li className="dropdown">
//           <Link className="home" to="/">
//             Home
//           </Link>
//         </li>

//         <li className="dropdown  ">
//           <Link className="medication" to="/medication">
//             Medication
//           </Link>
//           <i class="fa fa-angle-down" aria-hidden="true"></i>
//           <div className="dropdown-content">
//             <Link to="/medication/category1">
//               Digestion, Nausea & Probiotics
//             </Link>
//             <Link to="/medication/category2">Pain & Fever Relief</Link>
//             <Link to="/medication/category1">Homeopathic Remedies</Link>
//             <Link to="/medication/category2">First Aid</Link>
//             <Link to="/medication/category1">Smoking Cessation</Link>
//             <Link to="/medication/category2">Cough, Cold & Flu</Link>
//             <Link to="/medication/category1">Allergy & Sinus</Link>
//             <Link to="/medication/category2">Sleeping Aids & Anti-Snoring</Link>
//             <Link to="/medication/category1">Children's Medicine</Link>
//             <Link to="/medication/category2">Women's Health</Link>
//             <Link to="/medication/category1">Men's Health</Link>

//             {/* Add more categories as needed */}
//           </div>
//         </li>
//         <li className="dropdown  ">
//           <Link className=" medical-equipment" to="/medical-equipment">
//             Medical Equipment
//           </Link>
//           <i class="fa fa-angle-down" aria-hidden="true"></i>

//           <div className="dropdown-content">
//             <Link to="/medical-equipment/category1">category1</Link>
//             <Link to="/medical-equipment/category1">category1</Link>
//           </div>
//         </li>
//         <li className="dropdown ">
//           <Link className="medical-supplies" to="/medical-supplies">
//             Medical Supplies
//           </Link>
//           <i class="fa fa-angle-down" aria-hidden="true"></i>
//         </li>

//         <li className="dropdown ">
//           <Link className="personal-care" to="/personal-care">
//             Personal Care
//           </Link>
//           <i class="fa fa-angle-down" aria-hidden="true"></i>
//           <div className="dropdown-content">
//             <Link to="/personal-care/category1">Skin Care</Link>
//             <Link to="/personal-care/category2">Hair Care</Link>
//             <Link to="/child-care/category2">Oral Care</Link>
//             <Link to="/child-care/category2">Feminine Care</Link>
//             <Link to="/personal-care/category1">Deodorant</Link>
//             <Link to="/personal-care/category2">
//               Shaving, Grooming & Hair Removal
//             </Link>
//             <Link to="/child-care/category2">Men's Essentials</Link>
//             <Link to="/child-care/category2">Soap, Bath & Shower</Link>
//             {/* Add more categories as needed */}
//           </div>
//         </li>
//         <li className="dropdown ">
//           <Link className="child-care" to="/child-care">
//             Child Care
//           </Link>
//           <i class="fa fa-angle-down" aria-hidden="true"></i>
//           <div className="dropdown-content">
//             <Link to="/child-care/category1">Bath & Skincare</Link>
//             <Link to="/child-care/category2">Diaper & Wipes</Link>
//             <Link to="/child-care/category2">Feeding & Mealtime</Link>
//             <Link to="/child-care/category2">Formula & Baby Food</Link>
//             {/* Add more categories as needed */}
//           </div>
//         </li>
//         <li className="dropdown ">
//           <Link className="fitness-and-supplement" to="/fitness-and-supplement">
//             Fitness and Supplement
//           </Link>
//           <i class="fa fa-angle-down" aria-hidden="true"></i>
//           <div className="dropdown-content">
//             <Link to="/fitness-and-supplement/category1">Vitamins</Link>
//             <Link to="/fitness-and-supplement/category2">Protin Powder</Link>
//             <Link to="/fitness-and-supplement/category1">
//               Protein Bars & Snacks
//             </Link>
//             <Link to="/fitness-and-supplement/category2">
//               Meal Replacement Shakes
//             </Link>
//             {/* Add more categories as needed */}
//           </div>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import "./Navbar.css";

// // const Navbar = () => {
// //   const categories = [
// //     "Medication",
// //     "Medical Equipment",
// //     "Medical Supplies",
// //     "Personal Care",
// //     "Child Care",
// //     "Fitness and Supplement",
// //   ];

// //   const medicationSubcategories = [
// //     "Subcategory 1",
// //     "Subcategory 2",
// //     "Subcategory 3",
// //   ];

// //   const [selectedCategory, setSelectedCategory] = useState(null);

// //   const handleCategorySelect = (subcategory) => {
// //     setSelectedCategory(subcategory);
// //   };

// //   return (
// //     <nav>
// //       <ul>
// //         <li>
// //           <Link to="/">Home</Link>
// //         </li>
// //         <li className="dropdown">
// //           <Link to="/medication">Medication</Link>
// //           <ul>
// //             {medicationSubcategories.map((subcategory) => (
// //               <li
// //                 key={subcategory}
// //                 onClick={(subcategory) => handleCategorySelect(subcategory)}
// //               >
// //                 {subcategory}
// //               </li>
// //             ))}
// //           </ul>
// //         </li>
// //       </ul>
// //     </nav>
// //   );
// // };

// // export default Navbar;
