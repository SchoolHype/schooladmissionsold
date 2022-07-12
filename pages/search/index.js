import React from 'react'
import { Filter } from '../../Components/Search/Filter/Filter'
import {List} from '../../Components/Search/List/List'

import styles from './search.module.css'

export default function search() {
  return (
    <div className={styles.searchPage}>
      <Filter />
      <List />
    </div>

  )
}
