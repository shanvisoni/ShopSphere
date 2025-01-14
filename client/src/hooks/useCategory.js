import { useState,useEffect } from "react";
import axios from 'axios';
const API = "https://shopsphere-c73p.onrender.com/api/v1";


export default function useCategory(){
    const [categories,setCategories]=useState([]);

    const getCategories=async()=>{
        try {
            const {data}=await axios.get(`${API}/category/get-category`);
            setCategories(data?.category);
        } catch (error) {
        }
    };
    useEffect(()=>{
        getCategories();
    },[]);
    return categories;
}
