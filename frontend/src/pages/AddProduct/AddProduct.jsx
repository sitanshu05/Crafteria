import React,{useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Subtitle from '../../components/Subtitle/Subtitle'
import TextField2 from '../../components/TextField2/TextField2'
import Footer from '../../components/Footer/Footer'
import ButtonDark from '../../components/ButtonDark/ButtonDark'
import axios from 'axios'

const styles = {
    container: "bg-bg_home bg-no-repeat bg-cover",
    form: "bg-bg_dark flex flex-col items-center p-[2rem] gap-8 m-[5rem] rounded-[30px]",
    input : ""


}

function AddProduct() {

    const [productDetails, setProductDetails] = useState({
        name: "",
        description : "",
        price : 0,
        category : ""
        });

        const changeHandler = (event) =>{

            const {name,value} = event.target
            setProductDetails(item=>{
                return {
                    ...item,
                    [name] : value
            }
            })
        }
        const addProduct = async(event) =>{
            event.preventDefault()
            console.log(productDetails)
            await axios.post("http://localhost:4000/api/v1/admin/product/new",{
                name: productDetails.name,
                description : productDetails.description,
                price : productDetails.price,
                category : productDetails.category,
                images :{
                        public_id: "0",
                        url : "https://images.unsplash.com/photo-1627237072130-a20fdded539c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGFuZGljcmFmdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                        }
                
            }).then(res =>{
                alert("product added")
            }).catch(err=>{
                console.log(err)
                alert("Product addition failed")
            })
        }
    return (
        <div className={styles.container}>
            <Navbar />
            <Subtitle
                text="Add Product"
            />
            <form action="" className={styles.form} onSubmit={addProduct}>
                <TextField2
                    type="text"
                    name="name"
                    placeholder="Name"
                    label="Name"
                    value={productDetails.name}
                    classes={styles.input}
                    changeHandler = {changeHandler}
                />
                <TextField2
                    type="number"
                    name="price"
                    placeholder= "0"
                    label = "Price"
                    value={productDetails.price}
                    classes={styles.input}
                    changeHandler = {changeHandler}
                />
                <TextField2
                    type="text"
                    name="category"
                    placeholder="Jewelery,Decoration"
                    label = "Category"
                    value={productDetails.category}
                    classes={styles.input}
                    changeHandler = {changeHandler}
                />
                <TextField2
                    type="text"
                    name="description"
                    placeholder="About your product"
                    label = "Description"
                    value={productDetails.description}
                    classes={styles.input + " h-[10rem]"}
                    changeHandler = {changeHandler}
                />
                <ButtonDark 
                    text="Add Product"
                    click = {addProduct}
                />
            </form>
            <Footer />
        </div>
    )
}

export default AddProduct