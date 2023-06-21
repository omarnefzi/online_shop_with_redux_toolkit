import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ShopHeader from "./ShopHeader";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { fetchProducts } from "../../Store/productSlice";
import CustomCard from "../../components/CustomCard";
import Loading from "../../shared/loading/Loading";
import WoopsError from "../../shared/WoopsError/WoopsError";

const Shop = () => {
  const dispatch=useDispatch()
  const {products,isLoading,error} =useSelector(state=>state.products)

  const [search,setSearch]=useState('')
  const [category, setCategory] = useState('');

  useEffect(()=>{
    dispatch(fetchProducts())
  },[dispatch])

  const searchFilter=products.filter((product)=>{
    const titleMatch = product.title.toLowerCase().includes(search.toLowerCase());
    const categoryMatch = category === '' || product.category === category;
    return titleMatch && categoryMatch;

  })
  return (
    <>
      <ShopHeader />
      <div className="bg-slate-50 ">
        <div className="container flex justify-between items-center  my-4 md:my-0 ">
          <div>
            <FormControl variant="standard"   color="secondary" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Filter
              </InputLabel>
              <Select  onChange={(e) => setCategory(e.target.value)}
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Age"
              >
                 <MenuItem value="">All</MenuItem>
  <MenuItem value="Men">Men</MenuItem>
  <MenuItem value="Women">Women</MenuItem>
  <MenuItem value="Unisex">Unisex</MenuItem>
  <MenuItem value="Jewelry">Jewelry</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="flex items-center  ">
            <TextField className=""
            onChange={(e)=>setSearch(e.target.value)}
              id="standard-basic"
              label="Search.."
              color="secondary"
              variant="standard"
            />

            <IconButton className="mt-4"  type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </div>

        </div>

  <div className="container">

<div className=" row ">
{
  isLoading ? <Loading /> : 
  searchFilter.map((item)=>{
    return   <CustomCard  key={item.id} item={item} />
    
  })
}
</div>
</div>
{
  error && <WoopsError  />
}

      </div>
    </>
  );
};

export default Shop;
