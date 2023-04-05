import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

import BROWSE_DATA from '../browse-data';

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCatgoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
         const categoryMap = await getCategoriesAndDocuments('categories');
         console.log(categoryMap);
         setCatgoriesMap(categoryMap);
        };
        getCategoriesMap();
    }, []);

    const value = { categoriesMap };
    return (
        <CategoriesContext.Provider value={value} > 
         {children}
       </CategoriesContext.Provider>
    );
};