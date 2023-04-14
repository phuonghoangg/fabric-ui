import classNames from 'classnames/bind';
import styles from './CreateProduct.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import {
  Box,
  MenuItem,
  Modal,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getAllProductPagi,
  getAllType,
  updateProduct,
} from '~/redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
const cx = classNames.bind(styles);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 'inherit',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxHeight: '600px',
  overflow: 'auto',
};
const CreateProduct = () => {
  const allType = useSelector((state) => state.typeProduct.typeProduct?.allType);
  const dataProduct = useSelector((state) => state.product.products.allProduct);
  const [open, setOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [delModal, setDelModal] = useState(false);
  const [idSelect, setIdSelect] = useState();

  const [selected, setSelected] = useState('');

  const [nameProduct, setNameProduct] = useState('');
  const [price, setPrice] = useState('');
  const [color, setColor] = useState('');
  const [weight, setWeight] = useState('');
  //set image
  const [data, setData] = useState([]);
  // set Pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChange = (event) => {
    setSelected(event.target.value);
  };
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
    setEditModal(false);
    setDelModal(false);
    setNameProduct('');
    setPrice('');
    setColor('');
    setWeight('');
    setData([]);
    setSelected('');
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
    // console.log('product: ', product);
    createProduct(product, dispatch);
    handleClose();
  };
  const handleSelect = (product) => {
    setIdSelect(product._id);
    setNameProduct(product.nameProduct);
    setPrice(product.price);
    setColor(product.color);
    setWeight(product.weight);
    setData(product.images);
  };
  const handleEdit = () => {
    const productEdit = {
      nameProduct: nameProduct,
      price: price,
      color: color,
      weight: weight,
    };
    // console.log('productEdit: ', productEdit);
    updateProduct(productEdit, idSelect, dispatch);
    handleClose();
  };
  const handleDelete = () => {
    // console.log('product select: ', idSelect);
    deleteProduct(idSelect, dispatch);
    handleClose();
  };
  //handle change page
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  //===================
  useEffect(() => {
    getAllType(dispatch);
    // getAllProduct(dispatch);
    let payload = {
      skip: page,
      limit: rowsPerPage,
    };
    getAllProductPagi(payload, dispatch);
  }, [dispatch, open, editModal, delModal, page, rowsPerPage]);

  const columns = [
    { id: 'nameProduct', label: 'Name Product', minWidth: 170, align: 'center', format: (value) => value },
    { id: 'color', label: 'Color', minWidth: 100, align: 'center', format: (value) => value },
    { id: 'price', label: 'Price', minWidth: 100, align: 'center', format: (value) => value },
    { id: 'weight', label: 'Weight', minWidth: 100, align: 'center', format: (value) => value },
    { id: 'type', label: 'Type', minWidth: 100, align: 'center', format: (value) => value.typeName },
    {
      id: 'images',
      label: 'Images',
      minWidth: 100,
      align: 'center',
      format: (value) => <img style={{ width: 250, height: 250 }} src={value[0]} alt="" />,
    },
    {
      id: '_id',
      label: 'Action',
      minWidth: 300,
      align: 'center',
      format: (value) => (
        <div className={cx('option-action')}>
          <div>View</div>
          <div onClick={() => setEditModal(true)}>Update</div>
          <div onClick={() => setDelModal(true)}>Delete</div>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className={cx('wrapper')}>
        <p className={cx('title')}>List Type Product</p>
        <div onClick={handleOpen} className={cx('wrap-button')}>
          <div className={cx('button-add')}>
            <FontAwesomeIcon icon={faPlus} /> Add Product
          </div>
        </div>
        <div className={cx('wrap-product')}>
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 600 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth, fontSize: 16 }}
                      >
                        {column.label}{' '}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataProduct?.allProduct.map((product, index) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                        {columns.map((column) => {
                          const value = product[column.id];
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{ fontSize: 16 }}
                              onClick={() => handleSelect(product)}
                            >
                              {column.format ? column.format(value) : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            {dataProduct && (
              <TablePagination
                className={cx('paginationn')}
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={dataProduct?.count}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            )}
          </Paper>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={cx('title-modal')}>Create Product</div>
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
      {/* Modal edit */}
      <Modal
        open={editModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={cx('title-modal')}>Edit Product</div>
          <div className={cx('form-input')}>
            <input onChange={(e) => setNameProduct(e.target.value)} value={nameProduct} className={cx('input-modal')} />
            <input onChange={(e) => setPrice(e.target.value)} className={cx('input-modal')} value={price} />
            <input onChange={(e) => setColor(e.target.value)} className={cx('input-modal')} value={color} />
            <input onChange={(e) => setWeight(e.target.value)} value={weight} className={cx('input-modal')} />

            <div className={cx('image-wrap')}>
              {data &&
                data?.map((image, index) => {
                  return <img key={index} src={image} alt="" style={{ width: 250, height: 250 }} />;
                })}
            </div>
            <div onClick={handleEdit} className={cx('btn-create')}>
              Confirm
            </div>
          </div>
        </Box>
      </Modal>
      {/* delete modal */}
      <Modal
        open={delModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={cx('title-modal')}>Are you sure delete this</div>
          <div className={cx('form-input-delete')}>
            <div onClick={handleDelete} className={cx('btn-create')}>
              Yes
            </div>
            <div onClick={handleClose} className={cx('btn-create')}>
              No
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default CreateProduct;
