import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { selectFilter } from 'redux/filter/filter-selector';

import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(selectFilter);
  // console.log(filter);
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <label className={css.label}></label>
      <span className={css.filterTitle}>Find contacts by name</span>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </div>
  );
};

export default Filter;
