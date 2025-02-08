import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';
import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const statusFilter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.thumb}>
      <label htmlFor="inputFilter">Find contact by name or number</label>
      <input
        value={statusFilter}
        id="inputFilter"
        className={css.input}
        type="text"
        onChange={evt => {
          dispatch(changeFilter(evt.target.value));
        }}
      />
    </div>
  );
};

export default SearchBox;
