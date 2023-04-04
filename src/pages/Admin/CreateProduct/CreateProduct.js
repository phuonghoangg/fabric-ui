import classNames from 'classnames/bind';
import styles from './CreateProduct.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Box, MenuItem, Modal, Select } from '@mui/material';
import { createProduct, getAllProduct, getAllType } from '~/redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
const cx = classNames.bind(styles);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};
const CreateProduct = () => {
  const allType = useSelector((state) => state.typeProduct.typeProduct?.allType);
  const allProduct = useSelector((state) => state.product.products.allProduct);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');

  const [nameProduct, setNameProduct] = useState('');
  const [price, setPrice] = useState('');
  const [color, setColor] = useState('');
  const [weight, setWeight] = useState('');
  //set image
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    setSelected(event.target.value);
  };
  //   const allowFile = ['application/pdf', 'application/png', 'application/jpg'];
  const handleFile = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          //   setData(e.target.result);
          setData((prev) => [...prev, e.target.result]);
        };
      } else {
        console.log('not valid');
      }
    } else {
      console.log('nhap file pdf');
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    // setSelected('');
    // setData([]);
  };
  const dispatch = useDispatch();
  const handleCreate = () => {
    const product = {
      nameProduct: nameProduct,
      price: price,
      color: color,
      weight: weight,
      type: selected,
      images: data,
    };
    console.log('product: ', product);
    createProduct(product, dispatch);
    handleClose();
  };
  useEffect(() => {
    // window.scrollTo({
    //   top: 0,
    //   behavior: 'smooth',
    //   /* you can also use 'auto' behaviour
    //              in place of 'smooth' */
    // });
    getAllType(dispatch);
    getAllProduct(dispatch);
  }, [dispatch, open]);
  //   console.log('selected', nameProduct);
  //   console.log('allProduct: ', allProduct);
  return (
    <>
      <div className={cx('wrapper')}>
        <p className={cx('title')}>List Type Product</p>
        <div onClick={handleOpen} className={cx('wrap-button')}>
          <div className={cx('button-add')}>
            <FontAwesomeIcon icon={faPlus} /> Add Product
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={cx('title-modal')}>Create Type</div>
          <div className={cx('form-input')}>
            <input
              onChange={(e) => setNameProduct(e.target.value)}
              className={cx('input-modal')}
              placeholder="Enter Name Product"
            />
            <input
              onChange={(e) => setPrice(e.target.value)}
              className={cx('input-modal')}
              placeholder="Enter Price Product"
            />
            <input
              onChange={(e) => setColor(e.target.value)}
              className={cx('input-modal')}
              placeholder="Enter Color Product"
            />
            <input
              onChange={(e) => setWeight(e.target.value)}
              className={cx('input-modal')}
              placeholder="Enter Weight"
            />
            <Select
              style={{ backgroundColor: '#fff', width: 'inherit', height: 50, fontSize: 16, marginBottom: 20 }}
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={selected}
              onChange={handleChange}
              autoWidth
              label=""
              className={cx('select-wrap')}
            >
              {allType?.map((type, index) => {
                return (
                  <MenuItem key={index} style={{ fontSize: 16 }} value={type._id}>
                    {type.typeName}
                  </MenuItem>
                );
              })}
            </Select>
            <input onChange={handleFile} type="file" className={cx('input-file')} />
            <div className={cx('image-wrap')}>
              {data.map((image, index) => {
                return <img src={image} key={index} alt="" />;
              })}
            </div>
            <div onClick={handleCreate} className={cx('btn-create')}>
              Create
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default CreateProduct;
