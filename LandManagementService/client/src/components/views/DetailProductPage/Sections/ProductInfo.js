import React, { useEffect, useState } from 'react'
import { Button, Descriptions } from 'antd';

function ProductInfo(props) {

    const [Product, setProduct] = useState({})

    useEffect(() => {

        setProduct(props.detail)

    }, [props.detail])

    // const addToCarthandler = () => {
    //     props.addToCart(props.detail._id)
    // }


    return (
        <div>
            <Descriptions title="Product Info">
                <Descriptions.Item label="Price (Rs)"> {Product.price}</Descriptions.Item>
                <Descriptions.Item label="Area (Sq Km)">{Product.area}</Descriptions.Item>
                <Descriptions.Item label="Region"> {Product.region}</Descriptions.Item>
                <Descriptions.Item label="Contact"> {Product.contactdetails}</Descriptions.Item>
                <Descriptions.Item label="Description"> {Product.description}</Descriptions.Item>
              
            </Descriptions>

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                
            </div>
        </div>
    )
}

export default ProductInfo