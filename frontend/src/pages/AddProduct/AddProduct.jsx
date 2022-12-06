import React,{useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Subtitle from '../../components/Subtitle/Subtitle'
import TextField2 from '../../components/TextField2/TextField2'
import Footer from '../../components/Footer/Footer'

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
    return (
        <div className={styles.container}>
            <Navbar />
            <Subtitle
                text="Add Product"
            />
            <form action="" className={styles.form}>
                <TextField2
                    type="text"
                    name="name"
                    placeholder="Name"
                    label="Name"
                    value={productDetails.name}
                    classes={styles.input}
                />
                <TextField2
                    type="number"
                    name="price"
                    placeholder= "0"
                    label = "Price"
                    value={productDetails.price}
                    classes={styles.input}
                />
                <TextField2
                    type="text"
                    name="category"
                    placeholder="Jewelery,Decoration"
                    label = "Category"
                    value={productDetails.category}
                    classes={styles.input}
                />
                <TextField2
                    type="text"
                    name="description"
                    placeholder="About your product"
                    label = "Description"
                    value={productDetails.description}
                    classes={styles.input + " h-[10rem]"}
                />
            </form>
            <Footer />
        </div>
    )
}

export default AddProduct