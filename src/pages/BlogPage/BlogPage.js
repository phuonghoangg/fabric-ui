import BannerChild from '../components/BannerChild/BannerChild';
import classNames from 'classnames/bind';
import styles from './BlogPage.module.scss';
import imgBlog1 from '~/assets/image/blog-1.jpg';
import imgBlog2 from '~/assets/image/blog-2.jpg';
import { Pagination, Stack } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const data = [
  {
    image: imgBlog1,
    title: 'Công ty COMO tặng khẩu trang cho Trường THCS Tùng Thiện Vương & Trường Mần non 3',
    description:
      'Tập thể cán bộ công nhân viên Công ty TNHH CÔ MÔ (COMO) chào mừng các trường trở lại hoạt động dạy và học sau một thời gian dài nghỉ phòng chống dịch COVID 19.',
    time: '',
  },
  {
    image: imgBlog2,
    title: 'Đeo khẩu trang để đẩy lùi dịch bệnh',
    description:
      'Hôm 19-3, báo Tuổi Trẻ đã phối hợp với Công ty TNHH Como tổ chức tọa đàm “Làm thế nào để sử dụng khẩu trang hợp lý?”. Vấn đề đeo khẩu trang và chọn loại khẩu trang nào được đặc biệt quan tâm những ngày qua khi Chính phủ yêu cầu người dân phải đeo khẩu trang nơi công cộng. Hôm 19-3, báo Tuổi Trẻ đã phối hợp với Công ty TNHH Como tổ chức tọa đàm "Làm thế nào để sử dụng khẩu trang hợp lý?".      ',
    time: '',
  },
  {
    image: imgBlog1,
    title: 'Công ty COMO tặng khẩu trang cho Trường THCS Tùng Thiện Vương & Trường Mần non 3',
    description:
      'Tập thể cán bộ công nhân viên Công ty TNHH CÔ MÔ (COMO) chào mừng các trường trở lại hoạt động dạy và học sau một thời gian dài nghỉ phòng chống dịch COVID 19.',
    time: '',
  },
  {
    image: imgBlog2,
    title: 'Đeo khẩu trang để đẩy lùi dịch bệnh',
    description:
      'Hôm 19-3, báo Tuổi Trẻ đã phối hợp với Công ty TNHH Como tổ chức tọa đàm “Làm thế nào để sử dụng khẩu trang hợp lý?”. Vấn đề đeo khẩu trang và chọn loại khẩu trang nào được đặc biệt quan tâm những ngày qua khi Chính phủ yêu cầu người dân phải đeo khẩu trang nơi công cộng. Hôm 19-3, báo Tuổi Trẻ đã phối hợp với Công ty TNHH Como tổ chức tọa đàm "Làm thế nào để sử dụng khẩu trang hợp lý?".      ',
    time: '',
  },
  {
    image: imgBlog1,
    title: 'Công ty COMO tặng khẩu trang cho Trường THCS Tùng Thiện Vương & Trường Mần non 3',
    description:
      'Tập thể cán bộ công nhân viên Công ty TNHH CÔ MÔ (COMO) chào mừng các trường trở lại hoạt động dạy và học sau một thời gian dài nghỉ phòng chống dịch COVID 19.',
    time: '',
  },
  {
    image: imgBlog2,
    title: 'Đeo khẩu trang để đẩy lùi dịch bệnh',
    description:
      'Hôm 19-3, báo Tuổi Trẻ đã phối hợp với Công ty TNHH Como tổ chức tọa đàm “Làm thế nào để sử dụng khẩu trang hợp lý?”. Vấn đề đeo khẩu trang và chọn loại khẩu trang nào được đặc biệt quan tâm những ngày qua khi Chính phủ yêu cầu người dân phải đeo khẩu trang nơi công cộng. Hôm 19-3, báo Tuổi Trẻ đã phối hợp với Công ty TNHH Como tổ chức tọa đàm "Làm thế nào để sử dụng khẩu trang hợp lý?".      ',
    time: '',
  },
];

const BlogPage = () => {
  const navigate = useNavigate();
  return (
    <div className={cx('wrapper')}>
      <BannerChild title="Blog" />
      <div className={cx('inner')}>
        <div className={cx('list-blog')}>
          {data.map((item, index) => (
            <div key={index} className={cx('blog')}>
              <img src={item.image} className={cx('image')} alt="" />
              <div className={cx('content')}>
                <div className={cx('title-content')}>{item.title}</div>
                <div className={cx('description')}>{item.description}</div>
                <div onClick={() => navigate('/blog/1')} className={cx('read-more')}>
                  read more <p>&gt;</p>
                </div>
              </div>
              <div className={cx('date-time')}>
                <div className={cx('date')}>03</div>
                <div className={cx('month')}>APR</div>
              </div>
            </div>
          ))}
          <div className={cx('bla')}>
            <Stack spacing={2}>
              <Pagination size="large" shape="rounded" variant="outlined" count={5} />
            </Stack>
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
            {data.map((item, index) => {
              return (
                <div key={index} className={cx('list-post')}>
                  <img src={item.image} className={cx('image-post')} alt="" />
                  <div className={cx('des-post')}>Lorem ipsum dolor sit amet consec adipis elit</div>
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
