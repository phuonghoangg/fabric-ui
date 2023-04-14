import classNames from 'classnames/bind';
import styles from './CreateBlog.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
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
import { useEffect, useRef, useState } from 'react';
import {
  createBlog,
  createTypeBlog,
  deleteBlog,
  deleteTypeBlog,
  editBlog,
  getAllBlog,
  getAllTypeBlog,
  updateTypeBlog,
} from '~/redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';

// import ReactQuill from 'react-quill';
// import { Quill } from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

import { Editor } from '@tinymce/tinymce-react';
import dayjs from 'dayjs';

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
const styleBlog = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const CreateBlog = () => {
  const allTypeBlog = useSelector((state) => state.typeBlog.typeBlog?.allType);
  const dataBlog = useSelector((state) => state.blog.blogs?.allBlog);
  const editorRef = useRef();

  //create modal type blog
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [editTypeModal, setEditTypeModal] = useState(false);
  const [delTypeModal, setDelTypeModal] = useState(false);
  //create modal blog
  const [openCreateBlogModal, setOpenCreateBlogModal] = useState(false);
  const [deleteBlogModal, setDeleteBlogModal] = useState(false);
  const [data, setData] = useState();
  const [editBlogModal, setEditBlogModal] = useState(false);
  const [titleBlog, setTitleBlog] = useState('');
  const [description, setDescription] = useState('');
  //select data
  const [titleType, setTitleType] = useState('');
  const [idSelect, setIdSelect] = useState();
  //select option
  const [selected, setSelected] = useState('');

  // const [typeTitleSelect, setTypeTitleSelect] = useState();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const handleClose = () => {
    setOpenCreateModal(false);
    setDelTypeModal(false);
    setEditTypeModal(false);
    setOpenCreateBlogModal(false);
    setDeleteBlogModal(false);
    setEditBlogModal(false);
    setIdSelect('');
    setTitleType('');
    setDescription('');
    setTitleBlog('');
    setData('');
  };
  const handleChangeInput = (e) => {
    setTitleType(e.target.value);
  };
  const handleCreateType = () => {
    let type = {
      typeTitle: titleType,
    };
    createTypeBlog(type, dispatch);
    handleClose();
  };
  const handleUpdateType = () => {
    let type = {
      typeTitle: titleType,
    };
    updateTypeBlog(idSelect, type, dispatch);
    handleClose();
  };
  const handleSelect = (value) => {
    setIdSelect(value._id);
    setTitleType(value.typeTitle);
    setDescription(value.description);
    setTitleBlog(value.title);
    setData(value.image);
  };

  const handleDeleteTypeModal = () => {
    deleteTypeBlog(idSelect, dispatch);
    handleClose();
  };
  const handleDeleteModal = () => {
    deleteBlog(idSelect, dispatch);
    handleClose();
  };
  useEffect(() => {
    let payload = {
      skip: '',
      limit: '',
    };
    getAllTypeBlog(dispatch);
    getAllBlog(payload, dispatch);
  }, [dispatch, delTypeModal, openCreateModal, editTypeModal, openCreateBlogModal, editBlogModal]);
  //handle change page
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  //===================

  const handleCreateBlog = () => {
    const description = editorRef.current.getContent();
    const blogCreate = {
      title: titleBlog,
      description: description,
      image: data,
      type: selected,
    };
    // console.log('blogCreate: ', blogCreate);
    createBlog(blogCreate, dispatch);
    handleClose();
  };
  const handleEditBlog = () => {
    const description = editorRef.current.getContent();

    const blogUpdate = {
      title: titleBlog,
      description: description,
      image: data,
    };
    editBlog(idSelect, blogUpdate, dispatch);
    handleClose();
  };
  const handleFile = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setData(e.target.result);
          // setData((prev) => [...prev, e.target.result]);
        };
      } else {
        console.log('not valid');
      }
    } else {
      console.log('nhap file pdf');
    }
  };

  const columns = [
    { id: 'title', label: 'Title', minWidth: 170, align: 'center', format: (value) => value },
    {
      id: 'description',
      label: 'Description',
      minWidth: 100,
      align: 'center',
      format: (value) => (
        <p style={{ height: 25, width: 170, overflow: 'hidden' }} dangerouslySetInnerHTML={{ __html: value }}></p>
      ),
    },
    {
      id: 'createdAt',
      label: 'Date',
      minWidth: 100,
      align: 'center',
      format: (value) => dayjs(value).format('YYYY-MMMM-DD'),
    },
    { id: 'type', label: 'Type', minWidth: 100, align: 'center', format: (value) => value.typeTitle },
    // { id: 'author', label: 'Author', minWidth: 100, align: 'center', format: (value) => value },
    {
      id: 'image',
      label: 'image',
      minWidth: 100,
      align: 'center',
      format: (value) => <img style={{ width: 70, height: 70 }} src={value} alt="" />,
    },

    {
      id: '_id',
      label: 'Action',
      minWidth: 300,
      align: 'center',
      format: (value) => (
        <div className={cx('option-action')}>
          <div onClick={() => setEditBlogModal(true)}>Update</div>
          <div onClick={() => setDeleteBlogModal(true)}>Delete</div>
        </div>
      ),
    },
  ];
  const columnType = [
    { id: 'typeTitle', label: 'Title Type', minWidth: 170, align: 'center', format: (value) => value },
    { id: 'blogs', label: 'Total Blog', minWidth: 170, align: 'center', format: (value) => value.length },
    {
      id: '_id',
      label: 'Action',
      minWidth: 300,
      align: 'center',
      format: (value) => (
        <div className={cx('option-action')}>
          <div onClick={() => setEditTypeModal(true)}>Update</div>
          <div onClick={() => setDelTypeModal(true)}>Delete</div>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className={cx('wrapper')}>
        <p className={cx('title')}>List Type Blog</p>
        <div className={cx('wrap-button')}>
          <div onClick={() => setOpenCreateModal(true)} className={cx('button-add')}>
            <FontAwesomeIcon icon={faPlus} /> Add Type Blog
          </div>
        </div>
        <div className={cx('wrap-product')}>
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 1000 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columnType.map((column) => (
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
                <TableBody className={cx('paginationn')}>
                  {allTypeBlog?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((type, index) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                        {columnType.map((column) => {
                          const value = type[column.id];
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{ fontSize: 16 }}
                              onClick={() => handleSelect(type)}
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
            {allTypeBlog && (
              <TablePagination
                className={cx('paginationn')}
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={allTypeBlog?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            )}
          </Paper>
        </div>
        <p className={cx('title')}>List Type Blog</p>
        <div className={cx('wrap-button')}>
          <div onClick={() => setOpenCreateBlogModal(true)} className={cx('button-add')}>
            <FontAwesomeIcon icon={faPlus} /> Add Blog
          </div>
        </div>
        <div className={cx('wrap-product')}>
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 1000 }}>
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
                  {dataBlog?.allBlog?.map((blog, index) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                        {columns.map((column) => {
                          const value = blog[column.id];
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{ fontSize: 16 }}
                              onClick={() => handleSelect(blog)}
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
          </Paper>
        </div>
      </div>
      <Modal
        open={openCreateModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={cx('title-modal')}>Create Type</div>
          <input onChange={(e) => handleChangeInput(e)} className={cx('input-modal')} placeholder="Enter Type" />
          <div onClick={handleCreateType} className={cx('btn-create')}>
            Create
          </div>
        </Box>
      </Modal>
      <Modal
        open={editTypeModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={cx('title-modal')}>Update Type</div>
          <input onChange={(e) => setTitleType(e.target.value)} className={cx('input-modal')} value={titleType} />
          <div onClick={handleUpdateType} className={cx('btn-create')}>
            update
          </div>
        </Box>
      </Modal>

      <Modal
        open={delTypeModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={cx('title-modal')}>Are you sure delete this</div>
          <div className={cx('form-input-delete')}>
            <div onClick={handleDeleteTypeModal} className={cx('btn-create')}>
              Yes
            </div>
            <div onClick={handleClose} className={cx('btn-create')}>
              No
            </div>
          </div>
        </Box>
      </Modal>

      {/* delete Blog */}
      <Modal
        open={deleteBlogModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={cx('title-modal')}>Are you sure delete this</div>
          <div className={cx('form-input-delete')}>
            <div onClick={handleDeleteModal} className={cx('btn-create')}>
              Yes
            </div>
            <div onClick={handleClose} className={cx('btn-create')}>
              No
            </div>
          </div>
        </Box>
      </Modal>
      {/*  Create blog*/}

      <Modal
        open={openCreateBlogModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleBlog}>
          <div className={cx('title-modal')}>Create Blog</div>

          <div className={cx('form-input-blog')}>
            <div>
              <label>Enter Title Blog</label>
              <input
                onChange={(e) => setTitleBlog(e.target.value)}
                className={cx('input-modal')}
                placeholder="Enter Title Blog"
              />
            </div>

            <div>
              <label>Choose Banner</label>
              <input onChange={handleFile} type="file" className={cx('input-file')} />
            </div>
            {data && <img style={{ width: 70, height: 70 }} alt="" src={data} />}
            <div>
              <label>Choose Type</label>

              <Select
                style={{
                  backgroundColor: '#fff',
                  height: 50,
                  width: 100,
                  fontSize: 16,
                  marginBottom: 20,
                  marginTop: 20,
                }}
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={selected}
                onChange={handleChange}
                autoWidth
                label=""
                className={cx('select-wrap')}
              >
                {allTypeBlog?.map((type, index) => {
                  return (
                    <MenuItem key={index} style={{ fontSize: 16 }} value={type._id}>
                      {type.typeTitle}
                    </MenuItem>
                  );
                })}
              </Select>
            </div>
            <label>Enter Description</label>
            <Editor onInit={(evt, editor) => (editorRef.current = editor)} />

            <div onClick={handleCreateBlog} className={cx('btn-create')}>
              Create
            </div>
          </div>
        </Box>
      </Modal>

      {/* Update Blog */}

      <Modal
        open={editBlogModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleBlog}>
          <div className={cx('title-modal')}>update blog</div>
          <div className={cx('form-input-blog')}>
            <input
              value={titleBlog}
              onChange={(e) => setTitleBlog(e.target.value)}
              className={cx('input-modal')}
              placeholder="Enter Title Blog"
            />
            <input onChange={handleFile} type="file" className={cx('input-file')} />
            <img style={{ width: 70, height: 70 }} alt="" src={data} />
            <Editor
              initialValue={description}
              onInit={(evt, editor) => (editorRef.current = editor)}
              // onChange={(e) => setDescription(e.target.value)}
            />

            <div onClick={handleEditBlog} className={cx('btn-create')}>
              Update
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default CreateBlog;
