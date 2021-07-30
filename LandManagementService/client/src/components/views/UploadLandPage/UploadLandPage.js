import React, { useState } from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import FileUpload from '../../utils/FileUpload'
import Axios from 'axios';
const { Title } = Typography;
const { TextArea } = Input;
function UploadLandPage(props) {
    const [TitleValue, setTitleValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [PriceValue, setPriceValue] = useState(0)
    const [RegionValue, setRegionValue] = useState("")
    const [PincodeValue, setPincodeValue] = useState(0)
    const [LengthValue, setLengthValue] = useState(0)
    const [BreadthValue, setBreadthValue] = useState(0)
    const [AreaValue, setAreaValue] = useState(0)
    const [ContactDetailsValue, setContactDetailsValue] = useState(0)
    const [Images, setImages] = useState([])


    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }
    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }

    const onRegionChange = (event) => {
        setRegionValue(event.currentTarget.value)
    }

    const onPincodeChange = (event) => {
        setPincodeValue(event.currentTarget.value)
    }

    const onLengthChange = (event) => {
        setLengthValue(event.currentTarget.value)
    }

    const onBreadthChange = (event) => {
        setBreadthValue(event.currentTarget.value)
    }

    const onAreaChange = (event) => {
        setAreaValue(event.currentTarget.value)
    }

    const onContactDetailsChange = (event) => {
        setContactDetailsValue(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        {/* 
           if (!TitleValue || !DescriptionValue || !PriceValue || !Images
            || !LengthValue || !BreadthValue || !ContactDetailsValue 
            || !PincodeValue) {
            return alert('fill all the fields first!')
        } 
        */}
        if (!TitleValue || !DescriptionValue || !PriceValue || !Images
            || !LengthValue || !BreadthValue || !ContactDetailsValue 
            || !PincodeValue) {
            return alert('fill all the fields first!')
        }
        const variables = {
            writer: props.user.userData._id,
            title: TitleValue,
            description: DescriptionValue,
            price: PriceValue,
            images: Images,
            region: RegionValue,
            pincode: PincodeValue,
            length: LengthValue,
            breath: BreadthValue,
            area: AreaValue,
            contactdetails: ContactDetailsValue,
        }
        Axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Product Successfully Uploaded')
                    props.history.push('/')
                } else {
                    alert('Failed to upload Product')
                }
            })
    }
    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}>Upload Land Details</Title>
            </div>

            <Form onSubmit={onSubmit}>
                {/* Image Upload */}
                <FileUpload refreshFunction={updateImages} />

                <br />
                <br />
                <label>Title</label>
                <Input
                    onChange={onTitleChange}
                    value={TitleValue}
                />
                <br />
                <br />
                <label>Description</label>
                <TextArea
                    onChange={onDescriptionChange}
                    value={DescriptionValue}
                />
                <br />
                <br />
                <label>Price(Rs)</label>
                <Input
                    onChange={onPriceChange}
                    value={PriceValue}
                    type="number"
                />

                <br />
                <br />
                <label>Region</label>
                <Input
                    onChange={onRegionChange}
                    value={RegionValue}
                />
                <br />
                <br />


                <label>Pincode</label>
                <Input
                    onChange={onPincodeChange}
                    value={PincodeValue}
                    type="number"
                />

                <br />
                <br />
                <label>Length</label>
                <Input
                    onChange={onLengthChange}
                    value={LengthValue}
                    type="number"
                />
                <br />
                <br />
                <label>Breadth</label>
                <Input
                    onChange={onBreadthChange}
                    value={BreadthValue}
                    type="number"
                />
                <br />
                <br />


                <label>Area</label>
                <Input
                    onChange={onAreaChange}
                    value={AreaValue}
                    type="number"
                />

                <br />
                <br />
                <label>Contact Details</label>
                <Input
                    onChange={onContactDetailsChange}
                    value={ContactDetailsValue}
                    type="number"
                />

                <br />
                <br />

                <Button
                    onClick={onSubmit}
                >
                    Submit
                </Button>

            </Form>
        </div >
    )
}

export default UploadLandPage
