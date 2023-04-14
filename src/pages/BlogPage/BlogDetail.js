import BannerChild from '../components/BannerChild/BannerChild';
import classNames from 'classnames/bind';
import styles from './BlogPage.module.scss';
import imgBlog1 from '~/assets/image/blog-1.jpg';
import imgBlog2 from '~/assets/image/blog-2.jpg';
import { Pagination, Stack } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getABlog, getAllBlog } from '~/redux/apiRequest';
import dayjs from 'dayjs';

const cx = classNames.bind(styles);

const BlogDetail = () => {
  const dataBlog = useSelector((state) => state.blog.blogs?.allBlog);
  const aBlog = useSelector((state) => state.blog.anBlog?.blog);
  const loading = useSelector((state) => state.blog.anBlog?.isFetching);
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    getABlog(params.id, dispatch);
    getAllBlog(dispatch);
  }, [dispatch, params.id]);
  return (
    <>
      {loading === false ? (
        <div className={cx('wrapper')}>
          <BannerChild title="Blog Detail" />
          <div className={cx('inner')}>
            <div className={cx('list-blog')}>
              {aBlog && (
                <div className={cx('blog')}>
                  <img src={aBlog.image} className={cx('image')} alt="" />
                  <div className={cx('content')}>
                    <div className={cx('title-content')}>{aBlog.title}</div>
                    <div
                      dangerouslySetInnerHTML={{ __html: aBlog.description }}
                      className={cx('description-detail')}
                    ></div>
                  </div>
                  <div className={cx('date-time')}>
                    <div className={cx('date')}>{dayjs(aBlog.createAt).format('DD')}</div>
                    <div className={cx('month')}>{dayjs(aBlog.createAt).format('MMMM')}</div>
                  </div>
                </div>
              )}

              <div className={cx('blog')}>
                <div className={cx('content')}>
                  <div className={cx('title')}>3 Comments</div>
                  {/* comment start */}
                  <div className={cx('comment')}>
                    <img
                      src="https://www.gardeningknowhow.com/wp-content/uploads/2017/07/hardwood-tree.jpg"
                      alt=""
                      className={cx('avatar')}
                    />
                    <div className={cx('info-comment')}>
                      <div className={cx('user-comment')}>
                        John Doe <span>01 Jan 2045</span>
                      </div>
                      <div className={cx('des-comment')}>
                        Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et
                        no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam
                        consetetur sadipscing, at tempor amet ipsum diam tempor consetetur at sit.
                      </div>
                    </div>
                  </div>
                  <div className={cx('comment')}>
                    <img
                      src="https://www.gardeningknowhow.com/wp-content/uploads/2017/07/hardwood-tree.jpg"
                      alt=""
                      className={cx('avatar')}
                    />
                    <div className={cx('info-comment')}>
                      <div className={cx('user-comment')}>
                        John Doe <span>01 Jan 2045</span>
                      </div>
                      <div className={cx('des-comment')}>
                        Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et
                        no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam
                        consetetur sadipscing, at tempor amet ipsum diam tempor consetetur at sit.
                      </div>
                    </div>
                  </div>
                  <div className={cx('comment')}>
                    <img
                      src="https://www.gardeningknowhow.com/wp-content/uploads/2017/07/hardwood-tree.jpg"
                      alt=""
                      className={cx('avatar')}
                    />
                    <div className={cx('info-comment')}>
                      <div className={cx('user-comment')}>
                        John Doe <span>01 Jan 2045</span>
                      </div>
                      <div className={cx('des-comment')}>
                        Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et
                        no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam
                        consetetur sadipscing, at tempor amet ipsum diam tempor consetetur at sit.
                      </div>
                    </div>
                  </div>
                  {/* end Comment */}
                </div>
              </div>
              <div className={cx('blog')}>
                <div className={cx('content')}>
                  <div className={cx('title')}>Leave a comment</div>
                  <div className={cx('wrap-input')}>
                    <label>Name*</label>
                    <input />
                  </div>
                  <div className={cx('wrap-input')}>
                    <label>Email*</label>
                    <input />
                  </div>
                  <div className={cx('wrap-input')}>
                    <label>Website*</label>
                    <input />
                  </div>
                  <div className={cx('wrap-input')}>
                    <label>Message*</label>
                    <textarea rows={4} />
                  </div>
                  <button className={cx('leave-comment')}>Leave Comment</button>
                </div>
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
                {dataBlog?.allBlog?.slice(0, 4).map((item, index) => {
                  return (
                    <div key={index} className={cx('list-post')}>
                      <img src={item.image} className={cx('image-post')} alt="" />
                      <div dangerouslySetInnerHTML={{ __html: item.description }} className={cx('des-post')}></div>
                    </div>
                  );
                })}
              </div>
              <div className={cx('plain-text')}>
                <div className={cx('title')}>Plain Text</div>
                <div className={cx('inner-plain')}>
                  <div className={cx('description')}>
                    Vero sea et accusam justo dolor accusam lorem consetetur, dolores sit amet sit dolor clita kasd
                    justo, diam accusam no sea ut tempor magna takimata, amet sit et diam dolor ipsum amet diam
                  </div>
                  <button className={cx('btn-read')}>Read more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ paddingTop: 70 }}>
          <FontAwesomeIcon icon={faSpinner} spin color="#00" />
        </div>
      )}
    </>
  );
};

export default BlogDetail;
