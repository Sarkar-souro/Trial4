import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TablePagination } from '@mui/material';
import Paper from '@mui/material/Paper';

function createData(ID, Category, Brand, Title, Price, DiscountPercentage, Stock, Rating) {
  return { ID, Category, Brand, Title, Price, DiscountPercentage, Stock, Rating}
}

const rows = [
  createData(1, 'smartphones', 'Apple', 'iphone9', 549, 12.96, 94, 4.69, ),
  createData(2, 'smartphones', 'Apple', 'iphoneX', 899, 17.94, 34, 4.44),
  createData(3, 'smartphones', 'Samsung', 'Samsung Universe 9', 1249, 15.46, 36, 4.09),
  createData(4, 'smartphones', 'OPPO', 'OPPOF19', 280, 17.91, 123, 4.3),
  createData(5, 'smartphones', 'Huawei', 'Huawei P30', 499, 10.58, 32, 4.09),
  createData(6, 'laptops', 'Apple', 'MacBook Pro', 1749, 11.02, 83, 4.57),
  createData(7, 'laptops', 'Samsung', 'Samsung Galaxy Book', 1499, 4.15, 50, 4.25),
  createData(8, 'laptops', 'Microsoft Surface', 'Microsoft Surface Laptop 4', '₹ '+1499, 10.23, 968, 4.43),
  createData(9, 'Laptops', 'Infinix', 'Infinix INBOOK', 1099, 11.83, 96, 4.54),
  createData(10, 'laptops', 'HP Pavilion', 'HP Pavilion 15-DK 1056', 1099, 6.18, 89, 4.43),
  createData(11, 'fragrances', 'Impression of Acqua Di Gio', 'Perfume Oil', 13, 8.4, 94, 4.26),
  createData(12, 'fragrances', 'Royal Mirage', 'Brown Perfume', 40, 15.66, 52, 4),
  createData(13, 'fragrances', 'Fog Scent Xpressio', 'Fog scent Xpressio Perfume', 13, 8.14, 61, 4.59),
  createData(14, 'fragrances', 'Al Munakh', 'Non-Alchohlic Concentrated Perfume Oil', 120, 15.6, 114, 4.21),
  createData(15, 'frangrances', 'Lord - Al-Rehab', 'Eau De Perfume Spray', 30, 10.99, 105, 4.7),
  createData(16, 'skincare', "L'oreal Paris", 'Hyaluronic Acid Serum', 19, 13.31, 110, 4.83),
  createData(17, 'skincare', 'Hemani Tea', 'Tree Oil 30ml', 12, 4.09, 78, 4.52),
  createData(18, 'skincare', "Dermive", 'Oil Free Moisturizer 100ml', 40, 13.1, 88, 4.56),
  createData(19, 'skincare', "ROREC White Rice", 'Skin Beauty Serum', 46, 10.68, 54, 4.42),
  createData(20, 'skincare', "Fair & Clear", 'Freckle Treatment Cream -15gm', 70, 16.99, 110, 4.06),
  createData(21, 'groceries', "Saaf & Khaas", 'Daal Masoor 500 grams', 20, 4.81, 133, 4.44),
  createData(22, 'groceries', "Bake Parlor Big", 'Elbow Macaroni-400 gm', 14, 15.58, 146, 4.57),
  createData(23, 'groceries', "Baking Food Items", 'Orange Essence Food Flavour', 14, 8.04, 26, 4.85),
  createData(24, 'groceries', "fauji", 'Cereals Muesli Fruit Nuts', 46, 16.8, 113, 4.94),
  createData(25, 'groceries', "Dry Rose", 'Gulab Powder 50 Gram', 70, 13.58, 47, 4.87),
  createData(26, 'home-decoration', "Boho Decor", 'Plant Hanger For Homme', 41, 17.86, 131, 4.08),
  createData(27, 'home-decoration', "Flying Wooden", 'Flying Wooden Bird', 51, 15.58, 17, 4.41),
  createData(28, 'home-decoration', "LED Lights", '3D Embellishment Art Lamp', 20, 16.49, 54, 4.82),
  createData(29, 'home-decoration', "luxury palace", 'Handicraft Chinese Style', 60, 15.34, 7, 4.44),
  createData(30, 'home-decoration', "Golden", 'Key Holder', 30, 2.92, 54, 4.92),
  createData(31, 'furniture', "Furniture Bed Set", 'Mornadi Velvet Bed', 40, 17, 140, 4.16),
  createData(32, 'furniture', "Rattan Outdoors", 'Sofa for Coffee Cafe', 50, 15.59, 30, 4.74),
  createData(33, 'furniture', "Kitchen Shelf", '3 Tier Corner Shelves', 700, 17, 106, 4.31),
  createData(34, 'furniture', "Multi Purpose", 'Plastic Table', 50, 4, 136, 4.01),
  createData(35, 'furniture', "AmnaMart", '3 DOOR PORTABLE', 41, 7.98, 68, 4.06),
  createData(36, 'tops', "Professional Wear", 'Sleeve Shirt Women', 90, 10.89, 39, 4.26),
  createData(37, 'tops', "Soft Cotton", 'Tank Tops dor Women/Girls', 50, 12.05, 107, 4.52),
  createData(38, 'tops', "Soft Cotton", 'sublimation plain kids tank', 100, 11.12, 20, 4.8),
  createData(39, 'tops', "Top Sweater", "Women's Sweater Wool", 600, 17.2, 55, 4.55),
  createData(40, 'tops', "Top Sweater", 'women winter clothes', 57, 13.39, 84, 4.91),
  createData(41, "women's-dresses", 'RED MICKY MOUSE', 'NIGHT SUIT' , 55, 15.05, 21, 4.65),
  createData(42, "women's-dresses", 'Digital Printed', 'Stictched Kurta plus trouser', 80, 15.37, 148, 4.05),
  createData(43, "women's-dresses", 'Ghazi Fabric', 'frock gold printed' , 600, 15.55, 150, 4.31),
  createData(44, "women's-dresses", 'Ghazi Fabric', 'Ladies Multicolored Dress' , 79, 16.88, 2, 4.03),
  createData(45, "women's-dresses", 'IELGY', 'Malai Maxi Dress' , 50, 5.07, 96, 4.67),
  createData(46, "women's-dresses", 'IELGY Fashion', "Women's Shoes" , 40, 16.96, 72, 4.14),
  createData(47, "women's-dresses", 'Synthetic Leather', 'Sneaker Shoes' , 120, 10.37, 50, 4.19),
  createData(48, "women's-shoes", 'Sandals Flip Flops', 'Women Strip Heel' , 40, 10.83, 25, 4.02),
  createData(49, "women's-shoes", 'Maa Sai Sandals', 'Chappals & Shoes Ladies Metallic' , 23, 2.62, 107, 4.72),
  createData(50, "women's-shoes", 'Arrivals Genuine', 'Women Shoes' , 36, 16.87, 46, 4.33),
  createData(51, "men's-shirts", 'Vintage Apparel', 'half sleeves T Shirts' , 23, 12.76, 132, 4.26),
  createData(52, "men's-shirts", 'FREE FIRE', 'FREE FIRE T Shirt' , 10, 14.72, 128, 4.52),
  createData(53, "men's-shirts", 'Vintage Apparel', 'printed high quality T shirts' , 35, 7.54, 6, 4.89),
  createData(54, "men's-shirts", 'The Warehouse', 'Pubg printed T-Shirt' , 46, 16.44, 136, 4.62),
  createData(55, "men's-shirts", 'The Warehouse', 'Money Heist Printed Summer T Shirts' , 66, 15.97, 122, 4.9),
  createData(56, "men's-shoes", 'Sneakers', 'Sneakers Joggers Shoes' , 40, 12.57, 6, 4.38),
  createData(57, "men's-shoes", 'Rubber', 'Loafers for men' , 47, 10.91, 20, 4.91),
  createData(58, "men's-shoes", 'The Warehouse', 'formal office shoes' , 57, 12, 68, 4.41),
  createData(59, "men's-shoes", 'Sneakers', 'Spring and summershoes' , 20, 8.71, 137, 4.33),
  createData(60, "men's-shoes", 'Sneakers', 'Stylish Casual Jeans Shoes' , 58, 7.55, 129, 4.55),
  createData(61, "men's-watches", 'Naviforce', 'Leather Straps Wristwatch' , 120, 7.14, 91, 4.63),
  createData(62, "men's-watches", 'SKMEI 9117', 'Waterproof Leather Brand Watch ' , 46, 3.15, 95, 4.05),
  createData(63, "men's-watches", 'SKMEI 9117', 'Royal Blue Premium Watch' , 50, 2.56, 142, 4.89),
  createData(64, "men's-watches", 'Strap Skeleton', 'Leather Strap Skeleton Watch' , 46, 10.2, 61, 4.98),
  createData(65, "men's-watches", 'Stainless', 'Stainless Steel Wrist Watch' , 47, 17.79, 94, 4.79),
  createData(66, "women's-watches", 'Eastern Watches', 'Steel Analog Couple Watches' , 35, 3.23, 24, 4.79),
  createData(67, "women's-watches", 'Eastern Watches', 'Fashion Magnetic Wrist Watch' , 60, 16.69, 46, 4.03),
  createData(68, "women's-watches", 'Luxury Digital', 'Stylish Luxury Digital Watch' , 57, 9.03, 77, 4.55),
  createData(69, "women's-watches", 'Watch Pearls', 'Golden Watch Pearls Bracelet Watch' , 47, 17.55, 89, 4.77),
  createData(70, "women's-watches", 'Bracelet', 'Stainless Steel Women' , 35, 8.98, 111, 4.08),
  createData(71, "women's-watches", 'Easter Watches', 'Steel Analog Couple Watches' , 35, 3.23, 24, 4.79),
  createData(72, "women's-bags", 'LouisWill', 'Handbag for Girls' , 23, 17.5, 27, 4.91),
  createData(73, "women's-bags", 'Bracelet', 'Fancy Hand Clutch' , 44, 10.39, 101, 4.18),
  createData(74, "women's-bags", 'Copenhagen Luxe', 'Leather Hand Bag ' , 57, 11.19, 45, 4.01),
  createData(75, "women's-bags", 'Steel Frame', 'Seven Pocket Women Bag' , 68, 14.87, 13, 4.93),
  createData(76, "women's-jewellery", 'Darojay', 'Silver Ring Set Women' , 70, 13.57, 51, 4.61),
  createData(77, "women's-jewellery", 'Copenhagen Luxe', 'Rose Ring' , 100, 3.22, 149, 4.21),
  createData(78, "women's-jewellery", 'Fashion Jewellery', 'Rhinestone Korean Style Open Rings' , 30, 8.02, 9, 4.69),
  createData(79, "women's-jewellery", 'Fashion Jewellery', 'Elegant Female Pearl Earrings' , 30, 12.8, 16, 4.74),
  createData(80, "women's-jewellery", 'Cuff Butterfly', 'Chain Pin Tassel Earrings' , 45, 17.75, 45, 4.59),
  createData(81, "sunglasses", 'Designer Sun Glasses', 'Round Silver Frame Sunglasses' , 19, 10.1, 78, 4.94),
  createData(82, "sunglasses", 'Designer Sun Glasses', 'Kair Singh Square Sunglass' , 50, 15.6, 78, 4.62),
  createData(83, "sunglasses", 'Mastar Watch', 'Wiley X Night Vision Yellow Glasses' , 30, 6.33, 115, 4.9),
  createData(84, "sunglasses", 'Mastar  Watch', 'Square Sunglasses' , 28, 13.89, 64, 4.64),
  createData(85, "sunglasses", 'LouisWill', 'LouisWill Men Sunglasses' , 50, 11.27, 92, 4.98),
  createData(86, "automotive", 'Car Aux', 'Bluetooth Aux' , 25, 10.56, 26, 4.57),
  createData(87, "automotive", 'W1209 DC12V', 't Temperature Controller Incubator Controller' , 40, 11.3, 37, 4.54),
  createData(88, "automotive", 'TC Reusable', 'TC Reusable Silicone Magic Washing Gloves' , 29, 3.19, 42, 4.98),
  createData(89, "automotive", 'TC Reusable', 'Qualcom Original Car Charger' , 40, 17.53, 79, 4.2),
  createData(90, "automotive", 'Neon LED Light', 'Cycle Bike Glow' , 35, 11.08, 63, 4.1),
  createData(91, "motorcycle", 'METRO 70cc Motorcycle - MR70', 'Black Motorbike' , 569, 13.63, 115, 4.04),
  createData(92, "motorcycle", 'BRAVE BULL', 'HOT SALE IN EUROPE electric racing motorcycle' , 920, 14.4, 22, 4.19),
  createData(93, "motorcycle", 'shock absorber', 'Automatic Motor Gas Motorcycles' , 1050, 13.63, 127, 4.84),
  createData(94, "motorcycle", 'JIEPOLLY', 'new arrivals Fashion motocross goggles' , 900, 3.85, 109, 4.06),
  createData(95, "motorcycle", 'Xiangle', 'Wholesale cargo lashing belt' , 930, 17.67, 144, 4.21),
  createData(96, "lighting", 'lightingbrilliance', 'lighting ceiling kitchen' , 30, 14.89, 96, 4.83),
  createData(97, "lighting", 'Ifei Home', 'Metal Ceramic Flower' , 35, 10.94, 146, 4.93),
  createData(98, "lighting", 'DADAWU', '3 lights Indenpant kitchen islang' , 34, 5.92, 44, 4.99),
  createData(99, "lighting", 'IFEI Home', 'American Vintage Wood Pendant Light' , 46, 8.84, 138, 4.32),
  createData(100, "lighting", 'YIOSI', 'Crystal chandelier maria theresa for 12 light' , 47, 16, 133, 4.74)
];




export default function DenseTable() {
  const [pg, setpg] = React.useState(0); 
  const [rpg, setrpg] = React.useState(10); 

  function handleChangePage(event, newpage) { 
      setpg(newpage); 
  } 

  function handleChangeRowsPerPage(event) { 
      setrpg(parseInt(event.target.value, 10)); 
      setpg(0); 
  } 


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center">Product ID</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">Brand</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Price&nbsp;(₹)</TableCell>
            <TableCell align="center">Discount Percentage&nbsp;(%)</TableCell>
            <TableCell align="center">Rating</TableCell>
            <TableCell align="center">Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(pg * rpg, pg * 
                            rpg + rpg).map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.ID}</TableCell>
              <TableCell align="center">{row.Category}</TableCell>
              <TableCell align="center">{row.Brand}</TableCell>
              <TableCell align="center">{row.Title}</TableCell>
              <TableCell align="center">{row.Price}</TableCell>
              <TableCell align="center">{row.DiscountPercentage}</TableCell>
              <TableCell align="center">{row.Rating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination 
                rowsPerPageOptions={10} 
                component="div"
                count={rows.length} 
                rowsPerPage={rpg} 
                page={pg} 
                onPageChange={handleChangePage} 
                onRowsPerPageChange={handleChangeRowsPerPage} 
            /> 
    </TableContainer>
    
  );
}
