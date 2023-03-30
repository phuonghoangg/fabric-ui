import classNames from 'classnames/bind';
import styles from './Blog.module.scss';
import imgBlog1 from '~/assets/image/blog-1.jpg';
import imgBlog2 from '~/assets/image/blog-2.jpg';

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
];
const Blog = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('title-1')}>OUR BLOG</div>
        <div className={cx('title-2')}>Latest From Blog</div>
        <div className={cx('list-blog')}>
          {data.map((item, index) => (
            <div key={index} className={cx('blog')}>
              <img src={item.image} className={cx('image')} alt="" />
              <div className={cx('content')}>
                <div className={cx('title-content')}>{item.title}</div>
                <div className={cx('description')}>{item.description}</div>
                <div className={cx('read-more')}>
                  read more <p>&gt;</p>
                </div>
              </div>
              <div className={cx('date-time')}>
                <div className={cx('date')}>03</div>
                <div className={cx('month')}>APR</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
