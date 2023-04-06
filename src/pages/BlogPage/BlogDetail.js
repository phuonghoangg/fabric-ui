import BannerChild from '../components/BannerChild/BannerChild';
import classNames from 'classnames/bind';
import styles from './BlogPage.module.scss';
import imgBlog1 from '~/assets/image/blog-1.jpg';
import imgBlog2 from '~/assets/image/blog-2.jpg';
import { Pagination, Stack } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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

const detail = {
  image: imgBlog1,
  title: 'Kasd tempor diam sea justo dolor',
  description: `
      Kasd tempor diam sea justo dolor
Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren sit stet no diam kasd vero.

Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et, clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat justo dolore sit invidunt.

Est dolor lorem et ea

Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et.

Est dolor lorem et ea

Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat aliquyam et ut.
      `,
  time: '',
};

const BlogDetail = () => {
  return (
    <div className={cx('wrapper')}>
      <BannerChild title="Blog Detail" />
      <div className={cx('inner')}>
        <div className={cx('list-blog')}>
          <div className={cx('blog')}>
            <img src={detail.image} className={cx('image')} alt="" />
            <div className={cx('content')}>
              <div className={cx('title-content')}>{detail.title}</div>
              <div className={cx('description')}>{detail.description}</div>
            </div>
            <div className={cx('date-time')}>
              <div className={cx('date')}>03</div>
              <div className={cx('month')}>APR</div>
            </div>
          </div>

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
                    Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no
                    at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur
                    sadipscing, at tempor amet ipsum diam tempor consetetur at sit.
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
                    Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no
                    at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur
                    sadipscing, at tempor amet ipsum diam tempor consetetur at sit.
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
                    Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no
                    at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur
                    sadipscing, at tempor amet ipsum diam tempor consetetur at sit.
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

export default BlogDetail;
