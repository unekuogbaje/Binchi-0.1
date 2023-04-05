import Directory from '../../components/directory/directory';

import { Outlet } from 'react-router-dom';

const Home = () => {

 const categories = [
  {
   id: 1,
   title: "Soups and Swallow",
   imageUrl: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
 {
   id: 2,
   title: "Chairs, Couches & Sofas",
   imageUrl: "https://images.unsplash.com/photo-1565330502541-4937be8552e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
 },
 {
   id: 3,
   title: "Shelves & Tables",
   imageUrl: "https://images.unsplash.com/photo-1560184897-6cdec21b9962?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
 },
 {
   id: 4,
   title: "Beds & Mattresses",
   imageUrl: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
 },
 {
   id: 5,
   title: "Plants & others",
   imageUrl: "https://images.unsplash.com/photo-1569350080887-dd38c27caad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
 },
 ]      
 return ( 
  <div>
  <Directory categories={categories}/>
   <Outlet/>             
  </div>  
 );
    
}

export default Home;