import BannerChild from '../components/BannerChild/BannerChild';
import classNames from 'classnames/bind';
import styles from './BlogPage.module.scss';
import { Pagination, Stack } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllBlog } from '~/redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';

const cx = classNames.bind(styles);

const BlogPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataBlogs = useSelector((state) => state.blog.blogs?.allBlog);

  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(2);
  // console.log('allBlog: ', allBlog);
  useEffect(() => {
    let payload = {
      skip: page,
      limit: limit,
    };
    getAllBlog(payload, dispatch);
  }, [dispatch, limit, page]);
  return (
    <div className={cx('wrapper')}>
      <BannerChild title="Blog" />
      <div className={cx('inner')}>
        <div className={cx('list-blog')}>
          {dataBlogs?.allBlog.map((item, index) => (
            <div key={index} className={cx('blog')}>
              <img src={item.image} className={cx('image')} alt="" />
              <div className={cx('content')}>
                <div className={cx('title-content')}>{item.title}</div>
                <div dangerouslySetInnerHTML={{ __html: item.description }} className={cx('description')}></div>
                <div onClick={() => navigate(`/blog/${item._id}`)} className={cx('read-more')}>
                  read more <p>&gt;</p>
                </div>
              </div>
              <div className={cx('date-time')}>
                <div className={cx('date')}>{dayjs(item.createAt).format('DD')}</div>
                <div className={cx('month')}>{dayjs(item.createAt).format('MMMM')}</div>
              </div>
            </div>
          ))}
          <div className={cx('bla')}>
            {dataBlogs && (
              <Stack spacing={2}>
                <Pagination
                  onChange={(e, value) => setPage(value - 1)}
                  size="large"
                  shape="rounded"
                  variant="outlined"
                  count={dataBlogs.count}
                />
              </Stack>
            )}
          </div>
        </div>
        <div className={cx('recent')}>
          <div className={cx('input-search')}>
            <div className={cx('inner-search')}>
              <input placeholder="Keyword" />
              <div className={cx('search-icon')}>
                <FontAwesomeIcon className={cx('icon')} icon={faSearch} />
              </div>
            </div>
          </div>
          <div className={cx('list-recent')}>
            <div className={cx('title')}>Recent Post</div>
            {dataBlogs?.allBlog.map((item, index) => {
              return (
                <div key={index} className={cx('list-post')}>
                  <img src={item.image} className={cx('image-post')} alt="" />
                  <div className={cx('des-post')}>{item.title}</div>
                </div>
              );
            })}
          </div>
          <div className={cx('plain-text')}>
            <div className={cx('title')}>Plain Text</div>
            <div className={cx('inner-plain')}>
              <div className={cx('description')}>
                Vero sea et accusam justo dolor accusam lorem consetetur, dolores sit amet sit dolor clita kasd justo,
                diam accusam no sea ut tempor magna takimata, amet sit et diam dolor ipsum amet diam
              </div>
              <button className={cx('btn-read')}>Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
