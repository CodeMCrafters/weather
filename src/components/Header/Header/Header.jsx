import styles from './Header.module.css';

function header({search,setSearch}){
    return(
        <header className={styles.header}>
            <input type="text" name="search" id="search" placeholder='Unesite grad' value={search} onChange={(e) => setSearch(e.target.value)} />
        </header>
    )
}


export default header;

