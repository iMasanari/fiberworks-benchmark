import { itemMap } from '../../data/items'
// import Item-from './Item.module.css'

type Props = {
  /**
   * ID of Item
   */
  id: string;
  /**
   * Search query, in lowercase
   */
  searchQuery: string;

  key?: any
};

export const Item = ({ id, searchQuery }: Props) => {
  const item = itemMap.get(id)
  if (!item) {
    return null
  }

  const name = item.en.toLowerCase()
  const { nameMarked } = (() => {
    if (!searchQuery) {
      return {
        nameMarked: (
          <span className="Item-name">
            {item.en}
          </span>
        ),
      }
    }
    const searchIndex = name.indexOf(searchQuery)
    if (searchIndex === -1) {
      return {
        nameMarked: (
          <span className="Item-name Item-unmatchedName">
            {item.en}
          </span>
        ),
      }
    }
    return {
      nameMarked: (
        <span className="Item-name">
          {item.en.substring(0, searchIndex)}
          <mark>
            {item.en.substring(searchIndex, searchIndex + searchQuery.length)}
          </mark>
          {item.en.substring(searchIndex + searchQuery.length)}
        </span>
      ),
    }
  })()

  return (
    <div className="Item-wrapper">
      <div className="Item-id">{item.id}</div>
      <div>{nameMarked}</div>
      <div>{item.ja}</div>
    </div>
  )
}
