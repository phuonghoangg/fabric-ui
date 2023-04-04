import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './CreateTypeProduct.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { createType, deleteType, getAllType } from '~/redux/apiRequest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Box, Modal } from '@mui/material';
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

const CreateTypeProduct = () => {
  const allType = useSelector((state) => state.typeProduct.typeProduct?.allType);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const [typeName, setTypeName] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCreate = () => {
    const dataSend = {
      typeName: typeName,
    };
    createType(dataSend, dispatch);
    setOpen(false);
  };

  const handleChangeInput = (e) => {
    setTypeName(e.target.value);
  };

  const handleDelete = (id) => {
    deleteType(id, dispatch);
  };
  useEffect(() => {
    // window.scrollTo({
    //   top: 0,
    //   behavior: 'smooth',
    //   /* you can also use 'auto' behaviour
    //              in place of 'smooth' */
    // });
    getAllType(dispatch);
  }, [dispatch, open]);
  return (
    <>
      <div className={cx('wrapper')}>
        <div>
          <p className={cx('title')}>List Type Product</p>
          <div className={cx('wrap-button')}>
            <div onClick={handleOpen} className={cx('button-add')}>
              <FontAwesomeIcon icon={faPlus} /> Add type
            </div>
          </div>
          <div className={cx('wrap-item')}>
            {allType?.map((item, index) => {
              return (
                <div key={index} className={cx('item')}>
                  <div className={cx('id')}>{index + 1}</div>
                  <input className={cx('name')} disabled value={item.typeName} />
                  <div className={cx('action')}>
                    {/* <div className={cx('wrap-icon')}>
                    <FontAwesomeIcon icon={faTrash} />
                  </div> */}
                    <div className={cx('wrap-icon')} onClick={() => handleDelete(item._id)}>
                      <FontAwesomeIcon className={cx('icon')} icon={faTrash} /> Delete
                    </div>
                  </div>
                </div>
              );
            })}
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
          <input onChange={(e) => handleChangeInput(e)} className={cx('input-modal')} placeholder="Enter Type" />
          <div onClick={handleCreate} className={cx('btn-create')}>
            Create
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default CreateTypeProduct;
