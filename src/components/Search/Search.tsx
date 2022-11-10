import styles from './Search.module.scss';
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg"
import { useRef } from 'react';
import { Button } from './../Button/Button';

interface SearchProps {
  error: boolean,
  onSearch: (text: string) => void
}

interface FormFields {
  search: HTMLInputElement
}

export const Search = ({ error, onSearch }: SearchProps) => {
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => { // points directly to the form. Plus, with & FormFields we are adding form fields
    event.preventDefault()

    const text = event.currentTarget.search.value;

    if (text) {
      onSearch(text);
    }

    event.currentTarget.search.value = "";
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off"> 
      <div className={styles.search}>
        <label htmlFor="">
          <SearchIcon/>
        </label>
        <input 
          type="text" 
          className={styles.textField} 
          id="search" 
          name="search" 
          placeholder="Search GitHub users here..."
          ref={searchRef}/>
        {error ? <div className={styles.error}>No result</div> : null}
        <Button>Search</Button>
      </div>
    </form>
  )
};
