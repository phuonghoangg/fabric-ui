import classNames from 'classnames/bind';
import styles from './Apparel.module.scss';
import gridIcon from '~/assets/image/grid_icon.png';
import { useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faCheck, faChevronDown, faChevronUp, faX } from '@fortawesome/free-solid-svg-icons';
import { Checkbox, Collapse, FormControlLabel } from '@mui/material';
import { pink, grey } from '@mui/material/colors';
const cx = classNames.bind(styles);

const intro = {
  title: 'Fabrics Collection    ',
  des: 'If you’re after the best fabrics available, look no further. Here you’ll find all the latest fabric arrivals at Tessuti. Search our collections, where you’ll find more than 1,300+ outstanding textiles ranging from cotton, wool and stretch knits to satin, silks and lace. Whatever fabric cloth you need, however big or small your project, we have plenty of options available to you. Enjoy shopping all our fabrics and if we can help make your selection any easier, don’t hesitate to reach out to our team of experts.    ',
};

const optionSoft = [
  {
    title: 'Best Selling',
  },
  {
    title: 'Featured',
  },
  {
    title: 'Price, low to high',
  },
  {
    title: 'Price, high to low',
  },
];
const typeProduct = [
  {
    id: 1,
    name: 'BamBoo Jersey',
    total: 7,
  },
  {
    id: 2,
    name: 'Bengalene',
    total: 1,
  },
  {
    id: 3,
    name: 'Blend',
    total: 2,
  },
  {
    id: 4,
    name: 'asd',
    total: 2,
  },
  {
    id: 5,
    name: 'zxc',
    total: 2,
  },
  {
    id: 6,
    name: 'vbn',
    total: 2,
  },
];
const typeWeight = [
  {
    id: 1,
    name: 'Weight - Medium',
    total: 7,
  },
  {
    id: 2,
    name: 'Weight - Light',
    total: 7,
  },
  {
    id: 3,
    name: 'Weight - Heavy',
    total: 7,
  },
];

const dataProduct = [
  {
    image:
      'https://cdn.shopify.com/s/files/1/0017/0222/products/IMG_2820_63ba4546-3abc-4a44-8b15-7d513779583c_260x260_crop_top.jpg?v=1680344627',
    name: 'Last Chance Of Doppio Crepe Storm Blue',
    price: '$194.60 per piece',
  },
  {
    image:
      'https://cdn.shopify.com/s/files/1/0017/0222/products/IMG_2820_63ba4546-3abc-4a44-8b15-7d513779583c_260x260_crop_top.jpg?v=1680344627',
    name: 'Last Chance Of Doppio Crepe Storm Blue',
    price: '$194.60 per piece',
  },
  {
    image:
      'https://cdn.shopify.com/s/files/1/0017/0222/products/IMG_2820_63ba4546-3abc-4a44-8b15-7d513779583c_260x260_crop_top.jpg?v=1680344627',
    name: 'Last Chance Of Doppio Crepe Storm Blue',
    price: '$194.60 per piece',
  },
  {
    image:
      'https://cdn.shopify.com/s/files/1/0017/0222/products/IMG_2820_63ba4546-3abc-4a44-8b15-7d513779583c_260x260_crop_top.jpg?v=1680344627',
    name: 'Last Chance Of Doppio Crepe Storm Blue',
    price: '$194.60 per piece',
  },
  {
    image:
      'https://cdn.shopify.com/s/files/1/0017/0222/products/IMG_2820_63ba4546-3abc-4a44-8b15-7d513779583c_260x260_crop_top.jpg?v=1680344627',
    name: 'Last Chance Of Doppio Crepe Storm Blue',
    price: '$194.60 per piece',
  },
  {
    image:
      'https://cdn.shopify.com/s/files/1/0017/0222/products/IMG_2820_63ba4546-3abc-4a44-8b15-7d513779583c_260x260_crop_top.jpg?v=1680344627',
    name: 'Last Chance Of Doppio Crepe Storm Blue',
    price: '$194.60 per piece',
  },
  {
    image:
      'https://cdn.shopify.com/s/files/1/0017/0222/products/IMG_2820_63ba4546-3abc-4a44-8b15-7d513779583c_260x260_crop_top.jpg?v=1680344627',
    name: 'Last Chance Of Doppio Crepe Storm Blue',
    price: '$194.60 per piece',
  },
  {
    image:
      'https://cdn.shopify.com/s/files/1/0017/0222/products/IMG_2820_63ba4546-3abc-4a44-8b15-7d513779583c_260x260_crop_top.jpg?v=1680344627',
    name: 'Last Chance Of Doppio Crepe Storm Blue',
    price: '$194.60 per piece',
  },
  {
    image:
      'https://cdn.shopify.com/s/files/1/0017/0222/products/IMG_2820_63ba4546-3abc-4a44-8b15-7d513779583c_260x260_crop_top.jpg?v=1680344627',
    name: 'Last Chance Of Doppio Crepe Storm Blue',
    price: '$194.60 per piece',
  },
];
const Apparel = () => {
  const [open, setOpen] = useState(false);
  const [openCollapseProduct, setOpenCollapseProduct] = useState(true);
  const [openCollapseWeight, setOpenCollapseWeight] = useState(true);
  const [sort, setSort] = useState('Best Selling');

  const [checkedProduct, setCheckedProduct] = useState([]);
  const [checkedWeight, setCheckedWeight] = useState([]);
  const handleCheckProduct = (id) => {
    setCheckedProduct((prev) => {
      const isChecked = checkedProduct.includes(id);
      if (isChecked) {
        return checkedProduct.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  const handleCheckWeight = (id) => {
    setCheckedWeight((prev) => {
      const isChecked = checkedWeight.includes(id);
      if (isChecked) {
        return checkedWeight.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  const handleClearProduct = (id) => {
    setCheckedProduct((prev) => {
      const isChecked = checkedProduct.includes(id);
      if (isChecked) {
        return checkedProduct.filter((item) => item !== id);
      } else {
      }
    });
  };
  const handleClearWeight = (id) => {
    setCheckedWeight((prev) => {
      const isChecked = checkedWeight.includes(id);
      if (isChecked) {
        return checkedWeight.filter((item) => item !== id);
      } else {
      }
    });
  };
  const hide = () => {
    setOpen(false);
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('intro')}>
        <div className={cx('inner-intro')}>
          <div className={cx('title')}>{intro.title}</div>
          <div className={cx('des')}>{intro.des}</div>
        </div>
      </div>
      <div className={cx('wrap-product')}>
        <div className={cx('sort')}>
          <div className={cx('inner-sort')}>
            <div className={cx('sort-left')}>
              View As <img className={cx('logo-grid')} src={gridIcon} alt="" />
            </div>
            <div className={cx('sort-center')}> 1225 product</div>
            <Tippy
              interactive
              placement="bottom-start"
              onClickOutside={hide}
              visible={open}
              render={(attrs) => (
                <div className={cx('collapse-result')} tabIndex="-1" {...attrs}>
                  <PopperWrapper>
                    <div className={cx('collapse-menu')}>
                      {optionSoft.map((item, index) => (
                        <div
                          onClick={() => setSort(item.title)}
                          className={item.title === sort ? cx('item-sort-active') : cx('item-sort')}
                          key={index}
                        >
                          {item.title}
                        </div>
                      ))}
                    </div>
                  </PopperWrapper>
                </div>
              )}
            >
              <div onClick={() => setOpen(!open)} className={cx('sort-right')}>
                {sort}
                <FontAwesomeIcon className={cx('rotate')} icon={open ? faChevronUp : faChevronDown} />
              </div>
            </Tippy>
          </div>
        </div>
        <div className={cx('product')}>
          <div className={cx('inner-product')}>
            <div className={cx('product-sort')}>
              {/* SORT PRODUCT */}
              {(checkedProduct.length > 0 || checkedWeight.length > 0) && (
                <div className={cx('padding-refine')}>
                  <div className={cx('wrap-title-refine')}>
                    <div className={cx('title-refine')}>Refine By</div>
                    <div
                      onClick={() => {
                        setCheckedProduct([]);
                        setCheckedWeight([]);
                      }}
                      className={cx('clear-all')}
                    >
                      Clear All
                    </div>
                  </div>
                  {/* CHECKED PRODUCT TYPE */}
                  {checkedProduct.map((item, index) => {
                    return (
                      <div key={item} className={cx('item-checked')}>
                        <div>
                          {typeProduct.map((typeItem, index) => (
                            <div key={index}>
                              {typeItem.id === item && (
                                <div className={cx('title-product-type')}>
                                  product type: <span>{typeItem.name}</span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                        <FontAwesomeIcon icon={faX} onClick={() => handleClearProduct(item)} />
                      </div>
                    );
                  })}
                  {/* CHECKED PRODUCT MAP */}
                  {checkedWeight.map((item, index) => {
                    return (
                      <div key={item} className={cx('item-checked')}>
                        <div>
                          {typeWeight.map((typeItem, index) => (
                            <div key={index}>
                              {typeItem.id === item && (
                                <div className={cx('title-product-type')}>
                                  weight: <span>{typeItem.name}</span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                        <FontAwesomeIcon icon={faX} onClick={() => handleClearWeight(item)} />
                      </div>
                    );
                  })}
                </div>
              )}
              {/* PRODUCT TYPE 1 */}

              <div className={cx('product-sort-type')}>
                <div className={cx('wrap-title-collapse')}>
                  <div onClick={() => setOpenCollapseProduct(!openCollapseProduct)} className={cx('title-collapse')}>
                    {openCollapseProduct ? (
                      <FontAwesomeIcon icon={faCaretDown} fontSize={15} />
                    ) : (
                      <FontAwesomeIcon icon={faCaretUp} fontSize={15} />
                    )}
                    <p> product type</p>
                  </div>
                  {checkedProduct.length > 0 && (
                    <div className={cx('clear-type')} onClick={() => setCheckedProduct([])}>
                      Clear
                    </div>
                  )}
                </div>
                <Collapse in={openCollapseProduct} timeout="auto" unmountOnExit>
                  <div className={cx('collapse-des')}>
                    {typeProduct.map((typeItem) => (
                      <div
                        key={typeItem.id}
                        className={cx('flex-checkbox')}
                        onClick={() => {
                          handleCheckProduct(typeItem.id);
                        }}
                      >
                        <div className={cx('wrap-checkbox')} key={typeItem.id}>
                          <input
                            className={cx('checkbox-type')}
                            type="checkbox"
                            checked={checkedProduct.includes(typeItem.id)}
                            onChange={() => handleCheckProduct(typeItem.id)}
                          />
                          {checkedProduct.includes(typeItem.id) && (
                            <FontAwesomeIcon className={cx('check')} icon={faCheck} />
                          )}
                          <label className={checkedProduct.includes(typeItem.id) ? cx('label-active') : cx('')}>
                            {' '}
                            {typeItem.name}
                          </label>
                        </div>
                        <label className={checkedProduct.includes(typeItem.id) ? cx('label-active') : cx('')}>
                          ({typeItem.total})
                        </label>
                      </div>
                    ))}
                  </div>
                </Collapse>
              </div>
              {/* PRODUCT TYPE 2 */}
              <div style={{ paddingTop: 20 }} className={cx('product-sort-type')}>
                <div className={cx('wrap-title-collapse')}>
                  <div onClick={() => setOpenCollapseWeight(!openCollapseWeight)} className={cx('title-collapse')}>
                    {openCollapseWeight ? (
                      <FontAwesomeIcon icon={faCaretDown} fontSize={15} />
                    ) : (
                      <FontAwesomeIcon icon={faCaretUp} fontSize={15} />
                    )}
                    <p> weight</p>
                  </div>
                  {checkedWeight.length > 0 && (
                    <div className={cx('clear-type')} onClick={() => setCheckedWeight([])}>
                      Clear
                    </div>
                  )}
                </div>
                <Collapse in={openCollapseWeight} timeout="auto" unmountOnExit>
                  <div className={cx('collapse-des')}>
                    {typeWeight.map((typeItem) => (
                      <div
                        key={typeItem.id}
                        className={cx('flex-checkbox')}
                        onClick={() => {
                          handleCheckWeight(typeItem.id);
                        }}
                      >
                        <div className={cx('wrap-checkbox')}>
                          <input
                            className={cx('checkbox-type')}
                            type="checkbox"
                            checked={checkedWeight.includes(typeItem.id)}
                            onChange={() => handleCheckWeight(typeItem.id)}
                          />
                          {checkedWeight.includes(typeItem.id) && (
                            <FontAwesomeIcon className={cx('check')} icon={faCheck} />
                          )}
                          <label className={checkedWeight.includes(typeItem.id) ? cx('label-active') : cx('')}>
                            {' '}
                            {typeItem.name}
                          </label>
                        </div>
                        <label className={checkedWeight.includes(typeItem.id) ? cx('label-active') : cx('')}>
                          ({typeItem.total})
                        </label>
                      </div>
                    ))}
                  </div>
                </Collapse>
              </div>
            </div>
            <div className={cx('product-view')}>
              {/* itemmm start */}
              {dataProduct.map((item, index) => {
                return (
                  <div key={index} className={cx('view-item')}>
                    <img className={cx('image-product')} alt="" src={item.image} />
                    <div className={cx('name-product')}>{item.name}</div>
                    <div className={cx('price')}>{item.price}</div>
                  </div>
                );
              })}
            </div>

            {/* Item end */}
          </div>
        </div>
      </div>
      <div className={cx('intro-bottom')}>
        This is the place to for <b>all types of fabric</b>, so consider us your one-stop-fabric-shop. Here at Tessuti
        we've been looking after Australian dressmakers for more than 30 years, providing outstanding quality and
        quantity materials from which to choose. If you're not entirely sure you've selected the right material, just
        order a sample instead. This way you can weight, colour and handle match with total confidence. We want to make
        it as easy and fast for you to find the perfect <b>fabric material</b> for your project.
      </div>
      <div className={cx('send-mail')}>
        <div className={cx('title-mail')}>Stay up to date. Join our mailing list</div>
        <div className={cx('input-mail')}>
          <input placeholder="Email Address" />
          <button>Join</button>
        </div>
      </div>
    </div>
  );
};

export default Apparel;
